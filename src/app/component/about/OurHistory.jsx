"use client";

import React from 'react';
import { ShieldCheck, Eye, TrendingUp } from 'lucide-react';
import Image from 'next/image';

// A reusable component for the glassmorphism value cards
const ValueCard = ({ icon: Icon, title, children, delay }) => {
  return (
    <div
      className="group relative p-8 bg-white/50 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl shadow-sky-900/10 overflow-hidden transition-all duration-300 hover:border-white/50 animate-fade-in-up"
      style={{ animationDelay: delay }}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-white/70 text-sky-500 shadow-inner">
          <Icon className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold text-indigo-900">{title}</h3>
      </div>
      <p className="text-base text-gray-700">{children}</p>
    </div>
  );
}

export const OurHistory = ()=> {
    return (
    <div className="relative bg-gray-100 py-20 md:py-28 overflow-hidden">
      {/* Animated Aurora Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="aurora-bg">
            <div className="aurora-shape-1"></div>
            <div className="aurora-shape-2"></div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* --- History Section --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="relative h-96 lg:h-[500px] animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="relative w-full h-full p-4 bg-white/30 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl shadow-sky-900/10">
                    <Image
                        src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Get-Expert-Advice-and-Start-Saving.png"
                        alt="A diverse team collaborating on a project"
                        className="w-full h-full object-cover rounded-2xl shadow-xl"
                        width={600}
                        height={400}
                        //onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/800x600/e2e8f0/a3a3a3?text=Our+Story'; }}
                    />
                </div>
            </div>
            <div className="animate-fade-in-up">
              <p className="text-base font-semibold text-sky-600 uppercase tracking-wide">
                Our History
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-indigo-900 tracking-tight">
              Get Expert Advice and Start Saving
              </h2>
              <p className="mt-6 text-lg text-gray-700 text-justify">
              Founded with a mission of excellence in the field of Health Coverage Plans, Harbor Group USA has grown into a trusted name in the healthcare services industry. Our commitment to navigating the complex landscape of health services has remained steadfast since the beginning.
              </p>
              <p className="mt-4 text-lg text-gray-700 text-justify">
             Starting with a passion for handling clients with care and expertise, we have transformed over time, dedicating ourselves to understanding the ins and outs of health coverage plans from day one.
              </p>
            </div>
            
           
          </div>

          {/* --- Values Section --- */}
          <div className="mt-28">
            <div className="text-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-3xl font-extrabold text-indigo-900 tracking-tight">
                  Our Core Values
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 ">
                  The principles that guide our every decision and action.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-justify">
              <ValueCard icon={ShieldCheck} title="Integrity" delay="0.6s">
                 Integrity is paramount in all our dealings. We adhere to the highest ethical standards, ensuring transparency.
              </ValueCard>
              <ValueCard icon={Eye} title="Transparency" delay="0.8s">
              We believe in clear and open communication. Transparency is key to building trust.
              </ValueCard>
              <ValueCard icon={TrendingUp} title="Unwavering Commitment to Client Success" delay="1s">
                The success of our clients is at the heart of everything we do. We are dedicated to going above and beyond to help our clients.
              </ValueCard>
            </div>
          </div>
        </div>
      </div>
      {/* This style block is necessary for the custom animations. */}
      <style jsx global>{`
        .aurora-bg {
            position: absolute;
            inset: 0;
            overflow: hidden;
        }
        .aurora-shape-1, .aurora-shape-2 {
            position: absolute;
            border-radius: 9999px;
            filter: blur(100px);
            opacity: 0.4;
        }
        .aurora-shape-1 {
            width: 500px;
            height: 500px;
            background-color: #38bdf8; /* sky-400 */
            top: -150px;
            left: -150px;
            animation: aurora-move-1 20s infinite alternate ease-in-out;
        }
        .aurora-shape-2 {
            width: 400px;
            height: 400px;
            background-color: #818cf8; /* indigo-400 */
            bottom: -100px;
            right: -100px;
            animation: aurora-move-2 20s infinite alternate ease-in-out;
        }
        @keyframes aurora-move-1 {
            from { transform: translate(0, 0) rotate(0deg); }
            to { transform: translate(200px, 100px) rotate(90deg); }
        }
        @keyframes aurora-move-2 {
            from { transform: translate(0, 0) rotate(0deg); }
            to { transform: translate(-200px, -50px) rotate(-90deg); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) forwards;
          opacity: 0;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.98); }
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