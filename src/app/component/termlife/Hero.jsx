"use client";

import React from 'react'

export const Hero = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased flex items-center justify-center">
      {/* Hero Section for the new page */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with a subtle blue tint overlay, matching the logo colors */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Term-life-hero-section.jpeg" // image_babbbc.jpg (New Hero Background)
          alt="Family enjoying life, protected by a term life plan"
        />
        {/* Blueish overlay to blend with the image and logo colors */}
        {/* Using a deep blue from the logo (e.g., blue-900) */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-70"></div>
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Additional dark overlay */}

        {/* Content */}
        <div className="relative z-10 text-center p-6 max-w-4xl mx-auto animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            Protection for your loved ones with a comprehensive term life plan
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-4 max-w-2xl mx-auto drop-shadow-md">
            Secure your family's future – our life plans are meticulously crafted to offer more than just financial assurance.
          </p>
          <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-md">
            Our plans go beyond the numbers; they are a promise, a commitment to providing unwavering support in times of need.
          </p>
          {/* Button styled with the logo's blue and white */}
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-10 rounded-full shadow-xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-75">
            GET STARTED
          </button>
        </div>
      </section>

      {/* Tailwind CSS Custom Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
