import { getTranslations } from 'next-intl/server';
import PolicyContent from '@/components/policy/PolicyContent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Refund' });

  return {
    title: `${t('tag')} | HappyMom`,
    description: t('subtitle'),
  };
}

export default function PolicyPage() {
  return <PolicyContent />;
}
