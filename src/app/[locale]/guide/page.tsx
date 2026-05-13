import { getTranslations } from 'next-intl/server';
import GuideContent from '@/components/guide/GuideContent';
import { languageAlternates, localizedPath, openGraphLocale, pageMeta, stripHtml } from '@/lib/seo';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const path = '/guide';
  const meta = pageMeta(locale, 'guide');

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

export default async function GuidePage({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Guide' });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: locale === 'ko' ? '해피맘 산후조리 서비스 신청 방법' : 'How to apply for HappyMom Postpartum Care',
    description: pageMeta(locale, 'guide').description,
    url: localizedPath(locale, '/guide'),
    step: [
      {
        '@type': 'HowToStep',
        name: t('step01Title'),
        text: stripHtml(t.raw('step01Desc')),
      },
      {
        '@type': 'HowToStep',
        name: t('step02Title'),
        text: t('step02Desc'),
      },
      {
        '@type': 'HowToStep',
        name: t('step03Title'),
        text: stripHtml(t.raw('step03Desc')),
      },
      {
        '@type': 'HowToStep',
        name: t('step04Title'),
        text: t('step04Desc'),
      },
      {
        '@type': 'HowToStep',
        name: t('step05Title'),
        text: t('step05Desc'),
      },
      {
        '@type': 'HowToStep',
        name: t('step06Title'),
        text: t('step06Desc'),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GuideContent />
    </>
  );
}
