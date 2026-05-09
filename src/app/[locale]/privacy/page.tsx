import { getTranslations } from 'next-intl/server';
import PrivacyContent from '@/components/privacy/PrivacyContent';
import { languageAlternates, localizedPath } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Privacy' });

  return {
    title: `${t('tag')} | HappyMom`,
    description: t('subtitle'),
    alternates: {
      canonical: localizedPath(locale, '/privacy'),
      languages: languageAlternates('/privacy'),
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default function PrivacyPage() {
  return <PrivacyContent />;
}
