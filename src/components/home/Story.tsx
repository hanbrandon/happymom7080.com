'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Story() {
  const t = useTranslations('Story');

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left Column: Label */}
          <div className="lg:col-span-3">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm font-bold text-gray-900 uppercase tracking-widest"
            >
              {t('label')}
            </motion.span>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-9 space-y-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
            >
              {t('title')}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-500 leading-relaxed"
            >
              {t('description')}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
