"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useLenis } from 'lenis/react';

const Link = ({ href, children, onClick, className }) => (
    <a href={href} onClick={onClick} className={className}>
        {children}
    </a>
);

const Image = ({ src, alt, className, width, height }) => (
    <img src={src} alt={alt} className={className} width={width} height={height} />
);

const Logo = () => (
    <Image
        width={600}
        height={400}
        src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor%20Logo.png"
        alt="Harbor Group USA Logo"
        className="h-11 md:h-13 w-auto"
    />
);

const navLinks = [
    { name: 'Home', href: '/' },
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

export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [openDesktopDropdown, setOpenDesktopDropdown] = useState(null);
    const [currentPath, setCurrentPath] = useState('');
    const [scrolled, setScrolled] = useState(false);
    const headerRef = useRef(null);
    const dropdownCloseTimeout = useRef(null);

    useEffect(() => {
        setCurrentPath(window.location.pathname);
        const handlePopState = () => setCurrentPath(window.location.pathname);
        window.addEventListener('popstate', handlePopState);
        
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    useLenis(({ scroll }) => {
        setScrolled(scroll > 20);
    });

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleMobileDropdown = (linkName) => {
        setOpenDropdown(openDropdown === linkName ? null : linkName);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (headerRef.current && !headerRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
                setOpenDesktopDropdown(null); 
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const isLinkActive = (link) => {
        if (currentPath === link.href) {
            return true;
        }
        if (link.dropdown) {
            return link.dropdown.some(item => item.href === currentPath);
        }
        return false;
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleDesktopMouseEnter = (linkName) => {
        if (dropdownCloseTimeout.current) {
            clearTimeout(dropdownCloseTimeout.current);
            dropdownCloseTimeout.current = null;
        }
        setOpenDesktopDropdown(linkName);
    };

    const handleDesktopMouseLeave = () => {
        dropdownCloseTimeout.current = setTimeout(() => {
            setOpenDesktopDropdown(null);
        }, 200);
    };

    return (
        <motion.header 
            ref={headerRef} 
            className={`sticky top-0 z-50 font-body transition-all duration-150 ease-out ${scrolled ? 'py-4 px-4 sm:px-8 lg:px-12' : 'py-0 px-0'}`}
        >
            <motion.div 
                initial={false}
                animate={{
                    borderRadius: scrolled ? 9999 : 0,
                    backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.9)',
                    boxShadow: scrolled ? '0 8px 30px rgba(0,0,0,0.08)' : '0 0px 0px rgba(0,0,0,0)',
                    borderColor: scrolled ? 'rgba(255, 255, 255, 0.6)' : 'rgba(19, 30, 73, 0.1)'
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                className={`mx-auto w-full backdrop-blur-xl border transition-all duration-150 ease-out ${
                    scrolled 
                        ? 'max-w-7xl px-6' 
                        : 'border-b px-6 lg:px-12 xl:px-20 2xl:px-32'
                }`}
            >
                <div className={`flex items-center justify-between transition-all duration-150 ease-out ${scrolled ? 'h-16 md:h-20' : 'h-20 md:h-24'}`}>
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group" onClick={scrollToTop}>
                            <Logo />
                            <div className="flex flex-col justify-center leading-none">
                                <span className="font-display text-sm sm:text-base font-bold tracking-tight text-navy-900 group-hover:text-accent transition-colors">
                                    Harbor Group
                                </span>
                                <span className="font-display text-[11px] sm:text-xs font-extrabold tracking-[0.2em] text-accent group-hover:text-navy-900 transition-colors uppercase mt-0.5">
                                    USA
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden xl:flex xl:items-center xl:flex-grow xl:justify-center xl:space-x-8">
                        {navLinks.map((link) => {
                            const isActive = isLinkActive(link);
                            const isOpen = openDesktopDropdown === link.name;
                            return (
                                <div
                                    key={link.name}
                                    className="relative group"
                                    onMouseEnter={() => handleDesktopMouseEnter(link.name)}
                                    onMouseLeave={handleDesktopMouseLeave}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={scrollToTop}
                                        className={`relative px-3 py-2 text-base font-semibold transition-colors duration-300 ${isActive ? 'text-accent' : 'text-navy-800'} hover:text-accent flex items-center focus:outline-none`}
                                    >
                                        {link.name}
                                        {link.dropdown && (
                                            <ChevronDown
                                                className={`ml-1.5 h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent' : 'text-navy-400'}`}
                                            />
                                        )}
                                        {(isActive || isOpen) && (
                                            <motion.span
                                                layoutId="nav-underline"
                                                className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-accent rounded-full"
                                                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                    <AnimatePresence>
                                        {link.dropdown && isOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.98, y: 4 }}
                                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.98, y: 4 }}
                                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                                className={`absolute z-20 left-1/2 -translate-x-1/2 mt-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-navy-100/80 ${link.name === 'Plans' ? 'w-[640px] p-6' : 'w-56 p-2'}`}
                                                onMouseEnter={() => handleDesktopMouseEnter(link.name)}
                                                onMouseLeave={handleDesktopMouseLeave}
                                            >
                                                {link.name === 'Plans' ? (
                                                    <div className="grid grid-cols-3 gap-8">
                                                        <div>
                                                            <h4 className="text-[10px] font-bold text-accent uppercase tracking-widest mb-3 pl-4">Health & Medical</h4>
                                                            <div className="space-y-1">
                                                                <Link onClick={() => { scrollToTop(); setCurrentPath('/medical-plan'); }} href="/medical-plan" className="block w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition-colors text-navy-700 hover:bg-navy-50 hover:text-navy-900">Medical</Link>
                                                                <Link onClick={() => { scrollToTop(); setCurrentPath('/dental-care-plan'); }} href="/dental-care-plan" className="block w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition-colors text-navy-700 hover:bg-navy-50 hover:text-navy-900">Dental</Link>
                                                                <Link onClick={() => { scrollToTop(); setCurrentPath('/vision-plan'); }} href="/vision-plan" className="block w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition-colors text-navy-700 hover:bg-navy-50 hover:text-navy-900">Vision</Link>
                                                                <Link onClick={() => { scrollToTop(); setCurrentPath('/rx-plan'); }} href="/rx-plan" className="block w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition-colors text-navy-700 hover:bg-navy-50 hover:text-navy-900">Rx</Link>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h4 className="text-[10px] font-bold text-accent uppercase tracking-widest mb-3 pl-4">Life & Future</h4>
                                                            <div className="space-y-1">
                                                                <Link onClick={() => { scrollToTop(); setCurrentPath('/term-life'); }} href="/term-life" className="block w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition-colors text-navy-700 hover:bg-navy-50 hover:text-navy-900">Term Life</Link>
                                                                <Link onClick={() => { scrollToTop(); setCurrentPath('/critical-plan'); }} href="/critical-plan" className="block w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition-colors text-navy-700 hover:bg-navy-50 hover:text-navy-900">Critical Illness</Link>
                                                                <Link onClick={() => { scrollToTop(); setCurrentPath('/hospital-plan'); }} href="/hospital-plan" className="block w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition-colors text-navy-700 hover:bg-navy-50 hover:text-navy-900">Hospital</Link>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h4 className="text-[10px] font-bold text-accent uppercase tracking-widest mb-3 pl-4">Specialty</h4>
                                                            <div className="space-y-1">
                                                                <Link onClick={() => { scrollToTop(); setCurrentPath('/accident-plan'); }} href="/accident-plan" className="block w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition-colors text-navy-700 hover:bg-navy-50 hover:text-navy-900">Accident</Link>
                                                                <Link onClick={() => { scrollToTop(); setCurrentPath('/lifestyle-plan'); }} href="/lifestyle-plan" className="block w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition-colors text-navy-700 hover:bg-navy-50 hover:text-navy-900">Lifestyle</Link>
                                                                <Link onClick={() => { scrollToTop(); setCurrentPath('/pet-plan'); }} href="/pet-plan" className="block w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition-colors text-navy-700 hover:bg-navy-50 hover:text-navy-900">Pet Coverage</Link>
                                                                <Link onClick={() => { scrollToTop(); setCurrentPath('/bundles-plan'); }} href="/bundles-plan" className="block w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition-colors text-navy-700 hover:bg-navy-50 hover:text-navy-900">Value Bundles</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="grid grid-cols-1 gap-1">
                                                        {link.dropdown.map((item) => (
                                                            <Link
                                                                onClick={() => { scrollToTop(); setCurrentPath(item.href); }}
                                                                key={item.name}
                                                                href={item.href}
                                                                className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${currentPath === item.href ? 'bg-navy-50 text-accent font-semibold' : 'text-navy-700 hover:bg-navy-50 hover:text-navy-900'}`}
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </nav>

                    {/* Right Phone Call CTA */}
                    <div className="hidden xl:flex items-center space-x-3">
                        <a href="#h-form" className="btn-accent px-5 py-2.5 text-sm font-bold rounded-full transition-all shadow-md hover:shadow-lg">
                            Get a Free Quote
                        </a>
                        <a href="tel:18004733241" className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full border border-navy-200/80 bg-navy-50/50 text-navy-800 hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 shadow-sm" title="Call Us: 1 (800) 473-3241">
                            <Phone className="h-4 w-4" />
                        </a>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <div className="xl:hidden flex items-center">
                        <button onClick={toggleMobileMenu} type="button" className="p-2.5 rounded-xl text-navy-800 hover:bg-navy-50 focus:outline-none">
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? <X className="block h-7 w-7" /> : <Menu className="block h-7 w-7" />}
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Mobile Menu Full-Screen Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="xl:hidden fixed inset-0 bg-navy-950 z-50 overflow-y-auto flex flex-col" 
                        id="mobile-menu"
                    >
                        {/* Mobile Menu Header */}
                        <div className="flex items-center justify-between p-6">
                            <Link href="/" onClick={() => { toggleMobileMenu(); scrollToTop(); setCurrentPath('/'); }} className="flex items-center gap-3 group">
                                <div><Logo /></div>
                                <div className="flex flex-col justify-center leading-none">
                                    <span className="font-display text-base font-bold tracking-tight text-white group-hover:text-accent transition-colors">
                                        Harbor Group
                                    </span>
                                    <span className="font-display text-xs font-extrabold tracking-[0.2em] text-accent group-hover:text-white transition-colors uppercase mt-0.5">
                                        USA
                                    </span>
                                </div>
                            </Link>
                            <button onClick={toggleMobileMenu} className="p-2 text-white hover:text-accent rounded-lg transition-colors">
                                <X className="h-8 w-8" />
                            </button>
                        </div>

                        {/* Mobile Menu Links */}
                        <motion.div 
                            initial="hidden"
                            animate="show"
                            variants={{
                                hidden: {},
                                show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
                            }}
                            className="flex-grow flex flex-col justify-center px-8 py-4 space-y-6"
                        >
                            {navLinks.map((link) => {
                                const isActive = isLinkActive(link);
                                return (
                                    <motion.div 
                                        variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
                                        key={link.name}
                                    >
                                        <div className="flex flex-col">
                                            {link.dropdown ? (
                                                <button
                                                    onClick={() => handleMobileDropdown(link.name)}
                                                    className={`w-full flex items-center justify-between text-left text-3xl font-display font-bold transition-colors ${isActive || openDropdown === link.name ? 'text-accent' : 'text-white hover:text-navy-200'}`}
                                                >
                                                    {link.name}
                                                    <ChevronDown className={`h-6 w-6 transition-transform duration-300 ${openDropdown === link.name ? 'rotate-180 text-accent' : 'text-navy-400'}`} />
                                                </button>
                                            ) : (
                                                <Link
                                                    href={link.href}
                                                    className={`w-full text-left text-3xl font-display font-bold transition-colors ${isActive ? 'text-accent' : 'text-white hover:text-navy-200'}`}
                                                    onClick={() => { toggleMobileMenu(); scrollToTop(); setCurrentPath(link.href); }}
                                                >
                                                    {link.name}
                                                </Link>
                                            )}
                                            
                                            <AnimatePresence>
                                                {link.dropdown && openDropdown === link.name && (
                                                    <motion.div 
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="pt-4 pb-2 pl-4 space-y-4 border-l-2 border-accent/40 mt-4">
                                                            {link.dropdown.map(item => (
                                                                <Link
                                                                    key={item.name}
                                                                    href={item.href}
                                                                    onClick={() => { toggleMobileMenu(); scrollToTop(); setCurrentPath(item.href); }}
                                                                    className={`block text-lg font-medium transition-colors ${currentPath === item.href ? 'text-accent' : 'text-navy-300 hover:text-white'}`}
                                                                >
                                                                    {item.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* Mobile Menu Footer */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="p-8 mt-auto flex flex-col gap-6"
                        >
                            <a href="#h-form" onClick={toggleMobileMenu} className="btn-accent w-full py-4 text-center text-lg font-bold rounded-full shadow-lg">
                                Get a Free Quote
                            </a>
                            <div className="flex items-center justify-center gap-3">
                                <Phone className="h-5 w-5 text-accent" />
                                <a href="tel:18004733241" className="text-white font-bold text-lg">1 (800) 473-3241</a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
