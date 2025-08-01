"use client";

import React from 'react';
import { Home, User, Wallet } from 'lucide-react';
import Image from 'next/image';

// A reusable component for each eligibility card
const EligibilityCard = ({ icon: Icon, title, children }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-sky-100 text-sky-500">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mt-2">{title}</h3>
      <p className="mt-2 text-base text-gray-600">{children}</p>
    </div>
  );
};

export const  DentalEligbility = ()=> {
  return (
    <div className="bg-gray-50 py-16 md:py-24 font-sans">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-left mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-900 tracking-tight text-center">
            Eligibility criteria of Dental Care Plan
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl text-center mx-auto">
           Open to individuals and families, our dental care plan ensures that quality dental care is within reach for everyone. Your smile is important, and so is your budget. Eligibility Criteria for the Dental Care Plans includes.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <EligibilityCard 
            icon={Home} 
            title="Citizenship or Legal Residency"
          >
            US citizenship or legal residency status is a prerequisite
          </EligibilityCard>
          
          <EligibilityCard 
            icon={User} 
            title="Age Eligibility"
          >
            Tailored for individuals aged 18 to 100 years.
          </EligibilityCard>
          
          <EligibilityCard 
            icon={Wallet} 
            title="Income Verification"
          >
            Certain plans may require proof of income to determine eligibility.
          </EligibilityCard>
        </div>

      </div>
    </div>
  );
}
