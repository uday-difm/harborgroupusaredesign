"use client";

import React from 'react';
import { ShieldCheck, Stethoscope, DollarSign, ArrowRight } from 'lucide-react';

// A reusable component for the feature highlights
const FeatureHighlight = ({ icon: Icon, title, children, delay }) => {
  return (
    <div 
      className="group text-center p-6 animate-fade-in-up card-dark"
      style={{ animationDelay: delay }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-navy-700/50 border border-navy-600 mb-5 text-accent">
        <Icon className="w-8 h-8" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-base text-navy-200">{children}</p>
    </div>
  );
};

export const MajorMedicalSection = () => {
  return (
    <div className="section-dark relative min-h-[90vh] flex items-center justify-center py-20 overflow-hidden">
      {/* Background Image & Gradient Overlay */}
      <div className="absolute inset-0 img-duotone pointer-events-none">
          <img 
              src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Major-Medical-Plans.jpg"
              alt="Healthcare professional reviewing medical data"
              className="w-full h-full object-cover object-center animate-zoom-in"
          />
          <div className="absolute inset-0 bg-navy-800/80 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-5xl mx-auto text-center py-12">
          
          {/* --- Main Text Content --- */}
          <div className="animate-fade-in-up">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              Premium Coverage
            </p>
            <h1 className="text-display font-display font-bold text-white tracking-tight mb-6">
              Comprehensive Healthcare Coverage with Major Medical Plans
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-navy-100 leading-relaxed">
              Prioritizing overall well-being is essential. Our Major Medical Plans are crafted to deliver extensive healthcare coverage, ensuring top-notch care without financial stress. These plans offer a wide range of benefits tailored to diverse needs, including comprehensive medical coverage, preventive care services, and flexible options to suit various budgets and requirements.
            </p>
          </div>

          {/* --- Features Grid --- */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
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
          <div className="mt-16 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <a
                  href="#lifestyle-plan-form"
                  className="btn-accent px-10 py-5 text-lg"
              >
                  Get Your Plan
                  <ArrowRight className="ml-3 h-6 w-6" />
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
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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
