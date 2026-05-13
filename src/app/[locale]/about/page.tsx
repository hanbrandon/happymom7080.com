import AboutContent from '@/components/about/AboutContent';
import { happyMomBusinessSchema, languageAlternates, localizedPath, openGraphLocale, pageMeta } from '@/lib/seo';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const path = '/about';
  const meta = pageMeta(locale, 'about');

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: localizedPath(locale, path),
      languages: languageAlternates(path),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
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
