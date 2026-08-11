"use client";

import React, { useState } from 'react';
import { ChevronDown, ArrowRight, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionGlow } from '@/comman/SectionGlow';

const sectionReveal = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

export const FaqSection = () => {
    const faqs = [
        {
            question: "Can I add family members to my Medical Plan?",
            answer: "Yes, our plan is designed to cover individuals and families. You can easily add your spouse, children, or other dependents to ensure comprehensive coverage for your entire family."
        },
        {
            question: "Are pre-existing conditions covered under the Medical Plan?",
            answer: "Yes, our plan covers pre-existing conditions. However, there may be certain waiting periods and conditions, so it's important to review the policy details for specific information."
        },
        {
            question: "How often can I schedule routine check-ups with the Medical Plan?",
            answer: "You can schedule routine check-ups as needed, depending on your health needs. There are no strict limitations, and we encourage regular preventive care."
        }
    ];

    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="bg-white py-24 font-body border-b border-navy-100/60 relative overflow-hidden">
            <div className="bg-noise opacity-[0.03]"></div>
            <SectionGlow position="topRight" className="opacity-20" />
            
            <div className="w-full px-6 lg:px-12 xl:px-20 2xl:px-32 mx-auto relative z-10">
                <motion.div 
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Left Column: Headline & Image */}
                    <div className="lg:col-span-5 space-y-6">
                        <div>
                            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">Got Questions?</span>
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 tracking-tight leading-tight">
                                Frequently Asked Questions
                            </h2>
                            <p className="mt-3 text-lg text-navy-600 leading-relaxed">
                                Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us anytime.
                            </p>
                        </div>

                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-navy-100/80">
                            <Image
                                width={800}
                                height={600}
                                src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Frequently-Asked-Questions.jpeg"
                                alt="Doctor answering questions"
                                className="w-full h-[360px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Right Column: Interactive Accordions & CTA */}
                    <div className="lg:col-span-7 space-y-4">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div 
                                    key={index} 
                                    className={`p-6 rounded-2xl transition-all duration-300 border ${
                                        isOpen 
                                            ? 'bg-white border-accent/60 shadow-lg' 
                                            : 'bg-white/70 border-navy-100 hover:bg-white'
                                    }`}
                                >
                                    <button 
                                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                        className="w-full flex justify-between items-center text-left focus:outline-none"
                                    >
                                        <h3 className="text-lg font-bold text-navy-900 font-display flex items-center gap-3">
                                            <HelpCircle className={`w-5 h-5 flex-shrink-0 ${isOpen ? 'text-accent' : 'text-navy-400'}`} />
                                            {faq.question}
                                        </h3>
                                        <div className={`p-2 rounded-xl transition-all ${isOpen ? 'bg-accent text-white rotate-180' : 'bg-navy-50 text-navy-500'}`}>
                                            <ChevronDown className="h-4 w-4" />
                                        </div>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                key="content"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                                className="overflow-hidden"
                                            >
                                                <p className="mt-4 pt-3 border-t border-navy-50 text-navy-600 leading-relaxed text-base">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}

                        <div className="pt-6">
                            <Link href="/resources-faq" className="btn-accent px-8 py-4 text-base font-bold rounded-full inline-flex items-center shadow-md hover:shadow-lg transition-all">
                                View All FAQs
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};
