'use client';

import { useState } from 'react';
import CookieConsent from 'react-cookie-consent';
import Cookies from 'js-cookie';
import Link from 'next/link';

const CookiesBanner = () => {
  const [lang] = useState('en');

  // Updated function to handle both browser cookie and database storage
  const handleAccept = async () => {
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
        // Include userAgent and referrer in the request body
        body: JSON.stringify({
          consent: 'accepted',
          userAgent,
          referrer,
        }),
      });

      if (!response.ok) {
        console.error('Failed to record consent in database.');
      }
    } catch (error) {
      console.error('Error while sending consent to server:', error);
    }
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <CookieConsent
      location="bottom"
      enableDeclineButton
      buttonText="Accept"
      declineButtonText="Close"
      cookieName="cookieAccepted"
      style={{ background: '#000' }}
      buttonStyle={{
        background: '#00A6F4',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '16px',
        borderRadius: '6px',
        padding: '10px 24px',
      }}
      declineButtonStyle={{
        background: 'gray',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '16px',
        borderRadius: '6px',
        padding: '10px 24px',
      }}
      setDeclineCookie={false}
      onAccept={({ acceptedByScrolling }) => {
        if (!acceptedByScrolling) handleAccept();
      }}
    >
      <span className="text-white text-sm sm:text-base leading-relaxed">
        We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies.&nbsp;
        <Link
          href="/privacy-policy"
          className="underline text-sky-400 font-bold hover:text-sky-300 transition"
          onClick={scrollToTop}
        >
          Privacy Policy
        </Link>
        &nbsp;and&nbsp;
        <Link
          href="/terms-and-conditions"
          className="underline text-sky-400 font-bold hover:text-sky-300 transition"
          onClick={scrollToTop}
        >
          Terms & Conditions
        </Link>
      </span>
    </CookieConsent>
  );
};

export default CookiesBanner;
