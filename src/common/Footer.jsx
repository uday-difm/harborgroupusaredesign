"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Mail, Clock, Instagram, Facebook, Twitter, Youtube, Linkedin, ChevronUp, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useMagnetic } from '@/common/motion/useMagnetic';

export const Footer = () => {
    const prefersReduced = useReducedMotion();
    const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);
    const ctaMagnetic = useMagnetic(0.3, 30);

    const quickLinks = [
        { name: 'For Brokers', href: '/for-brokers' },
        { name: 'For Individuals', href: '/for-individuals' },
        { name: 'Resources & FAQ', href: '/resources-faq' },
        { name: 'Contact & Support', href: '/contact' },
        { name: 'Careers', href: '/careers' },
    ];

    const planLinks = [
        { name: 'Major Medical Plan', href: '/major-medical-plan' },
        { name: 'Dental Care Plan', href: '/dental-care-plan' },
        { name: 'Vision Care Plan', href: '/vision-plan' },
        { name: 'Term Life Insurance', href: '/term-life' },
        { name: 'Bundled Health Plans', href: '/bundles-plan' },
    ];

    const legalPages = [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms Of Service', href: '/terms-and-conditions' },
        { name: 'SMS & Marketing Terms', href: '/sms-and-marketing-terms' },
    ];

    const socialLinks = [
        { icon: <Instagram size={18} />, href: 'https://www.instagram.com/harborgroupusa/', name: 'Instagram' },
        { icon: <Facebook size={18} />, href: 'https://www.facebook.com/TheHarborGroupUS/', name: 'Facebook' },
        { icon: <Twitter size={18} />, href: 'https://x.com/HarborUsa', name: 'Twitter' },
        { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/company/harbor-group-usa/', name: 'LinkedIn' },
        { icon: <Youtube size={18} />, href: 'https://www.youtube.com/@harborgroupusa', name: 'YouTube' },
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
        <footer className="bg-navy-950 text-white font-body relative overflow-hidden">
            <div className="bg-noise opacity-5"></div>
            {/* Ambient Background Glow Effects */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/5 blur-[140px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-navy-700/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="w-full px-6 lg:px-12 xl:px-20 2xl:px-32 mx-auto relative z-10">

                {/* Pre-Footer Conversion Banner */}
                <motion.div 
                    initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="pt-16 pb-12 border-b border-navy-800/80"
                >
                    <div className="relative rounded-2xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-navy-800 p-8 md:p-12 shadow-2xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="max-w-2xl text-center lg:text-left">
                            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">Take The Next Step</span>
                            <h3 className="text-2xl md:text-4xl font-display font-bold text-white tracking-tight">
                                Ready to Find Your Ideal Health Plan?
                            </h3>
                            <p className="mt-2 text-navy-300 text-sm md:text-base">
                                Connect with a licensed Harbor Group USA advisor for tailored guidance and free quotes.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
                            <motion.a
                                href="#h-form"
                                className="btn-accent px-8 py-3.5 text-base font-bold rounded-full inline-flex items-center shadow-lg hover:shadow-xl transition-[border-color,box-shadow,color,background-color] shadow-sm"
                                ref={ctaMagnetic.ref}
                                style={{ x: ctaMagnetic.springX, y: ctaMagnetic.springY }}
                                onMouseMove={ctaMagnetic.handleMouseMove}
                                onMouseLeave={ctaMagnetic.handleMouseLeave}
                            >
                                Get a Free Quote
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </motion.a>
                            <a
                                href="tel:18004733241"
                                className="px-6 py-3.5 text-sm font-semibold text-navy-200 hover:text-accent transition-colors flex items-center gap-2 border border-navy-700 hover:border-accent/50 rounded-full bg-navy-900/60"
                            >
                                <Phone className="w-4 h-4 text-accent" />
                                1 (800) 473-3241
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Main 4-Column Footer Navigation */}
                <motion.div 
                    initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: prefersReduced ? 0 : 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[2fr_1fr_1.2fr_1.4fr] gap-12 lg:gap-16 py-16 border-b border-navy-800/80"
                >

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block" onClick={scrollToTop}>
                            <div className="flex items-center gap-3 group">
                                <img
                                    src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor%20Logo.png"
                                    alt="Harbor Group USA Logo"
                                    className="h-14 w-auto object-contain"
                                />
                                <div className="flex flex-col justify-center leading-none">
                                    <span className="font-display text-lg font-bold tracking-tight text-white group-hover:text-accent transition-colors">
                                        Harbor Group
                                    </span>
                                    <span className="font-display text-xs font-extrabold tracking-[0.2em] text-accent group-hover:text-white transition-colors uppercase mt-0.5">
                                        USA
                                    </span>
                                </div>
                            </div>
                        </Link>
                        <p className="text-sm text-navy-300 leading-relaxed max-w-sm">
                            At Harbor Group USA, our journey is rooted in a rich legacy of healthcare expertise. Dedicated to serving small business owners, employees, and self-employed workers with integrity and transparency.
                        </p>

                        {/* Social Icons Bar */}
                        <div>
                            <p className="text-xs font-bold text-navy-400 uppercase tracking-wider mb-3">Connect With Us</p>
                            <div className="flex space-x-2.5">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        aria-label={link.name}
                                        className="w-9 h-9 rounded-lg border border-navy-800 bg-navy-900/80 flex items-center justify-center text-navy-300 hover:text-accent hover:border-accent/60 hover:bg-navy-850 transition-all duration-300"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h4 className="text-xs font-bold text-accent uppercase tracking-widest">Navigation</h4>
                        <ul className="mt-6 space-y-2.5 text-sm">
                            {quickLinks.map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} onClick={scrollToTop} className="text-navy-300 hover:text-white transition-colors duration-200 block py-0.5">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Popular Plans Column */}
                    <div>
                        <h4 className="text-xs font-bold text-accent uppercase tracking-widest">Popular Plans</h4>
                        <ul className="mt-6 space-y-2.5 text-sm">
                            {planLinks.map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} onClick={scrollToTop} className="text-navy-300 hover:text-white transition-colors duration-200 block py-0.5">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info & Hours */}
                    <div>
                        <h4 className="text-xs font-bold text-accent uppercase tracking-widest">Contact & Office</h4>
                        <div className="mt-6 space-y-3 text-sm">
                            <a href="mailto:support@harborgroupusa.com" className="flex items-center group">
                                <Mail className="mr-3 h-4 w-4 text-accent/80 group-hover:text-accent transition-colors flex-shrink-0" />
                                <span className="text-navy-300 group-hover:text-white transition-colors">support@harborgroupusa.com</span>
                            </a>
                            <a href="tel:18004733241" className="flex items-center group">
                                <Phone className="mr-3 h-4 w-4 text-accent/80 group-hover:text-accent transition-colors flex-shrink-0" />
                                <span className="text-navy-300 group-hover:text-white font-medium transition-colors">1 (800) 473-3241 (Toll-Free)</span>
                            </a>
                        </div>

                        {/* Business Hours Box */}
                        <div className="mt-6 p-4 rounded-2xl bg-navy-900/60 border border-navy-800">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-bold text-navy-200 flex items-center gap-2 uppercase tracking-wider">
                                    <Clock className="h-3.5 w-3.5 text-accent" />
                                    Business Hours
                                </span>
                                <span className="flex h-2 w-2 rounded-full bg-success" title="Open Today"></span>
                            </div>
                            <p className="text-xs text-navy-400 leading-relaxed">
                                Monday – Friday: 9:00 AM – 5:00 PM<br />
                                <span className="text-navy-500">Sat – Sun: Closed</span>
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Copyright & Legal Links Bar */}
                <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-navy-400">
                    <p>© {new Date().getFullYear()} Harbor Group USA. All Rights Reserved.</p>

                    <div className="flex flex-wrap items-center gap-6">
                        {legalPages.map(link => (
                            <Link key={link.name} href={link.href} onClick={scrollToTop} className="hover:text-navy-200 transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Back to top floating button */}
            {isBackToTopVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-[calc(5.5rem+env(safe-area-inset-bottom))] right-4 p-3.5 bg-accent text-navy-950 rounded-full shadow-2xl hover:bg-accent-dark hover:scale-105 transition-all duration-300 focus:outline-none z-50 border border-accent/40 md:bottom-8 md:right-8"
                    aria-label="Back to top"
                >
                    <ChevronUp size={22} className="stroke-[2.5]" />
                </button>
            )}
        </footer>
    );
};

export default Footer;
