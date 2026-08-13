"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { useTilt } from '@/common/motion/useTilt';
import { Breadcrumbs } from '@/common/Breadcrumbs';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
};

export const PlanHero = ({
  title,
  description,
  imageSrc,
  imageAlt = "Plan Background",
  formComponent = null,
  breadcrumbs = []
}) => {
  const prefersReduced = useReducedMotion();
  const imageTilt = useTilt(3);

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col lg:flex-row bg-surface overflow-hidden">
      {/* Split Screen Var A: Left Side Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="lg:w-1/2 w-full relative h-[40vh] lg:h-auto img-duotone origin-left"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          priority
          className="scale-105"
        />
        <div className="absolute inset-0 bg-navy-900/10 mix-blend-multiply pointer-events-none"></div>
      </motion.div>

      {/* Right Side Content & Form */}
      <div className="lg:w-1/2 w-full flex items-center justify-center p-6 lg:p-16 relative">
        <motion.div
          className="w-full max-w-xl z-10 space-y-10"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Text Section */}
          <div className="relative z-10">
            {breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} variant="light" />}
            <motion.h1
              variants={itemVariants}
              className="text-h1 font-display font-bold text-navy-800 leading-tight mb-4"
            >
              {title}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg text-navy-500 leading-relaxed text-justify"
            >
              {description}
            </motion.p>
          </div>

          {/* Form Section */}
          {formComponent && (
            <motion.div
              variants={itemVariants}
              className="card-elevated p-8 relative overflow-hidden"
              ref={imageTilt.ref}
              style={{ ...imageTilt.style }}
              onMouseMove={imageTilt.handleMouseMove}
              onMouseLeave={imageTilt.handleMouseLeave}
            >
              {/* Subtle noise in form card */}
              <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
              <div className="relative z-10">
                {formComponent}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
