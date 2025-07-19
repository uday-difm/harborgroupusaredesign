import React from 'react';

export const DentalHeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white font-inter text-gray-800">
      {/* Hero Section */}
      <header className="relative w-full h-screen flex items-center justify-center overflow-hidden p-4">
        {/* Background Image with a very subtle, light overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Dental_Hero_section.jpg')`, // Updated background image URL
          }}
          // Uncomment below for fallback in case the image fails to load:
          // onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/1920x1080/f0f8ff/000000?text=Dental+Care+Background"; }}
        >
          {/* Light overlay with a subtle blue gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-100/60 via-blue-50/60 to-transparent"></div>
        </div>

        {/* Content Box - Semi-transparent white background, with subtle animations */}
        <div className="relative z-10 bg-white-800 bg-opacity-70 p-8 md:p-16 rounded-2xl shadow-xl max-w-4xl mx-auto text-center border-b-4 border-blue-400 animate-fade-in-up">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-800 mb-6 leading-tight animate-slide-in-left">
            Your Radiant Smile, <span className="text-blue-500">Our Gentle Care.</span>
          </h1>
          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed max-w-2xl mx-auto animate-slide-in-right delay-200">
            Discover a new standard of dental wellness with plans designed for your comfort, health, and lasting confidence.
          </p>
          {/* Action Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-12 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 uppercase tracking-wide text-lg animate-fade-in delay-400">
            Begin Your Journey
          </button>
        </div>
      </header>
    </div>
  );
};
