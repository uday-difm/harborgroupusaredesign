"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

// Main Contact Page component
export default function ContactPage() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  // State for form data
  const [formData, setFormData] = useState({
    fullName: '',
    emailaddress: '',
    phonenumber: '',
  });

  // Field-specific error states
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  // General error and success messages
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [issubmiting, setIssubmiting] = useState(false);

  // Validation helpers
  const validateName = (fullName) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(fullName);
  };

  const validateEmail = (emailaddress) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(emailaddress);
  };

  const validatePhoneNumber = (phonenumber) => {
    const phoneRegex = /^\+?\(?\d{1,3}\)?[\s\-]?\(?\d{1,3}\)?[\s\-]?\d{1,4}[\s\-]?\d{1,4}[\s\-]?\d{1,4}$/;
    return phoneRegex.test(phonenumber);
  };

  // Handle name changes: strip invalid characters and show message when user tried to type numbers/symbols
  const handleNameChange = (e) => {
    const raw = e.target.value;
    // Allow only letters and spaces
    const sanitized = raw.replace(/[^A-Za-z\s]/g, '');
    if (sanitized !== raw) {
      setNameError('Only letters and spaces are allowed in the name.');
    } else if (sanitized.trim() === '') {
      setNameError('');
    } else if (!validateName(sanitized)) {
      setNameError('Only letters and spaces are allowed in the name.');
    } else {
      setNameError('');
    }

    setFormData((prev) => ({ ...prev, fullName: sanitized }));
  };

  // Handle email changes: live validation message
  const handleEmailChange = (e) => {
    const value = e.target.value;
    if (value === '') {
      setEmailError('');
    } else if (!validateEmail(value)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
    setFormData((prev) => ({ ...prev, emailaddress: value }));
  };

  // Handle phone changes: strip alphabetic characters and show message if alphabets were present
  const handlePhoneChange = (e) => {
    const raw = e.target.value;
    // Allow digits, +, spaces, parentheses and dashes
    const sanitized = raw.replace(/[^0-9+()\s-]/g, '');
    if (sanitized !== raw) {
      setPhoneError('Alphabets and special characters (except +, (), - and spaces) are not allowed in phone number.');
    } else if (sanitized.trim() === '') {
      setPhoneError('');
    } else if (!validatePhoneNumber(sanitized)) {
      setPhoneError('Please enter a valid phone number.');
    } else {
      setPhoneError('');
    }

    setFormData((prev) => ({ ...prev, phonenumber: sanitized }));
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setMessage('');

    // quick client-side required fields check
    if (!formData.fullName || !formData.emailaddress || !formData.phonenumber) {
      setError('All fields are required.');
      return;
    }

    // if any field-specific errors exist, block submit
    if (nameError || emailError || phoneError) {
      setError('Please fix the highlighted errors before submitting.');
      return;
    }

    // final validation before submit
    if (!validateName(formData.fullName)) {
      setNameError('Only letters and spaces are allowed in the name.');
      setError('Please fix the highlighted errors before submitting.');
      return;
    }

    if (!validateEmail(formData.emailaddress)) {
      setEmailError('Please enter a valid email address.');
      setError('Please fix the highlighted errors before submitting.');
      return;
    }

    if (!validatePhoneNumber(formData.phonenumber)) {
      setPhoneError('Please enter a valid phone number.');
      setError('Please fix the highlighted errors before submitting.');
      return;
    }

    setIssubmiting(true);

    // Adjust keys to match API expected keys
    const requestData = {
      fullname: formData.fullName,
      phonenumber: formData.phonenumber,
      emailaddress: formData.emailaddress,
    };

    try {
      if (!executeRecaptcha) {
        setError('reCAPTCHA not ready');
        setIssubmiting(false);
        return;
      }
      const token = await executeRecaptcha('form_submit');

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...requestData, recaptchaToken: token }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Your message has been sent successfully.');
        setFormData({ fullName: '', emailaddress: '', phonenumber: '' }); // Clear form after submission
      } else {
        setError(data.message || 'An error occurred. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIssubmiting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <>
      <title>Contact Harbor Group USA | Get in Touch Today</title>
      <meta name="keywords" content="Harbor Group USA, contact Harbor Group, customer support, health plan inquiries, Plans contact, get in touch, medical coverage help, Plans assistance" />
      <meta name="description" content="Reach out to The Harbor Group USA for all your health needs. Dedicated support to help you navigate your health care options." />
      <meta property="og:title" content="Contact Harbor Group USA | Get in Touch Today" />
      <meta property="og:description" content="Reach out to The Harbor Group USA for all your health needs. Dedicated support to help you navigate your health care options." />
      <link rel="canonical" href="https://harborgroupusa.com/contact/" />
      <meta property="og:url" content="https://harborgroupusa.com/contact/" />
      <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />

      <div className="section-light min-h-[90vh] flex items-center justify-center py-24 px-4 lg:px-8 relative overflow-hidden">
        {/* Decorative elements matching our new design system */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-navy-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

        <motion.div 
          className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Left Section: Get In Touch Text */}
          <motion.div className="lg:w-1/2 text-center lg:text-left" variants={itemVariants}>
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              Contact Us
            </p>
            <h1 className="text-display font-display font-bold text-navy-900 mb-6 tracking-tight leading-tight">
              Get In Touch
            </h1>
            <p className="text-xl text-navy-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Connect with us! Your questions matter. Fill out the form below; our dedicated support team is here and ready to assist you.
            </p>
            <div className="relative mt-10 max-w-lg mx-auto lg:mx-0 h-44 rounded-2xl overflow-hidden border border-navy-100 shadow-lg shadow-navy-900/10">
              <Image
                src="/images/broker-partnership.png"
                alt="Harbor Group USA advisor ready to help with coverage questions"
                fill
                sizes="(max-width: 1023px) 100vw, 42vw"
                className="object-cover object-right"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-900/35 via-navy-900/5 to-transparent pointer-events-none" />
              <p className="absolute bottom-4 left-5 text-sm font-semibold text-white">Personal guidance, without pressure.</p>
            </div>
          </motion.div>

          {/* Right Section: Contact Form */}
          <motion.div className="lg:w-1/2 w-full card-elevated p-8 md:p-10" variants={itemVariants}>
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-navy-700 mb-2">
                  Full Name<span className="text-error">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleNameChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 bg-white border border-navy-200 rounded-lg text-navy-900 placeholder-navy-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                />
                {nameError && <p className="text-error text-sm mt-1">{nameError}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-2">
                  E-Mail Address<span className="text-error">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="emailaddress"
                  value={formData.emailaddress}
                  onChange={handleEmailChange}
                  className="w-full px-4 py-3 bg-white border border-navy-200 rounded-lg text-navy-900 placeholder-navy-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
                {emailError && <p className="text-error text-sm mt-1">{emailError}</p>}
              </div>

              <div>
                <label htmlFor="phonenumber" className="block text-sm font-medium text-navy-700 mb-2">
                  Mobile Number<span className="text-error">*</span>
                </label>
                <input
                  type="tel"
                  id="phonenumber"
                  name="phonenumber"
                  value={formData.phonenumber}
                  onChange={handlePhoneChange}
                  className="w-full px-4 py-3 bg-white border border-navy-200 rounded-lg text-navy-900 placeholder-navy-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                  placeholder="+1 (123) 456-7890"
                />
                {phoneError && <p className="text-error text-sm mt-1">{phoneError}</p>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full btn-primary py-4 text-lg"
                  disabled={issubmiting}
                >
                  {issubmiting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>

            {/* Display error or success message */}
            {error && <div className="mt-4 text-error text-center">{error}</div>}
            {message && <div className="mt-4 text-success text-center">{message}</div>}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
