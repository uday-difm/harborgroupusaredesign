"use client";

import React from 'react'
import Image from 'next/image';

export const BundlesPlanHeroSection = () => {
 // Define the light blue gradient for icons (kept for consistency, though not used in this single-section view)
  const gradientStops = (id) => (
    <defs>
      <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: '#7DD3FC', stopOpacity: 1}} /> {/* Tailwind sky-300 */}
        <stop offset="100%" style={{stopColor: '#22D3EE', stopOpacity: 1}} /> {/* Tailwind cyan-400 */}
      </linearGradient>
    </defs>
  );

  return (
 <div className="min-h-screen bg-gray-50 font-sans antialiased flex flex-col items-center justify-center">

      {/* Hero Section for Combine and Save - Enhanced Design with Light Colors */}
      {/* Changed background to a radial gradient for more depth */}
       <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100 to-blue-300 text-blue-900">
        {/* Abstract background pattern for uniqueness - subtle, animated circles */}
        <div className="absolute inset-0 opacity-20 pointer-events-none animate-bgPulse">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="pattern-circles-v2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="4" fill="#60A5FA" opacity="0.1"/>
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles-v2)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center relative z-10 p-4 sm:p-6 lg:p-8">
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left animate-slideInLeft">
            {/* Adjusted text color for readability on light background */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight drop-shadow-xl animate-textGlowLight">
              Combine and Save!
            </h1>
            {/* Adjusted text color for readability on light background */}
            <p className="text-lg sm:text-xl text-gray-900 mb-10 max-w-xl lg:max-w-none mx-auto lg:mx-0 drop-shadow-md animate-fadeInUp delay-100">
              Forget managing multiple plans - our meticulously crafted Bundles Plans are designed to fit your family's unique needs and safeguard your health. It's more than just a plan; it's your unified health solution!
            </p>
            {/* Button remains blue with white text */}
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-10 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-75 animate-bounceIn delay-200">
              GET STARTED
            </button>
          </div>

          {/* Right Column: Image with unique styling */}
          <div className="flex justify-center  animate-slideInRight">
            <Image
            width={600}
            height={400}
              className="w-full max-w-md h-auto rounded-xl shadow-2xl transition-transform duration-700 ease-in-out animate-imageFloat" /* Removed rotate-6 and hover:rotate-0 */
              src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/combine-and-save.jpeg"
              alt="Doctor's hand stacking health-related blocks"
              
            />
          </div>
        </div>
      </section>

      {/* Tailwind CSS Custom Animations */}
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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out forwards;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideInRight {
          animation: slideInRight 1s ease-out forwards;
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
        .animate-textGlow {
          animation: textGlowLight 3s infinite alternate ease-in-out;
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

        @keyframes imageFloat {
          0% {
            transform: translateY(0px); /* Removed rotate(6deg) */
          }
          50% {
            transform: translateY(-10px); /* Removed rotate(6deg) */
          }
          100% {
            transform: translateY(0px); /* Removed rotate(6deg) */
          }
        }
        .animate-imageFloat {
          animation: imageFloat 4s infinite ease-in-out;
        }

        @keyframes bgPulse {
          0% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.02);
            opacity: 0.25;
          }
          100% {
            transform: scale(1);
            opacity: 0.2;
          }
        }
        .animate-bgPulse {
          animation: bgPulse 6s infinite ease-in-out;
        }

        /* Utility for delayed animations */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }

        /* Delayed Fade In for cards */
        @keyframes delayFadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-delayFadeIn {
          animation: delayFadeIn 0.8s ease-out forwards;
          animation-delay: 0.2s;
        }
        .animate-delayFadeIn-2 {
          animation: delayFadeIn 0.8s ease-out forwards;
          animation-delay: 0.4s;
        }
        .animate-delayFadeIn-3 {
          animation: delayFadeIn 0.8s ease-out forwards;
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
};

