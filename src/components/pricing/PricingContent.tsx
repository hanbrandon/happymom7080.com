'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import ServiceCTA from '@/components/layout/ServiceCTA';
import SplitText from '@/components/ui/SplitText';

export default function PricingContent() {
  const t = useTranslations('PricingDetail');

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
            <span className="text-sm font-bold text-gray-400 uppercase tracking-[0.3em] mb-6 block">{t('heroTag')}</span>
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 tracking-tighter leading-[1.1] mb-8 break-keep">
              <SplitText text={t('heroTitle')} />
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 max-w-3xl leading-relaxed">
              "{t('heroSubtitle')}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Detailed Pricing Information */}
      <section className="py-32 bg-white border-t border-gray-100">
        <div className="container mx-auto px-10">
          <div className="mb-24">
             <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 mb-12">
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter">
                  {t('postpartumTitle')}
                </h2>
                <div className="bg-gray-50 px-6 py-3 rounded-2xl border border-gray-100">
                   <p className="text-sm text-gray-600 font-medium">
                     ※ {t('minPeriod')}
                   </p>
                </div>
             </div>
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Live-in Option */}
                <div className="group bg-gray-50 rounded-[2.5rem] p-12 border border-gray-100 transition-all hover:bg-white hover:shadow-xl">
                   <div className="flex justify-between items-start mb-8">
                      <h3 className="text-3xl font-bold text-gray-900 tracking-tight">{t('liveInTitle')}</h3>
                      <div className="text-right">
                         <p className="text-4xl font-bold text-gray-900 tracking-tight">{t('liveInPrice').split('/')[0]}</p>
                         <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mt-1">/ {t('liveInPrice').split('/')[1]}</p>
                      </div>
                   </div>
                   <div className="space-y-6">
                      <div className="pb-6 border-b border-gray-200/60">
                         <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-2">Payment Structure</p>
                         <p className="text-xl text-gray-700 font-medium">{t('liveInDeposit')}</p>
                      </div>
                      <div>
                         <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-2">Service Hours</p>
                         <p className="text-xl text-gray-700 font-medium">{t('liveInHours')}</p>
                      </div>
                   </div>
                </div>

                {/* Commuting Option */}
                <div className="group bg-gray-50 rounded-[2.5rem] p-12 border border-gray-100 transition-all hover:bg-white hover:shadow-xl">
                   <div className="flex justify-between items-start mb-8">
                      <h3 className="text-3xl font-bold text-gray-900 tracking-tight">{t('commutingTitle')}</h3>
                      <div className="text-right">
                         <p className="text-4xl font-bold text-gray-900 tracking-tight">{t('commutingPrice').split('/')[0]}</p>
                         <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mt-1">/ {t('commutingPrice').split('/')[1]}</p>
                      </div>
                   </div>
                   <div className="space-y-6">
                      <div className="pb-6 border-b border-gray-200/60">
                         <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-2">Payment Structure</p>
                         <p className="text-xl text-gray-700 font-medium">{t('commutingDeposit')}</p>
                      </div>
                      <div>
                         <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-2">Service Hours</p>
                         <p className="text-xl text-gray-700 font-medium">{t('commutingHours')}</p>
                      </div>
                   </div>
                </div>
             </div>

             {/* Out of State Note */}
             <div className="mt-12 bg-white border border-gray-100 p-10 rounded-[2rem]">
                <p className="text-lg text-gray-600 leading-relaxed break-keep">
                   {t('longDistanceNote')}
                </p>
             </div>
          </div>

          <div className="pt-24 border-t border-gray-100">
             <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 mb-16">
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter">
                   {t('additionalFeesTitle')}
                </h2>
             </div>
             
             <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                   <thead>
                      <tr className="border-b-2 border-gray-900">
                         <th className="pb-6 text-sm font-bold text-gray-400 uppercase tracking-widest">{t('feeTable.category')}</th>
                         <th className="pb-6 text-sm font-bold text-gray-400 uppercase tracking-widest">{t('feeTable.liveIn')}</th>
                         <th className="pb-6 text-sm font-bold text-gray-400 uppercase tracking-widest">{t('feeTable.commuting')}</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-100">
                      <tr>
                         <td className="py-8 text-lg font-bold text-gray-900">{t('feeTable.preschool')}</td>
                         <td className="py-8 text-lg text-gray-700 font-medium">{t('feeTable.rates.preschool')}</td>
                         <td className="py-8 text-lg text-gray-700 font-medium">{t('feeTable.rates.preschool')}</td>
                      </tr>
                      <tr>
                         <td className="py-8 text-lg font-bold text-gray-900">{t('feeTable.school')}</td>
                         <td className="py-8 text-lg text-gray-700 font-medium">{t('feeTable.rates.school')}</td>
                         <td className="py-8 text-lg text-gray-700 font-medium">{t('feeTable.rates.school')}</td>
                      </tr>
                      <tr>
                         <td className="py-8 text-lg font-bold text-gray-900">{t('feeTable.extraAdult')}</td>
                         <td className="py-8 text-lg text-gray-700 font-medium">{t('feeTable.rates.extraAdult')}</td>
                         <td className="py-8 text-lg text-gray-700 font-medium">{t('feeTable.rates.extraAdult')}</td>
                      </tr>
                   </tbody>
                </table>
             </div>
             
             {/* Integrated Disclaimer for Additional Fees */}
             <div className="pt-8 space-y-2">
                <p className="text-xs text-gray-600 font-medium leading-relaxed">
                   ※ {t('additionalFeesDesc')}
                </p>
                <p className="text-xs text-gray-600 font-medium leading-relaxed">
                   {t('localCriteria')}
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* 3. Final CTA (Standardized Shared Component) */}
      <ServiceCTA 
        title={t('ctaTitle')}
        buttonText={t('getQuote')}
      />

      <Footer />
    </main>
  );
}
