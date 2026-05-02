'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function GuidePage() {
  const t = useTranslations('Guide');

  const steps = [
    { number: '01', title: t('step01Title'), description: t('step01Desc') },
    { number: '02', title: t('step02Title'), description: t('step02Desc') },
    { number: '03', title: t('step03Title'), description: t('step03Desc') },
    { number: '04', title: t('step04Title'), description: t('step04Desc') },
    { number: '05', title: t('step05Title'), description: t('step05Desc') },
    { number: '06', title: t('step06Title'), description: t('step06Desc') }
  ];

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
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 tracking-tighter leading-[1.1] mb-8">
              {t('heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 max-w-3xl leading-relaxed">
              "{t('heroSubtitle')}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Service Process Steps */}
      <section className="py-32 bg-white border-t border-gray-100">
        <div className="container mx-auto px-10">
          <div className="space-y-32">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
              >
                {/* Step Number */}
                <div className="lg:col-span-3">
                   <span className="text-8xl md:text-9xl font-bold text-gray-100 block -mt-4">
                      {step.number}
                   </span>
                </div>

                {/* Step Content */}
                <div id="contract-step" className="lg:col-span-9 space-y-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                    {step.title}
                  </h2>
                  <p 
                    className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-4xl"
                    dangerouslySetInnerHTML={{ __html: step.description }}
                  />
                  
                  {index !== steps.length - 1 && (
                    <div className="pt-16 border-b border-gray-50" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Additional Information Section */}
      <section className="py-40 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-10">
          <div className="mb-24">
             <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter mb-4">
               {t('additionalTitle')}
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6">
               <h4 className="text-2xl font-bold text-gray-900 tracking-tight">{t('outOfStateTitle')}</h4>
               <p className="text-lg text-gray-500 leading-relaxed">{t('outOfStateDesc')}</p>
            </div>
            <div id="insurance" className="space-y-6">
               <h4 className="text-2xl font-bold text-gray-900 tracking-tight">{t('insuranceTitle')}</h4>
               <p className="text-lg text-gray-500 leading-relaxed">{t('insuranceDesc')}</p>
            </div>
            <div className="space-y-6">
               <h4 className="text-2xl font-bold text-gray-900 tracking-tight">{t('scheduleTitle')}</h4>
               <p className="text-lg text-gray-500 leading-relaxed">{t('scheduleDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Compact CTA Card Finale (Standardized) */}
      <section className="pb-40 bg-white">
         <div className="container mx-auto px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-full h-[300px] overflow-hidden rounded-[2.5rem] p-10 md:p-16 flex flex-col justify-center items-start group"
            >
              <Image 
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop" 
                alt="CTA Background" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="relative z-10 max-w-2xl space-y-10">
                <h2 className="text-2xl md:text-3xl font-medium text-white leading-tight tracking-tight">
                  Ready to start your journey <br />with <span className="underline decoration-gray-500 underline-offset-8">professional care?</span>
                </h2>
                <button className="h-12 px-10 bg-white text-gray-900 font-bold text-xs rounded-full hover:bg-gray-100 transition-all uppercase tracking-[0.2em] cursor-pointer">
                  Contact Us
                </button>
              </div>
            </motion.div>
         </div>
      </section>
      
      <Footer />
    </main>
  );
}
