"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

export const RequestCallback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    terms: false,
  });

  const [showMessage, setShowMessage] = useState(false);
  const [messageContent, setMessageContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [nameError, setNameError] = useState("");

  const nameInputRef = useRef(null);
  const NAME_NUMBER_ERROR = "Name must not contain numbers.";

  const showMessageBox = (message) => {
    setMessageContent(message);
    setShowMessage(true);
  };

  const closeMessageBox = () => {
    setShowMessage(false);
    setMessageContent("");
  };

  // unified change handler with name sanitization
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "name") {
      // remove digits (safety net for typed/pasted/programmatic changes)
      const sanitized = value.replace(/[0-9]/g, "");
      setFormData((prev) => ({ ...prev, name: sanitized }));

      // if user tried to input numbers (e.g. IME/paste), show name error
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

    // restore caret position after paste
    window.requestAnimationFrame(() => {
      const pos = start + sanitized.length;
      input.selectionStart = input.selectionEnd = pos;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setNameError("");

    // Validate form data
    if (!formData.name || !formData.email || !formData.message || !formData.terms) {
      setError("All fields are required, and you must agree to the terms.");
      setIsSubmitting(false);
      return;
    }

    // ensure name has no digits
    if (/[0-9]/.test(formData.name)) {
      setNameError(NAME_NUMBER_ERROR);
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    try {
      // API Call to submit the form data
      const response = await fetch("/api/lifestyleplan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        showMessageBox("Thank you for your submission! We will get back to you soon.");
        setFormData({
          name: "",
          email: "",
          message: "",
          terms: false,
        });
        setNameError("");
      } else {
        setError(data.error || "Something went wrong, please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen bg-navy-50 font-inter flex flex-col items-center justify-center p-4 sm:p-8`} id="lifestyle-plan-form">
      <div className="max-w-7xl w-full overflow-hidden p-6 sm:p-10 text-center">
        {/* Header Section */}
        <h1 className={`text-4xl sm:text-5xl font-extrabold text-navy-800 mb-4 leading-tight`}>Request a Call Back?</h1>
        <div className="md:flex md:space-x-8 items-stretch">
          <div className="md:w-1/2 mb-8 md:mb-0 relative min-h-[300px] rounded-lg overflow-hidden shadow-md">
            <Image
              src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Lifestyle-plan-hero-section.jpeg"
              alt="Doctor using a tablet"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          {/* Right Section: Form */}
          <div className="md:w-1/2 text-left">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className={`block text-sm font-medium text-gray-800 mb-1`}>
                  Your name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  ref={nameInputRef}
                  value={formData.name}
                  onChange={handleChange}
                  onKeyDown={handleNameKeyDown}
                  onPaste={handleNamePaste}
                  aria-required="true"
                  aria-describedby={nameError ? "name-error" : undefined}
                  className={`w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200 ${
                    nameError ? "border-error border" : "border-gray-300 border"
                  }`}
                />
                {/* name-specific error directly below the input */}
                {nameError && (
                  <p id="name-error" className="text-sm text-error mt-1" role="alert">
                    {nameError}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className={`block text-sm font-medium text-gray-800 mb-1`}>
                  Your email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-md border-gray-300 border focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200`}
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium text-gray-800 mb-1`}>
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-4 py-2 rounded-md border-gray-300 border focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200`}
                ></textarea>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="mt-1 mr-2 rounded text-accent focus:ring-teal-400"
                />
                <label htmlFor="terms" className={`text-sm text-navy-500`}>
                  By submiting you allow our team to reach out to you via email or phone as submitted information by you and you also agree to our{" "}
                  <a href="/sms-and-marketing-terms" className={`font-semibold text-sky-600 hover:underline`}>
                    SMS and Marketing terms and conditions
                  </a>
                  .
                </label>
              </div>

              <button
                type="submit"
                className={`w-full py-3 px-6 rounded-md font-semibold text-lg bg-sky-400 text-white hover:bg-accent-dark transition duration-300 ease-in-out shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "SUBMIT"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Custom Message Box */}
      {showMessage && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg card-elevated text-center max-w-sm mx-auto">
            <p className="text-lg font-semibold mb-4 text-gray-800">{messageContent}</p>
            <button
              onClick={closeMessageBox}
              className="bg-sky-400 text-white py-2 px-4 rounded-md hover:bg-accent-dark transition duration-300 ease-in-out"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Display form-wide error message at bottom (kept for general validation) */}
      {error && <div className="mt-4 text-error">{error}</div>}
    </div>
  );
};
