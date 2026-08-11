"use client";

import React, { useState , useRef} from 'react'

export const NetworkContact = () => {
      const gradientStops = (id) => (
    <defs>
      <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: '#7DD3FC', stopOpacity: 1}} /> 
        <stop offset="100%" style={{stopColor: '#22D3EE', stopOpacity: 1}} />
      </linearGradient>
    </defs>
  );

   const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    terms: false,
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [issubmiting, setIssubmiting] = useState(false);
  const [nameError, setNameError] = useState("");


 const nameInputRef = useRef(null);
  const NAME_NUMBER_ERROR = "Name must not contain numbers.";

  // Handle form input changes (name sanitized)
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "name") {
      // Remove digits as a safety net
      const sanitized = value.replace(/[0-9]/g, "");
      setFormData((prev) => ({ ...prev, name: sanitized }));

      // Show name-specific error only when digits were present
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

  // Block numeric key presses for name input
  const handleNameKeyDown = (e) => {
    if (/^[0-9]$/.test(e.key)) {
      e.preventDefault();
      setNameError(NAME_NUMBER_ERROR);
    }
  };

  // Sanitize pasted text (remove digits) and insert at caret position
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

    // restore caret after paste
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

    setError("");
    setSuccessMessage("");
    setIssubmiting(true);

    if (!formData.name || !formData.email || !formData.message || !formData.terms) {
      setError("All fields are required, and you must agree to the terms.");
      setIssubmiting(false);
      return;
    }

    if (/[0-9]/.test(formData.name)) {
      setNameError(NAME_NUMBER_ERROR);
      setIsSubmitting(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      setIssubmiting(false);
      return;
    }

    try {

      const response = await fetch("/api/limitedmed", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message); 
        setFormData({ name: "", email: "", message: "", terms: false }); 
      } else {
        setError(data.error || "An error occurred. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    } finally {
      setIssubmiting(false);
    }
  };


  return (
    <>
      <section className="w-full bg-gray-100 py-16 px-4 sm:px-6 lg:px-8" id="limited-med-form">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"> 
          <div className="bg-white p-8 rounded-card card-elevated animate-slideInLeft">
            <h2 className="text-4xl font-extrabold text-navy-800 mb-6 text-center lg:text-left">
              Connect With Us
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Your name*</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    ref={nameInputRef}
                    className={`w-full p-3 rounded-md focus:ring-blue-500 focus:border-blue-500 border ${
                      nameError ? "border-error" : "border-gray-300"
                    }`}
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    onKeyDown={handleNameKeyDown}
                    onPaste={handleNamePaste}
                    aria-describedby={nameError ? "name-error" : undefined}
                    aria-required="true"
                  />
                  {/* Name-specific error directly under the input */}
                  {nameError && (
                    <p id="name-error" className="text-error text-sm mt-1" role="alert">
                      {nameError}
                    </p>
                  )}
                  </div>
                <div className="flex-1">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Your email*</label>
                  <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="you@example.com"  value={formData.email}
                    onChange={handleInputChange} />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">Your message</label>
                <textarea id="message" name="message" rows="5" className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 resize-y" placeholder="How can we help you?"   value={formData.message}
                  onChange={handleInputChange} ></textarea>
              </div>
              <div className="flex items-start">
                <input type="checkbox" id="terms" name="terms" className="h-4 w-4 text-navy-600 rounded border-gray-300 focus:ring-blue-500 mt-1"  checked={formData.terms}
                  onChange={handleInputChange} />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                  By submiting you allow our team to reach out to you via email or phone as submitted information by you and you also allow to agree to our <a href="/sms-and-marketing-terms" className="text-navy-600 hover:underline">SMS and Marketing terms and conditions</a>.
                </label>
              </div>
              <button type="submit" className="w-full bg-sky-400 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"   disabled={issubmiting}
              >
                {issubmiting ? 'submiting...' : 'SUBMIT'}
              </button>
            </form>
            {error && <div className="mt-4 text-error">{error}</div>}
            {successMessage && <div className="mt-4 text-accent">{successMessage}</div>}
          </div>
          <div className="bg-navy-50 p-8 rounded-card card-elevated animate-slideInRight">
            <h2 className="text-4xl font-extrabold text-navy-800 mb-6 text-center lg:text-left">
             Network
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-xl lg:max-w-none mx-auto lg:mx-0 text-justify">
             Accessing top-notch support for your targeted medical needs is effortless with our extensive network of experienced professionals.
            </p>
            <h3 className="text-2xl font-bold text-navy-800 mb-4">Specialized Healthcare Professionals</h3>
            <ul className="space-y-3 text-gray-700 text-left mb-6 text-justify">
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="url(#networkIconGradient1)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {gradientStops("networkIconGradient1")}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Tap into a network of seasoned professionals with expertise in specific medical fields
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="url(#networkIconGradient2)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {gradientStops("networkIconGradient2")}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Ensure tailored guidance for your unique health requirements
              </li>
            </ul>
            <h3 className="text-2xl font-bold text-navy-800 mb-4">Dedicated Support</h3>
            <ul className="space-y-3 text-navy-500 text-left text-justify">
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="url(#networkIconGradient3)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {gradientStops("networkIconGradient3")}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Our support team is ready to assist in connecting you with specialists in our network
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="url(#networkIconGradient4)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {gradientStops("networkIconGradient4")}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
               Enjoy peace of mind with our dedicated support for all your targeted medical inquiries and needs
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
