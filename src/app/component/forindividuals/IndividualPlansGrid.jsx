"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, PlusSquare, Smile, Eye, HeartPulse, Layers, FlaskConical, Bone, Hospital as HospitalIcon, HeartCrack, Bike, Dog, Pill } from 'lucide-react';
import { NetworkMapIllustration } from '@/common/illustrations/NetworkMapIllustration';
import { motion } from 'framer-motion';

export const IndividualPlansGrid = () => {
    
    const services = [
        { name: 'Medical', icon: <PlusSquare />, href: '/medical-plan' },
        { name: 'Dental', icon: <Smile />, href: "/dental-care-plan/" },
        { name: 'Vision', icon: <Eye />, href: '/vision-plan' },
        { name: 'Term Life', icon: <HeartPulse />, href: '/term-life' },
        { name: 'Bundles', icon: <Layers />, href: '/bundles-plan' },
        { name: 'Limited med', icon: <FlaskConical />, href: '/limited-med' },
        { name: 'Accident', icon: <Bone />, href: '/accident-plan' },
        { name: 'Hospital', icon: <HospitalIcon />, href: '/hospital-plan' },
        { name: 'Critical', icon: <HeartCrack />, href: '/critical-plan' },
        { name: 'Lifestyle', icon: <Bike />, href: '/lifestyle-plan' },
        { name: 'Pet', icon: <Dog />, href: '/pet-plan' },
        { name: 'Rx', icon: <Pill />, href: '/rx-plan' },
    ];

    const sectionReveal = {
      hidden: {},
      show: {
        transition: { staggerChildren: 0.05, delayChildren: 0.1 }
      }
    };

    const cardVariant = {
      hidden: { opacity: 0, y: 15 },
      show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section className="section-light relative overflow-hidden py-24 font-body">
            <div className="w-full px-6 lg:px-12 xl:px-20 2xl:px-32 mx-auto relative z-10">
                
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 relative">
                    <NetworkMapIllustration className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 text-accent opacity-10 pointer-events-none hidden md:block" />
                    <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">Our Coverage Options</span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 tracking-tight">Tailored to You</h2>
                    <p className="mt-3 text-lg text-navy-600">Choose from a variety of plans designed for individual and family needs.</p>
                </div>

                {/* 12 Plan Grid */}
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6"
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {services.map((service, index) => (
                        <motion.div key={index} variants={cardVariant}>
                            <a 
                                href={service.href} 
                                className="card-flat group relative p-6 bg-white flex flex-col justify-between border-t-2 border-transparent hover:border-accent transition-all duration-300 hover:-translate-y-1 h-full block"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-navy-50 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                        {React.cloneElement(service.icon, { className: "h-5 w-5 stroke-[1.5]" })}
                                    </div>
                                    <h3 className="text-lg font-bold text-navy-900 font-display">
                                        {service.name}
                                    </h3>
                                </div>
                                
                                <div className="text-sm text-navy-600 mb-6 leading-relaxed">
                                    Flexible {service.name.toLowerCase()} coverage options.
                                </div>

                                <div className="flex items-center text-sm font-bold text-accent mt-auto">
                                    <span>Explore Plan</span>
                                    <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
