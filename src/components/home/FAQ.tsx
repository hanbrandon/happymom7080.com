'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function FAQ() {
  const t = useTranslations('FAQ');
  const params = useParams();
  const locale = params.locale as string;
  
  // Only show first 5 FAQs on homepage
  const faqIndices = Array.from({ length: 5 }, (_, i) => i);

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

          {/* Right: Accordion */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Accordion type="single" collapsible className="w-full">
                {faqIndices.map((index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="border-b border-gray-100 py-4"
                  >
                    <AccordionTrigger className="text-xl md:text-2xl font-bold text-gray-900 hover:no-underline hover:text-black text-left py-6 cursor-pointer transition-colors">
                      {t(`items.${index}.question`)}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-500 text-lg leading-relaxed pb-8">
                      {t(`items.${index}.answer`)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
