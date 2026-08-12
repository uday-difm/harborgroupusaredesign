"use client";

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
};

export const PlanEligibility = ({
  title = "Eligibility Criteria",
  description,
  criteria = []
}) => {
  const prefersReduced = useReducedMotion();

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="py-20 md:py-28 bg-surface font-body overflow-hidden relative">
      <div className="absolute inset-0 bg-noise opacity-[0.02] mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          className="text-center mb-16 lg:mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-h2 font-display font-bold text-navy-900 tracking-tight"
          >
            {title}
          </motion.h2>
          {description && (
            <motion.p 
              variants={itemVariants}
              className="mt-6 text-lg text-navy-600 max-w-3xl mx-auto leading-relaxed"
            >
              {description}
            </motion.p>
          )}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {criteria.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="card-elevated p-8 group hover:-translate-y-2 transition-transform duration-500 ease-out"
              >
                <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-navy-50 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  {Icon && <Icon className="w-8 h-8" />}
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3 font-display">
                  {item.title}
                </h3>
                <p className="text-base text-navy-600 leading-relaxed text-justify">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
