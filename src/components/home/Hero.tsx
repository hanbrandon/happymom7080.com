'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="relative h-screen min-h-[700px] flex items-end pb-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="HappyMom Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container relative z-10 mx-auto px-10">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-6xl md:text-8xl font-bold text-white leading-[1.1] mb-8 tracking-tight"
          >
            {t('title1')} <br />
            {t('title2')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl leading-relaxed font-medium"
          >
            {t('subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-wrap gap-4"
          >
            <button className="px-10 h-14 rounded-full bg-white text-black font-bold text-base hover:bg-white/90 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer">
              {t('cta1')}
            </button>
            <button className="px-10 h-14 rounded-full border border-white text-white font-bold text-base hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer">
              {t('cta2')}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative gradient at bottom - subtle to ensure text contrast */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
    </section>
  );
}
