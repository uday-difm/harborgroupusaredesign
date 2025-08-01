import React from 'react'

export const PurchaseStepsSection = () =>{
  return (
   <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50 overflow-hidden">
      {/* Optional: Add a subtle overlay for visual texture or depth */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at top left, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at bottom right, rgba(0,0,0,0.05) 0%, transparent 50%)'
      }}></div>

      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-indigo-900 sm:text-5xl lg:text-6xl leading-tight mb-8">
         How to Purchase Our Individual Plans
        </h2>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
         At Harbor Group USA, getting the coverage you need is a straightforward process. Follow these simple steps to purchase your health plan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Step 1: Visit Our Website */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-left flex items-start">
            <div className="bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full p-3 mr-4 flex-shrink-0">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-1.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Visit Our Website</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
              Navigate to our user-friendly website to explore the variety of plans we offer
              </p>
            </div>
          </div>

          {/* Step 2: Compare Plans */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-left flex items-start">
            <div className="bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full p-3 mr-4 flex-shrink-0">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Compare Plans</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
               Review and compare different plans to find the one that aligns with your preferences and budget
              </p>
            </div>
          </div>

          {/* Step 3: Select Your Plan */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-left flex items-start">
            <div className="bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full p-3 mr-4 flex-shrink-0">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Select Your Plan</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
              Once you've found the perfect fit, select your plan and proceed to the application
              </p>
            </div>
          </div>

          {/* Step 4: Contact our Agent */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-left flex items-start">
            <div className="bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full p-3 mr-4 flex-shrink-0">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 00.95-.69l1.434-2.288a1 1 0 011.664 0l1.434 2.288a1 1 0 00.95.69H19a2 2 0 012 2v10a2 2 0 01-2 2h-3.28a1 1 0 00-.95.69l-1.434 2.288a1 1 0 01-1.664 0l-1.434-2.288a1 1 0 00-.95-.69H5a2 2 0 01-2-2V5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Contact our Agent</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Contact our agent through their referred numbers mentioned on our website
              </p>
            </div>
          </div>

          {/* Step 5: Verification Process */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-left flex items-start">
            <div className="bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full p-3 mr-4 flex-shrink-0">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Verification Process</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
               Expect a swift verification process to ensure accuracy and eligibility
              </p>
            </div>
          </div>

          {/* Step 6: Confirmation */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-left flex items-start">
            <div className="bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full p-3 mr-4 flex-shrink-0">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Confirmation</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Receive prompt confirmation of your enrollment along with detailed plan information
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
