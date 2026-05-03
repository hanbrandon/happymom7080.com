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

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Postpartum Care & Babysitting",
    "provider": {
      "@type": "LocalBusiness",
      "name": "HappyMom",
      "url": "https://happymom7080.com"
    },
    "description": "Premium postpartum care services and professional babysitting for mothers in the US."
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
