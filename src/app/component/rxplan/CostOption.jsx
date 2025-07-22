import React from 'react'

export const CostOption = () =>{
  return (
    <>
       <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50 overflow-hidden">
      {/* Optional: Add a subtle overlay for visual texture or depth */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at top left, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at bottom right, rgba(0,0,0,0.05) 0%, transparent 50%)'
      }}></div>

      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-indigo-900 sm:text-5xl lg:text-6xl leading-tight mb-8">
          Cost Options and Coverage Scenarios
        </h2>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
          Our Rx Plans provide easy, affordable, and professional options to suit your financial needs for medication.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Tailored Premium Options */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center">
            {/* Icon for Tailored Premium Options (e.g., Sliders for customization) */}
            <div className="bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full p-3 mb-4 mx-auto flex items-center justify-center w-20 h-20">
              <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8v-2m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6-8v-2m0 2a2 2 0 100 4m0-4a2 2 0 110 4m12 0a2 2 0 100 4m0-4a2 2 0 110 4m0 0V4m0 0a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100 4m0-4a2 2 0 110 4m0 0v-2m0 2a2 2 0 100 4m0-4a2 2 0 110 4m0 0v-2m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6-8a2 2 0 100 4m0-4a2 2 0 110 4m0 0v-2m0 2a2 2 0 100 4m0-4a2 2 0 110 4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Tailored Premium Options
            </h3>
            <ul className="space-y-3 text-gray-600 text-lg text-left">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-sky-500 flex-shrink-0 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Explore different premium plans designed for varying levels of medication coverage.</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-sky-500 flex-shrink-0 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Tailor your plan to align precisely with your financial priorities for medication.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Transparent Co-Payment Structure */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center">
            {/* Icon for Transparent Co-Payment Structure (e.g., Dollar Sign) */}
            <div className="bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full p-3 mb-4 mx-auto flex items-center justify-center w-20 h-20">
              <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Transparent Co-Payment Structure
            </h3>
            <ul className="space-y-3 text-gray-6 text-lg text-left">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-sky-500 flex-shrink-0 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Benefit from an easy-to-understand co-payment structure for prescription medications.</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-sky-500 flex-shrink-0 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Know your medication costs upfront, ensuring financial transparency.</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Comprehensive Medication Coverage */}
          <div className="md:col-span-2 lg:col-span-1 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center">
            {/* Icon for Comprehensive Medication Coverage (e.g., Pill or Shield) */}
            <div className="bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full p-3 mb-4 mx-auto flex items-center justify-center w-20 h-20">
                <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Comprehensive Medication Coverage
            </h3>
            <ul className="space-y-3 text-gray-600 text-lg text-left">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-sky-500 flex-shrink-0 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Delve into clearly defined coverage scenarios for various prescription medications.</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-sky-500 flex-shrink-0 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Easily understand what's covered, allowing you to plan accordingly for your medication needs.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
