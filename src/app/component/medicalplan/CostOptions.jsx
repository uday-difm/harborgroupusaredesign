import React from 'react'

export const CostOptions = () => {

    return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-inter text-gray-800 p-4 sm:p-8 flex items-center justify-center">
      <div className="max-w-6xl mx-auto   overflow-hidden">
        <div className="p-6 sm:p-10 text-center">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-800 mb-4 tracking-tight">
            Cost Options
          </h1>
          {/* Introduction */}
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Get medical plans with flexible choices to fit your budget and health requirements.
          </p>

          {/* Plan Cards Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12">
            {/* 2500 Classic Plan Card */}
            <div className="bg-white border border-indigo-200 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-justify">
              <h2 className="text-2xl sm:text-3xl font-bold text-accent mb-6 text-left">
                2500 Classic Plan Highlights
              </h2>
              <ul className="space-y-4 text-left text-gray-700 text-base sm:text-lg">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong className="font-semibold">Deductible:</strong> single: $2,500 and Family: $5,000</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong className="font-semibold">Max Out-Of-Pocket Limit:</strong> Single: $7,350 and Family: $14,700</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong className="font-semibold">Coverage includes:</strong> Primary care, Urgent care, Preventive care, and more</span>
                </li>
              </ul>
            </div>

            {/* 2500 Premium Plan Card */}
            <div className="bg-white border border-purple-200 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-accent mb-6 text-left">
                2500 Premium Plan Highlights
              </h2>
              <ul className="space-y-4 text-left text-gray-700 text-base sm:text-lg">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong className="font-semibold">Deductible:</strong> Single: $2,500 and Family: $5,000</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong className="font-semibold">Maximum Out-of-Pocket Limit:</strong> Single: $8,150 and Family: $16,300</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong className="font-semibold">Comprehensive coverage includes:</strong> Mental Health, Chiropractic Services, Rehabilitation, Childbirth/Delivery Facility, and more</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Conclusion */}
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
         Choose from various plans crafted to meet different financial requirements. We ensure you get the coverage you need at a price you can afford. Contact our Agents for specific cost breakdowns and payment options.
          </p>
        </div>
      </div>
    </div>
  )
}
