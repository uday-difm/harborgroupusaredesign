"use client";

import React from 'react';
import { SlidersHorizontal, Check } from 'lucide-react';
import Image from 'next/image';

// A reusable component for the benefit list items
const BenefitListItem = ({ children, delay }) => {
  return (
    <li 
      className="flex items-start space-x-3 animate-fade-in-up"
      style={{ animationDelay: delay }}
    >
      <div className="flex-shrink-0 pt-1">
        <Check className="w-5 h-5 text-sky-500" />
      </div>
      <span className="text-base text-gray-600">{children}</span>
    </li>
  );
};

export const CostOptionsSection = () => {
  return (
    <div className="bg-gray-50 py-20 md:py-28 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Header Content --- */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-base font-semibold text-sky-500 uppercase tracking-wide animate-fade-in-up">
            Know about Cost Options
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-indigo-900 tracking-tight animate-fade-in-up" style={{animationDelay: '0.1s'}}>
           Cost Options and Coverage Scenarios
          </h2>
          <p className="mt-4 text-lg text-gray-600 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Our Major Medical Plans offer programs that are good for your Wallet and better for your Well-being. We provide easy, simple, and professional options to suit your financial needs for maintaining a balanced Major Medical.
          </p>
        </div>

        {/* --- Main Content Card --- */}
        <div className="mt-16 max-w-5xl mx-auto">
            <div className="relative bg-white rounded-3xl shadow-2xl shadow-gray-200/80">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    
                    {/* Left Column: Image */}
                    <div className="relative h-80 lg:h-auto animate-fade-in" style={{animationDelay: '0.3s'}}>
                        <Image
                            src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/cost-options-and-coverage -scenarios.jpeg"
                            alt="Financial planning for healthcare"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none"
                        />
                    </div>

                    {/* Right Column: Text and Options */}
                    <div className="p-8 md:p-12">
                        <ul className="space-y-6">
                            <BenefitListItem delay="0.5s">
                                <strong className="text-indigo-900">Higher Deductibles, Lower Premiums:</strong> Lower monthly payments, higher out-of-pocket costs.
                            </BenefitListItem>
                            <BenefitListItem delay="0.6s">
                                <strong className="text-indigo-900">Lower Deductibles, Higher Premiums:</strong> Minimize out-of-pocket expenses.
                            </BenefitListItem>
                            <BenefitListItem delay="0.7s">
                                <strong className="text-indigo-900">Balanced Options:</strong> Moderate deductibles and premiums.
                            </BenefitListItem>
                        </ul>

                        {/* Customizable Plans Highlight */}
                        <div className="mt-10 pt-8 border-t border-gray-200 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-sky-100 text-sky-500">
                                    <SlidersHorizontal className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-indigo-900">Customizable Plans</h3>
                                    <p className="mt-1 text-base text-gray-600">
                                    Tailor plans for frequent specialist visits (Ultra 1000), basic coverage needs (Ultra 6000), chronic condition management, and preventive care.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
      {/* This style block is necessary for the custom animations. */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) forwards;
          opacity: 0;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
