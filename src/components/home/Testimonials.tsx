'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, SquarePen, ArrowRight } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Mother of two',
      content: 'HappyMom was a lifesaver. Their lactation consultant helped me when I was about to give up. The support group is amazing!',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop'
    },
    {
      name: 'Kim Ji-won',
      role: 'First-time mother',
      content: 'I felt so overwhelmed, but the mental wellness sessions gave me the tools to cope. I highly recommend their services to all new moms.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop'
    },
    {
      name: 'Michael Chen',
      role: 'Supportive Dad',
      content: 'Seeing my wife so well-cared for made our transition to parenthood so much smoother. HappyMom supports the whole family.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-5 pt-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-bold text-gray-400 uppercase tracking-[0.3em] mb-6 block">
                Testimonials
              </span>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-8">
                Voices from <br />our mothers.
              </h2>
              <p className="text-xl text-gray-500 leading-relaxed max-w-sm mb-12">
                We are honored to be part of so many beautiful journeys.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <button className="px-8 h-12 rounded-full border border-gray-900 text-gray-900 font-bold text-sm hover:bg-gray-900 hover:text-white transition-all duration-300">
                  See more stories
                </button>
                <button className="px-8 h-12 rounded-full border border-gray-200 text-gray-500 font-bold text-sm hover:border-gray-900 hover:text-gray-900 transition-all duration-300 flex items-center gap-2">
                  <SquarePen className="w-4 h-4" />
                  Write a review
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Carousel */}
          <div className="lg:col-span-7 relative min-h-[450px] flex flex-col pt-4">
            {/* Quote Text (Animated) */}
            <div className="flex-grow">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="text-3xl md:text-5xl text-gray-800 leading-tight mb-12 font-medium tracking-tight"
                >
                  "{testimonials[activeIndex].content}"
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Bottom Row: Profile (Animated) & Navigation (Static) */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-4">
              <div className="flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="flex items-center gap-6"
                  >
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                      <Image 
                        src={testimonials[activeIndex].avatar} 
                        alt={testimonials[activeIndex].name} 
                        width={80} 
                        height={80} 
                        className="object-cover" 
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">{testimonials[activeIndex].name}</h4>
                      <p className="text-lg text-gray-500 font-medium">{testimonials[activeIndex].role}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Static Navigation */}
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2 font-mono text-lg">
                  <span className="text-gray-900 font-bold">0{activeIndex + 1}</span>
                  <span className="text-gray-300">/</span>
                  <span className="text-gray-400">0{testimonials.length}</span>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={handlePrev}
                    className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-900 transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-900 transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
