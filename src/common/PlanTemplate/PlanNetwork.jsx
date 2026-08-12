"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { staggerContainer, fadeUp } from '@/common/motion/variants';

export const PlanNetwork = ({
  eyebrow = "Know about Our Network",
  title = "Network",
  description,
  features = [],
  imageSrc,
  imageAlt = "Network image"
}) => {
  const prefersReduced = useReducedMotion();

  return (
    <section className="section-dark py-20 md:py-28 overflow-hidden border-t border-navy-700">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
          variants={staggerContainer()}
          initial={prefersReduced ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          
          {/* --- Left Column: Text Content --- */}
          <div className="flex flex-col justify-center">
            {eyebrow && (
              <motion.p variants={fadeUp} className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
                {eyebrow}
              </motion.p>
            )}
            <motion.h2 variants={fadeUp} className="text-h2 font-display font-bold text-white tracking-tight mb-6">
              {title}
            </motion.h2>
            {description && (
              <motion.p variants={fadeUp} className="text-lg text-navy-200 leading-relaxed mb-12">
                {description}
              </motion.p>
            )}
            
            {/* Benefits List */}
            <div className="space-y-8">
              {features.map((feature, index) => {
                const Icon = feature.icon || CheckCircle2;
                return (
                  <motion.div 
                    key={index}
                    variants={fadeUp}
                    className="group flex items-start space-x-5"
                  >
                    <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-navy-700/50 border border-navy-600 text-accent transition-all duration-300 group-hover:bg-accent group-hover:border-accent group-hover:text-white group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-accent/20">
                      <Icon className="w-7 h-7" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors">
                        {feature.title}
                      </h3>
                      {feature.description && (
                        <p className="mt-1 text-base text-navy-200 leading-relaxed">
                          {feature.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* --- Right Column: Image Composition --- */}
          {imageSrc && (
            <motion.div variants={fadeUp} className="relative h-[400px] lg:h-[600px]">
              <div className="relative w-full h-full">
                  {/* Background Shapes */}
                  <div className="absolute -bottom-6 -left-6 w-full h-full bg-navy-800 rounded-2xl border border-navy-700"></div>
                  
                  {/* Image */}
                  <div className="absolute inset-0 z-10 img-duotone rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                          src={imageSrc}
                          alt={imageAlt}
                          className="w-full h-full object-cover"
                          width={800}
                          height={1200}
                      />
                  </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
