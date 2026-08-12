"use client";

import React from 'react';

export const NetworkPetPlan = () => {
  return (
 <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at top left, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at bottom right, rgba(19,30,73,0.05) 0%, transparent 50%)'
      }}></div>

      <div className="relative max-w-7xl mx-auto space-y-8">
        <div className=" p-8 ">
          <h2 className="text-4xl font-extrabold text-navy-800 sm:text-5xl lg:text-6xl leading-tight mb-6 text-center">
            Network
          </h2>
          <p className="mt-4 text-lg text-navy-500 leading-relaxed text-center">
           Accessing top-notch veterinary support for your pets is effortless with our extensive network of experienced professionals
          </p>
        </div>
        <div className=" p-8 ">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-card card-elevated transition-all duration-300 hover:shadow-xl border border-navy-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <svg className="h-7 w-7 text-navy-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
               Qualified Veterinary Professionals
              </h3>
              <ul className="space-y-3 text-gray-700 text-lg text-justify">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-accent flex-shrink-0 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Tap into a network of seasoned veterinary professionals</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-accent flex-shrink-0 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ensure your pets receive the best guidance for their specific health needs</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-card card-elevated transition-all duration-300 hover:shadow-xl border border-navy-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <svg className="h-7 w-7 text-navy-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5M3 17h9m9 0V5a2 2 0 00-2-2h-2.5M21 17h-9m0 0v4m0-4h.5M9 17H7m7 0h2" />
                </svg>
               Nationwide Coverage
              </h3>
              <ul className="space-y-3 text-gray-700 text-lg text-justify">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-accent flex-shrink-0 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Benefit from our expansive network covering every corner of the United States</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-accent flex-shrink-0 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Find a qualified veterinary professional conveniently, ensuring accessibility for your pets</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-card card-elevated transition-all duration-300 hover:shadow-xl border border-navy-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <svg className="h-7 w-7 text-navy-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 0A9.953 9.953 0 0112 5c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8c0-1.78-.58-3.43-1.55-4.764zM12 17a4 4 0 100-8 4 4 0 000 8z" />
                </svg>
                Dedicated Support
              </h3>
              <ul className="space-y-3 text-gray-700 text-lg text-justify">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-accent flex-shrink-0 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Our support team is ready to assist in connecting you with in-network veterinary professionals</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-accent flex-shrink-0 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Enjoy peace of mind with our dedicated network support for all your pet health inquiries and needs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
