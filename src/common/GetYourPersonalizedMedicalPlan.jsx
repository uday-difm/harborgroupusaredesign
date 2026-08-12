import React from 'react';
import Link from 'next/link';

export const GetYourPersonalizedMedicalPlan = ({ title, link , url}) => {
  return (
    <div>
      {/* New Section: Get Your Personalized Medical Plan - Enhanced Design */}
      <div className="w-full mx-auto bg-blue-50 p-8 sm:p-12 flex flex-col items-center justify-center animate-slideInUp relative overflow-hidden">
        {/* Subtle background SVG pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <circle cx="20" cy="20" r="15" fill="var(--color-navy-200)" />
          <circle cx="80" cy="50" r="25" fill="var(--color-navy-100)" />
          <circle cx="50" cy="90" r="10" fill="var(--color-navy-200)" />
          <path d="M0,50 Q25,20 50,50 T100,50 V100 H0 Z" fill="var(--color-navy-50)" />
        </svg>

        <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 text-center text-blue-900 relative z-10">
          {title || 'Get Your Personalized Medical Plan'}
        </h2>
        <Link href={url || '#medical-form'} className="bg-blue-600 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 relative z-10">
          {link}
        </Link>
      </div>
    </div>
  );
};
