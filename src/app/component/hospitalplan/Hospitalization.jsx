"use client";

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export const   Hospitalization = ()=>{
  return (
    <div className="min-h-screen bg-navy-50 font-sans antialiased flex flex-col items-center justify-center">

      {/* Hero Section for Hospitalization Plans */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-blue-200 text-navy-800">
        {/* Background Image with subtle overlay */}
        <Image
          className="absolute inset-0 w-full  object-contain opacity-70"
          src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Hospital-Plans-Page.jpg" // image_a9e337.png (Hospitalization Plans Hero Background)
          alt="Medical facility hallway"
          width = {600}
          height = {400}
        />
        {/* Gradient Overlay for light and decent color */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-300 opacity-60"></div> {/* Light blue gradient overlay */}
        <div className="absolute inset-0 bg-navy-50 opacity-40"></div> {/* Additional very light blue overlay */}

        {/* Abstract background pattern: subtle, animated circles */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <filter id="circleBlur" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
              </filter>
            </defs>
            <g filter="url(#circleBlur)">
              <circle cx="10" cy="10" r="8" fill="var(--color-navy-300)" opacity="0.15" className="animate-circlePulse1" /> {/* Blue-400 */}
              <circle cx="90" cy="30" r="12" fill="var(--color-navy-400)" opacity="0.1" className="animate-circlePulse2" /> {/* Cyan-400 */}
              <circle cx="30" cy="80" r="10" fill="var(--color-navy-200)" opacity="0.12" className="animate-circlePulse3" /> {/* Sky-300 */}
              <circle cx="70" cy="95" r="7" fill="var(--color-navy-100)" opacity="0.1" className="animate-circlePulse4" /> {/* Blue-200 */}
            </g>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-start justify-center relative z-10 p-4 sm:p-6 lg:p-8 text-left">
          {/* Text Content */}
          <div className="max-w-3xl animate-slideInLeft">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold mb-6 leading-tight drop-shadow-xl text-navy-800 animate-textGlowLight">
            Specialized plans for hospitalization expenses
            </h1>
            <p className="text-lg sm:text-xl text-navy-800 mb-10 max-w-xl mx-auto lg:mx-0 drop-shadow-md animate-fadeInUp delay-100">
             Navigate hospitalization expenses with confidence through our Specialized Hospital Plans at Harbor Group USA. Tailored to provide dedicated coverage for hospital stays, our plans are designed to alleviate the financial strain associated with medical emergencies.
            </p>
            <Link href="#hospital-plan-form" className="btn-accent px-10 py-4 font-bold">
              GET STARTED
            </Link>
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

        /* New Circle Pulse Animations */
        @keyframes circlePulse {
          0%, 100% { transform: scale(1); opacity: 0.15; }
          50% { transform: scale(1.1); opacity: 0.25; }
        }
        .animate-circlePulse1 { animation: circlePulse 10s infinite alternate ease-in-out; }
        .animate-circlePulse2 { animation: circlePulse 12s infinite alternate ease-in-out; animation-delay: 0.5s; }
        .animate-circlePulse3 { animation: circlePulse 9s infinite alternate ease-in-out; animation-delay: 1s; }
        .animate-circlePulse4 { animation: circlePulse 11s infinite alternate ease-in-out; animation-delay: 1.5s; }


        /* Utility for delayed animations */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>
    </div>
  )
}
