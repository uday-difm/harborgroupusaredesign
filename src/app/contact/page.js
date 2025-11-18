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

  // Field-specific error states
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  // General error and success messages
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [issubmiting, setIssubmiting] = useState(false);

  // Validation helpers
  const validateName = (fullName) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(fullName);
  };

  const validateEmail = (emailaddress) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(emailaddress);
  };

  const validatePhoneNumber = (phonenumber) => {
    const phoneRegex = /^\+?\(?\d{1,3}\)?[\s\-]?\(?\d{1,3}\)?[\s\-]?\d{1,4}[\s\-]?\d{1,4}[\s\-]?\d{1,4}$/;
    return phoneRegex.test(phonenumber);
  };

  // Handle name changes: strip invalid characters and show message when user tried to type numbers/symbols
  const handleNameChange = (e) => {
    const raw = e.target.value;
    // Allow only letters and spaces
    const sanitized = raw.replace(/[^A-Za-z\s]/g, '');
    if (sanitized !== raw) {
      setNameError('Only letters and spaces are allowed in the name.');
    } else if (sanitized.trim() === '') {
      setNameError('');
    } else if (!validateName(sanitized)) {
      setNameError('Only letters and spaces are allowed in the name.');
    } else {
      setNameError('');
    }

    setFormData((prev) => ({ ...prev, fullName: sanitized }));
  };

  // Handle email changes: live validation message
  const handleEmailChange = (e) => {
    const value = e.target.value;
    if (value === '') {
      setEmailError('');
    } else if (!validateEmail(value)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
    setFormData((prev) => ({ ...prev, emailaddress: value }));
  };

  // Handle phone changes: strip alphabetic characters and show message if alphabets were present
  const handlePhoneChange = (e) => {
    const raw = e.target.value;
    // Allow digits, +, spaces, parentheses and dashes
    const sanitized = raw.replace(/[^0-9+()\s-]/g, '');
    if (sanitized !== raw) {
      setPhoneError('Alphabets and special characters (except +, (), - and spaces) are not allowed in phone number.');
    } else if (sanitized.trim() === '') {
      setPhoneError('');
    } else if (!validatePhoneNumber(sanitized)) {
      setPhoneError('Please enter a valid phone number.');
    } else {
      setPhoneError('');
    }

    setFormData((prev) => ({ ...prev, phonenumber: sanitized }));
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setMessage('');

    // quick client-side required fields check
    if (!formData.fullName || !formData.emailaddress || !formData.phonenumber) {
      setError('All fields are required.');
      return;
    }

    // if any field-specific errors exist, block submit
    if (nameError || emailError || phoneError) {
      setError('Please fix the highlighted errors before submitting.');
      return;
    }

    // final validation before submit
    if (!validateName(formData.fullName)) {
      setNameError('Only letters and spaces are allowed in the name.');
      setError('Please fix the highlighted errors before submitting.');
      return;
    }

    if (!validateEmail(formData.emailaddress)) {
      setEmailError('Please enter a valid email address.');
      setError('Please fix the highlighted errors before submitting.');
      return;
    }

    if (!validatePhoneNumber(formData.phonenumber)) {
      setPhoneError('Please enter a valid phone number.');
      setError('Please fix the highlighted errors before submitting.');
      return;
    }

    setIssubmiting(true);

    // Adjust keys to match API expected keys
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
        setMessage(data.message || 'Your message has been sent successfully.');
        setFormData({ fullName: '', emailaddress: '', phonenumber: '' }); // Clear form after submission
      } else {
        setError(data.message || 'An error occurred. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIssubmiting(false);
    }
  };

  return (
    <>
      <title>Contact Harbor Group USA | Get in Touch Today</title>
      <meta name="keywords" content="Harbor Group USA, contact Harbor Group, customer support, health plan inquiries, Plans contact, get in touch, medical coverage help, Plans assistance" />
      <meta name="description" content="Reach out to The Harbor Group USA for all your health needs. Dedicated support to help you navigate your health care options." />
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
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleNameChange}
                  placeholder="Your full name"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base transition-all duration-300 hover:border-blue-400"
                />
                {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
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
                  onChange={handleEmailChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base transition-all duration-300 hover:border-blue-400"
                  placeholder="your.email@example.com"
                />
                {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
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
                  onChange={handlePhoneChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base transition-all duration-300 hover:border-blue-400"
                  placeholder="+1 (123) 456-7890"
                />
                {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white
                           bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:-translate-y-0.5"
                  disabled={issubmiting}
                >
                  {issubmiting ? 'Submitting...' : 'Submit'}
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
