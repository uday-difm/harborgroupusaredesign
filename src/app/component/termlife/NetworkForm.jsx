"use client";
import React, { useState,useRef } from 'react'

export default function NetworkForm() {
     const gradientStops = (id) => (
    <defs>
      <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: '#7DD3FC', stopOpacity: 1}} /> {/* Tailwind sky-300 */}
        <stop offset="100%" style={{stopColor: '#22D3EE', stopOpacity: 1}} /> {/* Tailwind cyan-400 */}
      </linearGradient>
    </defs>
  );

   // State for form data, error messages, and submission status
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    terms: false,
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [issubmiting, setIssubmiting] = useState(false);

 const [nameError, setNameError] = useState("");
  const nameInputRef = useRef(null);
  const NAME_NUMBER_ERROR = "Name must not contain numbers.";

  // Handle form input changes (sanitizes name field)
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "name") {
      // Remove any digits (safety net for typed/pasted/programmatic changes)
      const sanitized = value.replace(/[0-9]/g, "");
      setFormData((prev) => ({ ...prev, name: sanitized }));

      // If sanitized != value, user attempted to input numbers -> show name-specific error
      if (sanitized !== value) {
        setNameError(NAME_NUMBER_ERROR);
      } else {
        setNameError("");
      }
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleNameKeyDown = (e) => {
    if (/^[0-9]$/.test(e.key)) {
      e.preventDefault();
      setNameError(NAME_NUMBER_ERROR);
    }
  };

  const handleNamePaste = (e) => {
    e.preventDefault();
    const paste = (e.clipboardData || window.clipboardData).getData("text") || "";
    const sanitized = paste.replace(/[0-9]/g, "");
    if (paste !== sanitized) {
      setNameError(NAME_NUMBER_ERROR);
    } else {
      setNameError("");
    }

    const input = nameInputRef.current;
    if (!input) {
      setFormData((prev) => ({ ...prev, name: (prev.name || "") + sanitized }));
      return;
    }

    const start = input.selectionStart ?? 0;
    const end = input.selectionEnd ?? 0;
    const newVal = input.value.slice(0, start) + sanitized + input.value.slice(end);
    setFormData((prev) => ({ ...prev, name: newVal }));
    window.requestAnimationFrame(() => {
      const pos = start + sanitized.length;
      input.selectionStart = input.selectionEnd = pos;
    });
  };


  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setSuccessMessage('');
    setIssubmiting(true);

    // Validation
    if (!formData.name || !formData.email || !formData.message || !formData.terms) {
      setError('All fields are required, and you must agree to the terms.');
      setIssubmiting(false);
      return;
    }
      if (/[0-9]/.test(formData.name)) {
      setNameError(NAME_NUMBER_ERROR);
      setIssubmiting(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      setIssubmiting(false);
      return;
    }

    try {
      // API Call
      const response = await fetch('/api/termlife', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message); // Success message from the API
        setFormData({ name: '', email: '', message: '', terms: false }); // Clear form
      } else {
        setError(data.error || 'An error occurred. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIssubmiting(false);
    }
  };


  return (
    <>
     {/* Existing Section: Network and Contact Form - Enhanced Left Side without Image */}
      <section className="w-full bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 animate-fadeIn" id="term-form">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Network Info with Enhanced Design */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center lg:text-left relative overflow-hidden">
            {/* Abstract background pattern for uniqueness */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <pattern id="pattern-circles" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="5" cy="5" r="2" fill="#3B82F6" /> {/* Blue-500 for subtle dots */}
                  </pattern>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
              </svg>
            </div>

            <div className="relative z-10"> {/* Ensure content is above the pattern */}
              {/* Large, stylized Network Icon */}
              <svg className="w-28 h-28 mx-auto mb-6" fill="none" stroke="url(#iconGradient3)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {gradientStops("iconGradient3")}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
              </svg>
              <h2 className="text-4xl font-extrabold text-blue-800 mb-4">Network</h2>
              <p className="text-lg text-gray-700 mb-8">
               Access a Network of Top-Notch  professionals to support Your Loved Ones
              </p>
              <ul className="space-y-4 text-left">
                <li className="flex items-center text-gray-700">
                  <svg className="w-6 h-6" fill="none" stroke="url(#iconGradient4)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {gradientStops("iconGradient4")}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Experienced Health Plan Professionals
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-6 h-6" fill="none" stroke="url(#iconGradient5)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {gradientStops("iconGradient5")}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Nationwide Coverage
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-6 h-6" fill="none" stroke="url(#iconGradient6)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {gradientStops("iconGradient6")}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Reliable Partnerships
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-6 h-6" fill="none" stroke="url(#iconGradient7)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {gradientStops("iconGradient7")}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Dedicated Support
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-blue-50 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-800 mb-6">Get in Touch</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name and Email in one row */}
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Your name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    ref={nameInputRef}
                    className={`w-full p-3 rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                      nameError ? "border-red-500 border" : "border border-gray-300"
                    }`}
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    onKeyDown={handleNameKeyDown}
                    onPaste={handleNamePaste}
                    aria-describedby={nameError ? "name-error" : undefined}
                  />
                  {/* Name-specific error directly under the name field */}
                  {nameError && (
                    <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">
                      {nameError}
                    </p>
                  )}
                </div>
                <div className="flex-1">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Your email*</label>
                  <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="you@example.com" value={formData.email} onChange={handleInputChange} />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">Your message</label>
                <textarea id="message" name="message" rows="5" className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 resize-y" placeholder="How can we help you?" value={formData.message} onChange={handleInputChange} ></textarea>
              </div>
              <div className="flex items-start">
                <input type="checkbox" id="terms" name="terms" className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 mt-1" checked={formData.terms} onChange={handleInputChange} />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                  By submiting you allow our team to reach out to you via email or phone as submitted information by you and you also allow to agree to our <a href="/sms-and-marketing-terms" className="text-blue-600 hover:underline">SMS and Marketing terms and conditions</a>.
                </label>
              </div>
              <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75" disabled={issubmiting}>
                {issubmiting ? 'submiting...' : 'SUBMIT'}
                </button>
            </form>
             {/* Display error or success message */}
            {error && <div className="mt-4 text-red-500">{error}</div>}
            {successMessage && <div className="mt-4 text-green-500">{successMessage}</div>}
          </div>
        </div>
      </section>

      {/* Tailwind CSS Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-out forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-bounceIn {
          animation: bounceIn 0.8s ease-out forwards;
        }

        /* Removed slideInLeft as image is removed */

        /* Delayed Fade In for cards (if needed for future sections) */
        @keyframes delayFadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-delayFadeIn {
          animation: delayFadeIn 0.8s ease-out forwards;
          animation-delay: 0.2s;
        }
        .animate-delayFadeIn-2 {
          animation: delayFadeIn 0.8s ease-out forwards;
          animation-delay: 0.4s;
        }
        .animate-delayFadeIn-3 {
          animation: delayFadeIn 0.8s ease-out forwards;
          animation-delay: 0.6s;
        }
      `}</style>
    </>
  )
}
