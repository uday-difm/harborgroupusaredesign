"use client";

import React from 'react';
import Link from 'next/link';

export const HealthCoverage = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-inter overflow-hidden">
      <div className="relative  p-8 md:p-12 max-w-7xl w-full text-center transform transition-all duration-700 ease-out md:flex md:items-center md:text-left">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob-1 hidden md:block"></div>
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob-2 hidden md:block"></div>
        <div className="md:w-1/2 md:pr-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-800 mb-6 leading-tight ">
           Simplifying Your Path to<span className="text-blue-700">Health Coverage!</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mb-10 leading-relaxed animate-fade-in-delay-text text-justify">
           Harbor Group USA, we understand that everyone's health needs are unique. That's why we offer a wide range of individual health plans customized to suit your specific requirements. Whether you're a freelancer, a busy professional, or a family looking for personalised coverage, we've got you covered. With an Individual Health Plan from The Harbor Group, you can rest assured knowing that your health and vitality are in good hands. Take the first step towards a healthier future today.
          </p>

          <Link href= "#individual-form"
          
            className="bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-full card-elevated transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-sky-300 text-lg "
          >
            GET A CONSULTANT
          </Link>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex items-center justify-center animate-fade-in-delay-image">
          <img
            src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/simplifying-path-health-coverage.jpeg"
            alt="Health Coverage Illustration"
            className="rounded-card card-elevated max-w-full h-auto"
          
          />
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInDelayText {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes bounceIn {
          0% { transform: scale(0.8); opacity: 0; }
          60% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); }
        }
        @keyframes fadeInModal {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes blob1 {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); }
          30% { transform: translateY(-10px) translateX(15px) scale(1.1); }
          60% { transform: translateY(5px) translateX(-10px) scale(0.9); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); }
          40% { transform: translateY(10px) translateX(-15px) scale(1.1); }
          70% { transform: translateY(-5px) translateX(10px) scale(0.9); }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.7s ease-out forwards;
        }
        .animate-fade-in-delay-text {
          animation: fadeInDelayText 1s ease-out forwards;
          animation-delay: 0.3s;
          opacity: 0;
        }
        .animate-fade-in-delay-image {
          animation: fadeInDelayText 1s ease-out forwards; /* Reusing for image */
          animation-delay: 0.5s;
          opacity: 0;
        }
        .animate-bounce-in {
          animation: bounceIn 0.6s ease-out forwards;
          animation-delay: 0.6s;
          opacity: 0;
        }
        .animate-fade-in-modal {
          animation: fadeInModal 0.3s ease-out forwards;
        }
        .animate-scale-in {
          animation: scaleIn 0.3s ease-out forwards;
        }
        .animate-blob-1 {
          animation: blob1 10s infinite alternate ease-in-out;
        }
        .animate-blob-2 {
          animation: blob2 12s infinite alternate-reverse ease-in-out;
        }
      `}</style>
    </div>
  );
};

