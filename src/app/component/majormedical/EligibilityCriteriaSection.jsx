"use client";

import React from 'react';
import { MapPin, Clock, Heart, Flag } from 'lucide-react';

// A reusable component for the criteria items
const CriteriaItem = ({ icon: Icon, title, children, delay }) => {
  return (
    <div 
      className="relative p-6 bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 animate-fade-in-up"
      style={{ animationDelay: delay }}
    >
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-sky-100 text-sky-500">
          <Icon className="w-7 h-7" />
        </div>
        <h3 className="text-lg font-bold text-indigo-900">{title}</h3>
      </div>
      <p className="mt-4 text-base text-gray-600">{children}</p>
    </div>
  );
};

export const EligibilityCriteriaSection = () => {
  return (
    <div className="relative bg-white py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(#e0f2fe_1px,transparent_1px)] [background-size:40px_40px] opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Header Content --- */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-900 tracking-tight animate-fade-in-up">
            Eligibility Criteria of Major Medical Plan
          </h2>
          <p className="mt-4 text-lg text-gray-600 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          Open to individuals and families, our Major Medical Plans ensure that comprehensive support for your Major Medical needs is within reach.
          </p>
        </div>

        {/* --- Main Content Grid --- */}
        <div className="mt-20 max-w-4xl mx-auto">
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {/* Connecting Lines - Decorative */}
                <div className="hidden md:block absolute w-px h-full bg-sky-200 top-0 left-1/2 -translate-x-1/2"></div>
                <div className="hidden md:block absolute h-px w-full bg-sky-200 top-1/2 -translate-y-1/2"></div>
                
                <CriteriaItem icon={MapPin} title="Resident of the United States" delay="0.3s">
                   Our Major Medical Plans are accessible to individuals and families residing in the United States.
                </CriteriaItem>
                <CriteriaItem icon={Clock} title="Age Eligibility" delay="0.5s">
                    Tailored to cover individuals of all ages, ensuring coverage throughout various life stages.
                </CriteriaItem>
                <CriteriaItem icon={Heart} title="Ideal for a Balanced Lifestyle" delay="0.7s">
                    Perfect for those who prioritize maintaining a balanced and fulfilling Major Medical.
                </CriteriaItem>
                 <CriteriaItem icon={Flag} title="Citizenship" delay="0.9s">
                    US citizenship or legal residency status is a prerequisite for enrollment in our Major Medical Plans.
                </CriteriaItem>
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
      `}</style>
    </div>
  );
}
