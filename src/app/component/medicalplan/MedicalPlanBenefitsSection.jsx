"use client";

import React from 'react';
import Image from 'next/image'; // Assuming Next.js Image component for optimization

export const MedicalPlanBenefitsSection = () => {
  // Define custom colors based on the logo for easy use with Tailwind
  const primaryDarkBlue = '#1A2E5B'; // Dark blue from the logo text/background
  const accentLightBlue = '#4CAFDE'; // Lighter blue from the logo outline
  const softGrayBg = '#F0F2F5'; // A very light gray for background
  const white = '#FFFFFF';

  const benefitsList = [
    "Inpatient and outpatient services are included",
    "Access to a vast network of physicians, specialists, and healthcare facilities",
    "Ensure affordability and accessibility to essential medications",
    "Preventive care, nutrition guidance, and lifestyle support"
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 font-inter relative overflow-hidden" style={{ background: `linear-gradient(to br, ${softGrayBg}, ${primaryDarkBlue}05)` }}>
      {/* Animated Background Gradients/Shapes - subtle movement */}
      <div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob-slow"
        style={{ backgroundColor: accentLightBlue + '20', transform: 'translate(-50%, -50%)' }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob-slow animation-delay-2000"
        style={{ backgroundColor: primaryDarkBlue + '20', transform: 'translate(50%, 50%)' }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto rounded-3xl shadow-2xl overflow-hidden md:flex" style={{ backgroundColor: white }}>
        {/* Left Image Section */}
        <div className="md:w-1/2 relative h-80 md:h-auto flex items-center justify-center p-6 md:p-12 animate-fade-in">
          <Image
            src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/benefits-of-best-cost-sharing-medical-plans.jpeg" // Placeholder for your image_3190c6.jpg
            alt="Medical Plan Benefits"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="rounded-2xl transform hover:scale-105 transition-transform duration-500 ease-in-out"
          
          />
          {/* Overlay for the plus sign icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-8 rounded-full shadow-lg" style={{ backgroundColor: accentLightBlue + 'AA' }}> {/* Semi-transparent accent blue */}
              <svg className="w-24 h-24 text-white animate-pulse-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center animate-slide-in-right">
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 animate-fade-in-up" style={{ color: primaryDarkBlue }}>
          Benefits of our best cost sharing medical plans
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed mb-8 text-gray-700 animate-fade-in-up delay-100 text-justify">
           Get everything you need to stay healthy, from doctor visits and mental health support to preventive care and more. Whether you need regular checkups, vaccines, screenings, or expert help with a long-term condition, we’ve got your health covered!
          </p>
          <div className="space-y-4">
            {benefitsList.map((benefit, index) => (
              <div key={index} className="flex items-start animate-fade-in-up-staggered" style={{ animationDelay: `${0.3 + index * 0.15}s` }}>
                <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ color: accentLightBlue }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
                <p className="text-base text-gray-700">{benefit}</p>
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

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes pulse-light {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
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

        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fade-in-up.delay-100 { animation-delay: 0.1s; }
        .animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
        .animate-slide-in-right { animation: slideInRight 0.8s ease-out forwards; }
        .animate-pulse-light { animation: pulse-light 2s infinite ease-in-out; }
        .animate-blob-slow { animation: blob-slow-anim 25s infinite alternate ease-in-out; }
        .animate-blob-slow.animation-delay-2000 { animation-delay: 2s; }

        /* Staggered fade in for benefit list items */
        .animate-fade-in-up-staggered {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};


