import React from 'react'
import { BenefitsShieldIllustration } from '@/common/illustrations/BenefitsShieldIllustration';

export const Benefitsofaccident = () => {
     // Define a single light blue gradient for all icons (reused for consistency)
  const mainIconGradient = (
    <defs>
      <linearGradient id="mainIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: 'var(--color-navy-200)', stopOpacity: 1}} /> {/* Tailwind sky-300 */}
        <stop offset="100%" style={{stopColor: 'var(--color-navy-400)', stopOpacity: 1}} /> {/* A vibrant teal/cyan from the provided image */}
      </linearGradient>
    </defs>
  );
  return (
    <>
       {/* New Section: Benefits of Accident Plan */}
      <section className="w-full section-light py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center relative">
          <BenefitsShieldIllustration className="absolute -top-6 right-0 w-24 h-24 text-accent opacity-15 pointer-events-none hidden md:block" />
          <h2 className="text-4xl font-extrabold text-navy-800 mb-4 ">
            Benefits of Accident Plan
          </h2>
          <p className="text-lg text-navy-500 mb-12 max-w-3xl mx-auto">
           At Harbor Group USA, we prioritize simplicity and effectiveness in our Accident Plans, offering a range of benefits to provide financial relief during challenging times.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 mt-10 text-left">
            {/* Benefit List - Column 1 */}
            <ul className="space-y-4 animate-delayFadeIn">
              <li className="flex items-center text-navy-600">
                <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="url(#mainIconGradient)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Apply gradient */}
                  {mainIconGradient} {/* Render the gradient definition here */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Receive coverage for accident-related medical expenses
              </li>
              <li className="flex items-center text-navy-600">
                <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="url(#mainIconGradient)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Apply gradient */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              Ensure a financial safety net with income replacement benefits
              </li>
            </ul>
            {/* Benefit List - Column 2 */}
            <ul className="space-y-4 animate-delayFadeIn-2">
              <li className="flex items-center text-navy-600">
                <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="url(#mainIconGradient)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Apply gradient */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Comprehensive coverage for accidental death and dismemberment
              </li>
              <li className="flex items-center text-navy-600">
                <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="url(#mainIconGradient)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Apply gradient */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
               Specific coverage for fractures, dislocations, and burns
              </li>
            </ul>
          </div>
        </div>
      </section>

    </>
  )
}
