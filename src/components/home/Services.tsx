'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import {
    ScrollReveal,
    StaggerContainer,
    StaggerItem,
} from '@/components/ui/ScrollReveal';

export default function Services() {
    const t = useTranslations('Services');

    const services = [
        {
            id: 'newborn',
            title: t('newborn'),
            desc: t('newbornDesc'),
            image: '/service-1.png',
        },
        {
            id: 'maternal',
            title: t('maternal'),
            desc: t('maternalDesc'),
            image: '/service-2.png',
        },
        {
            id: 'family',
            title: t('family'),
            desc: t('familyDesc'),
            image: '/service-3.png',
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-white border-t border-gray-50">
            <div className="container mx-auto px-10">
                <div className="flex flex-col lg:flex-row items-start justify-between mb-10 md:mb-16 gap-8">
                    <div className="max-w-xl">
                        <ScrollReveal>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 md:mb-6 tracking-tighter">
                                {t('title')}
                            </h2>
                        </ScrollReveal>
                    </div>
                    <div className="lg:max-w-md pt-2">
                        <ScrollReveal delay={0.2}>
                            <p className="text-lg text-gray-500 leading-relaxed">
                                {t('subtitle')}
                            </p>
                        </ScrollReveal>
                    </div>
                </div>

                <StaggerContainer>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <StaggerItem key={index}>
                                <div className="relative group aspect-square md:aspect-[4/5] overflow-hidden rounded-lg cursor-pointer">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
                                    />
                                    {/* Shorter Natural Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent h-1/2" />

                                    {/* Top-left Title */}
                                    <div className="absolute top-8 left-8 pr-8">
                                        <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm text-white/80 leading-relaxed font-medium">
                                            {service.desc}
                                        </p>
                                    </div>

                                    {/* Bottom Button */}
                                    <div className="absolute inset-x-6 bottom-6">
                                        <Link
                                            href={`/services#${service.id}`}
                                            className="w-full h-14 px-6 rounded-full bg-white/20 backdrop-blur-[30px] text-white font-bold text-base flex items-center justify-between border border-white/20 hover:bg-white/30 hover:-translate-y-1 hover:shadow-xl transition-all group/btn"
                                        >
                                            <span>{t('learnMore')}</span>
                                            <span className="text-xl group-hover/btn:translate-x-1 transition-transform">
                                                →
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </div>
        </section>
    );
}
