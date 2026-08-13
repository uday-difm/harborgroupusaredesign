"use client";

import React from 'react';
import { Shield, Users, Handshake, ShieldCheck, Star } from 'lucide-react';
import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform, useMotionValue, animate, useSpring } from 'framer-motion';
import { useMagnetic } from '@/common/motion/useMagnetic';
import { useParallax } from '@/common/motion/useParallax';
import { useTilt } from '@/common/motion/useTilt';
import { useCountUp } from '@/common/motion/useCountUp';

const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
};

const itemVariants = (reduced) => ({
    hidden: { opacity: 0, y: reduced ? 0 : 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
});

const STATS = [
    { target: 12, label: 'Health Plans', suffix: '+' },
    { target: 10, label: 'Years of Expertise', suffix: '+' },
    { target: 50000, label: 'Members Covered', suffix: 'k+', displayTarget: 50 }
];

const StatItem = ({ stat }) => {
    const { value, start } = useCountUp(stat.displayTarget || stat.target, 1200);
    return (
        <motion.div 
            onViewportEnter={start}
            viewport={{ once: true }}
            className="flex flex-col items-center sm:items-start"
        >
            <span className="text-2xl font-display font-bold text-white">
                {value}{stat.suffix}
            </span>
            <span className="font-medium text-navy-200 text-xs mt-0.5">{stat.label}</span>
        </motion.div>
    );
};

export const HeroSection = () => {
    const prefersReduced = useReducedMotion();
    const ctaMagnetic = useMagnetic(0.2, 40);
    const imageTilt = useTilt(5);
    const iV = itemVariants(prefersReduced);

    const sectionRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });
    const scrollOpacity = useTransform(scrollYProgress, [0.6, 1], [1, 0]);
    const scrollY = useTransform(scrollYProgress, [0.6, 1], [0, -24]);
    const scrollPathLength = useTransform(scrollYProgress, [0.6, 1], [1, 0]);
    const loadPathLength = useMotionValue(0);
    const pathLength = useTransform([scrollPathLength, loadPathLength], ([scroll, load]) => Math.min(scroll, load));
    
    React.useEffect(() => {
        if (!prefersReduced) {
            animate(loadPathLength, 1, { duration: 1.5, ease: "linear" });
        } else {
            loadPathLength.set(1);
        }
    }, [prefersReduced, loadPathLength]);

    const photoRotation = useTransform(scrollYProgress, [0.15, 0.4], [4, 1]);

    // Mouse Parallax for background
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
    const bgX = useSpring(mouseX, springConfig);
    const bgY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e) => {
        if (prefersReduced) return;
        const { clientX, clientY } = e;
        const targetX = (clientX / (typeof window !== 'undefined' ? window.innerWidth : 1000) - 0.5) * 40; // max 20px
        const targetY = (clientY / (typeof window !== 'undefined' ? window.innerHeight : 1000) - 0.5) * 40; // max 20px
        mouseX.set(targetX);
        mouseY.set(targetY);
    };

    return (
        <section ref={sectionRef} onMouseMove={handleMouseMove} className="relative w-full overflow-hidden bg-white font-body min-h-[calc(100vh-128px)] flex flex-col pt-10 pb-0">
            {/* Background Gradient & Arcs */}
            <div className="absolute inset-0 pointer-events-none" style={{
                background: 'radial-gradient(circle at 10% 90%, #ECEEF5 0%, rgba(255,255,255,0) 60%), radial-gradient(circle at 90% 10%, #ECEEF5 0%, rgba(255,255,255,0) 60%)'
            }} />
            
            <motion.svg 
                style={{ x: bgX, y: bgY }}
                className="absolute inset-0 w-full h-full pointer-events-none stroke-navy-200/50" fill="none" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice"
            >
                <motion.path 
                    style={{ pathLength: prefersReduced ? 1 : pathLength }}
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.8, ease: "linear", delay: 0 }} 
                    d="M-100,600 C300,800 600,200 1500,400" strokeWidth="1" 
                />
                <motion.path 
                    style={{ pathLength: prefersReduced ? 1 : pathLength }}
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.8, ease: "linear", delay: 0.2 }} 
                    d="M-200,400 C400,100 800,900 1600,200" strokeWidth="1" 
                />
                <motion.path 
                    style={{ pathLength: prefersReduced ? 1 : pathLength }}
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.8, ease: "linear", delay: 0.4 }} 
                    d="M200,-100 C500,400 900,100 1200,900" strokeWidth="1" 
                />
            </motion.svg>

            <motion.div 
                style={{ opacity: prefersReduced ? 1 : scrollOpacity, y: prefersReduced ? 0 : scrollY }}
                className="relative z-10 w-full px-6 lg:px-12 xl:px-20 2xl:px-32 mx-auto flex-1 flex flex-col justify-center pb-20"
            >
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    
                    {/* Left Content */}
                    <motion.div 
                        className="max-w-3xl lg:max-w-none lg:col-span-7 xl:col-span-7"
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-display font-semibold leading-[1.05] tracking-tight mb-8">
                            <span className="block overflow-hidden pb-2">
                                <motion.span variants={iV} className="block text-navy-900 origin-bottom-left">A Brighter</motion.span>
                            </span>
                            <span className="block overflow-hidden pb-2">
                                <motion.span variants={iV} className="block text-accent origin-bottom-left">&amp; Healthier</motion.span>
                            </span>
                            <span className="block overflow-hidden pb-2">
                                <motion.span variants={iV} className="block text-navy-900 origin-bottom-left">Future</motion.span>
                            </span>
                        </motion.h1>

                        <motion.p variants={iV} className="text-lg sm:text-xl text-navy-800 leading-relaxed mb-10 max-w-2xl font-medium">
                            Harbor Group USA: Elevating health insurance for individuals and groups through expertise and personalized care.
                        </motion.p>

                        <motion.div variants={iV} className="flex flex-wrap items-center gap-8">
                            <div
                                ref={ctaMagnetic.ref}
                                onMouseMove={ctaMagnetic.handleMouseMove}
                                onMouseLeave={ctaMagnetic.handleMouseLeave}
                                className="cursor-pointer"
                            >
                                <motion.a
                                    href="#h-form"
                                    className="bg-navy-900 text-white px-8 py-4 rounded-full font-semibold shadow-xl shadow-navy-900/20 hover:bg-navy-800 transition-colors inline-flex"
                                    style={{ x: ctaMagnetic.springX, y: ctaMagnetic.springY }}
                                >
                                    Get a Free Quote Today
                                </motion.a>
                            </div>

                            <a href="tel:18004733241" className="group flex items-center gap-3 text-navy-900 font-semibold hover:text-accent transition-colors">
                                <span className="relative flex items-center justify-center w-6 h-6">
                                    <span className="absolute w-full h-full bg-accent/30 rounded-full animate-ping" />
                                    <span className="relative w-3 h-3 bg-accent rounded-full" />
                                </span>
                                <span className="border-b border-navy-900/30 group-hover:border-accent pb-0.5 transition-colors">Talk to an Advisor</span>
                            </a>
                        </motion.div>
                        
                        <motion.div variants={iV} className="mt-8 flex flex-wrap items-center gap-4 text-sm font-medium text-navy-800">
                            <div className="flex items-center gap-1.5 bg-navy-50/50 px-3 py-1.5 rounded-full border border-navy-100">
                                <Star className="w-4 h-4 text-accent fill-accent" />
                                <span>5.0 Rating</span>
                            </div>
                            <div className="flex items-center gap-1.5 bg-navy-50/50 px-3 py-1.5 rounded-full border border-navy-100">
                                <ShieldCheck className="w-4 h-4 text-navy-400" />
                                <span>Licensed Agency — Retail & Wholesale</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div 
                        className="relative lg:h-[600px] w-full flex justify-center lg:justify-end lg:col-span-5 xl:col-span-5"
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                    >
                        <div className="relative w-full max-w-[550px] xl:max-w-[600px] aspect-[4/5] lg:aspect-auto lg:h-[550px] mt-8 lg:mt-0 lg:mr-10">
                            {/* Rotated image container */}
                            <motion.div 
                                className="w-full h-full bg-white p-3 pb-16 rounded-[40px] shadow-[0_20px_60px_-15px_rgba(19,30,73,0.1)] border border-navy-100"
                                style={{ rotate: prefersReduced ? 4 : photoRotation }}
                                ref={imageTilt.ref}
                                onMouseMove={imageTilt.handleMouseMove}
                                onMouseLeave={imageTilt.handleMouseLeave}
                            >
                                <div className="relative w-full h-full rounded-[30px] overflow-hidden">
                                    <Image
                                        src="/images/broker-partnership.png"
                                        alt="Advisor talking to client"
                                        fill
                                        sizes="(max-width: 1023px) 100vw, 42vw"
                                        className="object-cover object-center"
                                        priority
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Bottom Feature Strip */}
            <motion.div 
                className="relative z-20 w-full border-t border-navy-800 bg-navy-900 mt-auto shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.6 }}
            >
                <div className="max-w-4xl mx-auto px-6 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    {STATS.map((stat, idx) => (
                        <StatItem key={idx} stat={stat} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
