"use client";

import React from 'react';
import Link from 'next/link';

export const DentalHeroSection = () => {
  return (
    <div className="section-light min-h-[90vh]">
      <header className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden p-4">
        <div className="absolute inset-0 img-duotone">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Dental_Hero_section.jpg')",
            }}
          ></div>
        </div>
        <div className="relative z-10 card-elevated p-8 md:p-16 max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Heading */}
          <h1 className="text-h1 font-display font-bold text-navy-800 mb-6 leading-tight animate-slide-in-left">
           360 degree dental care plans <span className="text-accent">to ensure your oral health.</span>   
          </h1>
          {/* Subheading */}
          <p className="text-lg md:text-xl text-navy-500 mb-10 leading-relaxed max-w-2xl mx-auto animate-slide-in-right delay-200">
            Say goodbye to dental worries! Our dental care plans keep your smile healthy and your wallet happy. It’s affordable and easy to use!
          </p>
          {/* Action Button */}
          <Link href="#dental-form" className="btn-accent px-12 py-4 animate-fade-in delay-400">
           Start Now
          </Link>
        </div>
      </header>
      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};
