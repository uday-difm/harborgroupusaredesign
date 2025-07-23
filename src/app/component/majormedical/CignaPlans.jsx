import React from 'react';

// Define the data for the Cigna Plans table
const cignaPlansData = {
  header: 'Cigna Plans',
  sections: [
    {
      title: 'Major Medical Plans',
      rows: [
        { label: 'Network', plans: { 'Ultra 6000': '...', 'Ultra 2000': 'Cigna', 'Ultra 1000': 'Cigna' } },
        { label: 'Plan Availability', plans: { 'Ultra 6000': 'All 50 States', 'Ultra 2000': 'All 50 States', 'Ultra 1000': 'All 50 States' } },
      ],
    },
    {
      title: 'Benefits',
      rows: [
        { label: 'Individual Deductible', plans: { 'Ultra 6000': '$6,000', 'Ultra 2000': '$3,000', 'Ultra 1000': '$1,000' } },
        { label: 'Family Deductible', plans: { 'Ultra 6000': '$12,000', 'Ultra 2000': '$6,000', 'Ultra 1000': '$2,000' } },
        { label: 'Individual Max Out of Pocket', plans: { 'Ultra 6000': '$9,450', 'Ultra 2000': '$8,450', 'Ultra 1000': '$5,000' } },
        { label: 'Family Max Out of Pocket', plans: { 'Ultra 6000': '$18,900', 'Ultra 2000': '$16,900', 'Ultra 1000': '$10,000' } },
        { label: 'Coinsurance', plans: { 'Ultra 6000': '30%', 'Ultra 2000': '70%', 'Ultra 1000': '80%' } },
        { label: 'Preventive Care', plans: { 'Ultra 6000': 'Covered 100%', 'Ultra 2000': 'Covered 100%', 'Ultra 1000': 'Covered 100%' } },
        { label: 'Lifetime Maximum', plans: { 'Ultra 6000': 'No Maximum', 'Ultra 2000': 'No Maximum', 'Ultra 1000': 'No Maximum' } },
        { label: 'Primary Care Copay', plans: { 'Ultra 6000': '$30', 'Ultra 2000': '$20', 'Ultra 1000': '$20' } },
        { label: 'Specialist Care Copay', plans: { 'Ultra 6000': '$60', 'Ultra 2000': '$40', 'Ultra 1000': '$40' } },
        { label: 'Urgent Care', plans: { 'Ultra 6000': '$90', 'Ultra 2000': '$60', 'Ultra 1000': '$40' } },
      ],
    },
    {
      title: 'Laboratory',
      rows: [
        { label: 'Diagnostic Test', plans: { 'Ultra 6000': '$30 copay/Visit', 'Ultra 2000': '$30 copay/Visit', 'Ultra 1000': 'Deductible then 20%' } },
      ],
    },
    {
      title: 'Radiology Services',
      rows: [
        { label: 'Facility (CT, PET, MRI) up to plan allowance', plans: { 'Ultra 6000': '30% of plan allowable, deductible does not apply', 'Ultra 2000': '30% of plan allowable, deductible does not apply', 'Ultra 1000': 'Deductible then 20%' } },
        { label: 'Professional Fees (CT, PET, MRI)', plans: { 'Ultra 6000': 'Professional Fees 20% after deductible', 'Ultra 2000': 'Professional Fees 20% after deductible', 'Ultra 1000': 'Deductible then 20%' } },
      ],
    },
    {
      title: 'Facility & Professional Services',
      rows: [
        { label: 'Emergency Room - Professional Fee', plans: { 'Ultra 6000': '30% after deductible. Out of network is subject to plan allowable fee.', 'Ultra 2000': '30% after deductible. Out of network is subject to plan allowable fee.', 'Ultra 1000': 'Deductible then 20%' } },
        { label: 'Emergency Room - Facility', plans: { 'Ultra 6000': '30% of plan allowable, deductible does not apply', 'Ultra 2000': '30% of plan allowable, deductible does not apply', 'Ultra 1000': 'Deductible then 20%' } },
        { label: 'Inpatient Hospital - Physician Fees', plans: { 'Ultra 6000': 'Deductible then 30%', 'Ultra 2000': 'Deductible then 30%', 'Ultra 1000': 'Deductible then 20%' } },
        { label: 'Inpatient - Facility', plans: { 'Ultra 6000': 'Deductible then 30%', 'Ultra 2000': 'Deductible then 30%', 'Ultra 1000': 'Deductible then 20%' } },
        { label: 'Outpatient - Physician', plans: { 'Ultra 6000': '30% of plan allowable, subject to plan allowable fee', 'Ultra 2000': '30% of plan allowable, subject to plan allowable fee', 'Ultra 1000': 'Deductible then 20%' } },
        { label: 'Outpatient Hospital - Facility', plans: { 'Ultra 6000': '30% of plan allowable, deductible does not apply', 'Ultra 2000': '30% of plan allowable, deductible does not apply', 'Ultra 1000': 'Deductible then 20%' } },
      ],
    },
    {
      title: 'Out of Network',
      rows: [
        { label: 'Deductible', plans: { 'Ultra 6000': '$12,000/$24,000', 'Ultra 2000': '$6,000/$12,000', 'Ultra 1000': '$2,000/$4,000' } },
        { label: 'MOOP', plans: { 'Ultra 6000': '$18,900/$37,800', 'Ultra 2000': '$16,900/$33,800', 'Ultra 1000': '$10,000/$20,000' } },
        { label: 'Coinsurance', plans: { 'Ultra 6000': '40%', 'Ultra 2000': '40%', 'Ultra 1000': '40%' } },
        { label: 'Reimbursement', plans: { 'Ultra 6000': 'Plans Allowable Fee', 'Ultra 2000': 'Plans Allowable Fee', 'Ultra 1000': 'Plans Allowable Fee' } },
      ],
    },
    {
      title: 'Prescription Drug Benefit',
      rows: [
        { label: 'Generic', plans: { 'Ultra 6000': '$15', 'Ultra 2000': '$15', 'Ultra 1000': '$15' } },
        { label: 'Preferred Brand', plans: { 'Ultra 6000': '$65', 'Ultra 2000': '$65', 'Ultra 1000': '$65' } },
        { label: 'Non-Preferred Brand', plans: { 'Ultra 6000': '$100', 'Ultra 2000': '$100', 'Ultra 1000': '$65' } },
      ],
    },
  ],
};

