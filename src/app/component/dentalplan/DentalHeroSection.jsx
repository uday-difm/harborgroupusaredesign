import React from 'react';

export const DentalHeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white font-inter text-gray-800">
      <header className="relative w-full h-screen flex items-center justify-center overflow-hidden p-4">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Dental_Hero_section.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-blue-100/60 via-blue-50/60 to-transparent"></div>
        </div>
        <div className="relative z-10 bg-white-800 bg-opacity-70 p-8 md:p-16  max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-900 mb-6 leading-tight animate-slide-in-left">
            Your Radiant Smile, <span className="text-indigo-900">Our Gentle Care.</span>
          </h1>
          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed max-w-2xl mx-auto animate-slide-in-right delay-200">
            Discover a new standard of dental wellness with plans designed for your comfort, health, and lasting confidence.
          </p>
          {/* Action Button */}
          <button className="bg-sky-400 hover:bg-sky-400 text-white font-bold py-4 px-12 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 uppercase tracking-wide text-lg animate-fade-in delay-400">
            Begin Your Journey
          </button>
        </div>
      </header>
    </div>
  );
};
