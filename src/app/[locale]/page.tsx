import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import Mission from '@/components/home/Mission';
import Story from '@/components/home/Story';
import Services from '@/components/home/Services';
import Pricing from '@/components/home/Pricing';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import Contact from '@/components/home/Contact';
import Footer from '@/components/layout/Footer';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Hero' });

  const baseUrl = 'https://happymom7080.com';

  return {
    title: `HappyMom | ${t('title1')} ${t('title2')}`,
    description: locale === 'ko' 
      ? "미국 전역 산모를 위한 전문 산후조리 및 신생아 케어 서비스. 전문가의 손길로 정성껏 모십니다."
      : "Professional Postpartum Care for Mothers Across the US. Expert newborn support and maternal healing.",
    alternates: {
      canonical: locale === 'ko' ? baseUrl : `${baseUrl}/en`,
      languages: {
        'ko-KR': baseUrl,
        'en-US': `${baseUrl}/en`,
        'x-default': baseUrl,
      },
    },
    openGraph: {
      title: `HappyMom | Premium Postpartum Care`,
      description: locale === 'ko' ? "정성과 사랑으로 함께하는 해피맘 산후조리" : "Supporting mothers through their journey into motherhood with expert care.",
      locale: locale,
      type: 'website',
    },
  };
}

export default async function Home({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const baseUrl = 'https://happymom7080.com';
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "HappyMom",
    "image": "https://happymom7080.com/logo.png",
    "url": locale === 'ko' ? baseUrl : `${baseUrl}/en`,
    "telephone": process.env.NEXT_PUBLIC_PHONE_RAW || "12139994642",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "description": locale === 'ko' 
      ? "미국 전역 산모를 위한 전문 산후조리 및 신생아 케어 서비스. 숙련된 전문가의 정성 어린 케어를 경험해 보세요."
      : "Professional Postpartum Care for Mothers Across the US. Expert newborn support and maternal healing."
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <Mission />
      <Story />
      <Services />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
