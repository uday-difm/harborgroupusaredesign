"use client";

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
};

export const PlanHowToApply = ({
  title = "How to Apply",
  description,
  steps = []
}) => {
  const prefersReduced = useReducedMotion();

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="py-20 lg:py-32 bg-navy-900 font-body relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          className="text-center mb-16 lg:mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-h2 font-display font-bold text-white tracking-tight mb-6"
          >
            {title}
          </motion.h2>
          {description && (
            <motion.p 
              variants={itemVariants}
              className="text-lg text-navy-200 max-w-2xl mx-auto leading-relaxed"
            >
              {description}
            </motion.p>
          )}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-16 right-16 h-[2px] bg-navy-800 -z-10"></div>
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-navy-800 border-4 border-navy-900 flex items-center justify-center text-accent mb-8 shadow-xl">
                  {Icon ? <Icon className="w-10 h-10" /> : <span className="text-3xl font-display font-bold">{index + 1}</span>}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-display">
                  {step.title}
                </h3>
                <p className="text-base text-navy-300 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
