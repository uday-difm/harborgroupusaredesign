"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

export const Protectionagainst = ()=> {
 const primaryBlueGradient = (id) => (
    <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{stopColor: '#60A5FA', stopOpacity: 1}} /> {/* Tailwind blue-400 */}
      <stop offset="100%" style={{stopColor: '#3B82F6', stopOpacity: 1}} /> {/* Tailwind blue-500 */}
    </linearGradient>
  );

  // Define a lighter blue gradient for subtle accents
  const lightBlueGradient = (id) => (
    <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{stopColor: '#BFDBFE', stopOpacity: 1}} /> {/* Tailwind blue-200 */}
      <stop offset="100%" style={{stopColor: '#93C5FD', stopOpacity: 1}} /> {/* Tailwind blue-300 */}
    </linearGradient>
  );
 const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    terms: false,
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccessMessage("");
    setIsSubmitting(true);

    // Validate form data
    if (!formData.name || !formData.email || !formData.message || !formData.terms) {
      setError("All fields are required, and you must agree to the terms.");
      setIsSubmitting(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    try {
      // API Call to submit the form data
      const response = await fetch("/api/criticalplan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message); // Success message from API response
        setFormData({ name: "", email: "", message: "", terms: false }); // Clear form data
      } else {
        setError(data.error || "An error occurred. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased flex flex-col items-center justify-center">

      {/* Global SVG for gradient definitions */}
      <svg width="0" height="0" className="absolute">
        <defs>
          {primaryBlueGradient("primaryBlueGradientHero")}
          {primaryBlueGradient("primaryBlueGradientIcon1")}
          {primaryBlueGradient("primaryBlueGradientIcon2")}
          {primaryBlueGradient("primaryBlueGradientIcon3")}
          {lightBlueGradient("lightBlueGradientCardBg")}
         
        </defs>
      </svg>

      {/* Hero Section - Critical Illness Protection */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100 to-blue-300 text-blue-900" id="critical-plan-form"> 
        {/* Background Image from user upload */}
        <Image
        width={600}
        height={400}
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Critical-plan-hero-section.jpeg" // image_9d247a.jpg
          alt="Hands with subtle medical background"
         
        />
        {/* Gradient Overlay for light and decent color */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-300 opacity-60"></div>
        <div className="absolute inset-0 bg-blue-50 opacity-40"></div>

        {/* Abstract background pattern: subtle, animated geometric shapes */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <filter id="shapeBlur" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
              </filter>
            </defs>
            <g fill="#60A5FA" filter="url(#shapeBlur)"> {/* Blue-400 for shapes */}
              <circle cx="10" cy="10" r="8" opacity="0.15" className="animate-shapeFloat1" />
              <rect x="80" y="20" width="12" height="12" rx="3" ry="3" opacity="0.1" className="animate-shapeFloat2" />
              <polygon points="30,85 40,95 20,95" opacity="0.12" className="animate-shapeFloat3" />
              <circle cx="90" cy="80" r="7" opacity="0.1" className="animate-shapeFloat4" />
            </g>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 p-4 sm:p-6 lg:p-8 text-center lg:text-left">
          {/* Left Column: Text Content */}
          <div className="max-w-3xl lg:w-1/2 animate-slideInLeft mb-8 lg:mb-0">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-6 leading-tight drop-shadow-xl text-indigo-900 animate-textGlow"> {/* Changed text-white to text-blue-900 */}
             Protection against critical illnesses for added security
            </h1>
            <p className="text-lg sm:text-xl text-gray-900 mb-10 max-w-xl mx-auto lg:mx-0 text-justify drop-shadow-md animate-fadeInUp delay-100"> {/* Changed text-gray-100 to text-blue-800 */}
             Safeguard your loved-ones with our Critical Plans at Harbor Group USA. Offering added security against the uncertainties of life, our Critical Plans provide protection specifically crafted to shield you from the financial impact of critical illnesses.
            </p>
          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full lg:w-1/2 max-w-md bg-white p-8 rounded-xl shadow-lg animate-slideInRight">
            <h3 className="text-2xl font-bold text-indigo-900 mb-6 text-center">Your Information</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-6"> {/* Added flex utilities for row layout and gap */}
                <div className="flex-1"> {/* Added flex-1 to make them take equal width */}
                  <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Your name*</label>
                  <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Your name" value={formData.name}
                  onChange={handleInputChange} />
                </div>
                <div className="flex-1"> {/* Added flex-1 to make them take equal width */}
                  <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Your email*</label>
                  <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="you@example.com" value={formData.email}
                  onChange={handleInputChange} />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">Your message</label>
                <textarea id="message" name="message" rows="4" className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 resize-y" placeholder="How can we help you?" value={formData.message}
                  onChange={handleInputChange}></textarea>
              </div>
              <div className="flex items-start">
                <input type="checkbox" id="terms" name="terms" className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 mt-1"  checked={formData.terms}
                  onChange={handleInputChange} />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                  By Submitting you allow our team to reach out to you via email or phone as submitted information by you and you also allow to agree to our <Link href="/sms-and-marketing-terms" className="text-blue-600 hover:underline">SMS and Marketing terms and conditions</Link>.
                </label>
              </div>
              <button type="submit" className="w-full py-3 px-6 rounded-md shadow-md bg-sky-400 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 text-white" disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "SUBMIT"}
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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out forwards;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideInRight {
          animation: slideInRight 1s ease-out forwards;
        }

        /* Hero section specific animations */
        @keyframes shapeFloat {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(5px, 5px); }
          50% { transform: translate(0, 10px); }
          75% { transform: translate(-5px, 5px); }
        }
        .animate-shapeFloat1 { animation: shapeFloat 15s infinite alternate ease-in-out; }
        .animate-shapeFloat2 { animation: shapeFloat 17s infinite alternate ease-in-out; animation-delay: 0.5s; }
        .animate-shapeFloat3 { animation: shapeFloat 13s infinite alternate ease-in-out; animation-delay: 1s; }
        .animate-shapeFloat4 { animation: shapeFloat 16s infinite alternate ease-in-out; animation-delay: 0.3s; }

        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 5px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 0, 0, 0.05); } /* Adjusted shadow for darker text */
          50% { text-shadow: 0 0 10px rgba(0, 0, 0, 0.2), 0 0 15px rgba(0, 0, 0, 0.1); } /* Adjusted shadow for darker text */
        }
        .animate-textGlow {
          animation: textGlow 3s infinite alternate ease-in-out;
        }

        /* Utility for delayed animations */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>
    </div>
  )
}
