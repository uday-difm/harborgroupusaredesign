"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const HarborGroupUSALogo = () => (
  <div className="popup-logo">
    <Image
      src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png"
      alt="Harbor Group USA Logo"
      width={140}
      height={140}
      className="object-cover w-full h-full"
    />
  </div>
);

const QuotePopup = ({ onClose }) => {
  const popupRef = useRef(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleSubmit = async () => {
    setSubmitting(true);
    setMessage('');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!name.trim()) { setMessage('Please enter your name.'); setSubmitting(false); return; }
    if (!emailRegex.test(email)) { setMessage('Please enter a valid email address.'); setSubmitting(false); return; }
    if (!phoneRegex.test(phone)) { setMessage('Phone number must be 10 digits.'); setSubmitting(false); return; }

    try {
      const res = await fetch('/api/freequote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone }),
      });
      const result = await res.json();
      if (res.ok) {
        setMessage('Thank you! We received your request.');
        setName(''); setEmail(''); setPhone('');
        setTimeout(onClose, 2500);
      } else {
        setMessage(result?.message || 'Submission failed.');
      }
    } catch (err) {
      console.error(err);
      setMessage('An error occurred.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* overlay */}
      <div className="absolute inset-0 popup-overlay" aria-hidden="true" />

      <div
        ref={popupRef}
        className="relative w-full max-w-md mx-auto popup-surface p-6 sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-label="Get your free quote"
      >
        {/* close */}
        <button
          onClick={onClose}
          aria-label="Close popup"
          className="absolute right-4 top-4 popup-close"
        >
          <span style={{ fontSize: 18, lineHeight: 1 }}>&times;</span>
        </button>

        <HarborGroupUSALogo />

        <h2 className="text-center font-bold popup-title mb-2" style={{ color: 'var(--foreground)' }}>
          Get Your Free Quote Today
        </h2>
        <p className="text-center mb-6 text-sm" style={{ color: 'var(--muted)' }}>
          Find Your Perfect Fit: Discover Health Plans Tailored to Your Needs!
        </p>

        <div className="space-y-4 mb-6">
          {/* name */}
          <div className="relative">
            <svg className="popup-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="popup-input"
            />
          </div>

          {/* phone */}
          <div className="relative ">
            <svg className="popup-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              className="popup-input"
            />
          </div>

          {/* email */}
          <div className="relative">
            <svg className="popup-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="popup-input"
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={submitting}
          className="w-full popup-cta hover:bg-sky-500!"
        >
          {submitting ? 'Submitting…' : 'Get Your Quote'}
        </button>

        {message && (
          <p className="mt-4 text-center text-sm" style={{ color: message.startsWith('Thank') ? 'var(--success)' : 'var(--foreground)' }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default QuotePopup;
