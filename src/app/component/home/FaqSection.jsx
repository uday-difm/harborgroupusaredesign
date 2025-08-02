"use client";

import React, { useState } from 'react';
import {  ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// --- NEW FAQ Section ---
export const FaqSection = () => {
    const faqs = [
        {
            question: "Can I add family members to my Medical Plan?",
            answer: "Yes, our plan is designed to cover individuals and families. You can easily add your spouse, children, or other dependents to ensure comprehensive coverage for your entire family."
        },
        {
            question: "Are pre-existing conditions covered under the Medical Plan?",
            answer: "Yes, our plan covers pre-existing conditions. However, there may be certain waiting periods and conditions, so it's important to review the policy details for specific information."
        },
        {
            question: "How often can I schedule routine check-ups with the Medical Plan?",
            answer: "You can schedule routine check-ups as needed, depending on your health needs. There are no strict limitations, and we encourage regular preventive care."
        }
    ];

    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="bg-gray-50 py-20 sm:py-24">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                   
                    {/* Left Column: Accordion */}
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                <button 
                                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                    className="w-full flex justify-between items-center p-6 text-left"
                                >
                                    <h4 className="text-lg font-semibold text-indigo-900">{faq.question}</h4>
                                    <div className={`flex-shrink-0 ml-4 p-2 rounded-full transition-transform duration-300 ${openIndex === index ? 'bg-sky-500 rotate-180' : 'bg-gray-200'}`}>
                                        <ChevronDown className={`h-6 w-6 transition-colors duration-300 ${openIndex === index ? 'text-white' : 'text-gray-500'}`} />
                                    </div>
                                </button>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                                    <p className="px-6 pb-6 text-gray-600">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                         <div className="pt-6 text-left">
                            <Link href="/resources-faq" className="inline-block bg-sky-500 text-white font-bold px-8 py-3 rounded-lg shadow-md hover:bg-sky-600 transition-colors">
                                VIEW MORE
                            </Link>
                        </div>
                    </div>
                     {/* Right Column: Title and Image */}
                    <div className="space-y-8">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-900 tracking-tight">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-gray-600">
                            Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
                        </p>
                        <div className="relative">
                            <Image
                                width={600}
                                height={400}
                                src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Frequently-Asked-Questions.jpeg"
                                alt="Doctor answering questions"
                                className="rounded-2xl shadow-xl w-full h-auto object-cover"
                               
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
