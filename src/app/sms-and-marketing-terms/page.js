"use client";

import React from 'react';
import { LegalTemplate } from '@/comman/LegalTemplate';
import Link from 'next/link';

export default function SmsMarketingTermsPage() {
  return (
    <>
      <title>Terms & Conditions for SMS & Marketing | Harbor Group USA</title>
      <meta name="keywords" content="SMS terms, marketing terms, text messages, privacy policy, data protection, communication consent, opt-out, health plans, legal terms, terms of service"/>        
      <meta name="description" content="Understand Harbor Group USA's SMS and marketing communication terms. Get details on opting in/out and how your privacy is protected."/>
      <meta property="og:title" content="Terms & Conditions for SMS & Marketing | Harbor Group USA" />
      <meta property="og:description" content="Understand Harbor Group USA's SMS and marketing communication terms. Get details on opting in/out and how your privacy is protected." />
      <link rel="canonical" href="https://harborgroupusa.com/sms-and-marketing-terms/" />
      <meta property="og:url" content="https://harborgroupusa.com/sms-and-marketing-terms/" />
      <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />
       
      <LegalTemplate title="SMS and Marketing Terms and Conditions">
        <div className="space-y-8">
          {/* Section 1: Introduction */}
          <div>
            <h2 className="text-h3 font-bold text-navy-800 mb-3">1. Introduction</h2>
            <p className="text-base leading-relaxed text-navy-600">
              Welcome to The Harbor Group. These Terms and Conditions govern your use of our SMS (Short Message Service) and marketing communications. By opting into our SMS and marketing services, you agree to these Terms and Conditions in full. If you disagree with these terms or any part of these terms, you must not use our services.
            </p>
          </div>

          {/* Section 2: SMS Services. Opt-In */}
          <div>
            <h2 className="text-h3 font-bold text-navy-800 mb-3">2. SMS Services. Opt-In</h2>
            <ul className="list-disc list-inside space-y-3 text-base leading-relaxed text-navy-600">
              <li><span className="font-semibold text-navy-800">a. Messages:</span> As a subscriber to our SMS services, you agree to receive pre-programmed, automated messages regarding health plan and savings products, services, offers, promotions, and updates from The Harbor Group.</li>
              <li><span className="font-semibold text-navy-800">b. Cost:</span> Message and data rates may apply according to your mobile phone service provider.</li>
              <li><span className="font-semibold text-navy-800">c. Opt-Out:</span> You can opt out of our SMS services at any time by calling our helpline or emailing us at <a href="mailto:smsunsubscribe@harborgroupusa.com" className="text-accent hover:underline font-medium">smsunsubscribe@harborgroupusa.com</a>. After opting out, you will receive one final message confirming your opt-out within 48 hours of your opt-out!</li>
            </ul>
          </div>

          {/* Section 3: Marketing Communications */}
          <div>
            <h2 className="text-h3 font-bold text-navy-800 mb-3">3. Marketing Communications</h2>
            <ul className="list-disc list-inside space-y-3 text-base leading-relaxed text-navy-600">
              <li><span className="font-semibold text-navy-800">a. Consent:</span> By providing your contact information, you agree to receive marketing communications from us about our insurance products, services, and offers through various channels, including but not limited to email, phone calls, and postal mail.</li>
              <li><span className="font-semibold text-navy-800">b. Unsubscribe:</span> You may unsubscribe from our marketing communications at any time by following the unsubscribe link in our emails, contacting us directly, or using the methods described in our communications.</li>
            </ul>
          </div>

          {/* Section 4: Data Protection and Privacy */}
          <div>
            <h2 className="text-h3 font-bold text-navy-800 mb-3">4. Data Protection and Privacy</h2>
            <p className="text-base leading-relaxed text-navy-600">
              Your privacy is important to us. All personal information collected through our SMS and marketing services will be handled in accordance with our Privacy Policy, which outlines how we collect, use, and protect your personal information. Please refer to our <Link href="/privacy-policy" className="text-accent hover:underline font-medium">Privacy Policy</Link> for more details.
            </p>
          </div>

          {/* Section 5: Changes to Terms and Conditions */}
          <div>
            <h2 className="text-h3 font-bold text-navy-800 mb-3">5. Changes to Terms and Conditions</h2>
            <p className="text-base leading-relaxed text-navy-600">
              We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our SMS and marketing services after such changes constitutes your acceptance of the new Terms and Conditions.
            </p>
          </div>

          {/* Section 6: Governing Law */}
          <div>
            <h2 className="text-h3 font-bold text-navy-800 mb-3">6. Governing Law</h2>
            <p className="text-base leading-relaxed text-navy-600">
              These Terms and Conditions are governed by State of Florida without regard to its conflict of law provisions.
            </p>
          </div>

          {/* Section 7: Contact Us */}
          <div>
            <h2 className="text-h3 font-bold text-navy-800 mb-3">7. Contact Us</h2>
            <p className="text-base leading-relaxed text-navy-600">
              For any questions or concerns regarding these Terms and Conditions, please contact us at <a href="mailto:contact@harborgroupusa.com" className="text-accent hover:underline font-medium">contact@harborgroupusa.com</a>
            </p>
          </div>
        </div>
      </LegalTemplate>
    </>
  );
}
