"use client";

import React from 'react';
import { Book } from 'lucide-react';
import Image from 'next/image';

export default function FounderSection() {
  return (
    <div className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* --- Left Column: Animated Image Reveal --- */}
          <div className="relative h-96 lg:h-[600px]">
            <div className="relative w-full h-full">
                {/* Image hidden behind panels */}
                <Image 
                    src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Douglas Muhlbauer.jpg" 
                    alt="Douglas Muhlbauer, Founder of Harbor Group USA"
                    className="w-full h-full object-cover rounded-2xl"
                    width={600}
                    height={400}
                />
                {/* Revealing Panels */}
                <div className="absolute inset-0 grid grid-cols-2 gap-px">
                   <div className="bg-white animate-panel-reveal-left"></div>
                   <div className="bg-white animate-panel-reveal-right"></div>
                </div>
            </div>
          </div>

          {/* --- Right Column: Text Content --- */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <p className="text-base font-semibold text-sky-500 uppercase tracking-widest">
              Founder
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-indigo-900 tracking-tight">
              Douglas Muhlbauer
            </h2>
            
            <div className="mt-8 text-base text-gray-700 space-y-5">
                <p>
               Founded by <b>Douglas Muhlbauer, Harbor Group USA</b> was established with a mission of excellence in health coverage plans. Over the years, it has become a trusted name in the healthcare services industry, guiding clients through the complexities of health coverage with care, transparency, and expertise. With a deep understanding of the ever-changing landscape, Harbor Group USA remains committed to providing personalized solutions that meet the unique needs of every client.
                </p>
                <p>
          Douglas Muhlbauer, an industry expert and advocate for healthcare reform, is also the author of <b>Breaking the Monopoly: The Fight for Affordability,</b> a book that exposes the monopolistic structure of the healthcare system and its impact on consumers. His insights, experience, and commitment to driving change continue to shape Harbor Group USA’s approach, ensuring clients receive the best guidance in navigating their health coverage options.
                </p>
            </div>

            {/* Book Highlight Section */}
            <div className="mt-10">
                <div className="group relative p-6 bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-1 bg-sky-400 transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></div>
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-900 text-white shadow-md">
                            <Book className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-indigo-900">Author & Advocate</h3>
                            <p className="text-sm text-gray-600 mt-1">
                                Douglas is the author of <strong className="text-gray-800">Breaking the Monopoly: The Fight for Affordability</strong>, exposing the healthcare system's impact on consumers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* This style block is necessary for the custom animations. */}
      <style jsx global>{`
        @keyframes panel-reveal-left {
          from { transform: scaleX(1); transform-origin: left; }
          to { transform: scaleX(0); transform-origin: left; }
        }
        .animate-panel-reveal-left {
          animation: panel-reveal-left 1s cubic-bezier(0.87, 0, 0.13, 1) 0.2s forwards;
        }

        @keyframes panel-reveal-right {
          from { transform: scaleX(1); transform-origin: right; }
          to { transform: scaleX(0); transform-origin: right; }
        }
        .animate-panel-reveal-right {
          animation: panel-reveal-right 1s cubic-bezier(0.87, 0, 0.13, 1) 0.2s forwards;
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
