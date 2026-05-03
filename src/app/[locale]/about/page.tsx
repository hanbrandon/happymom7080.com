import { getTranslations } from 'next-intl/server';
import AboutContent from '@/components/about/AboutContent';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'About' });

  return {
    title: `${t('focusTitle')} | HappyMom About`,
    description: t('subtitle'),
    openGraph: {
      title: `${t('focusTitle')} | HappyMom`,
      description: t('subtitle'),
      locale: locale,
      type: 'website',
    },
  };
}

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "HappyMom",
      "description": "Professional postpartum care and newborn support services in the United States.",
      "url": "https://happymom7080.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutContent />
    </>
  );
}
