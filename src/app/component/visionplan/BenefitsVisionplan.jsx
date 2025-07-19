import React from 'react';

// Main App component (can be integrated into your existing App or a new page)
export const BenefitsVisionplan = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white font-inter py-16 px-4 md:px-8">
      {/* Custom CSS for animations */}
      <style>
        {`
        @keyframes fadeInSlideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes iconBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .animate-fadeInSlideUp { animation: fadeInSlideUp 0.8s ease-out forwards; }
        .animate-iconBounce { animation: iconBounce 1.5s ease-in-out infinite; }

        /* Delay animations for sequential appearance */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
        `}
      </style>

      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-12 opacity-0 animate-fadeInSlideUp delay-100">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 drop-shadow-sm">
          Benefits of Vision Plan
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Our comprehensive and stand-alone vision plans are designed to keep your eyes healthy and your wallet happy.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

        {/* Benefit Card 1: Comprehensive Eye Exams */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center opacity-0 animate-fadeInSlideUp delay-200 hover:shadow-xl transition-shadow duration-300">
          <div className="mb-4 text-sky-500 animate-iconBounce">
            {/* Eye Icon SVG */}
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Comprehensive Eye Exams</h3>
          <ul className="text-left text-gray-600 space-y-2">
            <li className="flex items-start">
              <span className="text-sky-400 mr-2 mt-1"> {/* Changed from text-green-500 */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              </span>
              Regular check-ups to monitor and maintain your eye health
            </li>
            <li className="flex items-start">
              <span className="text-sky-400 mr-2 mt-1"> {/* Changed from text-green-500 */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              </span>
              Early detection of potential issues to ensure proactive care
            </li>
          </ul>
        </div>

        {/* Benefit Card 2: Discounts on Corrective Eye Surgeries */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center opacity-0 animate-fadeInSlideUp delay-300 hover:shadow-xl transition-shadow duration-300">
          <div className="mb-4 text-blue-500 animate-iconBounce" style={{ animationDelay: '0.5s' }}>
            {/* Medical Cross/Stethoscope Icon SVG (or similar) */}
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Discounts on Corrective Eye Surgeries</h3>
          <ul className="text-left text-gray-600 space-y-2">
            <li className="flex items-start">
              <span className="text-sky-400 mr-2 mt-1"> {/* Changed from text-green-500 */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              </span>
              Exclusively discounted eye surgeries for improved long-term vision
            </li>
            <li className="flex items-start">
              <span className="text-sky-400 mr-2 mt-1"> {/* Changed from text-green-500 */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              </span>
              Advanced options for vision enhancement
            </li>
          </ul>
        </div>

        {/* Benefit Card 3: Prescription Eyewear Coverage */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center opacity-0 animate-fadeInSlideUp delay-400 hover:shadow-xl transition-shadow duration-300">
          <div className="mb-4 text-gray-500 animate-iconBounce" style={{ animationDelay: '1s' }}>
            {/* Glasses Icon SVG */}
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 21h4c.552 0 1-.448 1-1v-1a2 2 0 00-2-2h-2a2 2 0 00-2 2v1c0 .552.448 1 1 1z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 17V3m0 0a2 2 0 00-2-2h-2a2 2 0 00-2 2v14"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3a2 2 0 012-2h2a2 2 0 012 2v14"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Prescription Eyewear Coverage</h3>
          <ul className="text-left text-gray-600 space-y-2">
            <li className="flex items-start">
              <span className="text-sky-400 mr-2 mt-1"> {/* Changed from text-green-500 */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              </span>
              Enjoy coverage for prescription eyeglasses
            </li>
            <li className="flex items-start">
              <span className="text-sky-400 mr-2 mt-1"> {/* Changed from text-green-500 */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              </span>
              Contact lens prescriptions are also included
            </li>
          </ul>
        </div>

        {/* Benefit Card 4: Savings on Eyewear */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center opacity-0 animate-fadeInSlideUp delay-500 hover:shadow-xl transition-shadow duration-300">
          <div className="mb-4 text-blue-400 animate-iconBounce" style={{ animationDelay: '1.5s' }}>
            {/* Money/Savings Icon SVG */}
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Savings on Eyewear</h3>
          <ul className="text-left text-gray-600 space-y-2">
            <li className="flex items-start">
              <span className="text-sky-400 mr-2 mt-1"> {/* Changed from text-green-500 */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              </span>
              Affordable access to high-quality eyewear
            </li>
            <li className="flex items-start">
              <span className="text-sky-400 mr-2 mt-1"> {/* Changed from text-green-500 */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              </span>
              Stay in style with trendy eyewear without breaking the bank
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};
