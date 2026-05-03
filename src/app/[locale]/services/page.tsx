import { getTranslations } from 'next-intl/server';
import ServicesContent from '@/components/services/ServicesContent';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ServicesDetail' });

  const baseUrl = 'https://happymom7080.com';
  const path = '/services';

  return {
    title: `${t('postpartumTitle')} | HappyMom Services`,
    description: t('postpartumDesc'),
    alternates: {
      canonical: locale === 'ko' ? `${baseUrl}${path}` : `${baseUrl}/en${path}`,
      languages: {
        'ko-KR': `${baseUrl}${path}`,
        'en-US': `${baseUrl}/en${path}`,
      },
    },
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
  const baseUrl = 'https://happymom7080.com';

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": locale === 'ko' ? "전문 산후조리 및 아기돌봄 서비스" : "Premium Postpartum Care & Babysitting",
    "provider": {
      "@type": "LocalBusiness",
      "name": "HappyMom",
      "url": locale === 'ko' ? `${baseUrl}/services` : `${baseUrl}/en/services`
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
