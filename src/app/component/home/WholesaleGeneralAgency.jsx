"use client";

import React from 'react';
import Image from 'next/image';
import { Target, BrainCircuit, BarChart3, Award, CheckCircle2 } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTilt } from '@/common/motion/useTilt';
import { useParallax } from '@/common/motion/useParallax';
import { SectionGlow } from '@/common/SectionGlow';

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
            className="card-elevated p-7 rounded-2xl border-navy-100/80 flex flex-col justify-between group"
        >
            <div>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-colors bg-navy-50 border border-navy-100 text-accent group-hover:bg-accent group-hover:border-accent group-hover:text-white">
                    {React.cloneElement(feature.icon, { className: "h-6 w-6 transition-colors" })}
                </div>
                <h3 className="text-lg font-bold font-display mb-2.5 text-navy-900 group-hover:text-accent transition-colors">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-navy-600">{feature.description}</p>
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

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
            className="bg-surface py-20 md:py-28 font-body border-b border-navy-100/60 relative overflow-hidden origin-top"
        >
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                    alt="" 
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-30 mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-surface/40" />
                
                {/* Atmospheric Glows */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[100px] -translate-y-1/4 translate-x-1/4"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-navy-500/20 rounded-full blur-[120px] translate-y-1/4 -translate-x-1/4"></div>
            </div>

            <SectionGlow position="bottomRight" className="opacity-60 z-10" />

            <div className="w-full px-6 lg:px-12 xl:px-20 2xl:px-32 mx-auto relative z-10">

                {/* Header Statement */}
                <motion.div
                    initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-3xl mb-16"
                >
                    <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">Agency Overview</span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 tracking-tight leading-tight flex flex-wrap gap-[0.25em]">
                        {"Harbor Group USA is a Retail and Wholesale General Agency".split(" ").map((word, i) => (
                            <motion.span key={i} initial={{ opacity: 0, y: prefersReduced ? 0 : 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}>
                                {word}
                            </motion.span>
                        ))}
                    </h2>
                    <h3 className="mt-4 text-xl font-medium text-accent font-display">
                        Finding Your Ideal Health Plan with Harbor Group USA
                    </h3>
                    <p className="mt-5 text-lg text-navy-600 leading-relaxed">
                        We offer a range of consulting services, all designed to help you find the best plan you are comfortable with. Whether you’re looking for an individual health plan or a group health plan, we have you covered. We will find you precisely what you need.
                    </p>
                </motion.div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">

                    {/* Image Column */}
                    <div className="lg:col-span-5 relative h-full">
                        <div className="sticky top-24 h-fit">
                            <motion.div
                                className="card relative rounded-2xl overflow-hidden border-navy-100/80"
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
                    </div>

                    {/* Features 2x2 Grid Column */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
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
