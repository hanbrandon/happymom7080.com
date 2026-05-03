import { getTranslations } from 'next-intl/server';
import ServicesContent from '@/components/services/ServicesContent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ServicesDetail' });

  return {
    title: `${t('postpartumTitle')} | HappyMom Services`,
    description: t('postpartumDesc'),
    openGraph: {
      title: `${t('postpartumTitle')} | HappyMom`,
      description: t('postpartumDesc'),
      locale: locale,
      type: 'website',
    },
  };
}

export default function ServicesPage() {
  return <ServicesContent />;
}
