"use client";

import React, { useState } from 'react';
import { Target, Users, Zap, Timer, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionGlow } from '@/comman/SectionGlow';

const sectionReveal = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.12 }
    }
};

const itemReveal = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

export const WhyChooseUsSection = () => {
    const reasons = [
        {
            icon: <Users />,
            title: "Experienced Professionals",
            description: "Our experienced team will guide you through the complexities of health plans."
        },
        {
            icon: <Target />,
            title: "Tailored Solutions",
            description: "Get a custom-built health plan that delivers the support and coverage according to your specific needs."
        },
        {
            icon: <Zap />,
            title: "Reliable Support",
            description: "Get instant, expert assistance with our 24/7 guaranteed uptime support."
        },
        {
            icon: <Timer />,
            title: "Fast Turnaround Time",
            description: "Get a quote in hours & set up your plan in days, not weeks. We prioritize time, so you can access critical health coverage swiftly."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-surface py-24 font-body border-b border-navy-100/60 relative overflow-hidden">
            <SectionGlow position="topLeft" className="opacity-25" />
            
            <div className="w-full px-6 lg:px-12 xl:px-20 2xl:px-32 mx-auto relative z-10">
                
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-2xl mb-16"
                >
                    <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">The Harbor Advantage</span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 tracking-tight">
                        Why Choose Harbor Group USA?
                    </h2>
                    <p className="mt-3 text-lg text-navy-600">Discover why thousands trust us to guide their health coverage choices.</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Accordion Column */}
                    <motion.div 
                        variants={sectionReveal}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                        className="lg:col-span-7 space-y-4"
                    >
                        {reasons.map((reason, index) => {
                            const isOpen = activeIndex === index;
                            return (
                                <motion.div 
                                    variants={itemReveal}
                                    key={index} 
                                    initial={false}
                                    onClick={() => setActiveIndex(index)}
                                    className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                                        isOpen 
                                            ? 'bg-white border-accent shadow-xl scale-[1.01]' 
                                            : 'bg-white/60 border-navy-100 hover:bg-white hover:border-navy-200'
                                    }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <div className={`p-3.5 rounded-xl transition-colors ${
                                                isOpen ? 'bg-accent text-white shadow-md' : 'bg-navy-50 text-navy-700'
                                            }`}>
                                                {React.cloneElement(reason.icon, { className: "h-6 w-6 stroke-[1.75]" })}
                                            </div>
                                            <h3 className="text-xl font-bold text-navy-900 font-display">{reason.title}</h3>
                                        </div>
                                        <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                                            isOpen ? 'rotate-90 text-accent' : 'text-navy-400'
                                        }`} />
                                    </div>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="mt-4 pt-3 border-t border-navy-50 text-navy-600 leading-relaxed text-base">
                                                    {reason.description}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Right Sticky Image Column */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border border-navy-100/80">
                            <AnimatePresence mode="wait">
                                <motion.img 
                                    key={activeIndex}
                                    src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Why-choose-Harbor-Group-USA-health-plan.jpeg"
                                    alt={reasons[activeIndex].title}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full h-full object-cover"
                                />
                            </AnimatePresence>
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent pointer-events-none"></div>

                            {/* Dynamic Overlay Label */}
                            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-navy-100">
                                <p className="text-xs font-bold text-accent uppercase tracking-wider">Highlight Feature</p>
                                <p className="text-base font-bold text-navy-900 mt-0.5">{reasons[activeIndex].title}</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
