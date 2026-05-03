'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

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
        <section className="py-24 bg-white border-t border-gray-50">
            <div className="container mx-auto px-10">
                <div className="flex flex-col lg:flex-row items-start justify-between mb-16 gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tighter">
                            {t('title')}
                        </h2>
                    </div>
                    <div className="lg:max-w-md text-gray-500 text-lg leading-relaxed pt-2">
                        {t('subtitle')}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group aspect-[4/5] overflow-hidden rounded-lg cursor-pointer"
                        >
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
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
                                    className="w-full h-14 px-6 rounded-full bg-white/20 backdrop-blur-[30px] text-white font-bold text-base flex items-center justify-between border border-white/20 hover:bg-white/30 hover:-translate-y-1 hover:shadow-xl transition-all group/btn cursor-pointer"
                                >
                                    <span>{t('learnMore')}</span>
                                    <span className="text-xl group-hover/btn:translate-x-1 transition-transform">
                                        →
                                    </span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
