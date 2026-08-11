"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMagnetic } from "@/comman/motion/useMagnetic";

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
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState(''); // <-- new state

  const submitMagnetic = useMagnetic(0.3, 35);

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

  // Helpers that sanitize input as user types / pastes
  const handleNameChange = (e) => {
    // allow letters, spaces, apostrophe and hyphen only
    const raw = e.target.value;
    const filtered = raw.replace(/[^A-Za-z\s'-]/g, '');

    // if filtering removed characters (digits or other invalid chars), show an error
    if (filtered.length !== raw.length) {
      setNameError('Numbers and special characters are not allowed in the name.');
    } else {
      setNameError('');
    }

    setName(filtered);
  };

  const handleNamePaste = (e) => {
    const paste = (e.clipboardData || window.clipboardData).getData('text');
    const filtered = paste.replace(/[^A-Za-z\s'-]/g, '');
    e.preventDefault();

    // if paste contained disallowed characters, show error
    if (filtered.length !== paste.length) {
      setNameError('Pasted content contains numbers or special characters and was removed.');
    } else {
      setNameError('');
    }
    const input = e.target;
    const start = input.selectionStart;
    const end = input.selectionEnd;
    const newValue = input.value.slice(0, start) + filtered + input.value.slice(end);
    setName(newValue);

    requestAnimationFrame(() => {
      input.selectionStart = input.selectionEnd = start + filtered.length;
    });
  };

const handlePhoneChange = (e) => {
  const raw = e.target.value;
  const filtered = raw.replace(/[^0-9+-]/g, '');
  if (filtered.length !== raw.length) {
    setPhoneError('Only digits, + and - are allowed.');
  } else {
    setPhoneError('');
  }

  setPhone(filtered);
};

const handlePhonePaste = (e) => {
  const paste = (e.clipboardData || window.clipboardData).getData('text');
  const filtered = paste.replace(/[^0-9+-]/g, '');
  e.preventDefault();

  if (paste.length !== filtered.length) {
    setPhoneError('Pasted content contained invalid characters and was cleaned.');
  } else {
    setPhoneError('');
  }

  const input = e.target;
  const start = input.selectionStart;
  const end = input.selectionEnd;
  const newValue = input.value.slice(0, start) + filtered + input.value.slice(end);

  setPhone(newValue);

  requestAnimationFrame(() => {
    input.selectionStart = input.selectionEnd = start + filtered.length;
  });
};

  const handleSubmit = async () => {
    setSubmitting(true);
    setMessage('');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!name.trim()) { setMessage('Please enter your name.'); setSubmitting(false); return; }
    // extra safety: reject if any digits still present
    if (/\d/.test(name)) { setMessage('Name must not contain numbers.'); setSubmitting(false); return; }
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
        setNameError(''); setPhoneError('');
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

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 400, 
        damping: 35, 
        mass: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      y: 10,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* overlay */}
      <motion.div
        className="absolute inset-0 popup-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        aria-hidden="true"
      />

      <motion.div
        ref={popupRef}
        className="relative w-full max-w-md mx-auto popup-surface p-6 sm:p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
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

        <motion.div variants={itemVariants}>
          <HarborGroupUSALogo />
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-center font-bold popup-title mb-2" style={{ color: 'var(--foreground)' }}>
            Get Your Free Quote Today
          </h2>
          <p className="text-center mb-6 text-sm" style={{ color: 'var(--muted)' }}>
            Find Your Perfect Fit: Discover Health Plans Tailored to Your Needs!
          </p>
        </motion.div>

        <motion.div className="space-y-4 mb-6" variants={itemVariants}>
          {/* name */}
          <div className="relative">
            <svg className="popup-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              onPaste={handleNamePaste}
              placeholder="Name"
              className="popup-input"
              aria-label="Full name (letters only)"
              inputMode="text"
            />
            {nameError && (
              <p className="text-sm mt-1" style={{ color: 'var(--error, #dc2626)' }} aria-live="polite">{nameError}</p>
            )}
          </div>

          {/* phone */}
          <div className="relative ">
            <svg className="popup-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              onPaste={handlePhonePaste}
              placeholder="Phone Number"
              className="popup-input"
              aria-label="Phone number (10 digits)"
              inputMode="numeric"
            />
            {phoneError && (
              <p className="text-sm mt-1" style={{ color: 'var(--error, #dc2626)' }} aria-live="polite">
                {phoneError}
              </p>
            )}
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
        </motion.div>

        <motion.button
          onClick={handleSubmit}
          disabled={submitting}
          className="w-full popup-cta inline-block"
          ref={submitMagnetic.ref}
          style={{ x: submitMagnetic.springX, y: submitMagnetic.springY }}
          onMouseMove={submitMagnetic.handleMouseMove}
          onMouseLeave={submitMagnetic.handleMouseLeave}
          variants={itemVariants}
        >
          {submitting ? 'submitting…' : 'Get Your Quote'}
        </motion.button>

        {message && (
          <motion.p variants={itemVariants} className="mt-4 text-center text-sm" style={{ color: message.startsWith('Thank') ? 'var(--success)' : 'var(--foreground)' }}>
            {message}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default QuotePopup;
