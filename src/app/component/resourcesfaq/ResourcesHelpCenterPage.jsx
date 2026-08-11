"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const ResourcesHelpCenterPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-surface relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse-slow"></div>
      
      <motion.div 
        className="relative z-10 max-w-5xl mx-auto text-center p-8 md:p-12 lg:p-16 card-elevated"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h2 
          className="text-h2 font-display font-bold text-navy-900 mb-6 leading-tight tracking-tight"
          variants={itemVariants}
        >
          Welcome to Our Resources & Help Center
        </motion.h2>
        <motion.p 
          className="text-lg sm:text-xl text-navy-600 leading-relaxed mb-10 max-w-3xl mx-auto"
          variants={itemVariants}
        >
         At The Harbor Group, we are committed to providing you with the knowledge and assistance you need to make informed decisions about your coverage. Explore our Resources & Help Center to access a wealth of educational materials, guides, and a comprehensive knowledge base.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-6"
          variants={itemVariants}
        >
          <Link href="/health-plans" className="btn-primary px-8 py-4 text-lg">
            KNOW ABOUT PLANS
          </Link>
          <Link href="/privacy-policy" className="btn-secondary px-8 py-4 text-lg bg-navy-50 text-navy-900 hover:bg-navy-100">
            KNOW ABOUT POLICIES
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};
