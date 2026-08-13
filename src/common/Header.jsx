"use client";

import React, { useState, useEffect, useRef } from 'react';
import {
    Menu, X, ChevronDown, Phone, Shield, Eye, Pill, Heart, Briefcase,
    Zap, Star, Package, Dog, Stethoscope, UserCircle2, Users2, Building2,
    ShieldCheck, Activity, MapPin, Award
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useLenis } from 'lenis/react';
import Link from 'next/link';

const Logo = () => (
    <img
        src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor%20Logo.png"
        alt="Harbor Group USA Logo"
        width={600}
        height={400}
        className="h-10 md:h-12 w-auto"
    />
);

const planColumns = [
    {
        label: 'Health & Medical',
        plans: [
            { name: 'Medical', href: '/medical-plan', icon: Stethoscope, desc: 'Comprehensive medical coverage' },
            { name: 'Dental', href: '/dental-care-plan', icon: Shield, desc: 'Dental care & cleanings' },
            { name: 'Vision', href: '/vision-plan', icon: Eye, desc: 'Eye exams & eyewear' },
            { name: 'Rx', href: '/rx-plan', icon: Pill, desc: 'Prescription drug benefits' },
        ],
    },
    {
        label: 'Life & Future',
        plans: [
            { name: 'Term Life', href: '/term-life', icon: Heart, desc: 'Protect your family\'s future' },
            { name: 'Critical Illness', href: '/critical-plan', icon: Zap, desc: 'Serious illness protection' },
            { name: 'Hospital', href: '/hospital-plan', icon: Building2, desc: 'Inpatient care coverage' },
            { name: 'Limited Med', href: '/limited-med', icon: Briefcase, desc: 'Budget-friendly coverage' },
        ],
    },
    {
        label: 'Specialty',
        plans: [
            { name: 'Accident', href: '/accident-plan', icon: Shield, desc: 'Accident & injury benefits' },
            { name: 'Lifestyle', href: '/lifestyle-plan', icon: Star, desc: 'Wellness & lifestyle perks' },
            { name: 'Pet Coverage', href: '/pet-plan', icon: Dog, desc: 'Care for your furry family' },
            { name: 'Value Bundles', href: '/bundles-plan', icon: Package, desc: 'Bundled plan savings' },
        ],
    },
];

const forOptions = [
    { name: 'For Brokers', href: '/for-brokers', icon: Users2, desc: 'Tools, resources, and commissions for licensed brokers.' },
    { name: 'For Individuals', href: '/for-individuals', icon: UserCircle2, desc: 'Find the right plan tailored to your personal needs.' },
];

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about-health' },
    { name: 'Major Medical', href: '/major-medical-plan' },
    { name: 'Plans', href: '/health-plans', dropdown: 'plans' },
    { name: 'For', href: '/for', dropdown: 'for' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '/contact' },
];

/* Items are doubled inside the marquee for a seamless infinite loop */
const MARQUEE_ITEMS = [
    { text: 'Cigna Network', icon: ShieldCheck },
    { text: 'PHCS / Multiplan', icon: Activity },
    { text: 'QualCare', icon: Award },
    { text: 'Licensed in All 50 States', icon: MapPin },
    { text: 'Retail & Wholesale Agency', icon: Building2 },
    { text: 'Individual & Group Coverage', icon: Users2 },
];

