'use client';

import { useTranslations, useLocale } from 'next-intl';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function Story() {
  const t = useTranslations('Story');
  const locale = useLocale();
  const brand = locale === 'ko' 
    ? (process.env.NEXT_PUBLIC_SITE_NAME_KO || '해피맘') 
    : (process.env.NEXT_PUBLIC_SITE_NAME_EN || 'HappyMom');

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24">
          {/* Left Column: Label */}
          <div className="lg:col-span-3 hidden lg:block">
            <ScrollReveal>
              <span className="text-sm font-bold text-gray-900 uppercase tracking-widest">
                {t('label', { brand })}
              </span>
            </ScrollReveal>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-9 space-y-12">
            <ScrollReveal delay={0.2}>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {t('title')}
              </h3>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="text-xl md:text-2xl text-gray-500 leading-relaxed">
                {t('description', { brand })}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
