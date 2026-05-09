import TestimonialsContent from '@/components/testimonials/TestimonialsContent';
import { getTranslations } from 'next-intl/server';
import { languageAlternates, localizedPath, openGraphLocale } from '@/lib/seo';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'TestimonialsPage' });
  const path = '/testimonials';

  return {
    title: `${t('tag')} | HappyMom`,
    description: t('subtitle'),
    alternates: {
      canonical: localizedPath(locale, path),
      languages: languageAlternates(path),
    },
    openGraph: {
      title: `${t('tag')} | HappyMom`,
      description: t('subtitle'),
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
    description: locale === 'ko'
      ? '해피맘의 프리미엄 산후조리 서비스를 경험한 산모들의 실제 후기를 확인하세요.'
      : "Real stories and feedback from mothers who experienced HappyMom's premium postpartum care.",
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
