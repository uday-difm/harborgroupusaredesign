// App.js
import React from 'react';

// Main App component
export const HowToApplySection = ()=> {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 font-sans text-gray-800 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-indigo-900 mb-4 leading-tight">How to Apply</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          At Harbor Group USA, getting the coverage you need is a straightforward process. Follow these simple steps to purchase your Major Medical plan.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Step Card Component - Reusable for cleaner code */}
          <StepCard
            iconPath="M20 18H4V8h16m0-2H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-7 12h-2v-2h2v2zM13 10h-2V8h2v2zM17 10h-2V8h2v2zM9 10H7V8h2v2z"
            title="Choose the Category on Website"
            description="Navigate our user-friendly website to explore the variety of plans we offer, choose the category"
          />
          <StepCard
            iconPath="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zm2 0v6h-6V2zm-4 18H6v-2h8v2zm0-4H6v-2h8v2zm0-4H6v-2h8v2z"
            title="Fill out the Form"
            description="Complete the quick online form to submit your request for a customised plan quote"
          />
          <StepCard
            iconPath="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.88 6-3.88s5.97 1.89 6 3.88c-1.29 1.94-3.5 3.22-6 3.22z"
            title="Get Expert Guidance"
            description="Receive expert advice from our agent and get a personalized quote tailored to your needs"
          />
          <StepCard
            iconPath="M12 4.5l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 19.5l7-7-7-7z"
            title="Compare and Choose"
            description="Find the ideal fit for your budget with flexible pricing and enrolment options, supported by our agents"
          />
          <StepCard
            iconPath="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 15L6 11l1.41-1.41L11 13.17l4.59-4.58L17 10l-6 6z"
            title="Verification Process"
            description="After selecting your subscription plan, complete a quick verification process to ensure eligibility"
          />
          <StepCard
            iconPath="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            title="Confirmation of Enrollment"
            description="Receive prompt confirmation of your enrollment along with detailed plan information"
          />
        </div>
      </div>
    </div>
  );
}

// Reusable Step Card Component
const StepCard = ({ iconPath, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105
                    border border-gray-200
                    flex flex-col items-center text-center">
      <div className="bg-gradient-to-br from-blue-300 to-teal-400 p-5 rounded-full mb-6 shadow-lg
                      relative after:absolute after:inset-0 after:rounded-full after:border-2 after:border-transparent
                      hover:after:border-blue-200 hover:after:scale-110 after:transition-all after:duration-300">
        <svg className="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d={iconPath} />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-3">{title}</h2>
      <p className="text-base text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};
