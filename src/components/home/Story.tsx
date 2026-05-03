'use client';

import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function Story() {
  const t = useTranslations('Story');

  return (
    <section className="py-40 bg-white border-y border-black/[0.03]">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-baseline">
          {/* Left Column: Label */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-[1px] bg-black" />
                <span className="text-xs font-black text-black uppercase tracking-[0.4em]">
                  {t('label')}
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-9 space-y-16">
            <ScrollReveal delay={0.2}>
              <h3 className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tighter">
                {t('title')}
              </h3>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="text-2xl md:text-3xl text-gray-400 leading-relaxed font-light">
                {t('description')}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
