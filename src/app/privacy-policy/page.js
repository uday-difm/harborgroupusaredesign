
"use client";
import React from 'react'

export default function page() {
 return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-inter overflow-hidden">
      <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-5xl w-full text-left transform transition-all duration-700 ease-out animate-fade-in-up">

        {/* Decorative Blob/Shape */}
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-sky-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob-1 hidden md:block"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob-2 hidden md:block"></div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8 leading-tight animate-slide-in-top">
          Privacy <span className="text-blue-700">Policy</span>
        </h1>

        <div className="space-y-8 text-gray-700 animate-fade-in-delay-text">
          {/* Governing Law */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Governing Law</h2>
            <p className="text-base leading-relaxed">
              This Privacy Policy is governed by the laws of the United States.
            </p>
          </div>

          {/* The Harbor Group — Privacy Policy */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">The Harbor Group — Privacy Policy</h2>
            <p className="text-base leading-relaxed">
              At The Harbor Group, we hold the privacy of our subscribers/users/viewers in high regard and are dedicated to safeguarding your personal information. Your trust is paramount, and we take our responsibility for your personal information seriously.
            </p>
          </div>

          {/* Collection and Use of Personal Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Collection and Use of Personal Information</h2>
            <p className="text-base leading-relaxed">
              When you subscribe to our email newsletter or any other subscription service, we collect personal information such as your email address, name, contact details, etc. This information is utilized to send you our email newsletter periodically and may be used to send promotional offers and updates about our products and services. We may also gather information about your preferences and interests to personalize our newsletter content for a better user experience.
            </p>
          </div>

          {/* Protection of Personal Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Protection of Personal Information</h2>
            <p className="text-base leading-relaxed">
              We prioritize the security of your personal information and have implemented robust security measures to prevent unauthorized access, use, or disclosure. Your personal information will not be shared with third parties without your explicit consent, except as required by law.
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Cookies</h2>
            <p className="text-base leading-relaxed">
              Our website uses cookies, also known as &apos; browser cookies,&apos; to enhance your browsing experience. These cookies are essential for certain functions, such as shopping baskets and electronic invoicing. You can manage cookies through your web browser settings.
            </p>
          </div>

          {/* Changes to our Privacy Policy */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Changes to our Privacy Policy</h2>
            <p className="text-base leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes in our practices or for operational, legal, or regulatory reasons. Material changes will be notified, and the updated policy will be available on our website.
            </p>
          </div>

          {/* Important Notice */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Important Notice</h2>
            <p className="text-base leading-relaxed">
              This Privacy Policy originates and is hosted on a website located in the United States. Different data protection laws may apply. Residents outside the United States acknowledge and consent to the collection, transmission, and storage of Personal Information outside their country of residence.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Contact Us</h2>
            <p className="text-base leading-relaxed">
              If you have any questions or concerns about our privacy policy, please contact us at <a href="mailto:doug@bhgsfl.com" className="text-blue-600 hover:underline">doug@bhgsfl.com</a>.
            </p>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInTop {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDelayText {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes blob1 {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); }
          30% { transform: translateY(-10px) translateX(15px) scale(1.1); }
          60% { transform: translateY(5px) translateX(-10px) scale(0.9); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); }
          40% { transform: translateY(10px) translateX(-15px) scale(1.1); }
          70% { transform: translateY(-5px) translateX(10px) scale(0.9); }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-slide-in-top {
          animation: slideInTop 0.7s ease-out forwards;
        }
        .animate-fade-in-delay-text {
          animation: fadeInDelayText 1s ease-out forwards;
          animation-delay: 0.3s;
          opacity: 0;
        }
        .animate-blob-1 {
          animation: blob1 10s infinite alternate ease-in-out;
        }
        .animate-blob-2 {
          animation: blob2 12s infinite alternate-reverse ease-in-out;
        }
      `}</style>
    </div>
  );
}



