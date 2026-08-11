"use client";

import Link from "next/link";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, HeartHandshake } from "lucide-react";
import { HarborArc } from "@/comman/HarborArc";

export const GetAHealthPlanConsultant = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    terms: false,
  });

  const [issubmiting, setIssubmiting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const nameInputRef = useRef(null);
  const NAME_NUMBER_ERROR = "Name must not contain numbers.";

  const handleChange = (e) => {
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

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIssubmiting(true);
    setSuccessMessage("");
    setErrorMessage("");
    setNameError("");

    if (!formData.name || !formData.email || !formData.message || !formData.terms) {
      setErrorMessage("All fields are required and you must agree to the terms.");
      setIssubmiting(false);
      return;
    }

    if (/[0-9]/.test(formData.name)) {
      setNameError(NAME_NUMBER_ERROR);
      setIssubmiting(false);
      return;
    }

    try {
      const response = await fetch("/api/forindividuals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("Your request has been submitted successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
          terms: false,
        });
        setNameError("");
      } else {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
    } finally {
      setIssubmiting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="individual-form" className="section-dark relative overflow-hidden py-24">
      <HarborArc position="bottomRight" className="text-navy-700 opacity-20 scale-150" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Panel */}
          <motion.div 
            className="flex flex-col text-left"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight tracking-tight"
            >
              Get a Health Plan <span className="text-accent">Consultant</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-navy-200 mb-12 max-w-lg leading-relaxed"
            >
              Our licensed experts are here to help you navigate your options and find the perfect coverage for your needs and budget.
            </motion.p>

            <div className="space-y-8">
              <motion.div variants={itemVariants} className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center text-accent shrink-0 border border-navy-700">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-white font-bold text-xl mb-1">Expert Guidance</h3>
                  <p className="text-navy-300">Talk to a real person who understands the complex healthcare landscape.</p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center text-accent shrink-0 border border-navy-700">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-white font-bold text-xl mb-1">Personalized Match</h3>
                  <p className="text-navy-300">We don't do one-size-fits-all. Get recommendations tailored specifically to your family's needs.</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center text-accent shrink-0 border border-navy-700">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-white font-bold text-xl mb-1">No Obligation</h3>
                  <p className="text-navy-300">Our consultations are entirely free and carry zero pressure to purchase.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Panel: The Form */}
          <motion.div 
            className="card-elevated bg-white p-8 md:p-12 relative z-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-1">Full Name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    ref={nameInputRef}
                    value={formData.name}
                    onChange={handleChange}
                    onKeyDown={handleNameKeyDown}
                    onPaste={handleNamePaste}
                    className={`w-full px-4 py-3 bg-white border ${nameError ? "border-error" : "border-navy-200"} rounded-lg text-navy-900 placeholder-navy-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300`}
                    placeholder="Your Full Name"
                    aria-describedby={nameError ? "name-error" : undefined}
                  />
                  {nameError && <p id="name-error" className="text-sm text-error mt-1" role="alert">{nameError}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1">Email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-navy-200 rounded-lg text-navy-900 placeholder-navy-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1">Your Message*</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-navy-200 rounded-lg text-navy-900 placeholder-navy-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-y"
                  placeholder="Tell us a bit about your healthcare needs..."
                ></textarea>
              </div>

              <div className="flex items-start pt-3">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="mt-1 h-5 w-5 rounded border-navy-300 text-accent focus:ring-accent transition duration-150 ease-in-out"
                />
                <label htmlFor="terms" className="ml-3 text-sm text-navy-600 leading-relaxed">
                  By submitting you allow our team to reach out to you via email or phone with the submitted information and you agree to our <Link href="/sms-and-marketing-terms" className="text-accent hover:underline font-medium">SMS and Marketing terms and conditions</Link>.
                </label>
              </div>

              {errorMessage && <div className="text-error font-medium">{errorMessage}</div>}
              {successMessage && <div className="text-success font-medium">{successMessage}</div>}

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={issubmiting}
                  className="btn-accent w-full py-4 text-lg"
                >
                  {issubmiting ? "Submitting..." : "Request Consultation"}
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
