import React from 'react';

// Main App component
export const DetailedPlanDescriptions = () => {
  // Data for the different plans
  const plans = [
    {
      name: 'Ultra 6000',
      deductible: 'Individual deductible of $6,000, family deductible of $12,000. Individual max out of pocket $9,450, family max out of pocket $18,900.',
      coverage: 'Preventive care covered 100%, primary care copay $30, specialist care copay $60, urgent care $60, and so on.',
      prescription: 'Generic $15, preferred brand $65, non-preferred brand $100.',
    },
    {
      name: 'Ultra 3000',
      deductible: 'Individual deductible of $3,000, family deductible of $6,000. Individual max out of pocket $9,450, family max out of pocket $18,900.',
      coverage: 'Preventive care covered 100%, primary care copay $30, specialist care copay $60, urgent care $60, and so on.',
      prescription: 'Generic $15, preferred brand $65, non-preferred brand $100.',
    },
    {
      name: 'Ultra 1000',
      deductible: 'Individual deductible of $1,000 family deductible of $2,000. Individual max out of pocket $5,000, family max out of pocket $10,000.',
      coverage: 'Preventive care covered 100%, primary care copay $20, specialist care copay $40, urgent care $40, and so on.',
      prescription: 'Generic $15, preferred brand $65, non-preferred brand $85.',
    },
  ];

  return (
    // Main container with a gradient background and responsive padding
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-inter text-gray-800 p-4 sm:p-8 lg:p-12 flex flex-col items-center justify-center">
      {/* Page title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-10 text-center drop-shadow-lg">
        Detailed Plan Descriptions
      </h1>

      {/* Grid container for the plan cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {plans.map((plan, index) => (
          // Individual plan card
          <div
            key={index}
            className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 flex flex-col border-t-4 border-blue-500"
          >
            {/* Plan name */}
            <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
              {plan.name}
            </h2>

            {/* Network section */}
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-gray-700 flex items-center mb-2">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Network:
              </h3>
              <p className="text-gray-600 ml-7">Available in all 50 states.</p>
            </div>

            {/* Deductibles and Out-of-Pocket Costs section */}
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-gray-700 flex items-center mb-2">
                <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Deductibles and Out-of-Pocket Costs:
              </h3>
              <p className="text-gray-600 ml-7">{plan.deductible}</p>
            </div>

            {/* Coverage section */}
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-gray-700 flex items-center mb-2">
                <svg className="w-5 h-5 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Coverage:
              </h3>
              <p className="text-gray-600 ml-7">{plan.coverage}</p>
            </div>

            {/* Prescription Drug Benefits section */}
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-gray-700 flex items-center mb-2">
                <svg className="w-5 h-5 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7V4l-2-2-2 2v3H2v10h16V7h-6zm-2 0H8V5.414L9.414 4l.586.586V7zm4 0h-2V5.414L13.414 4l.586.586V7zM4 9h12v7H4V9z" clipRule="evenodd" />
                </svg>
                Prescription Drug Benefits:
              </h3>
              <p className="text-gray-600 ml-7">{plan.prescription}</p>
            </div>

            {/* Additional details section */}
            <div className="mb-0">
              <h3 className="text-lg font-semibold text-gray-700 flex items-center mb-2">
                <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-2 2a1 1 0 00-1 1v3a1 1 0 001 1h2a1 1 0 001-1v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Additional details:
              </h3>
              <p className="text-gray-600 ml-7">
                Additional details about laboratory, radiology services, emergency room, inpatient, and outpatient services.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


