"use client";

import React from 'react'
import Image from 'next/image';

export const CostOptionshospital = ()=>{
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
      <section className="w-full bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch"> {/* Use items-stretch for equal height */}
          {/* Left Column: Image */}
          <div className="flex justify-center lg:justify-start animate-slideInLeft h-full"> {/* Added h-full */}
            <Image
            width={600}
            height={400}
              className="w-full h-full object-cover rounded-card shadow-2xl  transform transition-transform duration-700 ease-in-out hover:scale-105"
              src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/hospital-plan-coverage.jpeg" // image_9e7e52.png (Cost Options Image)
              alt="Financial planning illustration"
              
            />
          </div>

          {/* Right Column: Text Content */}
          <div className=" p-8  animate-slideInRight flex flex-col justify-center"> {/* Added flex flex-col justify-center */}
            <h2 className="text-4xl font-extrabold text-navy-800 mb-4 animate-fadeInUp">
              Cost Options and Coverage Scenarios
            </h2>
            <p className="text-lg text-navy-500 mb-8 max-w-xl lg:max-w-none mx-auto lg:mx-0">
            Our Hospital Plans provide flexible options to suit your hospitalization needs, with straightforward coverage scenarios
            </p>

            <div className="space-y-4 text-left">
              {/* Option 1: Tailored Premium Options */}
              <div className="flex items-start text-gray-700 animate-delayFadeIn">
                <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="url(#blueGradientOption1)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {blueGradient("blueGradientOption1")}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Tailored Premium Options</span>
              </div>

              {/* Option 2: Transparent Co-Payment Structure */}
              <div className="flex items-start text-gray-700 animate-delayFadeIn-2">
                <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="url(#blueGradientOption2)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {blueGradient("blueGradientOption2")}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Transparent Co-Payment Structure</span>
              </div>

              {/* Option 3: Comprehensive Coverage Scenarios */}
              <div className="flex items-start text-gray-700 animate-delayFadeIn-3">
                <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="url(#blueGradientOption3)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {blueGradient("blueGradientOption3")}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Comprehensive Coverage Scenarios</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
