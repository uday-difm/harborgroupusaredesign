"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export const LimitedMedForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
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

    try {
      if (!executeRecaptcha) {
        setError('reCAPTCHA not ready');
        setIssubmiting(false);
        return;
      }
      const token = await executeRecaptcha('form_submit');

      const response = await fetch('/api/limitedmed', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken: token }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setFormData({ name: '', email: '', message: '', terms: false }); 
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
    <div>
      <h3 className="text-2xl font-display font-bold text-navy-800 mb-2">Connect With Us</h3>
      <p className="text-navy-500 mb-6 font-body">Reach out to learn more about our limited medical plans</p>

      <form className="space-y-6 font-body" onSubmit={handleSubmit} id="limited-med-form">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-navy-800 mb-1">Your Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              ref={nameInputRef}
              className={`w-full p-3 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-shadow ${
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
              <p id="name-error" className="text-error text-sm mt-1" role="alert">{nameError}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-navy-800 mb-1">Your Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 bg-white border border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-shadow"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-navy-800 mb-1">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-3 bg-white border border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-shadow resize-none"
              placeholder="How can we help you?"
              rows={3}
            ></textarea>
          </div>
          <div className="flex items-start">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleInputChange}
              className="mt-1 mr-2 flex-shrink-0"
            />
            <label htmlFor="terms" className="text-sm text-navy-600">
              By submiting you allow our team to reach out to you via email or phone as submitted information by you and you also allow to agree to our <Link href="/sms-and-marketing-terms" className="text-accent underline font-semibold">SMS and Marketing terms and conditions</Link>.
            </label>
          </div>
        </div>
        
        {error && <p className="text-error text-sm font-medium">{error}</p>}
        {message && <p className="text-success text-sm font-medium">{message}</p>}

        <button
          type="submit"
          disabled={issubmiting}
          className="btn-accent w-full py-4 text-base"
        >
          {issubmiting ? 'Submitting...' : 'SUBMIT'}
        </button>
      </form>
    </div>
  );
};
