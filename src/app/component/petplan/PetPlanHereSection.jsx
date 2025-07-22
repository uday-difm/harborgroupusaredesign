import React from 'react';
import Image from 'next/image';

export const PetPlanHereSection = () => {

  return (
     <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Gradient Overlay (now blue tones) */}
        <Image 
        width={600}
        height={400}
          className="absolute inset-0 w-full h-full object-cover"
          src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/pet-care-plans.jpg" // image_10cc20.jpg (Pet Plans Hero Background)
          alt="Veterinarian with a pet"
          
        />
        {/* Gradient Overlay for better text readability and unique look (now blue tones) */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-70"></div> {/* Dark blue overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Additional dark overlay */}

        {/* Content */}
        <div className="relative z-10 text-center p-6 max-w-7xl mx-auto animate-fadeInUp">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            BECAUSE YOUR FURRY FRIENDS DESERVE PROTECTION TOO
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-md">
            Extend your care to your four-legged family members with Pet Plans at Harbor Group USA. Our Pet Plans are designed to offer tailored protection for your beloved pets, ensuring their health and well-being are prioritized.
          </p>
          <button className="py-4 px-10 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-75 bg-sky-400 text-white font-bold" >
            JOIN US NOW
          </button>
        </div>
      </section>
  );
};
