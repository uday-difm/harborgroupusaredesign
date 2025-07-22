"use client";
import React, { useState } from 'react';
import Image from 'next/image';

export const RequestCallback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    agreeTerms: false,
  });

  const [showMessage, setShowMessage] = useState(false);
  const [messageContent, setMessageContent] = useState('');

  const showMessageBox = (message) => {
    setMessageContent(message);
    setShowMessage(true);
  };

  const closeMessageBox = () => {
    setShowMessage(false);
    setMessageContent('');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', formData);
    showMessageBox('Thank you for your submission! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      message: '',
      agreeTerms: false,
    });
  };

  return (
    <div className={`min-h-screen bg-gray-50 font-inter flex flex-col items-center justify-center p-4 sm:p-8`} id="request-callback-form">
      <div className="max-w-7xl w-full  overflow-hidden p-6 sm:p-10 text-center">
        {/* Header Section */}
        <h1 className={`text-4xl sm:text-5xl font-extrabold text-indigo-900 mb-4 leading-tight`}>
          Request a Call Back?
        </h1>
        {/* Removed dotted line separator as it was not present in your provided code */}

        {/* Content Section: Image and Form - Added items-stretch for equal height */}
        <div className="md:flex md:space-x-8 items-stretch">
          {/* Left Section: Image - Added relative and min-h for Image fill layout */}
          <div className="md:w-1/2 mb-8 md:mb-0 relative min-h-[300px] rounded-lg overflow-hidden shadow-md">
            <Image
              src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Lifestyle-plan-hero-section.jpeg" // Path to your main image
              alt="Doctor using a tablet"
              layout="fill" // Use layout="fill" to make image fill its parent
              objectFit="cover" // Cover the area while maintaining aspect ratio
              className="rounded-lg" // Apply rounded corners to the image itself
            />
          </div>

          {/* Right Section: Form */}
          <div className="md:w-1/2 text-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium text-gray-800 mb-1`}>
                  Your name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-md border-gray-300 border focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200`}
                />
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
                  required
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
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                  className="mt-1 mr-2 rounded text-teal-500 focus:ring-teal-400"
                />
                <label htmlFor="agreeTerms" className={`text-sm text-gray-600`}>
                  By Submitting you allow our team to reach out to you via email or phone as submitted information by you and you also agree to our {" "}
                  <a href="#" className={`font-semibold text-sky-600 hover:underline`}>SMS</a> and {" "}
                  <a href="#" className={`font-semibold text-sky-600 hover:underline`}>Marketing terms and conditions</a>.
                </label>
              </div>

              <button
                type="submit"
                className={`w-full py-3 px-6 rounded-md font-semibold text-lg bg-sky-400 text-white hover:bg-sky-600 transition duration-300 ease-in-out shadow-md hover:shadow-lg`}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Custom Message Box */}
      {showMessage && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl text-center max-w-sm mx-auto">
            <p className="text-lg font-semibold mb-4 text-gray-800">{messageContent}</p>
            <button
              onClick={closeMessageBox}
              className="bg-sky-400 text-white py-2 px-4 rounded-md hover:bg-sky-600 transition duration-300 ease-in-out"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
