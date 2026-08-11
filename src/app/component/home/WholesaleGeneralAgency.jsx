"use client";

import React from 'react';
import Image from 'next/image';
import { Target, BrainCircuit, BarChart3, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useParallax } from '@/comman/motion/useParallax';

const sectionReveal = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

export const WholesaleGeneralAgency = () => {
    const features = [
        {
            icon: <Target className="h-7 w-7 text-accent" />,
            title: "Our Goal",
            description: "Compare all the options to find you the best plan available for the lowest possible premium!"
        },
        {
            icon: <BrainCircuit className="h-7 w-7 text-accent" />,
            title: "Knowledge",
            description: "We make sure your health is protected. Got confused with ACA We'll guide you through it!"
        },
        {
            icon: <BarChart3 className="h-7 w-7 text-accent" />,
            title: "Expert Analysis",
            description: "Our experts analyze everything from medical needs to your budget to create a personalized plan!"
        },
        {
            icon: <Award className="h-7 w-7 text-accent" />,
            title: "Industry Best Practices",
            description: "Our consultants cover all healthcare needs, from health and medical to life and employee benefits!"
        }
    ];
    const imageParallax = useParallax(15);

    return (
        <section className="section-light">
            <motion.div 
                className="relative w-full px-6 lg:px-12 xl:px-20 2xl:px-32 mx-auto"
                variants={sectionReveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
            >
                <div className="max-w-3xl mb-16">
                    <h2 className="text-h2 font-display font-bold text-navy-800 tracking-tight">
                        Harbor Group USA is a Retail and Wholesale General Agency
                    </h2>
                    <h3 className="mt-4 text-xl font-semibold text-accent">
                        Finding Your Ideal Health Plan with Harbor Group USA
                    </h3>
                    <p className="mt-6 text-lg text-navy-500">
                        We offer a range of consulting services, all designed to help you find the best plan you are comfortable with. Whether you’re looking for an individual health plan or a group health plan, we have you covered. We will find you precisely what you need.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[40fr_60fr] gap-12 lg:gap-16 items-center">
                    {/* Left Column: Image */}
                    <div className="space-y-8 w-full xl:-ml-20">
                        <motion.div 
                            ref={imageParallax.ref}
                            style={{ y: imageParallax.y }}
                            className="relative rounded-card overflow-hidden shadow-lg img-duotone w-full"
                        >
                            <Image
                                src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Home-2.jpeg"
                                alt="Professional team collaborating"
                                className="w-full object-cover h-[500px]"
                                width={600}
                                height={500}
                            />
                        </motion.div>
                    </div>

                    {/* Right Column: Features */}
                    <div className="space-y-6">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start space-x-6 p-6 card-elevated">
                                <div className="flex-shrink-0 bg-navy-50 p-4 rounded-xl border border-navy-100">
                                    {React.cloneElement(feature.icon, { strokeWidth: 1.5 })}
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-navy-800">{feature.title}</h4>
                                    <p className="mt-2 text-navy-500 leading-relaxed text-justify">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};