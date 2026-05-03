'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Star, Quote, Send, ArrowRight, X, SquarePen } from 'lucide-react';
import { useParams } from 'next/navigation';

// Individual Testimonial Item with InView tracking
function TestimonialItem({ item, index, onInView }: { item: any, index: number, onInView: (i: number) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (isInView) {
      onInView(index);
    }
  }, [isInView, index, onInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-150px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col min-h-[40vh] justify-center py-12"
    >
      <div className="relative mb-12">
         <p className="text-3xl md:text-5xl text-gray-800 leading-[1.15] font-medium tracking-tight">
            "{item.content}"
         </p>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-100 shadow-sm">
          <Image src={item.avatar} alt={item.name} width={80} height={80} className="object-cover" />
        </div>
        <div>
          <h4 className="text-xl font-bold text-gray-900 mb-1">{item.name}</h4>
          <p className="text-lg text-gray-500 font-medium">
             {item.location} <span className="text-gray-300 mx-2">/</span> {item.service}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsPage() {
  const t = useTranslations('TestimonialsPage');
  const params = useParams();
  const locale = params.locale as string;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    service: 'postpartum', // Default value
    content: ''
  });

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Los Angeles, CA',
      service: 'Postpartum Care',
      content: 'HappyMom was a lifesaver. Their lactation consultant helped me when I was about to give up. The support group is amazing!',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
      rating: 5
    },
    {
      name: 'Kim Ji-won',
      location: 'Irvine, CA',
      service: 'Maternal Wellness',
      content: 'I felt so overwhelmed, but the mental wellness sessions gave me the tools to cope. I highly recommend their services to all new moms.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
      rating: 5
    },
    {
      name: 'Michael Chen',
      location: 'Pasadena, CA',
      service: 'Family Support',
      content: 'Seeing my wife so well-cared for made our transition to parenthood so much smoother. HappyMom supports the whole family.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
      rating: 5
    },
    {
      name: 'Emily Davis',
      location: 'Santa Monica, CA',
      service: 'Newborn Care',
      content: 'The nighttime care was a blessing. I could finally get some sleep knowing my baby was in professional hands. Highly recommend!',
      avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=200&auto=format&fit=crop',
      rating: 5
    },
    {
      name: 'Park So-young',
      location: 'Fullerton, CA',
      service: 'Postpartum Care',
      content: '한국에서 온 관리사님의 정성 어린 케어 덕분에 낯선 미국 땅에서도 친정 엄마가 계신 것 같은 따뜻함을 느꼈습니다. 감사합니다.',
      avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=200&auto=format&fit=crop',
      rating: 5
    },
    {
      name: 'Jessica Miller',
      location: 'Newport Beach, CA',
      service: 'Babysitting Service',
      content: 'Reliable, professional, and so caring. My toddler absolutely loves her HappyMom sitter. It gives me such peace of mind.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
      rating: 5
    }
  ];

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isModalOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("제출 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
      }
    } catch (error) {
      console.error(error);
      alert("제출 중 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeAndReset = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', location: '', service: 'postpartum', content: '' });
      setFocusedField(null);
    }, 300);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Sticky Split Layout Section */}
      <section className="pt-48 pb-32">
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-20 items-start">
            
            {/* Left Column: Sticky Title */}
            <div className="lg:col-span-4 lg:sticky lg:top-48">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-sm font-bold text-gray-500 uppercase tracking-[0.3em] mb-6 block">{t('tag')}</span>
                <h1 
                  className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tighter leading-[1.1] mb-8"
                  dangerouslySetInnerHTML={{ __html: t('title') }}
                />
                <p className="text-xl text-gray-600 max-w-sm leading-relaxed mb-12">
                  "{t('subtitle')}"
                </p>
                
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 h-12 rounded-full bg-brand text-white font-bold text-sm uppercase tracking-widest hover:opacity-90 hover:-translate-y-1 hover:shadow-xl transition-all flex items-center gap-2 group mb-16 shadow-lg shadow-brand/20 cursor-pointer"
                >
                  <SquarePen className="w-4 h-4" />
                  {t('formSubmit')}
                </button>

                <div className="hidden lg:block w-px h-24 bg-gray-100" />
              </motion.div>
            </div>

            {/* Middle Column: Vertical List */}
            <div className="lg:col-span-7 space-y-12 lg:pt-4">
              {testimonials.map((item, index) => (
                <TestimonialItem 
                  key={index} 
                  item={item} 
                  index={index} 
                  onInView={setActiveIndex} 
                />
              ))}
            </div>

            {/* Right Column: Sticky Vertical Pagination */}
            <div className="hidden lg:block lg:col-span-1 lg:sticky lg:top-48 lg:h-[400px] flex flex-col items-center justify-center">
               <div className="flex flex-col items-center gap-8 h-full">
                  <div className="w-px flex-grow bg-gray-100" />
                  <div className="flex flex-col items-center gap-2 font-mono text-xl">
                     <motion.span 
                        key={activeIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-gray-900 font-bold"
                     >
                        0{activeIndex + 1}
                     </motion.span>
                     <span className="text-gray-300">/</span>
                     <span className="text-gray-400">0{testimonials.length}</span>
                  </div>
                  <div className="w-px flex-grow bg-gray-100" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-10">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeAndReset}
              className="absolute inset-0 bg-gray-900/40 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 1, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1, y: 100 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full h-full md:h-auto md:max-w-4xl bg-white rounded-none shadow-2xl overflow-hidden"
            >
              <button 
                onClick={closeAndReset}
                className="absolute top-8 right-8 w-12 h-12 rounded-none bg-gray-50 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="h-full md:max-h-[90vh] overflow-y-auto p-8 md:p-20">
                {submitted ? (
                  <div className="py-20 text-center">
                    <div className="w-20 h-20 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto mb-8">
                      <Send className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">감사합니다!</h3>
                    <p className="text-lg text-gray-600 max-w-sm mx-auto">
                      {t('formSuccess')}
                    </p>
                    <button 
                      onClick={closeAndReset}
                      className="mt-12 px-10 h-14 border border-gray-900 rounded-full font-bold text-gray-900 hover:bg-gray-900 hover:text-white transition-all"
                    >
                      닫기
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-16">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 block">Feedback</span>
                      <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter mb-6">{t('formTitle')}</h2>
                      <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
                        {t('formDesc')}
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-12">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Name Input with Loading Bar Motion */}
                        <div className="space-y-3 group">
                          <label className={`text-xs font-bold uppercase tracking-widest transition-colors ${focusedField === 'name' ? 'text-gray-900' : 'text-gray-400'}`}>
                            {t('formName')}
                          </label>
                          <div className="relative">
                            <input 
                              required
                              type="text" 
                              value={formData.name}
                              onFocus={() => setFocusedField('name')}
                              onBlur={() => setFocusedField(null)}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                              className="w-full h-auto bg-transparent border-b border-gray-100 rounded-none px-4 pt-2 pb-3 focus:ring-0 transition-all text-gray-900 font-medium text-xl placeholder:text-gray-300 outline-none"
                              placeholder="Jane Doe"
                            />
                            <motion.div 
                              className="absolute bottom-0 left-0 h-0.5 bg-brand" 
                              initial={{ width: 0 }}
                              animate={{ width: focusedField === 'name' ? '100%' : 0 }}
                              transition={{ duration: 0.4, ease: "easeInOut" }}
                            />
                          </div>
                        </div>

                        {/* Location Input with Loading Bar Motion */}
                        <div className="space-y-3 group">
                          <label className={`text-xs font-bold uppercase tracking-widest transition-colors ${focusedField === 'location' ? 'text-gray-900' : 'text-gray-400'}`}>
                            {t('formLocation')}
                          </label>
                          <div className="relative">
                            <input 
                              required
                              type="text" 
                              value={formData.location}
                              onFocus={() => setFocusedField('location')}
                              onBlur={() => setFocusedField(null)}
                              onChange={(e) => setFormData({...formData, location: e.target.value})}
                              className="w-full h-auto bg-transparent border-b border-gray-100 rounded-none px-4 pt-2 pb-3 focus:ring-0 transition-all text-gray-900 font-medium text-xl placeholder:text-gray-300 outline-none"
                              placeholder="Los Angeles, CA"
                            />
                            <motion.div 
                              className="absolute bottom-0 left-0 h-0.5 bg-brand" 
                              initial={{ width: 0 }}
                              animate={{ width: focusedField === 'location' ? '100%' : 0 }}
                              transition={{ duration: 0.4, ease: "easeInOut" }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Service Selection with Loading Bar Motion */}
                      <div className="space-y-3 group">
                        <label className={`text-xs font-bold uppercase tracking-widest transition-colors ${focusedField === 'service' ? 'text-gray-900' : 'text-gray-400'}`}>
                          {t('formService')}
                        </label>
                        <div className="relative">
                          <select 
                            required
                            value={formData.service}
                            onFocus={() => setFocusedField('service')}
                            onBlur={() => setFocusedField(null)}
                            onChange={(e) => setFormData({...formData, service: e.target.value})}
                            className="w-full h-auto bg-transparent border-b border-gray-100 rounded-none px-4 pt-2 pb-3 focus:ring-0 transition-all text-gray-900 font-medium text-xl appearance-none outline-none"
                          >
                            <option value="postpartum">{t('postpartum')}</option>
                            <option value="babysitting">{t('babysitting')}</option>
                          </select>
                          <motion.div 
                            className="absolute bottom-0 left-0 h-0.5 bg-brand" 
                            initial={{ width: 0 }}
                            animate={{ width: focusedField === 'service' ? '100%' : 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                          />
                        </div>
                      </div>

                      {/* Content Textarea with Loading Bar Motion */}
                      <div className="space-y-3 group">
                        <label className={`text-xs font-bold uppercase tracking-widest transition-colors ${focusedField === 'content' ? 'text-gray-900' : 'text-gray-400'}`}>
                          {t('formContent')}
                        </label>
                        <div className="relative">
                          <textarea 
                            required
                            rows={4}
                            value={formData.content}
                            onFocus={() => setFocusedField('content')}
                            onBlur={() => setFocusedField(null)}
                            onChange={(e) => setFormData({...formData, content: e.target.value})}
                            className="w-full bg-transparent border-b border-gray-100 rounded-none px-4 pt-2 pb-3 focus:ring-0 transition-all text-gray-900 font-medium text-xl resize-none placeholder:text-gray-300 outline-none"
                            placeholder="해피맘 서비스에 대한 진솔한 후기를 남겨주세요..."
                          />
                          <motion.div 
                            className="absolute bottom-0 left-0 h-0.5 bg-brand" 
                            initial={{ width: 0 }}
                            animate={{ width: focusedField === 'content' ? '100%' : 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                          />
                        </div>
                      </div>

                      <button 
                        disabled={isSubmitting}
                        type="submit"
                        className="w-full md:w-fit px-12 h-16 bg-brand text-white font-bold rounded-full hover:opacity-90 hover:-translate-y-1 hover:shadow-xl transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group shadow-xl shadow-brand/20 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            {t('formSubmit')}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
