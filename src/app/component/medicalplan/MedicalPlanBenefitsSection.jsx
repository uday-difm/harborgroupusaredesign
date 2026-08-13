"use client";

import React from 'react';
import Image from 'next/image'; // Assuming Next.js Image component for optimization

export const MedicalPlanBenefitsSection = () => {
  // Define custom colors based on the logo for easy use with Tailwind
  const primaryDarkBlue = 'var(--color-primary)'; // Dark blue from the logo text/background
  const accentLightBlue = 'var(--color-accent)'; // Lighter blue from the logo outline
  const softGrayBg = 'var(--color-surface)'; // A very light gray for background
  const white = '#FFFFFF';

  const benefitsList = [
    "Inpatient and outpatient services are included",
    "Access to a vast network of physicians, specialists, and healthcare facilities",
    "Ensure affordability and accessibility to essential medications",
    "Preventive care, nutrition guidance, and lifestyle support"
  ];

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 font-inter relative overflow-hidden" style={{ background: `linear-gradient(to br, ${softGrayBg}, ${primaryDarkBlue}05)` }}>
      {/* Animated Background Gradients/Shapes - subtle movement */}
      
      

      <div className="relative z-10 max-w-7xl mx-auto rounded-2xl shadow-2xl overflow-hidden md:flex" style={{ backgroundColor: white }}>
        {/* Left Image Section */}
        <div className="md:w-1/2 relative h-80 md:h-auto flex items-center justify-center p-6 md:p-12 animate-fade-in">
          <Image
            src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/benefits-of-best-cost-sharing-medical-plans.jpeg" // Placeholder for your image_3190c6.jpg
            alt="Medical Plan Benefits"
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            quality={100}
            className="object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500 ease-in-out"
          
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
      {/* Ensure these keyframes and animations are added to your tailwind.config.js */}</section>
  );
};


