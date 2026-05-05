import PricingContent from '@/components/pricing/PricingContent';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'PricingDetail' });

  const baseUrl = 'https://happymom7080.com';
  const path = '/pricing';

  return {
    title: `${t('heroTag')} | HappyMom`,
    description: t('heroSubtitle'),
    alternates: {
      canonical: locale === 'ko' ? `${baseUrl}${path}` : `${baseUrl}/en${path}`,
      languages: {
        'ko-KR': `${baseUrl}${path}`,
        'en-US': `${baseUrl}/en${path}`,
      },
    },
    openGraph: {
      title: `${t('heroTag')} | HappyMom`,
      description: t('heroSubtitle'),
      images: ['/og-image.png'],
      locale: locale,
      type: 'website',
    },
  };
}

export default async function PricingPage({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'PricingDetail' });
  const baseUrl = 'https://happymom7080.com';

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
