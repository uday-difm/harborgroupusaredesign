"use client";


import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <div className="min-h-screen bg-navy-50 font-body antialiased flex flex-col items-center justify-center">
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-surface-alt text-navy-800">
        <Image 
        width= {600}
        height = {400}
          className="absolute inset-0 w-full  object-contain opacity-60"
          src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/limited-med-plan-hero-section.jpeg" 
          alt="Couple looking at a scenic view"
        />
        <div className="absolute inset-0 bg-navy-50 opacity-70"></div> 
        <div className="absolute inset-0 opacity-30 pointer-events-none animate-radialPulse"> 
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <filter id="blurFilterMedV2" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" /> 
              </filter>
              <radialGradient id="radialGradientPulse" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--color-navy-300)" stopOpacity="0.15" /> 
                <stop offset="100%" stopColor="var(--color-navy-300)" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#radialGradientPulse)" filter="url(#blurFilterMedV2)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center relative z-10 p-4 sm:p-6 lg:p-8 text-center"> 
          <div className="max-w-7xl animate-slideInUp">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold mb-6 leading-tight drop-shadow-xl animate-textGlowLight">
             Limited Med Plans <br className="hidden sm:block"/> offering coverage for specific needs

            </h1>
            <p className="text-lg sm:text-xl text-navy-800 mb-10 max-w-5xl mx-auto drop-shadow-md ">
            Experience targeted medical coverage with our Limited Med Plans at Harbor Group USA. Tailored to address specific health needs, our Limited Med Plans offer a specialized approach to ensure you receive the care you require. Discover a customer-centric solution that provides focused coverage for your distinct medical requirements. It’s not just a plan; it’s a precise and efficient tool designed to alleviate the financial burden of specific health concerns.
            </p>
            <Link href="#limited-med-form" className="btn-accent px-10 py-4 font-bold">
              GET STARTED
            </Link>
          </div>
        </div>
      </section></div>
  );
};

