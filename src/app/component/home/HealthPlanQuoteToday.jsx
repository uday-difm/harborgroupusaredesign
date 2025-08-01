"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HealthPlanQuoteToday() {
  // State to handle form data and validation
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    terms: false,
  });

  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Validate Email Format
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  // Form submission handler
 const handleSubmit = async (e) => {
  e.preventDefault();

  setError('');
  setMessage('');
  setIsSubmitting(true);

  // Client-side validation
  if (!formData.name || !formData.email || !formData.terms) {
    setError('All fields are required, and you must agree to the terms.');
    setIsSubmitting(false);
    return;
  }

  if (!validateEmail(formData.email)) {
    setError('Please enter a valid email address.');
    setIsSubmitting(false);
    return;
  }

  // Prepare data in the correct format for the backend
  const requestData = {
    name: formData.name, // Match the key for backend
    email: formData.email,
    message: formData.message || '', // Ensure the message is provided
  };

  try {
    const response = await fetch('/api/home', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData), // Send the form data
    });

    const data = await response.json();

    if (response.ok) {
      setMessage(data.message);
      setFormData({ name: '', email: '', message: '', terms: false }); // Clear form after submission
    } else {
      setError(data.message || 'An error occurred. Please try again.');
    }
  } catch (err) {
    setError('An error occurred. Please try again later.');
  } finally {
    setIsSubmitting(false);
  }
}

  return (
    <section className="bg-white py-20 sm:py-24" id="h-form">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-900 tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
           Get Your Free Health Plan Quote Today!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Image */}
          <div className="relative">
            <Image
              width={600}
              height={400}
              src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Get-Your-Free-Health-Plan-Quote-Today.jpeg"
              alt="Contact Us"
              className="rounded-2xl shadow-xl w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Form */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  required
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  required
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                ></textarea>
              </div>

              <div className="flex items-start">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  checked={formData.terms}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-sky-600 border-gray-300 rounded mt-1"
                />
                <label htmlFor="terms" className="ml-3 block text-sm text-gray-600">
                  By Submitting, you allow our team to reach out to you via email or phone as submitted information by you and you also agree to our{' '}
                  <Link href="/sms-and-marketing-terms" className="font-medium text-sky-600 hover:underline">
                    SMS and Marketing terms and conditions.
                  </Link>
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'SUBMIT'}
                </button>
              </div>
            </form>

            {/* Display error or success message */}
            {error && <div className="mt-4 text-red-500">{error}</div>}
            {message && <div className="mt-4 text-green-500">{message}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
