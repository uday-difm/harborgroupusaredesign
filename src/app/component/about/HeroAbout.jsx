"use client"; // This directive marks the component as a Client Component

import React from 'react';
import { ShieldCheck, Eye, Users } from 'lucide-react';
import Image from 'next/image';

export const HeroAbout = () =>{
  return (
    <div className="bg-gray-50 py-20 md:py-28 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* --- Left Column: Text Content --- */}
          <div className="animate-fade-in-up">
            <p className="text-base font-semibold text-sky-500 uppercase tracking-wide">
              About Us
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-indigo-900 tracking-tight">
              Who we are!
            </h2>
            <p className="mt-6 text-lg text-gray-600 text-justify">
              At Harbor Group USA, our journey is rooted in a rich legacy of healthcare expertise. Established with a mission to cater to small business owners, employees, and self-employed workers, we are committed to upholding values of integrity, transparency, and client-centricity.
            </p>
            <p className="mt-4 text-lg text-gray-600 text-justify">
           With a track record that spans a considerable period, we’ve accumulated valuable know-how about healthcare. Our focus is straightforward – helping individuals and businesses navigate the healthcare world. We believe in being upfront, honest, and always putting you first.
            </p>
          </div>

          {/* --- Right Column: Image Composition --- */}
          <div className="relative h-96 lg:h-full flex items-center justify-center animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="relative w-full h-full max-w-md">
                {/* Background decorative shape */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-indigo-100 rounded-3xl transform rotate-12"></div>
                
                {/* Image container */}
                <div className="absolute inset-0 p-2">
                    <div className="relative w-full h-full bg-gray-300 rounded-2xl shadow-2xl overflow-hidden transform -rotate-6">
                        <Image 
                            src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Who-we-are.jpeg" 
                            alt="Who we are!"
                            className="w-full h-full object-cover"
                            width={600}
                            height={400}
                        />
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* This style block is necessary for the custom animations. */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
