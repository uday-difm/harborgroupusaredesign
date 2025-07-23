import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const CollaborationSection = () => {
  return (
    <section className="h-screen flex items-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-blue-100 font-inter">
      <div className="max-w-6xl mx-auto md:flex md:flex-row-reverse">
        {/* Image Section */}
        <div className="md:w-1/2 flex items-center justify-center p-6 md:p-12">
          <div className="relative w-full h-80 md:h-full">
            <Image
              className="absolute inset-0 object-cover rounded-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
              src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Collaborate-with-Us.jpeg"
              alt="Hands collaborating"
              width={600}
              height={400}

            />
          </div>
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col  text-gray-800">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-indigo-900">
            Collaborate with Us!
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed mb-8 text-gray-700">
            Your gateway to a mutually beneficial partnership with Harbor Group USA awaits. Explore how collaborating with us can open doors to exclusive benefits for both you and your clients. Join forces with us today.
          </p>
        
          <Link href="#broker-form" className="self-start px-8 py-4 bg-sky-500 text-white font-bold text-lg rounded-full shadow-lg hover:bg-sky-400 transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-75">
            APPLY NOW
          </Link>
          
        </div>
      </div>
    </section>
  );
};
