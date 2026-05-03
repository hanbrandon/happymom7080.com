'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function TermsPage() {
  const t = useTranslations('Terms');

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
      <section className="py-20 md:py-32 border-t border-gray-100 bg-white">
        <div className="container mx-auto px-10">
          <div className="max-w-4xl mx-auto prose prose-gray">
            <div className="space-y-16">
              
              {/* Medical Disclaimer - NEW & CRITICAL */}
              <div className="p-10 bg-red-50 rounded-[2rem] border border-red-100">
                <h3 className="text-2xl font-bold text-red-900 mb-6 tracking-tight flex items-center gap-3">
                  <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm">!</span>
                  {t('sections.disclaimer.title')}
                </h3>
                <p className="text-lg text-red-800/80 leading-relaxed font-medium">
                  {t('sections.disclaimer.content')}
                </p>
              </div>

              {/* 1. Website Terms */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">{t('sections.website.title')}</h3>
                <p className="text-lg text-gray-500 leading-relaxed break-keep mb-6">
                  {t('sections.website.content')}
                </p>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{t('sections.website.ip.title')}</h4>
                    <p className="text-gray-500 text-lg leading-relaxed">
                      {t('sections.website.ip.content')}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{t('sections.website.prohibited.title')}</h4>
                    <p className="text-gray-500 text-lg leading-relaxed">
                      {t('sections.website.prohibited.content')}
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. Service Agreement */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">{t('sections.service.title')}</h3>
                <p className="text-lg text-gray-500 leading-relaxed break-keep mb-8">
                  {t('sections.service.content')}
                </p>
                
                <div className="space-y-10">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">{t('sections.service.scope.title')}</h4>
                    <p className="text-lg text-gray-500 leading-relaxed">
                      {t('sections.service.scope.content')}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">{t('sections.service.travel.title')}</h4>
                    <p className="text-lg text-gray-500 leading-relaxed">
                      {t('sections.service.travel.content')}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">{t('sections.service.termination.title')}</h4>
                    <p className="text-lg text-gray-500 leading-relaxed mb-6">
                      {t('sections.service.termination.content')}
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Jurisdiction */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">{t('sections.jurisdiction.title')}</h3>
                <p className="text-lg text-gray-500 leading-relaxed">
                  {t('sections.jurisdiction.content')}
                </p>
              </div>

              {/* Contact */}
              <div className="pt-10 border-t border-gray-100 text-right">
                <p className="text-lg text-gray-500 italic">
                  {t('consent')}
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
