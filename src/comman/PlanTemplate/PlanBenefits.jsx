"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { HarborArc } from '@/comman/HarborArc';
import { useParallax } from '@/comman/motion/useParallax';
import { useTilt } from '@/comman/motion/useTilt';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
};

export const PlanBenefits = ({
  title,
  description,
  benefitsList,
  imageSrc,
  imageAlt = "Benefits",
  reverse = false
}) => {
  const prefersReduced = useReducedMotion();
  const arcParallax = useParallax(15);
  const imageTilt = useTilt(3);

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative py-20 lg:py-32 bg-surface-alt overflow-hidden font-body">
      {/* Decorative Atmosphere */}
      <div ref={arcParallax.ref}>
        <HarborArc position={reverse ? "topRight" : "topLeft"} className="text-navy-200 opacity-20 scale-125" parallaxY={arcParallax.y} />
      </div>
      <div className="absolute inset-0 bg-noise opacity-[0.02] mix-blend-overlay pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Image Side */}
          <motion.div variants={itemVariants} className="w-full lg:w-1/2 relative">
            <div 
              className="relative w-full aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-navy-100/60"
              ref={imageTilt.ref}
              style={{ ...imageTilt.style }}
              onMouseMove={imageTilt.handleMouseMove}
              onMouseLeave={imageTilt.handleMouseLeave}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                layout="fill"
                objectFit="cover"
                className="scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent pointer-events-none"></div>
            </div>
            
            {/* Ambient Glow behind image */}
            <div className="absolute inset-0 bg-accent/20 blur-3xl -z-10 rounded-full scale-90 translate-y-8"></div>
          </motion.div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.h2 
              variants={itemVariants}
              className="text-h2 font-display font-bold text-navy-800 leading-tight mb-6"
            >
              {title}
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-navy-600 leading-relaxed mb-10"
            >
              {description}
            </motion.p>
            
            <div className="space-y-4">
              {benefitsList.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-accent" />
                  </div>
                  <p className="text-base text-navy-700 font-medium leading-relaxed">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
