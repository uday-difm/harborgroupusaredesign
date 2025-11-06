"use client";
import React, { useState } from "react";
import Link from "next/link";

export const HowtoPartner = () => {
  const primaryBlue = '#1A2E5B'; 
  const darkAccentBlue = '#0D1B3A'; 
  const lightBlueBg = '#4CAFDE'; 
  const softGray = '#F0F2F5'; 

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

  // Handle form data change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIssubmiting(true);
    setSuccessMessage("");
    setErrorMessage("");
  // Log form data to the console
   // console.log("Form data submitted:", formData);
    // Basic validation
    if (!formData.name || !formData.state || !formData.dob || !formData.plans || !formData.email || !formData.phone || !formData.terms) {
      setErrorMessage("All fields are required, and you must agree to the terms.");
      setIssubmiting(false);
      return;
    }

    try {
      // Make API call
      const response = await fetch("/api/forbrokers", {
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
          state: "",
          dob: "",
          plans: "",
          email: "",
          phone: "",
          terms: false,
        });
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
      className="min-h-screen flex items-center justify-center font-inter p-4 sm:p-6 lg:p-8 relative overflow-hidden" id="broker-form"
      style={{ backgroundColor: softGray }}
    >
      <div
        className="absolute top-0 left-0 w-80 h-80 sm:w-96 sm:h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"
        style={{ backgroundColor: lightBlueBg, transform: 'translate(-70%, -70%)' }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 sm:w-1/2 sm:h-1/2 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"
        style={{ backgroundColor: darkAccentBlue, transform: 'translate(70%, 70%)' }}
      ></div>
      <div
        className="absolute top-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"
        style={{ backgroundColor: primaryBlue, transform: 'translate(30%, -30%)' }}
      ></div>
      <div
        className="relative z-10 w-full max-w-7xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row animate-fadeInUp"
      >
        <div
          className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center text-center lg:text-left relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${primaryBlue} 0%, ${darkAccentBlue} 100%)` }}
        >
          <svg
            className="absolute bottom-0 left-0 w-full h-auto z-0 opacity-20"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="#ffffff" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,128C672,128,768,192,864,202.7C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>

          <div className="relative z-10"> 
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-white animate-textFadeIn"
            >
              How to <span style={{ color: lightBlueBg }}>Partner</span> 
            </h2>
            <p
              className="text-lg sm:text-xl leading-relaxed mb-8 text-white text-opacity-80 animate-textFadeIn animation-delay-300 text-justify"
            >
              At Harbor Group USA, we believe in the power of collaboration, and we look forward to the possibility of working together.
            </p>

            <h3
              className="text-2xl sm:text-3xl font-bold mt-10 mb-4 text-white animate-textFadeIn animation-delay-600"
            >
              What do you consider your main expertise in?*
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-2 text-left max-w-md mx-auto lg:mx-0 animate-fade-in-up-stagger">
              {plans.map((plan, index) => (
                <div key={plan} className="flex items-center text-lg text-white text-opacity-90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ color: lightBlueBg }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {plan}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="lg:w-1/2 p-8 md:p-12 lg:p-16 bg-white flex flex-col justify-center animate-slideInRight"
        >
          <h2
            className="text-4xl sm:text-5xl font-extrabold mb-8 text-center animate-textFadeIn"
            style={{ color: primaryBlue }}
          >
            Join <span style={{ color: darkAccentBlue }}>Us</span>
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-2" style={{ color: primaryBlue }}>
                Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all duration-200 text-black"
                style={{ borderColor: lightBlueBg, focusRingColor: darkAccentBlue }}
                placeholder="Your Full Name"
                
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-lg font-medium mb-2" style={{ color: primaryBlue }}>
                State*
              </label>
              <input
                type="text"
                id="state"
                value={formData.state}
                onChange={handleChange}
                name="state"
                className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all duration-200"
                style={{ borderColor: lightBlueBg, focusRingColor: darkAccentBlue }}
                placeholder="Your State"
                
              />
            </div>
            <div>
              <label htmlFor="dob" className="block text-lg font-medium mb-2" style={{ color: primaryBlue }}>
                Date Of Birth*
              </label>
              <input
                type="date"
                id="dob"
                value={formData.dob}
                onChange={handleChange}
                name="dob"
                className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all duration-200"
                style={{ borderColor: lightBlueBg, focusRingColor: darkAccentBlue }}
               
              />
            </div>
            <div>
              <label htmlFor="plans" className="block text-lg font-medium mb-2" style={{ color: primaryBlue }}>
                Plans*
              </label>
              <select
                id="plans"
                 value={formData.plans}
                onChange={handleChange}
                name="plans"
                className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all duration-200 bg-white appearance-none"
                style={{ borderColor: lightBlueBg, focusRingColor: darkAccentBlue }}
                
              >
                <option value="">Select plan</option>
                {plans.map((plan) => (
                  <option key={plan} value={plan}>{plan}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2" style={{ color: primaryBlue }}>
                Email*
              </label>
              <input
                type="email"
                id="email"
                 value={formData.email}
                onChange={handleChange}
                name="email"
                className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all duration-200"
                style={{ borderColor: lightBlueBg, focusRingColor: darkAccentBlue }}
                placeholder="you@example.com"
           
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-lg font-medium mb-2" style={{ color: primaryBlue }}>
                Phone*
              </label>
              <input
                type="tel"
                id="phone"
                 value={formData.phone}
                onChange={handleChange}
                name="phone"
                className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all duration-200"
                style={{ borderColor: lightBlueBg, focusRingColor: darkAccentBlue }}
                placeholder="Your Phone Number"
               
              />
            </div>

            <div className="flex items-start mt-6">
              <input
                type="checkbox"
                id="terms"
                 checked={formData.terms}
                onChange={handleChange}
                name="terms"
                className="h-5 w-5 rounded focus:ring-2 mt-1"
                style={{ borderColor: lightBlueBg, accentColor: darkAccentBlue }}
              
              />
              <label htmlFor="terms" className="ml-3 text-sm text-gray-600">
                By submiting you allow our team to reach out to you via email or phone as submitted information by you and you also allow to agree to our{' '}
                <Link href="/sms-and-marketing-terms" className="font-medium underline" style={{ color: darkAccentBlue }}>
                  SMS and Marketing terms and conditions.
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 text-lg font-bold rounded-full text-white shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl animate-buttonBounce"
              style={{
                backgroundColor: darkAccentBlue,
                borderColor: darkAccentBlue,
              }}
            disabled={issubmiting}
                >
                  {issubmiting ? 'submiting...' : 'Submit'}
                </button>
          </form>
           {/* Show success or error messages */}
            {successMessage && (
              <div className="mt-4 text-green-500">{successMessage}</div>
            )}
            {errorMessage && (
              <div className="mt-4 text-red-500">{errorMessage}</div>
            )}
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

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes buttonBounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        /* Staggered fade in for expertise list */
        .animate-fade-in-up-stagger > div {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-fade-in-up-stagger > div:nth-child(1) { animation-delay: 0.7s; }
        .animate-fade-in-up-stagger > div:nth-child(2) { animation-delay: 0.8s; }
        .animate-fade-in-up-stagger > div:nth-child(3) { animation-delay: 0.9s; }
        .animate-fade-in-up-stagger > div:nth-child(4) { animation-delay: 1.0s; }
        .animate-fade-in-up-stagger > div:nth-child(5) { animation-delay: 1.1s; }
        .animate-fade-in-up-stagger > div:nth-child(6) { animation-delay: 1.2s; }
        .animate-fade-in-up-stagger > div:nth-child(7) { animation-delay: 1.3s; }
        .animate-fade-in-up-stagger > div:nth-child(8) { animation-delay: 1.4s; }
        .animate-fade-in-up-stagger > div:nth-child(9) { animation-delay: 1.5s; }
        .animate-fade-in-up-stagger > div:nth-child(10) { animation-delay: 1.6s; }
        .animate-fade-in-up-stagger > div:nth-child(11) { animation-delay: 1.7s; }
        .animate-fade-in-up-stagger > div:nth-child(12) { animation-delay: 1.8s; }
      `}</style>
    </div>
  );
};


