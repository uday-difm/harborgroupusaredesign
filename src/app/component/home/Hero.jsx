"use client";

import React  from 'react';
import { ArrowRight, Shield, HeartPulse } from 'lucide-react';
import Image from 'next/image';


export const HeroSection = () => {
    return (
    // <div className="relative bg-gradient-to-b from-white to-gray-100 overflow-hidden h-screen">
     <div className="relative animated-gradient-bg overflow-hidden h-screen">
      {/* Animated background glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-sky-900/50 rounded-full filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-indigo-900/50 rounded-full filter blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20 md:py-28">
          
          {/* --- Left Column: Text Content --- */}
          <div className="text-center lg:text-left">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-indigo-900 tracking-tight animate-fade-in-up"
            >
              A Brighter & <br />
              <span className="text-sky-500">Healthier Future!</span>
            </h1>

            <p 
              className="mt-6 max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl text-gray-600 animate-fade-in-up" 
              style={{ animationDelay: '0.2s' }}
            >
             Finding Your Ideal Health Plan with Harbor Group USA
            </p>
            
            <p 
              className="mt-4 max-w-2xl mx-auto lg:mx-0 text-base text-gray-500 animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
             Securing your Future with Unmatched Expertise in Health Plans and Benefits.
            </p>

            <div 
              className="mt-10 animate-fade-in-up" 
              style={{ animationDelay: '0.6s' }}
            >
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-sky-500 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-sky-300/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 focus:ring-offset-white"
              >
                Get a Free Quote Today!
                <ArrowRight className="ml-3 -mr-1 h-6 w-6" />
              </a>
            </div>
          </div>

          {/* --- Right Column: Image Composition --- */}
          <div className="relative h-80 lg:h-[450px] flex items-center justify-center animate-fade-in" style={{animationDelay: '0.5s'}}>
            <div className="absolute w-full h-full max-w-md">
                {/* Background Shape */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-300 to-indigo-300 rounded-3xl transform -rotate-6"></div>
                
                {/* Image Container */}
                <div className="absolute inset-0 p-2">
                    <div className="relative w-full h-full bg-gray-300 rounded-2xl shadow-2xl overflow-hidden transform rotate-3">
                        <Image 
                            src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Brighter-&-Healthier-Future.webp" 
                            alt="Doctor consulting with a patient"
                            className="w-full h-full object-cover"
                            width={600}
                            height={400}
                            //onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x600/e2e8f0/a3a3a3?text=Health+Plan'; }}
                        />
                    </div>
                </div>

                {/* Floating Icon */}
                <div className="absolute -top-5 -left-5 flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg float-1">
                    <HeartPulse className="w-8 h-8 text-sky-500" />
                </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* This style block is necessary for the custom animations. */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
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
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .float-1 {
          animation: float-1 5s infinite ease-in-out;
        }

        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.2); opacity: 0.4; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
