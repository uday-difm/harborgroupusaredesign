"use client";

import React from 'react';
import Image from 'next/image';
import { Target, BrainCircuit, BarChart3, Award } from 'lucide-react';

export const WholesaleGeneralAgency = () => {
    const features = [
        {
            icon: <Target className="h-7 w-7 text-sky-500" />,
            title: "Our Goal",
            description: "Compare all the options to find you the best plan available for the lowest possible premium!"
        },
        {
            icon: <BrainCircuit className="h-7 w-7 text-sky-500" />,
            title: "Knowledge",
            description: "We make sure your health is protected. Got confused with ACA We'll guide you through it!"
        },
        {
            icon: <BarChart3 className="h-7 w-7 text-sky-500" />,
            title: "Expert Analysis",
            description: "Our experts analyze everything from medical needs to your budget to create a personalized plan!"
        },
        {
            icon: <Award className="h-7 w-7 text-sky-500" />,
            title: "Industry Best Practices",
            description: "Our consultants cover all healthcare needs, from health and medical to life and employee benefits!"
        }
    ];

    return (
        <section className="bg-white py-20 sm:py-24">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div>
                 <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-900 tracking-tight">
                               Harbor Group USA is a Retail and Wholesale General Agency
                            </h2>
                             <h3 className="mt-4 text-xl font-semibold text-sky-600">
                                Finding Your Ideal Health Plan with Harbor Group USA
                            </h3>
                            <p className="mt-6 text-gray-600 mb-10">
                              We offer a range of consulting services, all designed to help you find the best plan you are comfortable with. Whether you’re looking for an individual health plan or a group health plan, we have you covered. We will find you precisely what you need.
                            </p>
                             </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Text Content & Image */}
                    <div className="space-y-8">
                        <div className="relative">
                            <Image
                                src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Home-2.jpeg"
                                alt="Professional team collaborating"
                                className="rounded-2xl object-cover"
                                width={600}
                                height={100}
                            />
                        </div>
                    </div>

                    {/* Right Column: Features */}
                    <div className="space-y-8">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start space-x-6 p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg hover:bg-white transition-all duration-300">
                                <div className="flex-shrink-0 bg-sky-100 p-4 rounded-full">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-indigo-900">{feature.title}</h4>
                                    <p className="mt-1 text-gray-600 text-justify">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};