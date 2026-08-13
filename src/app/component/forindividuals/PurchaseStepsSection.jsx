"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { StepsPathIllustration } from '@/common/illustrations/StepsPathIllustration';
import { Globe, ArrowRightLeft, MousePointerClick, PhoneCall, ShieldCheck, CheckCircle } from 'lucide-react';

export const PurchaseStepsSection = () => {
  const steps = [
    {
      title: "Visit Our Website",
      description: "Navigate to our user-friendly website to explore the variety of plans we offer",
      icon: <Globe className="w-8 h-8" strokeWidth={1.5} />
    },
    {
      title: "Compare Plans",
      description: "Review and compare different plans to find the one that aligns with your preferences and budget",
      icon: <ArrowRightLeft className="w-8 h-8" strokeWidth={1.5} />
    },
    {
      title: "Select Your Plan",
      description: "Once you've found the perfect fit, select your plan and proceed to the application",
      icon: <MousePointerClick className="w-8 h-8" strokeWidth={1.5} />
    },
    {
      title: "Contact our Agent",
      description: "Contact our agent through their referred numbers mentioned on our website",
      icon: <PhoneCall className="w-8 h-8" strokeWidth={1.5} />
    },
    {
      title: "Verification Process",
      description: "Expect a swift verification process to ensure accuracy and eligibility",
      icon: <ShieldCheck className="w-8 h-8" strokeWidth={1.5} />
    },
    {
      title: "Confirmation",
      description: "Receive prompt confirmation of your enrollment along with detailed plan information",
      icon: <CheckCircle className="w-8 h-8" strokeWidth={1.5} />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="section-tint py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="w-full px-6 lg:px-12 xl:px-20 2xl:px-32 mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-20 relative">
          <motion.span 
            className="text-xs font-bold text-accent uppercase tracking-widest block mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            How to Get Covered
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy-900 tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.1 }}
          >
            Simple Steps to Health Coverage
          </motion.h2>
          <motion.p 
            className="text-xl text-navy-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.2 }}
          >
            At Harbor Group USA, getting the coverage you need is a straightforward process. Follow these simple steps to purchase your health plan.
          </motion.p>
          <StepsPathIllustration className="w-full max-w-lg mx-auto h-10 text-accent opacity-25 mt-6" />
        </div>

        <motion.div 
          className="relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-accent/0 before:via-accent/30 before:to-accent/0"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group" variants={itemVariants}>
                
                {/* Connector/Number Dot */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-accent text-white card-elevated shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
                  <span className="font-bold font-display text-xl">{index + 1}</span>
                </div>
                
                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white card-elevated border border-navy-100/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                  
                  {/* Decorative background number */}
                  <div className="absolute -right-4 -bottom-6 font-display font-black text-9xl text-navy-50 opacity-50 pointer-events-none select-none">
                    {index + 1}
                  </div>
                  
                  <div className="relative z-10 flex flex-col items-start text-left">
                    <div className="w-14 h-14 rounded-2xl bg-navy-50 text-accent flex items-center justify-center mb-6">
                      {step.icon}
                    </div>
                    <h3 className="font-bold text-navy-900 text-2xl mb-3">{step.title}</h3>
                    <p className="text-navy-600 leading-relaxed text-lg">{step.description}</p>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
