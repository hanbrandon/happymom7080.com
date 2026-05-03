import { getTranslations } from 'next-intl/server';
import GuideContent from '@/components/guide/GuideContent';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Guide' });

  const baseUrl = 'https://happymom7080.com';
  const path = '/guide';

  return {
    title: `${t('heroTitle').replace('|', ' ')} | HappyMom Guide`,
    description: t('heroSubtitle'),
    alternates: {
      canonical: locale === 'ko' ? `${baseUrl}${path}` : `${baseUrl}/en${path}`,
      languages: {
        'ko-KR': `${baseUrl}${path}`,
        'en-US': `${baseUrl}/en${path}`,
      },
    },
    openGraph: {
      title: `${t('heroTitle').replace('|', ' ')} | HappyMom`,
      description: t('heroSubtitle'),
      locale: locale,
      type: 'website',
    },
  };
}

export default async function GuidePage({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Guide' });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": locale === 'ko' ? "해피맘 산후조리 서비스 신청 방법" : "How to apply for HappyMom Postpartum Care",
    "step": [
      {
        "@type": "HowToStep",
        "name": t('step01Title'),
        "text": t.raw('step01Desc').replace(/<[^>]*>?/gm, '')
      },
      {
        "@type": "HowToStep",
        "name": t('step02Title'),
        "text": t('step02Desc')
      },
      {
        "@type": "HowToStep",
        "name": t('step03Title'),
        "text": t.raw('step03Desc').replace(/<[^>]*>?/gm, '')
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GuideContent />
    </>
  );
}
