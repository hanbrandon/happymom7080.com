'use client';

import { Mail, Phone, Send, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import PremiumButton from '@/components/ui/PremiumButton';

export default function Contact() {
  const t = useTranslations('Contact');
  
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateEmail(formData.email)) {
      setError("올바른 이메일 형식을 입력해 주세요.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitted(true);
      } else {
        setError("메시지 전송 중 오류가 발생했습니다. 다시 시도해 주세요.");
      }
    } catch (err) {
      console.error(err);
      setError("네트워크 연결을 확인하고 다시 시도해 주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-32"
            >
              <span className="text-sm font-bold text-gray-400 uppercase tracking-[0.3em] mb-6 block">
                {t('tag')}
              </span>
              <h2 
                className="text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-8 tracking-tight"
                dangerouslySetInnerHTML={{ __html: t('title') }}
              />
              <p className="text-xl text-gray-500 leading-relaxed max-w-sm mb-12">
                {t('subtitle')}
              </p>

              <div className="space-y-10">
                <a href="tel:+12137001415" className="flex items-start gap-6 group outline-none">
                  <div className="w-12 h-12 bg-gray-50 flex items-center justify-center transition-all group-hover:bg-brand group-hover:text-white">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{t('callUs')}</h4>
                    <p className="text-xl font-bold text-gray-900 group-hover:underline underline-offset-8 decoration-2 decoration-brand">+1 (213) 700-1415</p>
                  </div>
                </a>
                <a href="mailto:happymom7080@gmail.com" className="flex items-start gap-6 group outline-none">
                  <div className="w-12 h-12 bg-gray-50 flex items-center justify-center transition-all group-hover:bg-brand group-hover:text-white">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{t('emailUs')}</h4>
                    <p className="text-xl font-bold text-gray-900 group-hover:underline underline-offset-8 decoration-2 decoration-brand">happymom7080@gmail.com</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-20 text-center bg-gray-50"
                  >
                    <div className="w-20 h-20 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto mb-8">
                      <Send className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">{t('successTitle')}</h3>
                    <p className="text-lg text-gray-600 max-w-sm mx-auto mb-10">
                      {t('successDesc')}
                    </p>
                    <PremiumButton 
                      variant="primary" 
                      onClick={() => setSubmitted(false)}
                      className="mx-auto"
                    >
                      {t('resend')}
                    </PremiumButton>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      {/* First Name */}
                      <div className="space-y-3">
                        <label className={`text-xs font-bold uppercase tracking-widest transition-colors ${focusedField === 'firstName' ? 'text-brand' : 'text-gray-400'}`}>
                          {t('firstName')}
                        </label>
                        <div className="relative">
                          <input 
                            required
                            type="text" 
                            value={formData.firstName}
                            onFocus={() => setFocusedField('firstName')}
                            onBlur={() => setFocusedField(null)}
                            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                            className="w-full h-auto bg-transparent border-b border-gray-100 rounded-none px-4 pt-2 pb-3 focus:ring-0 transition-all text-gray-900 font-medium text-xl placeholder:text-gray-300 outline-none"
                            placeholder={t('placeholderFirstName')}
                          />
                          <motion.div 
                            className="absolute bottom-0 left-0 h-0.5 bg-brand" 
                            initial={{ width: 0 }}
                            animate={{ width: focusedField === 'firstName' ? '100%' : 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                          />
                        </div>
                      </div>

                      {/* Last Name */}
                      <div className="space-y-3">
                        <label className={`text-xs font-bold uppercase tracking-widest transition-colors ${focusedField === 'lastName' ? 'text-brand' : 'text-gray-400'}`}>
                          {t('lastName')}
                        </label>
                        <div className="relative">
                          <input 
                            type="text" 
                            value={formData.lastName}
                            onFocus={() => setFocusedField('lastName')}
                            onBlur={() => setFocusedField(null)}
                            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                            className="w-full h-auto bg-transparent border-b border-gray-100 rounded-none px-4 pt-2 pb-3 focus:ring-0 transition-all text-gray-900 font-medium text-xl placeholder:text-gray-300 outline-none"
                            placeholder={t('placeholderLastName')}
                          />
                          <motion.div 
                            className="absolute bottom-0 left-0 h-0.5 bg-brand" 
                            initial={{ width: 0 }}
                            animate={{ width: focusedField === 'lastName' ? '100%' : 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-3">
                      <label className={`text-xs font-bold uppercase tracking-widest transition-colors ${focusedField === 'email' ? 'text-brand' : 'text-gray-400'}`}>
                        {t('email')}
                      </label>
                      <div className="relative">
                        <input 
                          required
                          type="email" 
                          value={formData.email}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full h-auto bg-transparent border-b border-gray-100 rounded-none px-4 pt-2 pb-3 focus:ring-0 transition-all text-gray-900 font-medium text-xl placeholder:text-gray-300 outline-none"
                          placeholder={t('placeholderEmail')}
                        />
                        <motion.div 
                          className="absolute bottom-0 left-0 h-0.5 bg-brand" 
                          initial={{ width: 0 }}
                          animate={{ width: focusedField === 'email' ? '100%' : 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-3">
                      <label className={`text-xs font-bold uppercase tracking-widest transition-colors ${focusedField === 'message' ? 'text-brand' : 'text-gray-400'}`}>
                        {t('message')}
                      </label>
                      <div className="relative">
                        <textarea 
                          required
                          rows={4}
                          value={formData.message}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          className="w-full bg-transparent border-b border-gray-100 rounded-none px-4 pt-2 pb-3 focus:ring-0 transition-all text-gray-900 font-medium text-xl resize-none placeholder:text-gray-300 outline-none"
                          placeholder={t('placeholderMessage')}
                        />
                        <motion.div 
                          className="absolute bottom-0 left-0 h-0.5 bg-brand" 
                          initial={{ width: 0 }}
                          animate={{ width: focusedField === 'message' ? '100%' : 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                        />
                      </div>
                    </div>

                    {/* Error Message */}
                    <AnimatePresence>
                      {error && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-red-500 text-sm font-medium bg-red-50 border-l-4 border-red-500 p-4 mb-6"
                        >
                          {error}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <PremiumButton 
                      type="submit"
                      disabled={isSubmitting}
                      variant="primary"
                      className="w-full md:w-fit"
                      icon={isSubmitting ? null : <ArrowRight className="w-5 h-5" />}
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : t('submit')}
                    </PremiumButton>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
