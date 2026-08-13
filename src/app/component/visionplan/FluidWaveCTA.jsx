import React from 'react';
import { StepsPathIllustration } from '@/common/illustrations/StepsPathIllustration';

// Main App component (can be integrated into your existing App or a new page)
export const FluidWaveCTA = () => {
  return (
    <div className="min-h-[50vh] bg-gradient-to-br from-navy-50 to-navy-50 font-inter flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden">
      <StepsPathIllustration className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-16 text-accent opacity-[0.08] pointer-events-none rotate-3" />
      {/* Custom CSS for animations */}
      <style>
        {`
        @keyframes fluidWave {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes fadeInScaleUp {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes buttonFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .animate-fluidWave { animation: fluidWave 25s ease infinite alternate; }
        .animate-fadeInScaleUp { animation: fadeInScaleUp 1s ease-out forwards; }
        .animate-buttonFloat { animation: buttonFloat 2s ease-in-out infinite; }

        /* Delay animations for sequential appearance */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        `}
      </style>

      {/* Abstract Background Elements - Fluid Wave */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center animate-fluidWave"
        style={{
          backgroundImage: 'linear-gradient(135deg, var(--color-navy-50) 0%, var(--color-navy-100) 50%, var(--color-navy-50) 100%)', // Light blue/sky gradient
          backgroundSize: '200% 200%', // Allows the gradient to pan
        }}
      >
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40"></div>
      </div>

      {/* Content Container - Floating on the wave */}
      <div className="relative z-10 max-w-6xl mx-auto text-center p-8 md:p-12  backdrop-blur-md  animate-fadeInScaleUp">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight mb-8 drop-shadow-sm opacity-0 animate-fadeInScaleUp delay-100">     
Unlock Clear Vision and Confidence Today! Enroll Now for Comprehensive Vision Coverage
        </h3>
        <button
          className="px-12 py-5 bg-accent text-white font-bold text-xl rounded-full card-elevated hover:bg-accent-dark transform hover:scale-105 transition-all duration-300 ease-in-out
                     focus:outline-none focus:ring-4 focus:ring-accent focus:ring-opacity-75 tracking-wide uppercase animate-buttonFloat"
        >
          ENROLL IN VISION CARE
        </button>
      </div>
    </div>
  );
};

