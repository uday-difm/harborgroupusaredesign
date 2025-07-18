"use client";

import React, { useState } from 'react';

export const Faq= () => {
  // Define custom colors based on the logo for easy use with Tailwind
  const primaryDarkBlue = '#1A2E5B'; // Dark blue from the logo text/background
  const accentLightBlue = '#4CAFDE'; // Lighter blue from the logo outline
  const softGrayBg = '#F0F2F5'; // A very light gray for background
  const white = '#FFFFFF';

  // FAQ data
  const faqs = [
    {
      question: "What types of coverage plans do you offer?",
      answer: "We offer a comprehensive range of coverage plans, including Medical, Dental, Vision, Term Life, Bundles (combined coverage), Limited Med, Accident, Hospital, Critical Illness, Lifestyle, Pet, and Rx Plans.",
    },
    {
      question: "How do I choose the right coverage plan for my needs?",
      answer: "Our team of experts is here to guide you through the selection process. Consider your health needs, budget, and lifestyle preferences. Feel free to reach out to our customer service for personalized assistance.",
    },
    {
      question: "Can I bundle multiple coverage plans for more protection?",
      answer: "Absolutely! Our Bundles option allows you to combine different coverage types for a more comprehensive package tailored to your specific needs.",
    },
    {
      question: "What is Limited Med coverage, and how does it differ from other plans?",
      answer: "Limited Med coverage provides protection for specific medical expenses, offering a more focused approach. It's an excellent option for those seeking targeted coverage at an affordable rate.",
    },
    {
      question: "Are there any discounts available for bundling coverage plans?",
      answer: "Yes, we offer discounts for bundling multiple coverage plans. This not only simplifies your coverage but also provides cost savings.",
    },
    {
      question: "What is covered under the Accident coverage plan?",
      answer: "Accident coverage provides financial protection in the event of covered accidents. This can include medical expenses, hospital stays, and other related costs resulting from accidents.",
    },
    {
      question: "How does the Critical Illness coverage plan work?",
      answer: "Critical Illness coverage provides a lump-sum payment upon diagnosis of a covered critical illness. This can help you cope with medical expenses and other financial challenges during a difficult time.",
    },
    {
      question: "Can I customize my coverage under the Lifestyle coverage plan?",
      answer: "Yes, the Lifestyle coverage plan is designed to be flexible. You can customize your coverage to include benefits that align with your unique lifestyle and health goals.",
    },
    {
      question: "Tell me more about the Pet coverage plans.",
      answer: "Our Pet coverage plans cover veterinary expenses for your furry friends, ensuring they receive the care they need without breaking the bank.",
    },
    {
      question: "Do you offer prescription drug (Rx) coverage?",
      answer: "Yes, our Rx Plans provide coverage for prescription medications, helping you manage the cost of necessary drugs prescribed by healthcare professionals.",
    },
    {
      question: "How do I file a claim for my coverage?",
      answer: "Filing a claim is simple. Visit our online portal, fill out the necessary information, and submit any required documentation. Our claims team will guide you through the process and provide timely assistance.",
    },
    {
      question: "What if I have questions about my policy or need to make changes?",
      answer: "Our customer service team is available to assist you with any questions or modifications to your policy. Contact us via phone, email, or our online chat for prompt and friendly support.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 font-inter relative overflow-hidden" style={{ background: `linear-gradient(to br, ${softGrayBg}, ${primaryDarkBlue}10)` }}>
      {/* Animated Background Gradients/Shapes */}
      <div
        className="absolute top-0 left-0 w-80 h-80 sm:w-96 sm:h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob-slow"
        style={{ backgroundColor: accentLightBlue, transform: 'translate(-70%, -70%)' }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 sm:w-1/2 sm:h-1/2 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob-slow animation-delay-2000"
        style={{ backgroundColor: primaryDarkBlue, transform: 'translate(70%, 70%)' }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 animate-scale-in" style={{ backgroundColor: white }}>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12" style={{ color: primaryDarkBlue }}>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden animate-fade-in-up-staggered" style={{ animationDelay: `${0.3 + index * 0.15}s` }}>
              <button
                className="flex justify-between items-center w-full p-5 text-left text-lg font-semibold cursor-pointer transition-colors duration-200 hover:bg-gray-100"
                style={{ backgroundColor: softGrayBg, color: primaryDarkBlue }}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                {faq.question}
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: accentLightBlue }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-screen opacity-100 py-4 px-5' : 'max-h-0 opacity-0'
                }`}
                style={{ backgroundColor: white }}
              >
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind CSS Custom Animations */}
      {/* Ensure these keyframes and animations are added to your tailwind.config.js */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes blob-slow-anim {
          0% { transform: translate(-70%, -70%) scale(1); }
          25% { transform: translate(-60%, -80%) scale(1.05); }
          50% { transform: translate(-80%, -60%) scale(0.95); }
          75% { transform: translate(-75%, -75%) scale(1.02); }
          100% { transform: translate(-70%, -70%) scale(1); }
        }

        @keyframes blob-slow-anim-alt {
          0% { transform: translate(70%, 70%) scale(1); }
          25% { transform: translate(80%, 60%) scale(0.95); }
          50% { transform: translate(60%, 80%) scale(1.05); }
          75% { transform: translate(65%, 75%) scale(0.98); }
          100% { transform: translate(70%, 70%) scale(1); }
        }

        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-scale-in { animation: scaleIn 0.7s ease-out forwards; }
        .animate-blob-slow { animation: blob-slow-anim 20s infinite alternate ease-in-out; }
        .animate-blob-slow.animation-delay-2000 { animation-delay: 2s; }

        /* Staggered fade in for FAQ items */
        .animate-fade-in-up-staggered {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

