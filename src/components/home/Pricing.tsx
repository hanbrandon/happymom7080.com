'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function Pricing() {
  const t = useTranslations('Pricing');

  const plans = [
    {
      serviceKey: 'postpartumCare',
      typeKey: 'liveIn',
      price: '1,600',
      period: '/ week',
      serviceFee: '$1,300',
      deposit: '$300',
      features: [
        '24/7 Professional Care',
        'Specialized Newborn Support',
        'Maternal Physical Recovery',
        'Nutrition & Meal Management'
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
        'Mon-Fri 9:00 - 18:00',
        'Personalized Newborn Care',
        'Maternal Health Check',
        'Family & Environment Support'
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
        'Expert Babysitting Service',
        'Infant Development Support',
        'Daily Log & Health Recording',
        'Safety Focused Care'
      ]
    }
  ];

  return (
    <section className="py-40 bg-gray-50">
      <div className="container mx-auto px-10">
        <div className="flex flex-col lg:flex-row items-start justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-[0.3em] mb-6 block">
              Investment in Care
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tighter leading-[1.05] mb-8">
              Transparent Pricing <br />for Peace of Mind.
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed max-w-lg">
              Choose the care plan that best fits your family's needs. No hidden fees, just pure professional support.
            </p>
          </div>
          <div className="pt-4">
            <Link href="/pricing">
              <button className="px-10 h-16 rounded-full bg-white border border-gray-100 text-gray-900 font-bold text-sm uppercase tracking-widest hover:bg-gray-900 hover:text-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer shadow-sm group flex items-center gap-3">
                Full Pricing Details
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
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
              className={`relative flex flex-col p-12 bg-white rounded-[2rem] transition-all group hover:shadow-2xl hover:shadow-gray-900/5 ${plan.featured ? 'ring-2 ring-gray-900' : 'border border-gray-100'}`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full">
                  Most Popular
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
                    <div className="w-5 h-5 rounded-full bg-gray-50 flex items-center justify-center mt-1 flex-shrink-0 group-hover:bg-gray-900 group-hover:text-white transition-colors">
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

              <Link href="/pricing" className="mt-auto">
                <button className={`w-full h-16 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 cursor-pointer ${plan.featured ? 'bg-gray-900 text-white hover:bg-gray-800 hover:-translate-y-1' : 'bg-gray-50 text-gray-900 hover:bg-gray-200 hover:-translate-y-1'}`}>
                  {t('learnMore')}
                </button>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-gray-400 text-sm font-medium">
            * Custom plans available for twins or out-of-state services. <Link href="/contact" className="text-gray-900 underline underline-offset-4 decoration-1 font-bold">Inquire Now</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
