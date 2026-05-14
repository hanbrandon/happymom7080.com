'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, SquarePen } from 'lucide-react';
import PremiumButton from '@/components/ui/PremiumButton';
import { useTranslations, useLocale } from 'next-intl';

export default function Testimonials() {
    const t = useTranslations('TestimonialsHome');
    const locale = useLocale();
    const brand = locale === 'ko' 
        ? (process.env.NEXT_PUBLIC_SITE_NAME_KO || '해피맘') 
        : (process.env.NEXT_PUBLIC_SITE_NAME_EN || 'HappyMom');
    const tData = useTranslations('TestimonialsPage');
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = tData.raw('items')?.slice(0, 3) || [];

    useEffect(() => {
        if (testimonials.length === 0) return;
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 8000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    const handlePrev = () => {
        if (testimonials.length === 0) return;
        setActiveIndex(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length,
        );
    };

    const handleNext = () => {
        if (testimonials.length === 0) return;
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    return (
        <section className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-start">
                    {/* Left Column: Heading & CTAs */}
                    <div className="lg:col-span-5 pt-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-sm font-bold text-gray-500 uppercase tracking-[0.3em] mb-6 block">
                                {t('tag')}
                            </span>
                            <h2
                                className="text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-8"
                                dangerouslySetInnerHTML={{ __html: t('title') }}
                            />
                            <p className="text-xl text-gray-500 leading-relaxed max-w-sm md:mb-12">
                                {t('subtitle', { brand })}
                            </p>

                            <div className="hidden lg:flex flex-wrap gap-4 items-center">
                                <PremiumButton
                                    variant="primary"
                                    href="/testimonials"
                                >
                                    {t('more')}
                                </PremiumButton>
                                <PremiumButton
                                    variant="primary"
                                    href="/testimonials"
                                    icon={<SquarePen className="w-4 h-4" />}
                                >
                                    {t('write')}
                                </PremiumButton>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Carousel */}
                    <div className="lg:col-span-7 relative min-h-[300px] md:min-h-[450px] flex flex-col pt-4">
                        {/* Quote Text (Animated & Draggable for Mobile) */}
                        <motion.div
                            className="flex-grow cursor-grab active:cursor-grabbing touch-none"
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = offset.x;
                                if (swipe < -50) handleNext();
                                else if (swipe > 50) handlePrev();
                            }}
                        >
                            <AnimatePresence mode="wait">
                                {testimonials.length > 0 && (
                                    <motion.p
                                        key={activeIndex}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{
                                            duration: 0.6,
                                            ease: 'easeInOut',
                                        }}
                                        className="text-3xl md:text-5xl text-gray-800 leading-tight mb-12 font-medium tracking-tight"
                                    >
                                        <span className="block text-2xl md:text-4xl text-gray-800 leading-tight mb-12 font-medium tracking-tight whitespace-pre-line line-clamp-5">
                                            "{testimonials[activeIndex].content}"
                                        </span>
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Bottom Row: Profile & Navigation/Mobile Buttons */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-4">
                            <div className="flex-1">
                                <AnimatePresence mode="wait">
                                    {testimonials.length > 0 && (
                                        <motion.div
                                            key={activeIndex}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{
                                                duration: 0.6,
                                                ease: 'easeInOut',
                                            }}
                                            className="flex items-center gap-6"
                                        >
                                            <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                                                <Image
                                                    src={
                                                        testimonials[activeIndex]
                                                            .avatar
                                                    }
                                                    alt={
                                                        testimonials[activeIndex]
                                                            .name
                                                    }
                                                    width={80}
                                                    height={80}
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-1">
                                                    {testimonials[activeIndex].name}
                                                </h3>
                                                <p className="text-lg text-gray-600 font-medium">
                                                    {testimonials[activeIndex].service}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Mobile-only Buttons: Replacing indicators on mobile */}
                            <div className="flex lg:hidden items-center gap-2 w-full pt-4 border-t border-gray-50">
                                <PremiumButton
                                    variant="primary"
                                    href="/testimonials"
                                    className="flex-1 text-sm h-12"
                                >
                                    {t('more')}
                                </PremiumButton>
                                <PremiumButton
                                    variant="primary"
                                    href="/testimonials"
                                    className="flex-1 text-sm h-12"
                                >
                                    {t('write')}
                                </PremiumButton>
                            </div>

                            {/* Desktop-only Navigation (Indicators & Arrows) */}
                            <div className="hidden lg:flex items-center gap-8">
                                <div className="flex items-center gap-2 font-mono text-lg">
                                    <span className="text-gray-900 font-bold">
                                        0{activeIndex + 1}
                                    </span>
                                    <span className="text-gray-500">/</span>
                                    <span className="text-gray-500">
                                        0{testimonials.length}
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        suppressHydrationWarning
                                        onClick={handlePrev}
                                        aria-label="Previous testimonial"
                                        className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-900 transition-all"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    <button
                                        suppressHydrationWarning
                                        onClick={handleNext}
                                        aria-label="Next testimonial"
                                        className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-900 transition-all"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
