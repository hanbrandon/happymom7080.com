import { getTranslations } from 'next-intl/server';
import PrivacyContent from '@/components/privacy/PrivacyContent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Privacy' });

  return {
    title: `${t('tag')} | HappyMom`,
    description: t('subtitle'),
  };
}

export default function PrivacyPage() {
  return <PrivacyContent />;
}
