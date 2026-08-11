"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

export const ConnectWithUs = () => {
  // State management for form data, error, and success message
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    terms: false,
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const nameInputRef = useRef(null);
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "name") {
      const sanitized = value.replace(/[0-9]/g, "");
      setFormData((prev) => ({ ...prev, [name]: sanitized }));
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
    }
  };

  const handleNamePaste = (e) => {
    e.preventDefault();
    const paste = (e.clipboardData || window.clipboardData).getData("text") || "";
    const sanitized = paste.replace(/[0-9]/g, "");
    const input = nameInputRef.current;
    if (!input) {
      setFormData((prev) => ({ ...prev, name: (prev.name || "") + sanitized }));
      return;
    }

    const { selectionStart = 0, selectionEnd = 0, value = "" } = input;
    const newVal = value.slice(0, selectionStart) + sanitized + value.slice(selectionEnd);

    setFormData((prev) => ({ ...prev, name: newVal }));
    window.requestAnimationFrame(() => {
      const pos = selectionStart + sanitized.length;
      input.selectionStart = input.selectionEnd = pos;
    });
  };

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

    // Form validation
    if (!formData.name || !formData.email || !formData.message || !formData.terms) {
      setError("All fields are required, and you must agree to the terms.");
      setIsSubmitting(false);
      return;
    }

    // Extra validation: ensure name contains no digits (in case something slipped through)
    if (/[0-9]/.test(formData.name)) {
      setError("Name must not contain numbers.");
      setIsSubmitting(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Making the API call
      const response = await fetch("/api/accidentplan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message || "Message sent successfully.");
        setFormData({ name: "", email: "", message: "", terms: false });
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
    <section className="w-full bg-gray-100 py-16 px-4 sm:px-6 lg:px-8" id="accident-plan-form">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        {/* Left Column: Connect With Us Form */}
        <div className="bg-white p-8 rounded-card card-elevated animate-slideInLeft flex flex-col h-full">
          <h2 className="text-4xl font-extrabold text-navy-800 mb-6 text-center lg:text-left">
            Connect With Us
          </h2>

          <form className="space-y-6 flex-grow flex flex-col" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                  Your name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  ref={nameInputRef}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  onKeyDown={handleNameKeyDown} // use KeyDown instead of KeyPress
                  onPaste={handleNamePaste} // sanitize pasted content
                  aria-describedby="nameHelp"
                />
                <p id="nameHelp" className="mt-1 text-xs text-navy-500">
                  Numbers will be removed automatically.
                </p>
              </div>

              <div className="flex-1">
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                  Your email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="flex-grow">
              <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 resize-y h-full"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex items-start mt-3">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="h-4 w-4 text-navy-600 rounded border-gray-300 focus:ring-blue-500 mt-1"
                checked={formData.terms}
                onChange={handleInputChange}
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                By submitting you allow our team to reach out to you via email or phone as submitted information by you and you also agree to our{" "}
                <a href="/sms-and-marketing-terms" className="text-navy-600 hover:underline">
                  SMS and Marketing terms and conditions
                </a>
                .
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "SUBMIT"}
            </button>
          </form>

          {/* Display error or success message */}
          {error && (
            <div className="mt-4 text-error" role="alert" aria-live="assertive">
              {error}
            </div>
          )}
          {successMessage && (
            <div className="mt-4 text-accent" role="status" aria-live="polite">
              {successMessage}
            </div>
          )}
        </div>

        {/* Right Column: Image of Contact Form */}
        <div className="flex justify-center lg:justify-end animate-slideInRight h-full">
          <Image
            className="w-full h-full object-cover rounded-card shadow-2xl transform transition-transform duration-700 ease-in-out hover:scale-105"
            src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Accident-plan-form-section.jpeg"
            alt="Screenshot of contact form"
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};
