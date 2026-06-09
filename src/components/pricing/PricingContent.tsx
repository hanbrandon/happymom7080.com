'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ServiceCTA from '@/components/layout/ServiceCTA';
import {
    ScrollReveal,
    StaggerContainer,
    StaggerItem,
} from '@/components/ui/ScrollReveal';

export default function PricingContent() {
    const t = useTranslations('PricingDetail');

    const priceLiveIn = process.env.NEXT_PUBLIC_PRICE_LIVE_IN || '1,600';
    const priceCommuting = process.env.NEXT_PUBLIC_PRICE_COMMUTING || '1,350';
    const priceBabysit = process.env.NEXT_PUBLIC_PRICE_BABYSIT || '1,350';
    const deposit = process.env.NEXT_PUBLIC_DEPOSIT || '300';

    const getBreakdown = (price: string, dep: string) => {
        const priceNum = Number(price.replace(/,/g, ''));
        const depositNum = Number(dep.replace(/,/g, ''));
        return {
            price: `$${priceNum.toLocaleString()}`,
            deposit: `$${depositNum.toLocaleString()}`,
            balance: `$${(priceNum - depositNum).toLocaleString()}`,
        };
    };

    const liveIn = getBreakdown(priceLiveIn, deposit);
    const commuting = getBreakdown(priceCommuting, deposit);
    const babysit = getBreakdown(priceBabysit, deposit);

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
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-[0.3em] mb-6 block">
                            {t('heroTag')}
                        </span>
                        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 tracking-tighter leading-[1.1] mb-8">
                            {t('heroTitle')}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
                            "{t('heroSubtitle')}"
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Main Pricing Tables */}
            <section className="py-20 md:py-32 bg-white border-t border-gray-100">
                <div className="container mx-auto px-10">
                    {/* Postpartum Care Section */}
                    <div className="mb-32">
                        <ScrollReveal>
                            <div className="flex items-end justify-between mb-16 border-b border-gray-200 pb-8">
                                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
                                    {t('postpartumTitle')}
                                </h2>
                                <span className="text-gray-500 font-medium hidden md:block">
                                    {t('weeklyRates')}
                                </span>
                            </div>
                        </ScrollReveal>

                        <StaggerContainer>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                                <StaggerItem>
                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-widest">
                                            {t('liveInTitle')}
                                        </h3>
                                        <div className="text-5xl font-bold text-gray-900 py-4 border-y border-gray-100">
                                            {t('liveInPrice', liveIn)}
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-lg text-gray-900 font-bold">
                                                {t('liveInDeposit', liveIn)}
                                            </p>
                                            {t('liveInHours') && (
                                                <p className="text-gray-700">
                                                    {t('liveInHours')}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </StaggerItem>
                                <StaggerItem>
                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-widest">
                                            {t('commutingTitle')}
                                        </h3>
                                        <div className="text-5xl font-bold text-gray-900 py-4 border-y border-gray-100">
                                            {t('commutingPrice', commuting)}
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-lg text-gray-900 font-bold">
                                                {t(
                                                    'commutingDeposit',
                                                    commuting,
                                                )}
                                            </p>
                                            {t('commutingHours') && (
                                                <p className="text-gray-700">
                                                    {t('commutingHours')}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </StaggerItem>
                            </div>
                        </StaggerContainer>

                        {/* Integrated Disclaimer for Postpartum Care */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-gray-100">
                            <ScrollReveal>
                                <div className="space-y-6">
                                    <p className="text-sm text-gray-900 font-bold leading-relaxed">
                                        {t('minPeriod')}
                                    </p>
                                    <p className="text-xs text-gray-900 font-bold leading-relaxed">
                                        ※ {t('longDistanceNote')}
                                    </p>
                                    <ul className="space-y-4 text-xs text-gray-600 font-medium leading-relaxed">
                                        <li>{t('basicConditions')}</li>
                                        <li>{t('breakTimes')}</li>
                                        <li>{t('transportation')}</li>
                                        <li>{t('serviceChange')}</li>
                                        <li>{t('extension')}</li>
                                        <li>{t('commutingAreaNote')}</li>
                                    </ul>
                                </div>
                            </ScrollReveal>

                            {/* Right Column: Essential Info Cards */}
                            <StaggerContainer>
                                <div className="space-y-8">
                                    {/* 0. Business Insurance Section */}
                                    <StaggerItem>
                                        <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                                            <h4 className="text-lg font-bold text-gray-900 mb-4">
                                                {t('insuranceInfoTitle')}
                                            </h4>
                                            <p className="text-xs text-gray-600 font-medium leading-relaxed mb-6">
                                                {t('insuranceInfoDesc')}
                                            </p>
                                            <Link
                                                href="/guide#business-insurance"
                                                className="text-xs text-gray-900 font-bold underline underline-offset-4 hover:text-gray-600 transition-colors"
                                            >
                                                {t('viewInsuranceDetail')}
                                            </Link>
                                        </div>
                                    </StaggerItem>

                                    {/* 1. Insurance Section */}
                                    <StaggerItem>
                                        <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                                            <h4 className="text-lg font-bold text-gray-900 mb-4">
                                                {t('carrotTitle')}
                                            </h4>
                                            <p className="text-xs text-gray-600 font-medium leading-relaxed mb-6">
                                                {t('carrotDesc')}
                                            </p>
                                            <Link
                                                href="/guide#insurance"
                                                className="text-xs text-gray-900 font-bold underline underline-offset-4 hover:text-gray-600 transition-colors"
                                            >
                                                {t('viewInsurance')}
                                            </Link>
                                        </div>
                                    </StaggerItem>

                                    {/* 2. Refund Summary Section */}
                                    <StaggerItem>
                                        <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                                            <h4 className="text-lg font-bold text-gray-900 mb-6">
                                                {t('refundTitle')}
                                            </h4>
                                            <ul className="space-y-4 text-xs text-gray-700 font-medium leading-relaxed mb-8">
                                                <li>{t('noRefund')}</li>
                                                <li>{t('fullRefund')}</li>
                                                <li>{t('depositRefund')}</li>
                                            </ul>
                                            <Link
                                                href="/policy"
                                                className="text-xs text-gray-900 font-bold underline underline-offset-4 hover:text-gray-600 transition-colors"
                                            >
                                                {t('viewRefund')}
                                            </Link>
                                        </div>
                                    </StaggerItem>

                                    {/* 3. Contract Section */}
                                    <StaggerItem>
                                        <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between">
                                            <h4 className="text-lg font-bold text-gray-900">
                                                {t('officialContract')}
                                            </h4>
                                            <Link
                                                href="/agreement.pdf"
                                                target="_blank"
                                                className="text-xs text-gray-900 font-bold underline underline-offset-4 hover:text-gray-600 transition-colors"
                                            >
                                                {t('viewContract')}
                                            </Link>
                                        </div>
                                    </StaggerItem>
                                </div>
                            </StaggerContainer>
                        </div>
                    </div>

                    {/* Multi-week Pricing Table */}
                    <ScrollReveal delay={0.3}>
                        <div className="mt-16 mb-32">
                            {/* Desktop Combined Table */}
                            <div className="hidden lg:block">
                                <table className="w-full text-center border-collapse">
                                    <thead>
                                        <tr className="border-t-2 border-black bg-black text-white">
                                            <th
                                                rowSpan={2}
                                                className="py-6 px-6 text-lg font-bold tracking-tighter border-r border-gray-800"
                                            >
                                                {t('postpartumTable.category')}
                                            </th>
                                            <th
                                                colSpan={3}
                                                className="py-4 px-6 border-b border-gray-800 border-r border-gray-800 text-xs font-bold uppercase tracking-[0.2em] opacity-60"
                                            >
                                                {t('postpartumTable.liveIn')}
                                            </th>
                                            <th
                                                colSpan={3}
                                                className="py-4 px-6 border-b border-gray-800 text-xs font-bold uppercase tracking-[0.2em] opacity-60"
                                            >
                                                {t('postpartumTable.commuting')}
                                            </th>
                                        </tr>
                                        <tr className="bg-black text-gray-500 text-[10px] uppercase tracking-widest">
                                            <th className="py-3 border-r border-gray-800 font-medium">{t('postpartumTable.serviceFee')}</th>
                                            <th className="py-3 border-r border-gray-800 font-medium">{t('postpartumTable.deposit')}</th>
                                            <th className="py-3 border-r border-gray-800 font-bold text-white/90">{t('postpartumTable.total')}</th>
                                            <th className="py-3 border-r border-gray-800 font-medium">{t('postpartumTable.serviceFee')}</th>
                                            <th className="py-3 border-r border-gray-800 font-medium">{t('postpartumTable.deposit')}</th>
                                            <th className="py-3 font-bold text-white/90">{t('postpartumTable.total')}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-600 text-sm">
                                        {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => {
                                            const pLiveIn = Number(priceLiveIn.replace(/,/g, ''));
                                            const pCommuting = Number(priceCommuting.replace(/,/g, ''));
                                            const d = Number(deposit.replace(/,/g, ''));
                                            
                                            return (
                                                <tr key={n} className="group border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                                    <td className="py-4 px-6 font-bold text-black bg-gray-50/30 border-r border-gray-100">
                                                        {t('postpartumTable.week', { n })}
                                                    </td>
                                                    <td className="py-4 px-6 border-r border-gray-100 group-hover:text-black transition-colors">{( (pLiveIn - d) * n ).toLocaleString()}</td>
                                                    <td className="py-4 px-6 border-r border-gray-100 group-hover:text-black transition-colors">{(d * n).toLocaleString()}</td>
                                                    <td className="py-4 px-6 border-r border-gray-100 font-bold text-black bg-gray-50/30">{(pLiveIn * n).toLocaleString()}</td>
                                                    <td className="py-4 px-6 border-r border-gray-100 group-hover:text-black transition-colors">{( (pCommuting - d) * n ).toLocaleString()}</td>
                                                    <td className="py-4 px-6 border-r border-gray-100 group-hover:text-black transition-colors">{(d * n).toLocaleString()}</td>
                                                    <td className="py-4 px-6 font-bold text-black bg-gray-50/30">{(pCommuting * n).toLocaleString()}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>

                            {/* Mobile Split Tables */}
                            <div className="lg:hidden space-y-24">
                                {/* Live-in Table */}
                                <div className="space-y-8">
                                    <h3 className="text-3xl font-bold text-black tracking-tighter px-2">
                                        {t('postpartumTable.liveIn')}
                                    </h3>
                                    <table className="w-full text-center border-collapse">
                                        <thead>
                                            <tr className="border-t-2 border-black bg-black text-white">
                                                <th className="py-6 font-bold">{t('postpartumTable.category')}</th>
                                                <th className="py-6 text-[10px] text-gray-400 uppercase tracking-widest">{t('postpartumTable.serviceFee')}</th>
                                                <th className="py-6 text-[10px] text-gray-400 uppercase tracking-widest">{t('postpartumTable.deposit')}</th>
                                                <th className="py-6 font-bold">{t('postpartumTable.total')}</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-600 text-sm">
                                            {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => {
                                                const p = Number(priceLiveIn.replace(/,/g, ''));
                                                const d = Number(deposit.replace(/,/g, ''));
                                                return (
                                                    <tr key={n} className="border-b border-gray-100">
                                                        <td className="py-6 font-bold text-black bg-gray-50/30">{t('postpartumTable.week', { n })}</td>
                                                        <td className="py-6">{((p - d) * n).toLocaleString()}</td>
                                                        <td className="py-6">{(d * n).toLocaleString()}</td>
                                                        <td className="py-6 font-bold text-black bg-gray-50/30">{(p * n).toLocaleString()}</td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Commuting Table */}
                                <div className="space-y-8">
                                    <h3 className="text-3xl font-bold text-black tracking-tighter px-2">
                                        {t('postpartumTable.commuting')}
                                    </h3>
                                    <table className="w-full text-center border-collapse">
                                        <thead>
                                            <tr className="border-t-2 border-black bg-black text-white">
                                                <th className="py-6 font-bold">{t('postpartumTable.category')}</th>
                                                <th className="py-6 text-[10px] text-gray-400 uppercase tracking-widest">{t('postpartumTable.serviceFee')}</th>
                                                <th className="py-6 text-[10px] text-gray-400 uppercase tracking-widest">{t('postpartumTable.deposit')}</th>
                                                <th className="py-6 font-bold">{t('postpartumTable.total')}</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-600 text-sm">
                                            {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => {
                                                const p = Number(priceCommuting.replace(/,/g, ''));
                                                const d = Number(deposit.replace(/,/g, ''));
                                                return (
                                                    <tr key={n} className="border-b border-gray-100">
                                                        <td className="py-6 font-bold text-black bg-gray-50/30">{t('postpartumTable.week', { n })}</td>
                                                        <td className="py-6">{((p - d) * n).toLocaleString()}</td>
                                                        <td className="py-6">{(d * n).toLocaleString()}</td>
                                                        <td className="py-6 font-bold text-black bg-gray-50/30">{(p * n).toLocaleString()}</td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Twins Section */}
                    <div className="mb-32">
                        <ScrollReveal>
                            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                                <h4 className="text-lg font-bold text-gray-900 mb-6">
                                    {t('twinsSection.title')}
                                </h4>
                                <div className="space-y-4">
                                    <p className="text-xs text-gray-600 font-medium leading-relaxed">
                                        {t('twinsSection.description')}
                                    </p>
                                    <div className="pt-4 space-y-2 border-t border-gray-200/50">
                                        <p className="text-xs font-bold text-gray-900">
                                            {t('twinsSection.point1')}
                                        </p>
                                        <p className="text-xs font-bold text-gray-900">
                                            {t('twinsSection.point2')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Babysitting */}
                    <div className="mb-32">
                        <ScrollReveal>
                            <div className="flex items-end justify-between mb-16 border-b border-gray-200 pb-8">
                                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
                                    {t('babysitTitle')}
                                </h2>
                                <span className="text-gray-500 font-medium hidden md:block">
                                    {t('premiumWeekly')}
                                </span>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-widest">
                                        {t('liveInCommuting')}
                                    </h3>
                                    <div className="text-5xl font-bold text-gray-900 py-4 border-y border-gray-100">
                                        {t('babysitPrice', babysit)}
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-lg text-gray-900 font-bold">
                                            {t('babysitDeposit', babysit)}
                                        </p>
                                        {t('babysitHours') && (
                                            <p className="text-gray-700">
                                                {t('babysitHours')}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Integrated Disclaimer for Babysitting (Customized) */}
                        <ScrollReveal>
                            <div className="pt-12 border-t border-gray-100">
                                <ul className="space-y-4 text-xs text-gray-600 font-medium leading-relaxed">
                                    <li>※ {t('minPeriod')}</li>
                                    <li>{t('serviceChange')}</li>
                                    <li>{t('twins')}</li>
                                    <li>{t('breakTimes')}</li>
                                    <li>{t('extension')}</li>
                                    <li>{t('commutingAreaNote')}</li>
                                </ul>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Additional Fees Table */}
                    <div className="mb-32">
                        <ScrollReveal>
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-gray-200 pb-8 gap-4">
                                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
                                    {t('additionalFeesTitle')}
                                </h2>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-gray-900">
                                            <th className="py-6 text-xl font-bold text-gray-900">
                                                {t('feeTable.category')}
                                            </th>
                                            <th className="py-6 text-xl font-bold text-gray-900">
                                                {t('feeTable.liveIn')}
                                            </th>
                                            <th className="py-6 text-xl font-bold text-gray-900">
                                                {t('feeTable.commuting')}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr>
                                            <td className="py-8 text-lg font-bold text-gray-900">
                                                {t('feeTable.preschool')}
                                            </td>
                                            <td className="py-8 text-lg text-gray-700 font-medium">
                                                {t('feeTable.rates.preschool')}
                                            </td>
                                            <td className="py-8 text-lg text-gray-700 font-medium">
                                                {t('feeTable.rates.preschool')}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-8 text-lg font-bold text-gray-900">
                                                {t('feeTable.school')}
                                            </td>
                                            <td className="py-8 text-lg text-gray-700 font-medium">
                                                {t('feeTable.rates.school')}
                                            </td>
                                            <td className="py-8 text-lg text-gray-700 font-medium">
                                                {t('feeTable.rates.school')}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-8 text-lg font-bold text-gray-900">
                                                {t('feeTable.extraAdult')}
                                            </td>
                                            <td className="py-8 text-lg text-gray-700 font-medium">
                                                {t('feeTable.rates.extraAdult')}
                                            </td>
                                            <td className="py-8 text-lg text-gray-700 font-medium">
                                                {t('feeTable.rates.extraAdult')}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </ScrollReveal>

                        {/* Integrated Disclaimer for Additional Fees */}
                        <ScrollReveal>
                            <div className="pt-8 space-y-2">
                                <p className="text-xs text-gray-600 font-medium leading-relaxed">
                                    ※ {t('additionalFeesDesc')}
                                </p>
                                <p className="text-xs text-gray-600 font-medium leading-relaxed">
                                    {t('localCriteria')}
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>


                </div>
            </section>

            {/* 3. Final CTA */}
            <ServiceCTA title={t('ctaTitle')} buttonText={t('getQuote')} />

            <Footer />
        </main>
    );
}
