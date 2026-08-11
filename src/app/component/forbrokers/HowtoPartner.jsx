"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const HowtoPartner = () => {
  const plans = [
    "Medical Plans", "Dental Plans", "Vision Plans", "Term Life Plans",
    "Group Benefit", "Limited Med Plans", "Accident Plans", "Hospital Plans",
    "Critical Plans", "Lifestyle Plans", "Pet Plans", "Rx Plans"
  ];
  
  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    state: "",
    dob: "",
    plans: "",
    email: "",
    phone: "",
    terms: false,
  });

  const [issubmiting, setIssubmiting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Field-specific errors
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [plansError, setPlansError] = useState("");

  const nameInputRef = useRef(null);

  // Validation helpers
  const validateName = (name) => {
    return /^[A-Za-z\s]+$/.test(name);
  };

  const validateEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const validatePhone = (phone) => {
    // allow +, digits, spaces, parentheses and dashes
    return /^\+?[0-9()\s-]{7,25}$/.test(phone);
  };

  // Generic handler for non-special fields
  const handleGenericChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  // Name handler: strip numbers/symbols and provide live error
  const handleNameChange = (e) => {
    const raw = e.target.value;
    const sanitized = raw.replace(/[^A-Za-z\s]/g, '');
    if (sanitized !== raw) {
      setNameError('Only letters and spaces are allowed.');
    } else if (sanitized.trim() === '') {
      setNameError('');
    } else if (!validateName(sanitized)) {
      setNameError('Only letters and spaces are allowed.');
    } else {
      setNameError('');
    }
    setFormData((prev) => ({ ...prev, name: sanitized }));
  };

  const handleNamePaste = (e) => {
    e.preventDefault();
    const paste = (e.clipboardData || window.clipboardData).getData("text") || "";
    const sanitized = paste.replace(/[0-9]/g, "");

    if (paste !== sanitized) {
      setNameError('Only letters and spaces are allowed.');
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

  const handleNameKeyDown = (e) => {
    if (/^[0-9]$/.test(e.key)) {
      e.preventDefault();
      setNameError('Only letters and spaces are allowed.');
    }
  };

  // Email handler: live validation
  const handleEmailChange = (e) => {
    const value = e.target.value;
    if (value === '') {
      setEmailError('');
    } else if (!validateEmail(value)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
    setFormData((prev) => ({ ...prev, email: value }));
  };

  // Phone handler: strip letters and invalid chars
  const handlePhoneChange = (e) => {
    const raw = e.target.value;
    const sanitized = raw.replace(/[^0-9+()\s-]/g, '');
    if (sanitized !== raw) {
      setPhoneError('Alphabets are not allowed in phone number.');
    } else if (sanitized.trim() === '') {
      setPhoneError('');
    } else if (!validatePhone(sanitized)) {
      setPhoneError('Please enter a valid phone number (7-25 digits).');
    } else {
      setPhoneError('');
    }
    setFormData((prev) => ({ ...prev, phone: sanitized }));
  };

  // Handle plans select change with simple validation
  const handlePlansChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, plans: value }));
    if (!value) setPlansError('Please select a plan.');
    else setPlansError('');
  };

  // Handle checkbox separately to keep handlers simple
  const handleTermsChange = (e) => {
    const checked = e.target.checked;
    setFormData((prev) => ({ ...prev, terms: checked }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIssubmiting(true);
    setSuccessMessage("");
    setErrorMessage("");

    // Basic required checks
    if (!formData.name) setNameError('Name is required.');
    if (!formData.state) setErrorMessage('State is required.');
    if (!formData.dob) setErrorMessage('Date of birth is required.');
    if (!formData.plans) setPlansError('Please select a plan.');
    if (!formData.email) setEmailError('Email is required.');
    if (!formData.phone) setPhoneError('Phone is required.');
    if (!formData.terms) setErrorMessage('You must agree to the terms.');

    // If any field-specific errors exist, block submit
    if (nameError || emailError || phoneError || plansError) {
      setErrorMessage('Please fix the highlighted errors before submitting.');
      setIssubmiting(false);
      return;
    }

    // Final validation
    if (!validateName(formData.name)) {
      setNameError('Only letters and spaces are allowed.');
      setIssubmiting(false);
      return;
    }
    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address.');
      setIssubmiting(false);
      return;
    }
    if (!validatePhone(formData.phone)) {
      setPhoneError('Please enter a valid phone number (7-25 digits).');
      setIssubmiting(false);
      return;
    }
    if (!formData.plans) {
      setPlansError('Please select a plan.');
      setIssubmiting(false);
      return;
    }
    if (!formData.terms) {
      setErrorMessage('You must agree to the terms.');
      setIssubmiting(false);
      return;
    }

    try {
      const response = await fetch("/api/forbrokers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setSuccessMessage('Your application has been submitted successfully!');
        setFormData({ name: "", state: "", dob: "", plans: "", email: "", phone: "", terms: false });
      } else {
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setErrorMessage('An error occurred. Please try again later.');
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
    <section id="broker-form" className="section-tint py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Panel: Process Overview */}
          <motion.div 
            className="flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-900 mb-6 tracking-tight">
                How Partnership Works
              </h2>
              <p className="text-lg text-navy-600 mb-12 max-w-lg leading-relaxed">
                At Harbor Group USA, we believe in the power of collaboration. We've streamlined our onboarding process to get you contracted, trained, and selling fast.
              </p>
            </motion.div>

            <div className="space-y-10 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-navy-200 before:to-transparent">
              {/* Step 1 */}
              <motion.div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active" variants={itemVariants}>
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-accent text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <span className="font-bold">1</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-navy-100 bg-white shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-navy-900 text-lg">Reach Out & Apply</h3>
                  </div>
                  <p className="text-navy-600">Submit your application using the form. Tell us about your expertise and the plans you intend to focus on.</p>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active" variants={itemVariants}>
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-accent text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <span className="font-bold">2</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-navy-100 bg-white shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-navy-900 text-lg">Get Onboarded</h3>
                  </div>
                  <p className="text-navy-600">Our team will review your application and provide the necessary contracting, compliance, and training materials.</p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active" variants={itemVariants}>
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-accent text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <span className="font-bold">3</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-navy-100 bg-white shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-navy-900 text-lg">Grow Together</h3>
                  </div>
                  <p className="text-navy-600">Access our competitive rates, group buying power, and comprehensive broker support to scale your business.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Panel: The Form */}
          <motion.div 
            className="card-elevated bg-white p-8 md:p-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl font-display font-bold text-navy-900 mb-8 text-center">
              Partner Application
            </h2>
            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-1">Full Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  ref={nameInputRef}
                  value={formData.name}
                  onChange={handleNameChange}
                  onKeyDown={handleNameKeyDown}
                  onPaste={handleNamePaste}
                  className={`w-full px-4 py-3 bg-white border ${nameError ? "border-error" : "border-navy-200"} rounded-lg text-navy-900 placeholder-navy-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300`}
                  placeholder="Your Full Name"
                />
                {nameError && <p className="text-error text-sm mt-1">{nameError}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-navy-700 mb-1">State*</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleGenericChange}
                    className="w-full px-4 py-3 bg-white border border-navy-200 rounded-lg text-navy-900 placeholder-navy-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                    placeholder="Your State"
                  />
                </div>
                <div>
                  <label htmlFor="dob" className="block text-sm font-medium text-navy-700 mb-1">Date of Birth*</label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleGenericChange}
                    className="w-full px-4 py-3 bg-white border border-navy-200 rounded-lg text-navy-900 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="plans" className="block text-sm font-medium text-navy-700 mb-1">Primary Expertise*</label>
                <select
                  id="plans"
                  name="plans"
                  value={formData.plans}
                  onChange={handlePlansChange}
                  className={`w-full px-4 py-3 bg-white border ${plansError ? "border-error" : "border-navy-200"} rounded-lg text-navy-900 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 appearance-none`}
                >
                  <option value="">Select a plan focus...</option>
                  {plans.map((plan) => (
                    <option key={plan} value={plan}>{plan}</option>
                  ))}
                </select>
                {plansError && <p className="text-error text-sm mt-1">{plansError}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1">Email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleEmailChange}
                    className={`w-full px-4 py-3 bg-white border ${emailError ? "border-error" : "border-navy-200"} rounded-lg text-navy-900 placeholder-navy-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300`}
                    placeholder="you@example.com"
                  />
                  {emailError && <p className="text-error text-sm mt-1">{emailError}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy-700 mb-1">Phone*</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className={`w-full px-4 py-3 bg-white border ${phoneError ? "border-error" : "border-navy-200"} rounded-lg text-navy-900 placeholder-navy-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300`}
                    placeholder="Your Phone Number"
                  />
                  {phoneError && <p className="text-error text-sm mt-1">{phoneError}</p>}
                </div>
              </div>

              <div className="flex items-start pt-3">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleTermsChange}
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
                  className="btn-primary w-full py-4 text-lg"
                >
                  {issubmiting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
