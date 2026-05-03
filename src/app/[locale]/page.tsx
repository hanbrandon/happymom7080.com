import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import Mission from '@/components/home/Mission';
import Story from '@/components/home/Story';
import Services from '@/components/home/Services';
import Pricing from '@/components/home/Pricing';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import Contact from '@/components/home/Contact';
import Footer from '@/components/layout/Footer';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Hero' });

  return {
    title: `HappyMom | ${t('title').replace('|', ' ')}`,
    description: "Professional Postpartum Care for Mothers Across the US. Expert newborn support and maternal healing.",
    openGraph: {
      title: `HappyMom | Premium Postpartum Care`,
      description: "Supporting mothers through their journey into motherhood with expert care.",
      locale: locale,
      type: 'website',
    },
  };
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Mission />
      <Story />
      <Services />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
