export const BASE_URL = 'https://happymom7080.com';

export type Locale = 'ko' | 'en';

export const SUPPORTED_LOCALES: Locale[] = ['ko', 'en'];

export function isLocale(locale: string): locale is Locale {
  return locale === 'ko' || locale === 'en';
}

export function getLocale(locale: string): Locale {
  return isLocale(locale) ? locale : 'ko';
}

export function localizedPath(locale: string, path = '') {
  const normalizedPath = path === '/' ? '' : path;
  return getLocale(locale) === 'ko'
    ? `${BASE_URL}${normalizedPath}`
    : `${BASE_URL}/en${normalizedPath}`;
}

export function languageAlternates(path = '') {
  const normalizedPath = path === '/' ? '' : path;
  return {
    'ko-KR': `${BASE_URL}${normalizedPath}`,
    'en-US': `${BASE_URL}/en${normalizedPath}`,
    'x-default': `${BASE_URL}${normalizedPath}`,
  };
}

export function openGraphLocale(locale: string) {
  return getLocale(locale) === 'ko' ? 'ko_KR' : 'en_US';
}

export function stripHtml(value: string) {
  return value.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

export function happyMomBusinessSchema(locale: string) {
  const currentLocale = getLocale(locale);
  const isKorean = currentLocale === 'ko';

  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ChildCare'],
    '@id': `${BASE_URL}/#localbusiness`,
    name: isKorean ? '해피맘' : 'HappyMom',
    alternateName: 'HappyMom',
    image: `${BASE_URL}/logo.png`,
    logo: `${BASE_URL}/logo.png`,
    url: localizedPath(currentLocale),
    telephone: process.env.NEXT_PUBLIC_PHONE_RAW || '+12139994642',
    email: process.env.NEXT_PUBLIC_EMAIL || 'happymom7080@gmail.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Los Angeles',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'State', name: 'California' },
      { '@type': 'City', name: 'Los Angeles' },
      { '@type': 'City', name: 'Orange County' },
      { '@type': 'Country', name: 'United States' },
    ],
    knowsLanguage: ['ko-KR', 'en-US'],
    serviceType: isKorean
      ? ['산후조리 서비스', '신생아 케어', '베이비시팅']
      : ['Postpartum care', 'Newborn care', 'Babysitting'],
    description: isKorean
      ? '미국 전역의 산모와 신생아를 위한 프리미엄 방문 산후조리, 신생아 케어, 베이비시팅 서비스입니다.'
      : 'Premium in-home postpartum care, newborn support, and babysitting services for mothers across the United States.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: isKorean ? '해피맘 케어 서비스' : 'HappyMom Care Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: isKorean ? '입주 산후조리' : 'Live-in Postpartum Care',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: isKorean ? '출퇴근 산후조리' : 'Commuting Postpartum Care',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: isKorean ? '베이비시팅' : 'Babysitting',
          },
        },
      ],
    },
  };
}
