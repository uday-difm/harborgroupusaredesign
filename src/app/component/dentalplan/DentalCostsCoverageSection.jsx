import React from 'react';

export const DentalCostsCoverageSection = () => {
  return (
      <section className='bg-gradient-to-br from-blue-50 to-white'>
    <div className="max-w-screen-xl mx-auto px-4 py-16 md:py-24  overflow-hidden relative">

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-navy-800 mb-4 animate-slide-in-down">
          Your Clear Path to Dental Wellness
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto animate-slide-in-down delay-100">
          We believe in transparent pricing and straightforward coverage. Discover how our plans make dental care accessible and affordable.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-center gap-12 relative z-10">
        {/* Costs Options Block */}
        <div className="flex-1 bg-white p-8 rounded-3xl card-elevated  border-blue-400 transform transition-all duration-500 hover:shadow-2xl hover:translate-y-[-10px] animate-fade-in-left delay-200">
          <h3 className="text-3xl font-bold text-navy-700 mb-6 text-center">Costs Options</h3>
          <p className="text-navy-500 mb-8 text-base leading-relaxed text-center">
            Understanding the costs and coverage options is crucial. Here’s a simplified overview.
          </p>

          <div className="space-y-8">
            <div>
              <h4 className="text-2xl font-semibold text-blue-700 mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Premiums
              </h4>
              <ul className="space-y-3 text-navy-500 pl-11">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                 Affordable monthly premiums tailored to fit your budget.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-2xl font-semibold text-blue-700 mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.001 12.001 0 002.944 12c0 2.873.843 5.485 2.308 7.373L12 22l6.748-2.627A12.001 12.001 0 0021.056 12c0-2.873-.843-5.485-2.308-7.373z" />
                </svg>
                Out-of-Pocket Costs
              </h4>
              <ul className="space-y-3 text-navy-500 pl-11">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                 Minimal out-of-pocket expenses for preventive services.
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Co-payments for basic and major services with clear, transparent pricing.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Coverage Scenarios Block */}
        <div className="flex-1 bg-white p-8 rounded-3xl card-elevated  border-blue-400 transform transition-all duration-500 hover:shadow-2xl hover:translate-y-[-10px] animate-fade-in-right delay-300">
          <h3 className="text-3xl font-bold text-navy-700 mb-6 text-center">Coverage Scenarios</h3>
          <p className="text-navy-500 mb-8 text-base leading-relaxed text-center">
            Understand what's covered in various situations with our simple scenario breakdown.
          </p>

          <div className="space-y-8">
            <div>
              <h4 className="text-2xl font-semibold text-blue-700 mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 112-2h2a2 2 0 112 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                Scenario 1
              </h4>
              <ul className="space-y-3 text-navy-500 pl-11">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Routine Check-ups - Covered with no additional cost.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-2xl font-semibold text-blue-700 mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 112-2h2a2 2 0 112 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                Scenario 2
              </h4>
              <ul className="space-y-3 text-navy-500 pl-11">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Basic Services - Co-payments for immediate access to necessary treatments.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-2xl font-semibold text-blue-700 mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 112-2h2a2 2 0 112 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                Scenario 3
              </h4>
              <ul className="space-y-3 text-navy-500 pl-11">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Major Procedures - Comprehensive coverage for essential dental work.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};


