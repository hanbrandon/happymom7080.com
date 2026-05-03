'use client';

import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import PremiumButton from '@/components/ui/PremiumButton';

export default function Hero() {
  const t = useTranslations('Hero');
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[100vh] flex items-center overflow-hidden bg-black">
      {/* Background Image with Zoom and Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full h-full"
        >
            <Image
              src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2070&auto=format&fit=crop"
              alt="HappyMom Care"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40 z-10" />
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-10 relative z-20">
        <motion.div 
            style={{ y: textY, opacity: textOpacity }}
            className="max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-bold text-white tracking-tighter leading-[0.9] mb-10">
              {t('title1')} <br />
              <span className="text-rose-400">{t('title2')}</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-3xl text-white/80 max-w-2xl leading-tight mb-16 font-light"
          >
            {t('subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-6"
          >
            <PremiumButton variant="primary">
              {t('cta1')}
            </PremiumButton>

            <PremiumButton variant="secondary">
              {t('cta2')}
            </PremiumButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white via-white/50 to-transparent z-10" />
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-4"
      >
        <span className="text-[10px] text-black font-black uppercase tracking-[0.5em] rotate-90 mb-8 origin-center">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-black to-transparent" />
      </motion.div>
    </section>
  );
}
