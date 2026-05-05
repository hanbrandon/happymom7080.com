import { getTranslations } from 'next-intl/server';
import ContactContent from '@/components/contact/ContactContent';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Contact' });

  const baseUrl = 'https://happymom7080.com';
  const path = '/contact';

  return {
    title: t('browserTitle'),
    description: t('subtitle'),
    alternates: {
      canonical: locale === 'ko' ? `${baseUrl}${path}` : `${baseUrl}/en${path}`,
      languages: {
        'ko-KR': `${baseUrl}${path}`,
        'en-US': `${baseUrl}/en${path}`,
      },
    },
    openGraph: {
      title: `Contact | HappyMom`,
      description: t('subtitle'),
      locale: locale,
      type: 'website',
    },
  };
}

export default async function ContactPage({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "HappyMom",
      "telephone": "213-210-8274",
      "email": "happymom7080@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Los Angeles",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    },
    "description": locale === 'ko' ? "해피맘 서비스에 대해 궁금한 점을 문의해 주세요." : "Contact us for any questions regarding HappyMom services."
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
