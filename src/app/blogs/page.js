"use client";

import React from 'react'
import Image from 'next/image';

export default function Blogs() {
   return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-sans antialiased flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      {/* Page Header Section */}
      <header className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight animate-fade-in-down">
          Our Insights
        </h1>
        <div className="h-2 w-24 bg-blue-600 mx-auto mb-8 rounded-full animate-scale-in"></div> {/* Animated Underline */}
        <p className="text-xl text-gray-700 leading-relaxed animate-fade-in-up">
          Explore our latest articles and thought leadership on healthcare, wellness, and industry trends.
        </p>
      </header>

      {/* Blog Posts Grid Section */}
      <main className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Individual Animated Blog Post Card */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out overflow-hidden flex flex-col cursor-pointer">
          {/* Blog Post Image Container */}
          <div className="relative w-full h-52 overflow-hidden">
          <Image
              src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/blogs.png" // Placeholder image
              alt="Digital health innovations"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                width={600}
              height={400}
             
            />
            {/* Category Tag */}
            <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-md">
              Technology
            </span>
          </div>

          {/* Blog Post Content */}
          <div className="p-6 flex flex-col flex-grow">
            {/* Date */}
            <p className="text-sm text-gray-500 mb-3 flex items-center">
              {/* Calendar icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1.5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              July 15, 2025
            </p>
            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-snug">
              The Rise of AI in Personalized Healthcare
            </h2>
            {/* Excerpt */}
            <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
              Artificial intelligence is transforming how healthcare is delivered, enabling more personalized treatments and predictive diagnostics...
            </p>
            {/* Read More Button */}
            <a
              href="#" // Replace with actual link
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-500 text-base font-semibold rounded-full text-blue-600 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 self-start group"
            >
              Read More
              {/* Arrow icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 -mr-1 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Another Animated Blog Post Card */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out overflow-hidden flex flex-col cursor-pointer">
          <div className="relative w-full h-52 overflow-hidden">
          <Image
              src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/blogs.png"
              alt="Person practicing mindfulness"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                width={600}
              height={400}
            />
            <span className="absolute top-4 right-4 bg-green-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-md">
              Wellness
            </span>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <p className="text-sm text-gray-500 mb-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1.5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              June 28, 2025
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-snug">
              Mindfulness Practices for Daily Well-being
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
              Integrating mindfulness into your daily routine can significantly reduce stress and improve overall mental clarity...
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-500 text-base font-semibold rounded-full text-blue-600 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 self-start group"
            >
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 -mr-1 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Third Animated Blog Post Card */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out overflow-hidden flex flex-col cursor-pointer">
          <div className="relative w-full h-52 overflow-hidden">
          <Image
              src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/blogs.png"
              alt="Abstract representation of data trends"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              width={600}
              height={400}
            />
            <span className="absolute top-4 right-4 bg-red-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-md">
              Trends
            </span>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <p className="text-sm text-gray-500 mb-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1.5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              May 20, 2025
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-snug">
              Understanding the Next Generation of Therapies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
              New therapeutic approaches are emerging, offering hope for previously untreatable conditions and improving patient outcomes...
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-500 text-base font-semibold rounded-full text-blue-600 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 self-start group"
            >
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 -mr-1 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>

      </main>

      {/* Tailwind CSS keyframes for simple animations */}
     <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          animation-delay: 0.2s; /* Delay for sequential animation */
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
          animation-delay: 0.4s; /* Delay for sequential animation */
        }
       `}</style>
    </div>
    </>
  );
};


