"use client";
import React from 'react'

export const EligibilityCriteria = () =>{
     const mainIconGradient = (
    <defs>
      <linearGradient id="mainIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: 'var(--color-navy-200)', stopOpacity: 1}} /> {/* Tailwind sky-300 */}
        <stop offset="100%" style={{stopColor: 'var(--color-navy-400)', stopOpacity: 1}} /> {/* Tailwind cyan-400 */}
      </linearGradient>
    </defs>
  );
  return (
    <>
       {/* New Section: Eligibility Criteria of Limited Med Plan (from image_ac1a13.png) */}
      <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-navy-800 mb-4 animate-fadeInUp">
            Eligibility Criteria of Limited med plan
          </h2>
          <p className="text-lg text-navy-500 mb-12 max-w-3xl mx-auto">
           This plan is open to individuals and families, making it accessible for everyone seeking reliable health coverage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {/* Citizenship or Legal Residency Card */}
            <div className="bg-white p-8 rounded-card card-elevated transform transition duration-300 hover:scale-105 hover:shadow-xl animate-delayFadeIn">
              <svg className="w-16 h-16 mx-auto mb-6" fill="none" stroke="url(#mainIconGradient)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {mainIconGradient} {/* Render the gradient definition here */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 12V4a2 2 0 012-2h10a2 2 0 012 2v8m-11 0h10a2 2 0 012 2v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-5a2 2 0 012-2z"></path>
              </svg>
              <h3 className="text-2xl font-bold text-navy-800 mb-4">Citizenship or Legal Residency</h3>
              <p className="text-gray-700 leading-relaxed text-justify">
               US citizenship or legal residency status is a prerequisite for enrollment in our Limited Med Plans.
              </p>
            </div>

            {/* Age Eligibility Card */}
            <div className="bg-white p-8 rounded-card card-elevated transform transition duration-300 hover:scale-105 hover:shadow-xl animate-delayFadeIn-2">
              <svg className="w-16 h-16 mx-auto mb-6" fill="none" stroke="url(#mainIconGradient)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <h3 className="text-2xl font-bold text-navy-800 mb-4">Age Eligibility</h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                Tailored to cover individuals aged 18 to 100 years, ensuring robust coverage throughout various life stages.
              </p>
            </div>

            {/* Specific Health Needs Card */}
            <div className="bg-white p-8 rounded-card card-elevated transform transition duration-300 hover:scale-105 hover:shadow-xl animate-delayFadeIn-3">
              <svg className="w-16 h-16 mx-auto mb-6" fill="none" stroke="url(#mainIconGradient)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
              <h3 className="text-2xl font-bold text-navy-800 mb-4">Specific Health Needs</h3>
              <p className="text-gray-700 leading-relaxed text-justify">
            Perfect for those who require focused medical coverage for specific health conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
