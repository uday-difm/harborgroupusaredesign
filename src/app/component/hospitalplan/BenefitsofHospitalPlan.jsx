import React from 'react'

export const BenefitsofHospitalPlan = () => {
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
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-indigo-900 mb-4 animate-fadeInUp">
           Benefits of Hospital Plan
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
        At Harbor Group USA, we understand the significance of dedicated hospitalization coverage. Our Hospital Plans offer straightforward benefits to ease the burden of hospital expenses.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 text-left"> {/* Changed to 3 columns for better spacing with 3 items */}
            {/* Benefit 1 */}
            <div className="flex items-start text-gray-700 animate-delayFadeIn">
              <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="url(#blueGradientBenefit1)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {blueGradient("blueGradientBenefit1")}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>We offer hostipal plans tailored to cover a spectrum of hospitalization expenses, including room charges, surgeries, and more</span>
            </div>

            {/* Benefit 2 */}
            <div className="flex items-start text-gray-700 animate-delayFadeIn-2">
              <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="url(#blueGradientBenefit2)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {blueGradient("blueGradientBenefit2")}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Ensure comprehensive financial coverage to support you during your hospital stay</span>
            </div>

            {/* Benefit 3 */}
            <div className="flex items-start text-gray-700 animate-delayFadeIn-3">
              <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="url(#blueGradientBenefit3)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {blueGradient("blueGradientBenefit3")}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Benefit from a straightforward claims process designed for ease during stressful situations</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
