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
          className="flex flex-col items-start gap-0 group cursor-pointer"
          onMouseEnter={() => setHoveredLink('logo')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-1 transition-colors ${isDarkTheme ? 'bg-gray-900 group-hover:bg-brand' : 'bg-white/10 backdrop-blur-sm group-hover:bg-brand'}`}>
             <span className="text-white text-xs font-bold">HM</span>
          </div>
          <FlipText 
            text="HappyMom" 
            isHovered={hoveredLink === 'logo'} 
            className={`text-[10px] font-black uppercase tracking-[0.25em] transition-colors ${isDarkTheme ? 'text-[#000000]' : 'text-white'}`} 
          />
        </Link>

        {/* Center: Navigation Pill */}
        <div className={`hidden lg:flex items-center backdrop-blur-xl px-2 py-1.5 rounded-2xl gap-1 transition-all ${isDarkTheme ? 'bg-gray-100/50' : 'bg-white/10'}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onMouseEnter={() => setHoveredLink(link.href)}
              onMouseLeave={() => setHoveredLink(null)}
              className={`text-[13px] font-bold px-4 py-2 rounded-xl transition-all cursor-pointer ${isDarkTheme ? 'text-[#000000]' : 'text-white'}`}
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
                onMouseEnter={() => setHoveredLink('lang')}
                onMouseLeave={() => setHoveredLink(null)}
                className={`text-sm font-bold transition-colors flex items-center gap-2 outline-none cursor-pointer ${isDarkTheme ? 'text-[#000000]' : 'text-white'}`}
              >
                <Globe className="w-4 h-4" />
                <FlipText text={locale === 'ko' ? '한국어' : 'English'} isHovered={hoveredLink === 'lang'} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className={`backdrop-blur-xl border-white/10 ${isDarkTheme ? 'bg-white text-gray-900' : 'bg-black/80 text-white'}`}>
              <DropdownMenuItem className={`cursor-pointer focus:bg-brand focus:text-white transition-colors`} onClick={() => toggleLanguage('en')}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem className={`cursor-pointer focus:bg-brand focus:text-white transition-colors`} onClick={() => toggleLanguage('ko')}>
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
          <Button
            variant="ghost"
            size="icon"
            className={`${isDarkTheme ? 'text-black' : 'text-white'} hover:text-brand transition-colors`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 bg-black/90 backdrop-blur-2xl shadow-2xl rounded-[2rem] border border-white/10 lg:hidden p-8 mt-4 overflow-hidden"
          >
            <div className="flex flex-col gap-6">
              {[...navLinks, { href: '/pricing', label: t('pricing') }].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xl font-medium text-white hover:text-brand transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <div className="flex flex-col gap-4">
                 <button 
                  className="text-lg font-medium text-white flex items-center gap-3 hover:text-brand transition-colors"
                  onClick={() => {
                    toggleLanguage(locale === 'ko' ? 'en' : 'ko');
                    setIsMobileMenuOpen(false);
                  }}
                 >
                  <Globe className="w-5 h-5" />
                  {locale === 'ko' ? 'Switch to English' : '한국어로 변경'}
                </button>
                <PremiumButton variant="primary" href="/contact" className="w-full h-14 rounded-2xl text-lg font-bold">
                  {t('contact')}
                </PremiumButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
