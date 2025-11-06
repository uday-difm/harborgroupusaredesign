"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';

export const ApplyNowSection = ()=> {
   const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    terms: false,
  });
  const [issubmiting, setIssubmiting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIssubmiting(true);
    setSuccessMessage('');
    setErrorMessage('');

    // Validate form
    if (!formData.name || !formData.email || !formData.message || !formData.terms) {
      setErrorMessage('All fields are required, and you must agree to the terms.');
      setIssubmiting(false);
      return;
    }

    // API Call to submit the form data
    try {
      const response = await fetch('/api/petplan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Your application has been submitted successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
          terms: false,
        });
      } else {
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
    } finally {
      setIssubmiting(false);
    }
  };

  return (
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white overflow-hidden" id="pet-plan-form">
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

            <form className="space-y-6" onSubmit={handleSubmit}>
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
                     value={formData.name}
                    onChange={handleChange}
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
                     value={formData.email}
                    onChange={handleChange}
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
                   value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Terms and Conditions Checkbox */}
              <div className="flex items-start">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1 cursor-pointer"
                />
                <label htmlFor="terms" className="ml-3 text-sm text-gray-600">
                  By submiting you allow our team to reach out to you via email or phone as submitted
                  information by you and you also allow to agree to our <Link href="/sms-and-marketing-terms/" className="text-blue-600 hover:underline font-medium">SMS and Marketing terms and
                  conditions</Link>.
                </label>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-lg text-xl font-semibold text-white bg-gradient-to-r from-sky-400 to-sky-400 hover:from-sky-400 hover:to-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:-translate-y-0.5"
              disabled={issubmiting}
                >
                  {issubmiting ? 'submiting...' : 'Submit'}
                </button>
              </div>
            </form>
             {/* Show success or error messages */}
            {successMessage && (
              <div className="mt-4 text-green-500">{successMessage}</div>
            )}
            {errorMessage && (
              <div className="mt-4 text-red-500">{errorMessage}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
