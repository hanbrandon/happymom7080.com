'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Send, ArrowRight, X, SquarePen } from 'lucide-react';
import { useParams } from 'next/navigation';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

// Individual Testimonial Item with refined ScrollReveal feel
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
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col min-h-[45vh] justify-center py-20 border-b border-black/[0.03] last:border-none"
    >
      <div className="relative mb-12">
         <p className="text-3xl md:text-5xl text-gray-900 leading-[1.1] font-medium tracking-tighter italic">
            "{item.content}"
         </p>
      </div>
      
      <div className="flex items-center gap-8">
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-rose-100 shadow-xl shadow-rose-50/50">
          <Image src={item.avatar} alt={item.name} width={80} height={80} className="object-cover" />
        </div>
        <div>
          <h4 className="text-2xl font-bold text-gray-900 mb-1 tracking-tight">{item.name}</h4>
          <p className="text-lg text-gray-400 font-light">
             {item.location} <span className="text-rose-200 mx-3">/</span> {item.service}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsContent() {
  const t = useTranslations('TestimonialsPage');
  const params = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    location: '',
    service: 'postpartum',
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
      <section className="pt-64 pb-32">
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            
            {/* Left Column: Sticky Title */}
            <div className="lg:col-span-4 lg:sticky lg:top-64">
              <ScrollReveal>
                <span className="text-xs font-black text-black uppercase tracking-[0.5em] mb-10 block">{t('tag')}</span>
                <h1 
                  className="text-6xl md:text-8xl font-bold text-gray-900 tracking-tighter leading-[0.9] mb-12"
                  dangerouslySetInnerHTML={{ __html: t('title') }}
                />
                <p className="text-2xl text-gray-400 max-w-sm leading-tight font-light mb-16">
                  "{t('subtitle')}"
                </p>
                
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-10 h-16 rounded-full bg-black text-white font-black text-xs uppercase tracking-[0.3em] hover:bg-gray-900 transition-all flex items-center gap-4 group mb-16 shadow-2xl shadow-gray-100"
                >
                  <SquarePen className="w-5 h-5" />
                  {t('formSubmit')}
                </button>
              </ScrollReveal>
            </div>

            {/* Middle Column: Vertical List */}
            <div className="lg:col-span-7 space-y-0 lg:pt-4">
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
            <div className="hidden lg:block lg:col-span-1 lg:sticky lg:top-64 lg:h-[400px]">
               <div className="flex flex-col items-center gap-12 h-full">
                  <div className="w-[1px] flex-grow bg-black/[0.05]" />
                  <div className="flex flex-col items-center gap-4 font-black text-xs tracking-widest">
                     <motion.span 
                        key={activeIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-black"
                     >
                        {(activeIndex + 1).toString().padStart(2, '0')}
                     </motion.span>
                     <span className="text-gray-200">/</span>
                     <span className="text-gray-300">{(testimonials.length).toString().padStart(2, '0')}</span>
                  </div>
                  <div className="w-[1px] flex-grow bg-black/[0.05]" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeAndReset}
              className="absolute inset-0 bg-gray-900/60 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 100 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="relative w-full h-full md:h-auto md:max-w-4xl bg-white rounded-[3rem] shadow-2xl overflow-hidden"
            >
              <button 
                onClick={closeAndReset}
                className="absolute top-10 right-10 w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-black hover:bg-gray-100 transition-all z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="h-full md:max-h-[90vh] overflow-y-auto p-10 md:p-24">
                {submitted ? (
                  <div className="py-20 text-center">
                    <div className="w-24 h-24 bg-gray-50 text-black rounded-full flex items-center justify-center mx-auto mb-10">
                      <Send className="w-10 h-10" />
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-6 tracking-tighter">감사합니다!</h3>
                    <p className="text-xl text-gray-400 font-light max-w-sm mx-auto leading-relaxed">
                      {t('formSuccess')}
                    </p>
                    <button 
                      onClick={closeAndReset}
                      className="mt-16 px-12 h-16 bg-black text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-rose-400 transition-all"
                    >
                      닫기
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-20">
                      <span className="text-xs font-black text-black uppercase tracking-[0.4em] mb-6 block">Share Your Experience</span>
                      <h2 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tighter mb-10">{t('formTitle')}</h2>
                      <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
                        {t('formDesc')}
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-16">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="space-y-4 group">
                          <label className="text-xs font-black text-black uppercase tracking-widest">
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
                              className="w-full bg-transparent border-b border-black/[0.05] focus:border-black rounded-none py-4 transition-all text-gray-900 font-medium text-2xl placeholder:text-gray-100 outline-none"
                              placeholder="Jane Doe"
                            />
                          </div>
                        </div>

                        <div className="space-y-4 group">
                          <label className="text-xs font-black text-black uppercase tracking-widest">
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
                              className="w-full bg-transparent border-b border-black/[0.05] focus:border-black rounded-none py-4 transition-all text-gray-900 font-medium text-2xl placeholder:text-gray-100 outline-none"
                              placeholder="Los Angeles, CA"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <label className="text-xs font-black text-black uppercase tracking-widest">
                          {t('formService')}
                        </label>
                        <select 
                          required
                          value={formData.service}
                          onChange={(e) => setFormData({...formData, service: e.target.value})}
                          className="w-full bg-transparent border-b border-black/[0.05] focus:border-black rounded-none py-4 transition-all text-gray-900 font-medium text-2xl outline-none appearance-none"
                        >
                          <option value="postpartum">{t('postpartum')}</option>
                          <option value="babysitting">{t('babysitting')}</option>
                        </select>
                      </div>

                      <div className="space-y-4">
                        <label className="text-xs font-black text-black uppercase tracking-widest">
                          {t('formContent')}
                        </label>
                        <textarea 
                          required
                          rows={4}
                          value={formData.content}
                          onChange={(e) => setFormData({...formData, content: e.target.value})}
                          className="w-full bg-transparent border-b border-black/[0.05] focus:border-black rounded-none py-4 transition-all text-gray-900 font-medium text-2xl resize-none placeholder:text-gray-100 outline-none"
                          placeholder="Please share your honest experience..."
                        />
                      </div>

                      <button 
                        disabled={isSubmitting}
                        type="submit"
                        className="w-full md:w-fit px-16 h-20 bg-black text-white font-black text-xs uppercase tracking-[0.4em] rounded-full hover:bg-gray-900 hover:-translate-y-2 transition-all flex items-center justify-center gap-6 disabled:opacity-50 disabled:cursor-not-allowed group shadow-2xl shadow-gray-100 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            {t('formSubmit')}
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
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
