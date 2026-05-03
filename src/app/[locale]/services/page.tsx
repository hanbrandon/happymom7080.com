import { getTranslations } from 'next-intl/server';
import ServicesContent from '@/components/services/ServicesContent';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ServicesDetail' });

  return {
    title: `${t('postpartumTitle')} | HappyMom Services`,
    description: t('postpartumDesc'),
    openGraph: {
      title: `${t('postpartumTitle')} | HappyMom`,
      description: t('postpartumDesc'),
      locale: locale,
      type: 'website',
    },
  };
}

export default async function ServicesPage({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ServicesDetail' });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": locale === 'ko' ? "전문 산후조리 및 아기돌봄 서비스" : "Premium Postpartum Care & Babysitting",
    "provider": {
      "@type": "LocalBusiness",
      "name": "HappyMom",
      "url": `https://happymom7080.com/${locale}`
    },
    "description": t('postpartumDesc')
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesContent />
    </>
  );
}
