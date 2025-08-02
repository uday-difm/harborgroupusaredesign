"use client";

import React from 'react'

export const CostOptions = () => {
  return (
    <>
     {/* New Section: Cost Options and Coverage Scenarios */}
      <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-indigo-900 mb-4 animate-fadeInUp">
    Cost Options and Coverage Scenarios
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
           Our Limited Med Plans provide flexible options to suit your targeted health needs, with straightforward coverage scenarios.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {/* Tailored Premium Options Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl animate-delayFadeIn">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tailored Premium Options</h3>
              <ul className="space-y-3 text-gray-600  text-justify">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="url(#mainIconGradient)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                Explore different premium plans designed for varying levels of specialized coverage
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="url(#mainIconGradient)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                Tailor your plan to align precisely with your targeted health priorities
                </li>
              </ul>
            </div>

            {/* Transparent Co-Payment Structure Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl animate-delayFadeIn-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Transparent Co-Payment Structure</h3>
              <ul className="space-y-3 text-gray-600  text-justify">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="url(#mainIconGradient)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                Benefit from an easy-to-understand co-payment structure for medical services
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="url(#mainIconGradient)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                Know your costs upfront, ensuring financial transparency for targeted health planning
                </li>
              </ul>
            </div>

            {/* Comprehensive Coverage Scenarios Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl animate-delayFadeIn-3">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Coverage Scenarios</h3>
              <ul className="space-y-3 text-gray-600  text-justify">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="url(#mainIconGradient)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Delve into clearly defined coverage scenarios for specific medical conditions
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="url(#mainIconGradient)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                Easily understand what's covered and plan accordingly for your targeted health protection
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> 
    </>
  )
}
