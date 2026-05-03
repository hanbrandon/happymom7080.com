'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
    const t = useTranslations('Footer');

    return (
        <footer className="bg-black py-12">
            <div className="container mx-auto px-10">
                {/* Global Disclaimer */}
                <div className="mb-10 space-y-2">
                    <p className="text-[11px] text-gray-500 leading-relaxed break-keep opacity-60">
                        {t('disclaimer1')}
                    </p>
                    <p className="text-[11px] text-gray-500 leading-relaxed break-keep opacity-60">
                        {t('disclaimer2')}
                    </p>
                </div>

                {/* Top Divider */}
                <div className="border-t border-white/10 mb-16" />

                {/* 4 Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
                    {/* Column 1: Logo & Intro */}
                    <div className="lg:col-span-4">
                        <Link href="/" className="inline-block mb-8">
                            <span className="text-2xl font-bold text-white tracking-tighter">
                                HappyMom
                            </span>
                        </Link>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                            {t('intro')}
                        </p>
                    </div>

                    {/* Column 2: Site Menu */}
                    <div className="lg:col-span-2">
                        <h4 className="font-bold text-white mb-8 text-xs uppercase tracking-[0.25em] opacity-50">
                            {t('menu')}
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-gray-300 text-sm font-medium hover:text-white transition-colors"
                                >
                                    {t('about')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className="text-gray-300 text-sm font-medium hover:text-white transition-colors"
                                >
                                    {t('services')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/guide"
                                    className="text-gray-300 text-sm font-medium hover:text-white transition-colors"
                                >
                                    {t('guide')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/pricing"
                                    className="text-gray-300 text-sm font-medium hover:text-white transition-colors"
                                >
                                    {t('pricing')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/testimonials"
                                    className="text-gray-300 text-sm font-medium hover:text-white transition-colors"
                                >
                                    {t('testimonials')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/faq"
                                    className="text-gray-300 text-sm font-medium hover:text-white transition-colors"
                                >
                                    {t('faq')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Policies */}
                    <div className="lg:col-span-3">
                        <h4 className="font-bold text-white mb-8 text-xs uppercase tracking-[0.25em] opacity-50">
                            {t('policies')}
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="/terms"
                                    className="text-gray-300 text-sm font-medium hover:text-white transition-colors"
                                >
                                    {t('terms')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy"
                                    className="text-gray-300 text-sm font-medium hover:text-white transition-colors"
                                >
                                    {t('privacy')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/do-not-sell"
                                    className="text-gray-300 text-sm font-medium hover:text-white transition-colors"
                                >
                                    {t('doNotSell')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/policy"
                                    className="text-gray-300 text-sm font-medium hover:text-white transition-colors"
                                >
                                    {t('refund')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div className="lg:col-span-3">
                        <h4 className="font-bold text-white mb-8 text-xs uppercase tracking-[0.25em] opacity-50">
                            {t('contact')}
                        </h4>
                        <div className="space-y-8">
                            <a
                                suppressHydrationWarning
                                href="tel:+12137001415"
                                className="flex items-start gap-4 group outline-none"
                            >
                                <div className="w-10 h-10 bg-white/10 flex-shrink-0 flex items-center justify-center transition-all group-hover:bg-white group-hover:text-black">
                                    <Phone className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">
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
                                className="flex items-start gap-4 group outline-none"
                            >
                                <div className="w-10 h-10 bg-white/10 flex-shrink-0 flex items-center justify-center transition-all group-hover:bg-white group-hover:text-black">
                                    <Mail className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">
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
                    <p className="text-[10px] font-medium text-gray-500 uppercase tracking-widest">
                        {t('rights')}
                    </p>
                    <p className="text-[10px] font-medium text-gray-500 uppercase tracking-widest">
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
