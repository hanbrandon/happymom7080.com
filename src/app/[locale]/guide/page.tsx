import { getTranslations } from 'next-intl/server';
import GuideContent from '@/components/guide/GuideContent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
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
  return <GuideContent />;
}
