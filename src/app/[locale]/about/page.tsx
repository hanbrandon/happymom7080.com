import { getTranslations } from 'next-intl/server';
import AboutContent from '@/components/about/AboutContent';
import { happyMomBusinessSchema, languageAlternates, localizedPath, openGraphLocale } from '@/lib/seo';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'About' });
  const path = '/about';

  return {
    title: `${t('focusTitle')} | HappyMom About`,
    description: t('subtitle'),
    alternates: {
      canonical: localizedPath(locale, path),
      languages: languageAlternates(path),
    },
    openGraph: {
      title: `${t('focusTitle')} | HappyMom`,
      description: t('subtitle'),
      images: ['/og-image.png'],
      locale: openGraphLocale(locale),
      type: 'website',
    },
  };
}

export default async function AboutPage({ params }: { params: { locale: string } }) {
  const { locale } = await params;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      ...happyMomBusinessSchema(locale),
      url: localizedPath(locale, '/about'),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutContent />
    </>
  );
}
