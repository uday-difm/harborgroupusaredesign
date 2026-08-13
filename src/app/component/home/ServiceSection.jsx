"use client";

import React, { useState } from 'react';
import { ArrowRight, PlusSquare, Smile, Eye, HeartPulse, Layers, FlaskConical, Bone, Hospital as HospitalIcon, HeartCrack, Bike, Dog, Pill } from 'lucide-react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useTilt } from '@/common/motion/useTilt';
import { useMagnetic } from '@/common/motion/useMagnetic';
import { useParallax } from '@/common/motion/useParallax';
import { HarborArc } from '@/common/HarborArc';
import { SectionGlow } from '@/common/SectionGlow';

const sectionReveal = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
};

const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

export const ServicesSection = ({ animateOnLoad = false, isCompact = false }) => {
    const contactMagnetic = useMagnetic(0.3, 35);
    const numParallax = useParallax(30);
    const prefersReduced = useReducedMotion();
    const gridRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: gridRef,
        offset: ["start end", "start 0.6"]
    });
    const gridBgY = useTransform(scrollYProgress, [0, 1], [40, -40]);


    const services = [
        { name: 'Medical', icon: <PlusSquare />, href: '/medical-plan', badge: 'Most Popular' },
        { name: 'Dental', icon: <Smile />, href: "/dental-care-plan/", badge: 'Essential' },
        { name: 'Vision', icon: <Eye />, href: '/vision-plan' },
        { name: 'Term Life', icon: <HeartPulse />, href: '/term-life' },
        { name: 'Bundles', icon: <Layers />, href: '/bundles-plan', badge: 'Best Value' },
        { name: 'Limited med', icon: <FlaskConical />, href: '/limited-med' },
        { name: 'Accident', icon: <Bone />, href: '/accident-plan' },
        { name: 'Hospital', icon: <HospitalIcon />, href: '/hospital-plan' },
        { name: 'Critical', icon: <HeartCrack />, href: '/critical-plan' },
        { name: 'Lifestyle', icon: <Bike />, href: '/lifestyle-plan' },
        { name: 'Pet', icon: <Dog />, href: '/pet-plan' },
        { name: 'Rx', icon: <Pill />, href: '/rx-plan' },
    ];

    const ServiceCard = ({ service }) => {
        const tilt = useTilt(3);
        const [glow, setGlow] = useState({ x: '50%', y: '50%' });

        const handleMouseMove = (e) => {
            tilt.handleMouseMove(e);
            const rect = e.currentTarget.getBoundingClientRect();
            setGlow({ x: `${e.clientX - rect.left}px`, y: `${e.clientY - rect.top}px` });
        };

        const handleMouseLeave = () => {
            tilt.handleMouseLeave();
        };

        return (
            <motion.div variants={cardVariant} className="h-full">
                <a
                    href={service.href}
                    className="card-elevated group relative p-7 rounded-2xl overflow-hidden flex flex-col justify-between h-full block"
                    ref={tilt.ref}
                    style={{ ...tilt.style, '--glow-x': glow.x, '--glow-y': glow.y }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Optional Badge */}
                    {service.badge && (
                        <span className="absolute top-4 right-4 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-navy-900 text-white border border-navy-700 shadow-md">
                            {service.badge}
                        </span>
                    )}

                    <div>
                        {/* Icon */}
                        <div className="w-13 h-13 rounded-lg bg-navy-50 border border-navy-100/60 flex items-center justify-center text-navy-800 group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300 w-fit p-3.5 mb-5">
                            {React.cloneElement(service.icon, { className: "h-6 w-6 stroke-[1.75]", strokeWidth: 1.75 })}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-navy-900 group-hover:text-accent transition-colors font-display">
                            {service.name}
                        </h3>
                        <p className="mt-1.5 text-sm text-navy-500 leading-relaxed">
                            Comprehensive coverage and benefits options tailored to your lifestyle.
                        </p>
                    </div>

                    {/* Learn More link footer */}
                    <div className="mt-6 pt-4 border-t border-navy-50 flex items-center justify-between text-xs font-bold text-navy-700 group-hover:text-accent transition-colors">
                        <span>Explore Coverage</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                </a>
            </motion.div>
        );
    };

    return (
        <section ref={gridRef} className="bg-surface-alt relative overflow-hidden py-20 md:py-28 border-y border-navy-100/60 font-body">
            <div className="bg-noise"></div>
            {/* Theme-Colored Dot Grid Graphic Background Pattern */}
            <div 
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage: 'radial-gradient(var(--color-navy-500, #1F3580) 1.4px, transparent 1.4px)',
                    backgroundSize: '14px 14px',
                    opacity: 0.22,
                }}
            />
            <SectionGlow position="topRight" className="opacity-30" />

            <motion.div
                ref={numParallax.ref}
                style={{ y: numParallax.y }}
                className="absolute z-0"
            >
                <HarborArc position="bottomRight" className="text-navy-100 opacity-10" />
            </motion.div>

            <div className="w-full px-6 lg:px-12 xl:px-20 2xl:px-32 mx-auto relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div className="max-w-2xl">
                        <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">Comprehensive Catalog</span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 tracking-tight flex flex-wrap gap-[0.25em]">
                            {"Our Health Plans".split(" ").map((word, i) => (
                                <motion.span key={i} initial={{ opacity: 0, y: prefersReduced ? 0 : 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}>
                                    {word}
                                </motion.span>
                            ))}
                        </h2>
                        <p className="mt-3 text-lg text-navy-600">Individual, family, or small business — find the exact coverage for your needs.</p>
                    </div>

                    <motion.div className="flex-shrink-0">
                        <a
                            href="/contact"
                            className="btn-accent px-7 py-3.5 text-base font-bold rounded-full inline-flex items-center shadow-md hover:shadow-lg transition-all"
                            ref={contactMagnetic.ref}
                            style={{ x: contactMagnetic.springX, y: contactMagnetic.springY }}
                            onMouseMove={contactMagnetic.handleMouseMove}
                            onMouseLeave={contactMagnetic.handleMouseLeave}
                        >
                            Get Free Advice
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                    </motion.div>
                </div>

                {/* 12 Plan Grid OR Compact Pill Strip */}
                {isCompact ? (
                    <motion.div 
                        className="flex flex-wrap items-center gap-4 mt-8"
                        variants={sectionReveal}
                        initial="hidden"
                        animate="show"
                    >
                        {services.map((service) => (
                            <motion.a
                                key={service.name}
                                variants={cardVariant}
                                href={service.href}
                                className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-white border border-navy-100 hover:border-accent shadow-sm hover:shadow-md transition-[border-color,box-shadow] duration-300 group"
                            >
                                <div className="text-navy-600 group-hover:text-accent transition-colors">
                                    {React.cloneElement(service.icon, { className: "h-5 w-5 stroke-[2]" })}
                                </div>
                                <span className="font-bold text-navy-900 text-sm group-hover:text-accent transition-colors">{service.name}</span>
                            </motion.a>
                        ))}
                        <motion.a 
                            variants={cardVariant}
                            href="/health-plans"
                            className="flex items-center gap-2 px-6 py-3 rounded-full bg-navy-50 text-navy-900 font-bold text-sm hover:bg-navy-100 transition-colors duration-300 ml-auto sm:mt-0"
                        >
                            View Details <ArrowRight className="h-4 w-4" />
                        </motion.a>
                    </motion.div>
                ) : (
                    <div className="relative">
                        {/* Decorative background element for parallax */}
                        <motion.div 
                            className="absolute -top-20 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none"
                            style={{ y: prefersReduced ? 0 : gridBgY }}
                        />
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative z-10"
                            variants={sectionReveal}
                            initial="hidden"
                            animate="show"
                        >
                            {services.map((service) => (
                                <ServiceCard key={service.name} service={service} />
                            ))}
                        </motion.div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ServicesSection;
