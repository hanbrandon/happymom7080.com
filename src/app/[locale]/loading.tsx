'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center">
      <div className="relative">
        {/* Minimalist Logo/Text Loader */}
        <motion.span 
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="text-2xl font-bold text-gray-900 tracking-tighter"
        >
          HappyMom
        </motion.span>
        
        {/* Thin Progress Line */}
        <motion.div 
          className="absolute -bottom-4 left-0 h-[1px] bg-gray-900"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
