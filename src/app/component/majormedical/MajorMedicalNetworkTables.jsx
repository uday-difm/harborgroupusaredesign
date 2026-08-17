"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const CignaNetworkLogo = () => (
  <div className="flex items-center justify-center">
    <Image src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/cigna.png" alt="Cigna" width={60} height={60} className="object-contain" />
  </div>
);
const PhcsLogo = () => (
  <div className="flex items-center justify-center">
    <Image src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/PHCS-Logo.png" alt="PHCS" width={80} height={30} className="object-contain" />
  </div>
);
const QualcareLogo = () => (
  <div className="flex items-center justify-center">
    <Image src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/QualCare-Logo.png" alt="Qualcare" width={80} height={30} className="object-contain" />
  </div>
);

const renderRadiology = (is1000) => {
  if (is1000) return 'Deductible then 20%';
  return (
    <div className="flex flex-col text-sm">
      <span className="font-bold text-navy-900">Facility:</span>
      <span className="mb-2">30% of plan allowable, deductible does not apply.</span>
      <span className="font-bold text-navy-900">Professional Fees:</span>
      <span>30% after deductible</span>
    </div>
  );
};

export const MajorMedicalNetworkTables = () => {
  const [activeTab, setActiveTab] = useState('cigna');

  const tabs = [
    { id: 'cigna', name: 'Cigna Plans' },
    { id: 'phcs', name: 'PHCS Plans' },
    { id: 'qualcare', name: 'Qualcare Plans' }
  ];

  const getTableData = (networkId) => {
    let networkComponent;
    let availability;

    if (networkId === 'cigna') {
      networkComponent = <CignaNetworkLogo />;
      availability = 'All 50 States';
    } else if (networkId === 'phcs') {
      networkComponent = <PhcsLogo />;
      availability = '49 States (Not available in New Jersey)';
    } else {
      networkComponent = <QualcareLogo />;
      availability = 'New Jersey Residents Only';
    }

    return {
      planNames: ['Ultra 6000', 'Ultra 3000', 'Ultra 1000'],
      sections: [
        {
          title: 'Network Overview',
          rows: [
            { label: 'Network', values: { 'Ultra 6000': networkComponent, 'Ultra 3000': networkComponent, 'Ultra 1000': networkComponent } },
            { label: 'Plan Availability', values: { 'Ultra 6000': availability, 'Ultra 3000': availability, 'Ultra 1000': availability } },
          ],
        },
        {
          title: 'Benefits',
          rows: [
            { label: 'Individual Deductible', values: { 'Ultra 6000': '$6,000', 'Ultra 3000': '$3,000', 'Ultra 1000': '$1,000' } },
            { label: 'Family Deductible', values: { 'Ultra 6000': '$12,000', 'Ultra 3000': '$6,000', 'Ultra 1000': '$2,000' } },
            { label: 'Individual Max Out of Pocket', values: { 'Ultra 6000': '$9,450', 'Ultra 3000': '$9,450', 'Ultra 1000': '$5,000' } },
            { label: 'Family Max Out of Pocket', values: { 'Ultra 6000': '$18,900', 'Ultra 3000': '$18,900', 'Ultra 1000': '$10,000' } },
            { label: 'Coinsurance', values: { 'Ultra 6000': '70%', 'Ultra 3000': '70%', 'Ultra 1000': '80%' } },
            { label: 'Preventive Care', values: { 'Ultra 6000': 'Covered 100%', 'Ultra 3000': 'Covered 100%', 'Ultra 1000': 'Covered 100%' } },
            { label: 'Lifetime Maximum', values: { 'Ultra 6000': 'No Maximum', 'Ultra 3000': 'No Maximum', 'Ultra 1000': 'No Maximum' } },
            { label: 'Primary Care Copay', values: { 'Ultra 6000': '$30', 'Ultra 3000': '$30', 'Ultra 1000': '$20' } },
            { label: 'Specialist Care Copay', values: { 'Ultra 6000': '$60', 'Ultra 3000': '$60', 'Ultra 1000': '$40' } },
            { label: 'Urgent Care', values: { 'Ultra 6000': '$60', 'Ultra 3000': '$60', 'Ultra 1000': networkId === 'qualcare' ? '$90' : '$40' } },
          ],
        },
        {
          title: 'Laboratory',
          rows: [
            { label: 'Diagnostic Test', values: { 'Ultra 6000': '$30 copay/visit', 'Ultra 3000': '$30 copay/visit', 'Ultra 1000': 'Deductible then 20%' } },
          ],
        },
        {
          title: 'Radiology Services',
          rows: [
            {
              label: 'Facility (CT, PET, MRI) up to plan allowance',
              values: {
                'Ultra 6000': renderRadiology(false),
                'Ultra 3000': renderRadiology(false),
                'Ultra 1000': renderRadiology(true)
              }
            },
          ],
        },
        {
          title: 'Facility & Professional Services',
          rows: [
            { label: 'Emergency Room - Professional Fee', values: { 'Ultra 6000': '30% after deductible', 'Ultra 3000': '30% after deductible', 'Ultra 1000': 'Deductible then 20%' } },
            { label: 'Emergency Room - Facility', values: { 'Ultra 6000': '30% of plan allowable, deductible does not apply', 'Ultra 3000': '30% of plan allowable, deductible does not apply', 'Ultra 1000': 'Deductible then 20%' } },
            { label: 'Inpatient Hospital - Physician Fees', values: { 'Ultra 6000': 'Deductible then 30%', 'Ultra 3000': 'Deductible then 30%', 'Ultra 1000': 'Deductible then 20%' } },
            { label: 'Inpatient - Facility', values: { 'Ultra 6000': 'Deductible then 30%', 'Ultra 3000': 'Deductible then 30%', 'Ultra 1000': 'Deductible then 20%' } },
            { label: 'Outpatient - Physician', values: { 'Ultra 6000': '30% after deductible, subject to plan allowable', 'Ultra 3000': '30% after deductible, subject to plan allowable', 'Ultra 1000': 'Deductible then 20%' } },
            { label: 'Outpatient Hospital - Facility', values: { 'Ultra 6000': '30% of plan allowable, deductible does not apply', 'Ultra 3000': networkId === 'phcs' ? 'Deductible then 30%' : '30% of plan allowable, deductible does not apply', 'Ultra 1000': 'Deductible then 20%' } },
          ],
        },
        {
          title: 'Out of Network',
          rows: [
            { label: 'Deductible', values: { 'Ultra 6000': '$12,000/$24,000', 'Ultra 3000': '$6,000/$12,000', 'Ultra 1000': '$2,000/$4,000' } },
            { label: 'MOOP', values: { 'Ultra 6000': '$18,900/$37,900', 'Ultra 3000': '$18,900/$37,900', 'Ultra 1000': '$10,000/$20,000' } },
            { label: 'Coinsurance', values: { 'Ultra 6000': '40%', 'Ultra 3000': '40%', 'Ultra 1000': '60%' } },
            { label: 'Reimbursement', values: { 'Ultra 6000': 'Subject to plan allowable', 'Ultra 3000': 'Subject to plan allowable', 'Ultra 1000': 'Subject to plan allowable' } },
          ],
        },
        {
          title: 'Prescription Drug Benefit',
          rows: [
            { label: 'Generic', values: { 'Ultra 6000': '$15', 'Ultra 3000': '$15', 'Ultra 1000': '$15' } },
            { label: 'Preferred Brand', values: { 'Ultra 6000': '$65', 'Ultra 3000': '$65', 'Ultra 1000': '$65' } },
            { label: 'Non-Preferred Brand', values: { 'Ultra 6000': '$100', 'Ultra 3000': '$100', 'Ultra 1000': '$85' } },
          ],
        },
      ]
    };
  };

  const currentData = getTableData(activeTab);

  return (
    <section className="py-20 md:py-28 bg-surface-alt font-body relative overflow-hidden border-t border-navy-100/60">
      <div className="absolute inset-0 bg-noise opacity-[0.02] mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">Detailed Breakdown</span>
          <h2 className="text-h2 font-display font-bold text-navy-900 tracking-tight mb-6">
            Network Plan Comparison
          </h2>
          <p className="text-lg text-navy-600 leading-relaxed">
            Select a network below to view detailed coverage specifications, deductibles, and out-of-pocket maximums across our Ultra major medical plans.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
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

        {/* Active Tab Content in Card Elevated */}
        <div className="card-elevated overflow-hidden overflow-x-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="min-w-[640px]"
            >
              {/* Header Row */}
              <div className="grid grid-cols-4 bg-navy-50/80 border-b border-navy-100">
                <div className="p-4 sm:p-6 font-display font-bold text-navy-900 flex items-center border-r border-navy-100 text-base">
                  Plan Details
                </div>
                {currentData.planNames.map((name, idx) => (
                  <div key={idx} className={`col-span-1 p-4 sm:p-6 text-center font-display font-bold text-lg text-navy-900 ${idx !== 2 ? 'border-r border-navy-100' : ''}`}>
                    {name}
                  </div>
                ))}
              </div>

              {/* Data Rows */}
              <div className="flex flex-col">
                {currentData.sections.map((section, sIdx) => (
                  <div key={sIdx} className="mb-0">
                    <div className="bg-navy-900 text-white p-3 px-6 font-bold text-xs tracking-widest uppercase font-display">
                      {section.title}
                    </div>
                    {section.rows.map((row, rIdx) => (
                      <div key={rIdx} className="grid grid-cols-4 border-b border-navy-100/60 hover:bg-navy-50/40 transition-colors">
                        <div className="col-span-1 p-4 sm:p-5 text-sm font-semibold text-navy-800 flex items-center border-r border-navy-100/60 bg-navy-50/20">
                          {row.label}
                        </div>
                        {currentData.planNames.map((name, pIdx) => (
                          <div key={pIdx} className={`col-span-1 p-4 sm:p-5 text-sm text-navy-600 flex items-center justify-center text-center ${pIdx !== 2 ? 'border-r border-navy-100/60' : ''}`}>
                            {row.values[name]}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
        
      </div>
    </section>
  );
};
