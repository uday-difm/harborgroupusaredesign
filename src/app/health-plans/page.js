"use client";

import React from 'react'
import { ServicesSection } from '../component/home/ServiceSection'

export default function page() {
      // Define custom colors based on the logo for easy use with Tailwind
  const primaryDarkBlue = '#1A2E5B'; // Dark blue from the logo text/background
  const accentLightBlue = '#4CAFDE'; // Lighter blue from the logo outline
  const softGrayBg = '#F0F2F5'; // A very light gray for background
  const white = '#FFFFFF';

  const keypoints = [
    "Available in All 50 States",
    "No Referrals Required",
    "100% Coverage for Mandated Preventative Services",
    "Empi Rx",
    "National PPO Network"
  ];
  return (
    <>
     <ServicesSection/> 
      <section className="py-16 px-4 sm:px-6 lg:px-8 font-inter relative overflow-hidden" style={{ background: `linear-gradient(to br, ${softGrayBg}, ${accentLightBlue}10)` }}>
      {/* Animated Background Gradients/Shapes - subtle movement */}
      <div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob-slow"
        style={{ backgroundColor: primaryDarkBlue + '20', transform: 'translate(50%, -50%)' }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob-slow animation-delay-2000"
        style={{ backgroundColor: accentLightBlue + '20', transform: 'translate(-50%, 50%)' }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 animate-scale-in" style={{ backgroundColor: white }}>
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 animate-fade-in-up" style={{ color: primaryDarkBlue }}>
          Major Service Keypoints
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {keypoints.map((keypoint, index) => (
            <div
              key={index}
              className="flex items-center justify-center text-left p-4 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg animate-fade-in-up-staggered"
              style={{
                backgroundColor: softGrayBg,
                borderLeft: `8px solid ${accentLightBlue}`,
                animationDelay: `${0.3 + index * 0.15}s`
              }}
            >
              <svg className="w-8 h-8 mr-4 flex-shrink-0 animate-icon-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ color: primaryDarkBlue }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p className="text-lg font-semibold" style={{ color: primaryDarkBlue }}>
                {keypoint}
              </p>
            </div>
          ))}
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
          0% { transform: translate(-50%, -50%) scale(1); }
          25% { transform: translate(-40%, -60%) scale(1.02); }
          50% { transform: translate(-60%, -40%) scale(0.98); }
          75% { transform: translate(-55%, -55%) scale(1.01); }
          100% { transform: translate(-50%, -50%) scale(1); }
        }

        @keyframes blob-slow-anim-alt {
          0% { transform: translate(50%, 50%) scale(1); }
          25% { transform: translate(60%, 40%) scale(0.98); }
          50% { transform: translate(40%, 60%) scale(1.02); }
          75% { transform: translate(45%, 45%) scale(0.99); }
          100% { transform: translate(50%, 50%) scale(1); }
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

        /* Staggered fade in for keypoint items */
        .animate-fade-in-up-staggered {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
    </>
  )
}
