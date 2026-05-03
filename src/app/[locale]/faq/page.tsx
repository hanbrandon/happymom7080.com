import { getTranslations } from 'next-intl/server';
import FAQContent from '@/components/faq/FAQContent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'FAQ' });

  return {
    title: `FAQ | HappyMom`,
    description: t('subtitle'),
    openGraph: {
      title: `FAQ | HappyMom`,
      description: t('subtitle'),
      locale: locale,
      type: 'website',
    },
  };
}

export default function FAQPage() {
  return <FAQContent />;
}
