"use client";

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export const BundlesPlanHeroSection = () => {

  return (
 <div className="min-h-screen bg-navy-50 font-body antialiased flex flex-col items-center justify-center">

    
       <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-100 to-navy-200 text-navy-800">
        <div className="absolute inset-0 opacity-20 pointer-events-none animate-bgPulse">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="pattern-circles-v2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="4" fill="var(--color-navy-300)" opacity="0.1"/>
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles-v2)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center relative z-10 p-4 sm:p-6 lg:p-8">
          <div className="text-center lg:text-left ">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold mb-6 leading-tight drop-shadow-xl animate-textGlowLight">
              Combine and save!
            </h1>
          
            <p className="text-lg sm:text-xl text-navy-800 mb-10 max-w-xl lg:max-w-none mx-auto lg:mx-0 drop-shadow-md  text-justify">
            Forget managing multiple plans – our meticulously crafted Bundles Plans are designed to fit your family’s unique needs and safeguard your health. It’s more than just a plan; it’s your unified health solution!
            </p>

            <Link href="#bundles-form" className="btn-accent px-10 py-4 font-bold">
              GET STARTED
            </Link>
          </div>
          <div className="flex justify-center mt-5 animate-slideInRight">
            <Image
            width={600}
            height={400}
              className="object-cover w-full max-w-md h-auto rounded-2xl shadow-2xl transition-transform duration-700 ease-in-out animate-imageFloat" 
              src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/combine-and-save.jpeg"
              alt="Doctor's hand stacking health-related blocks"
              
            />
          </div>
        </div>
      </section></div>
  );
};

