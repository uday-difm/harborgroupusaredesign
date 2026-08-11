"use client";

import React from 'react';
import { MapPin, Hospital, UserCheck, UserSquare, Award } from 'lucide-react';
import Image from 'next/image';

const BenefitItem = ({ icon: Icon, title, children, delay }) => {
  return (
    <div 
      className="group flex items-start space-x-5 animate-fade-in-up"
      style={{ animationDelay: delay }}
    >
      <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-navy-700/50 border border-navy-600 text-accent transition-all duration-300 group-hover:bg-accent group-hover:border-accent group-hover:text-white group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-accent/20">
        <Icon className="w-7 h-7" strokeWidth={1.5} />
      </div>
      <div>
        <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors">{title}</h3>
        <p className="mt-1 text-base text-navy-200 leading-relaxed">{children}</p>
      </div>
    </div>
  );
};

export const NetworkSection = () => {
  return (
    <div className="section-dark py-20 md:py-32 overflow-hidden border-t border-navy-700">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* --- Left Column: Text Content --- */}
          <div className="animate-fade-in-up">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              Know about Our Network
            </p>
            <h2 className="text-h2 font-display font-bold text-white tracking-tight mb-6">
              Network 
            </h2>
            <p className="text-lg text-navy-200 leading-relaxed text-justify mb-12">
              Our Major Medical Plans are available in all 50 states, offering a wide network of healthcare providers. Access to top-tier hospitals, specialists, and primary care physicians ensures you receive the best possible care.
            </p>
            
            {/* Benefits List */}
            <div className="space-y-8">
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
          <div className="relative h-[400px] lg:h-[600px] animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="relative w-full h-full">
                {/* Background Shapes */}
                <div className="absolute -bottom-6 -left-6 w-full h-full bg-navy-800 rounded-3xl border border-navy-700"></div>
                
                {/* Image */}
                <div className="absolute inset-0 z-10 img-duotone rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                        src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/network.jpeg"
                        alt="Healthcare professional reviewing medical data on a tablet"
                        className="w-full h-full object-cover"
                        width={800}
                        height={1200}
                    />
                </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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
