"use client";

import React from 'react'
import { SectionGlow } from '@/common/SectionGlow';

export default function ProtectionOverview() {
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
      {/* Existing Section: Protection Overview */}
      <section className="w-full section-light py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <SectionGlow position="topLeft" className="opacity-30" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-extrabold text-navy-800 mb-8 text-center">
           Protection Overview
          </h2>
          <p className="text-lg text-navy-500 mb-12 text-center max-w-3xl mx-auto">
            Our Term Life Plan acts like a safety net, providing financial security to your family if something unexpected happens, it is designed to help them cover everyday expenses or even pay off debts. It gives them a solid financial foundation, even when you’re not there.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
            {/* Comprehensive Financial Safeguard Card */}
            <div className="bg-navy-50 p-8 rounded-2xl card-elevated hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
              <svg className="w-16 h-16 mx-auto mb-6" fill="none" stroke="url(#iconGradient1)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {gradientStops("iconGradient1")}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.592 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.592-1M12 10a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
              <h3 className="text-2xl font-bold text-navy-700 mb-4">
               Comprehensive Financial Safeguard
              </h3>
              <p className="text-navy-600 leading-relaxed text-justify">
                From the anticipated financial obligations to the unforeseen contingencies, each facet is meticulously addressed, providing a robust foundation for the financial security of your loved ones.
              </p>
            </div>

            {/* Tailored Coverage Card */}
            <div className="bg-navy-50 p-8 rounded-2xl card-elevated hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
              <svg className="w-16 h-16 mx-auto mb-6" fill="none" stroke="url(#iconGradient2)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {gradientStops("iconGradient2")}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.007 12.007 0 002.944 12c.047 2.27 1.059 4.417 2.944 6.182a12.007 12.007 0 0014.112 0c1.885-1.765 2.897-3.912 2.944-6.182a12.007 12.007 0 00-2.944-8.618z"></path>
              </svg>
              <h3 className="text-2xl font-bold text-navy-700 mb-4">
               Tailored Coverage
              </h3>
              <p className="text-navy-600 leading-relaxed text-justify">
                Get a Term Life Plan built around your family’s specific needs and goals. Whether it’s covering college expenses, paying off bills, or fulfilling their dreams, we work with you to create a personalized plan that provides peace of mind, not just generic coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tailwind CSS Custom Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-out forwards;
        }
      `}</style>
    </>
  )
}
