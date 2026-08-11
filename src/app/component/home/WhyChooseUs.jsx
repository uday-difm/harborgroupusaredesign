"use client";

import React, { useState } from 'react';
import { Target, Users, Zap, Timer } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const sectionReveal = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

export const WhyChooseUsSection = () => {
    const reasons = [
        {
            icon: <Users />,
            title: "Experienced Professionals",
            description: "Our experienced team will guide you through the complexities of health plans"
        },
        {
            icon: <Target />,
            title: "Tailored Solutions",
            description: "Get a custom-built health plan that delivers the support and coverage according to your specific needs"
        },
        {
            icon: <Zap />,
            title: "Reliable Support",
            description: "Get instant, expert assistance with our 24/7 guaranteed uptime support"
        },
        {
            icon: <Timer />,
            title: "Fast Turnaround Time",
            description: "Get a quote in hours & set up your plan in days, not weeks. We prioritize time, so you can access critical health coverage swiftly",
            image: "https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Home-2.jpeg" // placeholder alternate image
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="section-tint relative">
            <div className="w-full px-6 lg:px-12 xl:px-20 2xl:px-32 mx-auto">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start relative">
                    
                    {/* Left Column: Scrollable Text Blocks */}
                    <div className="space-y-32 py-24">
                        <div className="mb-24">
                            <h2 className="text-h2 font-display font-bold text-navy-800 tracking-tight sticky top-24 z-10 bg-surface-alt/90 backdrop-blur-sm py-4">
                                Why Choose Harbor Group USA Health Plan?
                            </h2>
                        </div>
                        
                        {reasons.map((reason, index) => (
                            <motion.div 
                                key={index} 
                                className={`transition-opacity duration-500 ${activeIndex === index ? 'opacity-100' : 'opacity-30'}`}
                                onViewportEnter={() => setActiveIndex(index)}
                                viewport={{ margin: "-40% 0px -40% 0px" }}
                            >
                                <div className="flex items-start space-x-6">
                                    <div className={`p-4 rounded-xl transition-colors duration-500 ${activeIndex === index ? 'bg-accent shadow-lg' : 'bg-navy-50 border border-navy-100'}`}>
                                        {React.cloneElement(reason.icon, { className: `h-8 w-8 transition-colors duration-500 ${activeIndex === index ? 'text-white' : 'text-navy-600'}`, strokeWidth: 1.5 })}
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold text-navy-800">{reason.title}</h4>
                                        <p className="mt-4 text-lg text-navy-500 leading-relaxed">{reason.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                        <div className="h-32"></div> {/* Bottom padding for scroll area */}
                    </div>

                    {/* Right Column: Sticky Image */}
                    <div className="hidden lg:block sticky top-32 h-[600px] w-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                className="absolute inset-0 rounded-card overflow-hidden shadow-lg img-duotone"
                            >
                                <img 
                                    src={reasons[activeIndex].image || "https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Why-choose-Harbor-Group-USA-health-plan.jpeg"}
                                    alt={reasons[activeIndex].title}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};