"use client";

import React from 'react';
import Link from 'next/link';

export const ResourcesHelpCenterPage = () => {
  const primaryDarkBlue = '#1A2E5B'; 
  const accentLightBlue = '#4CAFDE'; 
  const softGrayBg = '#F0F2F5';
  const white = '#FFFFFF';

  return (
    <section className=" flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 font-inter relative overflow-hidden" style={{ background: `linear-gradient(to br, ${softGrayBg}, ${primaryDarkBlue}10)` }}>
      
      

      <div className="relative z-10 max-w-6xl mx-auto text-center  p-8 md:p-12 lg:p-16 animate-scale-in" style={{ backgroundColor: white, borderRadius: '1.5rem', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
        <h2 className="text-2xl sm:text-5xl lg:text-4xl font-extrabold leading-tight mb-6 animate-fade-in-up" style={{ color: primaryDarkBlue }}>
       Welcome to Our Resources & Help Center
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed mb-10 text-gray-700 max-w-3xl mx-auto animate-fade-in-up delay-100">
         At The Harbor Group, we are committed to providing you with the knowledge and assistance you need to make informed decisions about your coverage. Explore our Resources & Help Center to access a wealth of educational materials, guides, and a comprehensive knowledge base.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up delay-200">
          <Link href="/health-plans" className="px-8 py-4 text-white font-bold text-lg rounded-full card-elevated hover:transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-opacity-75 animate-button-pop" style={{ backgroundColor: accentLightBlue, '--tw-ring-color': `${accentLightBlue}80` }}>
            KNOW ABOUT PLANS
          </Link>
          <Link href="/privacy-policy" className="px-8 py-4 font-bold text-lg rounded-full card-elevated hover:transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-opacity-75 animate-button-pop delay-100" style={{ backgroundColor: accentLightBlue + '30', color: primaryDarkBlue, '--tw-ring-color': `${accentLightBlue}80` }}>
            KNOW ABOUT POLICIES
          </Link>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes buttonPop {
          0% { transform: scale(1); }
          50% { transform: scale(1.02); }
          100% { transform: scale(1); }
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

        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fade-in-up.delay-100 { animation-delay: 0.1s; }
        .animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
        .animate-scale-in { animation: scaleIn 0.7s ease-out forwards; }
        .animate-button-pop { animation: buttonPop 0.5s ease-out 1; } /* Play once on load */
        .animate-button-pop.delay-100 { animation-delay: 0.1s; }
        .animate-blob-slow { animation: blob-slow-anim 20s infinite alternate ease-in-out; }
        .animate-blob-slow.animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
};


