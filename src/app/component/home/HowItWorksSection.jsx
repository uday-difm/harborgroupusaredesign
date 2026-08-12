"use client";

import React from 'react';
import { Search, UserCheck, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { SectionGlow } from '@/common/SectionGlow';


const StepCard = ({ step, index, isActive, isDesktop, onHoverStart, onHoverEnd, onFocus, onBlur }) => {
    const prefersReduced = useReducedMotion();
    const cardOpacity = isActive ? 1 : 0.4;

    return (
        <div
            onMouseEnter={() => onHoverStart?.(index)}
            onMouseLeave={() => onHoverEnd?.()}
            onFocus={() => onFocus?.(index)}
            onBlur={() => onBlur?.()}
            tabIndex={0}
            className="card-elevated relative p-6 lg:p-8 rounded-2xl group flex flex-col justify-between overflow-hidden shrink-0 w-full bg-white"
        >
            {/* Dynamic Background Image & Gradient */}
            <div className={`absolute inset-0 z-0 transition-opacity duration-700 overflow-hidden rounded-2xl ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}>
                {step.bgImage && (
                    <img 
                        src={step.bgImage} 
                        alt="" 
                        className="absolute inset-0 w-full h-full object-cover object-right opacity-70 transition-transform duration-700 group-hover:scale-105"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/10 z-10" />
            </div>

            {/* Static Node Dot for Vertical Timeline */}
            {isDesktop && (
                <div className={`absolute top-1/2 -translate-y-1/2 -left-[4.5rem] -ml-[5px] w-3 h-3 rounded-full z-20 transition-all duration-500 ${isActive ? 'bg-accent shadow-[0_0_10px_rgba(201,162,75,0.8)] scale-125' : 'bg-navy-200'}`} />
            )}
            
            <motion.div 
                className="relative z-10"
                animate={{ opacity: prefersReduced ? 1 : cardOpacity }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <div className="flex items-center justify-between mb-6 lg:mb-8">
                    <span className={`text-4xl lg:text-5xl font-display font-bold transition-colors duration-500 ${isActive ? 'text-accent' : 'text-navy-200 group-hover:text-accent'}`}>
                        {step.number}
                    </span>
                    <div className={`w-12 h-12 lg:w-13 lg:h-13 rounded-2xl bg-white border flex items-center justify-center shadow-sm p-2.5 lg:p-3 transition-colors duration-500 ${isActive ? 'border-accent/50' : 'border-navy-100 group-hover:border-accent/50'}`}>
                        {step.icon}
                    </div>
                </div>
                <h3 className={`text-lg lg:text-xl font-bold font-display mb-3 transition-colors duration-500 ${isActive ? 'text-navy-900' : 'text-navy-800 group-hover:text-accent'}`}>
                    {step.title}
                </h3>
                
                <div className="mt-2">
                    <p className="text-sm text-navy-600 leading-relaxed mb-6">{step.description}</p>
                    
                    {/* Expanded Content Block */}
                    {(isDesktop && !prefersReduced) && (
                        <div className="mt-4 pt-4 border-t border-navy-100/60">
                            <span className="text-[10px] uppercase font-bold tracking-widest text-accent mb-3 block">{step.detail.eyebrow}</span>
                            <ul className="space-y-2.5 mb-4">
                                {step.detail.points.map((point, i) => (
                                    <li key={i} className="flex items-start text-xs font-medium text-navy-700">
                                        <div className="min-w-3 mt-1 mr-2 text-accent">
                                            <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                        </div>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                            <span className="text-xs font-semibold text-navy-500 bg-navy-50 px-2.5 py-1 rounded-lg">{step.detail.meta}</span>
                        </div>
                    )}
                </div>
            </motion.div>

        </div>
    );
};

export const HowItWorksSection = () => {
    const steps = [
        {
            number: '01',
            title: 'Explore & Compare Plans',
            description: 'Browse our comprehensive range of individual, family, and small business healthcare options.',
            icon: <Search className="w-6 h-6 text-accent" />,
            bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
            detail: {
                eyebrow: "What to expect",
                points: [
                    "Compare plans side-by-side in one view",
                    "Filter by network, deductible, or premium",
                    "No account needed to browse"
                ],
                meta: "Takes about 2 minutes"
            }
        },
        {
            number: '02',
            title: 'Consult a Licensed Advisor',
            description: 'Connect 1-on-1 with an experienced healthcare advisor to review options tailored to your budget.',
            icon: <UserCheck className="w-6 h-6 text-accent" />,
            bgImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80',
            detail: {
                eyebrow: "Your dedicated expert",
                points: [
                    "Personalized plan recommendations",
                    "Answers to complex network questions",
                    "Assistance checking doctor availability"
                ],
                meta: "Usually a 15-minute call"
            }
        },
        {
            number: '03',
            title: 'Get Covered with Confidence',
            description: 'Complete quick enrollment and gain immediate peace of mind with ongoing member support.',
            icon: <ShieldCheck className="w-6 h-6 text-accent" />,
            bgImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
            detail: {
                eyebrow: "Fast & secure enrollment",
                points: [
                    "Digital application process",
                    "Secure handling of your health data",
                    "Instant confirmation of submission"
                ],
                meta: "Coverage starts as directed"
            }
        }
    ];

    const prefersReduced = useReducedMotion();
    
    // Active Step Logic
    const [hoveredIndex, setHoveredIndex] = React.useState(null);
    const hoverTimerRef = React.useRef(null);
    const activeIndex = hoveredIndex !== null ? hoveredIndex : 0;

    // Desktop check
    const [isDesktop, setIsDesktop] = React.useState(true);
    React.useEffect(() => {
        const checkDesktop = () => {
            const nextIsDesktop = window.innerWidth >= 768;
            setIsDesktop((currentIsDesktop) => {
                if (currentIsDesktop !== nextIsDesktop) setHoveredIndex(null);
                return nextIsDesktop;
            });
        };
        checkDesktop();
        window.addEventListener('resize', checkDesktop);
        return () => {
            window.removeEventListener('resize', checkDesktop);
            if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
        };
    }, []);

    React.useEffect(() => {
        if (prefersReduced) setHoveredIndex(null);
    }, [prefersReduced]);

    const clearHoverIntent = () => {
        if (hoverTimerRef.current) {
            clearTimeout(hoverTimerRef.current);
            hoverTimerRef.current = null;
        }
    };

    const handleHoverStart = (index) => {
        if (!isDesktop || prefersReduced) return;
        clearHoverIntent();
        hoverTimerRef.current = setTimeout(() => {
            setHoveredIndex(index);
            hoverTimerRef.current = null;
        }, 100);
    };

    const handleHoverEnd = () => {
        clearHoverIntent();
        setHoveredIndex(null);
    };

    const handleFocus = (index) => {
        clearHoverIntent();
        if (isDesktop && !prefersReduced) setHoveredIndex(index);
    };

    return (
        <div className="relative h-auto">
            <section className="bg-white py-20 md:py-28 border-b border-navy-100/60 font-body relative overflow-hidden flex flex-col justify-center">
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

                {/* Steps Cards Layout */}
                <div className="relative mt-8 w-full">
                    {/* Background track line (vertical) */}
                    <div className="absolute top-0 left-[2.5rem] md:left-[3.5rem] w-[2px] h-full bg-navy-50 hidden md:block" />
                    
                    {/* Animated connecting line (vertical) */}
                    <motion.div 
                        className="absolute top-0 left-[2.5rem] md:left-[3.5rem] w-[2px] bg-accent hidden md:block origin-top"
                        animate={{ scaleY: prefersReduced ? 1 : (activeIndex + 1) / steps.length }}
                        transition={{ type: "spring", stiffness: 180, damping: 28, mass: 0.7 }}
                        style={{ height: "100%" }}
                    />
                    
                    <div className="flex flex-col gap-6 md:gap-8 items-stretch relative z-10 w-full pl-0 md:pl-[8rem] md:min-h-[640px] lg:min-h-[700px]">
                        {steps.map((step, index) => (
                            <StepCard 
                                key={step.number} 
                                step={step} 
                                index={index} 
                                isActive={activeIndex === index}
                                isDesktop={isDesktop}
                                onHoverStart={handleHoverStart}
                                onHoverEnd={handleHoverEnd}
                                onFocus={handleFocus}
                                onBlur={handleHoverEnd}
                            />
                        ))}
                    </div>
                </div>

            </div>
            </section>
        </div>
    );
};

export default HowItWorksSection;
