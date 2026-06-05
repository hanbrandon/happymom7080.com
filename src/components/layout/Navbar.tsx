'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PremiumButton from '@/components/ui/PremiumButton';
import Image from 'next/image';

// Flip Board (Split-flap) Character Component
const FlipChar = ({ char, index, isHovered }: { char: string; index: number; isHovered: boolean }) => {
  return (
    <motion.span
      initial={false}
      animate={isHovered ? {
        rotateX: [0, 90, 0],
        transition: {
          duration: 0.4,
          delay: index * 0.04,
          ease: "easeInOut"
        }
      } : { rotateX: 0 }}
      style={{ display: 'inline-block', transformStyle: 'preserve-3d' }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};

const FlipText = ({ text, className, isHovered }: { text: string; className?: string; isHovered: boolean }) => {
  return (
    <span className={`${className} flex overflow-hidden`}>
      {text.split("").map((char, i) => (
        <FlipChar key={i} char={char} index={i} isHovered={isHovered} />
      ))}
    </span>
  );
};

export default function Navbar() {
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileLocationOpen, setIsMobileLocationOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const cities = [
    { key: 'new-york', label: locale === 'ko' ? '뉴욕' : 'New York' },
    { key: 'virginia', label: locale === 'ko' ? '버지니아' : 'Virginia' },
    { key: 'dallas', label: locale === 'ko' ? '달라스' : 'Dallas' },
    { key: 'san-francisco', label: locale === 'ko' ? '샌프란' : 'San Francisco' },
    { key: 'la', label: locale === 'ko' ? '엘에이' : 'LA' },
    { key: 'irvine', label: locale === 'ko' ? '얼바인' : 'Irvine' },
    { key: 'atlanta', label: locale === 'ko' ? '아틀란타' : 'Atlanta' },
    { key: 'new-jersey', label: locale === 'ko' ? '뉴저지' : 'New Jersey' },
    { key: 'other', label: locale === 'ko' ? '기타' : 'Other' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  const navLinks = [
    { href: '/about', label: t('about') },
    { href: '/services', label: t('services') },
    { href: '/guide', label: t('guide') },
    { href: '/pricing', label: t('pricing') },
    { href: '/testimonials', label: t('testimonials') },
    { href: '/faq', label: t('faq') },
  ];

  const isHomePage = pathname === '/';
  const forceDark = !isHomePage;
  const isDarkTheme = isScrolled || forceDark;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-8 ${isDarkTheme ? 'py-6' : ''}`}
    >
      <div className="max-w-[1400px] mx-auto px-10 flex items-center justify-between">
        {/* Left: Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group cursor-pointer"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="relative h-10 w-40">
            <Image
              src="/logo_black.png"
              alt={`${process.env.NEXT_PUBLIC_SITE_NAME_EN || 'HappyMom'} Logo`}
              fill
              sizes="(max-width: 768px) 100vw, 160px"
              className={`object-contain transition-all duration-300 ${!isDarkTheme ? 'brightness-0 invert' : ''}`}
              priority
            />
          </div>
        </Link>

        {/* Center: Navigation Pill */}
        <div className={`hidden lg:flex items-center backdrop-blur-xl px-2 py-1.5 rounded-2xl gap-1 transition-all ${isDarkTheme ? 'bg-gray-100/50' : 'bg-white/10'}`}>
          <Link
            href="/about"
            onMouseEnter={() => setHoveredLink('/about')}
            onMouseLeave={() => setHoveredLink(null)}
            className={`text-[13px] font-bold px-4 py-2 rounded-xl transition-all cursor-pointer ${isDarkTheme ? 'text-black' : 'text-white'}`}
          >
            <FlipText text={t('about')} isHovered={hoveredLink === '/about'} />
          </Link>

          <Link
            href="/services"
            onMouseEnter={() => setHoveredLink('/services')}
            onMouseLeave={() => setHoveredLink(null)}
            className={`text-[13px] font-bold px-4 py-2 rounded-xl transition-all cursor-pointer ${isDarkTheme ? 'text-black' : 'text-white'}`}
          >
            <FlipText text={t('services')} isHovered={hoveredLink === '/services'} />
          </Link>

          {/* Service Area Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                onMouseEnter={() => setHoveredLink('servicesArea')}
                onMouseLeave={() => setHoveredLink(null)}
                className={`text-[13px] font-bold px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1 outline-none ${isDarkTheme ? 'text-black' : 'text-white'}`}
              >
                <FlipText text={t('servicesArea')} isHovered={hoveredLink === 'servicesArea'} />
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="center"
              sideOffset={8}
              className={`backdrop-blur-3xl rounded-[1.5rem] p-2.5 min-w-[190px] max-h-[320px] overflow-y-auto border transition-all duration-300 shadow-[0_25px_60px_-15px_rgba(244,63,94,0.18)] gap-1 flex flex-col [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-rose-200/60 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 duration-300 ${
                isDarkTheme 
                  ? 'bg-white/98 border-rose-100/80 text-neutral-800' 
                  : 'bg-white/90 border-white text-neutral-800'
              }`}
            >
              {cities.map((city) => (
                <DropdownMenuItem 
                  key={city.key} 
                  asChild 
                  className="cursor-pointer px-4 py-3 rounded-xl text-[13px] font-bold transition-all duration-200 outline-none flex items-center justify-between group/item text-neutral-700 hover:translate-x-1.5 focus:translate-x-1.5 focus:bg-gradient-to-r focus:from-rose-500/10 focus:to-amber-500/5 focus:text-rose-700 hover:bg-gradient-to-r hover:from-rose-500/10 hover:to-amber-500/5 hover:text-rose-700"
                >
                  <Link href={`/service-area/${city.key}`} className="w-full flex items-center justify-between">
                    <span>{city.label}</span>
                    <span className="w-2 h-2 rounded-full bg-gradient-to-tr from-rose-500 to-amber-400 scale-0 group-hover/item:scale-100 group-focus/item:scale-100 transition-all duration-300 shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/guide"
            onMouseEnter={() => setHoveredLink('/guide')}
            onMouseLeave={() => setHoveredLink(null)}
            className={`text-[13px] font-bold px-4 py-2 rounded-xl transition-all cursor-pointer ${isDarkTheme ? 'text-black' : 'text-white'}`}
          >
            <FlipText text={t('guide')} isHovered={hoveredLink === '/guide'} />
          </Link>

          <Link
            href="/pricing"
            onMouseEnter={() => setHoveredLink('/pricing')}
            onMouseLeave={() => setHoveredLink(null)}
            className={`text-[13px] font-bold px-4 py-2 rounded-xl transition-all cursor-pointer ${isDarkTheme ? 'text-black' : 'text-white'}`}
          >
            <FlipText text={t('pricing')} isHovered={hoveredLink === '/pricing'} />
          </Link>

          <Link
            href="/testimonials"
            onMouseEnter={() => setHoveredLink('/testimonials')}
            onMouseLeave={() => setHoveredLink(null)}
            className={`text-[13px] font-bold px-4 py-2 rounded-xl transition-all cursor-pointer ${isDarkTheme ? 'text-black' : 'text-white'}`}
          >
            <FlipText text={t('testimonials')} isHovered={hoveredLink === '/testimonials'} />
          </Link>

          <Link
            href="/faq"
            onMouseEnter={() => setHoveredLink('/faq')}
            onMouseLeave={() => setHoveredLink(null)}
            className={`text-[13px] font-bold px-4 py-2 rounded-xl transition-all cursor-pointer ${isDarkTheme ? 'text-black' : 'text-white'}`}
          >
            <FlipText text={t('faq')} isHovered={hoveredLink === '/faq'} />
          </Link>
        </div>

        {/* Right: Actions */}
        <div className="hidden lg:flex items-center gap-10">
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button 
                suppressHydrationWarning
                onMouseEnter={() => setHoveredLink('lang')}
                onMouseLeave={() => setHoveredLink(null)}
                className={`text-sm font-bold transition-colors flex items-center gap-2 outline-none cursor-pointer ${isDarkTheme ? 'text-black' : 'text-white'}`}
              >
                <Globe className="w-4 h-4" />
                <FlipText text={locale === 'ko' ? '한국어' : 'English'} isHovered={hoveredLink === 'lang'} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              sideOffset={8}
              className={`backdrop-blur-3xl rounded-[1.5rem] p-2.5 min-w-[140px] border transition-all duration-300 shadow-[0_25px_60px_-15px_rgba(244,63,94,0.18)] gap-1 flex flex-col data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 duration-300 ${
                isDarkTheme 
                  ? 'bg-white/98 border-rose-100/80 text-neutral-800' 
                  : 'bg-white/90 border-white text-neutral-800'
              }`}
            >
              <DropdownMenuItem 
                className="cursor-pointer px-4 py-3 rounded-xl text-[13px] font-bold transition-all duration-200 outline-none flex items-center justify-between group/item text-neutral-700 hover:translate-x-1.5 focus:translate-x-1.5 focus:bg-gradient-to-r focus:from-rose-500/10 focus:to-amber-500/5 focus:text-rose-700 hover:bg-gradient-to-r hover:from-rose-500/10 hover:to-amber-500/5 hover:text-rose-700" 
                onClick={() => toggleLanguage('en')}
              >
                <span>English</span>
                <span className="w-2 h-2 rounded-full bg-gradient-to-tr from-rose-500 to-amber-400 scale-0 group-hover/item:scale-100 group-focus/item:scale-100 transition-all duration-300 shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="cursor-pointer px-4 py-3 rounded-xl text-[13px] font-bold transition-all duration-200 outline-none flex items-center justify-between group/item text-neutral-700 hover:translate-x-1.5 focus:translate-x-1.5 focus:bg-gradient-to-r focus:from-rose-500/10 focus:to-amber-500/5 focus:text-rose-700 hover:bg-gradient-to-r hover:from-rose-500/10 hover:to-amber-500/5 hover:text-rose-700" 
                onClick={() => toggleLanguage('ko')}
              >
                <span>한국어</span>
                <span className="w-2 h-2 rounded-full bg-gradient-to-tr from-rose-500 to-amber-400 scale-0 group-hover/item:scale-100 group-focus/item:scale-100 transition-all duration-300 shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <PremiumButton 
            variant="primary" 
            href="/contact"
            className="h-12 px-8"
          >
            {t('contact')}
          </PremiumButton>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all active:scale-90 ${isDarkTheme ? 'bg-gray-100 text-black' : 'bg-white/10 text-white backdrop-blur-md'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-[60] lg:hidden flex flex-col"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-10 py-8 border-b border-gray-100">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3">
                <div className="relative h-8 w-32">
                  <Image
                    src="/logo_black.png"
                    alt={`${process.env.NEXT_PUBLIC_SITE_NAME_EN || 'HappyMom'} Logo`}
                    fill
                    sizes="(max-width: 768px) 100vw, 128px"
                    className="object-contain"
                  />
                </div>
              </Link>
              <button
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-black active:scale-90 transition-transform"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex-1 px-10 pt-12 pb-10 flex flex-col justify-between overflow-y-auto">
              <div className="flex flex-col gap-8">
                {navLinks.slice(0, 2).map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-4xl font-bold text-gray-900 tracking-tighter active:opacity-50 transition-opacity flex items-center justify-between group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Service Areas Dropdown */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col gap-4"
                >
                  <button
                    onClick={() => setIsMobileLocationOpen(!isMobileLocationOpen)}
                    className="text-4xl font-bold text-gray-900 tracking-tighter active:opacity-50 transition-opacity flex items-center justify-between group outline-none"
                  >
                    <span>{t('servicesArea')}</span>
                    <ChevronDown className={`w-8 h-8 text-gray-400 transition-transform duration-300 ${isMobileLocationOpen ? 'rotate-180 text-black' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isMobileLocationOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 flex flex-col gap-4 overflow-hidden border-l border-gray-100"
                      >
                        {cities.map((city) => (
                          <Link
                            key={city.key}
                            href={`/service-area/${city.key}`}
                            className="text-2xl font-semibold text-gray-500 active:text-gray-900"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {city.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {navLinks.slice(2).map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (i + 3) * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-4xl font-bold text-gray-900 tracking-tighter active:opacity-50 transition-opacity flex items-center justify-between group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Menu Footer */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-12 border-t border-gray-100 flex flex-col gap-8"
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t('contact')}</p>
                    <p className="text-lg font-bold text-gray-900">{process.env.NEXT_PUBLIC_PHONE || '+1 (213) 999-4642'}</p>
                  </div>
                  <button 
                    className="flex items-center gap-2 px-4 py-3 bg-gray-100 rounded-full text-xs font-bold uppercase tracking-widest active:bg-gray-200 transition-colors"
                    onClick={() => {
                      const newLocale = locale === 'ko' ? 'en' : 'ko';
                      toggleLanguage(newLocale);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <Globe className="w-3.5 h-3.5" />
                    {locale === 'ko' ? 'EN' : 'KO'}
                  </button>
                </div>
                
                <PremiumButton 
                  variant="primary" 
                  href="/contact" 
                  className="w-full h-16 rounded-[1.5rem] text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('contact')}
                </PremiumButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
