import React from 'react';

// Main App component (can be integrated into your existing App or a new page)
export const EligibilityCriteria = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 font-inter py-16 px-4 md:px-8">
      {/* Custom CSS for animations */}
      <style>
        {`
        @keyframes fadeInSlideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes cardPopIn {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes iconPulseLight {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.9; }
        }

        .animate-fadeInSlideUp { animation: fadeInSlideUp 0.8s ease-out forwards; }
        .animate-cardPopIn { animation: cardPopIn 0.7s ease-out forwards; }
        .animate-iconPulseLight { animation: iconPulseLight 2s ease-in-out infinite alternate; }

        /* Delay animations for sequential appearance */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        `}
      </style>

      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-12 opacity-0 animate-fadeInSlideUp delay-100">
        <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-900 mb-4 drop-shadow-sm">
          Eligibility Criteria of Vision Plan
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          We ensure everyone can access affordable and essential eye care.
        </p>
      </div>

      {/* Eligibility Criteria Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

        {/* Card 1: Citizenship or Legal Residency */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center opacity-0 animate-cardPopIn delay-200 hover:shadow-xl transition-shadow duration-300">
          <div className="mb-4 text-blue-400 animate-iconPulseLight">
            {/* Home/Citizenship Icon SVG */}
            <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 001 1h3m-6-10v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Citizenship or Legal Residency</h3>
          <p className="text-gray-600 leading-relaxed">
            Citizenship or Legal Residency - US citizenship or legal residency status is a prerequisite.
          </p>
        </div>

        {/* Card 2: Age Eligibility */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center opacity-0 animate-cardPopIn delay-300 hover:shadow-xl transition-shadow duration-300">
          <div className="mb-4 text-sky-400 animate-iconPulseLight" style={{ animationDelay: '0.5s' }}>
            {/* Age/Person Icon SVG */}
            <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Age Eligibility</h3>
          <p className="text-gray-600 leading-relaxed">
            Age-Tailored for individuals aged 18 to 100 years
          </p>
        </div>

        {/* Card 3: Income Verification */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center opacity-0 animate-cardPopIn delay-400 hover:shadow-xl transition-shadow duration-300">
          <div className="mb-4 text-gray-400 animate-iconPulseLight" style={{ animationDelay: '1s' }}>
            {/* Money/Wallet Icon SVG */}
            <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h10M12 3v18"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 5H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Income Verification</h3>
          <p className="text-gray-600 leading-relaxed">
            Income Verification - Certain plans may require proof of income to determine eligibility
          </p>
        </div>

      </div>
    </div>
  );
};
