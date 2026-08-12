"use client";

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

export const AccidentHero = () => {
  const mainIconGradient = (
    <defs>
      <linearGradient id="mainIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: 'var(--color-navy-200)', stopOpacity: 1}} /> {/* Tailwind sky-300 */}
        <stop offset="100%" style={{stopColor: 'var(--color-navy-400)', stopOpacity: 1}} /> {/* Tailwind cyan-400 */}
      </linearGradient>
    </defs>
  );

  const prefersReduced = useReducedMotion();

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <>

    <div className="min-h-screen bg-navy-50 font-body antialiased flex flex-col items-center justify-center">

      {/* Hero Section for Accident Coverage - NEW UNIQUE DESIGN (Geometric Overlay) */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-white text-navy-800"> 
        <Image
          className="absolute inset-0 w-full h-full object-cover opacity-60 filter grayscale contrast-120" 
          src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Accident.jpg"
          alt="Medical professional assisting a patient"
          width={600}
          height= {400}

        />
        {/* Multi-stop gradient overlay pulling from logo colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-500 via-navy-200 to-transparent opacity-60"></div> 
        <div className="absolute inset-0 bg-navy-50 opacity-30"></div> 
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <filter id="shapeBlur" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
              </filter>
            </defs>
            <g filter="url(#shapeBlur)">
              <polygon points="0,0 20,0 0,20" fill="var(--color-primary)" opacity="0.1" className="animate-shapeMove1" /> {/* Dark Blue */}
              <polygon points="100,0 80,0 100,20" fill="var(--color-navy-100)" opacity="0.1" className="animate-shapeMove2" /> {/* Light Blue */}
              <polygon points="0,100 20,100 0,80" fill="var(--color-accent)" opacity="0.08" className="animate-shapeMove3" /> {/* Red */}
              <polygon points="100,100 80,100 100,80" fill="var(--color-navy-200)" opacity="0.1" className="animate-shapeMove4" /> {/* Sky Blue */}
            </g>
          </svg>
        </div>

        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="max-w-7xl mx-auto flex flex-col items-start justify-center relative z-10 p-4 sm:p-6 lg:p-8 text-left"
        >
          <div className="max-w-6xl w-full flex flex-col items-center">
            <motion.h1 variants={itemVariants} className="text-2xl sm:text-3xl lg:text-5xl font-display font-extrabold mb-6 leading-tight text-center drop-shadow-xl">
             Coverage for unexpected accidents to ease financial burdens
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-navy-800 mb-10 max-w-5xl text-center mx-auto lg:mx-0 drop-shadow-md">
           Prepare for life’s unexpected turns with our Accident Plans at Harbor Group USA. We understand that accidents can happen when you least expect them, and our Accident Plans are designed to provide financial support precisely when you need it.
            </motion.p>
         
            <motion.div variants={itemVariants}>
              <Link href="#accident-plan-form" className="btn-accent px-10 py-4 font-bold rounded-full transition-transform hover:scale-105 inline-block"> 
                GET STARTED
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Tailwind CSS Custom Animations */}
      <style jsx>{`
        /* New Shape Movement Animations */
        @keyframes shapeMove1 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(5vw, 10vh); }
          50% { transform: translate(10vw, 5vh); }
          75% { transform: translate(5vw, -5vh); }
        }
        @keyframes shapeMove2 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-5vw, 8vh); }
          50% { transform: translate(-10vw, -4vh); }
          75% { transform: translate(-5vw, 12vh); }
        }
        @keyframes shapeMove3 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(3vw, -7vh); }
          50% { transform: translate(-6vw, -10vh); }
          75% { transform: translate(8vw, 2vh); }
        }
        @keyframes shapeMove4 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-8vw, -3vh); }
          50% { transform: translate(4vw, 9vh); }
          75% { transform: translate(-2vw, -11vh); }
        }

        .animate-shapeMove1 { animation: shapeMove1 20s infinite alternate ease-in-out; }
        .animate-shapeMove2 { animation: shapeMove2 22s infinite alternate ease-in-out; }
        .animate-shapeMove3 { animation: shapeMove3 18s infinite alternate ease-in-out; }
        .animate-shapeMove4 { animation: shapeMove4 25s infinite alternate ease-in-out; }
      `}</style>
    </div>
    </>
  )
}
