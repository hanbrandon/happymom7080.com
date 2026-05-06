'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import SplitText from '@/components/ui/SplitText';
import ServiceCTA from '@/components/layout/ServiceCTA';
import Image from 'next/image';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

import cert1 from '../../../public/certs/cert1.png';
import cert2 from '../../../public/certs/cert2.png';
import cert3 from '../../../public/certs/cert3.png';
import cert4 from '../../../public/certs/cert4.png';
import cert5 from '../../../public/certs/cert5.png';

const certificates = [cert1, cert2, cert3, cert4, cert5];

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

      {/* 2. Service Process Steps */}
      <section className="py-20 md:py-32 bg-white border-t border-gray-100">
        <div className="container mx-auto px-10">
          <div className="space-y-32">
            {steps.map((step, index) => (
              <ScrollReveal key={index}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
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
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Certifications Section */}
      <section className="py-20 md:py-32 bg-white border-t border-gray-100">
        <div className="container mx-auto px-10">
          <div className="max-w-4xl mb-16">
            <ScrollReveal>
              <span className="text-sm font-bold text-gray-400 uppercase tracking-[0.3em] mb-4 block">
                {t('certTag')}
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter mb-6">
                {t('certTitle')}
              </h2>
              <p className="text-xl text-gray-500 leading-relaxed">
                {t('certSubtitle')}
              </p>
            </ScrollReveal>
          </div>

          <StaggerContainer>
            {/* Desktop Grid / Mobile Carousel */}
            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 -mx-10 px-10 md:mx-0 md:px-0 scrollbar-hide">
              {certificates.map((certSrc, index) => (
                <StaggerItem key={index} className="min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center">
                  <div className="group relative aspect-[4/3] bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                    <Image
                      src={certSrc}
                      alt={`Certification ${index + 1}`}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 33vw"
                      placeholder="blur"
                    />
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* 4. Additional Information Section */}
      <section className="py-20 md:py-32 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-10">
          <div className="mb-24">
             <ScrollReveal>
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter mb-4">
                  {t('additionalTitle')}
                </h2>
             </ScrollReveal>
          </div>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                  { title: t('outOfStateTitle'), desc: t('outOfStateDesc') },
                  { title: t('insuranceTitle'), desc: t('insuranceDesc'), id: 'insurance' },
                  { title: t('scheduleTitle'), desc: t('scheduleDesc') }
              ].map((info, idx) => (
                  <StaggerItem key={idx}>
                      <div id={info.id} className="space-y-6">
                         <h4 className="text-2xl font-bold text-gray-900 tracking-tight">{info.title}</h4>
                         <p className="text-lg text-gray-500 leading-relaxed">{info.desc}</p>
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
