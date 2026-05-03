'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Mission() {
  const t = useTranslations('Mission');

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-10"
          >
            {t('title')}
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button size="lg" className="bg-brand hover:opacity-90 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-white rounded-full px-10 h-14 text-lg font-semibold cursor-pointer border-none">
              {t('button')}
            </Button>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 pt-16">
          <div className="text-center">
            <h3 className="text-5xl font-bold text-gray-900 mb-2">Over 30</h3>
            <p className="text-gray-500 font-medium tracking-wide">Partner Hospitals</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl font-bold text-gray-900 mb-2">5,000+</h3>
            <p className="text-gray-500 font-medium tracking-wide">Happy Mothers</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl font-bold text-gray-900 mb-2">24/7</h3>
            <p className="text-gray-500 font-medium tracking-wide">Expert Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
