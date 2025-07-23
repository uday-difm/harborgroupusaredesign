import React from 'react';

export const PlanDescriptions = () => {
  const plansData = [
    {
      name: 'Ultra 6000',
      details: [
        { label: 'Network', text: 'Available in all 50 states.' },
        { label: 'Deductibles and Out-of-Pocket Costs', text: 'Individual deductible of $6,000, family deductible of $12,000. Individual max out of pocket $9,450, family max out of pocket $18,900.' },
        { label: 'Coverage', text: 'Preventive care covered 100%, primary care copay $30, specialist care copay $60, urgent care $60, and so on.' },
        { label: 'Prescription Drug Benefits', text: 'Generic $15, preferred brand $65, non-preferred brand $100.' },
        { label: 'Additional details', text: 'Additional details about laboratory, radiology services, emergency room, inpatient, and outpatient services.' },
      ],
    },
    {
      name: 'Ultra 3000',
      details: [
        { label: 'Network', text: 'Available in all 50 states.' },
        { label: 'Deductibles and Out-of-Pocket Costs', text: 'Individual deductible of $3,000, family deductible of $6,000. Individual max out of pocket $9,450, family max out of pocket $18,900.' },
        { label: 'Coverage', text: 'Preventive care covered 100%, primary care copay $30, specialist care copay $60, urgent care $60, and so on.' },
        { label: 'Prescription Drug Benefits', text: 'Generic $15, preferred brand $65, non-preferred brand $100.' },
        { label: 'Additional details', text: 'Additional details about laboratory, radiology services, emergency room, inpatient, and outpatient services' },
      ],
    },
    {
      name: 'Ultra 1000',
      details: [
        { label: 'Network', text: 'Available in all 50 states.' },
        { label: 'Deductibles and Out-of-Pocket Costs', text: 'Individual deductible of $1,000 family deductible of $2,000. Individual max out of pocket $5,000, family max out of pocket $10,000.' },
        { label: 'Coverage', text: 'Preventive care covered 100%, primary care copay $20, specialist care copay $40, urgent care $90, and so on.' },
        { label: 'Prescription Drug Benefits', text: 'Generic $15, preferred brand $65, non-preferred brand $85.' },
        { label: 'Additional details', text: 'Additional details about laboratory, radiology services, emergency room, inpatient, and outpatient services.' },
      ],
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-100 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-indigo-900 mb-12 text-center leading-tight tracking-tight drop-shadow-sm">
          Detailed Plan Descriptions
        </h1>

        {/* Plan Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plansData.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-blue-200 flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Plan Name */}
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6 text-center">
                {plan.name}
              </h2>

              {/* Plan Details List */}
              <ul className="space-y-4 text-gray-700 text-base flex-grow">
                {plan.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-bold">{detail.label}:</span> {detail.text}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Removed the "Learn More" button */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
