import React from 'react';

export const EligibilityCriteriaSection = () => {
   <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-8 sm:p-12 animate-slideInUp">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Eligibility Criteria for the Medical Plans</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            This plan is open to individuals and families, making it accessible for everyone seeking reliable health coverage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Citizenship or Legal Residency */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 animate-scaleUp">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Citizenship or Legal Residency</h3>
              <p className="text-gray-600">
                US citizenship or legal residency status is a prerequisite.
              </p>
            </div>

            {/* Card 2: Age Eligibility */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 animate-scaleUp delay-100">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Age Eligibility</h3>
              <p className="text-gray-600">
               Tailored for individuals aged 18 to 100 years.
              </p>
            </div>

            {/* Card 3: Income Verification */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 animate-scaleUp delay-200">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Income Verification</h3>
              <p className="text-gray-600">
                Certain plans may require proof of income to determine eligibility.
              </p>
            </div>
          </div>
        </div>
     
}