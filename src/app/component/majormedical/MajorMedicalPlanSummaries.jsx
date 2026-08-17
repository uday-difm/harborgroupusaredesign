"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Stethoscope, Pill, Info } from 'lucide-react';

export const MajorMedicalPlanSummaries = () => {
  const prefersReduced = useReducedMotion();
  const [activeTab, setActiveTab] = useState('cigna');

  const tabs = [
    { id: 'cigna', name: 'Cigna Plans' },
    { id: 'phcs', name: 'PHCS Plans' },
    { id: 'qualcare', name: 'Qualcare Plans' },
  ];

  const planSummariesByNetwork = {
    cigna: [
      {
        name: 'Ultra 6000',
        tag: 'Essential Value',
        popular: false,
        description: 'Lower monthly payments with robust protection for major unexpected medical expenses.',
        details: [
          { label: 'Network Coverage', text: 'Available in all 50 states nationwide.', icon: ShieldCheck },
          { label: 'Deductibles & Out-of-Pocket', text: 'Individual deductible: $6,000 | Family: $12,000. Individual max out-of-pocket: $9,450 | Family: $18,900.', icon: Info },
          { label: 'Routine & Specialist Care', text: 'Preventive care 100% covered. Primary care copay $30, specialist copay $60, urgent care $60.', icon: Stethoscope },
          { label: 'Prescription Drug Benefits', text: 'Generic $15, preferred brand $65, non-preferred brand $100.', icon: Pill },
          { label: 'Facility & Inpatient Services', text: 'Comprehensive coverage for lab work, radiology, emergency room, inpatient, and outpatient services.', icon: CheckCircle2 },
        ],
      },
      {
        name: 'Ultra 3000',
        tag: 'Balanced Choice',
        popular: true,
        description: 'Moderate deductibles paired with extensive everyday coverage and preventive health benefits.',
        details: [
          { label: 'Network Coverage', text: 'Available in all 50 states nationwide.', icon: ShieldCheck },
          { label: 'Deductibles & Out-of-Pocket', text: 'Individual deductible: $3,000 | Family: $6,000. Individual max out-of-pocket: $9,450 | Family: $18,900.', icon: Info },
          { label: 'Routine & Specialist Care', text: 'Preventive care 100% covered. Primary care copay $30, specialist copay $60, urgent care $60.', icon: Stethoscope },
          { label: 'Prescription Drug Benefits', text: 'Generic $15, preferred brand $65, non-preferred brand $100.', icon: Pill },
          { label: 'Facility & Inpatient Services', text: 'Comprehensive coverage for lab work, radiology, emergency room, inpatient, and outpatient services.', icon: CheckCircle2 },
        ],
      },
      {
        name: 'Ultra 1000',
        tag: 'Maximum Protection',
        popular: false,
        description: 'Lowest out-of-pocket costs with highest coinsurance coverage for frequent care needs.',
        details: [
          { label: 'Network Coverage', text: 'Available in all 50 states nationwide.', icon: ShieldCheck },
          { label: 'Deductibles & Out-of-Pocket', text: 'Individual deductible: $1,000 | Family: $2,000. Individual max out-of-pocket: $5,000 | Family: $10,000.', icon: Info },
          { label: 'Routine & Specialist Care', text: 'Preventive care 100% covered. Primary care copay $20, specialist copay $40, urgent care $40.', icon: Stethoscope },
          { label: 'Prescription Drug Benefits', text: 'Generic $15, preferred brand $65, non-preferred brand $85.', icon: Pill },
          { label: 'Facility & Inpatient Services', text: 'Comprehensive coverage for lab work, radiology, emergency room, inpatient, and outpatient services.', icon: CheckCircle2 },
        ],
      },
    ],
    phcs: [
      {
        name: 'Ultra 6000',
        tag: 'Essential Value',
        popular: false,
        description: 'Lower monthly payments with robust protection for major unexpected medical expenses.',
        details: [
          { label: 'Network Coverage', text: 'Available in 49 states (Not available in New Jersey).', icon: ShieldCheck },
          { label: 'Deductibles & Out-of-Pocket', text: 'Individual deductible: $6,000 | Family: $12,000. Individual max out-of-pocket: $9,450 | Family: $18,900.', icon: Info },
          { label: 'Routine & Specialist Care', text: 'Preventive care 100% covered. Primary care copay $30, specialist copay $60, urgent care $60.', icon: Stethoscope },
          { label: 'Prescription Drug Benefits', text: 'Generic $15, preferred brand $65, non-preferred brand $100.', icon: Pill },
          { label: 'Facility & Inpatient Services', text: 'Comprehensive coverage for lab work, radiology, emergency room, inpatient, and outpatient services.', icon: CheckCircle2 },
        ],
      },
      {
        name: 'Ultra 3000',
        tag: 'Balanced Choice',
        popular: true,
        description: 'Moderate deductibles paired with extensive everyday coverage and preventive health benefits.',
        details: [
          { label: 'Network Coverage', text: 'Available in 49 states (Not available in New Jersey).', icon: ShieldCheck },
          { label: 'Deductibles & Out-of-Pocket', text: 'Individual deductible: $3,000 | Family: $6,000. Individual max out-of-pocket: $9,450 | Family: $18,900.', icon: Info },
          { label: 'Routine & Specialist Care', text: 'Preventive care 100% covered. Primary care copay $30, specialist copay $60, urgent care $60.', icon: Stethoscope },
          { label: 'Prescription Drug Benefits', text: 'Generic $15, preferred brand $65, non-preferred brand $100.', icon: Pill },
          { label: 'Facility & Inpatient Services', text: 'Comprehensive coverage for lab work, radiology, emergency room, inpatient, and outpatient services.', icon: CheckCircle2 },
        ],
      },
      {
        name: 'Ultra 1000',
        tag: 'Maximum Protection',
        popular: false,
        description: 'Lowest out-of-pocket costs with highest coinsurance coverage for frequent care needs.',
        details: [
          { label: 'Network Coverage', text: 'Available in 49 states (Not available in New Jersey).', icon: ShieldCheck },
          { label: 'Deductibles & Out-of-Pocket', text: 'Individual deductible: $1,000 | Family: $2,000. Individual max out-of-pocket: $5,000 | Family: $10,000.', icon: Info },
          { label: 'Routine & Specialist Care', text: 'Preventive care 100% covered. Primary care copay $20, specialist copay $40, urgent care $40.', icon: Stethoscope },
          { label: 'Prescription Drug Benefits', text: 'Generic $15, preferred brand $65, non-preferred brand $85.', icon: Pill },
          { label: 'Facility & Inpatient Services', text: 'Comprehensive coverage for lab work, radiology, emergency room, inpatient, and outpatient services.', icon: CheckCircle2 },
        ],
      },
    ],
    qualcare: [
      {
        name: 'Ultra 6000',
        tag: 'Essential Value',
        popular: false,
        description: 'Lower monthly payments with robust protection for major unexpected medical expenses.',
        details: [
          { label: 'Network Coverage', text: 'New Jersey Residents Only.', icon: ShieldCheck },
          { label: 'Deductibles & Out-of-Pocket', text: 'Individual deductible: $6,000 | Family: $12,000. Individual max out-of-pocket: $9,450 | Family: $18,900.', icon: Info },
          { label: 'Routine & Specialist Care', text: 'Preventive care 100% covered. Primary care copay $30, specialist copay $60, urgent care $60.', icon: Stethoscope },
          { label: 'Prescription Drug Benefits', text: 'Generic $15, preferred brand $65, non-preferred brand $100.', icon: Pill },
          { label: 'Facility & Inpatient Services', text: 'Comprehensive coverage for lab work, radiology, emergency room, inpatient, and outpatient services.', icon: CheckCircle2 },
        ],
      },
      {
        name: 'Ultra 3000',
        tag: 'Balanced Choice',
        popular: true,
        description: 'Moderate deductibles paired with extensive everyday coverage and preventive health benefits.',
        details: [
          { label: 'Network Coverage', text: 'New Jersey Residents Only.', icon: ShieldCheck },
          { label: 'Deductibles & Out-of-Pocket', text: 'Individual deductible: $3,000 | Family: $6,000. Individual max out-of-pocket: $9,450 | Family: $18,900.', icon: Info },
          { label: 'Routine & Specialist Care', text: 'Preventive care 100% covered. Primary care copay $30, specialist copay $60, urgent care $60.', icon: Stethoscope },
          { label: 'Prescription Drug Benefits', text: 'Generic $15, preferred brand $65, non-preferred brand $100.', icon: Pill },
          { label: 'Facility & Inpatient Services', text: 'Comprehensive coverage for lab work, radiology, emergency room, inpatient, and outpatient services.', icon: CheckCircle2 },
        ],
      },
      {
        name: 'Ultra 1000',
        tag: 'Maximum Protection',
        popular: false,
        description: 'Lowest out-of-pocket costs with highest coinsurance coverage for frequent care needs.',
        details: [
          { label: 'Network Coverage', text: 'New Jersey Residents Only.', icon: ShieldCheck },
          { label: 'Deductibles & Out-of-Pocket', text: 'Individual deductible: $1,000 | Family: $2,000. Individual max out-of-pocket: $5,000 | Family: $10,000.', icon: Info },
          { label: 'Routine & Specialist Care', text: 'Preventive care 100% covered. Primary care copay $20, specialist copay $40, urgent care $90.', icon: Stethoscope },
          { label: 'Prescription Drug Benefits', text: 'Generic $15, preferred brand $65, non-preferred brand $85.', icon: Pill },
          { label: 'Facility & Inpatient Services', text: 'Comprehensive coverage for lab work, radiology, emergency room, inpatient, and outpatient services.', icon: CheckCircle2 },
        ],
      },
    ],
  };

  const currentPlans = planSummariesByNetwork[activeTab] || planSummariesByNetwork.cigna;

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="py-20 md:py-28 bg-surface font-body overflow-hidden relative border-t border-navy-100/50">
      <div className="absolute inset-0 bg-noise opacity-[0.02] mix-blend-overlay pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.span 
            variants={itemVariants} 
            className="text-xs font-bold text-accent uppercase tracking-widest block mb-4"
          >
            Plan Options
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="text-h2 font-display font-bold text-navy-900 tracking-tight mb-6"
          >
            Detailed Plan Summaries
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-navy-600 leading-relaxed"
          >
            Review the key features and coverage details of our three core Ultra major medical plans to find the right fit for your healthcare needs.
          </motion.p>
        </motion.div>

        {/* Network Tab Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-7 py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300 ${
                activeTab === tab.id 
                  ? 'bg-navy-900 text-white shadow-lg shadow-navy-900/25 scale-105' 
                  : 'bg-white text-navy-600 border border-navy-200 hover:border-accent hover:text-accent shadow-sm'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Plan Cards Grid with Animation */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
          >
            {currentPlans.map((plan, index) => (
              <motion.div key={`${activeTab}-${index}`} variants={itemVariants} className="h-full flex">
                <div className={`card-elevated p-6 lg:p-8 flex flex-col justify-between h-full w-full relative group hover:-translate-y-2 transition-transform duration-500 ease-out ${
                  plan.popular ? 'ring-2 ring-accent/30 shadow-lg' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-accent text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                      Most Popular
                    </div>
                  )}

                  <div>
                    <div className="mb-6 border-b border-navy-100 pb-6">
                      <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">
                        {plan.tag}
                      </span>
                      <h3 className="text-2xl lg:text-3xl font-bold text-navy-900 font-display mb-3">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-navy-600 leading-relaxed">
                        {plan.description}
                      </p>
                    </div>

                    <div className="space-y-5">
                      {plan.details.map((detail, detailIndex) => {
                        const Icon = detail.icon;
                        return (
                          <div key={detailIndex} className="flex items-start gap-4">
                            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-navy-50 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                              <Icon className="w-5 h-5" strokeWidth={1.75} />
                            </div>
                            <div className="flex-1">
                              <div className="font-bold text-navy-900 text-sm mb-1 font-display">
                                {detail.label}
                              </div>
                              <div className="text-navy-600 text-sm leading-relaxed">
                                {detail.text}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-navy-100">
                    <a
                      href="#major-medical-plan-form"
                      className="btn-accent w-full py-3 text-sm text-center block rounded-xl font-bold tracking-wide transition-all"
                    >
                      Request Info on {plan.name}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MajorMedicalPlanSummaries;
