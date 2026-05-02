'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function PolicyPage() {
  const t = useTranslations('PricingDetail');

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* 1. Standardized Minimalist Hero */}
      <section className="pt-48 pb-20 bg-white">
        <div className="container mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-sm font-bold text-gray-400 uppercase tracking-[0.3em] mb-6 block">Legal & Policy</span>
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 tracking-tighter leading-[1.1] mb-8">
               Our Refund <br />Policy.
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 max-w-3xl leading-relaxed">
              "We prioritize transparency and mutual trust. Please review our refund guidelines to ensure a smooth partnership."
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Detailed Refund Rules */}
      <section className="py-32 bg-white border-t border-gray-100">
        <div className="container mx-auto px-10">
           <div className="space-y-32">
              {/* Non-Refundable */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                 <div className="lg:col-span-4">
                    <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-widest text-red-600">Non-Refundable</h2>
                 </div>
                 <div className="lg:col-span-8">
                    <p className="text-2xl text-gray-700 leading-relaxed font-medium">
                       {t('noRefund')}
                    </p>
                    <p className="mt-8 text-lg text-gray-500 leading-relaxed">
                       Once a contract is signed and a reservation is confirmed, the deposit is used to secure the specialist's schedule. Cancellations due to personal changes (finding cheaper alternatives, moving, family assistance, or change of mind) do not qualify for a refund.
                    </p>
                 </div>
              </div>

              {/* Full Refund */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                 <div className="lg:col-span-4">
                    <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-widest text-emerald-600">Full Refund</h2>
                 </div>
                 <div className="lg:col-span-8">
                    <p className="text-2xl text-gray-700 leading-relaxed font-medium">
                       {t('fullRefund')}
                    </p>
                    <p className="mt-8 text-lg text-gray-500 leading-relaxed">
                       In the unfortunate event of a preterm birth or miscarriage, HappyMom provides a 100% full refund of any deposits or payments made. We stand by our mothers during these difficult times.
                    </p>
                 </div>
              </div>

              {/* Deposit Recovery */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                 <div className="lg:col-span-4">
                    <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-widest text-blue-600">Deposit Recovery</h2>
                 </div>
                 <div className="lg:col-span-8">
                    <p className="text-2xl text-gray-700 leading-relaxed font-medium">
                       {t('depositRefund')}
                    </p>
                    <p className="mt-8 text-lg text-gray-500 leading-relaxed">
                       If HappyMom needs to cancel a reservation due to the specialist's health issues or other unforeseen personal reasons, the client is entitled to a full refund of the deposit or a priority reassignment of another qualified specialist.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 3. Closing Note */}
      <section className="py-40 bg-gray-50 border-t border-gray-100">
         <div className="container mx-auto px-10 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter mb-12">
               Still have questions <br />about our terms?
            </h2>
            <button className="h-16 px-16 bg-gray-900 text-white font-bold rounded-full uppercase tracking-widest hover:bg-gray-800 transition-all">
               Contact Support
            </button>
         </div>
      </section>
      
      <Footer />
    </main>
  );
}
