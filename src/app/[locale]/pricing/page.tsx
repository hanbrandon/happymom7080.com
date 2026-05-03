import { getTranslations } from 'next-intl/server';
import PricingContent from '@/components/pricing/PricingContent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'PricingDetail' });

  return {
    title: `${t('postpartumTitle')} | HappyMom Pricing`,
    description: t('heroSubtitle'),
    openGraph: {
      title: `${t('postpartumTitle')} | HappyMom`,
      description: t('heroSubtitle'),
      locale: locale,
      type: 'website',
    },
  };
}

export default function PricingPage() {
  return <PricingContent />;
}
