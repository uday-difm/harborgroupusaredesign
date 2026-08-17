"use client";

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Globe, FileText, UserCheck, SlidersHorizontal, ShieldCheck, CheckCircle2 } from 'lucide-react';

const DEFAULT_STEPS = [
  {
    title: "Choose the Category on Website",
    description: "Navigate our user-friendly website to explore the variety of plans we offer, choose the category",
    icon: Globe
  },
  {
    title: "Fill out the Form",
    description: "Complete the quick online form to submit your request for a customized plan quote",
    icon: FileText
  },
  {
    title: "Get Expert Guidance",
    description: "Receive expert advice from our agent and get a personalized quote tailored to your needs",
    icon: UserCheck
  },
  {
    title: "Compare and Choose",
    description: "Find the ideal fit for your budget with flexible pricing and Enrollment options, supported by our agents",
    icon: SlidersHorizontal
  },
  {
    title: "Verification Process",
    description: "After selecting your subscription plan, complete a quick verification process to ensure eligibility",
    icon: ShieldCheck
  },
  {
    title: "Confirmation of Enrollment",
    description: "Receive prompt confirmation of your enrollment along with detailed plan information",
    icon: CheckCircle2
  }
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
};

export const PlanHowToApply = ({
  title = "How to Apply",
  description = "At Harbor Group USA, getting the coverage you need is a straightforward process. Follow these simple steps.",
  steps = []
}) => {
  const displaySteps = steps && steps.length > 0 ? steps : DEFAULT_STEPS;
  const isThreeSteps = displaySteps.length === 3;
  const prefersReduced = useReducedMotion();

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 28 },
    show: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.62,
        delay: prefersReduced ? 0 : 0.28 + index * 0.15,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section className="py-20 md:py-28 bg-navy-900 font-body relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay pointer-events-none"></div>

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
          className={`grid grid-cols-1 ${isThreeSteps ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-3'} gap-10 md:gap-8 lg:gap-12 relative`}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
        >
          {/* Animated progress connector for 3-step row */}
          {isThreeSteps && (
            <>
              <div className="hidden md:block absolute top-12 left-[16.67%] right-[16.67%] h-px bg-navy-700/80" />
              <motion.div
                className="hidden md:block absolute top-12 left-[16.67%] right-[16.67%] h-[2px] origin-left bg-[linear-gradient(90deg,var(--color-accent)_0%,rgba(201,162,75,0.2)_50%,var(--color-accent)_100%)] bg-[length:200%_100%]"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: prefersReduced ? 0 : 1.25, delay: prefersReduced ? 0 : 0.18, ease: [0.16, 1, 0.3, 1] }}
                animate={prefersReduced ? {} : { backgroundPosition: ["100% 0%", "-100% 0%"] }}
                style={{ animationDuration: "3s", animationIterationCount: "infinite", animationTimingFunction: "linear" }}
              />

              <motion.div
                className="md:hidden absolute top-12 bottom-12 left-1/2 w-px -translate-x-1/2 bg-[linear-gradient(180deg,var(--color-accent)_0%,rgba(201,162,75,0.2)_50%,var(--color-accent)_100%)] bg-[length:100%_200%]"
                initial={{ scaleY: 0, opacity: 0 }}
                whileInView={{ scaleY: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: prefersReduced ? 0 : 1.15, ease: [0.16, 1, 0.3, 1] }}
                animate={prefersReduced ? {} : { backgroundPosition: ["0% 100%", "0% -100%"] }}
                style={{ animationDuration: "3s", animationIterationCount: "infinite", animationTimingFunction: "linear" }}
              />
            </>
          )}
          
          {displaySteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={index}
                variants={stepVariants}
                custom={index}
                className="relative flex flex-col items-center text-center"
              >
                <motion.div
                  className="relative z-10 w-24 h-24 rounded-full bg-navy-800 border-4 border-navy-900 flex items-center justify-center text-accent mb-7 shadow-[0_0_20px_rgba(201,162,75,0.15)]"
                  initial={{ scale: prefersReduced ? 1 : 0.72, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: prefersReduced ? 0 : 0.58, delay: prefersReduced ? 0 : 0.3 + index * 0.22, ease: [0.34, 1.56, 0.64, 1] }}
                  whileHover={prefersReduced ? undefined : { 
                    scale: 1.07, 
                    backgroundColor: '#131E49', 
                    boxShadow: '0 0 30px rgba(201,162,75,0.3)',
                    transition: { duration: 0.2, delay: 0, ease: "easeOut" }
                  }}
                >
                  <motion.span 
                    className="absolute inset-1 rounded-full border border-accent/30"
                    animate={prefersReduced ? {} : { rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.span 
                    className="absolute inset-[-8px] rounded-full border border-accent/20 border-dashed"
                    animate={prefersReduced ? {} : { rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.span 
                    className="absolute inset-[-16px] rounded-full bg-accent/5"
                    animate={prefersReduced ? {} : { scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                  />
                  {Icon ? <Icon className="relative z-10 w-10 h-10" /> : <span className="relative z-10 text-3xl font-display font-bold">{index + 1}</span>}
                </motion.div>
                <span className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-accent">Step {index + 1}</span>
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
