'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SplitText from '@/components/ui/SplitText';
import ServiceCTA from '@/components/layout/ServiceCTA';

export default function AboutContent() {
    const t = useTranslations('About');

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* 1. Standardized Minimalist Hero (Matching Guide Page) */}
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

            {/* 2. Narrative Section - Right Aligned Text */}
            <section className="py-40 bg-white border-t border-gray-100">
                <div className="container mx-auto px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div className="lg:col-span-7">
                            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight break-keep">
                                {t('description1')}
                            </h2>
                        </div>
                        <div className="lg:col-span-5 pt-4">
                            <div className="space-y-6">
                                <p className="text-xl text-gray-500 leading-relaxed break-keep">
                                    {t('description2')}
                                </p>
                                {t('description3') && (
                                    <p className="text-xl text-gray-500 leading-relaxed">
                                        {t('description3')}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Full-width Panoramic Image */}
            <section className="h-[50vh] relative overflow-hidden bg-gray-100 border-y border-gray-100">
                <Image
                    src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2000&auto=format&fit=crop"
                    alt="Panoramic"
                    fill
                    className="object-cover grayscale opacity-80"
                />
            </section>

            {/* 4. Milestone-style List (Big Title Left, Description Right) */}
            <section className="py-40 bg-white">
                <div className="container mx-auto px-10">
                    <div className="mb-24">
                        <h2 className="text-sm font-bold text-gray-400 uppercase tracking-[0.5em] mb-4">
                            {t('focusLabel')}
                        </h2>
                        <h3 className="text-5xl font-bold text-gray-900 tracking-tighter">
                            {t('focusTitle')}
                        </h3>
                    </div>

                    <div className="space-y-0">
                        {/* Global Experts */}
                        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-gray-100">
                            <div className="lg:col-span-5">
                                <h4 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-[-0.04em]">
                                    {t('pillar1Title')}
                                </h4>
                            </div>
                            <div className="lg:col-span-7 flex items-center">
                                <p className="text-xl text-gray-500 leading-relaxed font-medium break-keep">
                                    {t('pillar1Desc')}
                                </p>
                            </div>
                        </div>

                        {/* Carrot Partner */}
                        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-gray-100">
                            <div className="lg:col-span-5">
                                <h4 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-[-0.04em]">
                                    {t('pillar2Title')}
                                </h4>
                            </div>
                            <div className="lg:col-span-7 flex items-center">
                                <p className="text-xl text-gray-500 leading-relaxed font-medium break-keep">
                                    {t('pillar2Desc')}
                                </p>
                            </div>
                        </div>

                        {/* Essentials */}
                        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 border-y border-gray-100">
                            <div className="lg:col-span-5">
                                <h4 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-[-0.04em]">
                                    {t('pillar3Label')}
                                </h4>
                            </div>
                            <div className="lg:col-span-7 flex items-center">
                                <p className="text-xl text-gray-500 leading-relaxed font-medium break-keep">
                                    {t('pillar3Desc')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Compact CTA Card Finale (Standardized Shared Component) */}
            <ServiceCTA />

            <Footer />
        </main>
    );
}
