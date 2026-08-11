import React from 'react';
import Image from 'next/image';

// PHCS Logo Component
const PhcsLogo = () => (
  <Image
    src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/PHCS-Logo.png" // Placeholder for PHCS logo
    alt="PHCS Logo"
    width={80}
    height={30}
    className="inline-block"
  />
);

export const PhcsPlansTable = () => {
  const plansData = {
    header: 'PHCS Plans',
    planNames: ['Ultra 6000', 'Ultra 3000', 'Ultra 1000'],
    sections: [
      {
        // Removed the 'title' property from this section
        rows: [
          { label: 'Network', values: { 'Ultra 6000': <PhcsLogo />, 'Ultra 3000': <PhcsLogo />, 'Ultra 1000': <PhcsLogo /> } },
          { label: 'Plan Availability', values: { 'Ultra 6000': '49 States (Not available in New Jersey)', 'Ultra 3000': '49 States (Not available in New Jersey)', 'Ultra 1000': '49 States (Not available in New Jersey)' } },
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
          { label: 'Urgent Care', values: { 'Ultra 6000': '$60', 'Ultra 3000': '$60', 'Ultra 1000': '$40' } },
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
              'Ultra 6000': (
                <div className="flex flex-col items-center text-center">
                  <p className="font-bold">Facility:</p>
                  <p>30% of plan allowable, deductible does not apply</p>
                  <p className="font-bold mt-1">Professional Fees:</p>
                  <p>30% after deductible</p>
                </div>
              ),
              'Ultra 3000': (
                <div className="flex flex-col items-center text-center">
                  <p className="font-bold">Facility:</p>
                  <p>30% of plan allowable, deductible does not apply</p>
                  <p className="font-bold mt-1">Professional Fees:</p>
                  <p>30% after deductible</p>
                </div>
              ),
              'Ultra 1000': 'Deductible then 20%',
            },
          },
        ],
      },
      {
        title: 'Facility & Professional Services',
        rows: [
          { label: 'Emergency Room - Professional Fee', values: { 'Ultra 6000': '30% after deductible', 'Ultra 3000': '30% after deductible', 'Ultra 1000': 'Deductible then 20%' } },
          { label: 'Emergency Room - Facility', values: { 'Ultra 6000': '30% of plan allowable, deductible does not apply', 'Ultra 3000': '30% of plan allowable, deductible does not apply', 'Ultra 1000': 'Deductible then 20%' } },
          { label: 'Inpatient Hospital - Physician Fees', values: { 'Ultra 6000': 'Deductible then 30%', 'Ultra 3000': 'Deductible then 30%', 'Ultra 1000': 'Deductible then 20%' } },
          { label: 'Inpatient - Facility', values: { 'Ultra 6000': '30% of plan allowable, deductible does not apply.', 'Ultra 3000': '30% of plan allowable, deductible does not apply.', 'Ultra 1000': 'Deductible then 20%' } },
          { label: 'Outpatient - Physician', values: { 'Ultra 6000': '30% after deductible, subject to plan allowable', 'Ultra 3000': '30% after deductible, subject to plan allowable', 'Ultra 1000': 'Deductible then 20%' } },
          { label: 'Outpatient Hospital - Facility', values: { 'Ultra 6000': '30% of plan allowable, deductible does not apply', 'Ultra 3000': 'Deductible then 30%', 'Ultra 1000': 'Deductible then 20%' } },
        ],
      },
      {
        title: 'Out of Network',
        rows: [
          { label: 'Deductible', values: { 'Ultra 6000': '$12,000/$24,000', 'Ultra 3000': '$6,000/$12,000', 'Ultra 1000': '$2,000/$4,000' } },
          { label: 'MOOP', values: { 'Ultra 6000': '$18,900/$37,800', 'Ultra 3000': '$18,900/$37,900', 'Ultra 1000': '$10,000/$20,000' } },
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
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 lg:p-12 font-inter flex flex-col items-center">
      {/* Main Title */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary mb-10 text-center leading-tight tracking-tight drop-shadow-sm">
        {plansData.header}
      </h1>

      {/* Table Container */}
      <div className="w-full max-w-7xl bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
        {/* Table Header */}
        <div className="grid grid-cols-4 bg-blue-100 text-blue-800 font-semibold text-sm sm:text-base lg:text-lg rounded-t-lg border-b border-blue-200">
          <div className="p-3 sm:p-4 text-center border-r border-blue-200">Major Medical Plans</div>
          {plansData.planNames.map((planName, index) => (
            <div key={index} className={`p-3 sm:p-4 text-center ${index < plansData.planNames.length - 1 ? 'border-r border-blue-200' : ''}`}>
              {planName}
            </div>
          ))}
        </div>

        {/* Dynamic Content Sections */}
        {plansData.sections.map((section, sectionIndex) => (
          <React.Fragment key={sectionIndex}>
            {/* Section Title Row - conditionally rendered */}
            {section.title && (
              <div className="grid grid-cols-4 bg-blue-50 text-blue-700 font-bold text-base sm:text-lg py-3 border-t border-b border-blue-200">
                <div className="col-span-4 text-center">
                  {section.title}
                </div>
              </div>
            )}

            {/* Section Rows */}
            {section.rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`grid grid-cols-4 text-gray-800 text-xs sm:text-sm lg:text-base ${
                  rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                } border-t border-gray-100 hover:bg-blue-50 transition duration-150 ease-in-out`}
              >
                {/* Label Column */}
                <div className="p-3 sm:p-4 border-r border-gray-200 flex items-center font-medium text-gray-700">
                  {row.label}
                </div>
                {/* Values Columns */}
                {plansData.planNames.map((planName, planIndex) => (
                  <div
                    key={planIndex}
                    className={`p-3 sm:p-4 flex items-center justify-center text-center ${
                      planIndex < plansData.planNames.length - 1 ? 'border-r border-gray-200' : ''
                    }`}
                  >
                    {row.values[planName]}
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
