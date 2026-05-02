'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Pricing() {
  const t = useTranslations('Pricing');

  const plans = [
    {
      serviceKey: 'postpartumCare',
      typeKey: 'liveIn',
      price: '$1600',
      period: '/week',
      serviceFee: '$1300',
      deposit: '$300',
      total: '$1600'
    },
    {
      serviceKey: 'postpartumCare',
      typeKey: 'commuting',
      price: '$1350',
      period: '/week',
      serviceFee: '$1050',
      deposit: '$300',
      total: '$1350'
    },
    {
      serviceKey: 'babyCare',
      typeKey: 'liveIn',
      price: '$1200',
      period: '/week',
      serviceFee: '$1000',
      deposit: '$200',
      total: '$1200'
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <h2 className="text-5xl font-bold text-gray-900 tracking-tight">{t('title')}</h2>
          <button className="px-10 h-12 rounded-full border border-gray-900 text-gray-900 font-bold text-base hover:bg-gray-900 hover:text-white transition-all duration-300">
            See more Details
          </button>
        </div>
        
        <div className="flex flex-col border-t border-gray-100">
          {plans.map((plan, index) => {
            const showHeader = index === 0 || plans[index - 1].serviceKey !== plan.serviceKey;
            
            return (
              <div key={index}>
                {showHeader && (
                  <div className="pt-16 pb-4">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em]">
                      {t(plan.serviceKey)}
                    </span>
                  </div>
                )}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group flex flex-col md:flex-row items-start md:items-center justify-between py-12 border-b border-gray-100 px-4 -mx-4"
                >
                  {/* Type Label - No rounds, smaller font, no hover border change */}
                  <div className="flex flex-col items-center justify-center w-24 h-24 border border-gray-200 bg-white transition-colors">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Type</span>
                    <span className="text-base font-bold text-gray-900">{t(plan.typeKey)}</span>
                  </div>

                  {/* Details */}
                  <div className="flex-1 md:px-12">
                    <div className="flex items-baseline gap-2 mb-6">
                      <p className="text-lg font-bold text-gray-900">{plan.price}<span className="text-sm font-normal text-gray-400">{plan.period}</span></p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-400 mb-1">{t('serviceFee')}</p>
                        <p className="font-bold text-gray-900">{plan.serviceFee}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 mb-1">{t('deposit')}</p>
                        <p className="font-bold text-gray-900">{plan.deposit}</p>
                      </div>
                      <div className="border-l border-gray-100 pl-4">
                        <p className="text-gray-400 mb-1">{t('total')}</p>
                        <p className="font-bold text-gray-900 text-lg">{plan.total}</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 md:mt-0">
                    <button className="px-10 h-14 rounded-full border border-gray-200 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-all duration-300 text-base">
                      {t('learnMore')}
                    </button>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
