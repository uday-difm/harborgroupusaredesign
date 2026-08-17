"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayeredStacksIllustration } from '@/common/illustrations/LayeredStacksIllustration';
import { CheckCircle2, ShieldCheck, Stethoscope, Pill, Info } from 'lucide-react';

export const MajorMedicalPlanSummaries = () => {
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
        details: [
          { label: 'Network', text: 'Available in all 50 states.', icon: <ShieldCheck className="w-5 h-5 text-accent" /> },
          { label: 'Deductibles and Out-of-Pocket Costs', text: 'Individual deductible of $6,000, family deductible of $12,000. Individual max out of pocket $9,450, family max out of pocket $18,900.', icon: <Info className="w-5 h-5 text-accent" /> },
          { label: 'Coverage', text: 'Preventive care covered 100%, primary care copay $30, specialist care copay $60, urgent care $60, and so on.', icon: <Stethoscope className="w-5 h-5 text-accent" /> },
          { label: 'Prescription Drug Benefits', text: 'Generic $15, preferred brand $65, non-preferred brand $100.', icon: <Pill className="w-5 h-5 text-accent" /> },
          { label: 'Additional details', text: 'Additional details about laboratory, radiology services, emergency room, inpatient, and outpatient services.', icon: <CheckCircle2 className="w-5 h-5 text-accent" /> },
        ],
      },
      {
        name: 'Ultra 3000',
        details: [
          { label: 'Network', text: 'Available in all 50 states.', icon: <ShieldCheck className="w-5 h-5 text-accent" /> },
          { label: 'Deductibles and Out-of-Pocket Costs', text: 'Individual deductible of $3,000, family deductible of $6,000. Individual max out of pocket $9,450, family max out of pocket $18,900.', icon: <Info className="w-5 h-5 text-accent" /> },
          { label: 'Coverage', text: 'Preventive care covered 100%, primary care copay $30, specialist care copay $60, urgent care $60, and so on.', icon: <Stethoscope className="w-5 h-5 text-accent" /> },
          { label: 'Prescription Drug Benefits', text: 'Generic $15, preferred brand $65, non-preferred brand $100.', icon: <Pill className="w-5 h-5 text-accent" /> },
          { label: 'Additional details', text: 'Additional details about laboratory, radiology services, emergency room, inpatient, and outpatient services.', icon: <CheckCircle2 className="w-5 h-5 text-accent" /> },
        ],
      },
      {
        name: 'Ultra 1000',
        details: [
          { label: 'Network', text: 'Available in all 50 states.', icon: <ShieldCheck className="w-5 h-5 text-accent" /> },
          { label: 'Deductibles and Out-of-Pocket Costs', text: 'Individual deductible of $1,000 family deductible of $2,000. Individual max out of pocket $5,000, family max out of pocket $10,000.', icon: <Info className="w-5 h-5 text-accent" /> },
          { label: 'Coverage', text: 'Preventive care covered 100%, primary care copay $20, specialist care copay $40, urgent care $40, and so on.', icon: <Stethoscope className="w-5 h-5 text-accent" /> },
          { label: 'Prescription Drug Benefits', text: 'Generic $15, preferred brand $65, non-preferred brand $85.', icon: <Pill className="w-5 h-5 text-accent" /> },
          { label: 'Additional details', text: 'Additional details about laboratory, radiology services, emergency room, inpatient, and outpatient services.', icon: <CheckCircle2 className="w-5 h-5 text-accent" /> },
        ],
      },
    ],
    phcs: [
      {
        name: 'Ultra 6000',
        details: [
          { label: 'Network', text: 'Available in all 50 states.', icon: <ShieldCheck className="w-5 h-5 text-accent" /> },
          { label: 'Deductibles and Out-of-Pocket Costs', text: 'Individual deductible of $6,000, family deductible of $12,000. Individual max out of pocket $9,450, family max out of pocket $18,900.', icon: <Info className="w-5 h-5 text-accent" /> },
          { label: 'Coverage', text: 'Preventive care covered 100%, primary care copay $30, specialist care copay $60, urgent care $60, and so on.', icon: <Stethoscope className="w-5 h-5 text-accent" /> },
          { label: 'Prescription Drug Benefits', text: 'Generic $15, preferred brand $65, non-preferred brand $100.', icon: <Pill className="w-5 h-5 text-accent" /> },
          { label: 'Additional details', text: 'Additional details about laboratory, radiology services, emergency room, inpatient, and outpatient services.', icon: <CheckCircle2 className="w-5 h-5 text-accent" /> },
        ],
      },
      {
        name: 'Ultra 3000',
        details: [
          { label: 'Network', text: 'Available in all 50 states.', icon: <ShieldCheck className="w-5 h-5 text-accent" /> },
          { label: 'Deductibles and Out-of-Pocket Costs', text: 'Individual deductible of $3,000, family deductible of $6,000. Individual max out of pocket $9,450, family max out of pocket $18,900.', icon: <Info className="w-5 h-5 text-accent" /> },
          { label: 'Coverage', text: 'Preventive care covered 100%, primary care copay $30, specialist care copay $60, urgent care $60, and so on.', icon: <Stethoscope className="w-5 h-5 text-accent" /> },
          { label: 'Prescription Drug Benefits', text: 'Generic $15, preferred brand $65, non-preferred brand $100.', icon: <Pill className="w-5 h-5 text-accent" /> },
          { label: 'Additional details', text: 'Additional details about laboratory, radiology services, emergency room, inpatient, and outpatient services.', icon: <CheckCircle2 className="w-5 h-5 text-accent" /> },
        ],
      },
      {
        name: 'Ultra 1000',
        details: [
          { label: 'Network', text: 'Available in all 50 states.', icon: <ShieldCheck className="w-5 h-5 text-accent" /> },
          { label: 'Deductibles and Out-of-Pocket Costs', text: 'Individual deductible of $1,000 family deductible of $2,000. Individual max out of pocket $5,000, family max out of pocket $10,000.', icon: <Info className="w-5 h-5 text-accent" /> },
          { label: 'Coverage', text: 'Preventive care covered 100%, primary care copay $20, specialist care copay $40, urgent care $40, and so on.', icon: <Stethoscope className="w-5 h-5 text-accent" /> },
          { label: 'Prescription Drug Benefits', text: 'Generic $15, preferred brand $65, non-preferred brand $85.', icon: <Pill className="w-5 h-5 text-accent" /> },
          { label: 'Additional details', text: 'Additional details about laboratory, radiology services, emergency room, inpatient, and outpatient services.', icon: <CheckCircle2 className="w-5 h-5 text-accent" /> },
        ],
      },
    ],
    qualcare: [
      {
        name: 'Ultra 6000',
        details: [
          { label: 'Network', text: 'Available in all 50 states.', icon: <ShieldCheck className="w-5 h-5 text-accent" /> },
          { label: 'Deductibles and Out-of-Pocket Costs', text: 'Individual deductible of $6,000, family deductible of $12,000. Individual max out of pocket $9,450, family max out of pocket $18,900.', icon: <Info className="w-5 h-5 text-accent" /> },
          { label: 'Coverage', text: 'Preventive care covered 100%, primary care copay $30, specialist care copay $60, urgent care $60, and so on.', icon: <Stethoscope className="w-5 h-5 text-accent" /> },
          { label: 'Prescription Drug Benefits', text: 'Generic $15, preferred brand $65, non-preferred brand $100.', icon: <Pill className="w-5 h-5 text-accent" /> },
          { label: 'Additional details', text: 'Additional details about laboratory, radiology services, emergency room, inpatient, and outpatient services.', icon: <CheckCircle2 className="w-5 h-5 text-accent" /> },
        ],
      },
      {
        name: 'Ultra 3000',
        details: [
          { label: 'Network', text: 'Available in all 50 states.', icon: <ShieldCheck className="w-5 h-5 text-accent" /> },
          { label: 'Deductibles and Out-of-Pocket Costs', text: 'Individual deductible of $3,000, family deductible of $6,000. Individual max out of pocket $9,450, family max out of pocket $18,900.', icon: <Info className="w-5 h-5 text-accent" /> },
          { label: 'Coverage', text: 'Preventive care covered 100%, primary care copay $30, specialist care copay $60, urgent care $60, and so on.', icon: <Stethoscope className="w-5 h-5 text-accent" /> },
          { label: 'Prescription Drug Benefits', text: 'Generic $15, preferred brand $65, non-preferred brand $100.', icon: <Pill className="w-5 h-5 text-accent" /> },
          { label: 'Additional details', text: 'Additional details about laboratory, radiology services, emergency room, inpatient, and outpatient services.', icon: <CheckCircle2 className="w-5 h-5 text-accent" /> },
        ],
      },
      {
        name: 'Ultra 1000',
        details: [
          { label: 'Network', text: 'Available in all 50 states.', icon: <ShieldCheck className="w-5 h-5 text-accent" /> },
          { label: 'Deductibles and Out-of-Pocket Costs', text: 'Individual deductible of $1,000 family deductible of $2,000. Individual max out of pocket $5,000, family max out of pocket $10,000.', icon: <Info className="w-5 h-5 text-accent" /> },
          { label: 'Coverage', text: 'Preventive care covered 100%, primary care copay $20, specialist care copay $40, urgent care $90, and so on.', icon: <Stethoscope className="w-5 h-5 text-accent" /> },
          { label: 'Prescription Drug Benefits', text: 'Generic $15, preferred brand $65, non-preferred brand $85.', icon: <Pill className="w-5 h-5 text-accent" /> },
          { label: 'Additional details', text: 'Additional details about laboratory, radiology services, emergency room, inpatient, and outpatient services.', icon: <CheckCircle2 className="w-5 h-5 text-accent" /> },
        ],
      },
    ],
  };

  const currentPlans = planSummariesByNetwork[activeTab] || planSummariesByNetwork.cigna;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="section-light py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 relative">
          <LayeredStacksIllustration className="absolute -top-6 right-0 w-24 h-24 text-accent opacity-15 pointer-events-none hidden md:block" />
          <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">Plan Options</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-900 tracking-tight mb-6">
            Detailed Plan Summaries
          </h2>
          <p className="text-lg text-navy-600 leading-relaxed">
            Review the high-level details of our three core Ultra plans before exploring the specific network tables below.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-7 py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300 ${
                activeTab === tab.id 
                  ? 'bg-navy-950 text-white shadow-lg shadow-navy-950/25 scale-[1.02]' 
                  : 'bg-white text-navy-800 border border-navy-200 hover:border-accent hover:text-accent shadow-sm'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Plan Cards */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
          >
            {currentPlans.map((plan, index) => (
              <motion.div key={`${activeTab}-${index}`} variants={itemVariants} className="h-full">
                <div className="card-elevated bg-white p-8 flex flex-col h-full border-t-4 border-accent transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <h3 className="text-2xl font-bold text-navy-900 mb-8 text-center font-display">
                    {plan.name}
                  </h3>
                  <div className="space-y-6 flex-grow">
                    {plan.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start">
                        <div className="flex-shrink-0 mt-0.5 w-8 flex justify-center">
                          {detail.icon}
                        </div>
                        <div>
                          <div className="font-bold text-navy-900 text-sm mb-1">{detail.label}</div>
                          <div className="text-navy-600 text-sm leading-relaxed">{detail.text}</div>
                        </div>
                      </div>
                    ))}
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

