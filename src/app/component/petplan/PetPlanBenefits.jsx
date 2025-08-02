"use client";

import React from 'react';
export  const PetPlanBenefits = () => {

  const primaryBlueGradient = (id) => (
    <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{stopColor: '#60A5FA', stopOpacity: 1}} /> 
      <stop offset="100%" style={{stopColor: '#3B82F6', stopOpacity: 1}} /> 
    </linearGradient>
  );

  const lightBlueGradient = (id) => (
    <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{stopColor: '#BFDBFE', stopOpacity: 1}} /> 
      <stop offset="100%" style={{stopColor: '#93C5FD', stopOpacity: 1}} />
    </linearGradient>
  );
  const buttonGradient = (id) => (
    <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{stopColor: '#0EA5E9', stopOpacity: 1}} /> 
      <stop offset="100%" style={{stopColor: '#2563EB', stopOpacity: 1}} /> 
    </linearGradient>
  );

  const gradientStops = (id) => (
    <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{stopColor: '#0EA5E9', stopOpacity: 1}} /> 
      <stop offset="100%" style={{stopColor: '#0891B2', stopOpacity: 1}} /> 
    </linearGradient>
  );

  return (
    <div className=" bg-gray-50 font-sans antialiased flex flex-col items-center justify-center">
      <svg width="0" height="0" className="absolute">
        <defs>
          {primaryBlueGradient("primaryBlueGradient")}
          {lightBlueGradient("lightBlueGradient")}
          {buttonGradient("buttonGradientId")}
          {gradientStops("iconGradient1")}
          {gradientStops("iconGradient2")}
          {gradientStops("iconGradient3")}
          {gradientStops("iconGradient4")}
          {gradientStops("iconGradient5")}
        </defs>
      </svg>
      <section className="w-full px-4 sm:px-4 lg:px-6 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-slideInLeft">
            <h2 className="text-4xl font-extrabold text-indigo-900 mb-4 leading-tight">
              Benefits of Pet Plan
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl lg:max-w-none mx-auto lg:mx-0 text-justify">
             At Harbor Group USA, we recognize the significance of your pets’ health. Our Pet Plans offer a range of easy, simple, and professional benefits to cater to the unique needs of your furry friends.
            </p>
            <ul className="space-y-4 text-justify">
              <li className="flex items-start text-gray-600">
                <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="url(#iconGradient1)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Comprehensive veterinary coverage from experienced professionals for routine check-ups and unexpected health concerns</span>
              </li>
              <li className="flex items-start text-gray-600">
                <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="url(#iconGradient2)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Protection against unexpected accidents and illnesses, easing the financial burden of veterinary expenses</span>
              </li>
              <li className="flex items-start text-gray-600">
                <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="url(#iconGradient3)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Tailor your plan with flexible options aligning with your budget and pets' health requirements</span>
              </li>
              <li className="flex items-start text-gray-600">
                <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="url(#iconGradient4)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Lost Pet Recovery services for a swift and efficient process if your pet goes missing</span>
              </li>
              <li className="flex items-start text-gray-600">
                <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="url(#iconGradient5)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Access 24/7 veterinary experts for any health concerns or questions about your pet's well-being</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center  animate-slideInRight">
            <img
              className="w-full max-w-md h-auto rounded-xl shadow-2xl  transform transition-transform duration-700 ease-in-out hover:scale-105"
              src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/pet-plan-benefit.jpeg" 
              alt="Veterinarian examining a dog"
            />
          </div>
        </div>
      </section>

      {/* Tailwind CSS Custom Animations */}
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
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-bounceIn {
          animation: bounceIn 0.8s ease-out forwards;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out forwards;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideInRight {
          animation: slideInRight 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
