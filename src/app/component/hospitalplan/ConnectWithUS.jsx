"use client";
import React, { useState } from 'react'
import Image from 'next/image';

export const ConnectWithUS = ()=>{
   // State for form data and loading/error messages
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    terms: false,
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccessMessage("");
    setIsSubmitting(true);

    // Validation
    if (!formData.name || !formData.email || !formData.message || !formData.terms) {
      setError("All fields are required, and you must agree to the terms.");
      setIsSubmitting(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    try {
      // API Call
      const response = await fetch("/api/hospitalplan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message); // Success message from the API
        setFormData({ name: "", email: "", message: "", terms: false }); // Clear the form
      } else {
        setError(data.error || "An error occurred. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
       <section className="relative w-full bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" id="hospital-plan-form">
        {/* Subtle animated background pattern (waves) */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <filter id="waveBlurSmall">
                <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" result="blur" />
              </filter>
            </defs>
            <g fill="none" strokeWidth="0.2" strokeOpacity="0.5" filter="url(#waveBlurSmall)">
              <path stroke="#60A5FA" d="M0,50 Q25,20 50,50 T100,50" className="animate-waveSmall1" />
              <path stroke="#7DD3FC" d="M0,60 Q20,30 40,60 T60,30 T80,60 T100,60" className="animate-waveSmall2" />
            </g>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch relative z-10"> {/* Changed items-center to items-stretch */}
          {/* Left Column: Image */}
          <div className="flex justify-center lg:justify-start animate-slideInLeft h-full"> {/* Added h-full */}
            <Image 
            width={600}
            height={400}
              className="w-full h-full object-cover rounded-xl shadow-2xl  transform transition-transform duration-700 ease-in-out hover:scale-105" /* Added h-full and object-cover */
              src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/request-a-call-back.jpeg" // image_a9727e.png (Connect With Us Image)
              alt="People connecting"
             
            />
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg animate-slideInRight flex flex-col h-full"> 
            <h3 className="text-2xl font-bold text-indigo-900 mb-4 text-center">Connect With US</h3>
            <form className="space-y-6 flex-grow flex flex-col" onSubmit={handleSubmit}> 
              <div className="flex-grow"> 
                <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Your name*</label>
                <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="John Doe"  value={formData.name}
                  onChange={handleInputChange} />
              </div>
              <div className="flex-grow"> 
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Your email*</label>
                <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="you@example.com" value={formData.email}
                  onChange={handleInputChange} />
              </div>
              <div className="flex-grow">
                <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">Your message</label>
                <textarea id="message" name="message" rows="6" className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 resize-y h-full" placeholder="How can we help you?" value={formData.message}
                  onChange={handleInputChange}></textarea> 
              </div>
              <div className="flex items-start mt-3">
                <input type="checkbox" id="terms" name="terms" className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 mt-1"  checked={formData.terms}
                  onChange={handleInputChange} />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                  By Submitting you allow our team to reach out to you via email or phone as submitted information by you and you also allow to agree to our <a href="/sms-and-marketing-terms" className="text-blue-600 hover:underline">SMS and Marketing terms and conditions</a>.
                </label>
              </div>
              <button type="submit" className="w-full bg-sky-400 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 animate-bounceIn"  disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'SUBMIT'}
              </button>
            </form>
                {/* Display error or success message */}
            {error && <div className="mt-4 text-red-500">{error}</div>}
            {successMessage && <div className="mt-4 text-green-500">{successMessage}</div>}
          </div>
        </div>
      </section>
    </>
  )
}
