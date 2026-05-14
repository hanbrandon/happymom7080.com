export const BASE_URL = 'https://happymom7080.com';

export const SITE_NAME_KO = process.env.NEXT_PUBLIC_SITE_NAME_KO || '해피맘';
export const SITE_NAME_EN = process.env.NEXT_PUBLIC_SITE_NAME_EN || 'HappyMom';

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

const pageMetadata = {
  ko: {
    home: {
      title: `${SITE_NAME_KO} | 미국 산후조리, 신생아 케어, 방문 산후도우미`,
      description: `${SITE_NAME_KO}은 LA, 오렌지카운티, 캘리포니아와 미국 전역 산모를 위한 방문 산후조리, 신생아 케어, 입주형/출퇴근형 산후도우미 서비스를 제공합니다.`,
    },
    about: {
      title: `${SITE_NAME_KO} 소개 | 미국 방문 산후조리 전문 케어팀`,
      description: `풍부한 경험과 검증된 케어를 바탕으로 산모 회복, 신생아 돌봄, 가족 지원을 돕는 ${SITE_NAME_KO}의 산후조리 철학과 전문성을 소개합니다.`,
    },
    services: {
      title: '산후조리 서비스 | 입주, 출퇴근, 신생아 케어, 베이비시팅',
      description: `${SITE_NAME_KO}은 산모 회복 관리, 신생아 케어, 수유 보조, 식사 준비, 가정 환경 관리, 베이비시팅까지 맞춤형 산후조리 서비스를 제공합니다.`,
    },
    pricing: {
      title: `산후조리 비용 | ${SITE_NAME_KO} 입주형, 출퇴근형, 베이비시팅 요금`,
      description: '입주형 산후조리, 출퇴근형 산후조리, 베이비시팅 서비스의 주간 비용, 계약금, 서비스 포함 항목을 투명하게 확인하세요.',
    },
    testimonials: {
      title: `산후조리 후기 | ${SITE_NAME_KO} 이용 산모 리뷰`,
      description: `${SITE_NAME_KO} 산후조리와 신생아 케어를 경험한 산모들의 실제 후기, 추천 이유, 서비스 만족 포인트를 확인하세요.`,
    },
    faq: {
      title: `자주 묻는 질문 | 미국 산후조리 서비스 FAQ`,
      description: `${SITE_NAME_KO} 산후조리 신청 방법, 계약금 결제, 서비스 기간, 입주형과 출퇴근형 차이, 신생아 케어 범위에 대한 자주 묻는 질문입니다.`,
    },
    guide: {
      title: `산후조리 신청 절차 | ${SITE_NAME_KO} 상담, 계약, 배정 안내`,
      description: `상담 신청부터 계약서 검토, 계약금 결제, 산후도우미 배정, 출산 일정 변경 시 연락 방법까지 ${SITE_NAME_KO} 이용 절차를 안내합니다.`,
    },
    contact: {
      title: `문의하기 | ${SITE_NAME_KO} 산후조리 상담`,
      description: 'LA, 오렌지카운티, 캘리포니아와 미국 전역 산후조리 서비스 상담이 필요하시면 전화, 이메일, 카카오톡 또는 문의 양식으로 연락해 주세요.',
    },
  },
  en: {
    home: {
      title: `${SITE_NAME_EN} | Postpartum Care, Newborn Care, and Babysitting in the US`,
      description: `${SITE_NAME_EN} provides in-home postpartum care, newborn care, live-in and commuting caregivers, and babysitting support for mothers in LA, Orange County, California, and across the United States.`,
    },
    about: {
      title: `About ${SITE_NAME_EN} | In-Home Postpartum Care Specialists`,
      description: `Learn about ${SITE_NAME_EN}, an experienced in-home postpartum care team supporting maternal recovery, newborn care, family support, and Korean-English service across the United States.`,
    },
    services: {
      title: 'Postpartum Care Services | Live-in, Commuting, Newborn Care, Babysitting',
      description: `Explore ${SITE_NAME_EN} services including maternal recovery care, newborn care, feeding support, meal preparation, home support, live-in care, commuting care, and babysitting.`,
    },
    pricing: {
      title: `Postpartum Care Pricing | ${SITE_NAME_EN} Live-in, Commuting, and Babysitting Rates`,
      description: `Review transparent weekly pricing, deposits, service fees, and included care items for ${SITE_NAME_EN} live-in postpartum care, commuting care, and babysitting services.`,
    },
    testimonials: {
      title: `Postpartum Care Reviews | ${SITE_NAME_EN} Mother Testimonials`,
      description: `Read testimonials from mothers who used ${SITE_NAME_EN} postpartum care, newborn care, and babysitting services in California and across the United States.`,
    },
    faq: {
      title: `Postpartum Care FAQ | ${SITE_NAME_EN} Service Questions`,
      description: `Find answers about ${SITE_NAME_EN} postpartum care applications, service periods, deposits, live-in versus commuting care, newborn care scope, and consultation steps.`,
    },
    guide: {
      title: `How to Apply | ${SITE_NAME_EN} Postpartum Care Consultation and Contract Guide`,
      description: `See the ${SITE_NAME_EN} application process from consultation and service explanation to contract review, deposit payment, caregiver assignment, and delivery-date updates.`,
    },
    contact: {
      title: `Contact ${SITE_NAME_EN} | Postpartum Care Consultation`,
      description: `Contact ${SITE_NAME_EN} by phone, email, KakaoTalk, or online form for postpartum care, newborn care, live-in care, commuting care, and babysitting service inquiries.`,
    },
  },
} as const;

export type SeoPage = keyof typeof pageMetadata.ko;

export function pageMeta(locale: string, page: SeoPage) {
  return pageMetadata[getLocale(locale)][page];
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
    name: isKorean ? SITE_NAME_KO : SITE_NAME_EN,
    alternateName: SITE_NAME_EN,
    image: `${BASE_URL}/logo_black.png`,
    logo: `${BASE_URL}/logo_black.png`,
    url: localizedPath(currentLocale),
    telephone: process.env.NEXT_PUBLIC_PHONE_RAW || '+1-213-999-4642',
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
      { '@type': 'City', name: 'Irvine' },
      { '@type': 'City', name: 'Koreatown' },
      { '@type': 'Country', name: 'United States' },
    ],
    knowsLanguage: ['ko-KR', 'en-US'],
    serviceType: isKorean
      ? ['산후조리 서비스', '신생아 케어', '베이비시팅']
      : ['Postpartum care', 'Newborn care', 'Babysitting'],
    description: isKorean
      ? `미국 전역의 산모와 신생아를 위한 프리미엄 방문 산후조리, 신생아 케어, 베이비시팅 서비스입니다.`
      : `Premium in-home postpartum care, newborn support, and babysitting services for mothers across the United States.`,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: isKorean ? `${SITE_NAME_KO} 케어 서비스` : `${SITE_NAME_EN} Care Services`,
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
