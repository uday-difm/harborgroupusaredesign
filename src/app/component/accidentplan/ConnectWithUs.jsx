"use client";

import React from 'react'
import Image from 'next/image';

export const ConnectWithUs = () => {
  return (
    <>
        <section className="w-full bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch"> {/* Changed items-start to items-stretch */}
          {/* Left Column: Connect With Us Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg animate-slideInLeft flex flex-col h-full"> {/* Added flex flex-col h-full */}
            <h2 className="text-4xl font-extrabold text-indigo-900 mb-6 text-center lg:text-left">
              Connect With Us
            </h2>
            <form className="space-y-6 flex-grow flex flex-col"> {/* Added flex-grow and flex flex-col */}
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Your name*</label>
                  <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="John Doe" required />
                </div>
                <div className="flex-1">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Your email*</label>
                  <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="you@example.com" required />
                </div>
              </div>
              <div className="flex-grow"> {/* Added flex-grow to textarea container */}
                <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">Your message</label>
                <textarea id="message" name="message" rows="5" className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 resize-y h-full" placeholder="How can we help you?"></textarea> {/* Added h-full */}
              </div>
              <div className="flex items-start">
                <input type="checkbox" id="terms" name="terms" className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 mt-1" required />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                  By Submitting you allow our team to reach out to you via email or phone as submitted information by you and you also allow to agree to our <a href="#" className="text-blue-600 hover:underline">SMS and Marketing terms and conditions</a>.
                </label>
              </div>
              <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
                SUBMIT
              </button>
            </form>
          </div>

          {/* Right Column: Image of Contact Form */}
          <div className="flex justify-center lg:justify-end animate-slideInRight h-full"> {/* Added h-full */}
            <Image
              className="w-full h-full object-cover rounded-xl shadow-2xl  transform transition-transform duration-700 ease-in-out hover:scale-105" /* Added h-full and object-cover */
              src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Accident-plan-form-section.jpeg" // image_aab58b.png (Contact Form Screenshot)
              alt="Screenshot of contact form"
              width={600}
              height={400}
              
            />
          </div>
        </div>
      </section>
    </>
  )
}
