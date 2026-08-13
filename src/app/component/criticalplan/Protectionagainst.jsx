"use client";
import React, { useState,useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export const Protectionagainst = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const primaryBlueGradient = (id) => (
    <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{ stopColor: "var(--color-navy-300)", stopOpacity: 1 }} /> {/* blue-400 */}
      <stop offset="100%" style={{ stopColor: "var(--color-navy-500)", stopOpacity: 1 }} /> {/* blue-500 */}
    </linearGradient>
  );

  const lightBlueGradient = (id) => (
    <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{ stopColor: "var(--color-navy-100)", stopOpacity: 1 }} /> {/* blue-200 */}
      <stop offset="100%" style={{ stopColor: "var(--color-navy-200)", stopOpacity: 1 }} /> {/* blue-300 */}
    </linearGradient>
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    terms: false,
  });
  const [error, setError] = useState("");
    const [nameError, setNameError] = useState(""); 
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

    const nameInputRef = useRef(null);
  const NAME_NUMBER_ERROR = "Name must not contain numbers.";

 const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "name") {
      // sanitize name by removing digits (final safety net)
      const sanitized = value.replace(/[0-9]/g, "");
      setFormData((prev) => ({ ...prev, name: sanitized }));

      // if sanitized differs, numbers were present — show name-specific error
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

  // block numeric key presses
  const handleNameKeyDown = (e) => {
    // covers main keys and numpad
    if (/^[0-9]$/.test(e.key)) {
      e.preventDefault();
      setNameError(NAME_NUMBER_ERROR);
    }
  };

  // sanitize pasted text and insert at caret
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
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.message || !formData.terms) {
      setError("All fields are required, and you must agree to the terms.");
      setIsSubmitting(false);
      return;
    }

       // ensure no digits exist in name (server safety)
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
      if (!executeRecaptcha) {
        setError('reCAPTCHA not ready');
        setIsSubmitting(false);
        return;
      }
      const token = await executeRecaptcha('form_submit');

      const response = await fetch("/api/criticalplan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken: token }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message || "Submitted successfully.");
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
    <div className="bg-navy-50 font-body antialiased flex flex-col items-center justify-center">
      {/* SVG gradient defs */}
      <svg width="0" height="0" className="absolute">
        <defs>
          {primaryBlueGradient("primaryBlueGradientHero")}
          {primaryBlueGradient("primaryBlueGradientIcon1")}
          {primaryBlueGradient("primaryBlueGradientIcon2")}
          {primaryBlueGradient("primaryBlueGradientIcon3")}
          {lightBlueGradient("lightBlueGradientCardBg")}
        </defs>
      </svg>

      <section
        id="critical-plan-form"
        className="relative w-full bg-gradient-to-br from-navy-100 to-navy-200 text-navy-800"
        aria-labelledby="critical-plan-heading"
      >
        {/* Background image (fills section) */}
        <div className="relative w-full">
          <div className="absolute inset-0">
            {/* Next/Image with `fill` for responsive cover */}
            <Image
              src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Critical-plan-hero-section.jpeg"
              alt="Hands with subtle medical background"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
              className="object-cover object-center opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-navy-100 to-navy-200 opacity-60"></div>
            <div className="absolute inset-0 bg-navy-50 opacity-40"></div>
          </div>

          {/* decorative shapes - hide on very small screens for perf */}
          <div className="absolute inset-0 opacity-20 pointer-events-none hidden sm:block">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" aria-hidden>
              <defs>
                <filter id="shapeBlur" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
                </filter>
              </defs>
              <g fill="var(--color-navy-300)" filter="url(#shapeBlur)">
                <circle cx="10" cy="10" r="8" opacity="0.15" className="animate-shapeFloat1" />
                <rect x="80" y="20" width="12" height="12" rx="3" ry="3" opacity="0.1" className="animate-shapeFloat2" />
                <polygon points="30,85 40,95 20,95" opacity="0.12" className="animate-shapeFloat3" />
                <circle cx="90" cy="80" r="7" opacity="0.1" className="animate-shapeFloat4" />
              </g>
            </svg>
          </div>

          {/* Content wrapper */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left: Text */}
              <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
                <h1 id="critical-plan-heading" className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold mb-4 leading-tight text-navy-800 drop-shadow-sm">
                 Protection against critical illnesses for added security
                </h1>
                <p className="text-base sm:text-lg text-navy-800 max-w-xl mx-auto lg:mx-0 text-justify">
                 Safeguard your loved-ones with our Critical Plans at Harbor Group USA. Offering added security against the uncertainties of life, our Critical Plans provide protection specifically crafted to shield you from the financial impact of critical illnesses.
                </p>
              </div>

              {/* Right: Form */}
              <div className="mx-auto w-full max-w-lg bg-white p-6 sm:p-8 rounded-2xl card-elevated">
                <h3 className="text-xl sm:text-2xl font-bold text-navy-800 mb-4 text-center">Your Information</h3>

                <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your name*
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                         value={formData.name}
                        onChange={handleInputChange}
                        onKeyDown={handleNameKeyDown}
                        onPaste={handleNamePaste}
                        placeholder="Your name"
                        aria-required="true"
                          aria-describedby={nameError ? "name-error" : undefined}
                        className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent/40 focus:border-accent transition ${
                          nameError ? "border-error" : "border-gray-300"
                        }`}
                      />
                        {/* name-specific error shown directly under the input */}
                      {nameError && (
                        <p id="name-error" className="text-sm text-error mt-1" role="alert">
                          {nameError}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Your email*
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                        placeholder="you@example.com"
                        aria-required="true"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent/40 focus:border-accent transition resize-y"
                      placeholder="How can we help you?"
                      aria-required="true"
                    />
                  </div>

                  <div className="flex items-start">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      checked={formData.terms}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-navy-600 rounded border-gray-300 focus:ring-accent mt-1"
                      aria-required="true"
                    />
                    <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                      By submiting you allow our team to reach out to you via email or phone as submitted information by you and you also allow to agree to our {" "}
                      <Link href="/sms-and-marketing-terms" className="text-navy-600 hover:underline">
                        SMS and Marketing terms and conditions
                      </Link>
                      .
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn-accent px-10 py-4 font-bold"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "SUBMIT"}
                  </button>

                  {error && <div className="text-sm text-error">{error}</div>}
                  {successMessage && <div className="text-sm text-accent">{successMessage}</div>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inline styles for animations */}</div>
  );
};