export const CignaPlans = () => {
  const planNames = ['Ultra 6000', 'Ultra 2000', 'Ultra 1000'];

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8 font-inter flex flex-col items-center">
      {/* Main Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-indigo-900 mb-6 sm:mb-8 rounded-lg">
        {cignaPlansData.header}
      </h1>

      {/* Table Container */}
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        {/* Table Header Row */}
        <div className="grid grid-cols-4 bg-sky-500 text-white font-semibold text-sm sm:text-base lg:text-lg rounded-t-lg">
          <div className="p-3 sm:p-4 border-r border-blue-500 flex items-center justify-center text-center">
            Major Medical Plans
          </div>
          {planNames.map((planName, index) => (
            <div key={index} className={`p-3 sm:p-4 flex items-center justify-center text-center ${index < planNames.length - 1 ? 'border-r border-blue-500' : ''}`}>
              {planName}
            </div>
          ))}
        </div>

        {/* Table Content */}
        {cignaPlansData.sections.map((section, sectionIndex) => (
          <React.Fragment key={sectionIndex}>
            {/* Section Title Row */}
            <div className="grid grid-cols-4 bg-blue-100 text-blue-800 font-bold text-sm sm:text-base border-t border-gray-200">
              <div className="col-span-4 p-3 sm:p-4 text-center">
                {section.title}
              </div>
            </div>

            {/* Section Rows */}
            {section.rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`grid grid-cols-4 text-gray-800 text-xs sm:text-sm ${
                  rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                } border-t border-gray-200`}
              >
                <div className="p-3 sm:p-4 border-r border-gray-200 flex items-center">
                  {row.label}
                </div>
                {planNames.map((planName, planIndex) => (
                  <div
                    key={planIndex}
                    className={`p-3 sm:p-4 flex items-center justify-center text-center ${
                      planIndex < planNames.length - 1 ? 'border-r border-gray-200' : ''
                    }`}
                  >
                    {row.plans[planName]}
                  </div>
                ))}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
