"use client";

import React from 'react'

export const Eligibilityofaccidental = () => {
     const mainIconGradient = (
    <defs>
      <linearGradient id="mainIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: '#7DD3FC', stopOpacity: 1}} /> {/* Tailwind sky-300 */}
        <stop offset="100%" style={{stopColor: '#20C997', stopOpacity: 1}} /> {/* A vibrant teal/cyan from the provided image */}
      </linearGradient>
    </defs>
  );

  return (
    <>
      <section className="w-full bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-indigo-900 mb-4 animate-fadeInUp">
        Eligibility of accidental plan
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
           Open to individuals and families, our Accident Plans ensure that coverage for unexpected accidents is within reach, designed to meet your specific criteria.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {/* Resident of the US Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl animate-delayFadeIn">
              <svg className="w-16 h-16 mx-auto mb-6" fill="none" stroke="url(#mainIconGradient)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657m10.314-10.314L13.414 3.1a1.998 1.998 0 00-2.828 0L6.343 6.343m10.314 10.314A9.001 9.001 0 0012 21a9.001 9.001 0 00-5.657-4.343m10.314-10.314A9.001 9.001 0 0112 3a9.001 9.001 0 015.657 4.343M12 12V6"></path>
              </svg>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Resident of the US</h3>
              <p className="text-gray-600 leading-relaxed text-justify">
              Our Accident Plans are accessible to individuals and families residing in the United States.
              </p>
            </div>

            {/* Age Eligibility Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl animate-delayFadeIn-2">
              <svg className="w-16 h-16 mx-auto mb-6" fill="none" stroke="url(#mainIconGradient)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Age Eligibility Resident of the US</h3>
              <p className="text-gray-600 leading-relaxed text-justify">
              Tailored to cover individuals aged 18 to 65 years, ensuring robust coverage throughout various life stages.
              </p>
            </div>

            {/* Citizenship Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl animate-delayFadeIn-3">
              <svg className="w-16 h-16 mx-auto mb-6" fill="none" stroke="url(#mainIconGradient)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 12V4a2 2 0 012-2h10a2 2 0 012 2v8m-11 0h10a2 2 0 012 2v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-5a2 2 0 012-2z"></path>
              </svg>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Citizenship</h3>
              <p className="text-gray-600 leading-relaxed text-justify">
               US citizenship or legal residency status is a prerequisite for enrollment in our Accident Plans.
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
