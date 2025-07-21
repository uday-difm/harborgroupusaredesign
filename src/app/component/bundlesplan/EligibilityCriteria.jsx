import React from 'react'

export const EligibilityCriteria = () => {
      const gradientStops = (id) => (
    <defs>
      <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: '#7DD3FC', stopOpacity: 1}} /> {/* Tailwind sky-300 */}
        <stop offset="100%" style={{stopColor: '#22D3EE', stopOpacity: 1}} /> {/* Tailwind cyan-400 */}
      </linearGradient>
    </defs>
  );
  return (
    <>
       {/* New Section: Eligibility Criteria for the Bundles Plans */}
      <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-indigo-900 mb-4 animate-fadeInUp">
            Eligibility Criteria for the Bundles Plans
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            These plans are open to individuals and families, making it accessible for everyone seeking a combination of plans.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {/* Citizenship or Legal Residency Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl animate-delayFadeIn">
              <svg className="w-16 h-16 mx-auto mb-6" fill="none" stroke="url(#eligibilityIconGradient1)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {gradientStops("eligibilityIconGradient1")}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 12V4a2 2 0 012-2h10a2 2 0 012 2v8m-11 0h10a2 2 0 012 2v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-5a2 2 0 012-2z"></path>
              </svg>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Citizenship or Legal Residency</h3>
              <p className="text-gray-700 leading-relaxed">
                US citizenship or legal residency status is a prerequisite.
              </p>
            </div>

            {/* Age Eligibility Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl animate-delayFadeIn-2">
              <svg className="w-16 h-16 mx-auto mb-6" fill="none" stroke="url(#eligibilityIconGradient2)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {gradientStops("eligibilityIconGradient2")}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Age Eligibility</h3>
              <p className="text-gray-700 leading-relaxed">
                Tailored for individuals aged 18 to 100 years.
              </p>
            </div>

            {/* Income Verification Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl animate-delayFadeIn-3">
              <svg className="w-16 h-16 mx-auto mb-6" fill="none" stroke="url(#eligibilityIconGradient3)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {gradientStops("eligibilityIconGradient3")}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 2v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Income Verification</h3>
              <p className="text-gray-700 leading-relaxed">
                Certain plans may require proof of income to determine eligibility.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
