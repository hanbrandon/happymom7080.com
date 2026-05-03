import { getTranslations } from 'next-intl/server';
import FAQContent from '@/components/faq/FAQContent';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'FAQ' });

  const baseUrl = 'https://happymom7080.com';
  const path = '/faq';

  return {
    title: `FAQ | HappyMom`,
    description: t('subtitle'),
    alternates: {
      canonical: locale === 'ko' ? `${baseUrl}${path}` : `${baseUrl}/en${path}`,
      languages: {
        'ko-KR': `${baseUrl}${path}`,
        'en-US': `${baseUrl}/en${path}`,
      },
    },
    openGraph: {
      title: `FAQ | HappyMom`,
      description: t('subtitle'),
      locale: locale,
      type: 'website',
    },
  };
}

export default async function FAQPage({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'FAQ' });

  // 번역 파일에서 질문/답변 목록 가져오기
  const faqItems = [
    { q: t('items.0.question'), a: t('items.0.answer') },
    { q: t('items.1.question'), a: t('items.1.answer') },
    { q: t('items.8.question'), a: t('items.8.answer') }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FAQContent />
    </>
  );
}
