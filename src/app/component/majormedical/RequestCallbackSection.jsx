"use client";

import React, { useState } from 'react';
import { User, Mail, MessageSquare, Send } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// A reusable component for the form input fields
const FormInput = ({ icon: Icon, type, name, placeholder, isTextArea = false, value, onChange }) => {
  const commonClasses =
    "w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent transition-all duration-300";

  return (
    <div className="relative" id="lifestyle-plan-form">
      <div
        className={`absolute left-0 flex pl-4 pointer-events-none ${
          isTextArea ? "top-3" : "inset-y-0 items-center"
        }`}
      >
        <Icon className="w-5 h-5 text-gray-400" />
      </div>

      {isTextArea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows="4"
          className={`${commonClasses} resize-none`}
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={commonClasses}
        />
      )}
    </div>
  );
};

export const RequestCallbackSection = () => {
  // State for form data and handling error/success messages
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    terms: false,
  });

  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [issubmiting, setIssubmiting] = useState(false);

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

    //console.log("Form Data Submitted:", formData); // Log the form data before submission

    setError('');
    setMessage('');
    setIssubmiting(true);

    // Client-side validation
    if (!formData.name || !formData.email || !formData.message || !formData.terms) {
      setError('All fields are required, and you must agree to the terms.');
      setIssubmiting(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      setIssubmiting(false);
      return;
    }

    try {
      const response = await fetch('/api/majormedical', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message); // Success message
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
    <div className="bg-gray-50 py-20 md:py-28 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* --- Left Column: Image Composition --- */}
          <div className="relative h-96 lg:h-[600px] animate-fade-in">
            <div className="relative w-full h-full">
              {/* Background Shapes */}
              <div className="absolute -top-8 -left-8 w-full h-full bg-gray-100 rounded-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-sky-200 to-indigo-200 rounded-3xl shadow-2xl transform rotate-6"></div>
              
              {/* Image */}
              <div className="absolute inset-4">
                <Image
                  src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/request-a-call-back.jpeg"
                  alt="A doctor using a tablet for a consultation"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* --- Right Column: Form --- */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-900 tracking-tight">
              Request a Call Back?
            </h2>
            <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
              <FormInput icon={User} type="text" name="name" placeholder="Your name*" value={formData.name} onChange={handleInputChange} />
              <FormInput icon={Mail} type="email" name="email" placeholder="Your email*" value={formData.email} onChange={handleInputChange} />
              <FormInput icon={MessageSquare} name="message" placeholder="Your message" value={formData.message} onChange={handleInputChange} isTextArea={true} />

              {/* Terms and Conditions Checkbox */}
              <div className="flex items-start space-x-3">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  checked={formData.terms}
                  onChange={handleInputChange}
                  className="h-5 w-5 mt-1 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
                />
                <div className="text-sm">
                  <label htmlFor="terms" className="text-gray-600">
                    By submiting you allow our team to reach out to you via email or phone as submitted information by you and you also agree to our{' '}
                    <Link href="/sms-and-marketing-terms" className="font-semibold text-sky-600 hover:underline">
                      SMS and Marketing terms and conditions.
                    </Link>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-sky-500 hover:bg-sky-600 shadow-lg shadow-sky-500/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  disabled={issubmiting}
                >
                  {issubmiting ? 'submiting...' : 'SUBMIT'}
                  <Send className="ml-3 h-5 w-5" />
                </button>
              </div>
            </form>

            {/* Display error or success message */}
            {error && <div className="mt-4 text-red-500">{error}</div>}
            {message && <div className="mt-4 text-green-500">{message}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};
