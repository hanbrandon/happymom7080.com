import { getTranslations } from 'next-intl/server';
import DoNotSellContent from '@/components/do-not-sell/DoNotSellContent';
import { languageAlternates, localizedPath } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'DoNotSell' });

  return {
    title: `${t('tag')} | HappyMom`,
    description: t('subtitle'),
    alternates: {
      canonical: localizedPath(locale, '/do-not-sell'),
      languages: languageAlternates('/do-not-sell'),
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default function DoNotSellPage() {
  return <DoNotSellContent />;
}
