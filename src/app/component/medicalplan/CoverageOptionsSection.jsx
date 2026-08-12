"use client";

import React from 'react';
import { Check } from 'lucide-react';

export const CoverageOptionsSection = () => {
  const keyFeatures = [
    "Comprehensive Health Coverage",
    "Peace of Mind Assurance",
    "Extensive Provider Network",
    "Practical Health Solutions",
    "Fast Turnaround Time",
    "Proactive Wellness Focus"
  ];

  return (
    <section className="section-light">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Coverage Options Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-h2 font-display font-bold text-navy-800 tracking-tight mb-4 animate-fade-in-up">
            Coverage Options
          </h2>
          <p className="text-lg text-navy-500 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Enjoy peace of mind with coverage for hospitalization, doctor visits, prescription medications, and more.
          </p>
        </div>

        {/* Var B: Offset grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyFeatures.map((feature, index) => {
            // Calculate offset based on column index (0, 1, 2)
            const colIndex = index % 3;
            const offsetClass = colIndex === 1 ? 'lg:translate-y-8' : colIndex === 2 ? 'lg:translate-y-16' : '';
            
            return (
              <div
                key={index}
                className={`card-elevated p-8 flex flex-col justify-center animate-fade-in-up transition-all duration-300 hover:-translate-y-2 ${offsetClass}`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mb-6">
                  <Check className="h-6 w-6 text-accent" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-navy-800 leading-snug">
                  {feature}
                </h3>
              </div>
            );
          })}
        </div>
        
        {/* Spacer to account for the offset grid's extra height at the bottom */}
        <div className="hidden lg:block h-16"></div>

      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};


