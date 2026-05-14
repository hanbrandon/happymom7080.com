import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Script from 'next/script';
import { Outfit, Noto_Sans_KR } from "next/font/google";
import "../globals.css";
import PageTransition from '@/components/ui/PageTransition';
import { languageAlternates, localizedPath, openGraphLocale } from '@/lib/seo';

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
  const brand = locale === 'ko' 
    ? (process.env.NEXT_PUBLIC_SITE_NAME_KO || '해피맘') 
    : (process.env.NEXT_PUBLIC_SITE_NAME_EN || 'HappyMom');

  return {
    title: t('title', { brand }),
    description: t('description', { brand }),
    metadataBase: new URL('https://happymom7080.com'),
    alternates: {
      canonical: localizedPath(locale),
      languages: languageAlternates(),
    },
    openGraph: {
      title: t('title', { brand }),
      description: t('description', { brand }),
      url: 'https://happymom7080.com',
      siteName: process.env.NEXT_PUBLIC_SITE_NAME_EN || 'HappyMom',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${process.env.NEXT_PUBLIC_SITE_NAME_EN || 'HappyMom'} Care`,
        },
      ],
      locale: openGraphLocale(locale),
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title', { brand }),
      description: t('description', { brand }),
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
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }
 
  // Receiving messages provided in `i18n/request.ts`
  const messages = await getMessages();
 
  return (
    <html lang={locale} className={`${outfit.variable} ${notoTabsKR.variable}`} suppressHydrationWarning>
      <body className="antialiased selection:bg-black selection:text-white">
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FEKS3PE59C"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FEKS3PE59C');
          `}
        </Script>
        <NextIntlClientProvider messages={messages}>
          <PageTransition>
            {children}
          </PageTransition>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
