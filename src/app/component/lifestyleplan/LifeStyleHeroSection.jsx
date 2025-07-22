"use client";
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export const LifeStyleHeroSection = () => {
  return (
    <>
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <Image
        width= {600}
        height = {400}
          className="absolute inset-0 w-full  object-contain"
          src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/lifestyleplan-section.jpeg"
          alt="Person enjoying a healthy lifestyle"
        />
        {/* Gradient Overlay for better text readability and unique look */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-800 to-transparent opacity-80"></div>
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Additional dark overlay */}

        {/* Content */}
        <div className="relative z-10 text-center p-6 max-w-4xl mx-auto animate-fadeInUp">
          <p className="text-lg text-sky-400 mb-2 font-semibold flex items-center justify-center">
            <span className="w-8 h-0.5 bg-sky-400 mr-3"></span>
            Lifestyle Plans
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            Plans to support and enhance your lifestyle needs
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-md">
            Enhance your well-being with Lifestyle Plans at Harbor Group USA. These plans are meticulously designed to support and enhance your unique lifestyle needs. Going beyond conventional coverage, our Lifestyle Plans offer a customer-tailored approach to ensure that your health and lifestyle choices align seamlessly.
          </p>
          <Link href="#request-callback-form" className="py-4 px-10 rounded-full shadow-lg text-white transition bg-sky-400 font-bold duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-75">
            GET NOW
          </Link>
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

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-bounceIn {
          animation: bounceIn 0.8s ease-out forwards;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
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
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideInRight {
          animation: slideInRight 1s ease-out forwards;
        }

        /* Hero section specific animations */
        @keyframes gridShift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(5px, 5px); }
        }
        .animate-gridShift {
          animation: gridShift 15s infinite alternate ease-in-out;
        }

        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 5px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 0, 0, 0.05); }
          50% { text-shadow: 0 0 10px rgba(0, 0, 0, 0.2), 0 0 15px rgba(0, 0, 0, 0.1); }
        }
        .animate-textGlow {
          animation: textGlow 3s infinite alternate ease-in-out;
        }

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

        /* Network Section specific animations */
        @keyframes waveSmallMove {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .animate-waveSmall1 { animation: waveSmallMove 12s infinite alternate ease-in-out; }
        .animate-waveSmall2 { animation: waveSmallMove 14s infinite alternate ease-in-out; animation-delay: 0.3s; }
        .animate-waveSmall3 { animation: waveSmallMove 10s infinite alternate ease-in-out; animation-delay: 0.6s; }
      `}</style>
    </>
  )
}
