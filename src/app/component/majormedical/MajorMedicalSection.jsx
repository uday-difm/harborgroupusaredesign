"use client";

import React from 'react';
import { ShieldCheck, Stethoscope, DollarSign, ArrowRight } from 'lucide-react';

// A reusable component for the feature highlights
const FeatureHighlight = ({ icon: Icon, title, children, delay }) => {
  return (
    <div 
      className="group text-center p-6 animate-fade-in-up"
      style={{ animationDelay: delay }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 text-sky-500 mb-5">
        <Icon className="w-10 h-10" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-base text-gray-300">{children}</p>
    </div>
  );
};

export const MajorMedicalSection = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden py-45">
      {/* Background Image & Gradient Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img 
              src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Major-Medical-Plans.jpg"
              alt="Healthcare professional reviewing medical data"
              className="w-full h-full object-cover object-center animate-zoom-in"
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/1920x1080/111827/ffffff?text=Healthcare'; }}
          />
          <div className="absolute inset-0 bg-gray-800/70"></div>
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 mt-60 mb-65 lg:mt-0 lg:mb-0 lg:px-8 h-dvh flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center py-12">
          
          {/* --- Main Text Content --- */}
          <div className="animate-fade-in-up">
            <p className="text-base font-semibold text-sky-400 uppercase tracking-wide">
              Major Medical Plans
            </p>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-white tracking-tight "   style={{ lineHeight: "1.2" }}>
            Comprehensive Healthcare Coverage with Our Major Medical Plans
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-200">
           Prioritizing overall well-being is essential. Our Major Medical Plans are crafted to deliver extensive healthcare coverage, ensuring top-notch care without financial stress. These plans offer a wide range of benefits tailored to diverse needs, including comprehensive medical coverage, preventive care services, and flexible options to suit various budgets and requirements.
            </p>
          </div>

          {/* --- Features Grid --- */}
          <div className="mt-12 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureHighlight icon={ShieldCheck} title="Comprehensive Coverage" delay="0.2s">
                Extensive medical benefits tailored to diverse needs.
            </FeatureHighlight>
            <FeatureHighlight icon={Stethoscope} title="Preventive Care" delay="0.4s">
                Access to top-notch preventive services to maintain your health.
            </FeatureHighlight>
            <FeatureHighlight icon={DollarSign} title="Flexible Options" delay="0.6s">
                Plans designed to suit various budgets and requirements.
            </FeatureHighlight>
          </div>
            
          {/* --- CTA Button --- */}
          <div className="mt-12 md:mt-10 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">For Members Only</p>
              <a
                  href="#lifestyle-plan-form"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-sky-500 hover:bg-sky-600 shadow-2xl shadow-sky-500/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                  GET NOW
                  <ArrowRight className="ml-2 h-5 w-5" />
              </a>
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
        @keyframes zoom-in {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-zoom-in {
          animation: zoom-in 15s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
