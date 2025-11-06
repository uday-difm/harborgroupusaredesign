"use client";
import React, { useState } from 'react';

// Main Contact Page component
export default function ContactPage() {
  // State for form data
  const [formData, setFormData] = useState({
    fullName: '',
    emailaddress: '',
    phonenumber: '',
  });

  // State for error and success messages
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
    // Email validation function
  const validateEmail = (emailaddress) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(emailaddress);
  };

    // Phone number validation function (basic validation for common formats)
  const validatePhoneNumber = (phonenumber) => {
    const phoneRegex = /^\+?\(?\d{1,3}\)?[\s\-]?\(?\d{1,3}\)?[\s\-]?\d{1,4}[\s\-]?\d{1,4}[\s\-]?\d{1,4}$/;
    return phoneRegex.test(phonenumber);
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setMessage('');
    setIsSubmitting(true);

    // Basic client-side validation
    if (!formData.fullName || !formData.emailaddress || !formData.phonenumber) {
      setError('All fields are required.');
      setIsSubmitting(false);
      return;
    }

    // Validate email format
    if (!validateEmail(formData.emailaddress)) {
      setError('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    // Validate phone number format
    if (!validatePhoneNumber(formData.phonenumber)) {
      setError('Please enter a valid phone number.');
      setIsSubmitting(false);
      return;
    }

    // Console log the form data
   // console.log('Form Data Submitted:', formData);
    // Adjusting keys to match API expected keys
  const requestData = {
    fullname: formData.fullName,
    phonenumber: formData.phonenumber,
    emailaddress: formData.emailaddress,
  };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setFormData({ fullName: '', emailaddress: '', phonenumber: '' }); // Clear form after submission
      } else {
        setError(data.message || 'An error occurred. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
     <title>Contact Harbor Group USA | Get in Touch Today</title>
        <meta name="keywords" content="Harbor Group USA, contact Harbor Group, customer support, health plan inquiries, Plans contact, get in touch, medical coverage help, Plans assistance"/>        
        <meta name="description" content="Reach out to The Harbor Group USA for all your health needs. Dedicated support to help you navigate your health care options."/>
        <meta property="og:title" content="Contact Harbor Group USA | Get in Touch Today" />
        <meta property="og:description" content="Reach out to The Harbor Group USA for all your health needs. Dedicated support to help you navigate your health care options." />
        <link rel="canonical" href="https://harborgroupusa.com/contact/" />
        <meta property="og:url" content="https://harborgroupusa.com/contact/" />
        <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />
   
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 font-sans text-gray-800 flex items-center justify-center py-16 px-4  lg:px-8">
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-center gap-10">

        {/* Left Section: Get In Touch Text */}
        <div className="lg:w-1/2 text-center lg:text-left animate-fade-in-up">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">Get In Touch</h1>
          <p className="text-xl text-gray-700 max-w-lg mx-auto lg:mx-0">
            Connect with us! Your questions matter. Fill the form; we&apos;re here, ready to assist you.
          </p>
        </div>

        {/* Right Section: Contact Form */}
        <div className="lg:w-1/2 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 transform transition-transform duration-500 hover:scale-105 animate-fade-in-right">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"

                value={formData.fullName}
                onChange={handleInputChange}
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
                name="emailaddress"
                value={formData.emailaddress}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base transition-all duration-300 hover:border-blue-400"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="phonenumber" className="block text-sm font-medium text-gray-700 mb-2">
                Mobile Number<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phonenumber"
                name="phonenumber"

                value={formData.phonenumber}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base transition-all duration-300 hover:border-blue-400"
                placeholder="+1 (123) 456-7890"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white
                           bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:-translate-y-0.5"  disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
          {/* Display error or success message */}
          {error && <div className="mt-4 text-red-500">{error}</div>}
          {message && <div className="mt-4 text-green-500">{message}</div>}
        </div>
      </div>
    </div>
     </>
  );
}
