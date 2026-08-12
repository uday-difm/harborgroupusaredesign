"use client";

import React from 'react';
import Link from 'next/link';

// Main App component
export const VisionPlanSection = () => {
  return (
    <div className="min-h-screen bg-navy-50 font-sans antialiased flex items-center justify-center">
      {/* Hero Section - Enhanced Design */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/vision-eye-plan.jpg" // image_bb1dd1.jpg (Hero Background)
          alt="Optician assisting a patient"
          //onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1920x1080/D3DCE6/333333?text=Hero+Image+Placeholder'; }}
        />
        {/* Gradient Overlay for better text readability and unique look */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-70"></div>
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Additional dark overlay */}

        {/* Content */}
        <div className="relative z-10 text-center p-6 max-w-4xl mx-auto animate-fadeInUp">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
          Clear vision, clear path - our vision plans keep your focus right!
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-md ">
           Our vision service plans go beyond just seeing – they’re designed to keep your eyesight sharp and your outlook on life crystal clear.
            From routine eye exams to prescription eyewear, we’re dedicated to ensuring your vision is at its best.
          </p>
          <Link href= "#vision-form" className="btn-accent px-10 py-4 font-bold">
           GET NOW
          </Link>
        </div>
      </section>

      {/* Tailwind CSS Custom Animation */}
      <style jsx>{`
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
      `}</style>
    </div>
  );
};