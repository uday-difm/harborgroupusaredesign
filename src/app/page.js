"use client";


import { useState, useEffect } from "react";
import Image from "next/image";
import { FaqSection } from "./component/home/FaqSection";
import HealthPlanQuoteToday from "./component/home/HealthPlanQuoteToday";
import { HeroSection } from "./component/home/Hero";
import { ServicesSection } from "./component/home/ServiceSection";
import { TestimonialHome } from "./component/home/TestimonialHome";
import { WholesaleGeneralAgency } from "./component/home/WholesaleGeneralAgency";
import { WhyChooseUsSection } from "./component/home/WhyChooseUs";


// Placeholder for the Harbor Group USA Logo
const HarborGroupUSALogo = () => {
  return (
    <div className="w-20 h-20   flex items-center justify-center mx-auto mb-4 overflow-hidden">
      {/* Replaced text with a placeholder image. In a real app, you would use your actual logo image. */}
      <Image
      width={600}
      height={400}
        src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" // Placeholder image URL
        alt="Harbor Group USA Logo"
        className="w-full h-full object-cover "
        
      />
    </div>
  );
};

// Popup Component (copied from the cigna-plans-table Canvas)
const QuotePopup = ({ onClose }) => {
  return (
    // Changed bg-black bg-opacity-50 to bg-transparent to remove the black background overlay
    <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50 p-4 font-inter">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto relative p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
          aria-label="Close popup"
        >
          &times;
        </button>

        {/* Logo */}
        <HarborGroupUSALogo />

        {/* Title and Subtitle */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-2">
          Get Your Free Quote Today
        </h2>
        <p className="text-gray-600 text-center mb-6 text-sm sm:text-base">
          Find Your Perfect Fit: Discover Health Plans Tailored to Your Needs!
        </p>

        {/* Input Fields */}
        <div className="space-y-4 mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="currentColor" viewBox="0 0 20 20" width="20" height="20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="relative">
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="currentColor" viewBox="0 0 20 20" width="20" height="20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="currentColor" viewBox="0 0 20 20" width="20" height="20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
        </div>

        {/* Button */}
        <button className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold text-lg hover:bg-blue-700 transition duration-300 shadow-md">
          GET YOUR QUOTE
        </button>
      </div>
    </div>
  );
};


export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000); // Show popup after 3 seconds

    return () => clearTimeout(timer); // Clean up the timer
  }, []);
  return (
    <>
   
    <HeroSection/>
    <ServicesSection/>
    <WholesaleGeneralAgency/>
    <WhyChooseUsSection/>
    <HealthPlanQuoteToday/>
    <FaqSection/>
    <TestimonialHome/>
    {/* Render the popup if showPopup is true */}
      {showPopup && <QuotePopup onClose={() => setShowPopup(false)} />}
    </>
  );
}
