"use client";

import React from 'react'

export const Network = () => {
    // Define the light blue gradient for icons
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
       <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4 animate-fadeInUp">
            Network {/* Updated heading */}
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Effortlessly access top-notch support for your health needs with our extensive network of experienced professionals who cater to your individual needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 mt-10 text-left"> {/* Added gap-y for vertical spacing, text-left for list items */}
            <ul className="space-y-4 animate-delayFadeIn"> {/* First column of list items */}
              <li className="flex items-center text-gray-700">
                <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="url(#networkCheckIcon1)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {gradientStops("networkCheckIcon1")}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Experienced Health Professionals
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="url(#networkCheckIcon2)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {gradientStops("networkCheckIcon2")}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Reliable Partnerships
              </li>
            </ul>
            <ul className="space-y-4 animate-delayFadeIn-2"> {/* Second column of list items */}
              <li className="flex items-center text-gray-700">
                <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="url(#networkCheckIcon3)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {gradientStops("networkCheckIcon3")}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Nationwide Coverage
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="url(#networkCheckIcon4)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {gradientStops("networkCheckIcon4")}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Dedicated Support
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
