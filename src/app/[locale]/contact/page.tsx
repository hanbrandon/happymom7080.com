import { getTranslations } from 'next-intl/server';
import ContactContent from '@/components/contact/ContactContent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Contact' });

  return {
    title: `Contact | HappyMom`,
    description: t('subtitle'),
    openGraph: {
      title: `Contact | HappyMom`,
      description: t('subtitle'),
      locale: locale,
      type: 'website',
    },
  };
}

export default function ContactPage() {
  return <ContactContent />;
}
