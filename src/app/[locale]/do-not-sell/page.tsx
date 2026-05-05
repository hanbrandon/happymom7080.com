import { getTranslations } from 'next-intl/server';
import DoNotSellContent from '@/components/do-not-sell/DoNotSellContent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'DoNotSell' });

  return {
    title: `${t('tag')} | HappyMom`,
    description: t('subtitle'),
  };
}

export default function DoNotSellPage() {
  return <DoNotSellContent />;
}
