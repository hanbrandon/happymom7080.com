'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Search, X } from 'lucide-react';

export default function FAQSearchList() {
  const t = useTranslations('FAQ');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Total indices from the translation file (0 to 21)
  const faqIndices = Array.from({ length: 22 }, (_, i) => i);

  // Filter indices based on search query
  const filteredIndices = faqIndices.filter((index) => {
    const question = t(`items.${index}.question`).toLowerCase();
    const answer = t(`items.${index}.answer`).toLowerCase();
    const query = searchQuery.toLowerCase();
    return question.includes(query) || answer.includes(query);
  });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-10">
        <div className="max-w-4xl mx-auto">
          
          {/* 1. Search Bar (Sharp Edges) */}
          <div className="relative mb-20">
            <div className="relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-gray-900 transition-colors" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="검색어를 입력하세요 (예: 환불, 입주, 계약...)"
                className="w-full h-16 bg-gray-50 border-none rounded-none pl-16 pr-16 focus:ring-1 focus:ring-gray-900 transition-all text-gray-900 font-medium text-lg"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 bg-gray-200 rounded-none flex items-center justify-center text-gray-500 hover:text-gray-900 transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <p className="mt-4 text-xs text-gray-400 font-bold uppercase tracking-widest px-1">
               {filteredIndices.length} Results Found
            </p>
          </div>

          {/* 2. Expanded FAQ List (Sharp Edges, No Accordion) */}
          <div className="space-y-0">
            {filteredIndices.length > 0 ? (
              filteredIndices.map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border-b border-gray-100 py-12 first:border-t"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 leading-snug">
                    Q. {t(`items.${index}.question`)}
                  </h3>
                  <div className="text-gray-600 text-lg md:text-xl leading-relaxed whitespace-pre-wrap pl-6 border-l-2 border-gray-100">
                    A. {t(`items.${index}.answer`)}
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-24 bg-gray-50 border border-dashed border-gray-200">
                 <p className="text-xl text-gray-400 font-medium italic">No results match your search.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
