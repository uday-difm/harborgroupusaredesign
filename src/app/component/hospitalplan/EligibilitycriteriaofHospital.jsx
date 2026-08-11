import React from 'react'

export const EligibilitycriteriaofHospital = ()=> {
      const blueGradient = (id) => (
    <defs>
      <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: '#7DD3FC', stopOpacity: 1}} /> {/* Tailwind sky-300 */}
        <stop offset="100%" style={{stopColor: '#38BDF8', stopOpacity: 1}} /> {/* Changed from teal/cyan to Tailwind sky-400 */}
      </linearGradient>
    </defs>
  );
  return (
    <>
     <section className="relative w-full bg-navy-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Abstract background pattern: subtle, animated geometric shapes */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <filter id="eligibilityShapeBlur">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
              </filter>
            </defs>
            <g fill="#93C5FD" filter="url(#eligibilityShapeBlur)"> {/* Blue-300 for shapes */}
              <circle cx="15" cy="15" r="8" opacity="0.15" className="animate-circleFloat1" />
              <rect x="80" y="20" width="10" height="10" rx="2" ry="2" opacity="0.1" className="animate-circleFloat2" />
              <polygon points="20,85 30,95 10,95" opacity="0.12" className="animate-circleFloat3" />
              <circle cx="90" cy="80" r="7" opacity="0.1" className="animate-circleFloat4" />
            </g>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-extrabold text-navy-800 mb-4 animate-fadeInUp">
            Eligibility Criteria of Hospital Plan
          </h2>
          <p className="text-lg text-navy-500 mb-12 max-w-3xl mx-auto">
           Open to individuals and families, our Hospital Plans ensure that specialized hospitalization coverage is within reach, tailored to meet your specific criteria.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {/* Card 1: Resident of the United States */}
            <div className="bg-white p-6 rounded-card card-elevated border border-blue-200 transform transition duration-300 hover:scale-105 hover:shadow-xl animate-delayFadeIn flex flex-col justify-between">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-8 h-8" fill="none" stroke="url(#blueGradientEligibility1)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {blueGradient("blueGradientEligibility1")}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657m10.314-10.314L13.414 3.1a1.998 1.998 0 00-2.828 0L6.343 6.343m10.314 10.314A9.001 9.001 0 0012 21a9.001 9.001 0 00-5.657-4.343m10.314-10.314A9.001 9.001 0 0112 3a9.001 9.001 0 015.657 4.343M12 12V6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Resident of the United States</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
               Our Hospital Plans are accessible to individuals and families residing in the United States.
              </p>
            </div>

            {/* Card 2: Age Eligibility */}
            <div className="bg-white p-6 rounded-card card-elevated border border-blue-200 transform transition duration-300 hover:scale-105 hover:shadow-xl animate-delayFadeIn-2 flex flex-col justify-between">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-8 h-8" fill="none" stroke="url(#blueGradientEligibility2)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {blueGradient("blueGradientEligibility2")}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Age Eligibility</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
               Tailored to cover individuals aged 18 to 100 years, ensuring robust coverage throughout various life stages.
              </p>
            </div>

            {/* Card 3: Citizenship */}
            <div className="bg-white p-6 rounded-card card-elevated border border-blue-200 transform transition duration-300 hover:scale-105 hover:shadow-xl animate-delayFadeIn-3 flex flex-col justify-between">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-8 h-8" fill="none" stroke="url(#blueGradientEligibility3)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {blueGradient("blueGradientEligibility3")}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5M3 17h8m0 0h8a2 2 0 002-2V7m-4 4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Citizenship</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                US citizenship or legal residency status is a prerequisite for enrollment in our Hospital Plans.
              </p>
            </div>

            {/* Card 4: Financial Security */}
            <div className="bg-white p-6 rounded-card card-elevated border border-blue-200 transform transition duration-300 hover:scale-105 hover:shadow-xl animate-delayFadeIn-4 flex flex-col justify-between">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-8 h-8" fill="none" stroke="url(#blueGradientEligibility4)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {blueGradient("blueGradientEligibility4")}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.007 12.007 0 002.944 12c.047 2.27 1.059 4.417 2.944 6.182a12.007 12.007 0 0014.112 0c1.885-1.765 2.897-3.912 2.944-6.182a12.007 12.007 0 00-2.944-8.618z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Financial Security</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Perfect for those who prioritize financial security during hospitalization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
