import { getTranslations } from 'next-intl/server';
import AboutContent from '@/components/about/AboutContent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
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
  return <AboutContent />;
}
