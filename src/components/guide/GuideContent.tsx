'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import SplitText from '@/components/ui/SplitText';
import ServiceCTA from '@/components/layout/ServiceCTA';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

export default function GuideContent() {
  const t = useTranslations('Guide');

  const steps = [
    { number: '01', title: t('step01Title'), description: t.raw('step01Desc') },
    { number: '02', title: t('step02Title'), description: t.raw('step02Desc') },
    { number: '03', title: t('step03Title'), description: t.raw('step03Desc') },
    { number: '04', title: t('step04Title'), description: t.raw('step04Desc') },
    { number: '05', title: t('step05Title'), description: t.raw('step05Desc') },
    { number: '06', title: t('step06Title'), description: t.raw('step06Desc') }
  ];

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
            <h1 className="text-7xl md:text-[9rem] font-bold text-gray-900 tracking-tighter leading-[0.85] mb-12 break-keep">
              <SplitText text={t('heroTitle')} />
            </h1>
            <p className="text-2xl md:text-3xl text-gray-400 max-w-4xl leading-tight font-light break-keep">
              "{t('heroSubtitle')}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Service Process Steps */}
      <section className="py-52 bg-white border-t border-black/[0.03]">
        <div className="container mx-auto px-10">
          <div className="space-y-52">
            {steps.map((step, index) => (
              <ScrollReveal key={index}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                  {/* Step Number */}
                  <div className="lg:col-span-3">
                     <span className="text-[10rem] md:text-[12rem] font-black text-black/[0.03] block -mt-16 tracking-tighter leading-none">
                        {step.number}
                     </span>
                  </div>

                  {/* Step Content */}
                  <div id="contract-step" className="lg:col-span-9 space-y-10 pt-4">
                    <div className="flex items-center space-x-6 mb-4">
                        <div className="w-12 h-1.5 bg-rose-400 rounded-full" />
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter">
                          {step.title}
                        </h2>
                    </div>
                    <div 
                      className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-4xl font-light break-keep"
                      dangerouslySetInnerHTML={{ __html: step.description }}
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Additional Information Section */}
      <section className="py-52 bg-gray-50/50 border-y border-black/[0.03]">
        <div className="container mx-auto px-10">
          <div className="mb-32">
             <ScrollReveal>
                <h2 className="text-5xl md:text-8xl font-bold text-gray-900 tracking-tighter leading-none">
                  {t('additionalTitle')}
                </h2>
             </ScrollReveal>
          </div>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
              {[
                  { title: t('outOfStateTitle'), desc: t('outOfStateDesc') },
                  { title: t('insuranceTitle'), desc: t('insuranceDesc'), id: 'insurance' },
                  { title: t('scheduleTitle'), desc: t('scheduleDesc') }
              ].map((info, idx) => (
                  <StaggerItem key={idx}>
                      <div id={info.id} className="space-y-8 group">
                         <h4 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight group-hover:text-rose-400 transition-colors duration-500">
                             {info.title}
                         </h4>
                         <p className="text-xl text-gray-400 leading-relaxed font-light break-keep">
                             {info.desc}
                         </p>
                      </div>
                  </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      <ServiceCTA />
      <Footer />
    </main>
  );
}
