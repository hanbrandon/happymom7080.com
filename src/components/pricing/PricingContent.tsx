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
      <section className="pt-64 pb-32 bg-white">
        <div className="container mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-black text-rose-400 uppercase tracking-[0.5em] mb-10 block">{t('heroTag')}</span>
            <h1 className="text-7xl md:text-[9rem] font-bold text-gray-900 tracking-tighter leading-[0.85] mb-12">
              {t('heroTitle')}
            </h1>
            <p className="text-2xl md:text-3xl text-gray-400 max-w-4xl leading-tight font-light">
              "{t('heroSubtitle')}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Pricing Tables */}
      <section className="py-20 bg-white border-t border-black/[0.03]">
        <div className="container mx-auto px-10">
          
          {/* Postpartum Care Section */}
          <div className="mb-40">
             <ScrollReveal>
                <div className="flex items-end justify-between mb-20 border-b border-black/[0.05] pb-10">
                    <h2 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tighter leading-none">{t('postpartumTitle')}</h2>
                    <span className="text-gray-400 font-medium hidden md:block uppercase tracking-widest text-xs">{t('weeklyRates')}</span>
                </div>
             </ScrollReveal>

             <StaggerContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
                    <StaggerItem>
                        <div className="space-y-8 p-12 bg-gray-50/50 rounded-[3rem] border border-black/[0.03] hover:bg-gray-50 transition-colors duration-700">
                           <h3 className="text-xl font-black text-rose-400 uppercase tracking-[0.3em]">{t('liveInTitle')}</h3>
                           <div className="text-6xl md:text-7xl font-bold text-gray-900 py-6 tracking-tighter">
                              {t('liveInPrice')}
                           </div>
                           <div className="space-y-3 pt-4">
                              <p className="text-lg text-gray-900 font-bold tracking-tight">{t('liveInDeposit')}</p>
                              <p className="text-gray-500 font-light text-lg">{t('liveInHours')}</p>
                           </div>
                        </div>
                    </StaggerItem>
                    <StaggerItem>
                        <div className="space-y-8 p-12 bg-gray-50/50 rounded-[3rem] border border-black/[0.03] hover:bg-gray-50 transition-colors duration-700">
                           <h3 className="text-xl font-black text-rose-400 uppercase tracking-[0.3em]">{t('commutingTitle')}</h3>
                           <div className="text-6xl md:text-7xl font-bold text-gray-900 py-6 tracking-tighter">
                              {t('commutingPrice')}
                           </div>
                           <div className="space-y-3 pt-4">
                              <p className="text-lg text-gray-900 font-bold tracking-tight">{t('commutingDeposit')}</p>
                              <p className="text-gray-500 font-light text-lg">{t('commutingHours')}</p>
                           </div>
                        </div>
                    </StaggerItem>
                </div>
             </StaggerContainer>

             {/* Integrated Disclaimer for Postpartum Care */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-16 border-t border-black/[0.05]">
                <ScrollReveal>
                    <div className="space-y-8">
                       <p className="text-lg text-gray-900 font-bold leading-relaxed tracking-tight">
                          {t('minPeriod')}
                       </p>
                       <p className="text-sm text-rose-400 font-bold leading-relaxed tracking-wide">
                          ※ {t('longDistanceNote')}
                       </p>
                       <ul className="space-y-5 text-sm text-gray-500 font-light leading-relaxed">
                          {[
                              t('basicConditions'),
                              t('breakTimes'),
                              t('transportation'),
                              t('serviceChange'),
                              t('extension'),
                              t('commutingAreaNote')
                          ].map((item, i) => (
                              <li key={i} className="flex items-start space-x-4">
                                  <span className="w-1.5 h-1.5 rounded-full bg-rose-200 mt-2 shrink-0" />
                                  <span>{item}</span>
                              </li>
                          ))}
                       </ul>
                    </div>
                </ScrollReveal>

                {/* Right Column: Essential Info Cards */}
                <StaggerContainer>
                    <div className="space-y-8">
                       {/* 1. Insurance Section */}
                       <StaggerItem>
                           <div className="p-10 bg-white rounded-[2.5rem] border border-black/[0.05] shadow-sm hover:shadow-xl transition-all duration-700">
                              <h4 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">{t('carrotTitle')}</h4>
                              <p className="text-sm text-gray-400 font-light leading-relaxed mb-8">
                                 {t('carrotDesc')}
                              </p>
                              <Link href="/guide#insurance" className="text-xs text-black font-black uppercase tracking-widest border-b border-black pb-1 hover:text-rose-400 hover:border-rose-400 transition-all">
                                 Detailed Insurance Info →
                              </Link>
                           </div>
                       </StaggerItem>

                       {/* 2. Refund Summary Section */}
                       <StaggerItem>
                           <div className="p-10 bg-white rounded-[2.5rem] border border-black/[0.05] shadow-sm hover:shadow-xl transition-all duration-700">
                              <h4 className="text-xl font-bold text-gray-900 mb-8 tracking-tight">{t('refundTitle')}</h4>
                              <ul className="space-y-4 text-sm text-gray-500 font-light leading-relaxed mb-10">
                                 <li>• {t('noRefund')}</li>
                                 <li>• {t('fullRefund')}</li>
                                 <li>• {t('depositRefund')}</li>
                              </ul>
                              <Link href="/policy" className="text-xs text-black font-black uppercase tracking-widest border-b border-black pb-1 hover:text-rose-400 hover:border-rose-400 transition-all">
                                 {t('viewRefund')} →
                              </Link>
                           </div>
                       </StaggerItem>
                    </div>
                </StaggerContainer>
             </div>
          </div>

          {/* Babysitting */}
          <div className="mb-40">
             <ScrollReveal>
                <div className="flex items-end justify-between mb-20 border-b border-black/[0.05] pb-10">
                    <h2 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tighter leading-none">{t('babysitTitle')}</h2>
                    <span className="text-gray-400 font-medium hidden md:block uppercase tracking-widest text-xs">{t('premiumWeekly')}</span>
                </div>
             </ScrollReveal>

             <ScrollReveal delay={0.2}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
                    <div className="space-y-8 p-12 bg-gray-50/50 rounded-[3rem] border border-black/[0.03] hover:bg-gray-50 transition-colors duration-700">
                       <h3 className="text-xl font-black text-rose-400 uppercase tracking-[0.3em]">Premium Weekly</h3>
                       <div className="text-6xl md:text-7xl font-bold text-gray-900 py-6 tracking-tighter">
                          {t('babysitPrice')}
                       </div>
                       <div className="space-y-3 pt-4">
                          <p className="text-lg text-gray-900 font-bold tracking-tight">{t('babysitDeposit')}</p>
                          <p className="text-gray-500 font-light text-lg">{t('babysitHours')}</p>
                       </div>
                    </div>
                </div>
             </ScrollReveal>

             {/* Integrated Disclaimer for Babysitting (Customized) */}
             <ScrollReveal>
                <div className="pt-16 border-t border-black/[0.05]">
                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 text-sm text-gray-500 font-light leading-relaxed">
                      <li>※ {t('minPeriod')}</li>
                      <li>• {t('serviceChange')}</li>
                      <li>• {t('twins')}</li>
                      <li>• {t('breakTimes')}</li>
                      <li>• {t('extension')}</li>
                      <li>• {t('commutingAreaNote')}</li>
                   </ul>
                </div>
             </ScrollReveal>
          </div>

          {/* Additional Fees Table */}
          <div className="mb-40">
             <ScrollReveal>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b border-black/[0.05] pb-10 gap-6">
                    <h2 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tighter leading-none">{t('additionalFeesTitle')}</h2>
                </div>
             </ScrollReveal>

             <ScrollReveal delay={0.2}>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                       <thead>
                          <tr className="border-b-2 border-black">
                             <th className="py-8 text-xl font-black text-black uppercase tracking-widest">{t('feeTable.category')}</th>
                             <th className="py-8 text-xl font-black text-black uppercase tracking-widest">{t('feeTable.liveIn')}</th>
                             <th className="py-8 text-xl font-black text-black uppercase tracking-widest">{t('feeTable.commuting')}</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-black/[0.05]">
                          {[
                              { label: t('feeTable.preschool'), rate: t('feeTable.rates.preschool') },
                              { label: t('feeTable.school'), rate: t('feeTable.rates.school') },
                              { label: t('feeTable.extraAdult'), rate: t('feeTable.rates.extraAdult') }
                          ].map((row, i) => (
                              <tr key={i} className="group hover:bg-gray-50 transition-colors duration-500">
                                 <td className="py-10 text-xl font-bold text-gray-900 tracking-tight">{row.label}</td>
                                 <td className="py-10 text-xl text-gray-500 font-light">{row.rate}</td>
                                 <td className="py-10 text-xl text-gray-500 font-light">{row.rate}</td>
                              </tr>
                          ))}
                       </tbody>
                    </table>
                </div>
             </ScrollReveal>
             
             {/* Integrated Disclaimer for Additional Fees */}
             <ScrollReveal>
                <div className="pt-12 space-y-4">
                   <p className="text-sm text-gray-500 font-light leading-relaxed italic">
                      ※ {t('additionalFeesDesc')}
                   </p>
                   <p className="text-sm text-gray-500 font-light leading-relaxed italic">
                      {t('localCriteria')}
                   </p>
                </div>
             </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. Final CTA */}
      <section className="pb-40 bg-white">
         <div className="container mx-auto px-10">
            <ScrollReveal>
                <div className="relative w-full h-[450px] overflow-hidden rounded-[4rem] p-16 md:p-24 flex flex-col justify-center items-start group shadow-2xl shadow-rose-100/50">
                  <Image src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop" alt="CTA" fill className="object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out" />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-700" />
                  <div className="relative z-10 max-w-3xl">
                    <h2 className="text-4xl md:text-6xl font-bold text-white leading-[1.05] tracking-tighter mb-12">
                      Have more questions <br />about our <span className="text-rose-400">pricing plans?</span>
                    </h2>
                    <button className="h-16 px-12 bg-white text-black font-black text-xs rounded-full hover:bg-rose-400 hover:text-white transition-all duration-500 uppercase tracking-[0.4em] shadow-xl">
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
