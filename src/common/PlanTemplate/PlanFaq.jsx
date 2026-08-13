"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-navy-100/80 last:border-0">
      <button
        className="flex justify-between items-center w-full text-left py-5 lg:py-6 focus:outline-none group"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-navy-800 group-hover:text-accent transition-colors duration-300 pr-6">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-accent text-white' : 'bg-navy-50 text-navy-500 group-hover:bg-navy-100'}`}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-navy-600 leading-relaxed text-justify pr-10">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const PlanFaq = ({ 
  title = "Frequently Asked Questions", 
  description = "Have questions about what's covered, how to make a claim, or the enrollment process?",
  faqs = [], 
  imageSrc 
}) => {
  const [openIndex, setOpenIndex] = useState(0);
  const prefersReduced = useReducedMotion();

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="py-20 md:py-28 bg-surface font-body overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[40fr_60fr] gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Intro & Image */}
          <motion.div 
            className="sticky top-32"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-h2 font-display font-bold text-navy-900 mb-4"
            >
              {title}
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-navy-600 mb-10 leading-relaxed"
            >
              {description}
            </motion.p>
            
            {imageSrc && (
              <motion.div 
                variants={itemVariants}
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-navy-100 hidden lg:block"
              >
                <Image
                  src={imageSrc}
                  alt="FAQ"
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
              </motion.div>
            )}
          </motion.div>

          {/* Right Column: Accordion */}
          <motion.div 
            className="card-flat p-6 lg:p-10 border-0 shadow-sm"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <FAQItem 
                  question={faq.question} 
                  answer={faq.answer} 
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
