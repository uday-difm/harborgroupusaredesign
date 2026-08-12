import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <>
         <title>Harbor Group USA | Health Plans & Broker Solutions</title>
        <meta name="keywords" content="health plans, small business health, individual health plans, broker solutions, healthcare coverage, benefits, group health, affordable health plans"/>        
        <meta name="description" content="Harbor Group USA offers tailored health plans for brokers, individuals, and small businesses. Get comprehensive coverage and expert support."/>
        <meta property="og:title" content="Harbor Group USA | Health Plans & Broker Solutions" />
        <meta property="og:description" content="Harbor Group USA offers tailored health plans for brokers, individuals, and small businesses. Get comprehensive coverage and expert support." />
        <link rel="canonical" href="https://harborgroupusa.com/for/" />
        <meta property="og:url" content="https://harborgroupusa.com/for/" />
        <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />
       <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50 overflow-hidden"></section>
       <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50 overflow-hidden">
      {/* Optional: Add a subtle overlay for visual texture or depth */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at top left, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at bottom right, rgba(19,30,73,0.05) 0%, transparent 50%)'
      }}></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Card for Broker */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-navy-100 transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-extrabold text-blue-600 mb-6 leading-tight">
              For Broker
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Harbor Group USA provides tailored health plan solutions to brokers, offering comprehensive packages to meet diverse client needs. Partnering with us allows brokers to access a wide range of plans, ensuring their clients receive top-tier healthcare coverage and benefits.
            </p>
          </div>
          <div className="mt-auto"> {/* Pushes button to the bottom */}
            <Link href="/for-brokers" className="btn-primary px-8 py-3 text-lg">
              Explore More
            </Link>
          </div>
        </div>

        {/* Card for Individual */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-navy-100 transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-extrabold text-blue-600 mb-6 leading-tight">
              For Individual
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Harbor Group USA offers individuals a variety of health plans designed to provide extensive coverage and flexibility. Our plans cater to different healthcare needs and budgets, ensuring you receive the best possible care and support for your well-being.
            </p>
          </div>
          <div className="mt-auto"> {/* Pushes button to the bottom */}
            <Link href = "/for-individuals" className="btn-primary px-8 py-3 text-lg">
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
