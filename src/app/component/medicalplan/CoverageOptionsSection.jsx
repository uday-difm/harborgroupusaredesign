"use client";

import React from 'react';

export const CoverageOptionsSection = () => {
  const primaryDarkBlue = '#1A2E5B'; 
  const accentLightBlue = '#4CAFDE'; 
  const softGrayBg = '#F0F2F5'; 
  const white = '#FFFFFF';

  const keyFeatures = [
    "Comprehensive Health Coverage",
    "Peace of Mind Assurance",
    "Extensive Provider Network",
    "Practical Health Solutions",
    "Fast Turnaround Time",
    "Proactive Wellness Focus"
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 font-inter relative overflow-hidden" style={{ background: `linear-gradient(to br, ${softGrayBg}, ${primaryDarkBlue}05)` }}>
      <div
        className="absolute top-0 left-0 w-80 h-80 sm:w-96 sm:h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob-slow"
        style={{ backgroundColor: accentLightBlue + '20', transform: 'translate(-70%, -70%)' }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 sm:w-1/2 sm:h-1/2 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob-slow animation-delay-2000"
        style={{ backgroundColor: primaryDarkBlue + '20', transform: 'translate(70%, 70%)' }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 animate-scale-in" style={{ backgroundColor: white }}>
        {/* Coverage Options Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 animate-fade-in-up" style={{ color: primaryDarkBlue }}>
            Coverage options
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto animate-fade-in-up delay-100">
            Enjoy peace of mind with coverage for hospitalization, doctor visits, prescription medications, and more.
          </p>
        </div>

        {/* Key Features Section */}
        <div className="mt-12">
          <h3 className="text-3xl font-extrabold text-center mb-8 animate-fade-in-up delay-200" style={{ color: primaryDarkBlue }}>
            Key Features
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center p-4 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg animate-fade-in-up-staggered"
                style={{
                  backgroundColor: softGrayBg,
                  borderLeft: `6px solid ${accentLightBlue}`,
                  animationDelay: `${0.4 + index * 0.1}s`
                }}
              >
                <svg className="w-6 h-6 mr-3 flex-shrink-0 animate-icon-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ color: primaryDarkBlue }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p className="text-base font-semibold" style={{ color: primaryDarkBlue }}>
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind CSS Custom Animations */}
      {/* Ensure these keyframes and animations are added to your tailwind.config.js */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes blob-slow-anim {
          0% { transform: translate(-70%, -70%) scale(1); }
          25% { transform: translate(-60%, -80%) scale(1.05); }
          50% { transform: translate(-80%, -60%) scale(0.95); }
          75% { transform: translate(-75%, -75%) scale(1.02); }
          100% { transform: translate(-70%, -70%) scale(1); }
        }

        @keyframes blob-slow-anim-alt {
          0% { transform: translate(70%, 70%) scale(1); }
          25% { transform: translate(80%, 60%) scale(0.95); }
          50% { transform: translate(60%, 80%) scale(1.05); }
          75% { transform: translate(65%, 75%) scale(0.98); }
          100% { transform: translate(70%, 70%) scale(1); }
        }

        @keyframes iconBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fade-in-up.delay-100 { animation-delay: 0.1s; }
        .animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
        .animate-scale-in { animation: scaleIn 0.7s ease-out forwards; }
        .animate-blob-slow { animation: blob-slow-anim 25s infinite alternate ease-in-out; }
        .animate-blob-slow.animation-delay-2000 { animation-delay: 2s; }
        .animate-icon-bounce { animation: iconBounce 1s ease-in-out infinite alternate; }

        /* Staggered fade in for feature items */
        .animate-fade-in-up-staggered {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};


