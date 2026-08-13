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
    <section className="py-20 md:py-28 bg-surface font-body overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-24 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
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
          className="flex flex-wrap justify-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`w-full sm:w-[calc(50%-1rem)] ${features.length === 4 ? 'lg:w-[calc(25%-1.5rem)]' : (features.length === 2 ? 'lg:w-[calc(50%-1rem)]' : 'lg:w-[calc(33.333%-1.5rem)]')} max-w-sm lg:max-w-none card-elevated p-8 flex flex-col justify-start transition-[border-color,box-shadow,color,background-color] shadow-sm duration-300 group`}
              >
                {Icon && (
                  <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
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
      </div>
    </section>
  );
};
