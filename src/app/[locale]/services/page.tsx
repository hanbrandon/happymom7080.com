import { getTranslations } from 'next-intl/server';
import ServicesContent from '@/components/services/ServicesContent';
import { languageAlternates, localizedPath, openGraphLocale, pageMeta, stripHtml } from '@/lib/seo';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const path = '/services';
  const meta = pageMeta(locale, 'services');

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

export default async function ServicesPage({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ServicesDetail' });
  const path = '/services';
  const isKorean = locale === 'ko';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${localizedPath(locale, path)}#service`,
    name: isKorean ? '해피맘 프리미엄 산후조리 및 베이비시팅' : 'HappyMom Premium Postpartum Care and Babysitting',
    serviceType: isKorean
      ? ['산후조리', '신생아 케어', '베이비시팅', '산모 회복 관리']
      : ['Postpartum care', 'Newborn care', 'Babysitting', 'Maternal recovery support'],
    url: localizedPath(locale, path),
    description: stripHtml(t('postpartumDesc')),
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://happymom7080.com/#localbusiness',
      name: 'HappyMom',
      url: localizedPath(locale),
      telephone: process.env.NEXT_PUBLIC_PHONE_RAW || '+1-213-999-4642',
      email: process.env.NEXT_PUBLIC_EMAIL || 'happymom7080@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Los Angeles',
        addressRegion: 'CA',
        addressCountry: 'US',
      },
    },
    areaServed: [
      { '@type': 'State', name: 'California' },
      { '@type': 'City', name: 'Los Angeles' },
      { '@type': 'City', name: 'Orange County' },
      { '@type': 'City', name: 'Irvine' },
      { '@type': 'City', name: 'Koreatown' },
      { '@type': 'Country', name: 'United States' },
    ],
    audience: {
      '@type': 'PeopleAudience',
      requiredGender: 'Female',
      suggestedMinAge: 18,
    },
    offers: [
      {
        '@type': 'Offer',
        name: isKorean ? '입주 산후조리 서비스' : 'Live-in Postpartum Care',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: isKorean ? '출퇴근 산후조리 서비스' : 'Commuting Postpartum Care',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: isKorean ? '베이비시팅 서비스' : 'Babysitting Service',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesContent />
    </>
  );
}
