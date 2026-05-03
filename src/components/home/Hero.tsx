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
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[100vh] flex items-center overflow-hidden bg-white">
      {/* Background Image - Sharp and Clear */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full h-full"
        >
            <Image
              src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2070&auto=format&fit=crop"
              alt="HappyMom Care"
              fill
              className="object-cover"
              priority
            />
            {/* Minimal solid overlay for text readability - No Gradient */}
            <div className="absolute inset-0 bg-black/25 z-10" />
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-10 relative z-20">
        <motion.div 
            style={{ y: textY, opacity: textOpacity }}
            className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight leading-[1.05] mb-8">
              {t('title1')} <br />
              <span className="text-black">{t('title2')}</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed mb-12 font-medium"
          >
            {t('subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
            className="flex flex-wrap gap-4"
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
    </section>
  );
}
