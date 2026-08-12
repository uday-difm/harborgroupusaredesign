"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

export const ConnectWithUS = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    terms: false,
  });

  // Errors
  const [error, setError] = useState("");       // form-wide errors (bottom)
  const [nameError, setNameError] = useState(""); // name-field errors (under name input)
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nameInputRef = useRef(null);

  const NAME_NUMBER_ERROR = "Name must not contain numbers.";

  // handle change, sanitize name (remove digits)
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "name") {
      const sanitized = value.replace(/[0-9]/g, "");
      setFormData((prev) => ({ ...prev, name: sanitized }));

      // Show name error only when digits were present in the input
      if (sanitized !== value) {
        setNameError(NAME_NUMBER_ERROR);
      } else {
        setNameError("");
      }
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));

    // don't touch nameError here
  };

  // block numeric key presses
  const handleNameKeyDown = (e) => {
    if (/^[0-9]$/.test(e.key)) {
      e.preventDefault();
      setNameError(NAME_NUMBER_ERROR);
    }
  };

  // paste handler — remove digits and insert sanitized text at caret
  const handleNamePaste = (e) => {
    e.preventDefault();
    const paste = (e.clipboardData || window.clipboardData).getData("text") || "";
    const sanitized = paste.replace(/[0-9]/g, "");

    // if paste had digits, show nameError
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

    // place caret after inserted text
    window.requestAnimationFrame(() => {
      const pos = start + sanitized.length;
      input.selectionStart = input.selectionEnd = pos;
    });
  };

  // Email validation
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  // submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // clear previous messages
    setError("");
    setSuccessMessage("");
    setIsSubmitting(true);

    // basic validation
    if (!formData.name || !formData.email || !formData.message || !formData.terms) {
      setError("All fields are required, and you must agree to the terms.");
      setIsSubmitting(false);
      return;
    }

    // ensure no digits in name (set nameError, not global error)
    if (/[0-9]/.test(formData.name)) {
      setNameError(NAME_NUMBER_ERROR);
      setIsSubmitting(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/hospitalplan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message || "Message sent successfully.");
        setFormData({ name: "", email: "", message: "", terms: false });
        setNameError("");
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
    <>
      <section
        className="relative w-full bg-surface-alt py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
        id="hospital-plan-form"
      >
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <filter id="waveBlurSmall">
                <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" result="blur" />
              </filter>
            </defs>
            <g fill="none" strokeWidth="0.2" strokeOpacity="0.5" filter="url(#waveBlurSmall)">
              <path stroke="var(--color-navy-300)" d="M0,50 Q25,20 50,50 T100,50" className="animate-waveSmall1" />
              <path stroke="var(--color-navy-200)" d="M0,60 Q20,30 40,60 T60,30 T80,60 T100,60" className="animate-waveSmall2" />
            </g>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch relative z-10">
          {/* Left Column: Image */}
          <div className="flex justify-center lg:justify-start  h-full">
            <Image
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-2xl shadow-2xl transform transition-transform duration-700 ease-in-out hover:scale-105"
              src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/request-a-call-back.jpeg"
              alt="People connecting"
            />
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white p-8 rounded-2xl card-elevated animate-slideInRight flex flex-col h-full">
            <h3 className="text-2xl font-bold text-navy-800 mb-4 text-center">Connect With US</h3>

            <form className="space-y-6 flex-grow flex flex-col" onSubmit={handleSubmit}>
              <div className="flex-grow">
                <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                  Your name*
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  ref={nameInputRef}
                  className={`w-full p-3 border rounded-lg focus:ring-accent focus:border-accent ${
                    nameError ? "border-error" : "border-gray-300"
                  }`}
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  onKeyDown={handleNameKeyDown}
                  onPaste={handleNamePaste}
                />

                {/* Name-specific error directly under the name field */}
                {nameError && <p className="text-error text-sm mt-1">{nameError}</p>}
              </div>

              <div className="flex-grow">
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                  Your email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex-grow">
                <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent resize-y h-full"
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
                  className="h-4 w-4 text-navy-600 rounded border-gray-300 focus:ring-accent mt-1"
                  checked={formData.terms}
                  onChange={handleInputChange}
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                  By submiting you allow our team to reach out to you via email or phone as submitted information by you and you also allow to agree to our{" "}
                  <a href="/sms-and-marketing-terms" className="text-navy-600 hover:underline">
                    SMS and Marketing terms and conditions
                  </a>
                  .
                </label>
              </div>

              <button
                type="submit"
                className="btn-accent px-10 py-4 font-bold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "SUBMIT"}
              </button>
            </form>

            {/* Form-wide errors (render at bottom of form) */}
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
        </div>
      </section>
    </>
  );
};
