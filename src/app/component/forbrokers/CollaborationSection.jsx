// src/components/CollaborationSection.js

'use client'; // Ensure this component runs on the client-side

import React from 'react';

export const CollaborationSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-sans antialiased flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      {/* Page Header Section */}

      {/* New "Collaborate with Us" Section - Unique Image Shape & Gradient */}
      <section className="relative w-full max-w-5xl bg-gradient-to-br from-blue-100 to-purple-100 text-gray-800 rounded-3xl p-6 sm:p-10 lg:p-14 mb-16 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between transform transition-all duration-500 hover:scale-[1.01] hover:shadow-3xl">

        {/* Content Container (Left) */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10 p-4 md:pr-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight animate-fade-in-down-delay">
            Collaborate with Us!
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed mb-10 max-w-3xl animate-fade-in-up-delay">
            Your gateway to a mutually beneficial partnership with Harbor Group USA awaits. Explore how collaborating with us can open doors to exclusive benefits for both you and your clients. Join forces with us today.
          </p>
          <a
            href="#" // Replace with actual application link
            className="inline-flex items-center justify-center px-12 py-4 border-2 border-blue-600 text-lg font-bold rounded-full text-blue-600 bg-white hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-70 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group"
          >
            APPLY NOW
            {/* Arrow icon for the button */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 h-6 w-6 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Image Container (Right) with Clip-Path for unique shape */}
        <div className="md:w-1/2 relative h-64 md:h-auto w-full md:min-h-[300px] flex items-center justify-center overflow-hidden rounded-2xl md:rounded-l-none md:rounded-r-3xl shadow-xl image-clip-path">
          <img
            src="https://placehold.co/800x500/E6E6FA/000?text=Partnership+Vision" // Placeholder image
            alt="Team collaboration vision"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/800x500/E6E6FA/000?text=Image+Not+Found";
            }}
          />
        </div>
      </section>
    </div>
  );
};
