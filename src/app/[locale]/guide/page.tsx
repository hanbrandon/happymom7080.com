import { getTranslations } from 'next-intl/server';
import GuideContent from '@/components/guide/GuideContent';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Guide' });

  return {
    title: `${t('heroTitle')} | HappyMom Guide`,
    description: t('heroSubtitle'),
    openGraph: {
      title: `${t('heroTitle')} | HappyMom`,
      description: t('heroSubtitle'),
      locale: locale,
      type: 'website',
    },
  };
}

export default function GuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to apply for HappyMom Postpartum Care",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Consultation Request",
        "text": "Contact HappyMom via phone or website to request a consultation."
      },
      {
        "@type": "HowToStep",
        "name": "Service Selection",
        "text": "Consult with the director to choose the best service for your needs."
      },
      {
        "@type": "HowToStep",
        "name": "Contract Submission",
        "text": "Review and submit the signed contract via email."
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GuideContent />
    </>
  );
}
