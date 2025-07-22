import React from 'react';

export const Eligibility = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
      {/* Optional: Add a subtle overlay for visual texture or depth */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at top left, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at bottom right, rgba(0,0,0,0.05) 0%, transparent 50%)'
      }}></div>

      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-indigo-900 sm:text-5xl lg:text-6xl leading-tight mb-8">
          Eligibility Criteria of Pet Plan
        </h2>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
          Open to pet owners, our Pet Plans ensure that comprehensive health protection for your furry friends is within reach.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Eligibility Card 1: Resident of the United States - White Card, Gradient Icon */}
          <div className="bg-white p-8 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl text-gray-900 flex flex-col items-center text-center border border-gray-100">
            <div className="bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full p-4 mb-6"> {/* Gradient for icons */}
              <svg className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* White icon */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold leading-tight mb-3">
              Resident of the United States
            </h3>
            <p className="text-lg leading-relaxed opacity-90">
              Our Pet Plans are accessible to individual pet owners residing in the United States.
            </p>
          </div>

          {/* Eligibility Card 2: Age Eligibility - White Card, Gradient Icon */}
          <div className="bg-white p-8 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl text-gray-900 flex flex-col items-center text-center border border-gray-100">
            <div className="bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full p-4 mb-6"> {/* Gradient for icons */}
              <svg className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* White icon */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold leading-tight mb-3">
              Age Eligibility
            </h3>
            <p className="text-lg leading-relaxed opacity-90">
              Tailored to cover individual pet owners aged 18 to 100 years, ensuring coverage throughout various life stages.
            </p>
          </div>

          {/* Eligibility Card 3: Pet Ownership - White Card, Gradient Icon */}
          <div className="bg-white p-8 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl text-gray-900 flex flex-col items-center text-center border border-gray-100">
            <div className="bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full p-4 mb-6"> {/* Gradient for icons */}
              <svg className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* White icon */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM12 14c-1.474 0-2.887.267-4 0m4 0c1.474 0 2.887.267 4 0M12 14v4m-4 0h8m-4 0v-4" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold leading-tight mb-3">
              Pet Ownership
            </h3>
            <p className="text-lg leading-relaxed opacity-90">
              Our Pet Plans are accessible to individuals with beloved pets in their care.
            </p>
          </div>

          {/* Eligibility Card 4: Pet Health Maintenance - White Card, Gradient Icon */}
          <div className="bg-white p-8 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl text-gray-900 flex flex-col items-center text-center border border-gray-100">
            <div className="bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full p-4 mb-6"> {/* Gradient for icons */}
              <svg className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* White icon */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold leading-tight mb-3">
              Pet Health Maintenance
            </h3>
            <p className="text-lg leading-relaxed opacity-90">
              Perfect for those who prioritize the health and well-being of their pets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
