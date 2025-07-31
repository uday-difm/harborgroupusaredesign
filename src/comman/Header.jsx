import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react'; // Assuming lucide-react is available
import Link from 'next/link'; // Using next/link for navigation

const Logo = () => (
    // Replaced next/image with standard <img> tag
    <img
        src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor%20Logo.png"
        alt="Harbor Group USA Logo"
        className="h-12 md:h-14 w-auto" // Tailwind classes for responsive sizing
    />
);

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about-health' },
    { name: 'Major Medical', href: '/major-medical-plan' },
    {
        name: 'Plans',
        href: '/health-plans', // This link won't be matched directly for dropdown toggle
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
        href: '/for', // This link won't be matched directly for dropdown toggle
        dropdown: [
            { name: 'For Brokers', href: '/for-brokers' },
            { name: 'For Individuals', href: '/for-individuals' },
        ]
    },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '/contact' },
];

// --- Main Header Component ---
export const Header = () =>{ // Changed to default export for Canvas environment
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null); // State for mobile dropdowns
    const [openDesktopDropdown, setOpenDesktopDropdown] = useState(null); // State for desktop dropdowns
    const [currentPath, setCurrentPath] = useState('');
    const headerRef = useRef(null);
    const dropdownCloseTimeout = useRef(null); // Ref to store the timeout ID

    // Effect to get the current path on component mount
    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    // Function to toggle the mobile menu open/close
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Function to handle mobile dropdown toggling
    const handleMobileDropdown = (linkName) => {
        setOpenDropdown(openDropdown === linkName ? null : linkName);
    };

    // Effect to close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (headerRef.current && !headerRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Effect to control body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    // Define color palette using Tailwind classes
    const colors = {
        primary: 'text-indigo-900',
        accent: 'text-sky-500',
        accentBg: 'bg-sky-500',
        accentBgHover: 'hover:bg-sky-600',
        underline: 'bg-sky-500',
    };

    // Function to determine if a link is active based on current path
    const isLinkActive = (link) => {
        if (currentPath === link.href) {
            return true;
        }
        if (link.dropdown) {
            return link.dropdown.some(item => item.href === currentPath);
        }
        return false;
    };

    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Function to handle mouse enter for desktop dropdowns
    const handleDesktopMouseEnter = (linkName) => {
        if (dropdownCloseTimeout.current) {
            clearTimeout(dropdownCloseTimeout.current);
            dropdownCloseTimeout.current = null;
        }
        setOpenDesktopDropdown(linkName);
    };

    // Function to handle mouse leave for desktop dropdowns with a delay
    const handleDesktopMouseLeave = () => {
        dropdownCloseTimeout.current = setTimeout(() => {
            setOpenDesktopDropdown(null);
        }, 200); // 200ms delay
    };

    return (
        <header ref={headerRef} className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-200 font-inter">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 md:h-24">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        {/* Replaced next/link with standard <a> tag */}
                        <a href="/" className="flex items-center" onClick={scrollToTop}>
                            <Logo />
                        </a>
                    </div>

                    {/* --- Desktop Navigation --- */}
                    <nav className="hidden lg:flex lg:items-center lg:flex-grow lg:justify-center lg:space-x-8">
                        {navLinks.map((link) => {
                            const isActive = isLinkActive(link);
                            const isOpen = openDesktopDropdown === link.name;

                            return (
                                <div
                                    key={link.name}
                                    className="relative group"
                                    // Handle desktop dropdown on hover with delayed close
                                    onMouseEnter={() => handleDesktopMouseEnter(link.name)}
                                    onMouseLeave={handleDesktopMouseLeave}
                                >
                                    {/* Replaced next/link with standard <a> tag */}
                                    <Link 
                                        href={link.href}
                                        onClick={scrollToTop} // Scroll to top on click
                                        className={`relative px-2 py-2 text-base font-semibold transition-colors duration-300 ${isActive ? colors.accent : colors.primary
                                            } hover:${colors.accent} flex items-center focus:outline-none`}
                                    >
                                        {link.name}
                                        {link.dropdown && (
                                            <ChevronDown
                                                className={`ml-1.5 h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        )}
                                        {/* Underline animation */}
                                        <span
                                            className={`absolute -bottom-1 left-0 w-full h-0.5 ${colors.underline
                                                } transform scale-x-0 transition-transform duration-300 ease-out ${isActive || isOpen ? 'scale-x-100' : ''
                                                }`}
                                        />
                                    </Link>

                                    {/* Desktop Dropdown Menu */}
                                    {link.dropdown && isOpen && (
                                        <div
                                            className="absolute z-20 left-1/2 -translate-x-1/2 mt-4 w-56 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                                            // Keep dropdown open if mouse enters it
                                            onMouseEnter={() => handleDesktopMouseEnter(link.name)}
                                            onMouseLeave={handleDesktopMouseLeave}
                                        >
                                            <div className="py-2">
                                                {link.dropdown.map((item) => (
                                                    // Replaced next/link with standard <a> tag
                                                    <Link
                                                        onClick={scrollToTop} // Scroll to top on click
                                                        key={item.name}
                                                        href={item.href}
                                                        className={`block w-full text-left px-4 py-2 text-sm ${currentPath === item.href ? colors.accent : colors.primary
                                                            } hover:bg-gray-100 hover:${colors.accent}`}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </nav>

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
                        <button onClick={toggleMobileMenu} type="button" className={`p-2 rounded-md ${colors.primary} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500`}>
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? <X className="block h-7 w-7" /> : <Menu className="block h-7 w-7" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* --- Mobile Menu --- */}
            {/* Overlay for mobile menu */}
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity lg:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMobileMenu}></div>

            {/* Mobile Menu Content */}
            <div className={`lg:hidden fixed top-0 left-0 h-full w-full max-w-xs bg-white z-40 shadow-xl transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`} id="mobile-menu">
                <div className="flex flex-col h-full">
                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between p-4 border-b">
                        <a href="/" onClick={() => { toggleMobileMenu(); scrollToTop(); }}><Logo /></a>
                        <button onClick={toggleMobileMenu} className="p-2">
                            <X className="h-7 w-7 text-gray-600" />
                        </button>
                    </div>

                    {/* Mobile Menu Links */}
                    <div className="flex-grow overflow-y-auto p-4 space-y-2">
                        {navLinks.map((link) => {
                            const isActive = isLinkActive(link);
                            return (
                                <div key={link.name}>
                                    <div className="flex justify-between items-center rounded-md hover:bg-gray-50">
                                        {link.dropdown ? (
                                            // For dropdown parents, clicking the button (text area) toggles the dropdown
                                            <button
                                                onClick={() => handleMobileDropdown(link.name)}
                                                className={`w-full text-left block px-3 py-3 text-lg font-semibold ${isActive ? colors.accent : colors.primary}`}
                                            >
                                                {link.name}
                                            </button>
                                        ) : (
                                            // For regular links, clicking navigates and closes the menu
                                            <Link
                                                href={link.href}
                                                className={`w-full text-left block px-3 py-3 text-lg font-semibold ${isActive ? colors.accent : colors.primary}`}
                                                onClick={() => { toggleMobileMenu(); scrollToTop(); }}
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                        {link.dropdown && (
                                            // Chevron button to explicitly toggle dropdown
                                            <button onClick={() => handleMobileDropdown(link.name)} className="p-3 text-slate-500">
                                                <ChevronDown className={`h-6 w-6 transition-transform duration-300 ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                                            </button>
                                        )}
                                    </div>
                                    {link.dropdown && openDropdown === link.name && (
                                        <div className="pl-6 mt-1 space-y-1 border-l-2 border-sky-100">
                                            {link.dropdown.map(item => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    onClick={() => { toggleMobileMenu(); scrollToTop(); }} // Close menu and scroll to top
                                                    className={`block px-3 py-2 rounded-md text-base font-medium ${currentPath === item.href ? 'text-sky-600 font-semibold' : 'text-slate-600'} hover:bg-gray-100 hover:text-sky-600`}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Footer (Contact) */}
                    <div className="p-4 border-t border-gray-200">
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
            </div>
        </header>
    );
}
