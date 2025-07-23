"use client";

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export const AccidentHero = () => {
  const mainIconGradient = (
    <defs>
      <linearGradient id="mainIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: '#7DD3FC', stopOpacity: 1}} /> {/* Tailwind sky-300 */}
        <stop offset="100%" style={{stopColor: '#22D3EE', stopOpacity: 1}} /> {/* Tailwind cyan-400 */}
      </linearGradient>
    </defs>
  );
  return (
    <>

    <div className="min-h-screen bg-gray-50 font-sans antialiased flex flex-col items-center justify-center">

      {/* Hero Section for Accident Coverage - NEW UNIQUE DESIGN (Geometric Overlay) */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-white text-blue-900"> {/* Start with a white background */}
        {/* Background Image - more prominent, but still filtered */}
        <Image
          className="absolute inset-0 w-full h-full object-cover opacity-60 filter grayscale contrast-120" /* More prominent, desaturated, higher contrast */
          src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Accident.jpg" // image_ab30b4.png (Accident Coverage Hero Background)
          alt="Medical professional assisting a patient"
          width={600}
          height= {400}

        />
        {/* Multi-stop gradient overlay pulling from logo colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-200 to-transparent opacity-60"></div> {/* Darker blue to light blue gradient */}
        <div className="absolute inset-0 bg-blue-50 opacity-30"></div> {/* Additional light blue overlay */}

        {/* Abstract animated geometric shapes (triangles) using logo colors */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <filter id="shapeBlur" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
              </filter>
            </defs>
            <g filter="url(#shapeBlur)">
              <polygon points="0,0 20,0 0,20" fill="#1E3A8A" opacity="0.1" className="animate-shapeMove1" /> {/* Dark Blue */}
              <polygon points="100,0 80,0 100,20" fill="#BFDBFE" opacity="0.1" className="animate-shapeMove2" /> {/* Light Blue */}
              <polygon points="0,100 20,100 0,80" fill="#EF4444" opacity="0.08" className="animate-shapeMove3" /> {/* Red */}
              <polygon points="100,100 80,100 100,80" fill="#7DD3FC" opacity="0.1" className="animate-shapeMove4" /> {/* Sky Blue */}
            </g>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-start justify-center relative z-10 p-4 sm:p-6 lg:p-8 text-left">
          {/* Text Content */}
          {/* Modified this div to center its content */}
          <div className="max-w-6xl animate-slideInLeft w-full flex flex-col items-center">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold mb-6 leading-tight text-center drop-shadow-xl animate-textGlowLight">
              Coverage for unexpected accidents to ease financial burdens
            </h1>
            <p className="text-lg sm:text-xl text-gray-900 mb-10 max-w-5xl text-center mx-auto lg:mx-0 drop-shadow-md animate-fadeInUp delay-100">
              Prepare for life’s unexpected turns with our Accident Plans at Harbor Group USA. We understand that accidents can happen when you least expect them, and our Accident Plans are designed to provide financial support precisely when you need it.
            </p>
            {/* Button is now centered because its parent is a flex column with items-center */}
            <Link href="#accident-plan-form" className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-10 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-red-400 focus:ring-opacity-75 animate-bounceIn delay-200"> {/* Button color changed to red from logo */}
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
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
          }
          50% {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.2), 0 0 15px rgba(255, 255, 255, 0.05);
          }
          100% {
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
          }
        }
        .animate-textGlowLight {
          animation: textGlowLight 3s infinite alternate ease-in-out;
        }

        /* New Shape Movement Animations */
        @keyframes shapeMove1 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(5vw, 10vh); }
          50% { transform: translate(10vw, 5vh); }
          75% { transform: translate(5vw, -5vh); }
        }
        @keyframes shapeMove2 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-5vw, 8vh); }
          50% { transform: translate(-10vw, -4vh); }
          75% { transform: translate(-5vw, 12vh); }
        }
        @keyframes shapeMove3 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(3vw, -7vh); }
          50% { transform: translate(-6vw, -10vh); }
          75% { transform: translate(8vw, 2vh); }
        }
        @keyframes shapeMove4 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-8vw, -3vh); }
          50% { transform: translate(4vw, 9vh); }
          75% { transform: translate(-2vw, -11vh); }
        }

        .animate-shapeMove1 { animation: shapeMove1 20s infinite alternate ease-in-out; }
        .animate-shapeMove2 { animation: shapeMove2 22s infinite alternate ease-in-out; }
        .animate-shapeMove3 { animation: shapeMove3 18s infinite alternate ease-in-out; }
        .animate-shapeMove4 { animation: shapeMove4 25s infinite alternate ease-in-out; }


        /* Utility for delayed animations */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>
    </div>
    </>
  )
}
