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

    const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* 1. Hero Section */}
            <section className="pt-64 pb-32 bg-white">
                <div className="container mx-auto px-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="text-xs font-black text-rose-400 uppercase tracking-[0.5em] mb-10 block">
                            Our Heritage & Journey
                        </span>
                        <h1 className="text-7xl md:text-[9rem] font-bold text-gray-900 tracking-tighter leading-[0.85] break-keep mb-12">
                            <SplitText text={t('title')} responsive />
                        </h1>
                        <p className="text-2xl md:text-3xl text-gray-400 max-w-4xl leading-tight font-light break-keep">
                            {t('subtitle')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Narrative Section */}
            <section className="py-52 bg-white border-t border-black/[0.03]">
                <div className="container mx-auto px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
                        <div className="lg:col-span-7">
                            <ScrollReveal>
                                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter leading-[1.1] break-keep">
                                    {t('description1')}
                                </h2>
                            </ScrollReveal>
                        </div>
                        <div className="lg:col-span-5 pt-4">
                            <StaggerContainer delayChildren={0.3}>
                                <div className="space-y-10">
                                    <StaggerItem>
                                        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light break-keep">
                                            {t('description2')}
                                        </p>
                                    </StaggerItem>
                                    {t('description3') && (
                                        <StaggerItem>
                                            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
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

            {/* 3. Parallax Panoramic Image */}
            <section ref={parallaxRef} className="h-[70vh] relative overflow-hidden bg-gray-900">
                <motion.div style={{ y, scale: 1.1 }} className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2000&auto=format&fit=crop"
                        alt="Panoramic"
                        fill
                        className="object-cover grayscale opacity-50 transition-all duration-1000"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
            </section>

            {/* 4. Pillars Section */}
            <section className="py-52 bg-white">
                <div className="container mx-auto px-10">
                    <div className="mb-32">
                        <ScrollReveal>
                            <span className="text-xs font-black text-rose-400 uppercase tracking-[0.5em] mb-6 block">
                                {t('focusLabel')}
                            </span>
                            <h3 className="text-6xl md:text-8xl font-bold text-gray-900 tracking-tighter leading-[0.9]">
                                {t('focusTitle')}
                            </h3>
                        </ScrollReveal>
                    </div>

                    <StaggerContainer>
                        <div className="space-y-0">
                            {[
                                { title: t('pillar1Title'), desc: t('pillar1Desc') },
                                { title: t('pillar2Title'), desc: t('pillar2Desc') },
                                { title: t('pillar3Label'), desc: t('pillar3Desc') }
                            ].map((pillar, idx) => (
                                <StaggerItem key={idx}>
                                    <div className="py-20 grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-black/[0.05] group hover:bg-gray-50 transition-colors duration-700 px-4 -mx-4 rounded-3xl">
                                        <div className="lg:col-span-5">
                                            <h4 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tighter leading-none group-hover:translate-x-2 transition-transform duration-700">
                                                {pillar.title}
                                            </h4>
                                        </div>
                                        <div className="lg:col-span-7 flex items-center">
                                            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light break-keep">
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
