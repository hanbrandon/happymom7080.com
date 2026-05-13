import TestimonialsContent from '@/components/testimonials/TestimonialsContent';
import { languageAlternates, localizedPath, openGraphLocale, pageMeta } from '@/lib/seo';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const path = '/testimonials';
  const meta = pageMeta(locale, 'testimonials');

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

export default async function TestimonialsPage({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const path = '/testimonials';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: locale === 'ko' ? '해피맘 이용 후기' : 'HappyMom Testimonials',
    description: pageMeta(locale, 'testimonials').description,
    url: localizedPath(locale, path),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TestimonialsContent />
    </>
  );
}
