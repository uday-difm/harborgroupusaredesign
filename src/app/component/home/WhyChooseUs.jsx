"use client";

import React, { useState } from 'react';
import {  ChevronDown,  Target,  Users, Zap, Timer } from 'lucide-react';

export const WhyChooseUsSection = () => {
    const reasons = [
        {
            icon: <Users />,
            title: "Experienced Professionals",
            description: "Our experienced team will guide you through the complexities of health plans"
        },
        {
            icon: <Target />,
            title: "Tailored Solutions",
            description: "Get a custom-built health plan that delivers the support and coverage according to your specific needs"
        },
        {
            icon: <Zap />,
            title: "Reliable Support",
            description: "Get instant, expert assistance with our 24/7 guaranteed uptime support"
        },
        {
            icon: <Timer />,
            title: "Fast Turnaround Time",
            description: "Get a quote in hours & set up your plan in days, not weeks. We prioritize time, so you can access critical health coverage swiftly"
        }
    ];
    
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-gray-50 py-20 sm:py-24">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Column: Accordion */}
                    <div className="space-y-8">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-900 tracking-tight">
                            Why choose Harbor Group USA health plan ?
                        </h2>
                        <div className="space-y-4">
                            {reasons.map((reason, index) => (
                                <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                                    <button 
                                        onClick={() => setActiveIndex(index)}
                                        className="w-full flex justify-between items-center text-left"
                                    >
                                        <div className="flex items-center space-x-4">
                                            <div className={`p-3 rounded-full transition-colors duration-300 ${activeIndex === index ? 'bg-sky-500' : 'bg-gray-200'}`}>
                                                {React.cloneElement(reason.icon, { className: `h-6 w-6 transition-colors duration-300 ${activeIndex === index ? 'text-white' : 'text-indigo-900'}` })}
                                            </div>
                                            <h4 className="text-lg font-bold text-indigo-900">{reason.title}</h4>
                                        </div>
                                        <ChevronDown className={`h-6 w-6 text-gray-400 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} />
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-40 mt-4' : 'max-h-0'}`}>
                                        <p className="pl-14 text-gray-600 text-justify">{reason.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Right Column: Image */}
                    <div className="relative">
                         <div className="absolute inset-0 bg-gradient-to-br from-sky-200 to-indigo-200 rounded-full filter blur-3xl opacity-40"></div>
                         <img 
                            src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Why-choose-Harbor-Group-USA-health-plan.jpeg"
                            alt="Client meeting"
                            className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
                            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x700/e0f2fe/1e3a8a?text=Trust+Us'; }}
                         />
                    </div>
                </div>
            </div>
        </section>
    );
};