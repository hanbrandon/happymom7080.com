'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import PremiumButton from '@/components/ui/PremiumButton';

export default function Pricing() {
  const t = useTranslations('Pricing');
  const th = useTranslations('PricingHome');

  const plans = [
    {
      serviceKey: 'postpartumCare',
      typeKey: 'liveIn',
      price: '1,600',
      period: '/ week',
      serviceFee: '$1,300',
      deposit: '$300',
      features: [
        th('plans.0.features.0'),
        th('plans.0.features.1'),
        th('plans.0.features.2'),
        th('plans.0.features.3'),
      ]
    },
    {
      serviceKey: 'postpartumCare',
      typeKey: 'commuting',
      price: '1,350',
      period: '/ week',
      serviceFee: '$1,050',
      deposit: '$300',
      featured: true,
      features: [
        th('plans.1.features.0'),
        th('plans.1.features.1'),
        th('plans.1.features.2'),
        th('plans.1.features.3'),
      ]
    },
    {
      serviceKey: 'babyCare',
      typeKey: 'liveIn',
      price: '1,200',
      period: '/ week',
      serviceFee: '$1,000',
      deposit: '$200',
      features: [
        th('plans.2.features.0'),
        th('plans.2.features.1'),
        th('plans.2.features.2'),
        th('plans.2.features.3'),
      ]
    }
  ];

  return (
    <section className="py-40 bg-gray-50">
      <div className="container mx-auto px-10">
        <div className="flex flex-col lg:flex-row items-start justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-[0.3em] mb-6 block">
              {th('tag')}
            </span>
            <h2 
              className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tighter leading-[1.05] mb-8"
              dangerouslySetInnerHTML={{ __html: th('title') }}
            />
            <p className="text-xl text-gray-500 leading-relaxed max-w-lg">
              {th('subtitle')}
            </p>
          </div>
          <div className="pt-4">
            <PremiumButton 
              variant="outline" 
              href="/pricing"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              {th('fullPricing')}
            </PremiumButton>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative flex flex-col p-12 bg-white rounded-[2rem] transition-all group ${plan.featured ? 'ring-2 ring-black' : 'border border-gray-100'}`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full">
                  {th('popular')}
                </div>
              )}

              <div className="mb-10">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 block">
                  {t(plan.serviceKey)}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t(plan.typeKey)}</h3>
                <div className="flex items-baseline gap-1 mt-6">
                  <span className="text-5xl font-bold text-gray-900 tracking-tighter">${plan.price}</span>
                  <span className="text-lg text-gray-400 font-medium">{plan.period}</span>
                </div>
              </div>

              <div className="space-y-4 mb-12 flex-1">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gray-50 flex items-center justify-center mt-1 flex-shrink-0 group-hover:bg-black group-hover:text-white transition-colors">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-gray-600 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-10 border-t border-gray-50 space-y-4 mb-10">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400 font-medium">{t('serviceFee')}</span>
                  <span className="text-gray-900 font-bold">{plan.serviceFee}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400 font-medium">{t('deposit')}</span>
                  <span className="text-gray-900 font-bold">{plan.deposit}</span>
                </div>
              </div>

              <PremiumButton 
                variant={plan.featured ? 'primary' : 'outline'} 
                href="/pricing"
                className="w-full"
              >
                {t('learnMore')}
              </PremiumButton>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
