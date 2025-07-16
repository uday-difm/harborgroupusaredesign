"use client";

import React, { useState } from 'react';
import Image from 'next/image';

// To use this component, you'll need lucide-react:
// npm install lucide-react
// Or you can replace the icons with your own SVGs.
import { Menu, X, ChevronDown, Phone, Briefcase, BarChart, Building2 } from 'lucide-react';

// --- Logo Component ---
// Uses the direct URL for the Harbor Group logo.
const Logo = () => (
    <Image 
        src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor%20Logo.png"
        alt="Harbor Group USA Logo" 
        className="h-14 w-auto"
        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/150x50/002060/ffffff?text=Harbor+Group'; }}
        width={600}
                  height={400}
    />
);

// --- Navigation Data ---
// Updated to match the new image provided.
const navLinks = [
    { name: 'About', href: '/about-health' },
    { name: 'Major Medical', href: '/major-medical-plan' },
    {
        name: 'Plans',
        href: '/health-plans',
        dropdown: [
            { name: 'Medical', href: '/medical-plan' },
            { name: 'Dental', href: '/dental-care-plan' },
            { name: 'Vision', href: '/vision-plan' },
            { name: 'Term Life', href: '/term-life' },
            { name: 'Bundles', href: '/bundles-plan' },
            { name: 'Limited Med', href: '/limited-med' },
            { name: 'Accident', href: '/accident-plan' },
            { name: 'Hospital', href: '/hospital-plan' },
            { name: 'Critical', href: '/critical-plan' },
            { name: 'Lifestyle', href: '/lifestyle-plan' },
            { name: 'Pet', href: '/pet-plan' },
            { name: 'Rx', href: '/rx-plan' },

        ]
    },
    {
        name: 'For',
        href: '/for',
        dropdown: [
            { name: 'For Brokers', href: '/for-brokers' },
            { name: 'For Individuals', href: '/for-individuals' },
        ]
    },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '/contact' },
];

// --- Main Header Component ---
export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('About');
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const handleMobileDropdown = (linkName) => setOpenDropdown(openDropdown === linkName ? null : linkName);

    const colors = {
        primary: 'text-indigo-900', 
        accent: 'text-sky-500',
        accentBg: 'bg-sky-500',
        accentBgHover: 'hover:bg-sky-600',
        underline: 'bg-sky-500',
    };

    return (
        <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-200">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#" className="flex items-center">
                            <Logo />
                        </a>
                    </div>

                    {/* --- Desktop Navigation --- */}
                    <div className="hidden lg:flex lg:items-center lg:flex-grow lg:justify-center lg:space-x-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className={`relative ${link.dropdown ? 'group' : ''}`}>
                                <a
                                    href={link.href}
                                    className={`relative px-2 py-2 text-base font-semibold transition-colors duration-300 ${
                                        activeLink === link.name ? colors.accent : colors.primary
                                    } hover:${colors.accent} flex items-center`}
                                    onClick={() => setActiveLink(link.name)}
                                >
                                    {link.name}
                                    {link.dropdown && <ChevronDown className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />}
                                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 ${colors.underline} transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 ${activeLink === link.name ? 'scale-x-100' : ''}`}></span>
                                </a>

                                {/* --- Dropdown Menu --- */}
                                {link.dropdown && (
                                    <div className="absolute z-20 left-1/2 -translate-x-1/2 mt-5 w-56 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-all duration-300 invisible group-hover:visible transform scale-95 group-hover:scale-100">
                                        <div className="py-2">
                                            {link.dropdown.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={`block px-4 py-2 text-sm ${colors.primary} hover:bg-gray-100 hover:${colors.accent}`}
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* --- Desktop Contact Info --- */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <div className="text-right">
                            <p className="text-xs text-gray-500">Call Us</p>
                            <p className={`text-sm font-semibold ${colors.primary}`}>+1 516-210-6887</p>
                            <p className={`text-xs ${colors.primary}`}>+1 754-229-8270</p>
                        </div>
                        <a href="tel:+15162106887" className={`flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full border-2 border-sky-500 text-sky-500 hover:bg-sky-50 transition-colors duration-300`}>
                            <Phone className="h-6 w-6" />
                        </a>
                    </div>
                    
                    {/* --- Mobile Menu Button --- */}
                    <div className="lg:hidden flex items-center">
                        <button onClick={toggleMobileMenu} type="button" className={`p-2 rounded-md ${colors.primary}`}>
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? <X className="block h-7 w-7" /> : <Menu className="block h-7 w-7" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* --- Mobile Menu --- */}
            <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-[110%]'}`} id="mobile-menu">
                <div className="px-4 pt-2 pb-3 space-y-2 sm:px-5">
                    {navLinks.map((link) => (
                        <div key={link.name}>
                            <div className="flex justify-between items-center">
                                <a href={link.href} className={`w-full text-left block px-3 py-3 rounded-md text-lg font-semibold ${activeLink === link.name ? colors.accent : colors.primary} hover:bg-gray-100`} onClick={() => { setActiveLink(link.name); if (!link.dropdown) setIsMobileMenuOpen(false); }}>
                                    {link.name}
                                </a>
                                {link.dropdown && (
                                    <button onClick={() => handleMobileDropdown(link.name)} className="p-2 text-slate-500">
                                        <ChevronDown className={`h-6 w-6 transition-transform duration-300 ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                                    </button>
                                )}
                            </div>
                            {link.dropdown && openDropdown === link.name && (
                                <div className="pl-4 mt-2 space-y-2">
                                    {link.dropdown.map(item => (
                                        <a key={item.name} href={item.href} className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:bg-gray-100 hover:text-sky-600">
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="pt-4 pb-5 border-t border-gray-200 px-5">
                    <div className="flex items-center">
                        <a href="tel:+15162106887" className={`flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full border-2 border-sky-500 text-sky-500`}>
                            <Phone className="h-6 w-6" />
                        </a>
                        <div className="ml-4">
                            <p className="text-sm text-gray-500">Call Us</p>
                            <p className={`text-base font-semibold ${colors.primary}`}>+1 516-210-6887</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};


