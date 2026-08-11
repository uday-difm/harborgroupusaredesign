"use client";

import Link from "next/link";
import React, { useState, useRef } from "react";

export const GetAHealthPlanConsultant = () => {
  const primaryBlue = "#4CAFDE";
  const darkAccentBlue = "#0D1B3A";
  const lightBlueBg = "#1A2E5B";
  const softGray = "#F0F2F5";

  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    terms: false,
  });

  const [issubmiting, setIssubmiting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // name-specific error + ref
  const [nameError, setNameError] = useState("");
  const nameInputRef = useRef(null);
  const NAME_NUMBER_ERROR = "Name must not contain numbers.";

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Special case: name sanitization (safety net)
    if (name === "name") {
      const sanitized = value.replace(/[0-9]/g, "");
      setFormData((prev) => ({ ...prev, name: sanitized }));

      // show name-specific error only if value contained digits
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

  // Prevent numeric key presses in name input
  const handleNameKeyDown = (e) => {
    if (/^[0-9]$/.test(e.key)) {
      e.preventDefault();
      setNameError(NAME_NUMBER_ERROR);
    }
  };

  // Handle paste into name: strip digits, insert sanitized text at caret
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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIssubmiting(true);
    setSuccessMessage("");
    setErrorMessage("");
    setNameError("");

    // Validation
    if (!formData.name || !formData.email || !formData.message || !formData.terms) {
      setErrorMessage("All fields are required and you must agree to the terms.");
      setIssubmiting(false);
      return;
    }

    // ensure name has no digits
    if (/[0-9]/.test(formData.name)) {
      setNameError(NAME_NUMBER_ERROR);
      setIssubmiting(false);
      return;
    }

    try {
      // Sending the form data to the API
      const response = await fetch("/api/forindividuals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("Your application has been submitted successfully!");
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

  return (
    <div
      id="individual-form"
      className="min-h-screen flex items-center justify-center font-inter p-4 sm:p-6 lg:p-8 relative overflow-hidden"
      style={{ backgroundColor: softGray }}
    >
      
      
      
      <div className="relative z-10 w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-fadeInUp">
        <div
          className="relative p-8 md:p-10 text-center text-white overflow-hidden rounded-t-3xl"
          style={{ background: `linear-gradient(to right, ${primaryBlue}, ${darkAccentBlue})` }}
        >
          <svg
            className="absolute bottom-0 left-0 w-full h-auto z-0 opacity-20"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,128C672,128,768,192,864,202.7C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>

          <div className="relative z-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 leading-tight animate-textFadeIn">
              Get A Health Plan <span style={{ color: lightBlueBg }}>Consultant</span>
            </h1>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-8 md:p-10 bg-white">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium mb-2" style={{ color: primaryBlue }}>
                  Name*
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
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all duration-200 ${
                    nameError ? "border-error" : ""
                  }`}
                  style={{ borderColor: nameError ? undefined : lightBlueBg }}
                  placeholder="Your Full Name"
                  aria-describedby={nameError ? "name-error" : undefined}
                />
                {nameError && (
                  <p id="name-error" className="text-sm text-error mt-1" role="alert">
                    {nameError}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium mb-2" style={{ color: primaryBlue }}>
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all duration-200"
                  style={{ borderColor: lightBlueBg }}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium mb-2" style={{ color: primaryBlue }}>
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all duration-200 resize-y"
                style={{ borderColor: lightBlueBg }}
                placeholder="Tell us about your needs..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="flex items-start mt-6">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="h-5 w-5 rounded focus:ring-2 mt-1"
                style={{ borderColor: lightBlueBg, accentColor: darkAccentBlue }}
                checked={formData.terms}
                onChange={handleChange}
              />
              <label htmlFor="terms" className="ml-3 text-sm text-navy-500">
                By submiting you allow our team to reach out to you via email or phone as submitted information by you and you also allow to agree to our{" "}
                <Link href="/sms-and-marketing-terms" className="font-medium underline" style={{ color: darkAccentBlue }}>
                  SMS and Marketing terms and conditions.
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-accent hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
              disabled={issubmiting}
            >
              {issubmiting ? "submiting..." : "Submit"}
            </button>
          </form>

          {/* Show success or error messages */}
          {successMessage && <div className="mt-4 text-accent">{successMessage}</div>}
          {errorMessage && <div className="mt-4 text-error">{errorMessage}</div>}
        </div>
      </div>

      {/* Tailwind CSS Custom Animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(-70%, -70%) scale(1);
          }
          33% {
            transform: translate(-50%, -80%) scale(1.1);
          }
          66% {
            transform: translate(-80%, -60%) scale(0.9);
          }
          100% {
            transform: translate(-70%, -70%) scale(1);
          }
        }

        @keyframes blob2 {
          0% {
            transform: translate(70%, 70%) scale(1);
          }
          33% {
            transform: translate(80%, 50%) scale(0.9);
          }
          66% {
            transform: translate(60%, 80%) scale(1.1);
          }
          100% {
            transform: translate(70%, 70%) scale(1);
          }
        }

        @keyframes blob3 {
          0% {
            transform: translate(30%, -30%) scale(1);
          }
          33% {
            transform: translate(40%, -20%) scale(1.05);
          }
          66% {
            transform: translate(20%, -40%) scale(0.95);
          }
          100% {
            transform: translate(30%, -30%) scale(1);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes textFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes buttonBounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        .animate-blob {
          animation: blob 15s infinite alternate;
        }
        .animate-blob.animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-blob.animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-textFadeIn {
          animation: textFadeIn 0.6s ease-out forwards;
        }
        .animate-textFadeIn.animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animate-buttonBounce {
          animation: buttonBounce 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};
