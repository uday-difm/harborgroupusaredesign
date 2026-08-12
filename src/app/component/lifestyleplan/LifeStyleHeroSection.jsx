"use client";
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export const LifeStyleHeroSection = () => {
  return (
    <>
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <Image
        width= {600}
        height = {400}
          className="absolute inset-0 w-full  object-contain"
          src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/lifestyleplan-section.jpeg"
          alt="Person enjoying a healthy lifestyle"
        />
        {/* Gradient Overlay for better text readability and unique look */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-800 to-transparent opacity-80"></div>
        <div className="absolute inset-0 bg-navy-900 opacity-30"></div> {/* Additional dark overlay */}

        {/* Content */}
        <div className="relative z-10 text-center p-6 max-w-4xl mx-auto ">
          <p className="text-lg text-accent mb-2 font-semibold flex items-center justify-center">
            <span className="btn-accent px-10 py-4 font-bold"></span>
            Lifestyle Plans
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-display font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            Plans to support and enhance your lifestyle needs
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-md">
            Enhance your well-being with Lifestyle Plans at Harbor Group USA. These plans are meticulously designed to support and enhance your unique lifestyle needs. Going beyond conventional coverage, our Lifestyle Plans offer a customer-tailored approach to ensure that your health and lifestyle choices align seamlessly.
          </p>
          <Link href="#lifestyle-plan-form" className="btn-accent px-10 py-4 font-bold">
            GET NOW
          </Link>
        </div>
      </section>


      {/* Tailwind CSS Custom Animations */}</>
  )
}
