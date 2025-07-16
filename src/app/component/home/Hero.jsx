"use client";

import React  from 'react';
import {  ArrowRight , ShieldCheck} from 'lucide-react';


export const HeroSection = () => {
    return (
        <section className="relative bg-sky-50 overflow-hidden">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Text Content */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-indigo-900 tracking-tight">
                            Brighter &<br/> Healthier Future!
                        </h1>
                        <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-gray-600">
                            Finding Your Ideal Health Plan with <span className="font-semibold text-sky-600">Harbor Group USA</span>
                        </p>
                        <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-md text-gray-500">
                            Securing your Future with Unmatched Expertise in Health Plans and Benefits.
                        </p>
                        <div className="mt-8">
                            <a 
                                href="#" 
                                className="group inline-flex items-center justify-center px-8 py-4 bg-sky-500 text-white font-bold rounded-lg shadow-lg hover:bg-sky-600 transform transition-all duration-300 hover:scale-105"
                            >
                                GET A FREE QUOTE TODAY!
                                <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative">
                        {/* Background Shapes */}
                        <div className="absolute -top-12 -right-12 w-72 h-72 bg-sky-200 rounded-full opacity-50 filter blur-xl"></div>
                        <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-indigo-200 rounded-full opacity-50 filter blur-xl"></div>
                        
                        <div className="relative z-10">
                            <img 
                                src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/hero.jpeg" 
                                alt="Doctor with patient" 
                                className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/38bdf8/ffffff?text=Our+Promise'; }}
                            />
                             <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-lg flex items-center space-x-3">
                                <div className="bg-green-100 p-3 rounded-full">
                                    <ShieldCheck className="h-6 w-6 text-green-600" />
                                </div>
                                <div>
                                    <p className="font-bold text-indigo-900">100% Secure</p>
                                    <p className="text-xs text-gray-500">Your data is safe with us</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};