'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { useLocale } from 'next-intl';

export interface NeighborhoodInfo {
  nameKo: string;
  nameEn: string;
  descKo: string;
  descEn: string;
  image: string;
  badgeKo: string;
  badgeEn: string;
}

interface LocalNeighborhoodsProps {
  neighborhoods: NeighborhoodInfo[];
  cityName: string;
}

export default function LocalNeighborhoods({ neighborhoods, cityName }: LocalNeighborhoodsProps) {
  const locale = useLocale();

  if (!neighborhoods || neighborhoods.length === 0) return null;

  return (
    <section className="py-24 bg-gradient-to-b from-white to-rose-50/20 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal>
            <span className="text-sm font-bold text-gray-400 uppercase tracking-[0.3em] mb-6 block">
              Key Service Areas in {cityName}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              {locale === 'ko' ? `${cityName} 내 주요 서비스 대표 지역` : `Key Service Areas in ${cityName}`}
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {neighborhoods.map((item, idx) => {
            const name = locale === 'ko' ? item.nameKo : item.nameEn;
            const desc = locale === 'ko' ? item.descKo : item.descEn;
            const badge = locale === 'ko' ? item.badgeKo : item.badgeEn;

            return (
              <ScrollReveal key={idx}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="transition-all duration-500 flex flex-col justify-between h-full relative overflow-hidden group"
                >
                  {/* Top Image */}
                  <div className="relative h-60 w-full overflow-hidden rounded-[2rem]">
                    <Image
                      src={item.image}
                      alt={name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>

                  <div className="pt-6 px-2 flex flex-col justify-between flex-1">
                    <div>
                      {/* Name */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{name}</h3>
                      {/* Description */}
                      <p className="text-gray-500 leading-relaxed font-semibold text-[15px] break-keep">
                        {desc}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-xs font-black text-rose-600 uppercase tracking-widest bg-rose-50 px-3 py-1.5 rounded-full">
                        {badge}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
