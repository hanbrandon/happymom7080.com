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
import { Globe, Menu, X } from 'lucide-react';
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
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

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
              alt="HappyMom Logo"
              fill
              className={`object-contain transition-all duration-300 ${!isDarkTheme ? 'brightness-0 invert' : ''}`}
              priority
            />
          </div>
        </Link>

        {/* Center: Navigation Pill */}
        <div className={`hidden lg:flex items-center backdrop-blur-xl px-2 py-1.5 rounded-2xl gap-1 transition-all ${isDarkTheme ? 'bg-gray-100/50' : 'bg-white/10'}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onMouseEnter={() => setHoveredLink(link.href)}
              onMouseLeave={() => setHoveredLink(null)}
              className={`text-[13px] font-bold px-4 py-2 rounded-xl transition-all cursor-pointer ${isDarkTheme ? 'text-black' : 'text-white'}`}
            >
              <FlipText text={link.label} isHovered={hoveredLink === link.href} />
            </Link>
          ))}
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
            <DropdownMenuContent align="end" className={`backdrop-blur-xl border-white/10 ${isDarkTheme ? 'bg-white text-gray-900' : 'bg-black/80 text-white'}`}>
              <DropdownMenuItem className={`cursor-pointer focus:bg-black focus:text-white transition-colors`} onClick={() => toggleLanguage('en')}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem className={`cursor-pointer focus:bg-black focus:text-white transition-colors`} onClick={() => toggleLanguage('ko')}>
                한국어
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
                    alt="HappyMom Logo"
                    fill
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
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
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
