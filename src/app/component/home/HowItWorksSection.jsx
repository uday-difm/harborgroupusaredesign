"use client";

import React from 'react';
import { Search, UserCheck, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useTilt } from '@/common/motion/useTilt';
import { SectionGlow } from '@/common/SectionGlow';


const StepCard = ({ step, progress, index }) => {
    const tilt = useTilt(4);
    const prefersReduced = useReducedMotion();
    
    // Each step gets a third of the scroll progress
    const start = index * 0.33;
    const end = start + 0.33;
    
    // If reduced motion, just be fully visible. Otherwise, map to the segment.
    const opacity = useTransform(progress, [start, end], [0.35, 1]);
    const scale = useTransform(progress, [start, end], [0.96, 1]);

    return (
        <motion.div
            ref={tilt.ref}
            style={{ 
                ...tilt.style,
                opacity: prefersReduced ? 1 : opacity,
                scale: prefersReduced ? 1 : scale
            }}
            onMouseMove={tilt.handleMouseMove}
            onMouseLeave={tilt.handleMouseLeave}
            className="relative p-8 rounded-3xl bg-surface border border-navy-100/80 shadow-md hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
        >
            <div>
                <div className="flex items-center justify-between mb-8">
                    <span className="text-5xl font-display font-bold text-navy-200 group-hover:text-accent transition-colors duration-300">
                        {step.number}
                    </span>
                    <div className="w-13 h-13 rounded-2xl bg-white border border-navy-100 flex items-center justify-center shadow-sm p-3 group-hover:border-accent/50 transition-colors">
                        {step.icon}
                    </div>
                </div>
                <h3 className="text-xl font-bold text-navy-900 font-display mb-3 group-hover:text-accent transition-colors">{step.title}</h3>
                <p className="text-sm text-navy-600 leading-relaxed">{step.description}</p>
            </div>

            <div className="mt-8 pt-4 border-t border-navy-100/60 flex items-center text-xs font-bold text-navy-800 group-hover:text-accent transition-colors">
                <span>Explore Step</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1.5 transition-transform" />
            </div>
        </motion.div>
    );
};

export const HowItWorksSection = () => {
    const steps = [
        {
            number: '01',
            title: 'Explore & Compare Plans',
            description: 'Browse our comprehensive range of individual, family, and small business healthcare options.',
            icon: <Search className="w-6 h-6 text-accent" />
        },
        {
            number: '02',
            title: 'Consult a Licensed Advisor',
            description: 'Connect 1-on-1 with an experienced healthcare advisor to review options tailored to your budget.',
            icon: <UserCheck className="w-6 h-6 text-accent" />
        },
        {
            number: '03',
            title: 'Get Covered with Confidence',
            description: 'Complete quick enrollment and gain immediate peace of mind with ongoing member support.',
            icon: <ShieldCheck className="w-6 h-6 text-accent" />
        }
    ];

    const outerRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: outerRef,
        offset: ["start start", "end end"]
    });

    const prefersReduced = useReducedMotion();
    const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <div ref={outerRef} className="relative h-auto md:h-[180vh]">
            <section className="bg-white py-16 md:py-24 border-b border-navy-100/60 font-body relative md:sticky top-0 md:min-h-screen overflow-hidden flex flex-col justify-center">
            <SectionGlow position="topLeft" className="opacity-40" />
            <SectionGlow position="bottomRight" className="opacity-30" />

            <div className="w-full px-6 lg:px-12 xl:px-20 2xl:px-32 mx-auto relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">Simple 3-Step Process</span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 tracking-tight flex flex-wrap justify-center gap-[0.25em]">
                        {"How It Works".split(" ").map((word, i) => (
                            <motion.span key={i} initial={{ opacity: 0, y: prefersReduced ? 0 : 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}>
                                {word}
                            </motion.span>
                        ))}
                    </h2>
                    <p className="mt-3 text-lg text-navy-600">From exploring options to final enrollment, we make securing health coverage effortless.</p>
                </motion.div>

                {/* Steps Cards Grid */}
                <div className="relative mt-8">
                    {/* Background track line */}
                    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-navy-50 -translate-y-1/2 hidden md:block" />
                    
                    {/* Animated connecting line */}
                    <motion.div 
                        className="absolute top-1/2 left-0 h-[2px] bg-accent -translate-y-1/2 hidden md:block origin-left"
                        style={{ scaleX: prefersReduced ? 1 : lineScale, width: "100%" }}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <StepCard key={step.number} step={step} index={index} progress={scrollYProgress} />
                        ))}
                    </div>
                </div>

            </div>
            </section>
        </div>
    );
};

export default HowItWorksSection;
