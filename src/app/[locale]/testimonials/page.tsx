import { getTranslations } from 'next-intl/server';
import TestimonialsContent from '@/components/testimonials/TestimonialsContent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Testimonials' });

  return {
    title: `${t('title')} | HappyMom Testimonials`,
    description: t('subtitle'),
    openGraph: {
      title: `${t('title')} | HappyMom`,
      description: t('subtitle'),
      locale: locale,
      type: 'website',
    },
  };
}

export default function TestimonialsPage() {
  return <TestimonialsContent />;
}
