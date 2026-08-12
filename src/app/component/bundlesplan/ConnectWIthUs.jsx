"use client";

import React, { useState, useRef } from 'react'
import Image from 'next/image';

export const ConnectWIthUs = () => {
    // State for form data and error messages
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
    setIssubmiting(true);

    // Validation
    if (!formData.name || !formData.email || !formData.message || !formData.terms) {
      setError("All fields are required, and you must agree to the terms.");
      setIssubmiting(false);
      return;
    }

    if (/[0-9]/.test(formData.name)) {
      setNameError(NAME_NUMBER_ERROR);
      setIssubmiting(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      setIssubmiting(false);
      return;
    }

    try {
      // API Call
      const response = await fetch("/api/bundlesplan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message); // Success message from the API
        setFormData({ name: "", email: "", message: "", terms: false }); // Clear form
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
      <section className="w-full bg-navy-50 py-20 md:py-28 px-4 sm:px-6 lg:px-8" id="bundles-form">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image with unique styling */}
          <div className="flex justify-center  ">
            <Image
              className="object-cover w-full max-w-lg h-full  rounded-2xl shadow-2xl transition-transform duration-700 ease-in-out" /* Removed -rotate-3 and hover:rotate-0 */
              src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/get-in-touch-section.jpeg" // image_b789a3.png (Connect With Us Image)
              alt="Hand arranging wooden blocks with icons representing family, health, home, car, money, and travel"
              width={600}
              height={400}
            />
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white p-8 rounded-2xl card-elevated animate-slideInRight">
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
                    className={`w-full p-3 rounded-lg focus:ring-accent focus:border-accent ${
                      nameError ? "border-error border" : "border border-gray-300"
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
                
                <div className="flex-1">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Your email*</label>
                  <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent" placeholder="you@example.com"  value={formData.email}
                    onChange={handleInputChange} />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">Your message</label>
                <textarea id="message" name="message" rows="5" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent resize-y" placeholder="How can we help you?" value={formData.message}
                  onChange={handleInputChange}></textarea>
              </div>
              <div className="flex items-start">
                <input type="checkbox" id="terms" name="terms" className="h-4 w-4 text-navy-600 rounded border-gray-300 focus:ring-accent mt-1"   checked={formData.terms}
                  onChange={handleInputChange} />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                  By submiting you allow our team to reach out to you via email or phone as submitted information by you and you also allow to agree to our <a href="/sms-and-marketing-terms" className="text-navy-600 hover:underline">SMS and Marketing terms and conditions</a>.
                </label>
              </div>
              <button type="submit" className="btn-accent px-10 py-4 font-bold" disabled={issubmiting}
              >
                {issubmiting ? 'submiting...' : 'SUBMIT'}
              </button>
            </form>
             {/* Display error or success message */}
            {error && <div className="mt-4 text-error">{error}</div>}
            {successMessage && <div className="mt-4 text-accent">{successMessage}</div>}
          </div>
        </div>
      </section>

      {/* Tailwind CSS Custom Animations */}</>
  )
}
