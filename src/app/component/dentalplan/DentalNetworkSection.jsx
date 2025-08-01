import React from 'react';

export const DentalNetworkSection = () => {
  return (
     <section className='bg-gradient-to-br from-blue-50 to-white'>
    <section className="max-w-screen-xl mx-auto px-4 py-16 md:py-24 overflow-hidden relative">
      {/* Subtle diagonal background pattern/shape with animation */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-blue-200 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse-fade"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-sky-200 rounded-full opacity-20 blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse-fade delay-500"></div> {/* Added a slight delay to the second one */}

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-900 mb-4 animate-slide-in-down">
          Network
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto animate-slide-in-down delay-100">
         Access our established network of experienced dentists focused on preventive and restorative care. Regular check-ups, specialist access, and convenient locations simplify your journey to optimal oral health, for you and your family.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {/* Preventive Services Card */}
        <div className="bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:border-blue-400 hover:translate-y-[-10px] animate-fade-in-up delay-200">
          <div className="flex items-center justify-center bg-blue-50 rounded-lg h-16 w-16 mb-6 text-sky-400 shadow-inner">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.001 12.001 0 002.944 12c0 2.873.843 5.485 2.308 7.373L12 22l6.748-2.627A12.001 12.001 0 0021.056 12c0-2.873-.843-5.485-2.308-7.373z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Preventive Services</h3>
          <p className="text-gray-600 mb-6 text-base leading-relaxed">
           Network options for Preventive Services like Dental examinations, Bitewing X-Rays, Fluoride Treatments (Frequency limitations apply), Space Maintainers
          </p>
          <ul className="space-y-3">
            <li className="flex items-center text-blue-700 font-semibold bg-blue-100 px-4 py-2 rounded-lg shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              In-Network: <span className="ml-auto text-blue-800 font-bold">100% Covered</span>
            </li>
            <li className="flex items-center text-blue-700 font-semibold bg-blue-100 px-4 py-2 rounded-lg shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Out-of-Network: <span className="ml-auto text-blue-800 font-bold">80% Covered</span>
            </li>
          </ul>
        </div>

        {/* Basic Services Card */}
        <div className="bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:border-sky-400 hover:translate-y-[-10px] animate-fade-in-up delay-300">
          <div className="flex items-center justify-center bg-blue-50 rounded-lg h-16 w-16 mb-6 text-sky-400 shadow-inner">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic Services</h3>
          <p className="text-gray-600 mb-6 text-base leading-relaxed">
          Network options for basic services like Fillings, Simple Extractions, Oral Surgery, Periodontics, Root Canals (Endodontics), Sealants
          </p>
          <ul className="space-y-3">
            <li className="flex items-center text-blue-700 font-semibold bg-blue-100 px-4 py-2 rounded-lg shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              In-Network: <span className="ml-auto text-blue-800 font-bold">80% Covered</span>
            </li>
            <li className="flex items-center text-blue-700 font-semibold bg-blue-100 px-4 py-2 rounded-lg shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Out-of-Network: <span className="ml-auto text-blue-800 font-bold">50% Covered</span>
            </li>
          </ul>
        </div>

        {/* Major Services Card */}
        <div className="bg-white p-8 rounded-2xl shadow-lg   transform transition-all duration-500 hover:shadow-2xl hover:border-blue-400 hover:translate-y-[-10px] animate-fade-in-up delay-400">
          <div className="flex items-center justify-center bg-blue-50 rounded-lg h-16 w-16 mb-6 text-sky-400 shadow-inner">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0l-1.5 1.5L9 17.25" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Major Services</h3>
          <p className="text-gray-600 mb-6 text-base leading-relaxed">
            Network options for major services like Crowns & Gold Restorations, Bridgework, Full & Partial Dentures, Dentures Repair and Implants
          </p>
          <ul className="space-y-3">
            <li className="flex items-center text-blue-700 font-semibold bg-blue-100 px-4 py-2 rounded-lg shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              In-Network: <span className="ml-auto text-blue-800 font-bold">50% Covered</span>
            </li>
            <li className="flex items-center text-blue-700 font-semibold bg-blue-100 px-4 py-2 rounded-lg shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Out-of-Network: <span className="ml-auto text-blue-800 font-bold">50% Covered</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
    </section>
  );
};
