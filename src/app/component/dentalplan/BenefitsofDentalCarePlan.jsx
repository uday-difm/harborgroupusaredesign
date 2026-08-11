"use client";

import React, { useState , useRef} from 'react';
import Link from 'next/link';

export const BenefitsofDentalCarePlan = () => {

   // State for form data, error messages, and submission status
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    terms: false,
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

  // Validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setMessage('');
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

    // Log form data (for debugging)
   // console.log('Form Data Submitted:', formData);

    try {
      // Making the API call
      const response = await fetch('/api/dentalplan', {
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
    <section className='section-tint' id ="dental-form">
    <div className="max-w-screen-xl mx-auto px-4 py-16 md:py-24 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-h2 font-display font-bold text-navy-800 mb-4 animate-slide-in-down">
         Benefits of Dental Care Plan
        </h2>
        <p className="text-lg md:text-xl text-navy-500 max-w-3xl mx-auto animate-slide-in-down delay-100">
          Get regular checkups and cleanings to prevent problems, along with expert care for any bigger issues like crowns and root canals. Our practical solutions for your dental needs will help you get a healthy, confident smile!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: Service Cards */}
        <div className="space-y-8">
          {/* Preventive Services Card */}
          <div className="card-elevated p-8 transform transition-transform duration-500 hover:-translate-y-1 animate-fade-in-left delay-200">
            <h3 className="text-2xl font-bold text-navy-800 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 mr-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.001 12.001 0 002.944 12c0 2.873.843 5.485 2.308 7.373L12 22l6.748-2.627A12.001 12.001 0 0021.056 12c0-2.873-.843-5.485-2.308-7.373z" />
              </svg>
              Preventive Services
            </h3>
            <ul className="list-disc list-inside text-navy-500 space-y-2 text-lg">
              <li>Regular cleanings</li>
              <li>X-rays</li>
              <li>Fluoride</li>
            </ul>
          </div>

          {/* Basic Services Card */}
          <div className="card-elevated p-8 transform transition-transform duration-500 hover:-translate-y-1 animate-fade-in-left delay-300">
            <h3 className="text-2xl font-bold text-navy-800 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 mr-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              Basic Services
            </h3>
            <ul className="list-disc list-inside text-navy-500 space-y-2 text-lg">
              <li>Fillings</li>
              <li>Extractions</li>
              <li>Sealants</li>
            </ul>
          </div>

          {/* Major Services Card */}
          <div className="card-elevated p-8 transform transition-transform duration-500 hover:-translate-y-1 animate-fade-in-left delay-400">
            <h3 className="text-2xl font-bold text-navy-800 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 mr-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0l-1.5 1.5L9 17.25" />
              </svg>
              Major Services
            </h3>
            <ul className="list-disc list-inside text-navy-500 space-y-2 text-lg">
              <li>Root canals</li>
              <li>Bridges</li>
              <li>Crowns</li>
              <li>Dentures</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Contact Form Section */}
        <div className="card-elevated p-8 md:p-12 animate-fade-in-right delay-500">
          <h3 className="text-3xl md:text-4xl font-bold text-navy-800 mb-8 text-center">Get in Touch with Us</h3>
          <form className="max-w-md mx-auto space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-navy-800 text-sm font-semibold mb-2">Your Name*</label>
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
              <label htmlFor="email" className="block text-navy-800 text-sm font-semibold mb-2">Your Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 bg-white border border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-navy-800 text-sm font-semibold mb-2">Your Message</label>
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
              <input type="checkbox" id="terms" className="mt-1 h-4 w-4 text-accent border-navy-200 rounded focus:ring-accent"  name="terms"
                  checked={formData.terms}
                  onChange={handleInputChange}/>
              <label htmlFor="terms" className="ml-3 text-sm text-navy-500 leading-relaxed">
                By submitting you allow our team to reach out to you via email or phone as submitted information by you and you also allow to agree to our <Link href="/sms-and-marketing-terms" className="text-accent hover:underline font-semibold">SMS and Marketing terms and conditions</Link>.
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
    </section>
  );
};
