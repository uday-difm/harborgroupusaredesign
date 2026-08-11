"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const PlanCTA = ({ 
  title = "Get Your Personalized Plan", 
  buttonText = "Get Started", 
  href = "#form" 
}) => {
  return (
    <section className="py-24 bg-navy-900 font-body relative overflow-hidden">
      {/* Decorative Atmosphere */}
      <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay pointer-events-none"></div>
      
      {/* Abstract background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/20 rounded-full blur-[80px]"></div>
        <div className="absolute top-1/2 right-12 w-64 h-64 bg-navy-400/20 rounded-full blur-[60px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-white mb-10 leading-tight">
            {title}
          </h2>
          <Link 
            href={href} 
            className="btn-accent px-10 py-4 text-lg shadow-[0_0_40px_rgba(201,162,75,0.3)] hover:shadow-[0_0_60px_rgba(201,162,75,0.5)]"
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
