"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// Main App component
export const HealthCoverage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Consultant request submitted!');
    // For demonstration, just close the modal
    closeModal();
    // You could also show a success message here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-inter overflow-hidden">
      {/* Main Content Card - slightly off-center for unique feel */}
      <div className="relative  p-8 md:p-12 max-w-7xl w-full text-center transform transition-all duration-700 ease-out md:flex md:items-center md:text-left">

        {/* Decorative Blob/Shape (Optional - for more organic feel) */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-sky-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob-1 hidden md:block"></div>
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob-2 hidden md:block"></div>

        <div className="md:w-1/2 md:pr-8">
          {/* Section Header with subtle animation */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight ">
           Simplifying Your Path to<span className="text-blue-700">Health Coverage!</span>
          </h1>

          {/* Section Description with subtle animation */}
          <p className="text-base sm:text-lg text-gray-700 mb-10 leading-relaxed animate-fade-in-delay-text">
           Harbor Group USA, we understand that everyone's health needs are unique. That's why we offer a wide range of individual health plans customised to suit your specific requirements. Whether you're a freelancer, a busy professional, or a family looking for personalised coverage, we've got you covered. With an Individual Health Plan from The Harbor Group, you can rest assured knowing that your health and vitality are in good hands. Take the first step towards a healthier future today.
          </p>

          {/* Call to Action Button with interactive animation */}
          <Link href= "#individual-form"
          
            className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-sky-300 text-lg "
          >
            GET A CONSULTANT
          </Link>
        </div>

        {/* Placeholder for an image or illustration on the right side */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex items-center justify-center animate-fade-in-delay-image">
          <img
            src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/simplifying-path-health-coverage.jpeg"
            alt="Health Coverage Illustration"
            className="rounded-2xl shadow-lg max-w-full h-auto"
          
          />
        </div>
      </div>

      {/* Consultant Request Modal */}
      {/* {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center p-4 z-50 animate-fade-in-modal">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md transform transition-all duration-300 ease-out animate-scale-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Request a Consultant</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition duration-200"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition duration-200"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 text-sm font-semibold mb-2">Phone (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  className="shadow-sm appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition duration-200"
                  placeholder="e.g., +1 123 456 7890"
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg transition duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-200"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )} */}

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInDelayText {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes bounceIn {
          0% { transform: scale(0.8); opacity: 0; }
          60% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); }
        }
        @keyframes fadeInModal {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes blob1 {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); }
          30% { transform: translateY(-10px) translateX(15px) scale(1.1); }
          60% { transform: translateY(5px) translateX(-10px) scale(0.9); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); }
          40% { transform: translateY(10px) translateX(-15px) scale(1.1); }
          70% { transform: translateY(-5px) translateX(10px) scale(0.9); }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.7s ease-out forwards;
        }
        .animate-fade-in-delay-text {
          animation: fadeInDelayText 1s ease-out forwards;
          animation-delay: 0.3s;
          opacity: 0;
        }
        .animate-fade-in-delay-image {
          animation: fadeInDelayText 1s ease-out forwards; /* Reusing for image */
          animation-delay: 0.5s;
          opacity: 0;
        }
        .animate-bounce-in {
          animation: bounceIn 0.6s ease-out forwards;
          animation-delay: 0.6s;
          opacity: 0;
        }
        .animate-fade-in-modal {
          animation: fadeInModal 0.3s ease-out forwards;
        }
        .animate-scale-in {
          animation: scaleIn 0.3s ease-out forwards;
        }
        .animate-blob-1 {
          animation: blob1 10s infinite alternate ease-in-out;
        }
        .animate-blob-2 {
          animation: blob2 12s infinite alternate-reverse ease-in-out;
        }
      `}</style>
    </div>
  );
};

