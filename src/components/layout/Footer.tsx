'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    const t = useTranslations('Footer');

    return (
        <footer className="bg-black py-12">
            <div className="container mx-auto px-10">
                {/* Global Disclaimer */}
                <div className="mb-10 space-y-2">
                    <p className="text-[11px] text-gray-400 leading-relaxed break-keep">
                        {t('disclaimer1')}
                    </p>
                    <p className="text-[11px] text-gray-400 leading-relaxed break-keep">
                        {t('disclaimer2')}
                    </p>
                </div>

                {/* Top Divider */}
                <div className="border-t border-white/10 mb-16" />

                {/* 4 Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
                    {/* Column 1: Logo & Intro */}
                    <div className="lg:col-span-4">
                        <Link 
                            href="/" 
                            className="flex items-center gap-3 group cursor-pointer mb-8"
                        >
                            <div className="relative h-8 w-32">
                                <Image
                                    src="/logo_black.png"
                                    alt="HappyMom Logo"
                                    fill
                                    className="object-contain brightness-0 invert"
                                />
                            </div>
                        </Link>
                        <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
                            {t('intro')}
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

                    {/* Column 3: Policies */}
                    <div className="lg:col-span-3">
                        <h3 className="font-bold text-gray-500 mb-8 text-[10px] uppercase tracking-[0.3em]">
                            {t('policies')}
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { href: '/terms', label: t('terms') },
                                { href: '/privacy', label: t('privacy') },
                                { href: '/do-not-sell', label: t('doNotSell') },
                                { href: '/policy', label: t('refund') },
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

                    {/* Column 4: Contact Info */}
                    <div className="lg:col-span-3">
                        <h3 className="font-bold text-gray-500 mb-8 text-[10px] uppercase tracking-[0.3em]">
                            {t('contact')}
                        </h3>
                        <div className="space-y-10">
                            <a
                                suppressHydrationWarning
                                href="tel:+12137001415"
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
                                        +1 (213) 700-1415
                                    </p>
                                </div>
                            </a>
                            <a
                                suppressHydrationWarning
                                href="mailto:happymom7080@gmail.com"
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
                                        happymom7080@gmail.com
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">
                        {t('rights')}
                    </p>
                    <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">
                        {t('siteBy')}{' '}
                        <a
                            href="https://gawoori.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white font-bold hover:opacity-70 transition-opacity underline underline-offset-4 decoration-1"
                        >
                            GAWOORI.COM
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
