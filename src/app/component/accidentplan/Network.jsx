"use client";

import React from 'react'

export const Network = () => {
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
        <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-indigo-900 mb-4 animate-fadeInUp">
           Network
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
    Accessing support for accident-related needs is easy with our extensive network of experienced professionals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 mt-10 text-left">
            {/* Network List - Column 1 */}
            <ul className="space-y-4 animate-delayFadeIn">
              <li className="flex items-center text-gray-700">
                <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="url(#mainIconGradient)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {mainIconGradient}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
             Join us and tap into a network of professionals experienced in accident care
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="url(#mainIconGradient)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              We make sure you receive guidance from specialists familiar with the challenges of accident-related injuries
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="url(#mainIconGradient)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
               Benefit from our expansive network covering every corner of the United States
              </li>
            </ul>
            {/* Network List - Column 2 */}
            <ul className="space-y-4 animate-delayFadeIn-2">
              <li className="flex items-center text-gray-700">
                <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="url(#mainIconGradient)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              Access accident-related care conveniently, ensuring support no matter where you are
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="url(#mainIconGradient)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
               Our dedicated support team is ready to assist you in all your accident-related queries
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
