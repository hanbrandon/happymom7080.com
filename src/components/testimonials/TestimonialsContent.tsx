'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ServiceCTA from '@/components/layout/ServiceCTA';

export default function TestimonialsContent() {
  const t = useTranslations('Testimonials');
  
  // Array of 8 testimonials matching the translation keys (items.0 to items.7)
  const testimonials = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    name: t(`items.${i}.name`),
    location: t(`items.${i}.location`),
    content: t(`items.${i}.content`),
    avatar: "/testimonials/avatar.png"
  }));

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
            <span className="text-sm font-bold text-gray-400 uppercase tracking-[0.3em] mb-6 block">{t('tag')}</span>
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 tracking-tighter leading-[1.1] mb-8">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 max-w-3xl leading-relaxed">
              "{t('subtitle')}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Masonry-style Grid of Testimonials */}
      <section className="py-32 bg-white border-t border-gray-100">
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {testimonials.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-10 bg-gray-50 flex flex-col justify-between"
              >
                <p className="text-lg text-gray-600 leading-relaxed italic mb-10 break-keep">
                  "{item.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 overflow-hidden rounded-full grayscale">
                    <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest">{item.name}</h4>
                    <p className="text-xs text-gray-400 font-medium">{item.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA />
      
      <Footer />
    </main>
  );
}
