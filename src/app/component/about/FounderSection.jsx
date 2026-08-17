"use client";

import React from 'react';
import { Book } from 'lucide-react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

const sectionReveal = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

export default function FounderSection() {
  const prefersReduced = useReducedMotion();

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  const imageRevealVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="bg-white py-20 lg:py-32 overflow-hidden">
      <div className="w-full px-6 lg:px-12 xl:px-20 2xl:px-32 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* --- Left Column: Animated Image Reveal --- */}
          <motion.div 
            className="relative h-[400px] lg:h-[600px] w-full"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={imageRevealVariants}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden card-elevated">
                <Image 
                    src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Douglas%20Muhlbauer.jpg" 
                    alt="Douglas Muhlbauer, Founder of Harbor Group USA"
                    className="w-full h-full object-cover"
                    width={800}
                    height={1000}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                />
            </div>
          </motion.div>

          {/* --- Right Column: Text Content --- */}
          <motion.div 
            className="flex flex-col justify-center"
            variants={sectionReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p variants={itemVariants} className="text-base font-semibold text-accent uppercase tracking-widest">
              Founder
            </motion.p>
            <motion.h2 variants={itemVariants} className="mt-4 text-4xl md:text-5xl font-display font-bold text-navy-800 tracking-tight">
              Douglas Muhlbauer
            </motion.h2>
            
            <motion.div variants={itemVariants} className="mt-8 text-lg text-navy-600 space-y-6 leading-relaxed">
                <p>
                  Founded by <b className="text-navy-800">Douglas Muhlbauer, Harbor Group USA</b> was established with a mission of excellence in health coverage plans. Over the years, it has become a trusted name in the healthcare services industry, guiding clients through the complexities of health coverage with care, transparency, and expertise. With a deep understanding of the ever-changing landscape, Harbor Group USA remains committed to providing personalized solutions that meet the unique needs of every client.
                </p>
                <p>
                  Douglas Muhlbauer, an industry expert and advocate for healthcare reform, is also the author of <b className="text-navy-800">Breaking the Monopoly: The Fight for Affordability,</b> a book that exposes the monopolistic structure of the healthcare system and its impact on consumers. His insights, experience, and commitment to driving change continue to shape Harbor Group USA’s approach, ensuring clients receive the best guidance in navigating their health coverage options.
                </p>
            </motion.div>

            {/* Book Highlight Section */}
            <motion.div variants={itemVariants} className="mt-10">
                <div className="group relative p-6 lg:p-8 bg-white border border-navy-100 rounded-2xl card-elevated transition-all duration-300 hover:border-accent hover:-translate-y-1.5">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-navy-50 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                            <Book className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={1.5} />
                        </div>
                        <div>
                            <h3 className="text-lg lg:text-xl font-bold text-navy-900 font-display">Author &amp; Advocate</h3>
                            <p className="text-sm lg:text-base text-navy-600 mt-2 leading-relaxed">
                                Douglas is the author of <strong className="text-navy-800 font-semibold">Breaking the Monopoly: The Fight for Affordability</strong>, exposing the healthcare system&apos;s impact on consumers.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
