"use client";

import React, { useState } from 'react';
import Image from 'next/image'; 
import Link from 'next/link';

export const MedicalFormLanding = () => {
  // Define custom colors based on the logo for easy use with Tailwind
  const primaryDarkBlue = '#1A2E5B'; // Dark blue from the logo text/background
  const accentLightBlue = '#4CAFDE'; // Lighter blue from the logo outline
  const softGrayBg = '#F0F2F5'; // A very light gray for background
  const white = '#FFFFFF';


  // State for form data and error/success messages
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    consent: false,
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

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setMessage('');
    setIsSubmitting(true);

    // Validation
    if (!formData.name || !formData.email || !formData.message || !formData.consent) {
      setError('All fields are required, and you must agree to the terms.');
      setIsSubmitting(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    // Log the form data (for debugging)
    console.log('Form Data Submitted:', formData);

    try {
      const response = await fetch('/api/medicalplan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message); // Success message
        setFormData({ name: '', email: '', message: '', consent: false }); // Clear form
      } else {
        setError(data.error || 'An error occurred. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 font-inter relative overflow-hidden" style={{ background: `linear-gradient(to br, ${softGrayBg}, ${primaryDarkBlue}05)` }}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/medical-plans-for-complete-health-coverage.jpeg" // Placeholder for your medical background image
          alt="Medical Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="animate-fade-in"
        />
        {/* Darker overlay for text readability */}
        <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${primaryDarkBlue}D0, ${primaryDarkBlue}A0, transparent)` }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content Section */}
        <div className="text-white lg:text-left text-center p-6 lg:p-0 animate-slide-in-left">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
           Medical Plans for Complete Health Coverage
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed mb-8 animate-fade-in-up delay-100">
        Stay healthy & covered with our personalized medical plans – go beyond the basics! Enjoy routine check-ups, preventive care, vaccinations, and even specialized support for chronic conditions – all in one comprehensive medical cost sharing plans without much hassle.
          </p>
          <Link href="/contact" className="px-8 py-4 text-white font-bold text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-opacity-75 animate-fade-in-up delay-200" style={{ backgroundColor: accentLightBlue, '--tw-ring-color': `${accentLightBlue}80` }}>
            GET STARTED
          </Link>
        </div>

        {/* Right Form Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 lg:p-12 " style={{ backgroundColor: white }}>
          <h3 className="text-3xl font-extrabold mb-2" style={{ color: primaryDarkBlue }}>
            Fill Out The Form
          </h3>
          <p className="text-gray-600 mb-6">And Receive Your Consultation</p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2 text-left">Name*</label>
                <input
                  type="text"
                  id="name"
                   name="name"
                  value={formData.name}
                  onChange={handleInputChange}

                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  style={{ '--tw-ring-color': `${accentLightBlue}80` }}
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2 text-left">Email*</label>
                <input
                  type="email"
                  id="email"
                   name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  style={{ '--tw-ring-color': `${accentLightBlue}80` }}
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2 text-left">Your message</label>
              <textarea
                id="message"
                rows="5"
                 name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 resize-none"
                style={{ '--tw-ring-color': `${accentLightBlue}80` }}
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="consent"
                 name="consent"
                checked={formData.consent}
                onChange={handleInputChange}
                className="mt-1 mr-2 accent-current" // Using accent-current to inherit color from parent if set
                style={{ color: accentLightBlue }}
              />
              <label htmlFor="consent" className="text-gray-600 text-sm text-left">
                By Submitting you allow our team to reach out to you via email or phone as submitted information by you and you also allow to agree to our <Link href="/sms-and-marketing-terms" className="underline" style={{ color: primaryDarkBlue }}>terms and conditions</Link>.
              </label>
            </div>
             <button
              type="submit"
              className="w-full px-8 py-4 text-white font-bold text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-opacity-75"
              style={{ backgroundColor: accentLightBlue, '--tw-ring-color': `${accentLightBlue}80` }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          
          </form>
             {/* Display error or success message */}
          {error && <div className="mt-4 text-red-500">{error}</div>}
          {message && <div className="mt-4 text-green-500">{message}</div>}
        </div>
      </div>

      {/* Tailwind CSS Custom Animations */}
      {/* Ensure these keyframes and animations are added to your tailwind.config.js */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fade-in-up.delay-100 { animation-delay: 0.1s; }
        .animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
        .animate-slide-in-left { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slideInRight 0.8s ease-out forwards; }
      `}</style>
    </section>
  );
};

