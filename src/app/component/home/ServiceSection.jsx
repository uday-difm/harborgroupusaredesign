"use client";

import React, { useState } from 'react';
import { ArrowRight, PlusSquare, Smile, Eye, HeartPulse, Layers, FlaskConical, Bone, Hospital as HospitalIcon, HeartCrack, Bike, Dog, Pill } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTilt } from '@/comman/motion/useTilt';
import { useMagnetic } from '@/comman/motion/useMagnetic';
import { useParallax } from '@/comman/motion/useParallax';

const sectionReveal = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};


export const ServicesSection = () => {
    const contactMagnetic = useMagnetic(0.3, 35);
    const numParallax = useParallax(30);
    const services = [
        { name: 'Medical', icon: <PlusSquare />, href: '/medical-plan'},
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

    const ServiceCard = ({ service }) => {
        const tilt = useTilt(4);
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
            <motion.a 
                variants={cardVariant}
                href={service.href} 
                className="group flex items-center p-6 card-elevated card-glow relative overflow-hidden bg-white"
                ref={tilt.ref}
                style={{ ...tilt.style, '--glow-x': glow.x, '--glow-y': glow.y }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <div className="flex-shrink-0 p-4 bg-navy-50 rounded-xl group-hover:bg-accent/10 transition-colors relative z-10">
                    {React.cloneElement(service.icon, { className: "h-6 w-6 text-navy-700 group-hover:text-accent transition-colors", strokeWidth: 1.5 })}
                </div>
                <div className="ml-5 flex-grow text-left relative z-10">
                    <h3 className="text-lg font-bold text-navy-800">{service.name}</h3>
                    <span className="inline-flex items-center text-sm font-semibold text-accent mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Learn More <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                </div>
            </motion.a>
        );
    };

    return (
        <section className="section-tint relative overflow-hidden py-24">
            <motion.div 
                ref={numParallax.ref}
                style={{ y: numParallax.y }}
                className="absolute -top-10 -left-10 lg:top-0 lg:left-10 opacity-30 select-none pointer-events-none z-0"
            >
                <HeartPulse className="w-64 h-64 lg:w-[400px] lg:h-[400px] text-navy-100" strokeWidth={0.5} />
            </motion.div>
            
            <motion.div 
                className="w-full px-6 lg:px-12 xl:px-20 2xl:px-32 mx-auto relative z-10"
                variants={sectionReveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
            >
                <div className="mb-16 mt-16 lg:mt-24">
                    <div className="max-w-2xl">
                        <h2 className="text-h2 font-display font-bold text-navy-800 tracking-tight">Our Services</h2>
                        <p className="mt-4 text-lg text-navy-500">Individual or group, we've got the perfect health plan for you.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {services.map((service) => (
                         <ServiceCard key={service.name} service={service} />
                    ))}
                </div>
                
                <div className="mt-12 flex justify-end">
                    <motion.div className="inline-block">
                        <a 
                            href="/contact" 
                            className="btn-accent px-8 py-4 text-lg inline-flex"
                            ref={contactMagnetic.ref}
                            style={{ x: contactMagnetic.springX, y: contactMagnetic.springY }}
                            onMouseMove={contactMagnetic.handleMouseMove}
                            onMouseLeave={contactMagnetic.handleMouseLeave}
                        >
                            Contact Us
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};
