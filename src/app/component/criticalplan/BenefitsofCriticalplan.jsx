"use client";
import React from 'react'
import Image from 'next/image'

export const BenefitsofCriticalplan = () => {
  return (
    <>
       <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-indigo-900 mb-4 animate-fadeInUp">
            Benefits of Critical Plan
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
           At Harbor Group USA, we understand the importance of financial security during critical health moments. Our Critical Plans offer a range of easy, simple, and professional benefits to cater to your specific needs.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center"> {/* Changed gap-12 to gap-16 */}
            {/* Left Column: Text Content with Checkmarks */}
            <div className="text-left space-y-6 animate-slideInLeft">
              <h3 className="text-2xl font-bold text-sky-400 mb-4">Financial Protection for Critical Illness</h3>
              <div className="flex items-start text-gray-700">
                <svg className="w-6 h-6 text-sky-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Receive a lump sum payout upon the diagnosis of a critical illness</span>
              </div>
              <div className="flex items-start text-gray-700">
                <svg className="w-6 h-6 text-sky-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Alleviate financial stress and focus on recovery during challenging times</span>
              </div>
              <div className="flex items-start text-gray-700">
                <svg className="w-6 h-6 text-sky-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Benefit from an easy and simple claims process designed for your convenience</span>
              </div>
              <div className="flex items-start text-gray-700">
                <svg className="w-6 h-6 text-sky-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Tailor your plan with flexible payout options to align with your financial needs</span>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="flex justify-center animate-slideInRight">
              <Image
                className="w-full max-w-md h-auto rounded-xl shadow-2xl  border-blue-300 transform transition-transform duration-700 ease-in-out hover:scale-105"
                src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Critical-benifit-section.jpeg" // image_9cac5c.png
                alt="Doctor holding patient's hand"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
