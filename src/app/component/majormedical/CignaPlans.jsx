import React from 'react';
import Image from 'next/image'; // Assuming Next.js Image component for optimized images

// Placeholder for the Cigna Logo Image
const CignaNetworkLogo = () => (
  <Image
    src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/cigna.png" // Placeholder for Cigna logo
    alt="Cigna Logo"
    width={50}
    height={50}
    className="inline-block rounded-full mr-2"
  />
);

// Define the data for the Cigna Plans table
const cignaPlansData = {
  header: 'Cigna Plans',
  plans: [
    // Updated to include CignaNetworkLogo for Ultra 6000 as well
    { name: 'Ultra 6000', network: <><CignaNetworkLogo /></>, availability: 'All 50 States' },
    { name: 'Ultra 3000', network: <><CignaNetworkLogo /></>, availability: 'All 50 States' },
    { name: 'Ultra 1000', network: <><CignaNetworkLogo /></>, availability: 'All 50 States' },
  ],
  sections: [
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
        { label: 'Diagnostic Test', values: { 'Ultra 6000': '$30 copay/Visit', 'Ultra 3000': '$30 copay/Visit', 'Ultra 1000': 'Deductible then 20%' } },
      ],
    },
   {
      title: 'Radiology Services',
      rows: [
        {
          label: 'Facility (CT, PET, MRI) up to plan allowance',
          values: {
            'Ultra 6000': (
              <div className="flex flex-col items-center">
                <p className="font-bold">Facility:</p>
                <p className="text-center">30% of plan allowable, deductible does not apply.</p>
                <p className="font-bold mt-1">Professional Fees:</p>
                <p className="text-center">30% after deductible</p>
              </div>
            ),
            'Ultra 3000': (
              <div className="flex flex-col items-center">
                <p className="font-bold">Facility:</p>
                <p className="text-center">30% of plan allowable, deductible does not apply.</p>
                <p className="font-bold mt-1">Professional Fees:</p>
                <p className="text-center">30% after deductible</p>
              </div>
            ),
            'Ultra 1000': 'Deductible then 20%'
          }
        },
      ],
    },
    {
      title: 'Facility & Professional Services',
      rows: [
        { label: 'Emergency Room - Professional Fee', values: { 'Ultra 6000': '30% after deductible. Out of network is subject to plan allowable fee.', 'Ultra 3000': '30% after deductible. Out of network is subject to plan allowable fee.', 'Ultra 1000': 'Deductible then 20%' } },
        { label: 'Emergency Room - Facility', values: { 'Ultra 6000': '30% of plan allowable, deductible does not apply', 'Ultra 3000': '30% of plan allowable, deductible does not apply', 'Ultra 1000': 'Deductible then 20%' } },
        { label: 'Inpatient Hospital - Physician Fees', values: { 'Ultra 6000': 'Deductible then 30%', 'Ultra 3000': 'Deductible then 30%', 'Ultra 1000': 'Deductible then 20%' } },
        { label: 'Inpatient - Facility', values: { 'Ultra 6000': 'Deductible then 30%', 'Ultra 3000': 'Deductible then 30%', 'Ultra 1000': 'Deductible then 20%' } },
        { label: 'Outpatient - Physician', values: { 'Ultra 6000': '30% after deductible, subject to plan allowable', 'Ultra 3000': '30% after deductible, subject to plan allowable', 'Ultra 1000': 'Deductible then 20%' } },
        { label: 'Outpatient Hospital - Facility', values: { 'Ultra 6000': '30% of plan allowable, deductible does not apply', 'Ultra 3000': '30% of plan allowable, deductible does not apply', 'Ultra 1000': 'Deductible then 20%' } },
      ],
    },
    {
      title: 'Out of Network',
      rows: [
        { label: 'Deductible', values: { 'Ultra 6000': '$12,000/$24,000', 'Ultra 3000': '$6,000/$12,000', 'Ultra 1000': '$2,000/$4,000' } },
        { label: 'MOOP', values: { 'Ultra 6000': '$18,900/$37,900', 'Ultra 3000': '$18,900/$37,900', 'Ultra 1000': '$10,000/$20,000' } },
        { label: 'Coinsurance', values: { 'Ultra 6000': '40%', 'Ultra 3000': '40%', 'Ultra 1000': '60%' } },
        { label: 'Reimbursement', values: { 'Ultra 6000': 'Plans Allowable Fee', 'Ultra 3000': 'Plans Allowable Fee', 'Ultra 1000': 'Plans Allowable Fee' } },
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

export const CignaPlans  = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-8 lg:p-12 font-inter flex flex-col items-center">
      {/* Main Title with a modern twist */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-800 mb-10 text-center leading-tight tracking-tight drop-shadow-md">
        {cignaPlansData.header}
      </h1>

      {/* Responsive Table Container */}
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-blue-200">

        {/* Top Header Row for Plan Names and Network/Availability */}
        <div className="grid grid-cols-1 sm:grid-cols-4 bg-blue-100 text-blue-800  font-bold text-base sm:text-lg rounded-t-2xl">
          <div className="hidden sm:block p-4 border-r border-blue-600 flex items-center justify-center">
            <span className="text-xl">Plan Details</span>
          </div>
          {cignaPlansData.plans.map((plan, index) => (
            <div key={index} className={`p-4 text-center flex flex-col items-center justify-center ${index < cignaPlansData.plans.length - 1 ? 'sm:border-r border-blue-600' : ''}`}>
              <span className="text-xl mb-1">{plan.name}</span>
            </div>
          ))}
        </div>

        {/* Network and Plan Availability Rows */}
        <div className="grid grid-cols-1 sm:grid-cols-4 bg-blue-50 text-blue-800 text-sm sm:text-base font-medium border-b border-blue-200">
          <div className="p-3 sm:p-4 border-r border-blue-100 flex items-center justify-start sm:justify-center">
            Network
          </div>
          {cignaPlansData.plans.map((plan, index) => (
            <div key={index} className={`p-3 sm:p-4 text-center flex items-center justify-center ${index < cignaPlansData.plans.length - 1 ? 'sm:border-r border-blue-100' : ''}`}>
              {plan.network}
            </div>
          ))}
          <div className="p-3 sm:p-4 border-r border-blue-100 flex items-center justify-start sm:justify-center">
            Plan Availability
          </div>
          {cignaPlansData.plans.map((plan, index) => (
            <div key={index} className={`p-3 sm:p-4 text-center flex items-center justify-center ${index < cignaPlansData.plans.length - 1 ? 'sm:border-r border-blue-100' : ''}`}>
              {plan.availability}
            </div>
          ))}
        </div>


        {/* Dynamic Content Sections */}
        {cignaPlansData.sections.map((section, sectionIndex) => (
          <React.Fragment key={sectionIndex}>
            {/* Section Title Row - visually distinct */}
            <div className="grid grid-cols-1 sm:grid-cols-4 bg-blue-100 text-blue-800  font-extrabold text-base sm:text-xl py-3 sm:py-4 border-t border-b border-blue-300">
              <div className="col-span-1 sm:col-span-4 text-center">
                {section.title}
              </div>
            </div>

            {/* Section Rows */}
            {section.rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`grid grid-cols-1 sm:grid-cols-4 text-gray-800 text-xs sm:text-sm lg:text-base ${
                  rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                } border-t border-gray-100 hover:bg-blue-50 transition duration-150 ease-in-out`}
              >
                {/* Feature Label Column */}
                <div className="p-3 sm:p-4 border-r border-gray-200 flex items-center font-semibold text-gray-700">
                  {row.label}
                </div>
                {/* Plan Values Columns */}
                {cignaPlansData.plans.map((plan, planIndex) => (
                  <div
                    key={planIndex}
                    className={`p-3 sm:p-4 text-center flex items-center justify-center ${
                      planIndex < cignaPlansData.plans.length - 1 ? 'sm:border-r border-gray-200' : ''
                    }`}
                  >
                    {row.values[plan.name]}
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

