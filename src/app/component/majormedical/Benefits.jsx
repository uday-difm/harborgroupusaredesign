"use client";

import React from 'react';
import { ShieldCheck, DollarSign, Stethoscope, SlidersHorizontal } from 'lucide-react';

// A reusable component for the benefit list items
const BenefitItem = ({ icon: Icon, title, children, delay }) => {
  return (
    <div 
      className="relative pl-20 animate-fade-in-up"
      style={{ animationDelay: delay }}
    >
      <div className="absolute top-0 left-0 flex items-center justify-center w-14 h-14 rounded-xl bg-navy-700/50 border border-navy-600 text-accent">
        <Icon className="w-7 h-7" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-base text-navy-200 leading-relaxed">{children}</p>
    </div>
  );
};

export const BenefitsSection = ()=> {
  return (
    <div className="section-dark py-20 md:py-32 overflow-hidden border-t border-navy-700">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* --- Left Column: Image Composition --- */}
          <div className="relative h-[400px] lg:h-[600px] animate-fade-in">
            <div className="relative w-full h-full">
                {/* Background Shapes */}
                <div className="absolute -bottom-6 -right-6 w-full h-full bg-navy-800 rounded-3xl border border-navy-700"></div>
                
                {/* Image */}
                <div className="absolute inset-0 z-10 img-duotone rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                        src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Benefits-of-Major-Medical-Plans.jpeg"
                        alt="A doctor holding a wooden shield, symbolizing protection"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
          </div>

          {/* --- Right Column: Text Content --- */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-h2 font-display font-bold text-white tracking-tight mb-12">
              Benefits of Major Medical Plans
            </h2>
            
            {/* Benefits List */}
            <div className="space-y-12">
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
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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
