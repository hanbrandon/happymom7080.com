import { notFound } from 'next/navigation';
import LocationContent from '@/components/location/LocationContent';
import { happyMomBusinessSchema, languageAlternates, localizedPath, openGraphLocale } from '@/lib/seo';

const VALID_CITIES = [
  'new-york',
  'virginia',
  'dallas',
  'san-francisco',
  'la',
  'irvine',
  'atlanta',
  'new-jersey',
  'other'
];

const CITY_NAME_MAP: Record<string, { ko: string; en: string }> = {
  'new-york': { ko: '뉴욕', en: 'New York' },
  virginia: { ko: '버지니아', en: 'Virginia' },
  dallas: { ko: '달라스', en: 'Dallas' },
  'san-francisco': { ko: '샌프란시스코', en: 'San Francisco' },
  la: { ko: 'LA 엘에이', en: 'Los Angeles' },
  irvine: { ko: '얼바인', en: 'Irvine' },
  atlanta: { ko: '아틀란타', en: 'Atlanta' },
  'new-jersey': { ko: '뉴저지', en: 'New Jersey' },
  other: { ko: '기타 지역', en: 'Other Areas' }
};

interface RouteParams {
  params: Promise<{
    locale: string;
    city: string;
  }>;
}

export async function generateStaticParams() {
  const locales = ['ko', 'en'];
  const params = [];

  for (const locale of locales) {
    for (const city of VALID_CITIES) {
      params.push({ locale, city });
    }
  }

  return params;
}

export async function generateMetadata({ params }: RouteParams) {
  const { locale, city } = await params;
  
  if (!VALID_CITIES.includes(city)) {
    return {};
  }

  const brand = locale === 'ko' 
    ? (process.env.NEXT_PUBLIC_SITE_NAME_KO || '해피맘') 
    : (process.env.NEXT_PUBLIC_SITE_NAME_EN || 'HappyMom');

  const cityName = CITY_NAME_MAP[city][locale === 'ko' ? 'ko' : 'en'];
  const path = `/service-area/${city}`;

  const title = locale === 'ko'
    ? `${cityName} 산후조리 서비스 | ${brand} 프리미엄 케어`
    : `${cityName} Postpartum Care | ${brand} Premium Care`;

  const description = locale === 'ko'
    ? `${cityName} 지역 산모님들을 위한 프리미엄 방문 산후조리 및 신생아 맞춤 케어 서비스. 베테랑 조리사의 맞춤 지원으로 몸과 마음의 완벽한 회복을 돕습니다.`
    : `Premium in-home postpartum care and newborn care services for mothers in ${cityName}. Professional Korean-style care with certified experts.`;

  return {
    title,
    description,
    alternates: {
      canonical: localizedPath(locale, path),
      languages: languageAlternates(path),
    },
    openGraph: {
      title,
      description,
      images: ['/og-image.png'],
      locale: openGraphLocale(locale),
      type: 'website',
    },
  };
}

export default async function LocationPage({ params }: RouteParams) {
  const { locale, city } = await params;

  if (!VALID_CITIES.includes(city)) {
    notFound();
  }

  const cityName = CITY_NAME_MAP[city][locale === 'ko' ? 'ko' : 'en'];
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      ...happyMomBusinessSchema(locale),
      url: localizedPath(locale, `/service-area/${city}`),
      name: `${cityName} Postpartum Care - HappyMom`,
      description: `${cityName} location premium postpartum care and newborn support.`,
      areaServed: {
        '@type': 'City',
        name: CITY_NAME_MAP[city]['en']
      }
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LocationContent city={city} />
    </>
  );
}
