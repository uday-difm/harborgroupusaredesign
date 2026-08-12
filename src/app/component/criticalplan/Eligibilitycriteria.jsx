import React from 'react'

export const Eligibilitycriteria = () => {
 

  // Define the light blue gradient for icons (reused from new-page-design)
  const gradientStops = (id) => (
    <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{stopColor: 'var(--color-navy-200)', stopOpacity: 1}} /> {/* Tailwind sky-300 */}
      <stop offset="100%" style={{stopColor: 'var(--color-navy-400)', stopOpacity: 1}} /> {/* Tailwind cyan-400 */}
    </linearGradient>
  );
  return (
    <>
    <svg width="0" height="0" className="absolute">
        <defs>
          {gradientStops("eligibilityCritIcon1")}
          {gradientStops("eligibilityCritIcon2")} 
          {gradientStops("eligibilityCritIcon3")} 
        </defs>
      </svg>
      <section className="w-full bg-navy-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-navy-800 mb-4 animate-fadeInUp">
           Eligibility Criteria of Critical Plan
          </h2>
          <p className="text-lg text-navy-500 mb-12 max-w-3xl mx-auto">
            This plan is open to individuals and families, making it accessible for everyone seeking reliable health coverage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {/* Eligibility Card 1: Citizenship or Legal Residency */}
            <div className="bg-white p-6 rounded-card card-elevated transform transition duration-300 hover:scale-105 hover:shadow-xl animate-delayFadeIn">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md border border-blue-200" style={{ background: 'url(#eligibilityCritIcon1)' }}>
                {/* Changed fill and stroke to url(#eligibilityCritIcon1) */}
                <svg className="w-8 h-8" fill="url(#eligibilityCritIcon1)" stroke="url(#eligibilityCritIcon1)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 12V4a2 2 0 012-2h10a2 2 0 012 2v8m-11 0h10a2 2 0 012 2v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-5a2 2 0 012-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Citizenship or Legal Residency</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
               US citizenship or legal residency status is a prerequisite.
              </p>
            </div>

            {/* Eligibility Card 2: Age Eligibility */}
            <div className="bg-white  p-6 rounded-card card-elevated transform transition duration-300 hover:scale-105 hover:shadow-xl animate-delayFadeIn-2">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md border border-blue-200" style={{ background: 'url(#eligibilityCritIcon2)' }}>
                {/* Changed fill and stroke to url(#eligibilityCritIcon2) */}
                <svg className="w-8 h-8" fill="url(#eligibilityCritIcon2)" stroke="url(#eligibilityCritIcon2)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Age Eligibility</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Tailored for individuals aged 18 to 100 years.
              </p>
            </div>

            {/* Eligibility Card 3: Financial Security */}
            <div className="bg-white  p-6 rounded-card card-elevated transform transition duration-300 hover:scale-105 hover:shadow-xl animate-delayFadeIn-3">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md border border-blue-200" style={{ background: 'url(#eligibilityCritIcon3)' }}>
                {/* Changed fill and stroke to url(#eligibilityCritIcon3) */}
                <svg className="w-8 h-8" fill="url(#eligibilityCritIcon3)" stroke="url(#eligibilityCritIcon3)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.592 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.592-1M12 10a2 2 0 100-4 2 2 0 000 4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Financial Security</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
               Perfect for who prioritize added financial security during critical health situations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
