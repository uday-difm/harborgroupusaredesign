"use client";

import React from 'react';
import { MapPin, Hospital, UserCheck, UserSquare, Award } from 'lucide-react';
import Image from 'next/image';

// A reusable component for the benefit list items
const BenefitItem = ({ icon: Icon, title, children, delay }) => {
  return (
    <div 
      className="group flex items-start space-x-5 animate-fade-in-up"
      style={{ animationDelay: delay }}
    >
      <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-sky-100 text-sky-500 transition-all duration-300 group-hover:bg-sky-500 group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-sky-200">
        <Icon className="w-7 h-7" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-indigo-900">{title}</h3>
        <p className="mt-1 text-base text-gray-600">{children}</p>
      </div>
    </div>
  );
};

export const NetworkSection = () => {
  return (
    <div className="relative bg-white py-20 md:py-28 overflow-hidden">
        {/* Animated Geometric Background */}
        <div className="absolute inset-0 pointer-events-none opacity-50">
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
                <div className="shape shape-4"></div>
            </div>
        </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* --- Left Column: Text Content --- */}
          <div className="animate-fade-in-up">
            <p className="text-base font-semibold text-sky-500 uppercase tracking-wide">
              Know about Our Network
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-indigo-900 tracking-tight">
              Network 
            </h2>
            <p className="mt-6 text-lg text-gray-600">
          Our Major Medical Plans are available in all 50 states, offering a wide network of healthcare providers. Access to top-tier hospitals, specialists, and primary care physicians ensures you receive the best possible care.
            </p>
            
            {/* Benefits List */}
            <div className="mt-10 space-y-8">
                <BenefitItem icon={MapPin} title="Nationwide Coverage" delay="0.2s">
                    Available in all 50 states.
                </BenefitItem>
                <BenefitItem icon={Hospital} title="Extensive Provider Network" delay="0.4s">
                   Access to top-tier hospitals and specialists.
                </BenefitItem>
                <BenefitItem icon={UserCheck} title="Primary Care Physicians" delay="0.6s">
                    Ensure you receive comprehensive and continuous care.
                </BenefitItem>
                  <BenefitItem icon={UserSquare} title="Specialist Access" delay="0.7s">
                   Easy referrals to specialists for specific health needs.
                </BenefitItem>
                <BenefitItem icon={Award} title="Quality Care" delay="0.8s">
                   High standards of care across the network to ensure optimal health outcomes.
                </BenefitItem>
            </div>
          </div>

          {/* --- Right Column: Image Composition --- */}
          <div className="relative h-96 lg:h-[600px] animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="relative w-full h-full">
                {/* Background Shapes */}
                <div className="absolute -bottom-8 -right-8 w-full h-full bg-gray-100 rounded-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-sky-200 to-indigo-200 rounded-3xl shadow-2xl transform -rotate-6"></div>
                
                {/* Image */}
                <div className="absolute inset-4">
                    <Image
                        src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/network.jpeg"
                        alt="Healthcare professional reviewing medical data on a tablet"
                        className="w-full h-full object-cover rounded-2xl shadow-xl"
                        width={800}
                        height={1200}
                    />
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
          animation: fade-in-up 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) forwards;
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
        
        /* Animated Geometric Background */
        .shape {
            position: absolute;
            background-color: #e0f2fe; /* sky-100 */
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            mix-blend-mode: multiply;
            filter: blur(10px);
        }
        .shape-1 {
            width: 300px;
            height: 300px;
            top: 10%;
            left: 10%;
            animation: move-shape 15s infinite alternate ease-in-out;
        }
        .shape-2 {
            width: 250px;
            height: 250px;
            top: 20%;
            right: 15%;
            background-color: #e0e7ff; /* indigo-100 */
            animation: move-shape 18s infinite alternate ease-in-out -4s;
        }
        .shape-3 {
            width: 200px;
            height: 200px;
            bottom: 15%;
            left: 25%;
            animation: move-shape 16s infinite alternate ease-in-out -8s;
        }
        .shape-4 {
            width: 150px;
            height: 150px;
            bottom: 10%;
            right: 20%;
            background-color: #e0e7ff; /* indigo-100 */
            animation: move-shape 20s infinite alternate ease-in-out -12s;
        }

        @keyframes move-shape {
            from {
                transform: translate(0, 0) rotate(0deg);
            }
            to {
                transform: translate(100px, 50px) rotate(90deg);
            }
        }
      `}</style>
    </div>
  );
}
