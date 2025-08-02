"use client";

import React, { useState } from 'react';
import Image from 'next/image';

// FAQItem component for individual questions and answers
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left text-lg font-semibold text-indigo-900 hover:text-indigo-800 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <svg
          className={`w-6 h-6 text-gray-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
            }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <p className="mt-3 text-gray-600 leading-relaxed animate-fadeIn text-justify">
          {answer}
        </p>
      )}
    </div>
  );
};

// Main FAQSection component
export const FAQSection = ({ faqs, imageContent }) => {
  return (
    <div className="w-full max-w-6xl mx-auto bg-white p-6 sm:p-10 mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Section - Dynamically passed as part of the props */}
        <div className="flex justify-center items-center">
          <Image
            src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Frequently-Asked-Questions.jpeg"
            alt="FAQ"
            width={600}
            height={400}
          />
        </div>

        {/* FAQs Section */}
        <div>
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">FAQs</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Have questions about what's covered, how to make a claim, or the enrollment process?
          </p>
          <div className="space-y-4">
            {faqs.slice(0, 3).map((faq, index) => ( // Display first 3 FAQs in the first column
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>

      {/* Remaining FAQs in a separate grid for the second column effect */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="space-y-4">
          {faqs.slice(3, 6).map((faq, index) => ( // Display next 3 FAQs
            <FAQItem key={index + 3} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <div className="space-y-4">
          {faqs.slice(6).map((faq, index) => ( // Display remaining FAQs
            <FAQItem key={index + 6} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};
