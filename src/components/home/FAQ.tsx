'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
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
    <section className="py-32 bg-white">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
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

              <Link 
                href={`/${locale}/faq`}
                className="inline-flex items-center gap-2 text-gray-900 font-bold hover:text-black hover:gap-4 transition-all group cursor-pointer"
              >
                더 많은 질문 보기 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
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
                    className="border-b border-black/5"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full py-10 flex items-center justify-between text-left group relative cursor-pointer"
                    >
                      <div className="flex items-center space-x-8 z-10 transition-transform duration-500 group-hover:translate-x-2">
                        <span className="text-xs font-bold text-gray-200 group-hover:text-black transition-colors duration-500 tracking-tighter">
                          {(i + 1).toString().padStart(2, '0')}
                        </span>
                        <h3 className={`text-xl md:text-2xl font-medium tracking-tight transition-colors duration-500 ${isOpen ? 'text-black' : 'text-gray-400'}`}>
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
                        className={`flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center z-10 transition-colors duration-500 ${isOpen ? 'bg-black border-black text-white' : 'border-gray-100 text-gray-300 group-hover:border-black group-hover:text-black'}`}
                      >
                        <Plus className="w-5 h-5" />
                      </motion.div>
                      
                      {/* Subtle Hover Background */}
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <motion.div 
                          className="absolute inset-0 bg-gray-50/50 -z-0 translate-x-[-101%]"
                          whileHover={{ translateX: "0%" }}
                          transition={{ duration: 0.4, ease: "circOut" }}
                        />
                      </div>
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
