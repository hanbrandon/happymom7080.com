import { getTranslations } from 'next-intl/server';
import TermsContent from '@/components/terms/TermsContent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Terms' });

  return {
    title: `${t('tag')} | HappyMom`,
    description: t('subtitle'),
  };
}

export default function TermsPage() {
  return <TermsContent />;
}
