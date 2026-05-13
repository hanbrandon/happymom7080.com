import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);
const CANONICAL_HOST = 'happymom7080.com';

function canonicalUrl(path: string) {
  return new URL(path, `https://${CANONICAL_HOST}`);
}

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const host = request.headers.get('host')?.split(':')[0] ?? request.nextUrl.hostname;
  const forwardedProto = request.headers.get('x-forwarded-proto');
  const isHttp = request.nextUrl.protocol === 'http:' || forwardedProto === 'http';
  const isWww = host === `www.${CANONICAL_HOST}`;
  const shouldNormalizeHost = host === CANONICAL_HOST || isWww;

  const decodedPathname = decodeURIComponent(pathname);

  const legacyRedirects: Record<string, string> = {
    '/문의': '/contact',
    '/happymom-postpartum-care-services-agreement-4': '/en/guide',
    '/wp-content/uploads/2024/10/Happymom-POSTPARTUM-CARE-SERVICES-AGREEMENT-2.pdf': '/en/guide',
  };

  const normalizedLegacyPath = decodedPathname.endsWith('/') && decodedPathname !== '/'
    ? decodedPathname.slice(0, -1)
    : decodedPathname;

  if (legacyRedirects[normalizedLegacyPath]) {
    return NextResponse.redirect(canonicalUrl(legacyRedirects[normalizedLegacyPath]), 301);
  }

  if (shouldNormalizeHost && (isHttp || isWww)) {
    return NextResponse.redirect(
      canonicalUrl(`${pathname}${request.nextUrl.search}`),
      301,
    );
  }

  // Legacy URL Handling: Redirect any path containing "/home" to the root of the locale or root
  // Example: /en/home -> /en, /ko/home -> /ko, /home -> /
  if (pathname.includes('/home')) {
    // Check if it starts with a locale
    const localeMatch = pathname.match(/^\/(en|ko)\/home/);
    if (localeMatch) {
      const locale = localeMatch[1];
      const newUrl = canonicalUrl(`/${locale}`);
      return NextResponse.redirect(newUrl, 301);
    }
    
    // If it's just /home or something else with home but no locale prefix
    if (pathname === '/home' || pathname === '/home/') {
      return NextResponse.redirect(canonicalUrl('/'), 301);
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
  matcher: [
    '/wp-content/:path*',
    '/((?!api|_next|_static|_vercel|.*\\..*).*)',
  ]
};
