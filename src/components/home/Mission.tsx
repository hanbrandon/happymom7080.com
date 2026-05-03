'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PremiumButton from '@/components/ui/PremiumButton';

export default function Mission() {
    const t = useTranslations('Mission');

    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand font-bold uppercase tracking-[0.3em] mb-6 block text-sm"
                    >
                        {t('tag')}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tighter mb-8"
                    >
                        {t('title')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl text-gray-600 leading-relaxed max-w-3xl mb-12"
                    >
                        {t('description')}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <PremiumButton variant="primary">
                            {t('button')}
                        </PremiumButton>
                    </motion.div>
                </div>

                <div className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden group">
                    <Image
                        src="/home/about.png"
                        alt="Professional Postpartum Care"
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 transition-opacity duration-700 group-hover:opacity-30" />
                </div>
            </div>
        </section>
    );
}
