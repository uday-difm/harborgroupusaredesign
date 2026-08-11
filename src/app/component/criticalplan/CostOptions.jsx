"use client";

import React from 'react'
import Link from 'next/link';

export const CostOptions = ()=> {
  return (
    <>
      <section className="w-full bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-navy-800 mb-4 animate-fadeInUp">
         Cost Options and Coverage Scenarios
          </h2>
          <p className="text-lg text-navy-500 mb-12 max-w-3xl mx-auto">
           Our Critical Plans provide easy, simple, and professional options to suit your financial needs during critical health moments.
          </p>

          <div className="relative flex flex-col items-center">
            {/* Vertical Line Connector */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 z-0 hidden md:block"></div>

            {/* Process Step 1 */}
            <div className="relative z-10 w-full md:w-3/4 lg:w-2/3 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between mb-12 animate-fadeInUp">
              <div className="w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-bold bg-accent card-elevated flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                1
              </div>
              <div className="bg-white p-6 rounded-card card-elevated text-center md:text-left flex-grow">
                <h3 className="text-2xl font-bold text-navy-800 mb-2">Tailored Premium Options</h3>
                <p className="text-navy-500">
                  Explore different premium plans designed for varying levels of coverage
                </p>
              </div>
            </div>

            {/* Process Step 2 */}
            <div className="relative z-10 w-full md:w-3/4 lg:w-2/3 flex flex-col md:flex-row-reverse items-center md:items-start justify-center md:justify-between mb-12 animate-fadeInUp delay-100">
              <div className="w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-bold bg-accent card-elevated flex-shrink-0 mb-4 md:mb-0 md:ml-8">
                2
              </div>
              <div className="bg-white p-6 rounded-card card-elevated text-center md:text-right flex-grow">
                <h3 className="text-2xl font-bold text-navy-800 mb-2">Comprehensive Coverage Scenarios</h3>
                <p className="text-navy-500">
               Delve into clearly defined coverage scenarios for critical health events
                </p>
                <p className="text-navy-500">
            Easily understand what’s covered, allowing you to plan accordingly for added financial security
                </p>
              </div>
            </div>

            {/* Process Step 3 */}
            <div className="relative z-10 w-full md:w-3/4 lg:w-2/3 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between animate-fadeInUp delay-200">
              <div className="w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-bold bg-accent card-elevated flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                3
              </div>
              <div className="bg-white p-6 rounded-card card-elevated text-center md:text-left flex-grow">
                <h3 className="text-2xl font-bold text-navy-800 mb-2">Transparent Payout Structure</h3>
                <p className="text-navy-500">
                 Benefit from an easy-to-understand payout structure for critical health conditions
                </p>
              </div>
            </div>
          </div>
          <Link href="#critical-plan-form">
           <button   className="mt-12 py-4 px-10 rounded-full card-elevated transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-75 animate-bounceIn bg-sky-400 text-white font-bold" >
            GET NOW
          </button>
          </Link>
        </div>
      </section>
    </>
  )
}
