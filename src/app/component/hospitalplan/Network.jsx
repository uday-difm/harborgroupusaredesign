"use client";

import React from 'react'
import Image from 'next/image'

export const Network = () => {
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
     <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-indigo-900 mb-4 animate-fadeInUp">
           Network
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Accessing top-notch support for your hospitalization needs is effortless with our extensive network of experienced professionals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {/* Card 1: Hospital Network */}
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl animate-delayFadeIn">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-8 h-8" fill="none" stroke="url(#blueGradientNetwork1)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {blueGradient("blueGradientNetwork1")}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hospital Network</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Rely on our network of reputable hospitals specializing in various medical fields.
              </p>
            </div>

            {/* Card 2: Nationwide Coverage */}
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl animate-delayFadeIn-2">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-8 h-8" fill="none" stroke="url(#blueGradientNetwork2)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {blueGradient("blueGradientNetwork2")}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 12V4a2 2 0 012-2h10a2 2 0 012 2v8m-14 0h14a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2v-8a2 2 0 012-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nationwide Coverage</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Find a qualified hospital conveniently, ensuring accessibility during medical emergencies.
              </p>
            </div>

            {/* Card 3: Dedicated Support */}
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl animate-delayFadeIn-3">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-8 h-8" fill="none" stroke="url(#blueGradientNetwork3)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {blueGradient("blueGradientNetwork3")}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 0A9.953 9.953 0 0112 21c-5.523 0-10-4.477-10-10S6.477 1 12 1c2.62 0 5.02 1.01 6.864 2.636m-3.536 3.536l3.536 3.536m0 0L21 12m-2.636-6.864A9.953 9.953 0 0121 12c0 5.523-4.477 10-10 10S1 17.523 1 12C1 9.38 2.01 6.98 3.636 5.136"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dedicated Support</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
               Our support team is ready to assist in connecting you with hospitals in our network.
              </p>
            </div>
          </div>
        </div>
      </section> 
    </>
  )
}
