import { getTranslations } from 'next-intl/server';
import ContactContent from '@/components/contact/ContactContent';
import { happyMomBusinessSchema, languageAlternates, localizedPath, openGraphLocale } from '@/lib/seo';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Contact' });
  const path = '/contact';

  return {
    title: t('browserTitle'),
    description: t('subtitle'),
    alternates: {
      canonical: localizedPath(locale, path),
      languages: languageAlternates(path),
    },
    openGraph: {
      title: 'Contact | HappyMom',
      description: t('subtitle'),
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
    description: locale === 'ko'
      ? '해피맘 서비스에 대한 문의와 상담을 도와드립니다.'
      : 'Contact us for any questions regarding HappyMom services.',
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
