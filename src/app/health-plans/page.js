"use client";

import React from 'react'
import { ServicesSection } from '../component/home/ServiceSection'

export default function page() {
      // Define custom colors based on the logo for easy use with Tailwind
    // Variables removed in favor of Tailwind brand classes

  const keypoints = [
    "Available in All 50 States",
    "No Referrals Required",
    "100% Coverage for Mandated Preventative Services",
    "Empi Rx",
    "National PPO Network"
  ];
  return (
    <>
      <title>Harbor Group USA Medical Plans | Affordable Coverage</title>
        <meta name="keywords" content="Harbor Group, medical plan, health coverage, employee benefits, affordable Plans, PPO plan, group health, family coverage, wellness, healthcare"/>        
        <meta name="description" content="Explore affordable, flexible medical plans from Harbor Group USA with top-tier coverage and employee benefits."/>
        <meta property="og:title" content="Harbor Group USA Medical Plans | Affordable Coverage" />
        <meta property="og:description" content="Explore affordable, flexible medical plans from Harbor Group USA with top-tier coverage and employee benefits." />
        <link rel="canonical" href="https://harborgroupusa.com/health-plans/" />
        <meta property="og:url" content="https://harborgroupusa.com/health-plans/" />
        <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />


     <ServicesSection animateOnLoad={true} /> 
      <section className="py-16 px-4 sm:px-6 lg:px-8 font-inter relative overflow-hidden bg-gradient-to-br from-surface to-accent/10">
      {/* Animated Background Gradients/Shapes - subtle movement */}
      
      

      <div className="relative z-10 w-full max-w-6xl mx-auto text-center rounded-[32px] shadow-xl p-8 md:p-12 lg:p-16 animate-scale-in bg-white border border-navy-50">
        <h2 className="text-4xl sm:text-5xl font-display font-extrabold mb-10 text-navy-900 tracking-tight">
          Major Service Keypoints
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {keypoints.map((keypoint, index) => (
            <div
              key={index}
              className="flex items-center justify-start text-left p-5 sm:px-8 rounded-2xl transition-all duration-300 ease-out transform hover:-translate-y-1 hover:shadow-xl animate-fade-in-up-staggered bg-surface border border-navy-100/60 group"
              style={{ animationDelay: `${0.3 + index * 0.15}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mr-5 flex-shrink-0 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                <svg className="w-6 h-6 text-accent group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="text-lg font-bold text-navy-800 group-hover:text-navy-900 transition-colors">
                {keypoint}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind CSS Custom Animations */}
      {/* Ensure these keyframes and animations are added to your tailwind.config.js */}</section>
    </>
  )
}
