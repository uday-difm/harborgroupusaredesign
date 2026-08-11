"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Mail, Clock, Instagram, Facebook, Twitter, Youtube, Linkedin, ChevronUp } from 'lucide-react';

// const Logo = ({ className }) => (
//     <img
//         src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor%20Logo.png"
//         alt="Harbor Group USA Logo"
//         className={className || "h-14 w-auto"}
//         onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x50/002060/ffffff?text=Harbor+Group'; }}
//     />
// );

export const Footer = () => {

    const [isBackToTopVisible, setIsBackToTopVisible] = useState(false); 

    const quickLinks = [
        { name: 'For Brokers', href: '/for-brokers' },
        { name: 'Resources & FAQ', href: '/resources-faq' },
        { name: 'Help Center', href: '/contact' },
        { name: 'Career', href: '/careers' },
    ];
    const legalPages = [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms Of Service', href: '/terms-and-conditions' },
    ];
    const socialLinks = [
        { icon: <Instagram size={20} />, href: 'https://www.instagram.com/harborgroupusa/', name: 'Instagram' },
        { icon: <Facebook size={20} />, href: 'https://www.facebook.com/TheHarborGroupUS/', name: 'Facebook' },
        { icon: <Twitter size={20} />, href: 'https://x.com/HarborUsa', name: 'Twitter' },
        { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/company/harbor-group-usa/', name: 'LinkedIn' },
        { icon: <Youtube size={20} />, href: 'https://www.youtube.com/@harborgroupusa', name: 'YouTube' },
    ];


    const toggleBackToTopVisibility = () => {
        if (window.scrollY > 300) { 
            setIsBackToTopVisible(true);
        } else {
            setIsBackToTopVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleBackToTopVisibility);
        return () => {
            window.removeEventListener('scroll', toggleBackToTopVisibility);
        };
    }, []);


    return (
        <footer className="bg-navy-800 pt-20">
            <div className="w-full px-6 lg:px-12 xl:px-20 2xl:px-32 mx-auto">
                {/* Main Footer Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[2.5fr_1fr_1fr_1.5fr] gap-12 xl:gap-24 py-24">
                    <div className="space-y-6">
                        <Link href="/" className="inline-block" onClick={scrollToTop}>
                           <span className="text-2xl font-display font-bold text-white tracking-tight">Harbor Group USA</span>
                        </Link>
                        <p className="text-sm text-navy-300 leading-relaxed text-justify">
                            At Harbor Group USA, our journey is rooted in a rich legacy of healthcare expertise. Established with a mission to cater to small business owners, employees, and self-employed workers, we are committed to upholding values of integrity, transparency, and client-centricity.
                        </p>
                        <div className="flex space-x-5">
                            {socialLinks.map((link) => (
                                <Link key={link.name} href={link.href} aria-label={link.name} className="text-navy-400 hover:text-white transition-colors" target="_blank">
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-navy-200 uppercase tracking-widest">Quick Links</h4>
                        <ul className="mt-6 space-y-4">
                            {quickLinks.map(link => <li key={link.name}><Link href={link.href} onClick={scrollToTop} className="text-sm text-navy-300 hover:text-white transition-colors">{link.name}</Link></li>)}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-navy-200 uppercase tracking-widest">Legal</h4>
                        <ul className="mt-6 space-y-4">
                            {legalPages.map(link => <li key={link.name}><Link href={link.href} onClick={scrollToTop} className="text-sm text-navy-300 hover:text-white transition-colors">{link.name}</Link></li>)}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-navy-200 uppercase tracking-widest">Contact Us</h4>
                        <div className="mt-6 space-y-4 text-sm">
                            <a href="mailto:support@harborgroupusa.com" className="flex items-start group">
                                <Mail className="mr-3 h-5 w-5 text-navy-400 group-hover:text-white transition-colors flex-shrink-0" />
                                <span className="text-navy-300 group-hover:text-white transition-colors">support@harborgroupusa.com</span>
                            </a>
                             <a href="tel:18004733241" className="flex items-start group">
                                <Phone className="mr-3 h-5 w-5 text-navy-400 group-hover:text-white transition-colors flex-shrink-0" />
                                <span className="text-navy-300 group-hover:text-white transition-colors">1 (800) 473-3241 (Toll-Free)</span>
                            </a>
                        </div>
                        <div className="mt-10">
                            <h4 className="text-sm font-semibold text-navy-200 uppercase tracking-widest">Business Hours</h4>
                            <div className="mt-6 space-y-4 text-sm">
                                <div className="flex items-start">
                                    <Clock className="mr-3 h-5 w-5 text-navy-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-navy-300 leading-relaxed">
                                        Monday - Friday<br />9:00 AM - 5:00 PM<br /><span className="text-navy-400">Sat - Sun: Closed</span>
                                    </span>
                                </div>
                                <p className="text-navy-400 text-xs italic mt-2">
                                    A licensed agent will contact you within 24 hours of submission.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-navy-900 border-t border-navy-800">
                <div className="w-full px-6 lg:px-12 xl:px-20 2xl:px-32 mx-auto py-6 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-sm text-navy-400">© {new Date().getFullYear()} Harbor Group USA. All Rights Reserved.</p>
                </div>
            </div>
            {isBackToTopVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 p-3.5 bg-accent text-navy-900 rounded-full shadow-lg hover:bg-accent-dark transition-all hover:-translate-y-1 focus:outline-none z-50"
                    aria-label="Back to top"
                >
                    <ChevronUp size={24} />
                </button>
            )}
        </footer>
    );
};
