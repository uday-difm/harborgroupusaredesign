"use client";

import React from 'react';
import { ShieldCheck, DollarSign, Stethoscope, SlidersHorizontal } from 'lucide-react';

// A reusable component for the benefit list items
const BenefitItem = ({ icon: Icon, title, children, delay }) => {
  return (
    <div 
      className="relative pl-16 animate-fade-in-up"
      style={{ animationDelay: delay }}
    >
      <div className="absolute top-1 left-0 flex items-center justify-center w-12 h-12 rounded-xl bg-sky-100 text-sky-500">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold text-indigo-900">{title}</h3>
      <p className="mt-1 text-base text-gray-600">{children}</p>
    </div>
  );
};

export const BenefitsSection = ()=> {
  return (
    <div className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* --- Left Column: Image Composition --- */}
          <div className="relative h-96 lg:h-[600px] animate-fade-in">
            <div className="relative w-full h-full">
                {/* Background Shapes */}
                <div className="absolute -bottom-8 -right-8 w-full h-full bg-gray-100 rounded-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-sky-200 to-indigo-200 rounded-3xl shadow-2xl transform -rotate-6"></div>
                
                {/* Image */}
                <div className="absolute inset-4">
                    <img 
                        src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Benefits-of-Major-Medical-Plans.jpeg"
                        alt="A doctor holding a wooden shield, symbolizing protection"
                        className="w-full h-full object-cover rounded-2xl shadow-xl"
                        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/800x1200/e2e8f0/a3a3a3?text=Protection'; }}
                    />
                </div>
            </div>
          </div>

          {/* --- Right Column: Text Content --- */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-900 tracking-tight">
              Benefits of Major Medical Plans
            </h2>
            
            {/* Benefits List */}
            <div className="mt-10 space-y-10">
                <BenefitItem icon={ShieldCheck} title="Comprehensive Coverage" delay="0.4s">
                    Our plans provide extensive coverage for medical services, including preventive care, chronic condition management, and emergency services, ensuring that all your healthcare needs are met.
                </BenefitItem>
                <BenefitItem icon={DollarSign} title="Financial Protection" delay="0.6s">
                    With significant coverage for medical expenses, our plans protect you from the high costs associated with serious illnesses and injuries, providing peace of mind.
                </BenefitItem>
                <BenefitItem icon={Stethoscope} title="Access to Specialists" delay="0.8s">
                   Our network includes a wide range of specialists, ensuring that you receive expert care for specific health concerns. Whether you need a cardiologist, endocrinologist, or another specialist, our plans provide the necessary coverage.
                </BenefitItem>
                <BenefitItem icon={SlidersHorizontal} title="Flexibility" delay="1s">
                   Our plans are customizable to fit your unique healthcare needs and financial situation, allowing you to choose from various deductibles, co-pays, and additional benefits to tailor the plan to your requirements.
                </BenefitItem>
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
          from { opacity: 0; transform: scale(0.95); }
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
