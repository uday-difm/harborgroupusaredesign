"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { staggerContainer, fadeUp } from '@/common/motion/variants';

export const Hospitalization = ()=>{
  const prefersReduced = useReducedMotion();
  return (
    <div className="min-h-screen bg-navy-50 font-body antialiased flex flex-col items-center justify-center">

      {/* Hero Section for Hospitalization Plans */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-surface-alt text-navy-800">
        {/* Background Image with subtle overlay */}
        <Image
          className="absolute inset-0 w-full  object-contain opacity-70"
          src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Hospital-Plans-Page.jpg" // image_a9e337.png (Hospitalization Plans Hero Background)
          alt="Medical facility hallway"
          width = {600}
          height = {400}
        />
        {/* Gradient Overlay for light and decent color */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-100 to-navy-200 opacity-60"></div> {/* Light blue gradient overlay */}
        <div className="absolute inset-0 bg-navy-50 opacity-40"></div> {/* Additional very light blue overlay */}

        {/* Abstract background pattern: subtle, animated circles */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <filter id="circleBlur" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
              </filter>
            </defs>
            <g filter="url(#circleBlur)">
              <circle cx="10" cy="10" r="8" fill="var(--color-navy-300)" opacity="0.15" className="animate-circlePulse1" /> {/* Blue-400 */}
              <circle cx="90" cy="30" r="12" fill="var(--color-navy-400)" opacity="0.1" className="animate-circlePulse2" /> {/* Cyan-400 */}
              <circle cx="30" cy="80" r="10" fill="var(--color-navy-200)" opacity="0.12" className="animate-circlePulse3" /> {/* Sky-300 */}
              <circle cx="70" cy="95" r="7" fill="var(--color-navy-100)" opacity="0.1" className="animate-circlePulse4" /> {/* Blue-200 */}
            </g>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-start justify-center relative z-10 p-4 sm:p-6 lg:p-8 text-left">
          {/* Text Content */}
          <motion.div 
            className="max-w-3xl"
            variants={staggerContainer()}
            initial={prefersReduced ? "show" : "hidden"}
            animate="show"
          >
            <motion.h1 variants={fadeUp} className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold mb-6 leading-tight drop-shadow-xl text-navy-800">
            Specialized plans for hospitalization expenses
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg sm:text-xl text-navy-800 mb-10 max-w-xl mx-auto lg:mx-0 drop-shadow-md ">
             Navigate hospitalization expenses with confidence through our Specialized Hospital Plans at Harbor Group USA. Tailored to provide dedicated coverage for hospital stays, our plans are designed to alleviate the financial strain associated with medical emergencies.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="#hospital-plan-form" className="btn-accent px-10 py-4 font-bold">
                GET STARTED
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tailwind CSS Custom Animations */}</div>
  )
}
