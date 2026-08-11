"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { HarborArc } from '@/comman/HarborArc';
import { motion, useReducedMotion } from 'framer-motion';
import { useMagnetic } from '@/comman/motion/useMagnetic';
import { useTilt } from '@/comman/motion/useTilt';
import { useParallax } from '@/comman/motion/useParallax';
import { useVelocityEffect } from '@/comman/motion/useVelocityEffect';
import { useTransform } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};

export const HeroSection = () => {
    const prefersReduced = useReducedMotion();
    
    // Hooks
    const ctaMagnetic = useMagnetic(0.4, 40);
    const imageTilt = useTilt(6);
    const arc1Parallax = useParallax(20);
    const arc2Parallax = useParallax(-15);

    const { skew, blur } = useVelocityEffect(2, 4);
    const velocityBlur = useTransform(blur, (v) => `blur(${v}px)`);
    
    const itemVariants = {
      hidden: { opacity: 0, y: prefersReduced ? 0 : 20 },
      show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
    };
    const imageVariants = {
      hidden: { opacity: 0, scale: prefersReduced ? 1 : 0.97 },
      show: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section className="relative bg-surface overflow-hidden pt-12 pb-24 lg:pt-24 lg:pb-32">
            <div ref={arc1Parallax.ref}>
                <HarborArc position="bottomRight" className="text-navy-100" parallaxY={arc1Parallax.y} />
            </div>
            <div ref={arc2Parallax.ref}>
                <HarborArc position="topLeft" className="text-navy-50 opacity-40 scale-150" parallaxY={arc2Parallax.y} />
            </div>
            
            <div className="relative w-full px-6 lg:px-12 xl:px-20 2xl:px-32 mx-auto z-10">
                <div className="grid lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center">
                    
                    {/* --- Left Column: Text Content --- */}
                    <motion.div 
                        className="text-center lg:text-left"
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.div variants={itemVariants} className="inline-flex items-center px-3 py-1 rounded-full bg-navy-50 text-navy-600 text-sm font-semibold mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
                            Trusted Healthcare Advisors
                        </motion.div>

                        <h1 className="text-display font-display font-bold text-navy-800 tracking-tight leading-[1.1]">
                            <div className="overflow-hidden">
                                <motion.div variants={itemVariants}>
                                    A Brighter & 
                                </motion.div>
                            </div>
                            <div className="overflow-hidden">
                                <motion.div variants={itemVariants} className="text-accent">
                                    Healthier Future
                                </motion.div>
                            </div>
                        </h1>

                        <motion.p variants={itemVariants} className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-navy-500">
                            Finding your ideal health plan with Harbor Group USA. Securing your future with unmatched expertise in health plans and benefits tailored for you.
                        </motion.p>

                        <motion.div variants={itemVariants} className="mt-10 inline-block">
                            <motion.a 
                                href="#h-form" 
                                className="btn-accent px-8 py-4 text-lg inline-flex items-center"
                                ref={ctaMagnetic.ref}
                                style={{ x: ctaMagnetic.springX, y: ctaMagnetic.springY }}
                                onMouseMove={ctaMagnetic.handleMouseMove}
                                onMouseLeave={ctaMagnetic.handleMouseLeave}
                            >
                                Get a Free Quote Today
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* --- Right Column: Image Composition --- */}
                    <motion.div 
                        className="relative h-[400px] lg:h-[600px] w-full xl:-mr-20 origin-bottom"
                        initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
                        animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    >
                        <div className="absolute inset-0 w-full lg:ml-auto lg:mr-0">
                            {/* Image Container with Duotone & Tilt */}
                            <motion.div 
                                className="relative w-full h-full rounded-card overflow-hidden shadow-lg img-duotone"
                                ref={imageTilt.ref}
                                style={{ ...imageTilt.style, skewY: skew, filter: velocityBlur }}
                                onMouseMove={imageTilt.handleMouseMove}
                                onMouseLeave={imageTilt.handleMouseLeave}
                            >
                                <motion.div
                                    initial={{ scale: 1.2 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="w-full h-full"
                                >
                                    <Image 
                                        src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Brighter-&-Healthier-Future.webp" 
                                        alt="Doctor consulting with a patient"
                                        className="w-full h-full object-cover"
                                        width={800}
                                        height={1000}
                                        priority
                                    />
                                </motion.div>
                            </motion.div>

                        </div>
                    </motion.div>

                </div>
            </div>
            
        </section>
    );
};
