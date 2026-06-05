'use client';

import { useTranslations } from 'next-intl';
import { Sparkles, Award, FileText, Coins } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import PremiumButton from '@/components/ui/PremiumButton';

export default function EmployeeBenefits() {
  const t = useTranslations('EmployeeBenefits');

  return (
    <section className="py-24 bg-gradient-to-b from-neutral-50/30 to-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <ScrollReveal>
            <span className="text-xs font-black text-rose-600 uppercase tracking-[0.5em] mb-4 block">{t('badge')}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6 break-keep" dangerouslySetInnerHTML={{ __html: t('title') }} />
            <p className="text-lg text-gray-500 leading-relaxed font-medium break-keep" dangerouslySetInnerHTML={{ __html: t('desc') }} />
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Pillar 1 */}
          <ScrollReveal>
            <div className="flex flex-col justify-between h-full p-2">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500 mb-8">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('p1Title')}</h3>
                <p className="text-gray-500 leading-relaxed break-keep font-semibold text-[14px]">
                  {t('p1Desc')}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Pillar 2 */}
          <ScrollReveal>
            <div className="flex flex-col justify-between h-full p-2">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-500 mb-8">
                  <FileText className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('p2Title')}</h3>
                <p className="text-gray-500 leading-relaxed break-keep font-semibold text-[14px]">
                  {t('p2Desc')}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Pillar 3 */}
          <ScrollReveal>
            <div className="flex flex-col justify-between h-full p-2">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 mb-8">
                  <Coins className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('p3Title')}</h3>
                <p className="text-gray-500 leading-relaxed break-keep font-semibold text-[14px]">
                  {t('p3Desc')}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Pillar 4 */}
          <ScrollReveal>
            <div className="flex flex-col justify-between h-full p-2">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-500 mb-8">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('p4Title')}</h3>
                <p className="text-gray-500 leading-relaxed break-keep font-semibold text-[14px]">
                  {t('p4Desc')}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Central Call to Action Button */}
        <div className="flex justify-center w-full">
          <ScrollReveal>
            <div className="flex justify-center w-full">
              <PremiumButton 
                variant="primary" 
                href="/contact" 
                className="h-12 w-fit px-8 text-sm font-bold rounded-full bg-rose-600 hover:bg-rose-700 text-white shadow-md hover:shadow-rose-100/30 transition-all duration-300 flex items-center justify-center"
              >
                {t('cta')}
              </PremiumButton>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
