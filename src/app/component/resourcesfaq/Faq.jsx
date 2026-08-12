"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const Faq = () => {
  const faqs = [
    {
      question: "What types of coverage plans do you offer?",
      answer: "We offer a comprehensive range of coverage plans, including Medical, Dental, Vision, Term Life, Bundles (combined coverage), Limited Med, Accident, Hospital, Critical Illness, Lifestyle, Pet, and Rx Plans.",
    },
    {
      question: "How do I choose the right coverage plan for my needs?",
      answer: "Our team of experts is here to guide you through the selection process. Consider your health needs, budget, and lifestyle preferences. Feel free to reach out to our customer service for personalized assistance.",
    },
    {
      question: "Can I bundle multiple coverage plans for more protection?",
      answer: "Absolutely! Our Bundles option allows you to combine different coverage types for a more comprehensive package tailored to your specific needs.",
    },
    {
      question: "What is Limited Med coverage, and how does it differ from other plans?",
      answer: "Limited Med coverage provides protection for specific medical expenses, offering a more focused approach. It's an excellent option for those seeking targeted coverage at an affordable rate.",
    },
    {
      question: "Are there any discounts available for bundling coverage plans?",
      answer: "Yes, we offer discounts for bundling multiple coverage plans. This not only simplifies your coverage but also provides cost savings.",
    },
    {
      question: "What is covered under the Accident coverage plan?",
      answer: "Accident coverage provides financial protection in the event of covered accidents. This can include medical expenses, hospital stays, and other related costs resulting from accidents.",
    },
    {
      question: "How does the Critical Illness coverage plan work?",
      answer: "Critical Illness coverage provides a lump-sum payment upon diagnosis of a covered critical illness. This can help you cope with medical expenses and other financial challenges during a difficult time.",
    },
    {
      question: "Can I customize my coverage under the Lifestyle coverage plan?",
      answer: "Yes, the Lifestyle coverage plan is designed to be flexible. You can customize your coverage to include benefits that align with your unique lifestyle and health goals.",
    },
    {
      question: "Tell me more about the Pet coverage plans.",
      answer: "Our Pet coverage plans cover veterinary expenses for your furry friends, ensuring they receive the care they need without breaking the bank.",
    },
    {
      question: "Do you offer prescription drug (Rx) coverage?",
      answer: "Yes, our Rx Plans provide coverage for prescription medications, helping you manage the cost of necessary drugs prescribed by healthcare professionals.",
    },
    {
      question: "How do I file a claim for my coverage?",
      answer: "Filing a claim is simple. Visit our online portal, fill out the necessary information, and submit any required documentation. Our claims team will guide you through the process and provide timely assistance.",
    },
    {
      question: "What if I have questions about my policy or need to make changes?",
      answer: "Our customer service team is available to assist you with any questions or modifications to your policy. Contact us via phone, email, or our online chat for prompt and friendly support.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section className="section-light py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-navy-100">
      <div className="relative z-10 max-w-4xl mx-auto card-flat p-8 md:p-12 lg:p-16 border border-navy-100">
        <h2 className="text-h2 font-display font-bold text-center text-navy-900 mb-12 tracking-tight">
          Frequently Asked Questions
        </h2>
        
        <motion.div 
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index} 
                className="bg-navy-50 rounded-2xl overflow-hidden border border-navy-100"
                variants={itemVariants}
              >
                <button
                  className="flex justify-between items-center w-full p-5 md:px-6 text-left text-lg font-semibold cursor-pointer transition-colors duration-200 hover:bg-navy-100 text-navy-900 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-shrink-0 text-accent"
                  >
                    <ChevronDown className="w-6 h-6" strokeWidth={2.5} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="bg-white"
                    >
                      <div className="p-5 md:px-6 text-navy-600 leading-relaxed border-t border-navy-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
