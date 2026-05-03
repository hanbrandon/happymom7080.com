'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import SplitText from '@/components/ui/SplitText';

interface ServiceCTAProps {
    title?: string;
    buttonText?: string;
    href?: string;
}

/**
 * A shared CTA component used across multiple pages.
 * Supports custom title and button text, otherwise falls back to common translations.
 */
export default function ServiceCTA({
    title,
    buttonText,
    href = '/contact',
}: ServiceCTAProps) {
    const t = useTranslations('CTA');

    const finalTitle = title || t('title');
    const finalButtonText = buttonText || t('button');

    return (
        <section className="pb-20 md:pb-40 bg-white">
            <div className="container mx-auto px-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative w-full h-[300px] md:h-[350px] overflow-hidden rounded-[2.5rem] p-10 md:p-16 flex flex-col justify-center items-start group"
                >
                    {/* Background Image with Hover Zoom */}
                    <Image
                        src="/cta-bg.png"
                        alt="CTA Background"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                    />

                    {/* Dark Overlay with Hover Dimming */}
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" />

                    <div className="relative z-10 max-w-2xl space-y-10">
                        <h2 className="text-2xl md:text-3xl font-medium text-white leading-tight tracking-tight break-keep">
                            <SplitText text={finalTitle} />
                        </h2>

                        <Link
                            href={href}
                            className="inline-flex items-center justify-center h-12 px-10 bg-white text-gray-900 font-bold text-xs rounded-full hover:bg-gray-100 transition-all uppercase tracking-[0.2em] cursor-pointer"
                        >
                            {finalButtonText}
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
