"use client";

import React from 'react'

export const CostOptions = () => {
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
       {/* New Section: Cost Options and Coverage Scenarios */}
      <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-indigo-900 mb-4 animate-fadeInUp">
            Cost Options and Coverage Scenarios
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Budget-friendly, priority-focused. Find your perfect Bundles Plan for complete health protection along with flexible cost options.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {/* Tailored Premium Options Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl animate-delayFadeIn">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tailored Premium Options</h3>
              <ul className="space-y-3 text-gray-600 text-left">
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="url(#costIconGradient1)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {gradientStops("costIconGradient1")}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                 Explore different premium plans for varying levels of coverage.
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="url(#costIconGradient2)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {gradientStops("costIconGradient2")}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Tailor your plan to align precisely with your family’s health priorities.
                </li>
              </ul>
            </div>

            {/* Transparent Co-Payment Structure Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl animate-delayFadeIn-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Transparent Co-Payment Structure</h3>
              <ul className="space-y-3 text-gray-600 text-left">
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="url(#costIconGradient3)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {gradientStops("costIconGradient3")}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Benefit from an easy-to-understand co-payment structure for medical services for clarity.
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="url(#costIconGradient4)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {gradientStops("costIconGradient4")}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
              Know your costs upfront, ensuring financial transparency and financial planning.
                </li>
              </ul>
            </div>

            {/* Comprehensive Coverage Scenarios Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl animate-delayFadeIn-3">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Coverage Scenarios</h3>
              <ul className="space-y-3 text-gray-600 text-left">
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="url(#costIconGradient5)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {gradientStops("costIconGradient5")}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                 Delve into clearly defined coverage scenarios for medical, accident, and critical illness events, tailored to your family’s specific health concerns.
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="url(#costIconGradient6)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {gradientStops("costIconGradient6")}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                 Easily understand what’s covered and plan accordingly for a health protection journey.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
