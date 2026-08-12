import React from 'react';

// Main App component (can be integrated into your existing App or a new page)
export const LayeredCosts = () => {
  return (
    <div className=" bg-gradient-to-br from-blue-50 to-navy-50 font-inter py-16 px-4 md:px-8">
      {/* Custom CSS for animations */}
      <style>
        {`
        @keyframes fadeInSlideRight {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInSlideLeft {
          0% { opacity: 0; transform: translateX(30px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes pulseDot {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.2); opacity: 1; }
        }

        .animate-fadeInSlideRight { animation: fadeInSlideRight 0.8s ease-out forwards; }
        .animate-fadeInSlideLeft { animation: fadeInSlideLeft 0.8s ease-out forwards; }
        .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
        .animate-pulseDot { animation: pulseDot 2s ease-in-out infinite; }

        /* Delay animations for sequential appearance */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        `}
      </style>

      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-12 opacity-0 animate-fadeIn delay-100">
        <h2 className="text-4xl md:text-5xl font-extrabold text-navy-800 mb-4 drop-shadow-sm">
          Costs Options and Coverage
        </h2>
        <p className="text-lg md:text-xl text-navy-500 leading-relaxed">
         Our vision plans offer flexible options to suit your needs, with straightforward coverage options.
        </p>
      </div>

      {/* Main Content Area - Layered Cards */}
      <div className="max-w-5xl mx-auto relative">
        {/* Abstract Background Shapes/Lines */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full h-1 bg-sky-200 opacity-40 animate-fadeIn delay-200"></div>
          <div className="absolute w-1 h-full bg-blue-200 opacity-40 animate-fadeIn delay-300"></div>
        </div>

        {/* Content Cards */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Premium Options Card */}
          <div className="bg-white p-6 md:p-8 rounded-card card-elevated border border-navy-100 opacity-0 animate-fadeInSlideRight delay-300 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4 flex items-center justify-center text-accent">
              <svg className="w-16 h-16 animate-pulseDot" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V9m0 3v2m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Premium Options</h3>
            <ul className="text-left text-navy-500 space-y-3 text-justify ">
              <li className="flex items-start ">
                <span className="text-sky-400 mr-2 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                </span>
           Explore different premium plans for varying levels of coverage
              </li>
              <li className="flex items-start">
                <span className="text-sky-400 mr-2 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                </span>
              Tailor your plan to align with your eye care priorities
              </li>
            </ul>
          </div>

          {/* Co-Payment Structure Card */}
          <div className="bg-white p-6 md:p-8 rounded-card card-elevated border border-navy-100 opacity-0 animate-fadeIn delay-400 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4 flex items-center justify-center text-accent">
              <svg className="w-16 h-16 animate-pulseDot" style={{ animationDelay: '0.5s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Co-Payment Structure</h3>
            <ul className="text-left text-navy-500 space-y-3 text-justify">
              <li className="flex items-start">
                <span className="text-sky-400 mr-2 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                </span>
               Easy-to-understand co-payment structure for exams and eyewear
              </li>
              <li className="flex items-start">
                <span className="text-sky-400 mr-2 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                </span>
                Know your costs upfront, ensuring financial transparency
              </li>
            </ul>
          </div>

          {/* Coverage Scenarios Card */}
          <div className="bg-white p-6 md:p-8 rounded-card card-elevated border border-navy-100 opacity-0 animate-fadeInSlideLeft delay-500 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4 flex items-center justify-center text-blue-400">
              <svg className="w-16 h-16 animate-pulseDot" style={{ animationDelay: '1s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Coverage Scenarios</h3>
            <ul className="text-left text-navy-500 space-y-3 text-justify">
              <li className="flex items-start">
                <span className="text-sky-400 mr-2 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                </span>
               Clearly defined coverage scenarios for different eye care services
              </li>
              <li className="flex items-start">
                <span className="text-sky-400 mr-2 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                </span>
                Get guidance from our agent on what's covered and plan accordinglyy
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};
