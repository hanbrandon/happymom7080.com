import { getTranslations } from 'next-intl/server';
import FAQContent from '@/components/faq/FAQContent';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'FAQ' });

  return {
    title: `FAQ | HappyMom`,
    description: t('subtitle'),
    openGraph: {
      title: `FAQ | HappyMom`,
      description: t('subtitle'),
      locale: locale,
      type: 'website',
    },
  };
}

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "산후조리 서비스란 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "산후조리 서비스란 출산 후 산욕기 동안 산모님께서 가정에서 편안하게 산후관리를 받을 수 있도록 전문적인 교육을 수료한 관리사가 방문하여 산모의 영양 및 건강관리, 신생아 돌보기 등을 지원하는 서비스입니다."
        }
      },
      {
        "@type": "Question",
        "name": "서비스 신청은 어떻게 하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "해피맘 웹사이트 하단에 있는 연락처로 전화를 주시거나, 문의 페이지를 통해 상담 신청을 해주시면 됩니다."
        }
      },
      {
        "@type": "Question",
        "name": "입주형과 출퇴근형 서비스의 차이는 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "입주형은 오전 9시부터 다음 날 오전 9시까지 24시간 상주하며 케어하며, 출퇴근형은 월~금 오전 9시부터 오후 6시까지 방문하여 서비스를 제공합니다."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FAQContent />
    </>
  );
}
