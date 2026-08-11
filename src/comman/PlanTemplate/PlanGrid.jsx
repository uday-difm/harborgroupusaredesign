"use client";

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
};

export const PlanGrid = ({
  title,
  description,
  features = []
}) => {
  const prefersReduced = useReducedMotion();

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="py-20 lg:py-32 bg-surface font-body overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-24 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-h2 font-display font-bold text-navy-900 tracking-tight mb-4"
          >
            {title}
          </motion.h2>
          {description && (
            <motion.p 
              variants={itemVariants}
              className="text-lg text-navy-500 leading-relaxed"
            >
              {description}
            </motion.p>
          )}
        </motion.div>

        {/* Offset Grid Layout */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            // Calculate offset based on column index (0, 1, 2)
            const colIndex = index % 3;
            const offsetClass = colIndex === 1 ? 'lg:translate-y-8' : colIndex === 2 ? 'lg:translate-y-16' : '';
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`card-elevated p-8 flex flex-col justify-center transition-all duration-300 hover:-translate-y-2 group ${offsetClass}`}
              >
                {Icon && (
                  <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                    <Icon className="h-6 w-6 text-accent group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                  </div>
                )}
                <h3 className="text-xl font-bold text-navy-800 leading-snug group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </h3>
                {feature.description && (
                  <p className="mt-3 text-navy-500">
                    {feature.description}
                  </p>
                )}
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Spacer to account for the offset grid's extra height at the bottom */}
        <div className="hidden lg:block h-16"></div>
      </div>
    </section>
  );
};
