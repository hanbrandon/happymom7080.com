'use client';

import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import PremiumButton from '@/components/ui/PremiumButton';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function Mission() {
    const t = useTranslations('Mission');
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
    const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section ref={containerRef} className="py-40 bg-white overflow-hidden">
            <div className="container mx-auto px-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-24">
                    <ScrollReveal delay={0.1}>
                        <span className="text-rose-400 font-bold uppercase tracking-[0.4em] mb-8 block text-xs">
                            {t('tag')}
                        </span>
                    </ScrollReveal>
                    
                    <ScrollReveal delay={0.2}>
                        <h2 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tighter mb-10">
                            {t('title')}
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mb-14 font-light">
                            {t('description')}
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <PremiumButton variant="primary">
                            {t('button')}
                        </PremiumButton>
                    </ScrollReveal>
                </div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative aspect-[21/9] rounded-[3rem] overflow-hidden group shadow-2xl shadow-rose-100/50"
                >
                    <motion.div 
                        style={{ scale: imageScale, y: imageY }}
                        className="absolute inset-0"
                    >
                        <Image
                            src="/home/about.png"
                            alt="Professional Postpartum Care"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-80" />
                    
                    {/* Interactive Overlay Tag */}
                    <div className="absolute bottom-10 left-10 text-white z-10">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex items-center space-x-4"
                        >
                            <div className="w-12 h-[1px] bg-white/50" />
                            <span className="text-xs font-bold uppercase tracking-widest opacity-80">Premium Heritage</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
