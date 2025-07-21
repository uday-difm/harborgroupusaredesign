"use client";

import React from 'react'
import Image from 'next/image';

export const Yourhealthmatters = () =>{
  return (
    <>
      
      <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch"> {/* Changed items-center to items-stretch */}
         

          {/* Right Column: Text Content */}
          <div className="text-center lg:text-left animate-slideInRight flex flex-col justify-center"> {/* Added flex flex-col justify-center */}
            <h2 className="text-4xl sm:text-5xl font-extrabold text-indigo-900 mb-6 leading-tight animate-fadeInUp">
              Your health matters
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-xl lg:max-w-none mx-auto lg:mx-0 animate-fadeInUp delay-100">
              Navigate hospitalization expenses with confidence through our Specialized Hospital Plans at Harbor Group USA. Tailored to provide dedicated coverage for hospital stays, our plans are designed to alleviate the financial strain associated with medical emergencies. Discover a simple and effective solution that focuses on your peace of mind during challenging times. It's not just a plan; it's a specialized approach to ensuring your financial well-being during hospitalization.
            </p>
          </div>
           {/* Left Column: Image/Visual */}
          <div className="flex justify-center lg:justify-start animate-slideInLeft h-full"> {/* Added h-full */}
            <Image
              className="w-full h-full object-cover rounded-xl shadow-2xl  transform transition-transform duration-700 ease-in-out hover:scale-105" /* Added h-full and object-cover */
              src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/your-health-matters.jpg" // image_a9d0cc.png (Your Health Matters Image)
              alt="Hand holding a heart shape"
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>
    </>
  )
}
