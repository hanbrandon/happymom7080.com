'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Plus } from 'lucide-react';

export default function FAQSearchList() {
    const t = useTranslations('FAQ');
    const [searchQuery, setSearchQuery] = useState('');
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqIndices = Array.from({ length: 22 }, (_, i) => i);

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
        <section className="py-32 bg-white">
            <div className="container mx-auto px-10">
                <div className="max-w-4xl mx-auto">
                    {/* 1. Interactive Search Bar */}
                    <div className="relative mb-24">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="relative group"
                        >
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-black transition-colors duration-500" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder={t('searchPlaceholder') || "검색어를 입력하세요..."}
                                className="w-full h-20 bg-transparent border-b border-black/10 focus:border-black rounded-none pl-16 pr-16 transition-all duration-700 text-gray-900 font-light text-2xl placeholder:text-gray-200 outline-none"
                            />
                            {searchQuery && (
                                <motion.button
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    onClick={() => setSearchQuery('')}
                                    className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:text-black transition-all"
                                >
                                    <X className="w-4 h-4" />
                                </motion.button>
                            )}
                        </motion.div>
                        <p className="mt-6 text-[10px] text-gray-300 font-bold uppercase tracking-[0.3em] px-1">
                           {filteredIndices.length} Results Found
                        </p>
                    </div>

                    {/* 2. Enhanced Interactive FAQ List */}
                    <motion.div 
                        layout
                        className="space-y-0 border-t border-black/5"
                    >
                        {filteredIndices.length > 0 ? (
                            filteredIndices.map((index, i) => {
                                const isOpen = openIndex === index;
                                return (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        key={index}
                                        className="border-b border-black/5"
                                    >
                                        <button
                                            onClick={() => toggleAccordion(index)}
                                            className="w-full py-12 flex items-center justify-between text-left group relative cursor-pointer"
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
                                            
                                            {/* Subtle Hover Background - Wrapped in overflow-hidden div */}
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
                                                    <div className="pb-16 pt-4 pl-20 pr-10">
                                                        <motion.p 
                                                            initial={{ y: 20, opacity: 0 }}
                                                            animate={{ y: 0, opacity: 1 }}
                                                            transition={{ delay: 0.2 }}
                                                            className="text-lg md:text-xl text-gray-500 leading-relaxed whitespace-pre-wrap font-light"
                                                        >
                                                            {t(`items.${index}.answer`)}
                                                        </motion.p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })
                        ) : (
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-40 border-b border-dashed border-gray-100"
                            >
                                <p className="text-xl text-gray-200 font-light italic">
                                    No records matching your search criteria.
                                </p>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
