"use client";
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { BenefitsShieldIllustration } from '@/common/illustrations/BenefitsShieldIllustration';
import { staggerContainer, fadeUp } from '@/common/motion/variants';

export const BenefitsofHospitalPlan = () => {
     const prefersReduced = useReducedMotion();
     const blueGradient = (id) => (
    <defs>
      <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: 'var(--color-navy-200)', stopOpacity: 1}} /> {/* Tailwind sky-300 */}
        <stop offset="100%" style={{stopColor: 'var(--color-navy-400)', stopOpacity: 1}} /> {/* Changed from teal/cyan to Tailwind sky-400 */}
      </linearGradient>
    </defs>
  );
  return (
    <>
     <section className="w-full bg-navy-50 py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center relative">
          <BenefitsShieldIllustration className="absolute -top-6 right-0 w-24 h-24 text-accent opacity-15 pointer-events-none hidden md:block" />
          <h2 className="text-4xl font-extrabold text-navy-800 mb-4 ">
           Benefits of Hospital Plan
          </h2>
          <p className="text-lg text-navy-500 mb-12 max-w-3xl mx-auto">
        At Harbor Group USA, we understand the significance of dedicated hospitalization coverage. Our Hospital Plans offer straightforward benefits to ease the burden of hospital expenses.
          </p>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 text-left"
            variants={staggerContainer()}
            initial={prefersReduced ? "show" : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Benefit 1 */}
            <motion.div variants={fadeUp} className="flex items-start text-gray-700">
              <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="url(#blueGradientBenefit1)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {blueGradient("blueGradientBenefit1")}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>We offer hostipal plans tailored to cover a spectrum of hospitalization expenses, including room charges, surgeries, and more</span>
            </motion.div>

            {/* Benefit 2 */}
            <motion.div variants={fadeUp} className="flex items-start text-gray-700">
              <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="url(#blueGradientBenefit2)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {blueGradient("blueGradientBenefit2")}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Ensure comprehensive financial coverage to support you during your hospital stay</span>
            </motion.div>

            {/* Benefit 3 */}
            <motion.div variants={fadeUp} className="flex items-start text-gray-700">
              <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="url(#blueGradientBenefit3)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {blueGradient("blueGradientBenefit3")}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Benefit from a straightforward claims process designed for ease during stressful situations</span>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
