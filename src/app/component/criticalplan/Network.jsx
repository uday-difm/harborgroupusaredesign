"use client";
import React from 'react'
import Image from 'next/image'

export const Network =() => {
  return (
    <>
    
        <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Right Column: Image */}
          <div className="flex justify-center  animate-slideInRight order-1 lg:order-2"> {/* Moved to right, order-2 for lg */}
            <Image 
            width = {600}
            height = {400}
              className="w-full max-w-md h-auto rounded-xl shadow-2xl  transform transition-transform duration-700 ease-in-out hover:scale-105"
              src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/hospital-plan-benifit.jpeg" // image_9bc039.png
              alt="Doctor and patient discussing"
              
            />
          </div>

          {/* Left Column: Text Content with List and unique background */}
          <div className="relative p-8  animate-slideInLeft order-2 lg:order-1 overflow-hidden"> {/* Moved to left, order-1 for lg */}
            {/* Abstract background pattern: subtle, animated waves/lines */}
            
            <div className="relative z-10 text-center lg:text-left"> {/* Ensure content is above the pattern */}
              <h2 className="text-4xl font-extrabold text-indigo-900 mb-6 leading-tight">
                Network
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-xl lg:max-w-none mx-auto lg:mx-0">
                Accessing support for critical health moments is effortless with our extensive network of experienced professionals.
              </p>
              <ul className="space-y-4 text-left">
                <li className="flex items-start text-gray-600">
                  <svg className="w-6 h-6 text-sky-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Access our network of expert professionals who specialize in critical health conditions</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <svg className="w-6 h-6 text-sky-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Ensure tailored guidance for your unique health challenges</span>
                </li>
                <li className="flex items-start text-gray-700">
               <svg className="w-6 h-6 text-sky-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Our expansive network covers every corner of the United States, to provide you with critical coverage at your convenience</span>
                </li>
                <li className="flex items-start text-gray-700">
                 <svg className="w-6 h-6 text-sky-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Find a qualified specialist conveniently, ensuring accessibility during critical health situations, wherever you are</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
