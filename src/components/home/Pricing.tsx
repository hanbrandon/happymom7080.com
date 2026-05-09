'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import PremiumButton from '@/components/ui/PremiumButton';
import { cn } from '@/lib/utils';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function Pricing() {
    const t = useTranslations('Pricing');
    const th = useTranslations('PricingHome');

    const priceLiveIn = process.env.NEXT_PUBLIC_PRICE_LIVE_IN || '1,600';
    const priceCommuting = process.env.NEXT_PUBLIC_PRICE_COMMUTING || '1,350';
    const priceBabysit = process.env.NEXT_PUBLIC_PRICE_BABYSIT || '1,350';
    const depositVal = process.env.NEXT_PUBLIC_DEPOSIT || '300';

    const formatPrice = (p: string) =>
        Number(p.replace(/,/g, '')).toLocaleString();
    const getBalance = (p: string, d: string) => {
        const priceNum = Number(p.replace(/,/g, ''));
        const depositNum = Number(d.replace(/,/g, ''));
        return `$${(priceNum - depositNum).toLocaleString()}`;
    };

    const getFeatures = (index: number) => {
        try {
            const features = th.raw(`plans.${index}.features`);
            return Array.isArray(features) ? features : [];
        } catch (e) {
            return [];
        }
    };

    const plans = [
        {
            serviceKey: 'postpartumCare',
            typeKey: 'liveIn',
            price: formatPrice(priceLiveIn),
            period: '1주 (5일)',
            serviceFee: getBalance(priceLiveIn, depositVal),
            deposit: `$${formatPrice(depositVal)}`,
            features: getFeatures(0),
        },
        {
            serviceKey: 'postpartumCare',
            typeKey: 'commuting',
            price: formatPrice(priceCommuting),
            period: '1주 (5일)',
            serviceFee: getBalance(priceCommuting, depositVal),
            deposit: `$${formatPrice(depositVal)}`,
            featured: true,
            features: getFeatures(1),
        },
        {
            serviceKey: 'babyCare',
            typeKey: 'liveInCommuting',
            price: formatPrice(priceBabysit),
            period: '1주 (5일)',
            serviceFee: getBalance(priceBabysit, depositVal),
            deposit: `$${formatPrice(depositVal)}`,
            features: getFeatures(2),
        },
    ];

    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-10">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row items-end justify-between mb-16 md:mb-24 gap-8">
                    <div className="max-w-3xl">
                        <ScrollReveal>
                            <span className="text-xs font-black text-gray-400 uppercase tracking-[0.4em] mb-6 block">
                                {th('tag')}
                            </span>
                            <h2
                                className="text-5xl md:text-8xl font-bold text-gray-900 tracking-tighter leading-[0.95] mb-8"
                                dangerouslySetInnerHTML={{
                                    __html: th('title'),
                                }}
                            />
                            <p className="text-xl text-gray-500 leading-relaxed max-w-xl font-medium">
                                {th('subtitle')}
                            </p>
                        </ScrollReveal>
                    </div>
                    <div className="hidden lg:block pb-2">
                        <PremiumButton
                            variant="primary"
                            href="/pricing"
                            className="text-xs"
                            icon={<ArrowRight className="w-4 h-4" />}
                        >
                            {th('fullPricing')}
                        </PremiumButton>
                    </div>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.15,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className={cn(
                                'relative group flex flex-col p-12 rounded-[2.5rem] transition-all duration-500 border',
                                plan.featured
                                    ? 'bg-white shadow-[0_32px_64px_-15px_rgba(0,0,0,0.08)] border-gray-900 z-10'
                                    : 'border-gray-300 bg-white hover:border-gray-900',
                            )}
                        >
                            {/* Popular Badge - Minimalist */}
                            {plan.featured && (
                                <div className="absolute top-8 right-8">
                                    <span className="px-3 py-1 rounded-full bg-black text-white text-[9px] font-black uppercase tracking-widest">
                                        {th('popular')}
                                    </span>
                                </div>
                            )}

                            <div className="mb-12">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 block text-gray-400">
                                    {t(plan.serviceKey)}
                                </span>
                                <h3 className="text-3xl font-bold tracking-tight mb-8 text-gray-900">
                                    {t(plan.typeKey)}
                                </h3>

                                <div className="flex items-baseline gap-2">
                                    <span className="text-6xl md:text-7xl font-bold tracking-tighter text-gray-900">
                                        ${plan.price}
                                    </span>
                                    <span className="text-xs font-black uppercase tracking-widest text-gray-400">
                                        {t('period')}
                                    </span>
                                </div>
                            </div>

                            {/* Features List */}
                            <div className="space-y-5 mb-16 flex-1">
                                {plan.features.map((feature, fIndex) => (
                                    <div
                                        key={fIndex}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="w-5 h-5 rounded-full bg-gray-50 flex items-center justify-center mt-0.5 flex-shrink-0">
                                            <Check className="w-3 h-3 text-gray-900" />
                                        </div>
                                        <span className="text-base font-medium tracking-tight text-gray-600 leading-snug">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Breakdown Footer */}
                            <div className="pt-10 border-t border-gray-200 mb-12 space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                                        {t('serviceFee')}
                                    </span>
                                    <span className="text-sm font-bold text-gray-900">
                                        {plan.serviceFee}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                                        {t('deposit')}
                                    </span>
                                    <span className="text-sm font-bold text-gray-900">
                                        {plan.deposit}
                                    </span>
                                </div>
                            </div>

                            <PremiumButton
                                variant={plan.featured ? 'primary' : 'outline'}
                                href="/pricing"
                                className="w-full"
                            >
                                {t('learnMore')}
                            </PremiumButton>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
