
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
          className={`w-6 h-6 text-gray-500 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
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
        <p className="mt-3 text-gray-600 leading-relaxed animate-fadeIn">
          {answer}
        </p>
      )}
    </div>
  );
};

// Main FAQSection component
export const FAQSection = () => {
  const faqs = [
    {
      question: "What does the Medical Plan cover?",
      answer: "Our Medical Plan provides coverage for a wide range of health services, including hospitalization, doctor visits, prescription medications, preventive care, and more."
    },
    {
      question: "How do I claim medical expenses?",
      answer: "To claim medical expenses, you typically need to submit a claim form along with relevant documents (like invoices and prescriptions) to our claims department. Detailed instructions are available in your policy document."
    },
    {
      question: "Can I add family members to my Medical Plan?",
      answer: "Yes, you can add eligible family members to your Medical Plan during open enrollment periods or in case of qualifying life events. Please contact our customer service for more details."
    },
    {
      question: "Are pre-existing conditions covered under the Medical Plan?",
      answer: "Yes, our plan covers pre-existing conditions. However, there may be certain waiting periods and conditions, so it's important to review the policy details for specific information."
    },
    {
      question: "Is emergency room (ER) care covered under the Medical Plan?",
      answer: "Yes, emergency room care is covered under the Medical Plan. Please refer to your policy for details on co-pays and deductibles related to ER visits."
    },
    {
      question: "What is the waiting period for coverage to begin?",
      answer: "The waiting period for coverage to begin varies by plan and specific benefits. Typically, there might be a short waiting period for certain services. All details are outlined in your policy document."
    },
    {
      question: "How often can I schedule routine check-ups with the Medical Plan?",
      answer: "You can schedule routine check-ups as per the guidelines of your chosen Medical Plan. Most plans cover annual preventive check-ups without a co-pay. Check your policy for specifics."
    },
    {
      question: "Can I change my coverage during the policy period?",
      answer: "Changes to your coverage during the policy period are generally allowed only during specific enrollment periods or due to qualifying life events (e.g., marriage, birth of a child). Contact our agents for assistance."
    },
    {
      question: "Can I choose my doctor with the Medical Plan?",
      answer: "Our Medical Plan offers flexibility in choosing your doctor. Depending on your plan type (e.g., PPO, HMO), you may have different options for selecting in-network or out-of-network providers. Consult your plan details for more information."
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto bg-white  p-6 sm:p-10 mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <Image
            src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/medical-plan-faq.jpeg"
            alt="Doctor holding a tablet"
            className="rounded-2xl  object-cover"
            width={600}
            height={100}
            
          />
        </div>

        {/* FAQs Section */}
        <div>
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">FAQs</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Have questions about what's covered, how to make a claim, or the enrollment process?
          </p>
          <div className="space-y-4 ">
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
}