export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [openDesktopDropdown, setOpenDesktopDropdown] = useState(null);
    const [currentPath, setCurrentPath] = useState('');
    const [scrolled, setScrolled] = useState(false);
    const headerRef = useRef(null);
    const closeTimer = useRef(null);
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        setCurrentPath(window.location.pathname);
        const handlePopState = () => setCurrentPath(window.location.pathname);
        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    useLenis(({ scroll }) => setScrolled(scroll > 30));

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const handler = (e) => {
            if (headerRef.current && !headerRef.current.contains(e.target)) {
                setOpenDesktopDropdown(null);
                setIsMobileMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const handleMouseEnter = (name) => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setOpenDesktopDropdown(name);
    };
    const handleMouseLeave = () => {
        closeTimer.current = setTimeout(() => setOpenDesktopDropdown(null), 200);
    };

    const isActive = (link) => {
        if (currentPath === link.href) return true;
        if (link.dropdown === 'plans') return planColumns.flatMap(c => c.plans).some(p => p.href === currentPath);
        if (link.dropdown === 'for') return forOptions.some(f => f.href === currentPath);
        return false;
    };

    const navigate = (href) => {
        setCurrentPath(href);
        setIsMobileMenuOpen(false);
        setOpenDesktopDropdown(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Shared transition — one curve governs everything
    const T = { duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] };

    return (
        <motion.header
            ref={headerRef}
            initial={false}
            className="fixed top-0 left-0 right-0 z-[100] font-body"
            animate={{
                paddingTop: scrolled ? 12 : 0,
                paddingLeft: scrolled ? 16 : 0,
                paddingRight: scrolled ? 16 : 0,
            }}
            transition={T}
        >
            {/* ── Marquee strip — visible only at top, desktop only ── */}
            <AnimatePresence>
                {!scrolled && (
                    <motion.div
                        key="marquee-strip"
                        initial={{ height: 40, opacity: 0 }}
                        animate={{ height: 40, opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="hidden md:block overflow-hidden bg-primary border-b border-white/[0.05]"
                        role="region"
                        aria-label="Credentials and network access"
                    >
                        <div 
                            className="marquee-wrapper h-10 flex items-center overflow-hidden"
                            style={{ 
                                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', 
                                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' 
                            }}
                        >
                            {prefersReducedMotion ? (
                                /* Static fallback for reduced-motion users */
                                <div className="flex items-center gap-0 px-6">
                                    {MARQUEE_ITEMS.slice(0, 6).map((item, i) => {
                                        const Icon = item.icon;
                                        return (
                                        <React.Fragment key={i}>
                                            <div className="flex items-center gap-1.5 px-3">
                                                <Icon className="h-4 w-4 text-accent" />
                                                <span className="text-[13px] font-bold text-navy-100 tracking-wider uppercase whitespace-nowrap">{item.text}</span>
                                            </div>
                                            {i < 5 && <span className="mx-2 text-accent text-[10px]" aria-hidden="true">|</span>}
                                        </React.Fragment>
                                        );
                                    })}
                                </div>
                            ) : (
                                /* Animated marquee — doubled list for seamless loop */
                                <div className="marquee-track flex w-max items-center whitespace-nowrap">
                                    {[0, 1].map((copy) => (
                                        <span key={copy} className="flex items-center flex-shrink-0">
                                            {MARQUEE_ITEMS.map((item, i) => {
                                                const Icon = item.icon;
                                                return (
                                                <React.Fragment key={`${copy}-${i}`}>
                                                    <div className="flex items-center gap-1.5 px-3">
                                                        <Icon className="h-4 w-4 text-accent" />
                                                        <span className="text-[13px] font-bold text-navy-100 tracking-wider uppercase whitespace-nowrap">{item.text}</span>
                                                    </div>
                                                    <span className="text-accent text-[10px] mx-1" aria-hidden="true">|</span>
                                                </React.Fragment>
                                                );
                                            })}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={false}
                animate={{
                    borderRadius: scrolled ? 9999 : 0,
                    maxWidth: scrolled ? '80rem' : '100%',
                    backgroundColor: scrolled ? 'rgba(13, 19, 47, 0.96)' : 'rgba(255,255,255,0.97)',
                    boxShadow: scrolled
                        ? '0 8px 40px -8px rgba(19,30,73,0.35), 0 0 0 1px rgba(255,255,255,0.08)'
                        : '0 1px 0px rgba(19,30,73,0.08)',
                }}
                transition={T}
                className={`mx-auto w-full backdrop-blur-2xl ${!scrolled ? 'border-b border-navy-100/60' : ''}`}
            >
                {/* Inner content constrained to page width */}
                <div className={scrolled ? 'px-6' : 'w-full px-6 sm:px-10 lg:px-14 xl:px-20 2xl:px-28'}>
                    <motion.div
                        initial={false}
                        animate={{ height: scrolled ? 64 : 96 }}
                        transition={T}
                        className="flex items-center justify-between">



                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" onClick={() => navigate('/')} className="flex items-center">
                            <Logo />
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden xl:flex xl:items-center xl:space-x-1">
                        {navLinks.map((link) => {
                            const active = isActive(link);
                            const open = openDesktopDropdown === link.name;
                            return (
                                <div
                                    key={link.name}
                                    className="relative"
                                    onMouseEnter={() => link.dropdown && handleMouseEnter(link.name)}
                                    onMouseLeave={() => link.dropdown && handleMouseLeave()}
                                >
                                    <a
                                        href={link.href}
                                        onClick={() => navigate(link.href)}
                                        className={`relative flex items-center gap-1 px-4 py-2.5 rounded-full text-base xl:text-[17px] font-medium transition-colors duration-200 whitespace-nowrap ${
                                            scrolled
                                                ? active ? 'text-accent-light' : 'text-white/80 hover:text-white hover:bg-white/10'
                                                : active ? 'text-accent' : 'text-navy-700 hover:text-navy-900 hover:bg-navy-50/80'
                                        }`}
                                    >
                                        {link.name}
                                        {link.dropdown && (
                                            <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? 'rotate-180' : ''} ${scrolled ? 'text-white/40' : 'text-navy-400'}`} />
                                        )}
                                    </a>

                                    {/* Mega Menu — Plans */}
                                    <AnimatePresence>
                                        {link.dropdown === 'plans' && open && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 8, scale: 0.97 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 8, scale: 0.97 }}
                                                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                                className="absolute left-1/2 -translate-x-1/2 mt-3 w-[680px] bg-white rounded-2xl shadow-[0_24px_64px_-12px_rgba(13,19,47,0.2)] border border-navy-100/80 overflow-hidden"
                                                onMouseEnter={() => handleMouseEnter(link.name)}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                {/* Top accent strip */}
                                                <div className="h-1 bg-gradient-to-r from-accent via-accent-dark to-accent/60" />

                                                {/* Featured highlight */}
                                                <div className="px-6 pt-4 pb-3 border-b border-navy-50 flex items-center justify-between">
                                                    <span className="text-[10px] font-bold text-navy-400 uppercase tracking-widest">All Coverage Plans</span>
                                                    <Link href="/major-medical-plan" onClick={() => navigate('/major-medical-plan')} className="flex items-center gap-2 text-xs font-bold text-accent hover:text-accent/80 transition-colors bg-accent/5 rounded-full px-3 py-1.5">
                                                        <Star className="w-3 h-3" />
                                                        Most Popular: Major Medical
                                                    </Link>
                                                </div>

                                                {/* 3-column grid */}
                                                <div className="grid grid-cols-3 divide-x divide-navy-50/80 px-2 py-4">
                                                    {planColumns.map((col) => (
                                                        <div key={col.label} className="px-4 py-2">
                                                            <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-3">{col.label}</p>
                                                            <div className="space-y-0.5">
                                                                {col.plans.map((plan) => {
                                                                    const Icon = plan.icon;
                                                                    const isPlanActive = currentPath === plan.href;
                                                                    return (
                                                                        <a
                                                                            key={plan.name}
                                                                            href={plan.href}
                                                                            onClick={() => navigate(plan.href)}
                                                                            className={`flex items-start gap-3 px-3 py-2.5 rounded-lg transition-all group ${isPlanActive ? 'bg-accent/8 text-accent' : 'hover:bg-navy-50/70'}`}
                                                                        >
                                                                            <div className={`flex-shrink-0 mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center transition-all ${isPlanActive ? 'bg-accent text-white' : 'bg-navy-100/60 text-navy-500 group-hover:bg-accent/10 group-hover:text-accent'}`}>
                                                                                <Icon className="w-3.5 h-3.5" />
                                                                            </div>
                                                                            <div>
                                                                                <div className={`text-sm font-semibold leading-tight ${isPlanActive ? 'text-accent' : 'text-navy-900 group-hover:text-navy-900'}`}>{plan.name}</div>
                                                                                <div className="text-[11px] text-navy-400 mt-0.5">{plan.desc}</div>
                                                                            </div>
                                                                        </a>
                                                                    );
                                                                })}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="px-6 py-3 bg-navy-50/40 border-t border-navy-50 flex justify-between items-center">
                                                    <span className="text-xs text-navy-400">12 plans available</span>
                                                    <Link href="/health-plans" onClick={() => navigate('/health-plans')} className="text-xs font-bold text-accent hover:underline">View all plans →</Link>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Dropdown — For */}
                                    <AnimatePresence>
                                        {link.dropdown === 'for' && open && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 8, scale: 0.97 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 8, scale: 0.97 }}
                                                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                                className="absolute left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-2xl shadow-[0_24px_48px_-12px_rgba(13,19,47,0.18)] border border-navy-100/80 overflow-hidden"
                                                onMouseEnter={() => handleMouseEnter(link.name)}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                <div className="h-1 bg-gradient-to-r from-accent via-accent-dark to-accent/60" />
                                                <div className="p-3 space-y-1.5">
                                                    {forOptions.map((item) => {
                                                        const Icon = item.icon;
                                                        const isOpt = currentPath === item.href;
                                                        return (
                                                            <a
                                                                key={item.name}
                                                                href={item.href}
                                                                onClick={() => navigate(item.href)}
                                                                className={`flex items-start gap-4 p-3.5 rounded-lg transition-all group ${isOpt ? 'bg-accent/8' : 'hover:bg-navy-50/70'}`}
                                                            >
                                                                <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all ${isOpt ? 'bg-accent text-white' : 'bg-navy-100/70 text-navy-500 group-hover:bg-accent/10 group-hover:text-accent'}`}>
                                                                    <Icon className="w-5 h-5" />
                                                                </div>
                                                                <div>
                                                                    <div className={`text-sm font-bold ${isOpt ? 'text-accent' : 'text-navy-900'}`}>{item.name}</div>
                                                                    <div className="text-[11px] text-navy-400 mt-0.5 leading-snug">{item.desc}</div>
                                                                </div>
                                                            </a>
                                                        );
                                                    })}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden xl:flex items-center gap-4">
                        <a
                            href="tel:18004733241"
                            className={`group flex items-center gap-2.5 px-4 py-2 rounded-full border transition-all duration-300 ${
                                scrolled
                                    ? 'border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30'
                                    : 'border-navy-200 bg-white shadow-sm hover:border-accent hover:shadow-md hover:-translate-y-0.5'
                            }`}
                        >
                            <div className={`flex items-center justify-center w-7 h-7 rounded-full transition-colors duration-300 ${
                                scrolled
                                    ? 'bg-accent/20 text-accent-light group-hover:bg-accent group-hover:text-white'
                                    : 'bg-accent/15 text-accent group-hover:bg-accent group-hover:text-white'
                            }`}>
                                <Phone className="h-3.5 w-3.5" />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                                <span className={`text-[9px] font-bold uppercase tracking-widest leading-none mb-0.5 whitespace-nowrap ${scrolled ? 'text-white/60' : 'text-navy-400'}`}>
                                    Questions? Call Us
                                </span>
                                <span className={`text-[15px] font-bold leading-none tracking-tight whitespace-nowrap ${scrolled ? 'text-white' : 'text-navy-900'}`}>
                                    (800) 473-3241
                                </span>
                            </div>
                        </a>
                        <a
                            href="#h-form"
                            className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-bold shadow-sm transition-all duration-300 ${
                                scrolled
                                    ? 'bg-accent text-primary hover:bg-accent-light hover:-translate-y-0.5 shadow-accent/20'
                                    : 'btn-accent shadow-accent/20'
                            }`}
                        >
                            Get a Free Quote
                        </a>
                    </div>

                    {/* Mobile hamburger */}
                    <div className="xl:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            type="button"
                            className={`p-2.5 rounded-lg focus:outline-none transition-colors ${scrolled ? 'text-white hover:bg-white/10' : 'text-navy-800 hover:bg-navy-50'}`}
                        >
                            <span className="sr-only">Open menu</span>
                            <Menu className="h-7 w-7" />
                        </button>
                    </div>
                </motion.div>
                </div>
            </motion.div>

            {/* Mobile Full-Screen Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="xl:hidden fixed inset-0 z-[60] flex flex-col overflow-x-hidden overflow-y-auto bg-navy-950"
                    >
                        {/* Decorative gradient */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/10 rounded-full blur-[100px]" />
                        </div>

                        {/* Header */}
                        <div className="relative flex items-center justify-between p-6 border-b border-white/5">
                            <Link href="/" onClick={() => navigate('/')} className="flex items-center rounded-full ring-2 ring-white/20">
                                <Logo />
                            </Link>
                            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-white/60 hover:text-white rounded-lg transition-colors">
                                <X className="h-7 w-7" />
                            </button>
                        </div>

                        {/* Links */}
                        <motion.div
                            initial="hidden"
                            animate="show"
                            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
                            className="relative flex-grow flex flex-col justify-center px-6 py-8 space-y-1"
                        >
                            {navLinks.map((link) => {
                                const active = isActive(link);
                                const mobileOpen = openDropdown === link.name;
                                return (
                                    <motion.div
                                        key={link.name}
                                        variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } } }}
                                    >
                                        {link.dropdown ? (
                                            <div>
                                                <button
                                                    onClick={() => setOpenDropdown(mobileOpen ? null : link.name)}
                                                    className={`w-full flex items-center justify-between py-3 px-4 rounded-lg transition-colors text-2xl font-display font-bold ${active || mobileOpen ? 'text-accent' : 'text-white/80 hover:text-white hover:bg-white/5'}`}
                                                >
                                                    {link.name}
                                                    <ChevronDown className={`h-6 w-6 transition-transform duration-300 ${mobileOpen ? 'rotate-180 text-accent' : 'text-white/30'}`} />
                                                </button>
                                                <AnimatePresence>
                                                    {mobileOpen && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="ml-4 mt-2 mb-2 pl-4 border-l-2 border-accent/30 space-y-1">
                                                                {(link.dropdown === 'plans'
                                                                    ? planColumns.flatMap(c => c.plans)
                                                                    : forOptions
                                                                ).map((item) => (
                                                                    <a
                                                                        key={item.name}
                                                                        href={item.href}
                                                                        onClick={() => navigate(item.href)}
                                                                        className={`block py-2 px-3 rounded-lg text-base font-medium transition-colors ${currentPath === item.href ? 'text-accent' : 'text-white/60 hover:text-white'}`}
                                                                    >
                                                                        {item.name}
                                                                    </a>
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <a
                                                href={link.href}
                                                onClick={() => navigate(link.href)}
                                                className={`block w-full py-3 px-4 rounded-lg text-2xl font-display font-bold transition-colors ${active ? 'text-accent' : 'text-white/80 hover:text-white hover:bg-white/5'}`}
                                            >
                                                {link.name}
                                            </a>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* Footer CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="relative p-6 border-t border-white/5 space-y-4"
                        >
                            <a
                                href="#h-form"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="btn-accent block w-full py-4 text-center text-base font-bold rounded-2xl transition-colors shadow-lg shadow-accent/20"
                            >
                                Get a Free Quote
                            </a>
                            <a href="tel:18004733241" className="flex items-center justify-center gap-2 text-white/60 hover:text-white transition-colors">
                                <Phone className="h-4 w-4 text-accent" />
                                <span className="text-sm font-medium">1 (800) 473-3241</span>
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
