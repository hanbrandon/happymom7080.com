import { getTranslations } from 'next-intl/server';
import FAQContent from '@/components/faq/FAQContent';
import { languageAlternates, localizedPath, openGraphLocale, pageMeta } from '@/lib/seo';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const path = '/faq';
  const meta = pageMeta(locale, 'faq');

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: localizedPath(locale, path),
      languages: languageAlternates(path),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: ['/og-image.png'],
      locale: openGraphLocale(locale),
      type: 'website',
    },
  };
}

export default async function FAQPage({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'FAQ' });

  const faqItems = [
    { q: t('items.0.question'), a: t('items.0.answer') },
    { q: t('items.1.question'), a: t('items.1.answer') },
    { q: t('items.8.question'), a: t('items.8.answer') },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
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
