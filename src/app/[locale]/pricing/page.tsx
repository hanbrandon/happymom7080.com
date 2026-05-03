import PricingContent from '@/components/pricing/PricingContent';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'PricingDetail' });

  return {
    title: `${t('heroTag')} | HappyMom`,
    description: t('heroSubtitle'),
    openGraph: {
      title: `${t('heroTag')} | HappyMom`,
      description: t('heroSubtitle'),
      type: 'website',
    },
  };
}

export default function PricingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    "name": "HappyMom Postpartum Care Pricing",
    "description": "Premium postpartum care pricing plans including live-in and commuting options.",
    "priceCurrency": "USD"
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
