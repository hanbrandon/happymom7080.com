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
    const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

    return (
        <section ref={containerRef} className="py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
                    <ScrollReveal delay={0.1}>
                        <span className="text-brand font-bold uppercase tracking-[0.3em] mb-6 block text-sm">
                            {t('tag')}
                        </span>
                    </ScrollReveal>
                    
                    <ScrollReveal delay={0.2}>
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tighter mb-8">
                            {t('title')}
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mb-12">
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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden group"
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
                    <div className="absolute inset-0 bg-black/10 transition-opacity duration-700 group-hover:opacity-30" />
                </motion.div>
            </div>
        </section>
    );
}
