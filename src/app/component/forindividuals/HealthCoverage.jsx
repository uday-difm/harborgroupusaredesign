"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTilt } from '@/common/motion/useTilt';

export const HealthCoverage = () => {
  const { ref: tiltRef, style: tiltStyle, handleMouseMove, handleMouseLeave } = useTilt(8);

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
    <section className="section-light min-h-[90vh] flex items-center relative overflow-hidden py-24">
      {/* Warm background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-navy-500/5 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

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
                For Individuals & Families
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-display font-display font-bold text-navy-900 mb-6 leading-tight tracking-tight"
            >
              Simplifying Your Path to <span className="text-accent">Health Coverage</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-navy-600 leading-relaxed mb-10 max-w-xl"
            >
              At Harbor Group USA, we understand that everyone's health needs are unique. That's why we offer a wide range of individual health plans customized to suit your specific requirements. Whether you're a freelancer, a busy professional, or a family looking for personalized coverage, we've got you covered.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link
                href="#individual-form"
                className="btn-primary px-8 py-4 text-lg inline-flex card-elevated shadow-accent/20"
              >
                GET A CONSULTANT
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            className="relative w-full h-[500px] lg:h-[600px] z-10"
            initial={{ opacity: 0, clipPath: 'inset(10% 10% 10% 10% round 24px)', scale: 1.1 }}
            animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0% round 24px)', scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              ref={tiltRef} 
              style={tiltStyle}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-navy-50"
            >
              <Image
                className="object-cover w-full h-full"
                src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/simplifying-path-health-coverage.jpeg"
                alt="Health Coverage Illustration"
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
