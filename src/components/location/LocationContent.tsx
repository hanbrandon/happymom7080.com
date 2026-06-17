'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Star, Quote, ArrowRight, Heart, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServiceCTA from '@/components/layout/ServiceCTA';
import PremiumButton from '@/components/ui/PremiumButton';
import SplitText from '@/components/ui/SplitText';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import EmployeeBenefits from './EmployeeBenefits';
import LocalNeighborhoods, { NeighborhoodInfo } from './LocalNeighborhoods';

interface Testimonial {
  name: string;
  content: string;
  avatar: string;
  location: string;
  service: string;
}

interface CityDetails {
  nameKo: string;
  nameEn: string;
  heroTitle: string;
  heroSubKo: string;
  heroSubEn: string;
  desc1Ko: string;
  desc1En: string;
  desc2Ko: string;
  desc2En: string;
  featuresKo: string[];
  featuresEn: string[];
  testimonialsFilter: string[];
  landmarksKo: string[];
  badgeKo: string;
  neighborhoods: NeighborhoodInfo[];
}

const CITY_DATA: Record<string, CityDetails> = {
  'new-york': {
    nameKo: '뉴욕',
    nameEn: 'New York',
    heroTitle: 'New York',
    heroSubKo: '맨해튼, 퀸즈, 브루클린 등 뉴욕 도심 아파트 환경에 최적화된 맞춤형 전문 산후조리 서비스를 지원합니다.',
    heroSubEn: 'We support customized professional postpartum care services optimized for urban apartment environments in New York, including Manhattan, Queens, and Brooklyn.',
    desc1Ko: '바쁜 뉴욕 라이프 속에서도 산모님들이 온전히 휴식하고 회복하실 수 있도록 공간 맞춤형 동선 정리와 조용하고 빠른 살림 정리를 해드립니다.',
    desc1En: 'We organize spaces and manage households quietly and quickly so that mothers can fully rest and recover even in busy New York life.',
    desc2Ko: '소음에 예민할 수 있는 신생아의 백색 소음 및 수면 루틴 관리를 돕고, 정갈하고 맛깔스러운 뉴욕 프리미엄 케어를 선보입니다.',
    desc2En: 'We help manage white noise and sleep routines for newborns who may be sensitive to noise, and offer neat and delicious New York premium care.',
    featuresKo: [
      '맨해튼 및 뉴욕 메트로 전 지역 조리사 매칭',
      '좁은 주방이나 아파트 동선에 최적화된 프로 가사 지원',
      '도심 소음 극복을 위한 신생아 안도 속싸개법 코칭',
      '몸과 마음을 다독이는 맞춤형 리커버리 식단'
    ],
    featuresEn: [
      'Caregiver matching across all of Manhattan and the New York Metro area',
      'Professional housekeeping support optimized for narrow kitchens or apartment layouts',
      'Newborn soothing swaddling coaching to overcome urban noise',
      'Customized recovery diets that soothe the body and mind'
    ],
    testimonialsFilter: ['뉴욕', 'New York', '맨해튼', 'Manhattan', '김민아'],
    landmarksKo: ['맨해튼', '퀸즈', '브루클린', '롱아일랜드', '플러싱'],
    badgeKo: '뉴욕 동부 헤드쿼터',
    neighborhoods: [
      {
        nameKo: '맨해튼 (Manhattan)',
        nameEn: 'Manhattan',
        descKo: '맨해튼 지역의 아파트 및 주거 환경에 꼭 맞는 정갈한 맞춤 산후조리 및 가사 서비스를 지원합니다.',
        descEn: 'We provide postpartum care and household organizing services tailored to the Manhattan apartment environment.',
        image: '/service-areas/manhattan.jpg',
        badgeKo: '출퇴근 | 입주 | 아기돌봄 가능',
        badgeEn: 'Commuting | Live-in | Babysitting'
      },
      {
        nameKo: '퀸즈 (Queens)',
        nameEn: 'Queens',
        descKo: '퀸즈 지역 산모님들이 편안히 산후 회복에 전념하실 수 있도록 숙련된 이모님이 체계적으로 아기를 돌봐 드립니다.',
        descEn: 'Our experienced specialists systematically manage newborn care so moms can focus on recovery.',
        image: '/service-areas/queens.jpg',
        badgeKo: '출퇴근 | 입주 | 아기돌봄 가능',
        badgeEn: 'Commuting | Live-in | Babysitting'
      },
      {
        nameKo: '브루클린 (Brooklyn)',
        nameEn: 'Brooklyn',
        descKo: '브루클린 전역의 주거 환경에 최적화된 똑똑한 신생아 수면 교육과 쾌적한 환경 관리를 꼼꼼히 제공합니다.',
        descEn: 'Meticulous support for smart newborn sleep training and eco-friendly home management customized for Brooklyn.',
        image: '/service-areas/brooklyn.jpg',
        badgeKo: '출퇴근 | 입주 | 아기돌봄 가능',
        badgeEn: 'Commuting | Live-in | Babysitting'
      }
    ]
  },
  virginia: {
    nameKo: '버지니아',
    nameEn: 'Virginia',
    heroTitle: 'Virginia',
    heroSubKo: '페어팩스, 센터빌, 알링턴 등 버지니아 전 지역 산모님들을 위해 준비된 프리미엄 1:1 케어 솔루션입니다.',
    heroSubEn: 'Premium 1:1 care solutions prepared for mothers in all areas of Virginia, including Fairfax, Centreville, and Arlington.',
    desc1Ko: '한인 인프라가 든든하게 갖춰진 버지니아 북부 지역에서, 해피맘은 산모님의 지친 몸과 마음을 친정 엄마의 품처럼 아늑히 보살펴 드립니다.',
    desc1En: 'In Northern Virginia, where Korean infrastructure is solidly established, HappyMom warmly cares for the tired body and mind of mothers like the embrace of a biological mother.',
    desc2Ko: '철저히 검증된 한인 조리사님이 가정으로 방문하여, 아기의 안전한 보살핌은 물론이며 산모를 위한 영양 가득한 맞춤 한식 조리식과 전문 마사지를 제공합니다.',
    desc2En: 'Thoroughly verified Korean caregivers visit your home to provide safe care for the baby, as well as nutritional customized Korean meals and professional massages for the mother.',
    featuresKo: [
      '버지니아 북부 및 주요 메트로 지역 신속 배정',
      '신생아 황달 및 배앓이 예방 집중 모니터링',
      '산모 체력 증진을 위한 고단백 영양 미역국 식단',
      '안심할 수 있는 백신 접종 완료 조리사 상시 파견'
    ],
    featuresEn: [
      'Rapid dispatch in Northern Virginia and major metro areas',
      'Intensive monitoring to prevent newborn jaundice and colic',
      'High-protein nutritional seaweed soup diet to boost mother\'s stamina',
      'Constant dispatch of fully vaccinated, reassuring caregivers'
    ],
    testimonialsFilter: ['버지니아', 'Virginia', '최유리'],
    landmarksKo: ['페어팩스', '센터빌', '알링턴', '알렉산드리아', '헤ndon'],
    badgeKo: '버지니아 지사 운영',
    neighborhoods: [
      {
        nameKo: '페어팩스 (Fairfax)',
        nameEn: 'Fairfax',
        descKo: '페어팩스 지역 산모님들을 위해 친정 엄마의 정성을 담은 맞춤형 산후 회복 서비스를 지원해 드립니다.',
        descEn: 'We provide customized postpartum recovery services with the care of a mother for Fairfax moms.',
        image: '/service-areas/fairfax.png',
        badgeKo: '출퇴근 | 입주 | 아기돌봄 가능',
        badgeEn: 'Commuting | Live-in | Babysitting'
      },
      {
        nameKo: '센터빌 (Centreville)',
        nameEn: 'Centreville',
        descKo: '센터빌 전 지역 산모 맞춤 영양 식단 조리부터 신생아 안전 수면 및 배앓이 예방 케어까지 성심을 다합니다.',
        descEn: 'Meticulous support from customized nutritional meals to safe newborn sleep routines in Centreville.',
        image: '/service-areas/centreville.png',
        badgeKo: '출퇴근 | 입주 | 아기돌봄 가능',
        badgeEn: 'Commuting | Live-in | Babysitting'
      },
      {
        nameKo: '알링턴 (Arlington)',
        nameEn: 'Arlington',
        descKo: '알링턴 지역의 쾌적한 주거 환경에 맞춰 1:1 집중 산모 유방 마사지와 아기 위생 돌봄을 지원합니다.',
        descEn: 'Professional 1:1 breast care massage and newborn bath training in the quiet environment of Arlington.',
        image: '/service-areas/arlington.jpg',
        badgeKo: '출퇴근 | 입주 | 아기돌봄 가능',
        badgeEn: 'Commuting | Live-in | Babysitting'
      }
    ]
  },
  dallas: {
    nameKo: '달라스',
    nameEn: 'Dallas',
    heroTitle: 'Dallas',
    heroSubKo: '달라스, 포트워스 등 텍사스 주요 지역 산모님들을 위해 친정 엄마의 정성 그대로 담은 맞춤 조리 서비스를 배송합니다.',
    heroSubEn: 'We deliver customized postpartum care services filled with the sincerity of a biological mother for mothers in major Texas areas such as Dallas and Fort Worth.',
    desc1Ko: '텍사스의 광활한 자연과 쾌적한 주거 공간 속에서 편안하게 조리하실 수 있도록 입주 전문 이모님이 24시간 철저히 밀착 지원해 드립니다.',
    desc1En: 'Our live-in care specialists provide close 24-hour support so you can comfortably recover amidst the vast nature and pleasant living spaces of Texas.',
    desc2Ko: '텍사스 로컬 식재료와 프리미엄 한식 조리 기술을 접목하여 입맛을 돋우는 영양 식사를 정성스레 대접하고 몸의 빠른 회복을 적극 돕습니다.',
    desc2En: 'We combine local Texas ingredients with premium Korean culinary skills to serve appetizing nutritional meals and actively assist with fast body recovery.',
    featuresKo: [
      '달라스/포트워스 메트로 전 지역 파견',
      '입맛을 되찾아주는 수제 영양식 및 보양 미역국',
      '신생아 배앓이 방지 마사지 및 트림 유도 케어',
      '가족들이 함께 안심할 수 있는 쾌적한 실내 환경 정리'
    ],
    featuresEn: [
      'Dispatch across all of the Dallas/Fort Worth metro area',
      'Homemade nutritional meals and nourishing seaweed soup that restore appetite',
      'Colic prevention massage and burping induction care for newborns',
      'Pleasant indoor environment organization that gives peace of mind to the family'
    ],
    testimonialsFilter: ['달라스', 'Dallas', '텍사스', 'Texas', '이지현', 'Yoona Kim'],
    landmarksKo: ['플래이노', '프리스코', '캐롤턴', '맥키니', '알렌'],
    badgeKo: '텍사스 지사 운영',
    neighborhoods: [
      {
        nameKo: '플래이노 (Plano)',
        nameEn: 'Plano',
        descKo: '플래이노 지역의 여유롭고 쾌적한 주거 환경에 특화된 친정식 가사 지원과 입주 케어 서비스를 제공합니다.',
        descEn: 'Specialized live-in care and home support customized for spacious housing environments in Plano.',
        image: '/service-areas/plano.jpg',
        badgeKo: '출퇴근 | 입주 | 아기돌봄 가능',
        badgeEn: 'Commuting | Live-in | Babysitting'
      },
      {
        nameKo: '프리스코 (Frisco)',
        nameEn: 'Frisco',
        descKo: '프리스코 지역 산모와 신생아를 위해 철저한 위생 관리를 거친 베테랑 조리사를 우선 매칭해 드립니다.',
        descEn: 'We ensure matching with certified veteran caregivers for safety-first newborn care in Frisco.',
        image: '/service-areas/frisco.png',
        badgeKo: '출퇴근 | 입주 | 아기돌봄 가능',
        badgeEn: 'Commuting | Live-in | Babysitting'
      },
      {
        nameKo: '캐롤턴 (Carrollton)',
        nameEn: 'Carrollton',
        descKo: '캐롤턴 내 한인 인프라에 안성맞춤인 영양 가득한 한식 산후 조리식을 정성스레 조리해 드립니다.',
        descEn: 'Delightful nutritional Korean postpartum meals tailored to the local Korean community in Carrollton.',
        image: '/service-areas/carrollton.png',
        badgeKo: '출퇴근 | 입주 | 아기돌봄 가능',
        badgeEn: 'Commuting | Live-in | Babysitting'
      }
    ]
  },
  'san-francisco': {
    nameKo: '샌프란',
    nameEn: 'San Francisco',
    heroTitle: 'San Francisco',
    heroSubKo: '샌프란시스코, 산호세, 실리콘밸리 등 베이 전 지역 산모님들을 위한 프리미엄 입주 및 출퇴근 전문 케어 서비스입니다.',
    heroSubEn: 'Premium live-in and commuting care services for mothers in all areas of the Bay, including San Francisco, San Jose, and Silicon Valley.',
    desc1Ko: '실리콘밸리의 활기찬 흐름 속에서 산모님들이 오롯이 회복에만 전념할 수 있도록 세심하고 조용한 가사 지원과 안심 아기 케어를 보장합니다.',
    desc1En: 'We guarantee meticulous and quiet housekeeping and safe baby care so that mothers can focus entirely on recovery in the vibrant flow of Silicon Valley.',
    desc2Ko: '전문적이고 위생적인 신생아 관리 규칙을 철저히 지키며, 깐깐한 육아 가이드라인에 맞춰 똑똑하고 올바른 루틴을 짜드립니다.',
    desc2En: 'We strictly follow professional and hygienic newborn care rules and set up smart and correct routines according to strict parenting guidelines.',
    featuresKo: [
      '샌프란시스코 베이 및 실리콘밸리 전 지역 매칭',
      '위생과 격리 수칙을 준수하는 베테랑 조리사',
      '가장 최적화된 혼합 수유 및 완모 솔루션 제공',
      '산후 부기 제거를 돕는 스페셜 테라피'
    ],
    featuresEn: [
      'Matching across all of the San Francisco Bay and Silicon Valley areas',
      'Veteran caregivers who comply with strict hygiene and isolation protocols',
      'Provision of optimized mixed feeding and exclusive breastfeeding solutions',
      'Special therapy that helps remove postpartum swelling'
    ],
    testimonialsFilter: ['샌프란시스코', '산호세', '산프란', 'SF', '실리콘밸리', 'San Francisco', 'San Jose', 'Walnut Creek', '월넛크릭맘'],
    landmarksKo: ['산호세', '팔로알토', '버클리', '마운틴뷰'],
    badgeKo: '베이 전 지역 지원',
    neighborhoods: [
      {
        nameKo: '산호세 (San Jose)',
        nameEn: 'San Jose',
        descKo: '산호세 전역 산모님이 온전히 휴식을 취하도록 24시간 입주형 케어와 조용한 살림 관리를 병행합니다.',
        descEn: 'Systematic 24-hour live-in care and quiet housekeeping in the busy Silicon Valley/San Jose area.',
        image: '/service-areas/golden-gate-bridge.webp',
        badgeKo: '출퇴근 | 입주 | 아기돌봄 가능',
        badgeEn: 'Commuting | Live-in | Babysitting'
      },
      {
        nameKo: '산호세 (San Jose)',
        nameEn: 'San Jose',
        descKo: '산호세 내 스마트한 환경에 어울리는 철저한 감염 예방 관리 및 올바른 신생아 교육을 세심히 돕습니다.',
        descEn: 'Meticulous support for strict infection control and sleep routine training tailored to San Jose.',
        image: '/service-areas/san-jose.jpg',
        badgeKo: '출퇴근 | 입주 | 아기돌봄 가능',
        badgeEn: 'Commuting | Live-in | Babysitting'
      },
      {
        nameKo: '팔로알토 (Palo Alto)',
        nameEn: 'Palo Alto',
        descKo: '팔로알토 지역 산모님의 빠른 회복을 위해 부기 제거 특화 테라피와 정성 어린 영양 한식을 제공합니다.',
        descEn: 'Specialized body recovery therapy and breast massage to assist with fast recovery for Palo Alto moms.',
        image: '/service-areas/palo-alto.jpg',
        badgeKo: '출퇴근 | 입주 | 아기돌봄 가능',
        badgeEn: 'Commuting | Live-in | Babysitting'
      }
    ]
  },
  la: {
    nameKo: '엘에이',
    nameEn: 'Los Angeles',
    heroTitle: 'Los Angeles',
    heroSubKo: 'LA 전 지역(한인타운, 다운타운, 다우니, 베벌리힐스 등) 어디든 찾아가는 프리미엄 맞춤 케어 서비스를 제공합니다.',
    heroSubEn: 'We provide premium customized care services that visit anywhere in all areas of LA (Koreatown, Downtown, Downey, Beverly Hills, etc.).',
    desc1Ko: '한인 사회의 중심이자 가장 많은 한국인 산모님들이 거주하시는 LA 지역에서, 해피맘은 가장 신뢰받는 산후조리 파트너로 자리매김해 왔습니다.',
    desc1En: 'In the LA area, the center of the Korean community and home to the largest number of Korean mothers, HappyMom has established itself as the most trusted postpartum care partner.',
    desc2Ko: '오랜 경험을 지닌 베테랑 한국인 조리사님들이 파견되어 친정 엄마처럼 따뜻하고 전문적인 케어를 선사합니다. 병원 퇴원 직후부터 아기 돌봄, 산모 영양식 준비, 가슴 마사지까지 체계적으로 관리해 드립니다.',
    desc2En: 'Experienced veteran Korean caregivers are dispatched to offer warm and professional care like a biological mother. We systematically manage everything from baby care, mother\'s nutritional meal preparation, and breast massage immediately after hospital discharge.',
    featuresKo: [
      'LA 전 지역 전문 조리사 긴급/예약 파견',
      '전문적인 유방 마사지 및 모유 수유 완벽 지원',
      'LA 한인 마트 및 로컬 식재료를 활용한 최고급 맞춤 한식 산후 조리식',
      '신생아 맞춤 수면 교육 및 패턴 정립'
    ],
    featuresEn: [
      'Urgent/reservation dispatch of professional caregivers across all of LA',
      'Full support for professional breast massage and breastfeeding',
      'Top-grade customized Korean postpartum meals using LA Korean markets and local ingredients',
      'Establishment of sleep training and patterns tailored to newborns'
    ],
    testimonialsFilter: ['LA', '다우니', 'Downey', '로아로', 'Sujin Kim', '승후 엄마'],
    landmarksKo: ['한인타운', '베벌리힐스', '다우니', '파사데나', '토런스', '글렌데일'],
    badgeKo: 'LA 지사 운영',
    neighborhoods: [
      {
        nameKo: '한인타운 (Koreatown)',
        nameEn: 'Koreatown',
        descKo: '입주형·출퇴근형 산후조리부터 전문 아기돌봄 서비스까지 모두 완벽하게 이용 가능합니다.',
        descEn: 'We provide comprehensive services from live-in and commuting postpartum care to babysitting in Koreatown.',
        image: '/service-areas/koreatown.jpg',
        badgeKo: '출퇴근 | 입주 | 아기돌봄 가능',
        badgeEn: 'Commuting | Live-in | Babysitting'
      },
      {
        nameKo: '베벌리힐스 (Beverly Hills)',
        nameEn: 'Beverly Hills',
        descKo: '베벌리힐스 전 지역 1:1 맞춤형 입주, 출퇴근 케어 및 아기돌봄 서비스를 안심하고 지원받으실 수 있습니다.',
        descEn: 'Safe and reliable 1:1 customized live-in and commuting baby care in Beverly Hills.',
        image: '/service-areas/beverly-hills.jpg',
        badgeKo: '출퇴근 | 입주 | 아기돌봄 가능',
        badgeEn: 'Commuting | Live-in | Babysitting'
      },
      {
        nameKo: '글렌데일 (Glendale)',
        nameEn: 'Glendale',
        descKo: '글렌데일 지역 산모님들의 빠른 회복을 위해 전문적인 입주/출퇴근 조리와 베이비시팅 서비스를 모두 제공합니다.',
        descEn: 'Professional live-in/commuting cooking and babysitting services for fast postpartum recovery in Glendale.',
        image: '/service-areas/glendale.jpg',
        badgeKo: '출퇴근 | 입주 | 아기돌봄 가능',
        badgeEn: 'Commuting | Live-in | Babysitting'
      }
    ]
  },
  irvine: {
    nameKo: '얼바인',
    nameEn: 'Irvine',
    heroTitle: 'Irvine',
    heroSubKo: '안전하고 쾌적한 얼바인 지역 산모님들을 위해 엄선된 전문 조리사 군단이 맞춤형 케어를 선사합니다.',
    heroSubEn: 'A carefully selected group of professional caregivers presents customized care for mothers in the safe and pleasant Irvine area.',
    desc1Ko: '안전과 교육의 도시 얼바인에서 건강하고 행복한 육아의 첫걸음을 떼실 수 있도록 최상의 돌봄 서비스를 약속드립니다.',
    desc1En: 'We promise the best care services so you can take the first step of healthy and happy parenting in Irvine, the city of safety and education.',
    desc2Ko: '철저한 신원 보증과 교육 과정을 거친 조리사님이 얼바인 가정으로 직접 방문하여 산모의 빠른 회복과 신생아의 편안한 적응을 돕습니다.',
    desc2En: 'Caregivers who have undergone thorough background checks and training visit Irvine homes directly to help with the mother\'s rapid recovery and the newborn\'s comfortable adjustment.',
    featuresKo: [
      '얼바인 전 지역 안심 방문 케어',
      '철저한 감염병 예방 교육을 마친 베테랑 조리사',
      '산모 맞춤형 힐링 마사지 및 체력 회복 식단',
      '초보 부모를 위한 1:1 맞춤 육아 가이드'
    ],
    featuresEn: [
      'Reassuring home care visits across all of Irvine',
      'Veteran caregivers who have completed strict infectious disease prevention training',
      'Customized healing massage for mothers and physical recovery diet',
      '1:1 customized parenting guide for beginner parents'
    ],
    testimonialsFilter: ['얼바인', 'Irvine', '오렌지카운티', 'OC'],
    landmarksKo: ['그레이트 파크', '터틀록', '우드브릿지', '스펙트럼', 'Tustin'],
    badgeKo: '오렌지카운티 명품 케어',
    neighborhoods: [
      {
        nameKo: '터틀록 (Turtle Rock)',
        nameEn: 'Turtle Rock',
        descKo: '터틀록 지역의 조용하고 프라이빗한 단독 주택 단지에 특화된 고품격 맞춤 입주 산후조리를 선사합니다.',
        descEn: 'Premium live-in care customized for quiet, private single-family home environments in Turtle Rock.',
        image: '/service-areas/turtle-rock.jpg',
        badgeKo: '출퇴근 | 입주 | 아기돌봄 가능',
        badgeEn: 'Commuting | Live-in | Babysitting'
      },
      {
        nameKo: '우드브릿지 (Woodbridge)',
        nameEn: 'Woodbridge',
        descKo: '우드브릿지 인근 산모님들이 안심하고 쉴 수 있게 전문 신생아 목욕과 수유 교육을 밀착 가이드합니다.',
        descEn: 'Newborn bath and breastfeeding training for moms to comfortably connect with their babies in Woodbridge.',
        image: '/service-areas/woodbridge.jpg',
        badgeKo: '출퇴근 | 입주 | 아기돌봄 가능',
        badgeEn: 'Commuting | Live-in | Babysitting'
      },
      {
        nameKo: '터스틴 (Tustin)',
        nameEn: 'Tustin',
        descKo: '터스틴 지역 아파트 및 홈 환경에 맞춰 편리한 아기 케어 및 정갈한 위생 소독 수칙을 완벽히 구축합니다.',
        descEn: 'We establish convenient baby care and sanitizing routines customized for Tustin homes.',
        image: '/service-areas/tustin.jpg',
        badgeKo: '출퇴근 | 입주 | 아기돌봄 가능',
        badgeEn: 'Commuting | Live-in | Babysitting'
      }
    ]
  },
  atlanta: {
    nameKo: '아틀란타',
    nameEn: 'Atlanta',
    heroTitle: 'Atlanta',
    heroSubKo: '둘루스, 스와니, 존스크릭 등 아틀란타 전 지역 산모님들을 위해 해피맘 베테랑 조리사 군단이 직접 찾아갑니다.',
    heroSubEn: 'HappyMom\'s veteran caregiver group directly visits mothers in all areas of Atlanta, including Duluth, Suwanee, and Johns Creek.',
    desc1Ko: '급성장하는 아틀란타 한인 커뮤니티에서 산모님들이 산후조리 걱정 없이 편안하게 회복하실 수 있도록 체계적인 24시간 밀착 케어를 제공합니다.',
    desc1En: 'We provide systematic 24-hour close care so that mothers can comfortably recover without worrying about postpartum care in the rapidly growing Atlanta Korean community.',
    desc2Ko: '아기의 올바른 수면 루틴 교육과 위생 관리는 물론, 산모의 산후 부기 제거를 돕는 마사지와 한식 요리 솜씨로 최고의 만족을 선사합니다.',
    desc2En: 'We offer the highest satisfaction through baby sleep routine training and hygiene management, as well as massages to help remove the mother\'s swelling and Korean culinary skills.',
    featuresKo: [
      '아틀란타 한인 밀집 지역 및 인근 도시 케어',
      '경력 10년 이상의 숙련된 신생아 전문 조리사 배정',
      '부종 감소와 기력 회복을 위한 1:1 맞춤 테라피',
      '깔끔하고 위생적인 주방 및 아기방 살림 관리'
    ],
    featuresEn: [
      'Care in Korean-populated areas in Atlanta and neighboring cities',
      'Assignment of experienced newborn specialists with over 10 years of experience',
      '1:1 customized therapy to reduce swelling and recover energy',
      'Clean and hygienic kitchen and baby room organization'
    ],
    testimonialsFilter: ['아틀란타', '애틀랜타', 'Atlanta', '서윤아'],
    landmarksKo: ['둘루스', '스와니', '존스크릭', '알파레타', '벅헤드'],
    badgeKo: '아틀란타 지사 운영',
    neighborhoods: [
      {
        nameKo: '둘루스 (Duluth)',
        nameEn: 'Duluth',
        descKo: '둘루스 지역 산모님들이 지치지 않도록 신진대사를 돕는 한식 밑반찬과 기력 회복 식단을 준비해 드립니다.',
        descEn: 'We serve delicious nutritional meals to Duluth moms to assist with postpartum recovery and stamina.',
        image: '/service-areas/duluth.jpg',
        badgeKo: '출퇴근 | 입주 | 아기돌봄 가능',
        badgeEn: 'Commuting | Live-in | Babysitting'
      },
      {
        nameKo: '스와니 (Suwanee)',
        nameEn: 'Suwanee',
        descKo: '스와니 전 지역 어디든 베테랑 이모님이 방문하여 부드러운 가슴 마사지 및 신생아 통목욕을 진행합니다.',
        descEn: 'Our veteran specialists visit Suwanee to provide warm breast care massage and baby care.',
        image: '/service-areas/suwanee.jpg',
        badgeKo: '출퇴근 | 입주 | 아기돌봄 가능',
        badgeEn: 'Commuting | Live-in | Babysitting'
      },
      {
        nameKo: '존스크릭 (Johns Creek)',
        nameEn: 'Johns Creek',
        descKo: '존스크릭 내 넓은 주거 환경에 맞춰 깔끔하고 위생적인 홈 공간 케어 및 아기 세탁물 관리를 전담합니다.',
        descEn: 'Meticulous home organizing and laundry management customized for spacious homes in Johns Creek.',
        image: '/service-areas/johns-creek.jpg',
        badgeKo: '출퇴근 | 입주 | 아기돌봄 가능',
        badgeEn: 'Commuting | Live-in | Babysitting'
      }
    ]
  },
  'new-jersey': {
    nameKo: '뉴저지',
    nameEn: 'New Jersey',
    heroTitle: 'New Jersey',
    heroSubKo: '뉴저지 전 지역 산모님들을 위해 친정 엄마가 오신 것처럼 친근하고 포근한 최고 수준의 케어를 제공합니다.',
    heroSubEn: 'We provide the highest level of care, friendly and warm as if a biological mother has arrived, for mothers in all areas of New Jersey.',
    desc1Ko: '가족 같은 분위기 속에서 첫아이 육아의 서툶을 든든한 경력의 이모님이 1:1로 지도하고 잡아드립니다.',
    desc1En: 'In a family-like atmosphere, our highly experienced caregiver provides 1:1 guidance for the clumsiness of first-time parenting.',
    desc2Ko: '모유 수유의 고비를 넘길 수 있도록 도와주고 가슴 통증을 달래주는 전문가의 가슴 관리 마사지까지 완벽히 패키지로 준비되어 있습니다.',
    desc2En: 'A complete package is prepared, including expert breast care massage to help overcome breastfeeding hurdles and soothe breast pain.',
    featuresKo: [
      '뉴저지 전 지역 친근하고 경력 높은 이모님 우선 매칭',
      '가슴 통증 완화를 돕는 10일 집중 유방 테라피',
      '첫째 아이 케어 및 간식 지원 서비스 병행 가능',
      '가족들이 감탄하는 정갈한 밑반찬과 영양 식사'
    ],
    featuresEn: [
      'Priority matching of friendly and highly experienced caregivers in New Jersey',
      '10-day intensive breast therapy to help relieve breast pain',
      'First child care and snack support service can be combined',
      'Neat side dishes and nutritional meals that amaze the family'
    ],
    testimonialsFilter: ['뉴저지', 'New Jersey', '박지영'],
    landmarksKo: ['포트리', '팰리세이즈 파크', '클로스터', '에디슨', '릿지우드'],
    badgeKo: '뉴저지 전역 홈케어',
    neighborhoods: [
      {
        nameKo: '포트리 (Fort Lee)',
        nameEn: 'Fort Lee',
        descKo: '포트리 내 아파트 단지에 꼭 맞는 빠른 가사 정리와 신생아 수면 안도 환경을 섬세하게 만들어 드립니다.',
        descEn: 'Meticulous housekeeping and noise-preventing baby care routines customized for Fort Lee apartments.',
        image: '/service-areas/fort-lee.png',
        badgeKo: '출퇴근 | 입주 | 아기돌봄 가능',
        badgeEn: 'Commuting | Live-in | Babysitting'
      },
      {
        nameKo: '팰리세이즈 파크 (Palisades Park)',
        nameEn: 'Palisades Park',
        descKo: '팰리세이즈 파크 산모님들이 마음 편히 의지할 수 있도록 유방 통증 관리와 완모 수유 솔루션을 가이드합니다.',
        descEn: 'Breastfeeding and pain relief care by certified veteran specialists in Palisades Park.',
        image: '/service-areas/palisades-park.png',
        badgeKo: '출퇴근 | 입주 | 아기돌봄 가능',
        badgeEn: 'Commuting | Live-in | Babysitting'
      },
      {
        nameKo: '클로스터 (Closter)',
        nameEn: 'Closter',
        descKo: '클로스터 지역 주택 환경에 적합한 품격 있는 프리미엄 조리 식사와 위생적인 위생 관리 수칙을 수행합니다.',
        descEn: 'High-quality home-cooked nutritional meals and recovery care tailored to Closter homes.',
        image: '/service-areas/closter.png',
        badgeKo: '출퇴근 | 입주 | 아기돌봄 가능',
        badgeEn: 'Commuting | Live-in | Babysitting'
      }
    ]
  },
  other: {
    nameKo: '기타 지역',
    nameEn: 'Other Areas',
    heroTitle: 'Other Areas',
    heroSubKo: '하와이, 시애틀, 아리조나 등 미국 전 지역 어디든 입주형 산후케어를 통해 안심하고 조리하실 수 있습니다. (※ 기타 지역은 출퇴근 서비스가 제한되거나 불가할 수 있으므로 예약 전 반드시 문의해주시기 바랍니다.)',
    heroSubEn: 'You can recover with peace of mind through live-in postpartum care anywhere in the US, including Hawaii, Seattle, and Arizona. (*Please note that commuting services may be limited or unavailable in other areas, so please inquire before booking.)',
    desc1Ko: '한인 조리사구하기가 힘든 타주나 외곽 지역에서도 해피맘의 전국 네트워크를 통해 엄선된 프로 조리사님을 입주형으로 만나보실 수 있습니다.',
    desc1En: 'Even in other states or outlying areas where it is hard to find Korean caregivers, you can meet selected professional caregivers on a live-in basis through HappyMom\'s national network.',
    desc2Ko: '장거리 파견에도 꼼꼼한 사전 상담과 위생 교육을 완료한 조리사님이 투입되어, 낯선 타지 독박 육아의 불안감을 완벽히 해소해 드립니다.',
    desc2En: 'Even for long-distance dispatches, caregivers who have completed meticulous pre-consultation and hygiene training are deployed, completely relieving the anxiety of solo parenting in an unfamiliar place.',
    featuresKo: [
      '미국 전 지역 입주형 파견 매칭 가능',
      '파견 전 조리사 건강 검진 및 신원 보증 100%',
      '온라인 예약 및 비대면 사전 인터뷰 지원',
      '타주 환경에 맞춘 유연하고 체계적인 돌봄 솔루션'
    ],
    featuresEn: [
      'Live-in dispatch matching available across all areas of the US',
      '100% caregiver health check and background check before dispatch',
      'Online reservation and non-face-to-face pre-interview support',
      'Flexible and systematic care solutions tailored to out-of-state environments'
    ],
    testimonialsFilter: ['미국', '타지역', '타주', 'LA 외', 'Hanna', 'Novato', '시애틀', 'Seattle', '장혜진', '샌디에고', 'San Diego'],
    landmarksKo: ['시애틀', '샌디에고', '하와이', '아리조나', '콜로라도', '유타'],
    badgeKo: '미국 전 지역 파견 지원',
    neighborhoods: [
      {
        nameKo: '시애틀 (Seattle)',
        nameEn: 'Seattle',
        descKo: '시애틀 지역 산모님의 빠른 복귀와 편안한 육아 조율을 위해 위생적인 전문 아기 돌봄 이모님을 매칭합니다.',
        descEn: 'We match professional babysitting services for moms\' smooth transition and comfortable parenting in Seattle.',
        image: '/service-1.png',
        badgeKo: '입주 | 아기돌봄 가능 (출퇴근 서비스 예약 전 문의 요망)',
        badgeEn: 'Live-in | Babysitting (Please inquire about commuting before booking)'
      },
      {
        nameKo: '샌디에고 (San Diego)',
        nameEn: 'San Diego',
        descKo: '샌디에고의 쾌적한 주거 공간에서 전문 조리 한식 준비와 수유 부기 해소 가슴 마사지를 정성스레 케어합니다.',
        descEn: 'Nutritional meal preparation and breast massage for body recovery in the warm environment of San Diego.',
        image: '/service-areas/san-diego.png',
        badgeKo: '입주 | 아기돌봄 가능 (출퇴근 서비스 예약 전 문의 요망)',
        badgeEn: 'Live-in | Babysitting (Please inquire about commuting before booking)'
      },
      {
        nameKo: '하와이 (Hawaii)',
        nameEn: 'Hawaii',
        descKo: '하와이 등 외곽 타주 전역에서도 안심하고 회복에 몰두하실 수 있도록 검증된 프로 조리사를 입주형으로 파견합니다.',
        descEn: 'We dispatch certified veteran specialists for premium live-in care even in Hawaii.',
        image: '/service-areas/hawaii.png',
        badgeKo: '입주형 서비스 가능 (출퇴근 불가)',
        badgeEn: 'Live-in Service Available (Commuting unavailable)'
      }
    ]
  }
};

