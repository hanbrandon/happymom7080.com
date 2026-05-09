import { getTranslations } from 'next-intl/server';
import TermsContent from '@/components/terms/TermsContent';
import { languageAlternates, localizedPath } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Terms' });

  return {
    title: `${t('tag')} | HappyMom`,
    description: t('subtitle'),
    alternates: {
      canonical: localizedPath(locale, '/terms'),
      languages: languageAlternates('/terms'),
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default function TermsPage() {
  return <TermsContent />;
}
