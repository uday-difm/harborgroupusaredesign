import React from 'react'
import Image from 'next/image'

export const ApplyNowSection = ()=> {
  return (
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      {/* Optional: Add a subtle overlay for visual texture or depth */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at top left, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at bottom right, rgba(0,0,0,0.05) 0%, transparent 50%)'
      }}></div>

      <div className="relative max-w-7xl mx-auto   bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Column: Image Section */}
          <div className="relative h-96 lg:h-auto overflow-hidden">
            <Image 
            width = {600}
            height = {400}
              src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Pet-care-plan-form.jpeg" // Placeholder image URL
              alt="Veterinarian examining a pet"
              className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
            />
            {/* Optional: Image overlay for text or branding */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-30"></div>
            
          </div>

          {/* Right Column: Apply Now Form */}
          <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold text-indigo-900 mb-8 leading-tight">
              Apply Now
            </h2>

            <form className="space-y-6">
              {/* Name and Email Inputs in one row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Use grid for responsiveness */}
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
                    Your name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                    Your email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                    placeholder="john.doe@example.com"
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg resize-y"
                  placeholder="Tell us more about your pet and needs..."
                ></textarea>
              </div>

              {/* Terms and Conditions Checkbox */}
              <div className="flex items-start">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1 cursor-pointer"
                />
                <label htmlFor="terms" className="ml-3 text-sm text-gray-600">
                  By Submitting you allow our team to reach out to you via email or phone as submitted
                  information by you and you also allow to agree to our <a href="#" className="text-blue-600 hover:underline font-medium">SMS and Marketing terms and
                  conditions</a>.
                </label>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-lg text-xl font-semibold text-white bg-gradient-to-r from-sky-400 to-sky-400 hover:from-sky-400 hover:to-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
