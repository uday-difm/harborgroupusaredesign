"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTilt } from '@/common/motion/useTilt';
import { HarborArc } from '@/common/HarborArc';

export const CollaborationSection = () => {
  const { ref: tiltRef, style: tiltStyle, handleMouseMove, handleMouseLeave } = useTilt(5);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="section-dark min-h-[90vh] flex items-center relative overflow-hidden py-24">
      {/* Subtle B2B background element */}
      <HarborArc position="topLeft" className="text-navy-700 opacity-20 scale-150 -translate-x-1/4 -translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <motion.div
            className="flex flex-col text-left relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-xs font-bold text-accent uppercase tracking-widest">
                Partner Program
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-display font-display font-bold text-white mb-6 leading-tight tracking-tight"
            >
              Collaborate with Us!
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-navy-200 leading-relaxed mb-10 max-w-xl"
            >
              Your gateway to a mutually beneficial partnership with Harbor Group USA awaits. Explore how collaborating with us can open doors to exclusive benefits for both you and your clients. Join forces with us today.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link
                href="#broker-form"
                className="btn-accent px-8 py-4 text-lg inline-flex"
              >
                APPLY NOW
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            className="relative w-full h-[500px] lg:h-[600px] z-10"
            initial={{ opacity: 0, clipPath: 'inset(10% 10% 10% 10% round 24px)' }}
            animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0% round 24px)' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              ref={tiltRef} 
              style={tiltStyle}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-navy-800"
            >
              <div className="absolute inset-0 img-duotone pointer-events-none z-10">
                <div className="absolute inset-0 bg-navy-900/40 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-navy-900/60 via-transparent to-transparent"></div>
              </div>
              <Image
                className="object-cover w-full h-full"
                src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Collaborate-with-Us.jpeg"
                alt="Hands collaborating"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
