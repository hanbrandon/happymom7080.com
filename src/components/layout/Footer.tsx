'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-white pt-20 pb-10">
      <div className="container mx-auto px-10">
        {/* Top Divider */}
        <div className="border-t border-gray-100 mb-12" />

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Logo & Intro */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <span className="text-xl font-bold text-gray-900 tracking-tighter">HappyMom</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              {t('intro')}
            </p>
          </div>

          {/* Column 2: Site Menu */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-gray-900 mb-6 text-xs uppercase tracking-[0.2em]">{t('menu')}</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-900 text-sm font-medium hover:underline underline-offset-4 decoration-1">{t('about')}</Link></li>
              <li><Link href="/services" className="text-gray-900 text-sm font-medium hover:underline underline-offset-4 decoration-1">{t('services')}</Link></li>
              <li><Link href="/guide" className="text-gray-900 text-sm font-medium hover:underline underline-offset-4 decoration-1">{t('guide')}</Link></li>
              <li><Link href="/pricing" className="text-gray-900 text-sm font-medium hover:underline underline-offset-4 decoration-1">{t('pricing')}</Link></li>
              <li><Link href="/testimonials" className="text-gray-900 text-sm font-medium hover:underline underline-offset-4 decoration-1">{t('testimonials')}</Link></li>
              <li><Link href="/faq" className="text-gray-900 text-sm font-medium hover:underline underline-offset-4 decoration-1">{t('faq')}</Link></li>
            </ul>
          </div>

          {/* Column 3: Policies */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-gray-900 mb-6 text-xs uppercase tracking-[0.2em]">{t('policies')}</h4>
            <ul className="space-y-3">
              <li><Link href="/terms" className="text-gray-900 text-sm font-medium hover:underline underline-offset-4 decoration-1">{t('terms')}</Link></li>
              <li><Link href="/privacy" className="text-gray-900 text-sm font-medium hover:underline underline-offset-4 decoration-1">{t('privacy')}</Link></li>
              <li><Link href="/pricing#refund" className="text-gray-900 text-sm font-medium hover:underline underline-offset-4 decoration-1">{t('refund')}</Link></li>
              <li><Link href="/pricing#contract" className="text-gray-900 text-sm font-medium hover:underline underline-offset-4 decoration-1">{t('contract')}</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-gray-900 mb-6 text-xs uppercase tracking-[0.2em]">{t('contact')}</h4>
            <div className="space-y-5">
              <a href="tel:+12137001415" className="flex items-start gap-3 group outline-none">
                <div className="w-8 h-8 bg-gray-50 flex items-center justify-center transition-colors group-hover:bg-gray-900 group-hover:text-white">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">{t('callUs')}</p>
                  <p className="text-base font-bold text-gray-900 tracking-tight group-hover:underline underline-offset-4 decoration-1">+1 (213) 700-1415</p>
                </div>
              </a>
              <a href="mailto:happymom7080@gmail.com" className="flex items-start gap-3 group outline-none">
                <div className="w-8 h-8 bg-gray-50 flex items-center justify-center transition-colors group-hover:bg-gray-900 group-hover:text-white">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">{t('emailUs')}</p>
                  <p className="text-base font-bold text-gray-900 tracking-tight group-hover:underline underline-offset-4 decoration-1">happymom7080@gmail.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
            {t('rights')}
          </p>
          <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
            {t('siteBy')} <a href="https://gawoori.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 font-bold hover:text-gray-900 transition-colors underline underline-offset-4 decoration-1">GAWOORI.COM</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
