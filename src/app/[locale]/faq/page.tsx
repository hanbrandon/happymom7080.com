'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FAQSearchList from '@/components/faq/FAQSearchList';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function FAQPage() {
  const t = useTranslations('FAQ');

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* 1. Standardized Minimalist Hero */}
      <section className="pt-48 pb-20 bg-white">
        <div className="container mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-sm font-bold text-gray-500 uppercase tracking-[0.3em] mb-6 block">{t('tag')}</span>
            <h1 
              className="text-6xl md:text-8xl font-bold text-gray-900 tracking-tighter leading-[1.1] mb-8"
              dangerouslySetInnerHTML={{ __html: t('title') }}
            />
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
              "{t('subtitle')}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Full FAQ Search List Section */}
      <section className="border-t border-gray-100">
        <FAQSearchList />
      </section>
      
      <Footer />
    </main>
  );
}
