"use client";

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';
import { HarborArc } from '@/common/HarborArc';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
};

export const PlanCostOptions = ({
  title = "Cost Options",
  description,
  plans = [],
  conclusion
}) => {
  const prefersReduced = useReducedMotion();

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="py-20 md:py-28 bg-surface-alt font-body relative overflow-hidden">
      <HarborArc position="bottomLeft" className="text-navy-100 opacity-30" />
      <div className="absolute inset-0 bg-noise opacity-[0.02] mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          className="text-center mb-16 lg:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-h2 font-display font-bold text-navy-900 tracking-tight mb-6"
          >
            {title}
          </motion.h2>
          {description && (
            <motion.p
              variants={itemVariants}
              className="text-lg text-navy-600 max-w-2xl mx-auto leading-relaxed"
            >
              {description}
            </motion.p>
          )}
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-8 lg:gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="w-full lg:w-[calc(50%-1.5rem)] max-w-2xl card-elevated p-8 lg:p-10 relative overflow-hidden group"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[inherit] pointer-events-none"></div>

              <h3 className="text-2xl lg:text-3xl font-display font-bold text-navy-900 mb-8 border-b border-navy-100 pb-6">
                {plan.title}
              </h3>

              <ul className="space-y-5">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-navy-50 text-accent">
                        <Check className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="text-navy-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: feature }} />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {conclusion && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.p
              variants={itemVariants}
              className="text-base lg:text-lg text-navy-600 max-w-3xl mx-auto text-center leading-relaxed"
            >
              {conclusion}
            </motion.p>
          </motion.div>
        )}
      </div>
    </section>
  );
};
