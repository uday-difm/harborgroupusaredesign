"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMagnetic } from '@/common/motion/useMagnetic';
import { Send, ShieldCheck } from 'lucide-react';
import { HarborArc } from '@/common/HarborArc';

const sectionReveal = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function HealthPlanQuoteToday() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    terms: false,
  });

  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [issubmiting, setIssubmiting] = useState(false);

  const submitMagnetic = useMagnetic(0.3, 35);
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

    if (!formData.name || !formData.email || !formData.terms) {
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

    const requestData = {
      name: formData.name,
      email: formData.email,
      message: formData.message || '',
    };

    try {
      const response = await fetch('/api/home', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setFormData({ name: '', email: '', message: '', terms: false });
      } else {
        setError(data.message || 'An error occurred. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIssubmiting(false);
    }
  };

  return (
    <section className="bg-navy-800 py-24 font-body border-b border-navy-900/60 relative overflow-hidden" id="h-form">
      {/* Ambient gradient behind the form */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>
      <HarborArc position="bottomRight" className="text-white opacity-5" />

      <div className="w-full px-6 lg:px-12 xl:px-20 2xl:px-32 mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">Free Consultation</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-3 text-lg text-navy-200">
            Get Your Free Health Plan Quote Today!
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Left Column: Photo Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-navy-100/80">
              <Image
                width={600}
                height={600}
                src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Get-Your-Free-Health-Plan-Quote-Today.jpeg"
                alt="Contact Us"
                className="w-full h-[480px] lg:h-[580px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Simple Trust Overlay */}
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-navy-100 shadow-xl flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-accent flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-navy-900">Harbor Group USA Advisor Support</p>
                <p className="text-[11px] text-navy-500">Individual & Group Health Coverage</p>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form Card */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-navy-100/80 shadow-xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-2">
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  ref={nameInputRef}
                  className={`w-full p-4 bg-navy-50/50 rounded-xl border text-navy-900 font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all ${nameError ? "border-error" : "border-navy-100"
                    }`}
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  onKeyDown={handleNameKeyDown}
                  onPaste={handleNamePaste}
                  aria-describedby={nameError ? "name-error" : undefined}
                />
                {nameError && (
                  <p id="name-error" className="text-error text-xs mt-1.5 font-medium" role="alert">
                    {nameError}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  required
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className="w-full p-4 bg-navy-50/50 rounded-xl border border-navy-100 text-navy-900 font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-2">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="How can we help you find the right health plan?"
                  className="w-full p-4 bg-navy-50/50 rounded-xl border border-navy-100 text-navy-900 font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                ></textarea>
              </div>

              <div className="flex items-start">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  checked={formData.terms}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-accent border-navy-200 rounded mt-1 focus:ring-accent"
                />
                <label htmlFor="terms" className="ml-3 block text-xs text-navy-500 leading-relaxed">
                  By submitting, you allow our team to reach out to you via email or phone as submitted information by you and you also agree to our{' '}
                  <Link href="/sms-and-marketing-terms" className="font-semibold text-accent hover:underline">
                    SMS and Marketing terms and conditions.
                  </Link>
                </label>
              </div>

              <div>
                <motion.button
                  type="submit"
                  className="w-full btn-accent py-4 text-base font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  disabled={issubmiting}
                  ref={submitMagnetic.ref}
                  style={{ x: submitMagnetic.springX, y: submitMagnetic.springY }}
                  onMouseMove={submitMagnetic.handleMouseMove}
                  onMouseLeave={submitMagnetic.handleMouseLeave}
                >
                  {issubmiting ? 'Submitting...' : 'Submit'}
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </form>

            {error && <div className="mt-4 p-3 rounded-lg bg-error/10 text-error text-sm font-semibold">{error}</div>}
            {message && <div className="mt-4 p-3 rounded-lg bg-emerald-50 text-emerald-700 text-sm font-semibold">{message}</div>}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
