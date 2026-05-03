import TestimonialsContent from '@/components/testimonials/TestimonialsContent';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'TestimonialsPage' });

  const baseUrl = 'https://happymom7080.com';
  const path = '/testimonials';

  return {
    title: `${t('tag')} | HappyMom`,
    description: t('subtitle'),
    alternates: {
      canonical: `${baseUrl}/${locale}${path}`,
      languages: {
        'ko-KR': `${baseUrl}/ko${path}`,
        'en-US': `${baseUrl}/en${path}`,
      },
    },
    openGraph: {
      title: `${t('tag')} | HappyMom`,
      description: t('subtitle'),
      locale: locale,
      type: 'website',
    },
  };
}

export default async function TestimonialsPage({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'TestimonialsPage' });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FeedbackEditor",
    "name": locale === 'ko' ? "해피맘 이용 후기" : "HappyMom Testimonials",
    "description": locale === 'ko' 
      ? "해피맘의 프리미엄 산후조리를 경험하신 산모님들의 생생한 목소리를 확인하세요." 
      : "Real stories and feedback from mothers who experienced HappyMom's premium postpartum care.",
    "url": `https://happymom7080.com/${locale}/testimonials`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TestimonialsContent />
    </>
  );
}
