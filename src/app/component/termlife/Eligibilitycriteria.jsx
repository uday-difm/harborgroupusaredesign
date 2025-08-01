"use client";
import React from 'react'

export const Eligibilitycriteria = () => {
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
      {/* Existing Section: Eligibility Criteria */}
      <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-8 animate-fadeInUp">
            Eligibility criteria for Term Life Plans
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
             Open to individuals and families, our Term Life Plan ensures that comprehensive financial protection is within reach.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            {/* Resident Eligibility Card */}
            <div className="bg-blue-50 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl animate-delayFadeIn">
              <svg className="w-16 h-16 mx-auto mb-6" fill="none" stroke="url(#iconGradient8)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {gradientStops("iconGradient8")}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657m10.314-10.314L13.414 3.1a1.998 1.998 0 00-2.828 0L6.343 6.343m10.314 10.314A9.001 9.001 0 0012 21a9.001 9.001 0 00-5.657-4.343m10.314-10.314A9.001 9.001 0 0112 3a9.001 9.001 0 015.657 4.343M12 12V6"></path>
              </svg>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Resident of the United States</h3>
              <p className="text-gray-700 leading-relaxed">
               Our Term Life Plan is accessible to individuals and families currently residing in the United States.
              </p>
            </div>

            {/* Age Eligibility Card */}
            <div className="bg-blue-50 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl animate-delayFadeIn-2">
              <svg className="w-16 h-16 mx-auto mb-6" fill="none" stroke="url(#iconGradient9)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {gradientStops("iconGradient9")}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Age Eligibility</h3>
              <p className="text-gray-700 leading-relaxed">
                Tailored to cover individuals aged 18 to 100 years, ensuring robust coverage throughout various life stages.
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

        /* Removed slideInLeft as image is removed */

        /* Delayed Fade In for cards (if needed for future sections) */
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
