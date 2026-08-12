import React from 'react'
import Link from 'next/link'

export const RXPlanHeroSection = () => {
  return (
    <>
    <section
      className="relative py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50" // Light gradient applied here
    >
      {/* Subtle background pattern for unique texture */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'url("https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/RX-plan-hero-section.jpeg")'
      }}></div>

      {/* Content Wrapper - Centralized and styled as a distinct card */}
      <div className="relative z-10 max-w-4xl mx-auto p-8 sm:p-12 lg:p-16 text-center">
        <h2 className="text-3xl sm:text-2xl lg:text-4xl font-display font-extrabold text-navy-800 leading-tight mb-6 drop-shadow-md">
          Affordable prescription plans for your medication needs
        </h2>
        <p className="text-lg sm:text-xl text-navy-500 leading-relaxed mb-10 opacity-90">
        Experience affordable health care with our Rx Plans at The Harbor Group. Tailored to cater to your medication needs, our Rx Plans provide a robust solution designed to alleviate the financial burden of prescription expenses.
        </p>
        <Link href="#rx-plan-form">
        <button className="btn-accent px-10 py-4 font-bold">
          Our Services
        </button>
        </Link>
      </div>
    </section>
    </>
  )
}
