import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Legacy URL Handling: Redirect any path containing "/home" to the root of the locale or root
  // Example: /en/home -> /en, /ko/home -> /ko, /home -> /
  if (pathname.includes('/home')) {
    // Check if it starts with a locale
    const localeMatch = pathname.match(/^\/(en|ko)\/home/);
    if (localeMatch) {
      const locale = localeMatch[1];
      const newUrl = new URL(`/${locale}`, request.url);
      return NextResponse.redirect(newUrl, 301);
    }
    
    // If it's just /home or something else with home but no locale prefix
    if (pathname === '/home' || pathname === '/home/') {
      return NextResponse.redirect(new URL('/', request.url), 301);
    }
    
    // Generic "contains home" - if it's like /some/path/home
    // We can decide to redirect to the home page of the current locale
    // But usually /en/home is the main legacy pattern.
  }

  return intlMiddleware(request);
}

export const config = {
  // Match all pathnames except for
  // - /api (API routes)
  // - /_next (Next.js internals)
  // - /_static (inside /public)
  // - all root files inside /public (e.g. /favicon.ico)
  // - any path with a file extension (static assets in subdirectories)
  matcher: ['/((?!api|_next|_static|_vercel|.*\\..*).*)']
};
