import React from 'react'

export const Benefits = () => {
      // Define the light blue gradient for icons
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
      {/* New Section: Benefits Of Bundles Plan */}
      <section className="w-full bg-white py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-navy-800 mb-4 ">
            Benefits Of Bundles Plan
          </h2>
          <p className="text-lg text-navy-500 mb-12 max-w-3xl mx-auto">
           Prioritize your family’s health with a range of benefits to keep them protected and thriving.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {/* Holistic Health Assessments Card */}
            <div className="bg-white p-8 rounded-2xl card-elevated transform transition duration-300 hover:scale-105 hover:shadow-xl animate-delayFadeIn">
              <h3 className="text-2xl font-bold text-navy-800 mb-4">Holistic Health Assessments</h3>
              <ul className="space-y-3 text-navy-500 text-left text-justify">
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="url(#benefitIconGradient1)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {gradientStops("benefitIconGradient1")}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Regular comprehensive health assessments designed for proactive care
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="url(#benefitIconGradient2)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {gradientStops("benefitIconGradient2")}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                 Early detection of potential health issues for precisely-tailored, timely intervention
                </li>
              </ul>
            </div>

            {/* Integrated Coverage Card */}
            <div className="bg-white p-8 rounded-2xl card-elevated transform transition duration-300 hover:scale-105 hover:shadow-xl animate-delayFadeIn-2">
              <h3 className="text-2xl font-bold text-navy-800 mb-4">Integrated Coverage</h3>
              <ul className="space-y-3 text-gray-700 text-left text-justify">
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="url(#benefitIconGradient3)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {gradientStops("benefitIconGradient3")}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                A seamless combination of multiple plans in one combo package
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="url(#benefitIconGradient4)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {gradientStops("benefitIconGradient4")}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                 Ensure 360 degree protection for unexpected health issues
                </li>
              </ul>
            </div>

            {/* Customizable Lifestyle Add-ons Card */}
            <div className="bg-white p-8 rounded-2xl card-elevated transform transition duration-300 hover:scale-105 hover:shadow-xl animate-delayFadeIn-3">
              <h3 className="text-2xl font-bold text-navy-800 mb-4">Customizable Lifestyle Add-ons</h3>
              <ul className="space-y-3 text-gray-700 text-left text-justify">
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="url(#benefitIconGradient5)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {gradientStops("benefitIconGradient5")}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                 Tailor your plan with lifestyle add-ons for personalized coverage
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="url(#benefitIconGradient6)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {gradientStops("benefitIconGradient6")}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  From fitness programs to mental health support, enhance your well-being
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> 
    </>
  )
}
