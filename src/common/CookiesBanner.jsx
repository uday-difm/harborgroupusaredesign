'use client';

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie } from 'lucide-react';

const CookiesBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Only show if the cookie isn't already set
    if (!Cookies.get('cookieAccepted')) {
      // Give visitors time to understand the page before asking for consent.
      const timer = setTimeout(() => setIsVisible(true), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = async () => {
    setIsVisible(false);
    // 1. Set the browser cookie
    Cookies.set('cookieAccepted', 'true', { expires: 365 });

    // 2. Collect and validate additional data
    const userAgent = (typeof navigator !== 'undefined' && navigator.userAgent) || null;
    const referrer = (typeof document !== 'undefined' && document.referrer) || null;

    // 3. Make an API call to store consent in the database
    try {
      const response = await fetch('/api/cookie-consent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          consent: 'accepted',
          userAgent,
          referrer,
        }),
      });

      if (!response.ok) {
        if (process.env.NODE_ENV === 'development') {

          console.error('Failed to record consent in database.');

        }
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {

        console.error('Error while sending consent to server:', error);

      }
    }
  };

  const handleDecline = () => {
    setIsVisible(false);
    Cookies.set('cookieAccepted', 'false', { expires: 365 });
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] max-w-[22rem] w-[calc(100%-2rem)] bg-white/95 backdrop-blur-md border border-navy-100 rounded-2xl shadow-xl overflow-hidden font-body"
        >
          <div className="p-5">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Cookie className="w-5 h-5 text-primary" />
                <h3 className="text-sm font-bold text-navy-900 tracking-wide">Cookie Preferences</h3>
              </div>
              <button 
                onClick={handleDecline}
                className="text-navy-500 hover:text-navy-900 transition-colors p-1 rounded-full hover:bg-navy-50"
                aria-label="Close cookie banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-navy-100 mb-4" />

            {/* Body */}
            <p className="text-sm text-navy-700 leading-relaxed mb-4">
              We use cookies to improve your experience and analyze traffic. By continuing, you agree to our{' '}
              <Link
                href="/privacy-policy"
                onClick={scrollToTop}
                className="text-primary underline hover:text-primary-hover font-semibold transition-colors"
              >
                Privacy Policy
              </Link>
              ,{' '}
              <Link
                href="/cookie-policy"
                onClick={scrollToTop}
                className="text-primary underline hover:text-primary-hover font-semibold transition-colors"
              >
                Cookie Policy
              </Link>{' '}
              and{' '}
              <Link
                href="/terms-and-conditions"
                onClick={scrollToTop}
                className="text-primary underline hover:text-primary-hover font-semibold transition-colors"
              >
                Terms
              </Link>.
            </p>

            {/* Actions */}
            <div className="flex items-center justify-end gap-4">
              <button
                onClick={handleDecline}
                className="text-sm font-medium text-navy-600 hover:text-navy-900 transition-all hover:bg-navy-50 rounded-full px-3 py-2"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="btn-primary px-4 py-2 rounded-full text-sm font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookiesBanner;
