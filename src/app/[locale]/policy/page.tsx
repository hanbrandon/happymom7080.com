import { getTranslations } from 'next-intl/server';
import PolicyContent from '@/components/policy/PolicyContent';
import { languageAlternates, localizedPath } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Refund' });

  return {
    title: `${t('tag')} | HappyMom`,
    description: t('subtitle'),
    alternates: {
      canonical: localizedPath(locale, '/policy'),
      languages: languageAlternates('/policy'),
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default function PolicyPage() {
  return <PolicyContent />;
}
