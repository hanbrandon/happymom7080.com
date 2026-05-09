import PricingContent from '@/components/pricing/PricingContent';
import { getTranslations } from 'next-intl/server';
import { languageAlternates, localizedPath, openGraphLocale } from '@/lib/seo';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'PricingDetail' });
  const path = '/pricing';

  return {
    title: `${t('heroTag')} | HappyMom`,
    description: t('heroSubtitle'),
    alternates: {
      canonical: localizedPath(locale, path),
      languages: languageAlternates(path),
    },
    openGraph: {
      title: `${t('heroTag')} | HappyMom`,
      description: t('heroSubtitle'),
      images: ['/og-image.png'],
      locale: openGraphLocale(locale),
      type: 'website',
    },
  };
}

export default async function PricingPage({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'PricingDetail' });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: locale === 'ko' ? '해피맘 산후조리 서비스 요금 안내' : 'HappyMom Postpartum Care Pricing',
    description: t('heroSubtitle'),
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
