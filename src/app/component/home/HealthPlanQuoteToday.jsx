"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMagnetic } from '@/comman/motion/useMagnetic';

const sectionReveal = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

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
  const [issubmiting, setIssubmiting] = useState(false);

  const submitMagnetic = useMagnetic(0.3, 35);

  const [nameError, setNameError] = useState("");
  const nameInputRef = useRef(null);
  const NAME_NUMBER_ERROR = "Name must not contain numbers.";
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "name") {
      const sanitized = value.replace(/[0-9]/g, "");
      setFormData((prev) => ({ ...prev, name: sanitized }));
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
  setIssubmiting(true);

  // Client-side validation
  if (!formData.name || !formData.email || !formData.terms) {
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
    setIssubmiting(false);
  }
}

  return (
    <section className="section-light" id="h-form">
      <motion.div 
        className="w-full px-6 lg:px-12 xl:px-20 2xl:px-32 mx-auto"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-h2 font-display font-bold text-navy-800 tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-navy-500 leading-relaxed">
           Get Your Free Health Plan Quote Today!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Image */}
          <div className="relative rounded-card overflow-hidden shadow-lg img-duotone">
            <Image
              width={600}
              height={400}
              src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Get-Your-Free-Health-Plan-Quote-Today.jpeg"
              alt="Contact Us"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Form */}
          <div className="card-elevated p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-navy-800 mb-1">
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  ref={nameInputRef}
                  className={`w-full p-3 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-accent ${
                    nameError ? "border-error border" : "border border-navy-200"
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
                  <p id="name-error" className="text-error text-sm mt-1" role="alert">
                    {nameError}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-navy-800 mb-1">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  required
                  onChange={handleInputChange}
                  className="w-full p-3 bg-white border border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-navy-800 mb-1">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full p-3 bg-white border border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                ></textarea>
              </div>

              <div className="flex items-start">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  checked={formData.terms}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-accent border-navy-200 rounded mt-1 focus:ring-accent"
                />
                <label htmlFor="terms" className="ml-3 block text-sm text-navy-500">
                  By submitting, you allow our team to reach out to you via email or phone as submitted information by you and you also agree to our{' '}
                  <Link href="/sms-and-marketing-terms" className="font-semibold text-accent hover:underline">
                    SMS and Marketing terms and conditions.
                  </Link>
                </label>
              </div>

              <div>
                <motion.button
                  type="submit"
                  className="w-full btn-accent inline-block"
                  disabled={issubmiting}
                  ref={submitMagnetic.ref}
                  style={{ x: submitMagnetic.springX, y: submitMagnetic.springY }}
                  onMouseMove={submitMagnetic.handleMouseMove}
                  onMouseLeave={submitMagnetic.handleMouseLeave}
                >
                  {issubmiting ? 'Submitting...' : 'Submit'}
                </motion.button>
              </div>
            </form>

            {/* Display error or success message */}
            {error && <div className="mt-4 text-error font-semibold">{error}</div>}
            {message && <div className="mt-4 text-success font-semibold">{message}</div>}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
