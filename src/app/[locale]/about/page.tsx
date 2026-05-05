import { getTranslations } from 'next-intl/server';
import AboutContent from '@/components/about/AboutContent';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'About' });

  const baseUrl = 'https://happymom7080.com';
  const path = '/about';

  return {
    title: `${t('focusTitle')} | HappyMom About`,
    description: t('subtitle'),
    alternates: {
      canonical: locale === 'ko' ? `${baseUrl}${path}` : `${baseUrl}/en${path}`,
      languages: {
        'ko-KR': `${baseUrl}${path}`,
        'en-US': `${baseUrl}/en${path}`,
      },
    },
    openGraph: {
      title: `${t('focusTitle')} | HappyMom`,
      description: t('subtitle'),
      images: ['/og-image.png'],
      locale: locale,
      type: 'website',
    },
  };
}

export default async function AboutPage({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'About' });
  const baseUrl = 'https://happymom7080.com';

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "HappyMom",
      "description": locale === 'ko' 
        ? "해피맘은 미국 전역의 산모님들을 위한 프리미엄 산후조리 및 신생아 케어 전문 기관입니다." 
        : "Professional postpartum care and newborn support services in the United States.",
      "url": locale === 'ko' ? `${baseUrl}/about` : `${baseUrl}/en/about`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutContent />
    </>
  );
}
