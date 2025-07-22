import React from 'react'
import Image from 'next/image'

export const PharmacyNetworkSection = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50 overflow-hidden">
      {/* Optional: Add a subtle overlay for visual texture or depth */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at top left, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at bottom right, rgba(0,0,0,0.05) 0%, transparent 50%)'
      }}></div>

      <div className="relative max-w-7xl mx-auto  overflow-hidden ">
        <div className="grid grid-cols-1 lg:grid-cols-2">
            
          {/* Left Column: Image Section with enhanced animation */}
          <div className="relative h-96 lg:h-auto rounded-3xl overflow-hidden  group transform transition-all duration-500 hover:rotate-1 hover:shadow-3xl">
            <Image 
            width = {600}
            height = {400}
              src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/RX-plan.jpg" 
              alt="Pharmacist handing prescription"
              className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            {/* Optional: Image overlay for text or branding */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
    
          </div>
          {/* Right Column: Content Section - Dynamic Feature Cards */}
          <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center text-gray-900">
            <h2 className="text-4xl font-extrabold mb-6 leading-tight text-indigo-900">
              Network
            </h2>
            <p className="text-lg leading-relaxed mb-10 text-gray-600">
              Accessing support for your medication needs is seamless with our extensive network of experienced professionals.
            </p>

            <div className="space-y-8"> {/* Changed to space-y for vertical stacking with distinct cards */}
              {/* Qualified Pharmacy Professionals Feature Card */}
              <div className="flex items-start bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <div className="bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full p-3 mr-4 flex-shrink-0 inline-flex items-center justify-center">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Qualified Pharmacy Professionals</h3>
                  <p className="text-base text-gray-600">
                    Ensure tailored guidance for your unique medication requirements.
                  </p>
                </div>
              </div>

              {/* Nationwide Coverage Feature Card */}
              <div className="flex items-start bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <div className="bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full p-3 mr-4 flex-shrink-0 inline-flex items-center justify-center">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5M3 17h9m9 0V5a2 2 0 00-2-2h-2.5M21 17h-9m0 0v4m0-4h.5M9 17H7m7 0h2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Nationwide Coverage</h3>
                  <p className="text-base text-gray-600">
                    Find a qualified pharmacy conveniently, ensuring accessibility for your medication needs.
                  </p>
                </div>
              </div>

              {/* Dedicated Support Feature Card */}
              <div className="flex items-start bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <div className="bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full p-3 mr-4 flex-shrink-0 inline-flex items-center justify-center">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 0A9.953 9.953 0 0112 5c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8c0-1.78-.58-3.43-1.55-4.764zM12 17a4 4 0 100-8 4 4 0 000 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Dedicated Support</h3>
                  <p className="text-base text-gray-600">
                    Our support team is ready to assist in connecting you with in-network pharmacies.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
