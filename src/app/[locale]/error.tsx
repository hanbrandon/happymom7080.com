'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { AlertCircle, RefreshCcw, Home } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations('Error');

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center">
            <AlertCircle className="w-12 h-12 text-red-500" />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-zinc-900 mb-4 font-outfit">
          {t('title')}
        </h2>
        
        <p className="text-zinc-500 mb-10 text-lg leading-relaxed">
          {t('description')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-full font-medium transition-all hover:bg-zinc-800 hover:scale-[1.02] active:scale-[0.98]"
          >
            <RefreshCcw className="w-5 h-5" />
            {t('tryAgain')}
          </button>
          
          <Link 
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-100 text-zinc-900 rounded-full font-medium transition-all hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Home className="w-5 h-5" />
            {t('goHome')}
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
