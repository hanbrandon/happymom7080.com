'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Search, X, ChevronDown } from 'lucide-react';

export default function FAQSearchList() {
    const t = useTranslations('FAQ');
    const [searchQuery, setSearchQuery] = useState('');
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Total indices from the translation file (0 to 21)
    const faqIndices = Array.from({ length: 22 }, (_, i) => i);

    // Filter indices based on search query
    const filteredIndices = faqIndices.filter((index) => {
        const question = t(`items.${index}.question`).toLowerCase();
        const answer = t(`items.${index}.answer`).toLowerCase();
        const query = searchQuery.toLowerCase();
        return question.includes(query) || answer.includes(query);
    });

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-10">
                <div className="max-w-4xl mx-auto">
                    {/* 1. Search Bar */}
                    <div className="relative mb-20">
                        <div className="relative group">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-gray-900 transition-colors" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="검색어를 입력하세요 (예: 환불, 입주, 계약...)"
                                className="w-full h-20 bg-white border-2 border-black rounded-none pl-16 pr-16 focus:bg-gray-50 transition-all text-gray-900 font-bold text-xl placeholder:text-gray-300"
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

                    {/* 2. Accordion FAQ List */}
                    <div className="space-y-0">
                        {filteredIndices.length > 0 ? (
                            filteredIndices.map((index) => {
                                const isOpen = openIndex === index;
                                return (
                                    <div
                                        key={index}
                                        className="border-2 border-black mb-6 px-8 hover:bg-gray-50 transition-colors duration-300"
                                    >
                                        <button
                                            onClick={() =>
                                                toggleAccordion(index)
                                            }
                                            className="w-full py-10 flex items-start justify-between text-left group"
                                        >
                                            <h3
                                                className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${isOpen ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'}`}
                                            >
                                                Q.{' '}
                                                {t(`items.${index}.question`)}
                                            </h3>
                                            <motion.div
                                                animate={{
                                                    rotate: isOpen ? 180 : 0,
                                                }}
                                                transition={{ duration: 0.3 }}
                                                className="mt-2 ml-4 flex-shrink-0"
                                            >
                                                <ChevronDown
                                                    className={`w-6 h-6 ${isOpen ? 'text-gray-900' : 'text-gray-300'}`}
                                                />
                                            </motion.div>
                                        </button>

                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{
                                                        height: 0,
                                                        opacity: 0,
                                                    }}
                                                    animate={{
                                                        height: 'auto',
                                                        opacity: 1,
                                                    }}
                                                    exit={{
                                                        height: 0,
                                                        opacity: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.4,
                                                        ease: [
                                                            0.04, 0.62, 0.23,
                                                            0.98,
                                                        ],
                                                    }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pb-10 pt-2 text-gray-600 text-lg md:text-xl leading-relaxed whitespace-pre-wrap border-t border-gray-100 mt-2">
                                                        {t(
                                                            `items.${index}.answer`,
                                                        )}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="text-center py-24 bg-gray-50 border border-dashed border-gray-200">
                                <p className="text-xl text-gray-400 font-medium italic">
                                    No results match your search.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
