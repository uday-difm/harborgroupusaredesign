import React from 'react'

export const RxEligibilitySection = () => {
  return (
    <>
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50 overflow-hidden">
      {/* Optional: Add a subtle overlay for visual texture or depth */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at top left, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at bottom right, rgba(0,0,0,0.05) 0%, transparent 50%)'
      }}></div>

      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-indigo-900 sm:text-5xl lg:text-6xl leading-tight mb-8">
          Eligibility Criteria of Rx
        </h2>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
         Accessing support for your medication needs is seamless with our extensive network of experienced professionals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Eligibility Card 1: Resident of the United States */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center">
            <div className="bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full p-3 mb-4 mx-auto flex items-center justify-center w-20 h-20">
              <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
             Resident of the United States                
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed opacity-90">
             Our Rx Plans are accessible to individuals and families residing in the United States
            </p>
          </div>

          {/* Eligibility Card 2: Age Eligibility */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center">
            <div className="bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full p-3 mb-4 mx-auto flex items-center justify-center w-20 h-20">
              <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Age Eligibility
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed opacity-90">
             Tailored to cover individuals aged 18 to 100 years, ensuring comprehensive coverage throughout various life stages
            </p>
          </div>

          {/* Eligibility Card 3: Citizenship */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center">
            <div className="bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full p-3 mb-4 mx-auto flex items-center justify-center w-20 h-20">
              <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H2v-2a3 3 0 015.356-1.857M17 20v-2c0-.653-.134-1.272-.387-1.838M12 12a3 3 0 100-6 3 3 0 000 6zm2 1.933A5.976 5.976 0 0112 18a5.976 5.976 0 01-2-4.067" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Citizenship
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed opacity-90">
             US citizenship or legal residency status is a prerequisite for enrollment in our Rx Plans
            </p>
          </div>

          {/* Eligibility Card 4: Ideal for Medication Financial Support */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center">
            <div className="bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full p-3 mb-4 mx-auto flex items-center justify-center w-20 h-20">
              <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ideal for Medication Financial Support
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed opacity-90">
              Perfect for those who prioritize affordable solutions for their medication needs
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
