"use client";


import React from 'react'
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased flex flex-col items-center justify-center">
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-blue-200 text-blue-900">
        <Image 
        width= {600}
        height = {400}
          className="absolute inset-0 w-full  object-contain opacity-60"
          src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/limited-med-plan-hero-section.jpeg" 
          alt="Couple looking at a scenic view"
        />
        <div className="absolute inset-0 bg-blue-50 opacity-70"></div> 
        <div className="absolute inset-0 opacity-30 pointer-events-none animate-radialPulse"> 
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <filter id="blurFilterMedV2" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" /> 
              </filter>
              <radialGradient id="radialGradientPulse" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.15" /> 
                <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#radialGradientPulse)" filter="url(#blurFilterMedV2)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center relative z-10 p-4 sm:p-6 lg:p-8 text-center"> 
          <div className="max-w-7xl animate-slideInUp">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-6 leading-tight drop-shadow-xl animate-textGlowLight">
              Limited Med Plans <br className="hidden sm:block"/>  coverage for specific needs
            </h1>
            <p className="text-lg sm:text-xl text-gray-900 mb-10 max-w-5xl mx-auto drop-shadow-md animate-fadeInUp delay-100">
              Experience targeted medical coverage with our Limited Med Plans at Harbor Group USA. Tailored to address specific health needs, our Limited Med Plans offer a specialized approach to ensure you receive the care you require. Discover a customer-centric solution that provides focused coverage for your distinct medical requirements. It's not just a plan; it's a precise and efficient tool designed to alleviate the financial burden of specific health concerns.
            </p>
            <button className="bg-sky-400 hover:bg-sky-400 text-white font-bold py-4 px-10 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-75 animate-bounceIn delay-200">
              GET STARTED
            </button>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-out forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }

        @keyframes slideInUp { /* New animation */
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideInUp {
          animation: slideInUp 1s ease-out forwards;
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
          70% {
            transform: scale(0.95);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-bounceIn {
          animation: bounceIn 0.8s ease-out forwards;
        }

        @keyframes textGlowLight {
          0% {
            text-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
          }
          50% {
            text-shadow: 0 0 10px rgba(0, 0, 0, 0.2), 0 0 15px rgba(0, 0, 0, 0.05);
          }
          100% {
            text-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
          }
        }
        .animate-textGlowLight {
          animation: textGlowLight 3s infinite alternate ease-in-out;
        }

        @keyframes radialPulse { /* New animation for radial background */
          0% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.4;
          }
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
        }
        .animate-radialPulse {
          animation: radialPulse 8s infinite alternate ease-in-out;
        }

        /* Utility for delayed animations */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>
    </div>
  );
};

