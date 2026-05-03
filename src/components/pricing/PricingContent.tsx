'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

export default function PricingContent() {
  const t = useTranslations('PricingDetail');

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="pt-48 pb-20 bg-white">
        <div className="container mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-sm font-bold text-gray-500 uppercase tracking-[0.3em] mb-6 block">{t('heroTag')}</span>
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 tracking-tighter leading-[1.1] mb-8">
              {t('heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
              "{t('heroSubtitle')}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Pricing Tables */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-10">
          
          {/* Postpartum Care Section */}
          <div className="mb-32">
             <ScrollReveal>
                <div className="flex items-end justify-between mb-16 border-b border-gray-200 pb-8">
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">{t('postpartumTitle')}</h2>
                    <span className="text-gray-500 font-medium hidden md:block">{t('weeklyRates')}</span>
                </div>
             </ScrollReveal>

             <StaggerContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    <StaggerItem>
                        <div className="space-y-6">
                           <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-widest">{t('liveInTitle')}</h3>
                           <div className="text-5xl font-bold text-gray-900 py-4 border-y border-gray-100">
                              {t('liveInPrice')}
                           </div>
                           <div className="space-y-2">
                              <p className="text-lg text-gray-900 font-bold">{t('liveInDeposit')}</p>
                              <p className="text-gray-700">{t('liveInHours')}</p>
                           </div>
                        </div>
                    </StaggerItem>
                    <StaggerItem>
                        <div className="space-y-6">
                           <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-widest">{t('commutingTitle')}</h3>
                           <div className="text-5xl font-bold text-gray-900 py-4 border-y border-gray-100">
                              {t('commutingPrice')}
                           </div>
                           <div className="space-y-2">
                              <p className="text-lg text-gray-900 font-bold">{t('commutingDeposit')}</p>
                              <p className="text-gray-700">{t('commutingHours')}</p>
                           </div>
                        </div>
                    </StaggerItem>
                </div>
             </StaggerContainer>

             {/* Integrated Disclaimer for Postpartum Care */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-gray-100">
                <ScrollReveal>
                    <div className="space-y-6">
                       <p className="text-sm text-gray-900 font-bold leading-relaxed">
                          {t('minPeriod')}
                       </p>
                       <p className="text-xs text-gray-900 font-bold leading-relaxed">
                          ※ {t('longDistanceNote')}
                       </p>
                       <ul className="space-y-4 text-xs text-gray-600 font-medium leading-relaxed">
                          <li>{t('basicConditions')}</li>
                          <li>{t('breakTimes')}</li>
                          <li>{t('transportation')}</li>
                          <li>{t('serviceChange')}</li>
                          <li>{t('extension')}</li>
                          <li>{t('commutingAreaNote')}</li>
                       </ul>
                    </div>
                </ScrollReveal>

                {/* Right Column: Essential Info Cards */}
                <StaggerContainer>
                    <div className="space-y-8">
                       {/* 1. Insurance Section */}
                       <StaggerItem>
                           <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                              <h4 className="text-lg font-bold text-gray-900 mb-4">{t('carrotTitle')}</h4>
                              <p className="text-xs text-gray-600 font-medium leading-relaxed mb-6">
                                 {t('carrotDesc')}
                              </p>
                              <Link href="/guide#insurance" className="text-xs text-gray-900 font-bold underline underline-offset-4 hover:text-gray-600 transition-colors">
                                 Insurance Support 자세히 보기 →
                              </Link>
                           </div>
                       </StaggerItem>

                       {/* 2. Refund Summary Section */}
                       <StaggerItem>
                           <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                              <h4 className="text-lg font-bold text-gray-900 mb-6">{t('refundTitle')}</h4>
                              <ul className="space-y-4 text-xs text-gray-700 font-medium leading-relaxed mb-8">
                                 <li>{t('noRefund')}</li>
                                 <li>{t('fullRefund')}</li>
                                 <li>{t('depositRefund')}</li>
                              </ul>
                              <Link href="/policy" className="text-xs text-gray-900 font-bold underline underline-offset-4 hover:text-gray-600 transition-colors">
                                 {t('viewRefund')} →
                              </Link>
                           </div>
                       </StaggerItem>

                       {/* 3. Contract Section */}
                       <StaggerItem>
                           <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between">
                              <h4 className="text-lg font-bold text-gray-900">{t('officialContract')}</h4>
                              <Link href="/guide#contract-step" className="text-xs text-gray-900 font-bold underline underline-offset-4 hover:text-gray-600 transition-colors">
                                 {t('viewContract')} →
                              </Link>
                           </div>
                       </StaggerItem>
                    </div>
                </StaggerContainer>
             </div>
          </div>

          {/* Babysitting */}
          <div className="mb-32">
             <ScrollReveal>
                <div className="flex items-end justify-between mb-16 border-b border-gray-200 pb-8">
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">{t('babysitTitle')}</h2>
                    <span className="text-gray-500 font-medium hidden md:block">{t('premiumWeekly')}</span>
                </div>
             </ScrollReveal>

             <ScrollReveal delay={0.2}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    <div className="space-y-6">
                       <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-widest">Premium Weekly</h3>
                       <div className="text-5xl font-bold text-gray-900 py-4 border-y border-gray-100">
                          {t('babysitPrice')}
                       </div>
                       <div className="space-y-2">
                          <p className="text-lg text-gray-900 font-bold">{t('babysitDeposit')}</p>
                          <p className="text-gray-700">{t('babysitHours')}</p>
                       </div>
                    </div>
                </div>
             </ScrollReveal>

             {/* Integrated Disclaimer for Babysitting (Customized) */}
             <ScrollReveal>
                <div className="pt-12 border-t border-gray-100">
                   <ul className="space-y-4 text-xs text-gray-600 font-medium leading-relaxed">
                      <li>※ {t('minPeriod')}</li>
                      <li>{t('serviceChange')}</li>
                      <li>{t('twins')}</li>
                      <li>{t('breakTimes')}</li>
                      <li>{t('extension')}</li>
                      <li>{t('commutingAreaNote')}</li>
                   </ul>
                </div>
             </ScrollReveal>
          </div>

          {/* Additional Fees Table */}
          <div className="mb-32">
             <ScrollReveal>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-gray-200 pb-8 gap-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">{t('additionalFeesTitle')}</h2>
                </div>
             </ScrollReveal>

             <ScrollReveal delay={0.2}>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                       <thead>
                          <tr className="border-b-2 border-gray-900">
                             <th className="py-6 text-xl font-bold text-gray-900">{t('feeTable.category')}</th>
                             <th className="py-6 text-xl font-bold text-gray-900">{t('feeTable.liveIn')}</th>
                             <th className="py-6 text-xl font-bold text-gray-900">{t('feeTable.commuting')}</th>
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
             </ScrollReveal>
             
             {/* Integrated Disclaimer for Additional Fees */}
             <ScrollReveal>
                <div className="pt-8 space-y-2">
                   <p className="text-xs text-gray-600 font-medium leading-relaxed">
                      ※ {t('additionalFeesDesc')}
                   </p>
                   <p className="text-xs text-gray-600 font-medium leading-relaxed">
                      {t('localCriteria')}
                   </p>
                </div>
             </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. Final CTA */}
      <section className="pb-32 bg-white">
         <div className="container mx-auto px-10">
            <ScrollReveal>
                <div className="relative w-full h-[300px] overflow-hidden rounded-[2.5rem] p-10 md:p-16 flex flex-col justify-center items-start group shadow-xl">
                  <Image src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop" alt="CTA" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" />
                  <div className="relative z-10 max-w-2xl space-y-10">
                    <h2 className="text-2xl md:text-3xl font-medium text-white leading-tight tracking-tight">
                      Have more questions <br />about our <span className="underline decoration-gray-500 underline-offset-8">pricing plans?</span>
                    </h2>
                    <button className="h-12 px-10 bg-white text-gray-900 font-bold text-xs rounded-full hover:bg-gray-100 transition-all uppercase tracking-[0.2em]">
                      {t('getQuote')}
                    </button>
                  </div>
                </div>
            </ScrollReveal>
         </div>
      </section>

      <Footer />
    </main>
  );
}
