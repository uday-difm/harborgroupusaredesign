"use client";

import Link from "next/link";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Careers() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    terms: false,
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // name-specific error + ref
  const [nameError, setNameError] = useState("");
  const nameInputRef = useRef(null);
  const NAME_NUMBER_ERROR = "Name must not contain numbers.";

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    // Special handling for name: sanitize digits and show name-specific error only
    if (name === "name") {
      const sanitized = value.replace(/[0-9]/g, "");
      setForm((prev) => ({ ...prev, name: sanitized }));
      if (sanitized !== value) {
        setNameError(NAME_NUMBER_ERROR);
      } else {
        setNameError("");
      }
      return;
    }

    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  // Prevent numeric key presses in name input
  function handleNameKeyDown(e) {
    if (/^[0-9]$/.test(e.key)) {
      e.preventDefault();
      setNameError(NAME_NUMBER_ERROR);
    }
  }

  // Handle paste into name: strip digits, insert sanitized text at caret
  function handleNamePaste(e) {
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
      setForm((prev) => ({ ...prev, name: (prev.name || "") + sanitized }));
      return;
    }

    const start = input.selectionStart ?? 0;
    const end = input.selectionEnd ?? 0;
    const newVal = input.value.slice(0, start) + sanitized + input.value.slice(end);

    setForm((prev) => ({ ...prev, name: newVal }));

    // restore caret after paste
    window.requestAnimationFrame(() => {
      const pos = start + sanitized.length;
      input.selectionStart = input.selectionEnd = pos;
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setResult(null);

    // client-side checks
    if (!form.name || !form.email || !form.subject || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!form.terms) {
      setError("You must accept the terms before submiting.");
      return;
    }

    // ensure name contains no digits
    if (/[0-9]/.test(form.name)) {
      setNameError(NAME_NUMBER_ERROR);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/career", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed");

      setResult("Form submitted successfully!");
      setForm({ name: "", email: "", subject: "", message: "", terms: false });
      setNameError("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

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
      <title>Careers at Harbor Group USA | Join Our Team</title>
      <meta name="keywords" content="Harbor Group USA careers, job openings, healthcare jobs, Plans careers, work at Harbor Group, employment opportunities, join our team, health industry jobs" />
      <meta name="description" content="Explore rewarding careers at Harbor Group USA. Join us to deliver top health coverage solutions and make a real impact on lives." />
      <meta property="og:title" content="Careers at Harbor Group USA | Join Our Team" />
      <meta property="og:description" content="Explore rewarding careers at Harbor Group USA. Join us to deliver top health coverage solutions and make a real impact on lives." />
      <link rel="canonical" href="https://harborgroupusa.com/careers/" />
      <meta property="og:url" content="https://harborgroupusa.com/careers/" />
      <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />

      <div className="relative min-h-[90vh] flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 img-duotone pointer-events-none">
          <img
            src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/careers-page-scaled.jpg"
            alt="Careers at Harbor Group USA"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-navy-900/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900/60 to-transparent"></div>
        </div>

        <motion.div
          className="relative max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 z-10 pt-20"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Left Section - Content */}
          <motion.div className="lg:w-1/2" variants={itemVariants}>
            <p className="text-sm sm:text-base font-semibold text-accent uppercase tracking-wider mb-4">
              Careers
            </p>
            <h1 className="text-display font-display font-bold text-white mb-6 leading-tight tracking-tight">
              Welcome to Harbor Group USA <span className="text-accent">Careers</span>
            </h1>
            <p className="text-lg text-navy-100 leading-relaxed text-justify max-w-2xl">
              At Harbor Group USA, we believe in fostering a workplace where talent thrives, innovation flourishes, and employees are empowered to make a real impact in the world of health plans. As a leading provider of Health Plans in the United States, we are dedicated to ensuring the well-being of individuals and families by offering comprehensive and affordable healthcare coverage. Explore careers with us and join a team committed to transforming healthcare.
            </p>
          </motion.div>

          {/* Right Section - Contact Form */}
          <motion.div className="lg:w-1/2 w-full card-elevated p-8 md:p-10" variants={itemVariants}>
            <h3 className="text-h3 font-bold text-navy-900 mb-6 text-center">Get in touch with us for careers</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="sr-only">Your name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  ref={nameInputRef}
                  value={form.name}
                  onChange={handleChange}
                  onKeyDown={handleNameKeyDown}
                  onPaste={handleNamePaste}
                  className={`w-full px-4 py-3 bg-white border ${nameError ? "border-error" : "border-navy-200"} rounded-lg text-navy-900 placeholder-navy-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300`}
                  placeholder="Your name*"
                  required
                  aria-describedby={nameError ? "name-error" : undefined}
                />
                {nameError && <p id="name-error" className="text-error mt-1 text-sm" role="alert">{nameError}</p>}
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Your email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-navy-200 rounded-lg text-navy-900 placeholder-navy-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                  placeholder="Your email*"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-navy-200 rounded-lg text-navy-900 placeholder-navy-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                  placeholder="Subject*"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Your message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-white border border-navy-200 rounded-lg text-navy-900 placeholder-navy-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="flex items-start pt-2">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={form.terms}
                  onChange={handleChange}
                  className="mt-1 h-5 w-5 rounded border-navy-300 text-accent focus:ring-accent"
                  required
                />
                <label htmlFor="terms" className="ml-3 text-sm text-navy-600 leading-relaxed">
                  By submitting you allow our team to reach out to you via email or phone as submitted information by you and you also allow to agree to our <Link href="/sms-and-marketing-terms" className="text-accent hover:underline font-medium">SMS and Marketing terms and conditions</Link>.
                </label>
              </div>
              {error && <div className="text-error mb-2">{error}</div>}
              {result && <div className="text-success mb-2">{result}</div>}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary py-4 text-lg"
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
