"use client";

import React, { useState,useRef } from 'react';
import Image from 'next/image'; 
import Link from 'next/link';

export const MedicalFormLanding = () => {
  // State for form data and error/success messages
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    consent: false,
  });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [issubmiting, setIssubmiting] = useState(false);

  const [nameError, setNameError] = useState("");
  const nameInputRef = useRef(null);
  const NAME_NUMBER_ERROR = "Name must not contain numbers.";

  // Handle form input changes (sanitizes name field)
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
  
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setMessage('');
    setIssubmiting(true);

    if (!formData.name || !formData.email || !formData.message || !formData.consent) {
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
      const response = await fetch('/api/medicalplan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setFormData({ name: '', email: '', message: '', consent: false }); 
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
    <section className="relative min-h-[90vh] flex flex-col lg:flex-row bg-surface" id="medical-form">
      {/* Split Screen Var A: Left Side Image */}
      <div className="lg:w-1/2 w-full relative h-[40vh] lg:h-auto img-duotone">
        <Image
          src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/medical-plans-for-complete-health-coverage.jpeg"
          alt="Medical Background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-navy-800/20 mix-blend-multiply pointer-events-none"></div>
      </div>

      {/* Right Side Content & Form */}
      <div className="lg:w-1/2 w-full flex items-center justify-center p-6 lg:p-16 relative">
        <div className="w-full max-w-lg z-10 space-y-10">
          
          {/* Text Section */}
          <div className="animate-fade-in-up">
            <h2 className="text-h2 font-display font-bold text-navy-800 leading-tight mb-4">
              Medical Plans for Complete Health Coverage
            </h2>
            <p className="text-lg text-navy-500 leading-relaxed text-justify">
              Stay healthy & covered with our personalized medical plans – go beyond the basics! Enjoy routine check-ups, preventive care, vaccinations, and even specialized support for chronic conditions.
            </p>
          </div>

          {/* Form Section */}
          <div className="card-elevated p-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-navy-800 mb-2">Fill Out The Form</h3>
            <p className="text-navy-500 mb-6">And Receive Your Consultation</p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-navy-800 mb-1">Name*</label>
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
                    {nameError && (
                      <p id="name-error" className="text-error text-sm mt-1" role="alert">
                        {nameError}
                      </p>
                    )}
                  </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy-800 mb-1">Email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-white border border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-navy-800 mb-1">Your message</label>
                <textarea
                  id="message"
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-white border border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
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
                  className="mt-1 mr-3 h-4 w-4 text-accent border-navy-200 rounded focus:ring-accent"
                />
                <label htmlFor="consent" className="text-navy-500 text-sm leading-relaxed">
                  By submitting you allow our team to reach out to you via email or phone as submitted information by you and you also agree to our <Link href="/sms-and-marketing-terms" className="font-semibold text-accent hover:underline">terms and conditions</Link>.
                </label>
              </div>
               <button
                type="submit"
                className="w-full btn-accent py-4"
                disabled={issubmiting}
              >
                {issubmiting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
            
            {error && <div className="mt-4 text-error font-semibold">{error}</div>}
            {message && <div className="mt-4 text-success font-semibold">{message}</div>}
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { 
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

