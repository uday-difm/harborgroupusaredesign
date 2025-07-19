import React from 'react';

// Main Contact Page component
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 font-sans text-gray-800 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-center gap-16">

        {/* Left Section: Get In Touch Text */}
        <div className="lg:w-1/2 text-center lg:text-left animate-fade-in-up">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">Get In Touch</h1>
          <p className="text-xl text-gray-700 max-w-lg mx-auto lg:mx-0">
            Connect with us! Your questions matter. Fill the form; we&apos;re here, ready to assist you.
          </p>
        </div>

        {/* Right Section: Contact Form */}
        <div className="lg:w-1/2 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 transform transition-transform duration-500 hover:scale-105 animate-fade-in-right">
          <form className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base transition-all duration-300 hover:border-blue-400"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                E-Mail Address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base transition-all duration-300 hover:border-blue-400"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-2">
                Mobile Number<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base transition-all duration-300 hover:border-blue-400"
                placeholder="+1 (123) 456-7890"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white
                           bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
