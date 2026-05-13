import PricingContent from '@/components/pricing/PricingContent';
import { languageAlternates, localizedPath, openGraphLocale, pageMeta } from '@/lib/seo';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const path = '/pricing';
  const meta = pageMeta(locale, 'pricing');

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

export default async function PricingPage({ params }: { params: { locale: string } }) {
  const { locale } = await params;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: locale === 'ko' ? '해피맘 산후조리 서비스 요금 안내' : 'HappyMom Postpartum Care Pricing',
    description: pageMeta(locale, 'pricing').description,
    url: localizedPath(locale, '/pricing'),
    itemListElement: [
      {
        '@type': 'Offer',
        name: locale === 'ko' ? '입주 산후조리' : 'Live-in Postpartum Care',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        name: locale === 'ko' ? '출퇴근 산후조리' : 'Commuting Postpartum Care',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        name: locale === 'ko' ? '베이비시팅' : 'Babysitting',
        priceCurrency: 'USD',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PricingContent />
    </>
  );
}
