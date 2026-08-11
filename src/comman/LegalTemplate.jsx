"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const LegalTemplate = ({ title, children }) => {
  return (
    <div className="section-light min-h-[90vh] pt-32 pb-24 overflow-hidden relative">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-navy-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h1 className="text-display font-display font-bold text-navy-900 tracking-tight">
            {title}
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="card-elevated p-8 md:p-12"
        >
          <div className="prose prose-lg max-w-none text-navy-700">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
