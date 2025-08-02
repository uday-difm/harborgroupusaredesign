"use client";

import React from 'react'
import Image from 'next/image';

export const BenefitsOfLimitedMed = () => {
  const gradientStops = (id) => (
    <defs>
      <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: '#7DD3FC', stopOpacity: 1}} /> 
        <stop offset="100%" style={{stopColor: '#22D3EE', stopOpacity: 1}} /> 
      </linearGradient>
    </defs>
  );
  return (
    <>
      <section className="relative w-full bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"> 
        <div className="absolute inset-0 opacity-20 pointer-events-none animate-bgPulse">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="benefitsCircles" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                <circle cx="7.5" cy="7.5" r="2.5" fill="#60A5FA" opacity="0.1" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#benefitsCircles)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-center lg:text-left animate-slideInLeft">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-indigo-900 mb-6 leading-tight animate-fadeInUp">
             Benefits Of Limited Med Plans
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-xl lg:max-w-none mx-auto lg:mx-0 animate-fadeInUp delay-100 text-justify">
             At Harbor Group USA, we understand the importance of targeted medical coverage. Our Limited Med Plans offer a range of benefits to cater to your specific health needs.
            </p>
            <ul className="space-y-4 text-gray-700 text-left lg:text-left animate-fadeInUp delay-200">
              <li className="flex items-start">
                <svg className="w-7 h-7 mr-3 flex-shrink-0" fill="none" stroke="url(#benefitIconGradient1)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {gradientStops("benefitIconGradient1")}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-lg text-justify">We offer specialized medical coverage talored to your targeted health concerns</span>
              </li>
              <li className="flex items-start">
                <svg className="w-7 h-7 mr-3 flex-shrink-0" fill="none" stroke="url(#benefitIconGradient2)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {gradientStops("benefitIconGradient2")}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-lg text-justify">Our plans provide a focused assistance to relieve financial burdens related to your specific medical conditions and health challenges</span>
              </li>
              <li className="flex items-start">
                <svg className="w-7 h-7 mr-3 flex-shrink-0" fill="none" stroke="url(#benefitIconGradient3)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {gradientStops("benefitIconGradient3")}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-lg text-justify">Our straightforward claims process is designed for efficient resolution and easy navigation of your medical coverage</span>
              </li>
            </ul>
          </div>

          {/* Right Column: Image with unique styling */}
          <div className="flex justify-center lg:justify-end animate-slideInRight">
            <Image
            className="w-full max-w-md h-auto rounded-xl shadow-2xl  transform transition-transform duration-700 ease-in-out hover:scale-105"
            src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Limited-med-plan-benefit.jpeg"
            alt="Medical icons and data visualization"
            width={600}
            height={400}
          
          />
          </div>
        </div>
      </section>
   
    </>
  )
}
