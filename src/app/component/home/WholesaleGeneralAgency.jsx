"use client";

import React from 'react';
import Image from 'next/image';
import { Target, BrainCircuit, BarChart3, Award, CheckCircle2 } from 'lucide-react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useTilt } from '@/comman/motion/useTilt';
import { useParallax } from '@/comman/motion/useParallax';
import { SectionGlow } from '@/comman/SectionGlow';

const featureCardVariant = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const FeatureCard = ({ feature }) => {
    const tilt = useTilt(3);
    return (
        <motion.div 
            variants={featureCardVariant}
            ref={tilt.ref}
            style={{ ...tilt.style }}
            onMouseMove={tilt.handleMouseMove}
            onMouseLeave={tilt.handleMouseLeave}
            className="p-7 rounded-2xl bg-white border border-navy-100/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
        >
            <div>
                <div className="w-12 h-12 rounded-xl bg-navy-50 border border-navy-100 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:border-accent transition-colors">
                    {React.cloneElement(feature.icon, { className: "h-6 w-6 text-accent group-hover:text-white transition-colors" })}
                </div>
                <h3 className="text-lg font-bold text-navy-900 font-display mb-2.5 group-hover:text-accent transition-colors">{feature.title}</h3>
                <p className="text-sm text-navy-600 leading-relaxed">{feature.description}</p>
            </div>
        </motion.div>
    );
};

export const WholesaleGeneralAgency = () => {
    const features = [
        {
            icon: <Target />,
            title: "Our Goal",
            description: "Compare all the options to find you the best plan available for the lowest possible premium!"
        },
        {
            icon: <BrainCircuit />,
            title: "Knowledge",
            description: "We make sure your health is protected. Got confused with ACA We'll guide you through it!"
        },
        {
            icon: <BarChart3 />,
            title: "Expert Analysis",
            description: "Our experts analyze everything from medical needs to your budget to create a personalized plan!"
        },
        {
            icon: <Award />,
            title: "Industry Best Practices",
            description: "Our consultants cover all healthcare needs, from health and medical to life and employee benefits!"
        }
    ];

    const imageParallax = useParallax(15);
    const prefersReduced = useReducedMotion();

    const sectionRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
    const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0.4]);

    return (
        <motion.section 
            ref={sectionRef}
            style={{ scale: prefersReduced ? 1 : scale, opacity: prefersReduced ? 1 : opacity }}
            className="bg-surface py-24 font-body border-b border-navy-100/60 relative overflow-hidden origin-top"
        >
            <SectionGlow position="bottomRight" className="opacity-40" />

            <div className="w-full px-6 lg:px-12 xl:px-20 2xl:px-32 mx-auto relative z-10">
                
                {/* Header Statement */}
                <motion.div 
                    initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-3xl mb-16"
                >
                    <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">Agency Overview</span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 tracking-tight leading-tight">
                        Harbor Group USA is a Retail and Wholesale General Agency
                    </h2>
                    <h3 className="mt-4 text-xl font-medium text-accent font-display">
                        Finding Your Ideal Health Plan with Harbor Group USA
                    </h3>
                    <p className="mt-5 text-lg text-navy-600 leading-relaxed">
                        We offer a range of consulting services, all designed to help you find the best plan you are comfortable with. Whether you’re looking for an individual health plan or a group health plan, we have you covered. We will find you precisely what you need.
                    </p>
                </motion.div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Image Column */}
                    <div className="lg:col-span-5 relative" ref={imageParallax.ref}>
                        <motion.div 
                            style={{ y: imageParallax.y }}
                            className="relative rounded-3xl overflow-hidden shadow-2xl border border-navy-100/80"
                        >
                            <Image
                                src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Home-2.jpeg"
                                alt="Professional team collaborating"
                                className="w-full object-cover h-[480px] lg:h-[560px]"
                                width={600}
                                height={600}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent pointer-events-none"></div>
                        </motion.div>

                        {/* Floating Badge overlay */}
                        <div className="absolute -bottom-6 -right-4 md:-right-6 bg-navy-900 text-white p-5 rounded-2xl shadow-xl border border-navy-800 hidden sm:flex items-center gap-3">
                            <CheckCircle2 className="w-8 h-8 text-accent" />
                            <div>
                                <p className="text-xs font-bold text-navy-200 uppercase tracking-wider">Licensed Agency</p>
                                <p className="text-sm font-bold text-white">Wholesale & Retail Support</p>
                            </div>
                        </div>
                    </div>

                    {/* Features 2x2 Grid Column */}
                    <motion.div 
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ staggerChildren: 0.12 }}
                        className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {features.map((feature, index) => (
                            <FeatureCard key={index} feature={feature} />
                        ))}
                    </motion.div>

                </div>
            </div>
        </motion.section>
    );
};

export default WholesaleGeneralAgency;