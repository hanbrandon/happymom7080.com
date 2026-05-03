'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function PolicyPage() {
  const t = useTranslations('Refund');

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <section className="pt-48 pb-20 bg-white">
        <div className="container mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-sm font-bold text-gray-400 uppercase tracking-[0.3em] mb-6 block">{t('tag')}</span>
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 tracking-tighter leading-[1.1] mb-8">
               {t.rich('title', {
                br: () => <br />
               })}
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 max-w-3xl leading-relaxed">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 border-t border-gray-100 bg-white">
        <div className="container mx-auto px-10">
          <div className="max-w-4xl mx-auto prose prose-gray">
            <div className="space-y-16">
              
              {/* 1. Legal Basis */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">{t('sections.basis.title')}</h3>
                <p className="text-lg text-gray-500 leading-relaxed break-keep">
                  {t('sections.basis.content')}
                </p>
              </div>

              {/* 2. Cancellation & Deposits */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">{t('sections.cancellation.title')}</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4 italic">{t('sections.cancellation.deposit.title')}</h4>
                    <p className="text-lg text-gray-500 leading-relaxed">
                       {t('sections.cancellation.deposit.content')}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">{t('sections.cancellation.deduction.title')}</h4>
                    <p className="text-lg text-gray-500 leading-relaxed">
                       {t('sections.cancellation.deduction.content')}
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Full Refund */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">{t('sections.full.title')}</h3>
                <p className="text-lg text-gray-500 leading-relaxed mb-6">
                  {t('sections.full.description')}
                </p>
                <ul className="list-disc pl-6 text-lg text-gray-500 space-y-2">
                  <li>{t('sections.full.items.0')}</li>
                  <li>{t('sections.full.items.1')}</li>
                  <li>{t('sections.full.items.2')}</li>
                </ul>
              </div>

              {/* 4. Provider's Liability */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">{t('sections.liability.title')}</h3>
                <p className="text-lg text-gray-500 leading-relaxed">
                   {t('sections.liability.content')}
                </p>
              </div>

              {/* 5. Jurisdiction */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">{t('sections.jurisdiction.title')}</h3>
                <p className="text-lg text-gray-500 leading-relaxed">
                   {t('sections.jurisdiction.content')}
                </p>
              </div>

              {/* Contact */}
              <div className="pt-10 border-t border-gray-100 text-right">
                <p className="text-lg text-gray-500 italic">
                  {t('contact')}
                </p>
                <p className="mt-4 text-sm text-gray-400">{t('updated')}</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
