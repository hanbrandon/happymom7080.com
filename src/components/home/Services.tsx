'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

export default function Services() {
    const t = useTranslations('Services');

    const services = [
        {
            id: 'newborn',
            title: t('newborn'),
            desc: t('newbornDesc'),
            image: '/home/service-1.png',
        },
        {
            id: 'maternal',
            title: t('maternal'),
            desc: t('maternalDesc'),
            image: '/home/service-2.png',
        },
        {
            id: 'family',
            title: t('family'),
            desc: t('familyDesc'),
            image: '/home/service-3.png',
        },
    ];

    return (
        <section className="py-40 bg-white">
            <div className="container mx-auto px-10">
                <div className="flex flex-col lg:flex-row items-start justify-between mb-24 gap-12">
                    <div className="max-w-2xl">
                        <ScrollReveal>
                            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tighter leading-[0.95]">
                                {t('title')}
                            </h2>
                        </ScrollReveal>
                    </div>
                    <div className="lg:max-w-md">
                        <ScrollReveal delay={0.2}>
                            <p className="text-xl text-gray-400 leading-relaxed font-light">
                                {t('subtitle')}
                            </p>
                        </ScrollReveal>
                    </div>
                </div>

                <StaggerContainer>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <StaggerItem key={index}>
                                <div className="relative group aspect-[4/5] overflow-hidden rounded-[2rem] cursor-pointer bg-gray-100">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                                    />
                                    {/* Natural Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent h-2/3 opacity-80" />

                                    {/* Top-left Title */}
                                    <div className="absolute top-10 left-10 pr-10">
                                        <h3 className="text-3xl font-bold text-white tracking-tighter mb-3">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm text-white/70 leading-relaxed font-medium max-w-[200px]">
                                            {service.desc}
                                        </p>
                                    </div>

                                    {/* Bottom Button */}
                                    <div className="absolute inset-x-8 bottom-8">
                                        <Link
                                            href={`/services#${service.id}`}
                                            className="w-full h-16 px-8 rounded-full bg-white/10 backdrop-blur-2xl text-white font-bold text-sm flex items-center justify-between border border-white/20 hover:bg-white hover:text-black transition-all duration-500 group/btn"
                                        >
                                            <span className="uppercase tracking-widest">{t('learnMore')}</span>
                                            <span className="text-2xl group-hover/btn:translate-x-1 transition-transform">
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
