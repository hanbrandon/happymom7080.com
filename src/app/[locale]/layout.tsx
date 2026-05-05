import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import type { Metadata } from "next";
import { Outfit, Noto_Sans_KR } from "next/font/google";
import "../globals.css";
import PageTransition from '@/components/ui/PageTransition';

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const notoTabsKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
    metadataBase: new URL('https://happymom7080.com'),
    alternates: {
      canonical: '/',
      languages: {
        'ko-KR': '/ko',
        'en-US': '/en',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: 'https://happymom7080.com',
      siteName: 'HappyMom',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'HappyMom Care',
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/og-image.png'],
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/favicon.ico',
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  // Receiving messages provided in `i18n/request.ts`
  const messages = await getMessages();
 
  return (
    <html lang={locale} className={`${outfit.variable} ${notoTabsKR.variable}`} suppressHydrationWarning>
      <body className="antialiased selection:bg-black selection:text-white">
        <NextIntlClientProvider messages={messages}>
          <PageTransition>
            {children}
          </PageTransition>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
