"use client";

import React from 'react';
import { ShieldCheck, Eye, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { useTilt } from '@/common/motion/useTilt';

const sectionReveal = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
};

// A reusable component for the glassmorphism value cards
const ValueCard = ({ icon: Icon, title, children }) => {
    const tilt = useTilt(10);
    const prefersReduced = useReducedMotion();

    const itemVariant = {
        hidden: { opacity: 0, y: prefersReduced ? 0 : 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <motion.div variants={itemVariant} className="h-full">
            <motion.div
                ref={tilt.ref}
                style={tilt.style}
                onMouseMove={tilt.handleMouseMove}
                onMouseLeave={tilt.handleMouseLeave}
                className="group relative h-full p-8 bg-white border border-navy-100 rounded-2xl card-elevated transition-colors duration-300 hover:border-accent"
            >
                <div className="flex flex-col sm:flex-row sm:items-center items-start sm:space-x-5 space-y-4 sm:space-y-0 mb-6">
                    <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-navy-50 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                        <Icon className="w-7 h-7" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-navy-800">{title}</h3>
                </div>
                <p className="text-base text-navy-600 leading-relaxed text-justify">{children}</p>
            </motion.div>
        </motion.div>
    );
}

export const OurHistory = () => {
    const prefersReduced = useReducedMotion();
    const imageRevealVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: prefersReduced ? 0 : 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section className="section-tint py-24 overflow-hidden">
            <div className="w-full px-6 lg:px-12 xl:px-20 2xl:px-32 mx-auto relative z-10">

                {/* --- History Section --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    <motion.div
                        className="relative h-[400px] lg:h-[500px] w-full"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={imageRevealVariants}
                    >
                        <div className="relative w-full h-full rounded-2xl overflow-hidden card-elevated img-duotone">
                            <motion.div
                                initial={{ scale: 1.15 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                className="w-full h-full"
                            >
                                <Image
                                    src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Get-Expert-Advice-and-Start-Saving.png"
                                    alt="A diverse team collaborating on a project"
                                    className="w-full h-full object-cover"
                                    width={800}
                                    height={600}
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex flex-col justify-center"
                        variants={sectionReveal}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.p variants={itemVariants} className="text-base font-semibold text-accent uppercase tracking-wide">
                            Our History
                        </motion.p>
                        <motion.h2 variants={itemVariants} className="mt-4 text-3xl md:text-4xl font-display font-bold text-navy-800 tracking-tight">
                            Get Expert Advice and Start Saving
                        </motion.h2>
                        <motion.p variants={itemVariants} className="mt-8 text-lg text-navy-600 text-justify leading-relaxed">
                            Founded with a mission of excellence in the field of Health Coverage Plans, Harbor Group USA has grown into a trusted name in the healthcare services industry. Our commitment to navigating the complex landscape of health services has remained steadfast since the beginning.
                        </motion.p>
                        <motion.p variants={itemVariants} className="mt-4 text-lg text-navy-600 text-justify leading-relaxed">
                            Starting with a passion for handling clients with care and expertise, we have transformed over time, dedicating ourselves to understanding the ins and outs of health coverage plans from day one.
                        </motion.p>
                    </motion.div>
                </div>

                {/* --- Values Section --- */}
                <div className="mt-32">
                    <motion.div
                        className="text-center mb-16 max-w-2xl mx-auto"
                        variants={sectionReveal}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-display font-bold text-navy-800 tracking-tight">
                            Our Core Values
                        </motion.h2>
                        <motion.p variants={itemVariants} className="mt-4 text-lg text-navy-600">
                            The principles that guide our every decision and action.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={sectionReveal}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <ValueCard icon={ShieldCheck} title="Integrity">
                            Integrity is paramount in all our dealings. We adhere to the highest ethical standards, ensuring transparency and trust with every client.
                        </ValueCard>
                        <ValueCard icon={Eye} title="Transparency">
                            We believe in clear and open communication. Transparency is key to building lasting partnerships and navigating complex health choices confidently.
                        </ValueCard>
                        <ValueCard icon={TrendingUp} title="Client Success">
                            The success of our clients is at the heart of everything we do. We are dedicated to going above and beyond to secure the best possible outcomes.
                        </ValueCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
