"use client";

import React, { useState, useEffect } from 'react'
import Image from 'next/image'


// Popup Component for "Be the First to Know"
const BlogSubscribePopup = ({ onClose }) => {
  return (
    // Added onClick handler to the transparent overlay div
    <div
      className="fixed inset-0 bg-transparent flex items-center justify-center z-50 p-4 font-inter"
      onClick={(e) => {
        // Close popup only if the click is on the overlay itself, not on its children
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-auto relative p-6 sm:p-8 text-center"> {/* Changed max-w-md to max-w-lg to increase width */}
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
          aria-label="Close popup"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Be the First to Know
        </h2>
        {/* Description */}
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          Get immediate updates on our newest blog posts. Whether it's the latest
          trends, helpful tips, or personal stories, you'll be the first to read them.
        </p>

        {/* Input and Button */}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <button className="bg-blue-500 text-white py-3 px-6 rounded-md font-semibold text-base hover:bg-blue-600 transition duration-300 shadow-md">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default function page() {

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000); // Show popup after 3 seconds

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div>
       <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50 overflow-hidden">
      {/* Subtle background pattern for unique texture */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm10 10v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm-20 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm-10-10v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm30-10v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm-20-10v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm-10 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm30 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm-20-10v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm-10 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
      }}></div>

      <div className="relative z-10 max-w-5xl mx-auto bg-white p-8 sm:p-12 lg:p-16 rounded-3xl shadow-2xl border border-gray-100 text-gray-800">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 text-center leading-tight">
          Key Healthcare Industry Trends as We Approach 2025
        </h1>
        <p className="text-sm text-gray-500 text-center mb-10">
          Published on 16 September 2022
        </p>

        {/* Main Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <Image 
          width={600}
          height = {400}
            src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/Key-Healthcare-Industry-Trends-as-We-Approach.png" // Placeholder image URL
            alt="Healthcare Industry Trends"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Introduction */}
        <p className="text-lg leading-relaxed mb-8 text-gray-700">
          As 2025 nears, the healthcare industry continues to evolve, with significant trends reshaping care. Telemedicine has gained momentum, offering convenient virtual consultations. AI-driven assessments are helping individuals access the care they need, whether through telemedicine or self-guided mental health tools. The industry is also witnessing a shift towards value-based care, prioritizing outcomes over volume. Data security and interoperability are becoming paramount, ensuring holistic care. Moreover, wearable technology, sustainability, and value-based care are setting the stage for 2025, as healthcare providers focus on delivering high-quality, innovative care to their patients.
        </p>

        {/* Section 1: Telemedicine's Persistent Growth */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">1. Telemedicine&apos;s Persistent Growth</h2>
          <p className="text-lg leading-relaxed">
            Telemedicine remains a key healthcare delivery model, offering patients and providers convenience and remote care. With advancements in virtual diagnostics, real-time monitoring, and AI-driven tools, telemedicine has become an integrated, vital component of healthcare. This trend will continue to expand, especially in rural and underserved areas, providing essential care and mental health support.
          </p>
        </div>

        {/* Section 2: AI and Predictive Analytics in Full Swing */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">2. AI and Predictive Analytics in Full Swing</h2>
          <p className="text-lg leading-relaxed">
            AI has made its mark on healthcare in 2022 and will be even more critical in 2025. Predictive analytics tools powered by AI allow healthcare providers to identify at-risk patients, optimize treatment plans, and personalize care. This technology enhances diagnostic accuracy and operational efficiency. AI-powered imaging has also increased the accuracy of diagnostics by pinpointing diseases, enabling earlier detection and better patient outcomes.
          </p>
        </div>

        {/* Section 3: Personalized Medicine Continues to Revolutionize Care */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">3. Personalized Medicine Continues to Revolutionize Care</h2>
          <p className="text-lg leading-relaxed">
            Personalized medicine has become mainstream as genetic testing and AI technologies help tailor treatments to individual patients. Precision medicine, driven by advancements in genomics and data analytics, allows for more targeted therapies and improved patient outcomes. This approach will continue to enable healthcare providers to offer highly personalized care, improving treatment outcomes while reducing unnecessary side effects.
          </p>
        </div>

        {/* Section 4: Integration of Mental Health Services */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">4. Integration of Mental Health Services</h2>
          <p className="text-lg leading-relaxed">
            Mental health services are becoming increasingly integrated into primary care, with technology playing a significant role in providing support. AI-driven assessments are helping individuals access the care they need, whether through telemedicine or self-guided mental health tools. The integration of mental health services into primary care ensures holistic care for patients.
          </p>
        </div>

        {/* Section 5: Health Data Security Takes Center Stage */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">5. Health Data Security Takes Center Stage</h2>
          <p className="text-lg leading-relaxed">
            With the increasing digitization of health records and the rise of cyber threats throughout 2022, healthcare providers have found increasing pressure to adopt stringent data privacy measures and comply with evolving regulations. In 2025, this trend will continue as healthcare organizations prioritize robust cybersecurity frameworks to protect sensitive patient information and maintain trust.
          </p>
        </div>

        {/* Section 6: Wearable Technology and Continuous Monitoring */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">6. Wearable Technology and Continuous Monitoring</h2>
          <p className="text-lg leading-relaxed">
            Wearable technology, such as smartwatches and fitness trackers, have become ubiquitous in 2023, offering real-time monitoring of vital signs, activity levels, and sleep patterns. These devices empower individuals to take a more active role in managing their health. In 2025, wearable technology will continue to advance, with devices offering more sophisticated insights into conditions such as cardiovascular health, sleep disorders, and stress. This continuous monitoring capability will be expanded to help providers monitor their patients remotely, allowing for better proactive care.
          </p>
        </div>

        {/* Section 7: Sustainability in Healthcare */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">7. Sustainability in Healthcare</h2>
          <p className="text-lg leading-relaxed">
            Sustainability has emerged as a key focus in healthcare, with many organizations implementing eco-friendly practices in 2023, and this trend is set to continue into 2025. From reducing waste to optimizing energy use in hospitals, and leveraging telemedicine to minimize patient travel, healthcare is embracing sustainable solutions. This commitment to sustainability not only benefits the environment but also enhances the overall well-being of communities.
          </p>
        </div>

        {/* Section 8: The Continued Shift to Value-Based Care */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">8. The Continued Shift to Value-Based Care</h2>
          <p className="text-lg leading-relaxed">
            Value-based care, which rewards healthcare providers based on patient outcomes rather than the volume of services delivered, has continuously gained traction. This model incentivizes quality, efficiency, and patient-centered care. In 2025, the shift towards value-based care will accelerate, with more healthcare systems adopting this approach to improve patient health and control costs.
          </p>
        </div>

        {/* Conclusion */}
        <p className="text-lg leading-relaxed mb-4 text-gray-700">
          As we near 2025, the healthcare industry is poised for continued transformation. Trends such as telemedicine, AI, personalized medicine, and value-based care are reshaping how healthcare is delivered and experienced. These advancements promise a future where healthcare is more accessible, efficient, and patient-centric. Providers that stay ahead of these trends will be better positioned to deliver high-quality, innovative care to their patients.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          Staying informed will help ensure a positive impact on healthcare organizations striving for a rapidly changing landscape.
        </p>
        <p className="text-sm text-gray-500 mt-8">
          Published on 16 September 2022
        </p>

        {/* Tags Section */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Tags:</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Healthcare Trends</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Medical Innovation</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Future of Health</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Digital Health</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Patient Care</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Health Tech</span>
          </div>
        </div>
      </div>
    </section>
     {/* Render the popup if showPopup is true */}
        {showPopup && <BlogSubscribePopup onClose={() => setShowPopup(false)} />}
    </div>
  )
}
