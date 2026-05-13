import ContactContent from '@/components/contact/ContactContent';
import { happyMomBusinessSchema, languageAlternates, localizedPath, openGraphLocale, pageMeta } from '@/lib/seo';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const path = '/contact';
  const meta = pageMeta(locale, 'contact');

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

export default async function ContactPage({ params }: { params: { locale: string } }) {
  const { locale } = await params;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    mainEntity: happyMomBusinessSchema(locale),
    url: localizedPath(locale, '/contact'),
    description: pageMeta(locale, 'contact').description,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactContent />
    </>
  );
}
