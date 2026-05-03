'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import SplitText from '@/components/ui/SplitText';
import ServiceCTA from '@/components/layout/ServiceCTA';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

export default function AboutContent() {
    const t = useTranslations('About');
    const parallaxRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: parallaxRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

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
                        <span className="text-sm font-bold text-gray-400 uppercase tracking-[0.3em] mb-6 block">
                            About Our Journey
                        </span>
                        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 tracking-tighter leading-[1.1] break-keep">
                            <SplitText text={t('title')} responsive />
                        </h1>
                        <p className="mt-8 text-xl text-gray-500 max-w-3xl break-keep">
                            {t('subtitle')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Narrative Section */}
            <section className="py-20 md:py-32 bg-white border-t border-gray-100">
                <div className="container mx-auto px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div className="lg:col-span-7">
                            <ScrollReveal>
                                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight break-keep">
                                    {t('description1')}
                                </h2>
                            </ScrollReveal>
                        </div>
                        <div className="lg:col-span-5 pt-4">
                            <StaggerContainer>
                                <div className="space-y-6">
                                    <StaggerItem>
                                        <p className="text-xl text-gray-500 leading-relaxed break-keep">
                                            {t('description2')}
                                        </p>
                                    </StaggerItem>
                                    {t('description3') && (
                                        <StaggerItem>
                                            <p className="text-xl text-gray-500 leading-relaxed">
                                                {t('description3')}
                                            </p>
                                        </StaggerItem>
                                    )}
                                </div>
                            </StaggerContainer>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Parallax Panoramic Image - Clear and Sharp */}
            <section ref={parallaxRef} className="h-[50vh] relative overflow-hidden bg-gray-100 border-y border-gray-100">
                <motion.div style={{ y }} className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2000&auto=format&fit=crop"
                        alt="Panoramic"
                        fill
                        className="object-cover opacity-100"
                    />
                </motion.div>
            </section>

            {/* 4. Pillars Section */}
            <section className="py-20 md:py-32 bg-white">
                <div className="container mx-auto px-10">
                    <div className="mb-24">
                        <ScrollReveal>
                            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-[0.5em] mb-4">
                                {t('focusLabel')}
                            </h2>
                            <h3 className="text-5xl font-bold text-gray-900 tracking-tighter">
                                {t('focusTitle')}
                            </h3>
                        </ScrollReveal>
                    </div>

                    <StaggerContainer>
                        <div className="space-y-0">
                            {[
                                { title: t('pillar1Title'), desc: t('pillar1Desc') },
                                { title: t('pillar2Title'), desc: t('pillar2Desc') },
                                { title: t('pillar3Title'), desc: t('pillar3Desc') }
                            ].map((pillar, idx) => (
                                <StaggerItem key={idx}>
                                    <div className="py-10 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 border-t border-gray-100 last:border-b transition-colors duration-500">
                                        <div className="lg:col-span-5">
                                            <h4 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
                                                {pillar.title}
                                            </h4>
                                        </div>
                                        <div className="lg:col-span-7 flex items-center">
                                            <p className="text-xl text-gray-500 leading-relaxed font-medium break-keep">
                                                {pillar.desc}
                                            </p>
                                        </div>
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
