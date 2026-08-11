"use client";

import React from 'react';
import { ArrowRight, ShieldCheck, UserCheck } from 'lucide-react';
import Image from 'next/image';
import { HarborArc } from '@/comman/HarborArc';
import { motion, useReducedMotion } from 'framer-motion';
import { useMagnetic } from '@/comman/motion/useMagnetic';
import { useTilt } from '@/comman/motion/useTilt';
import { useParallax } from '@/comman/motion/useParallax';
import { useCountUp } from '@/comman/motion/useCountUp';
import { useScroll, useTransform } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
};

export const HeroSection = () => {
    const prefersReduced = useReducedMotion();
    
    // Motion Hooks
    const ctaMagnetic = useMagnetic(0.4, 40);
    const imageTilt = useTilt(5);
    const arc1Parallax = useParallax(25);
    const arc2Parallax = useParallax(-20);
    
    // Scroll-linked transition for cinematic exit
    const heroRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });
    
    // As user scrolls down and hero leaves viewport, it subtly scales down and fades
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
    const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0.4]);

    const itemVariants = {
      hidden: { opacity: 0, y: prefersReduced ? 0 : 24 },
      show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
    };
    const wordVariants = {
      hidden: { y: prefersReduced ? "0%" : "120%", rotate: prefersReduced ? 0 : 2 },
      show: { y: "0%", rotate: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };
    
    // Count up for stat card
    const { value: yearsCount, start: startYearsCount } = useCountUp(10, 1500);

    return (
        <motion.section 
            ref={heroRef}
            style={{ 
                scale, 
                opacity, 
                background: 'radial-gradient(circle at 78% 42%, rgba(210, 170, 70, 0.08) 0%, rgba(210, 170, 70, 0) 28%), linear-gradient(115deg, #FFFFFF 0%, #F7F9FC 42%, #EEF3FA 100%)' 
            }}
            className="relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center py-12 lg:py-16 font-body origin-top"
        >
            {/* Background Parallax Arcs */}
            <div ref={arc1Parallax.ref}>
                <HarborArc position="bottomRight" className="text-navy-200 opacity-20" parallaxY={arc1Parallax.y} />
            </div>
            <div ref={arc2Parallax.ref}>
                <HarborArc position="topLeft" className="text-navy-100 opacity-10 scale-150" parallaxY={arc2Parallax.y} />
            </div>
            
            <div className="relative w-full px-6 lg:px-12 xl:px-20 2xl:px-32 mx-auto z-10">
                <div className="grid lg:grid-cols-[54fr_46fr] gap-12 lg:gap-16 items-center">
                    
                    {/* --- Left Column: Hero Copy & Actions --- */}
                    <motion.div 
                        className="text-center lg:text-left"
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                    >
                        {/* Eyebrow Badge */}
                        <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-1.5 rounded-full bg-navy-50 border border-navy-100 text-navy-800 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
                            <span className="flex h-2 w-2 rounded-full bg-accent mr-2.5 animate-pulse"></span>
                            Trusted Healthcare Advisors
                        </motion.div>

                        {/* Playfair Display Headline */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.08] flex flex-col gap-1 items-center lg:items-start">
                            <div className="flex flex-wrap text-navy-900 justify-center lg:justify-start">
                                {["A", "Brighter", "&"].map((word, i) => (
                                    <span key={`w1-${i}`} className="inline-block overflow-hidden mr-[0.25em] pb-2">
                                        <motion.span variants={wordVariants} className="inline-block transform-origin-top-left">
                                            {word}
                                        </motion.span>
                                    </span>
                                ))}
                            </div>
                            <div className="flex flex-wrap text-accent font-light justify-center lg:justify-start">
                                {["Healthier", "Future"].map((word, i) => (
                                    <span key={`w2-${i}`} className="inline-block overflow-hidden mr-[0.25em] pb-2">
                                        <motion.span variants={wordVariants} className="inline-block transform-origin-top-left">
                                            {word}
                                        </motion.span>
                                    </span>
                                ))}
                            </div>
                        </h1>

                        {/* Preserved Copy Paragraphs */}
                        <motion.p variants={itemVariants} className="mt-6 text-lg md:text-xl text-navy-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Finding your ideal health plan with Harbor Group USA. Securing your future with unmatched expertise in health plans and benefits tailored for you.
                        </motion.p>

                        {/* Call to Action Button */}
                        <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <motion.a 
                                href="#h-form" 
                                className="btn-accent px-9 py-4 text-lg font-bold rounded-full inline-flex items-center shadow-lg hover:shadow-xl transition-all"
                                ref={ctaMagnetic.ref}
                                style={{ x: ctaMagnetic.springX, y: ctaMagnetic.springY }}
                                onMouseMove={ctaMagnetic.handleMouseMove}
                                onMouseLeave={ctaMagnetic.handleMouseLeave}
                            >
                                Get a Free Quote Today
                                <ArrowRight className="ml-2.5 h-5 w-5" />
                            </motion.a>
                            
                            <a 
                                href="tel:18004733241"
                                className="px-6 py-4 text-base font-semibold text-navy-800 hover:text-accent transition-colors flex items-center gap-2 group"
                            >
                                <span className="w-2.5 h-2.5 rounded-full bg-accent/70 group-hover:bg-accent transition-colors"></span>
                                Talk to an Advisor
                            </a>
                        </motion.div>

                        {/* Micro Trust Indicators */}
                        <motion.div variants={itemVariants} className="mt-12 pt-8 border-t border-navy-100/80 flex items-center justify-center lg:justify-start gap-6 text-xs text-navy-500 font-medium">
                            <div className="flex items-center gap-1.5">
                                <ShieldCheck className="w-4 h-4 text-accent" />
                                Individual & Group Health Plans
                            </div>
                            <div className="flex items-center gap-1.5">
                                <UserCheck className="w-4 h-4 text-accent" />
                                Dedicated Member Support
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* --- Right Column: Asymmetrical Photo --- */}
                    <motion.div 
                        className="relative h-[420px] lg:h-[580px] w-full"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    >
                        {/* Main Photo Frame */}
                        <motion.div 
                            className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-navy-100/60"
                            ref={imageTilt.ref}
                            style={{ ...imageTilt.style }}
                            onMouseMove={imageTilt.handleMouseMove}
                            onMouseLeave={imageTilt.handleMouseLeave}
                        >
                            <Image 
                                src="https://cloudinary.hbs.edu/hbsit/image/fetch/q_auto,c_fill,ar_1200:800,g_auto/f_webp/https%3A%2F%2Fwww.hbs.edu%2Fctfassets%2Fpublic%2Fimages%2F65RBoqGVbOYCPNeOxAbaGI%2FFinance%252520Versus%252520Accounting.png" 
                                alt="Doctor consulting with a patient"
                                className="w-full h-full object-cover object-top"
                                width={800}
                                height={1000}
                                priority
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 via-transparent to-transparent pointer-events-none"></div>
                            
                            {/* Floating Stat Card Overlay */}
                            <motion.div 
                                className="absolute bottom-5 left-5 right-5 sm:right-auto sm:w-64 p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-navy-100/50 shadow-xl pointer-events-none"
                                onViewportEnter={startYearsCount}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-navy-50 text-accent border border-navy-100">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-display font-bold text-navy-900 leading-none">{yearsCount}+</div>
                                        <div className="text-xs font-medium text-navy-500 mt-1 uppercase tracking-wider">Years of Healthcare Expertise</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                    </motion.div>

                </div>
            </div>
        </motion.section>
    );
};

export default HeroSection;
