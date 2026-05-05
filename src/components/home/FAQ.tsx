'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import PremiumButton from '@/components/ui/PremiumButton';
import { ArrowRight, Plus } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function FAQ() {
  const t = useTranslations('FAQ');
  const params = useParams();
  const locale = params.locale as string;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  // Only show first 5 FAQs on homepage
  const faqIndices = Array.from({ length: 5 }, (_, i) => i);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24">
          {/* Left: Heading */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-32"
            >
              <span className="text-sm font-bold text-gray-500 uppercase tracking-[0.3em] mb-6 block">
                {t('tag')}
              </span>
              <h2 
                className="text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-8 tracking-tight"
                dangerouslySetInnerHTML={{ __html: t('title') }}
              />
              <p className="text-xl text-gray-500 leading-relaxed max-w-sm mb-12">
                {t('subtitle')}
              </p>

              <PremiumButton 
                href="/faq"
                variant="primary"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                {t('viewMore')}
              </PremiumButton>
            </motion.div>
          </div>

          {/* Right: Custom Motion Accordion */}
          <div className="lg:col-span-7">
            <div className="space-y-0 border-t border-black/5">
              {faqIndices.map((index, i) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={index}
                    whileHover="hover"
                    className="relative group -mt-[1px]"
                  >
                    {/* Top Animated Border */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-black/5" />
                    <motion.div 
                      variants={{
                        hover: { scaleX: 1 }
                      }}
                      animate={{ scaleX: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute top-0 left-0 w-full h-[1px] bg-black z-20 origin-left"
                    />

                    <button
                      suppressHydrationWarning
                      onClick={() => toggleAccordion(index)}
                      className="w-full py-10 flex items-center justify-between text-left relative cursor-pointer"
                    >
                      <div className="flex items-center space-x-8 z-10 transition-transform duration-500 group-hover:translate-x-2">
                        <span className={`text-xs font-bold transition-colors duration-500 tracking-tighter ${isOpen ? 'text-black' : 'text-gray-400 group-hover:text-black'}`}>
                          {(i + 1).toString().padStart(2, '0')}
                        </span>
                        <h3 className={`text-xl md:text-2xl font-medium tracking-tight transition-colors duration-500 ${isOpen ? 'text-black' : 'text-gray-400 group-hover:text-black'}`}>
                          {t(`items.${index}.question`)}
                        </h3>
                      </div>

                      <motion.div
                        animate={{ 
                          rotate: isOpen ? 45 : 0,
                          scale: isOpen ? 1.2 : 1
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 300, 
                          damping: 15 
                        }}
                        className={`flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center z-10 transition-colors duration-500 ${isOpen ? 'bg-black border-black text-white' : 'border-gray-300 text-gray-500 group-hover:border-black group-hover:text-black'}`}
                      >
                        <Plus className="w-5 h-5" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ 
                            height: { duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] },
                            opacity: { duration: 0.4 }
                          }}
                          className="overflow-hidden"
                        >
                          <div className="pb-12 pt-2 pl-20 pr-10">
                            <motion.p 
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.2 }}
                              className="text-lg text-gray-500 leading-relaxed whitespace-pre-wrap font-light"
                            >
                              {t(`items.${index}.answer`)}
                            </motion.p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Bottom Animated Border - Now below the answer */}
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black/5" />
                    <motion.div 
                      variants={{
                        hover: { scaleX: 1 }
                      }}
                      animate={{ scaleX: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-black z-20 origin-left"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
