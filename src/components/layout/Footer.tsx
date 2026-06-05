'use client';

import { Link } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    const t = useTranslations('Footer');
    const tNavbar = useTranslations('Navbar');
    const locale = useLocale();
    const brand = locale === 'ko' 
        ? (process.env.NEXT_PUBLIC_SITE_NAME_KO || '해피맘') 
        : (process.env.NEXT_PUBLIC_SITE_NAME_EN || 'HappyMom');

    return (
        <footer className="bg-black py-12">
            <div className="container mx-auto px-10">
                {/* Global Disclaimer */}
                <div className="mb-10 space-y-2">
                    <p className="text-[11px] text-gray-400 leading-relaxed break-keep">
                        {t('disclaimer1', { brand })}
                    </p>
                    <p className="text-[11px] text-gray-400 leading-relaxed break-keep">
                        {t('disclaimer2', { brand })}
                    </p>
                </div>

                {/* Top Divider */}
                <div className="border-t border-white/10 mb-16" />

                {/* 5 Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
                    {/* Column 1: Logo & Intro */}
                    <div className="lg:col-span-3">
                        <Link 
                            href="/" 
                            className="flex items-center gap-3 group cursor-pointer mb-8"
                        >
                            <div className="relative h-8 w-32">
                                <Image
                                    src="/logo_black.png"
                                    alt={`${process.env.NEXT_PUBLIC_SITE_NAME_EN || 'HappyMom'} Logo`}
                                    fill
                                    className="object-contain brightness-0 invert"
                                />
                            </div>
                        </Link>
                        <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
                            {t('intro', { brand })}
                        </p>
                    </div>

                    {/* Column 2: Site Menu */}
                    <div className="lg:col-span-2">
                        <h3 className="font-bold text-gray-500 mb-8 text-[10px] uppercase tracking-[0.3em]">
                            {t('menu')}
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { href: '/about', label: t('about') },
                                { href: '/services', label: t('services') },
                                { href: '/guide', label: t('guide') },
                                { href: '/pricing', label: t('pricing') },
                                { href: '/testimonials', label: t('testimonials') },
                                { href: '/faq', label: t('faq') },
                            ].map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-400 text-sm font-medium hover:text-white transition-all hover:translate-x-1 inline-block"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Service Areas */}
                    <div className="lg:col-span-2">
                        <h3 className="font-bold text-gray-500 mb-8 text-[10px] uppercase tracking-[0.3em]">
                            {tNavbar('servicesArea')}
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { href: '/service-area/new-york', label: locale === 'ko' ? '뉴욕' : 'New York' },
                                { href: '/service-area/virginia', label: locale === 'ko' ? '버지니아' : 'Virginia' },
                                { href: '/service-area/dallas', label: locale === 'ko' ? '달라스' : 'Dallas' },
                                { href: '/service-area/san-francisco', label: locale === 'ko' ? '샌프란' : 'San Francisco' },
                                { href: '/service-area/la', label: locale === 'ko' ? '엘에이' : 'LA' },
                                { href: '/service-area/irvine', label: locale === 'ko' ? '얼바인' : 'Irvine' },
                                { href: '/service-area/atlanta', label: locale === 'ko' ? '아틀란타' : 'Atlanta' },
                                { href: '/service-area/new-jersey', label: locale === 'ko' ? '뉴저지' : 'New Jersey' },
                                { href: '/service-area/other', label: locale === 'ko' ? '기타 지역' : 'Other Areas' },
                            ].map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href as any}
                                        className="text-gray-400 text-sm font-medium hover:text-white transition-all hover:translate-x-1 inline-block"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Policies */}
                    <div className="lg:col-span-2">
                        <h3 className="font-bold text-gray-500 mb-8 text-[10px] uppercase tracking-[0.3em]">
                            {t('policies')}
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { href: '/terms', label: t('terms') },
                                { href: '/privacy', label: t('privacy') },
                                { href: '/do-not-sell', label: t('doNotSell') },
                                { href: '/policy', label: t('refund') },
                                { href: '/agreement.pdf', label: t('agreement'), isExternal: true },
                            ].map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        target={item.isExternal ? "_blank" : undefined}
                                        className="text-gray-400 text-sm font-medium hover:text-white transition-all hover:translate-x-1 inline-block"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 5: Contact Info */}
                    <div className="lg:col-span-3">
                        <h3 className="font-bold text-gray-500 mb-8 text-[10px] uppercase tracking-[0.3em]">
                            {t('contact')}
                        </h3>
                        <div className="space-y-10">
                            <a
                                suppressHydrationWarning
                                href={`tel:${process.env.NEXT_PUBLIC_PHONE_RAW || '12139994642'}`}
                                className="flex items-center gap-5 group outline-none"
                            >
                                <div className="w-12 h-12 bg-white/5 rounded-2xl flex-shrink-0 flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:scale-110 group-hover:rotate-12">
                                    <Phone className="w-5 h-5 text-white group-hover:text-black transition-colors duration-500" />
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-0.5">
                                        {t('callUs')}
                                    </p>
                                    <p className="text-base font-bold text-white tracking-tight group-hover:text-gray-300 transition-colors">
                                        {process.env.NEXT_PUBLIC_PHONE || '+1 (213) 999-4642'}
                                    </p>
                                </div>
                            </a>
                            <a
                                suppressHydrationWarning
                                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || 'happymom7080@gmail.com'}`}
                                className="flex items-center gap-5 group outline-none"
                            >
                                <div className="w-12 h-12 bg-white/5 rounded-2xl flex-shrink-0 flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:scale-110 group-hover:rotate-[-12deg]">
                                    <Mail className="w-5 h-5 text-white group-hover:text-black transition-colors duration-500" />
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-0.5">
                                        {t('emailUs')}
                                    </p>
                                    <p className="text-base font-bold text-white tracking-tight group-hover:text-gray-300 transition-colors">
                                        {process.env.NEXT_PUBLIC_EMAIL || 'happymom7080@gmail.com'}
                                    </p>
                                </div>
                            </a>
                            <div className="flex items-center gap-5 group">
                                <div className="w-12 h-12 bg-white/5 rounded-2xl flex-shrink-0 flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:scale-110 group-hover:rotate-12">
                                    <MessageCircle className="w-5 h-5 text-white group-hover:text-black transition-colors duration-500" />
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-0.5">
                                        {t('kakaoUs')}
                                    </p>
                                    <p className="text-base font-bold text-white tracking-tight group-hover:text-gray-300 transition-colors">
                                        {t('kakaoId')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">
                        {t('rights', { brand })}
                    </p>

                </div>
            </div>
        </footer>
    );
}
