'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function PrivacyPage() {
  const t = useTranslations('Privacy');

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

      {/* Content */}
      <section className="py-20 border-t border-gray-100 bg-white">
        <div className="container mx-auto px-10">
          <div className="max-w-4xl mx-auto prose prose-gray">
            <div className="space-y-16">
              
              {/* Introduction */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">{t('sections.intro.title')}</h3>
                <p className="text-lg text-gray-500 leading-relaxed break-keep">
                  {t('sections.intro.content')}
                </p>
              </div>

              {/* Data Collection */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">{t('sections.data.title')}</h3>
                <div className="space-y-4">
                  <p className="text-lg text-gray-500 leading-relaxed">{t('sections.data.description')}</p>
                  <ul className="list-disc pl-6 text-lg text-gray-500 space-y-3">
                    <li><strong>{t('sections.data.items.0').split(':')[0]}:</strong>{t('sections.data.items.0').split(':')[1]}</li>
                    <li><strong>{t('sections.data.items.1').split(':')[0]}:</strong>{t('sections.data.items.1').split(':')[1]}</li>
                    <li><strong>{t('sections.data.items.2').split(':')[0]}:</strong>{t('sections.data.items.2').split(':')[1]}</li>
                    <li><strong>{t('sections.data.items.3').split(':')[0]}:</strong>{t('sections.data.items.3').split(':')[1]}</li>
                  </ul>
                </div>
              </div>

              {/* Purpose */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">{t('sections.purpose.title')}</h3>
                <p className="text-lg text-gray-500 leading-relaxed">{t('sections.purpose.description')}</p>
                <ul className="mt-4 list-disc pl-6 text-lg text-gray-500 space-y-2">
                  <li>{t('sections.purpose.items.0')}</li>
                  <li>{t('sections.purpose.items.1')}</li>
                  <li>{t('sections.purpose.items.2')}</li>
                  <li>{t('sections.purpose.items.3')}</li>
                  <li>{t('sections.purpose.items.4')}</li>
                </ul>
              </div>

              {/* CCPA Rights */}
              <div className="p-10 bg-gray-50 rounded-[2rem] border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">{t('sections.rights.title')}</h3>
                <p className="text-lg text-gray-500 leading-relaxed mb-6">
                  {t('sections.rights.description')}
                </p>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{t('sections.rights.know.title')}</h4>
                    <p className="text-gray-500">{t('sections.rights.know.content')}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{t('sections.rights.delete.title')}</h4>
                    <p className="text-gray-500">{t('sections.rights.delete.content')}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{t('sections.rights.optout.title')}</h4>
                    <p className="text-gray-500">{t('sections.rights.optout.content')}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{t('sections.rights.nondiscrim.title')}</h4>
                    <p className="text-gray-500">{t('sections.rights.nondiscrim.content')}</p>
                  </div>
                </div>
              </div>

              {/* Data Sharing */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">{t('sections.sharing.title')}</h3>
                <p className="text-lg text-gray-500 leading-relaxed">
                  {t('sections.sharing.description')}
                </p>
                <ul className="mt-4 list-disc pl-6 text-lg text-gray-500 space-y-2">
                  <li><strong>{t('sections.sharing.items.0').split(':')[0]}:</strong>{t('sections.sharing.items.0').split(':')[1]}</li>
                  <li><strong>{t('sections.sharing.items.1').split(':')[0]}:</strong>{t('sections.sharing.items.1').split(':')[1]}</li>
                  <li><strong>{t('sections.sharing.items.2').split(':')[0]}:</strong>{t('sections.sharing.items.2').split(':')[1]}</li>
                </ul>
              </div>

              {/* Security */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">{t('sections.security.title')}</h3>
                <p className="text-lg text-gray-500 leading-relaxed">
                  {t('sections.security.content')}
                </p>
              </div>

              {/* Contact */}
              <div className="pt-10 border-t border-gray-100">
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
