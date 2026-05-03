import TestimonialsContent from '@/components/testimonials/TestimonialsContent';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'TestimonialsPage' });

  return {
    title: `${t('tag')} | HappyMom`,
    description: t('subtitle'),
    openGraph: {
      title: `${t('tag')} | HappyMom`,
      description: t('subtitle'),
      type: 'website',
    },
  };
}

export default function TestimonialsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FeedbackEditor",
    "name": "HappyMom Testimonials",
    "description": "Real stories and feedback from mothers who experienced HappyMom's premium postpartum care.",
    "url": "https://happymom7080.com/testimonials"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TestimonialsContent />
    </>
  );
}
