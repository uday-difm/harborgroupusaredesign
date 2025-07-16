"use client";

import React, { useState } from 'react';
import { Menu, X, ChevronDown, Phone, Briefcase, BarChart, Building2, Mail, Clock, Instagram, Facebook, Twitter, Youtube, Linkedin, Send, Mailbox, ArrowRight } from 'lucide-react';


// --- Logo Component ---
const Logo = ({ className }) => (
    <img 
        src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor%20Logo.png"
        alt="Harbor Group USA Logo" 
        className={className || "h-14 w-auto"}
        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/150x50/002060/ffffff?text=Harbor+Group'; }}
    />
);
export const Footer = () => {
    const quickLinks = [
        { name: 'For Brokers', href: '#' },
        { name: 'Resources & FAQ', href: '#' },
        { name: 'Help Center', href: '#' },
        { name: 'Career', href: '#' },
        { name: 'Contact Us', href: '#' },
    ];
    const legalPages = [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms Of Service', href: '#' },
    ];
    const socialLinks = [
        { icon: <Instagram size={20} />, href: '#', name: 'Instagram' },
        { icon: <Facebook size={20} />, href: '#', name: 'Facebook' },
        { icon: <Twitter size={20} />, href: '#', name: 'Twitter' },
        { icon: <Linkedin size={20} />, href: '#', name: 'LinkedIn' },
               { icon: <Youtube size={20} />, href: '#', name: 'YouTube' },
    ];
    
    return (
        <footer className="bg-gray-100 pt-16">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Newsletter Section */}
                <div className="relative bg-indigo-900 rounded-2xl p-8 md:p-12 overflow-hidden">
                    <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                        <div>
                            <h2 className="text-3xl font-bold text-white">Join Our Newsletter</h2>
                            <p className="mt-2 text-indigo-200 max-w-lg">
                                Stay informed, stay connected – sign up now for a wealth of curated information tailored just for you! 🌐✉️
                            </p>
                        </div>
                        <form className="flex-shrink-0 w-full lg:w-auto">
                            <div className="flex items-center bg-white rounded-lg p-1.5">
                                <Mail className="h-5 w-5 text-gray-400 mx-3"/>
                                <input 
                                    type="email" 
                                    placeholder="Enter your email"
                                    className="w-full bg-transparent text-gray-800 focus:outline-none"
                                />
                                <button type="submit" className="bg-sky-500 text-white font-semibold px-5 py-2.5 rounded-md hover:bg-sky-600 transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
                    {/* Logo and About */}
                    <div className="space-y-4">
                        <a href="#" className="inline-block">
                           <Logo className="h-16 w-auto" />
                        </a>
                        <p className="text-sm text-gray-600">
                           At Harbor Group USA, our journey is rooted in a rich legacy of healthcare expertise. Established with a mission to cater to small business owners, employees, and self-employed workers, we are committed to upholding values of integrity, transparency, and client-centricity.
                        </p>
                         <div className="flex space-x-4">
                            {socialLinks.map((link) => (
                                <a key={link.name} href={link.href} aria-label={link.name} className="text-gray-400 hover:text-sky-500 transition-colors">
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-base font-semibold text-indigo-900">Quick Links</h4>
                        <ul className="mt-4 space-y-3">
                            {quickLinks.map(link => <li key={link.name}><a href={link.href} className="text-sm text-gray-600 hover:text-sky-500 transition-colors">{link.name}</a></li>)}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="text-base font-semibold text-indigo-900">Legal</h4>
                        <ul className="mt-4 space-y-3">
                            {legalPages.map(link => <li key={link.name}><a href={link.href} className="text-sm text-gray-600 hover:text-sky-500 transition-colors">{link.name}</a></li>)}
                        </ul>
                    </div>
                    
                    {/* Contact Info */}
                    <div>
                        <h4 className="text-base font-semibold text-indigo-900">Contact Us</h4>
                        <div className="mt-4 space-y-3 text-sm">
                            <a href="mailto:support@harborgroupusa.com" className="flex items-center group">
                                <Mail className="mr-3 h-5 w-5 text-gray-400 group-hover:text-sky-500 transition-colors" />
                                <span className="text-gray-600 group-hover:text-sky-500 transition-colors">support@harborgroupusa.com</span>
                            </a>
                            <a href="tel:+15162186887" className="flex items-center group">
                                <Phone className="mr-3 h-5 w-5 text-gray-400 group-hover:text-sky-500 transition-colors" />
                                <span className="text-gray-600 group-hover:text-sky-500 transition-colors">+1 516-218-6887</span>
                            </a>
                             <a href="tel:+17542299273" className="flex items-center group">
                                <Phone className="mr-3 h-5 w-5 text-gray-400 group-hover:text-sky-500 transition-colors" />
                                <span className="text-gray-600 group-hover:text-sky-500 transition-colors">+1 754-229-9273</span>
                            </a>
                        </div>

                        {/* Business Hours Section */}
                        <div className="mt-6">
                             <h4 className="text-base font-semibold text-indigo-900">Business Hours</h4>
                             <div className="mt-4 space-y-3 text-sm">
                                <div className="flex items-start">
                                    <Clock className="mr-3 h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600">
                                        Monday - Friday - 9 am to 5 pm<br/>
                                        Saturday, Sunday - Closed
                                    </span>
                                </div>
                                <p className="text-gray-600">
                                    After submitting your information to us, a licensed agent will contact you within 24 hours.
                                </p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-gray-200">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
                    <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Harbor Group USA. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};