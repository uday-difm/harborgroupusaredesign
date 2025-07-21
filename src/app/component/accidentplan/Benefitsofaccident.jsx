import React from 'react'

export const Benefitsofaccident = () => {
     // Define a single light blue gradient for all icons (reused for consistency)
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
       {/* New Section: Benefits of Accident Plan */}
      <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-indigo-900 mb-4 animate-fadeInUp">
            Benefits of accident plan
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
           At Harbor Group USA, we prioritize simplicity and effectiveness in our Accident Plans, offering a range of benefits to provide financial relief during challenging times.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 mt-10 text-left">
            {/* Benefit List - Column 1 */}
            <ul className="space-y-4 animate-delayFadeIn">
              <li className="flex items-center text-gray-700">
                <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="url(#mainIconGradient)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Apply gradient */}
                  {mainIconGradient} {/* Render the gradient definition here */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Receive coverage for accident-related medical expenses
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="url(#mainIconGradient)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Apply gradient */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Ensure a financial safety net with income replacement benefits
              </li>
            </ul>
            {/* Benefit List - Column 2 */}
            <ul className="space-y-4 animate-delayFadeIn-2">
              <li className="flex items-center text-gray-700">
                <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="url(#mainIconGradient)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Apply gradient */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Comprehensive coverage for accidental death and dismemberment
              </li>
              <li className="flex items-center text-gray-700">
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
