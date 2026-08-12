"use client";

import React from 'react'

export const CostOptions = ()=> {
     const gradientStops = (id) => (
    <defs>
      <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: 'var(--color-navy-200)', stopOpacity: 1}} /> {/* Tailwind sky-300 */}
        <stop offset="100%" style={{stopColor: 'var(--color-navy-400)', stopOpacity: 1}} /> {/* Tailwind cyan-400 */}
      </linearGradient>
    </defs>
  );

  return (
    <>
      
       {/* New Section: Cost Options and Coverage Scenarios */}
      <section className="w-full bg-navy-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4 animate-fadeInUp">
            Cost Options and Coverage Scenarios
          </h2>
          <p className="text-lg text-navy-500 mb-12 max-w-3xl mx-auto">
          Your Financial Shield!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {/* Flexible Premium Options Card */}
            <div className="bg-white p-8 rounded-card card-elevated transform transition duration-300 hover:scale-105 hover:shadow-xl animate-delayFadeIn">
              <svg className="w-16 h-16 mx-auto mb-6" fill="none" stroke="url(#iconGradient10)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {gradientStops("iconGradient10")}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.592 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.592-1M12 10a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
              <h3 className="text-2xl font-bold text-navy-700 mb-4">Flexible Premium Options</h3>
              <p className="text-gray-700 leading-relaxed text-justify">
            Explore a range of premium options tailored to different levels of coverage.
              </p>

                 <p className="text-gray-700 leading-relaxed text-justify">
            Customize your plan to align precisely with your family's financial priorities.
              </p>
            </div>

            {/* Transparent Co-pay Structure Card */}
            <div className="bg-white p-8 rounded-card card-elevated transform transition duration-300 hover:scale-105 hover:shadow-xl animate-delayFadeIn-2">
              <svg className="w-16 h-16 mx-auto mb-6" fill="none" stroke="url(#iconGradient11)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {gradientStops("iconGradient11")}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
              </svg>
              <h3 className="text-2xl font-bold text-navy-700 mb-4">Transparent Co-pay Structure</h3>
              <p className="text-gray-700 leading-relaxed text-justify">
               Get an easy-to-understand co-payment structure for premiums to ensure clarity.
              </p>

              <p className="text-gray-700 leading-relaxed text-justify">
               Know your costs upfront, fostering financial transparency throughout your term.
              </p>
            </div>

            {/* Varied Coverage Scenarios Card */}
            <div className="bg-white p-8 rounded-card card-elevated transform transition duration-300 hover:scale-105 hover:shadow-xl animate-delayFadeIn-3">
              <svg className="w-16 h-16 mx-auto mb-6" fill="none" stroke="url(#iconGradient12)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {gradientStops("iconGradient12")}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 2v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              <h3 className="text-2xl font-bold text-navy-700 mb-4">Varied Coverage Scenarios</h3>
              <p className="text-gray-700 leading-relaxed text-justify">
               Explore our clearly defined coverage scenarios with various life stages and financial needs.
              </p>

               <p className="text-gray-700 leading-relaxed text-justify">
             Easily understand what's covered, and plan accordingly for your family's financial security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tailwind CSS Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-out forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-bounceIn {
          animation: bounceIn 0.8s ease-out forwards;
        }

        /* Delayed Fade In for cards */
        @keyframes delayFadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-delayFadeIn {
          animation: delayFadeIn 0.8s ease-out forwards;
          animation-delay: 0.2s;
        }
        .animate-delayFadeIn-2 {
          animation: delayFadeIn 0.8s ease-out forwards;
          animation-delay: 0.4s;
        }
        .animate-delayFadeIn-3 {
          animation: delayFadeIn 0.8s ease-out forwards;
          animation-delay: 0.6s;
        }
      `}</style>
    </>
  )
}