export default function LocationContent({ city }: { city: string }) {
  const t = useTranslations('Services');
  const tTestimonials = useTranslations('TestimonialsPage');
  const locale = useLocale();
  const details = CITY_DATA[city] || CITY_DATA.la;
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [...(tTestimonials.raw('items') || [])].reverse();

  // 후기 데이터 필터링
  const filteredTestimonials = testimonials.filter(item => {
    return details.testimonialsFilter.some(filterKey =>
      item.location.toLowerCase().includes(filterKey.toLowerCase()) ||
      item.name.toLowerCase().includes(filterKey.toLowerCase()) ||
      item.content.toLowerCase().includes(filterKey.toLowerCase())
    );
  }).slice(0, 5); // 캐러셀이므로 여유있게 최대 5개까지 매칭

  // 만약 필터링된 후기가 없으면 베스트 후기 3개로 fallback
  const displayTestimonials = filteredTestimonials.length > 0
    ? filteredTestimonials
    : testimonials.slice(0, 3);

  useEffect(() => {
    if (displayTestimonials.length === 0) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % displayTestimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [displayTestimonials.length]);

  const handlePrev = () => {
    if (displayTestimonials.length === 0) return;
    setActiveIndex(
      (prev) => (prev - 1 + displayTestimonials.length) % displayTestimonials.length,
    );
  };

  const handleNext = () => {
    if (displayTestimonials.length === 0) return;
    setActiveIndex((prev) => (prev + 1) % displayTestimonials.length);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50/30 via-white to-neutral-50/50">
      <Navbar />

      {/* 1. Hero Section */}
      <section className="relative pt-44 pb-24 md:pt-52 md:pb-36 overflow-hidden">
        {/* Soft Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-200/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-[20%] left-0 w-[400px] h-[400px] bg-amber-100/20 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            {/* Location Badge (Standard design match) */}
            <span className="text-sm font-bold text-gray-400 uppercase tracking-[0.3em] mb-6 block">
              {details.nameEn}
            </span>

            {/* Hero Main Title */}
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-gray-900 tracking-tighter leading-[1.05] break-keep whitespace-pre-line">
              <SplitText text={details.heroTitle} responsive />
            </h1>

            {/* Subtitle */}
            <p className="mt-8 text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl break-keep font-medium">
              {locale === 'ko' ? details.heroSubKo : details.heroSubEn}
            </p>

            {/* Call to Actions */}
            <div className="mt-10 flex flex-wrap gap-4">
              <PremiumButton variant="primary" href="/contact" className="h-14 px-8 text-base">
                {locale === 'ko' ? '무료 상담 신청하기' : 'Apply for Free Consultation'}
              </PremiumButton>
              <PremiumButton variant="secondary" href="#features" className="h-14 px-8 text-base">
                {locale === 'ko' ? '특화 서비스 알아보기' : 'Explore Specialized Services'}
              </PremiumButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Visual Intro Section */}
      <section id="features" className="py-24 border-t border-gray-100 bg-white/60 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Left Column: Description & Local Regions */}
            <div className="lg:col-span-6 space-y-8">
              <ScrollReveal>
                <h2 className="text-sm font-bold text-gray-400 uppercase tracking-[0.3em] mb-4">
                  Why HappyMom in {details.nameEn}
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight break-keep">
                  {locale === 'ko' ? (
                    <>
                      {details.nameKo} 전 지역을 아우르는 <br />
                      해피맘만의 1:1 맞춤 프리미엄 케어
                    </>
                  ) : (
                    <>
                      HappyMom's 1:1 Custom Premium Care <br />
                      across all of {details.nameEn}
                    </>
                  )}
                </h3>
              </ScrollReveal>

              <ScrollReveal>
                <div className="space-y-6 text-lg text-gray-500 leading-relaxed break-keep">
                  <p className="font-medium text-gray-700">
                    {locale === 'ko' ? details.desc1Ko : details.desc1En}
                  </p>
                  <p>
                    {locale === 'ko' ? details.desc2Ko : details.desc2En}
                  </p>
                </div>
              </ScrollReveal>

              {/* Serviced Neighborhoods Chips */}
              <ScrollReveal>
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                    {locale === 'ko' ? '주요 서비스 지역군' : 'Service Neighborhoods'}
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {details.landmarksKo.map((landmark) => (
                      <span
                        key={landmark}
                        className="px-4 py-2 bg-neutral-100 rounded-xl text-sm font-semibold text-gray-600 hover:bg-neutral-200 transition-colors cursor-default"
                      >
                        {landmark}
                      </span>
                    ))}
                    <span className="px-4 py-2 bg-rose-50 rounded-xl text-sm font-bold text-rose-700">
                      {locale === 'ko' ? '및 인근 전 지역' : '& Surrounding Areas'}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Key Features Checklist */}
            <div className="lg:col-span-6 bg-gradient-to-tr from-rose-50/50 via-white to-amber-50/30 p-10 md:p-12 rounded-[2.5rem] border border-white shadow-xl shadow-neutral-100">
              <h4 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <ShieldCheck className="w-7 h-7 text-rose-500" />
                {locale === 'ko' ? '지역 특화 서비스 혜택' : 'Local Service Benefits'}
              </h4>
              <StaggerContainer>
                <div className="space-y-6">
                  {(locale === 'ko' ? details.featuresKo : details.featuresEn).map((feature, idx) => (
                    <StaggerItem key={idx}>
                      <div className="flex gap-4 items-start">
                        <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center shrink-0 mt-1">
                          <CheckCircle2 className="w-4 h-4 text-rose-600" />
                        </div>
                        <p className="text-lg font-semibold text-gray-700 leading-snug break-keep">
                          {feature}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer>
            </div>

          </div>
        </div>
      </section>

      {/* 2.5. Local Neighborhoods Section */}
      <LocalNeighborhoods
        neighborhoods={details.neighborhoods}
        cityName={locale === 'ko' ? details.nameKo : details.nameEn}
      />

      {/* 3. Employee Benefits Section */}
      <EmployeeBenefits />

      {/* 4. Local Testimonials Section (Horizontal Carousel matching Home Page style) */}
      <section className="py-20 md:py-32 bg-white border-t border-gray-100 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-start">

            {/* Left Column: Heading */}
            <div className="lg:col-span-5 pt-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-sm font-bold text-gray-500 uppercase tracking-[0.3em] mb-6 block">
                  Review Stories
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1] mb-8 break-keep">
                  {locale === 'ko' ? (
                    <>
                      {details.nameKo} 산모님들의 <br />
                      진솔하고 따뜻한 이용 후기
                    </>
                  ) : (
                    <>
                      Warm Testimonials from <br />
                      {details.nameEn} Mothers
                    </>
                  )}
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed max-w-sm">
                  {locale === 'ko'
                    ? '직접 경험하신 산모님들의 솔직한 목소리입니다.'
                    : 'Honest stories shared by mothers who directly experienced HappyMom.'}
                </p>
              </motion.div>
            </div>

            {/* Right Column: Carousel */}
            <div className="lg:col-span-7 relative min-h-[300px] md:min-h-[400px] flex flex-col pt-4">
              {/* Quote Text */}
              <motion.div
                className="flex-grow cursor-grab active:cursor-grabbing touch-none"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, { offset }) => {
                  const swipe = offset.x;
                  if (swipe < -50) handleNext();
                  else if (swipe > 50) handlePrev();
                }}
              >
                <AnimatePresence mode="wait">
                  {displayTestimonials.length > 0 && (
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                      className="text-2xl md:text-3xl text-gray-800 leading-relaxed font-light tracking-tight whitespace-pre-line line-clamp-5 mb-12"
                    >
                      "{displayTestimonials[activeIndex].content}"
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Profile & Navigation */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-6 border-t border-gray-100">
                <div className="flex-1">
                  <AnimatePresence mode="wait">
                    {displayTestimonials.length > 0 && (
                      <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                        className="flex items-center gap-6"
                      >
                        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 relative border border-gray-100 shadow-lg">
                          <Image
                            src={displayTestimonials[activeIndex].avatar}
                            alt={displayTestimonials[activeIndex].name}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-0.5">
                            {displayTestimonials[activeIndex].name}
                          </h3>
                          <p className="text-sm text-gray-500 font-light">
                            {displayTestimonials[activeIndex].location} <span className="text-gray-300 mx-2">/</span> {displayTestimonials[activeIndex].service}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Desktop-only Navigation (Indicators & Arrows) */}
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 font-mono text-base">
                    <span className="text-gray-900 font-bold">
                      0{activeIndex + 1}
                    </span>
                    <span className="text-gray-400">/</span>
                    <span className="text-gray-400">
                      0{displayTestimonials.length}
                    </span>
                  </div>
                  <div className="flex gap-1.5">
                    <button
                      suppressHydrationWarning
                      onClick={handlePrev}
                      aria-label="Previous testimonial"
                      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-900 transition-all cursor-pointer"
                    >
                      <ChevronLeft className="w-4.5 h-4.5 text-gray-700" />
                    </button>
                    <button
                      suppressHydrationWarning
                      onClick={handleNext}
                      aria-label="Next testimonial"
                      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-900 transition-all cursor-pointer"
                    >
                      <ChevronRight className="w-4.5 h-4.5 text-gray-700" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ServiceCTA />
      <Footer />
    </main>
  );
}
