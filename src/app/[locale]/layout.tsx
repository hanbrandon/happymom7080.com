import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import type { Metadata } from "next";
import { Outfit, Noto_Sans_KR } from "next/font/google";
import "../globals.css";

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

export const metadata: Metadata = {
  title: "해피맘 (HappyMom) | 프리미엄 미국 산후조리 서비스",
  description: "미국 전역 산모님들을 위한 프리미엄 산후조리, 맞춤형 신생아 케어 전문가 그룹 해피맘입니다.",
};

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
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
