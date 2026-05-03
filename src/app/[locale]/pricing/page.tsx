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
      locale: locale,
      type: 'website',
    },
  };
}

export default async function PricingPage({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'PricingDetail' });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    "name": locale === 'ko' ? "해피맘 산후조리 서비스 요금 안내" : "HappyMom Postpartum Care Pricing",
    "description": locale === 'ko' 
      ? "입주형 및 출퇴근형 산후조리 서비스의 합리적인 가격 플랜을 확인하세요." 
      : "Premium postpartum care pricing plans including live-in and commuting options.",
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
