"use client";

import React, { useState } from 'react';
import {  ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const sectionReveal = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

// --- NEW FAQ Section ---
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
        <section className="section-light">
            <motion.div 
                className="w-full px-6 lg:px-12 xl:px-20 2xl:px-32 mx-auto"
                variants={sectionReveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                   
                    {/* Left Column: Accordion */}
                    <div className="space-y-2">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-b border-navy-100 last:border-b-0 py-2">
                                <button 
                                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                    className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                                >
                                    <h4 className="text-lg font-bold text-navy-800">{faq.question}</h4>
                                    <div className={`flex-shrink-0 ml-4 p-2 rounded-xl transition-colors duration-300 ${openIndex === index ? 'bg-accent' : 'bg-navy-50'}`}>
                                        <ChevronDown className={`h-6 w-6 transition-transform duration-300 ${openIndex === index ? 'text-white rotate-180' : 'text-navy-400'}`} />
                                    </div>
                                </button>
                                <AnimatePresence initial={false}>
                                    {openIndex === index && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <p className="pb-6 text-navy-500 leading-relaxed">{faq.answer}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                         <div className="pt-6 text-left">
                            <Link href="/resources-faq" className="btn-accent px-8 py-4">
                                View All FAQs
                            </Link>
                        </div>
                    </div>
                     {/* Right Column: Title and Image */}
                    <div className="space-y-8">
                        <h2 className="text-h2 font-display font-bold text-navy-800 tracking-tight">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-navy-500 leading-relaxed">
                            Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
                        </p>
                        <div className="relative rounded-card overflow-hidden shadow-lg img-duotone">
                            <Image
                                width={800}
                                height={600}
                                src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Frequently-Asked-Questions.jpeg"
                                alt="Doctor answering questions"
                                className="w-full h-[400px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
