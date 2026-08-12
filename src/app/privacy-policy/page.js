"use client";

import React from 'react';
import { LegalTemplate } from '@/common/LegalTemplate';

export default function PrivacyPolicyPage() {
  return (
    <>
      <title>Privacy Policy | Harbor Group USA</title>
      <meta name="keywords" content="Harbor Group USA, privacy policy, data protection, personal information, user privacy, website privacy, data usage policy, online security" />
      <meta name="description" content="Review Harbor Group USA's privacy policy to understand how we collect, use, and protect your personal information across our website and services." />
      <meta property="og:title" content="Privacy Policy | Harbor Group USA" />
      <meta property="og:description" content="Review Harbor Group USA's privacy policy to understand how we collect, use, and protect your personal information across our website and services." />
      <link rel="canonical" href="https://harborgroupusa.com/privacy-policy/" />
      <meta property="og:url" content="https://harborgroupusa.com/privacy-policy/" />
      <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />

      <LegalTemplate title="Privacy Policy">
        <div className="space-y-8">
          {/* Governing Law */}
          <div>
            <h2 className="text-h3 font-bold text-navy-800 mb-3">Governing Law</h2>
            <p className="text-base leading-relaxed text-navy-600">
              This Privacy Policy is governed by the laws of the United States.
            </p>
          </div>

          {/* The Harbor Group — Privacy Policy */}
          <div>
            <h2 className="text-h3 font-bold text-navy-800 mb-3">The Harbor Group — Privacy Policy</h2>
            <p className="text-base leading-relaxed text-navy-600">
              At The Harbor Group, we hold the privacy of our subscribers/users/viewers in high regard and are dedicated to safeguarding your personal information. Your trust is paramount, and we take our responsibility for your personal information seriously.
            </p>
          </div>

          {/* Collection and Use of Personal Information */}
          <div>
            <h2 className="text-h3 font-bold text-navy-800 mb-3">Collection and Use of Personal Information</h2>
            <p className="text-base leading-relaxed text-navy-600">
              When you subscribe to our email newsletter or any other subscription service, we collect personal information such as your email address, name, contact details, etc. This information is utilized to send you our email newsletter periodically and may be used to send promotional offers and updates about our products and services. We may also gather information about your preferences and interests to personalize our newsletter content for a better user experience.
            </p>
          </div>

          {/* Protection of Personal Information */}
          <div>
            <h2 className="text-h3 font-bold text-navy-800 mb-3">Protection of Personal Information</h2>
            <p className="text-base leading-relaxed text-navy-600">
              We prioritize the security of your personal information and have implemented robust security measures to prevent unauthorized access, use, or disclosure. Your personal information will not be shared with third parties without your explicit consent, except as required by law.
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-h3 font-bold text-navy-800 mb-3">Cookies</h2>
            <p className="text-base leading-relaxed text-navy-600">
              Our website uses cookies, also known as 'browser cookies,' to enhance your browsing experience. These cookies are essential for certain functions, such as shopping baskets and electronic invoicing. You can manage cookies through your web browser settings.
            </p>
          </div>

          {/* Changes to our Privacy Policy */}
          <div>
            <h2 className="text-h3 font-bold text-navy-800 mb-3">Changes to our Privacy Policy</h2>
            <p className="text-base leading-relaxed text-navy-600">
              We may update this Privacy Policy periodically to reflect changes in our practices or for operational, legal, or regulatory reasons. Material changes will be notified, and the updated policy will be available on our website.
            </p>
          </div>

          {/* Important Notice */}
          <div>
            <h2 className="text-h3 font-bold text-navy-800 mb-3">Important Notice</h2>
            <p className="text-base leading-relaxed text-navy-600">
              This Privacy Policy originates and is hosted on a website located in the United States. Different data protection laws may apply. Residents outside the United States acknowledge and consent to the collection, transmission, and storage of Personal Information outside their country of residence.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-h3 font-bold text-navy-800 mb-3">Contact Us</h2>
            <p className="text-base leading-relaxed text-navy-600">
              If you have any questions or concerns about our privacy policy, please contact us at <a href="mailto:doug@bhgsfl.com" className="text-accent hover:underline font-medium">doug@bhgsfl.com</a>.
            </p>
          </div>
        </div>
      </LegalTemplate>
    </>
  );
}
