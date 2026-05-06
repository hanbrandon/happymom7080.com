'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function DoNotSellContent() {
  const t = useTranslations('DoNotSell');
  const [isOptedOut, setIsOptedOut] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem('happymom_optout');
    if (status === 'true') setIsOptedOut(true);
  }, []);

  const handleOptOut = () => {
    const newStatus = !isOptedOut;
    setIsOptedOut(newStatus);
    localStorage.setItem('happymom_optout', String(newStatus));
    
    if (newStatus) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <section className="pt-48 pb-20 bg-white">
        <div className="container mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-bold text-gray-400 uppercase tracking-[0.3em] mb-6 block">{t('tag')}</span>
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 tracking-tighter leading-[1.1] mb-8">
              {t.rich('title', {
                br: () => <br />
              })}
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* One-Click Opt-Out Action Section */}
      <section className="py-20 md:py-32 bg-white border-t border-gray-100 text-center">
        <div className="container mx-auto px-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-8">
              {t('optout.title')}
            </h2>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              {t('optout.description')}
            </p>

            <div className="relative inline-block">
              <button
                onClick={handleOptOut}
                aria-pressed={isOptedOut}
                className={`group relative h-16 px-10 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-500 flex items-center gap-4 ${
                  isOptedOut 
                  ? 'bg-gray-100 text-gray-400 cursor-default' 
                  : 'bg-black text-white hover:bg-gray-900 active:scale-95'
                }`}
              >
                {isOptedOut ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    {t('optout.active')}
                  </>
                ) : (
                  t('optout.button')
                )}
              </button>

              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-full left-0 right-0 mt-4 text-emerald-600 font-bold text-sm flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4" />
                    {t('optout.success')}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32 bg-white border-t border-gray-100">
        <div className="container mx-auto px-10">
          <div className="max-w-4xl mx-auto prose prose-gray">
            <div className="space-y-16">
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">{t('commitment.title')}</h3>
                <p className="text-lg text-gray-500 leading-relaxed break-keep mb-8">
                   {t('commitment.content')}
                </p>
                <p className="text-lg text-gray-500 leading-relaxed">
                   {t('commitment.additional')}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">{t('ccpa.title')}</h3>
                <p className="text-lg text-gray-500 leading-relaxed mb-6">
                  {t('ccpa.content')}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">{t('other.title')}</h3>
                <p className="text-lg text-gray-500 leading-relaxed mb-8">
                  {t('other.description')}
                </p>
                <div className="space-y-6">
                   <div className="pb-6 border-b border-gray-100">
                      <h4 className="font-bold text-gray-900 mb-2">{t('other.email.title')}</h4>
                      <p className="text-gray-500">{t.rich('other.email.content', {
                        email: process.env.NEXT_PUBLIC_EMAIL || 'happymom7080@gmail.com'
                      })}</p>
                   </div>
                   <div className="pb-6 border-b border-gray-100">
                      <h4 className="font-bold text-gray-900 mb-2">{t('other.phone.title')}</h4>
                      <p className="text-gray-500">{t.rich('other.phone.content', {
                        phone: process.env.NEXT_PUBLIC_PHONE || '+1 (213) 999-4642',
                        a: (chunks) => <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_RAW || '12139994642'}`} className="text-black font-bold underline">{chunks}</a>
                      })}</p>
                   </div>
                </div>
              </div>

              <div className="pt-10 border-t border-gray-100">
                <p className="text-sm text-gray-400 leading-relaxed">
                  {t('footer')}
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
