"use client";

import React from 'react';
import { motion, useReducedMotion, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useTilt } from '@/common/motion/useTilt';
import { useVelocityEffect } from '@/common/motion/useVelocityEffect';

const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } }
};

export const HeroAbout = () => {
    const prefersReduced = useReducedMotion();
    const imageTilt = useTilt(6);

    const { skew, blur } = useVelocityEffect(2, 4);
    const velocityBlur = useTransform(blur, (v) => `blur(${v}px)`);

    const itemVariants = {
        hidden: { opacity: 0, y: prefersReduced ? 0 : 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section className="relative bg-surface overflow-hidden py-20 lg:py-32">
            <div className="w-full px-6 lg:px-12 xl:px-20 2xl:px-32 mx-auto relative z-10">
                <div className="grid lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center">

                    {/* --- Left Column: Text Content --- */}
                    <motion.div
                        className="text-center lg:text-left"
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-2 rounded-full bg-navy-50 text-navy-600 text-sm font-semibold mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
                            About Us
                        </motion.div>

                        <h1 className="text-display font-display font-bold text-navy-800 tracking-tight leading-[1.1]">
                            <div className="overflow-hidden">
                                <motion.div variants={itemVariants}>
                                    Who We Are
                                </motion.div>
                            </div>
                        </h1>

                        <motion.p variants={itemVariants} className="mt-8 max-w-xl mx-auto lg:mx-0 text-lg text-navy-500 leading-relaxed text-justify">
                            At Harbor Group USA, our journey is rooted in a rich legacy of healthcare expertise. Established with a mission to cater to small business owners, employees, and self-employed workers, we are committed to upholding values of integrity, transparency, and client-centricity.
                        </motion.p>
                        <motion.p variants={itemVariants} className="mt-4 max-w-xl mx-auto lg:mx-0 text-lg text-navy-500 leading-relaxed text-justify">
                            With a track record that spans a considerable period, we’ve accumulated valuable know-how about healthcare. Our focus is straightforward – helping individuals and businesses navigate the healthcare world. We believe in being upfront, honest, and always putting you first.
                        </motion.p>
                    </motion.div>

                    {/* --- Right Column: Image Composition --- */}
                    <motion.div
                        className="relative h-[400px] lg:h-[600px] w-full xl:-mr-20 origin-bottom"
                        initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
                        animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    >
                        <div className="absolute inset-0 w-full lg:ml-auto lg:mr-0">
                            <motion.div
                                className="relative w-full h-full rounded-card overflow-hidden card-elevated img-duotone"
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
                                        src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Who-we-are.jpeg"
                                        alt="Who we are!"
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
}
