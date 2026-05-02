'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ServicesPage() {
  const t = useTranslations('ServicesDetail');

  const postpartumServices = [
    { id: 'newborn', title: t('newbornTitle'), items: [t('newbornGrowth'), t('newbornDev'), t('newbornHygiene'), t('newbornClothing')] },
    { id: 'maternal', title: t('maternalTitle'), items: [t('maternalBody'), t('maternalBreast'), t('maternalHealing'), t('maternalNutrition')] },
    { id: 'family', title: t('familyTitle'), items: [t('familyHygiene'), t('familySupport'), t('familyOrg')] }
  ];

  return (
    <main className="min-h-screen bg-white relative">
      {/* Premium Grainy Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <Navbar />
      
      {/* 1. Standardized Minimalist Hero (Matching Guide Page) */}
      <section className="pt-48 pb-20 bg-white">
        <div className="container mx-auto px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm font-bold text-gray-400 uppercase tracking-[0.3em] mb-6 block">Our Services</span>
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 tracking-tighter leading-[1.1]">
              {t('heroTitle').split('&')[0]} <br /> & {t('heroTitle').split('&')[1]}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. Postpartum Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-10">
          <div className="mb-20">
             <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">{t('postpartumTitle')}</h2>
             <p className="text-xl text-gray-500 max-w-2xl">{t('postpartumDesc')}</p>
          </div>

          <div className="space-y-0 divide-y divide-gray-100">
            {postpartumServices.map((service) => (
              <div key={service.id} id={service.id} className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 scroll-mt-32">
                <div className="lg:col-span-4">
                   <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                     {service.title.split('(')[0]}
                   </h3>
                </div>
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                   {service.items.map((item, i) => (
                     <div key={i} className="border-l border-gray-100 pl-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-1">{item.split(':')[0]}</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">{item.split(':')[1]}</p>
                     </div>
                   ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Distinct Babysitting Section (White background with Border) */}
      <section id="babysitting" className="py-20 bg-white border-t border-gray-100 scroll-mt-32">
        <div className="container mx-auto px-10">
          <div className="mb-16">
             <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">{t('babysitTitle')}</h2>
             <p className="text-xl text-gray-600 font-medium max-w-2xl">{t('babysitDesc')}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
               <h3 className="text-2xl font-bold text-gray-400 uppercase tracking-widest pt-2">
                 {t('babysitSub')}
               </h3>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
               {[t('babysitExpert'), t('babysitSafety'), t('babysitBond')].map((item, i) => (
                 <div key={i} className="border-l border-gray-200 pl-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{item.split(':')[0]}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.split(':')[1]}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Warning Quote */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-10">
           <div className="max-w-4xl mx-auto py-12 border-y border-gray-100 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight italic">
                "{t('warningDesc')}"
              </h3>
           </div>
        </div>
      </section>

      {/* 5. CTA Card */}
      <section className="pb-32 bg-white">
         <div className="container mx-auto px-10">
            <div className="relative w-full h-[300px] overflow-hidden rounded-[2rem] p-10 flex flex-col justify-center items-start group">
              <Image src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop" alt="CTA" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative z-10 space-y-6">
                <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight">Ready for professional care?</h2>
                <button className="h-11 px-8 bg-white text-gray-900 font-bold text-xs rounded-full uppercase tracking-wider">Contact Us</button>
              </div>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
