"use client";

import React, { useState } from 'react';
import { ArrowRight, PlusSquare, Smile, Eye, HeartPulse, Layers, FlaskConical, Bone, Hospital as HospitalIcon, HeartCrack, Bike, Dog, Pill } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTilt } from '@/comman/motion/useTilt';
import { useMagnetic } from '@/comman/motion/useMagnetic';
import { useParallax } from '@/comman/motion/useParallax';
import { HarborArc } from '@/comman/HarborArc';
import { SectionGlow } from '@/comman/SectionGlow';

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

export const ServicesSection = () => {
    const contactMagnetic = useMagnetic(0.3, 35);
    const numParallax = useParallax(30);
    
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
                    className="group relative p-7 rounded-2xl bg-white border border-navy-100/80 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between h-full block"
                    ref={tilt.ref}
                    style={{ ...tilt.style, '--glow-x': glow.x, '--glow-y': glow.y }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Optional Badge */}
                    {service.badge && (
                        <span className="absolute top-4 right-4 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent/15 text-navy-900 border border-accent/30">
                            {service.badge}
                        </span>
                    )}

                    <div>
                        {/* Icon */}
                        <div className="w-13 h-13 rounded-xl bg-navy-50 border border-navy-100/60 flex items-center justify-center text-navy-800 group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300 w-fit p-3.5 mb-5">
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
        <section className="bg-surface-alt relative overflow-hidden py-24 border-y border-navy-100/60 font-body">
            <div className="bg-noise"></div>
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
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 tracking-tight">Our Health Plans</h2>
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

                {/* 12 Plan Grid */}
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {services.map((service) => (
                         <ServiceCard key={service.name} service={service} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;
