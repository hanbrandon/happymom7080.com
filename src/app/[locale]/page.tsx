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
import { happyMomBusinessSchema, languageAlternates, localizedPath, openGraphLocale, pageMeta } from '@/lib/seo';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const meta = pageMeta(locale, 'home');

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: localizedPath(locale),
      languages: languageAlternates(),
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

export default async function Home({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const jsonLd = happyMomBusinessSchema(locale);

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
