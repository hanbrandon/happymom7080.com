'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SplitText from '@/components/ui/SplitText';
import ServiceCTA from '@/components/layout/ServiceCTA';

export default function ServicesContent() {
    const t = useTranslations('ServicesDetail');

    const postpartumServices = [
        {
            id: 'newborn',
            title: t('newbornTitle'),
            items: [
                t('newbornGrowth'),
                t('newbornDev'),
                t('newbornHygiene'),
                t('newbornClothing'),
            ],
        },
        {
            id: 'maternal',
            title: t('maternalTitle'),
            items: [
                t('maternalBody'),
                t('maternalBreast'),
                t('maternalHealing'),
                t('maternalNutrition'),
            ],
        },
        {
            id: 'family',
            title: t('familyTitle'),
            items: [t('familyHygiene'), t('familySupport'), t('familyOrg')],
        },
    ];

    return (
        <main className="min-h-screen bg-white relative">
            <Navbar />

            {/* 1. Standardized Minimalist Hero (Matching Guide Page) */}
            <section className="pt-48 pb-20 bg-white">
                <div className="container mx-auto px-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-sm font-bold text-gray-400 uppercase tracking-[0.3em] mb-6 block">
                            Our Services
                        </span>
                        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 tracking-tighter leading-[1.1] break-keep">
                            <SplitText text={t('heroTitle')} />
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* 2. Postpartum Section */}
            <section className="py-20 md:py-32 bg-white border-t border-gray-100">
                <div className="container mx-auto px-10">
                    <div className="mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                            {t('postpartumTitle')}
                        </h2>
                        <p className="text-xl text-gray-500 max-w-2xl">
                            {t('postpartumDesc')}
                        </p>
                    </div>

                    <div className="space-y-0 divide-y divide-gray-100">
                        {postpartumServices.map((service) => (
                            <div
                                key={service.id}
                                id={service.id}
                                className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 scroll-mt-32"
                            >
                                <div className="lg:col-span-4">
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                                        {service.title.split('(')[0]}
                                    </h3>
                                </div>
                                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                    {service.items.map((item, i) => (
                                        <div
                                            key={i}
                                            className="border-l border-gray-100 pl-6"
                                        >
                                            <h4 className="text-lg font-bold text-gray-900 mb-1">
                                                {item.split(':')[0]}
                                            </h4>
                                            <p className="text-sm text-gray-500 leading-relaxed">
                                                {item.split(':')[1]}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Distinct Babysitting Section (White background with Border) */}
            <section
                id="babysitting"
                className="py-20 md:py-32 bg-white border-t border-gray-100 scroll-mt-32"
            >
                <div className="container mx-auto px-10">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                            {t('babysitTitle')}
                        </h2>
                        <p className="text-xl text-gray-600 font-medium max-w-2xl">
                            {t('babysitDesc')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-4">
                            <h3 className="text-2xl font-bold text-gray-400 uppercase tracking-widest pt-2">
                                {t('babysitSub')}
                            </h3>
                        </div>
                        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                            {[
                                t('babysitExpert'),
                                t('babysitSafety'),
                                t('babysitBond'),
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="border-l border-gray-200 pl-6"
                                >
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                                        {item.split(':')[0]}
                                    </h4>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        {item.split(':')[1]}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Medical Disclaimer (Prominent Card) */}
            <section className="py-12 bg-white border-t border-gray-100">
                <div className="container mx-auto px-10">
                    <div className="p-10 bg-red-50 rounded-[2rem] border border-red-100">
                        <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-3">
                            <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs">
                                !
                            </span>
                            {t('medicalDisclaimerTitle')}
                        </h3>
                        <p className="text-sm text-red-800/80 font-medium leading-relaxed break-keep">
                            {t('medicalDisclaimerDesc')}
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. Service Warning (Existing) */}
            <section className="py-12 bg-white border-t border-gray-100">
                <div className="container mx-auto px-10">
                    <p className="text-xs text-gray-500 font-medium leading-relaxed break-keep">
                        ※ {t('warningDesc')}
                    </p>
                </div>
            </section>

            {/* 5. CTA Card (Standardized Shared Component) */}
            <ServiceCTA />

            <Footer />
        </main>
    );
}
