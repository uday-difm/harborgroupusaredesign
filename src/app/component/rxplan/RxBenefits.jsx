import React from 'react';
import Image from 'next/image';

export const RxBenefits = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50 overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at top left, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at bottom right, rgba(0,0,0,0.05) 0%, transparent 50%)'
      }}></div>

      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-indigo-900 sm:text-5xl lg:text-6xl leading-tight mb-8">
      Benefits of Rx Plan
        </h2>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
      At The Harbor Group, we recognize the importance of easy access to medication. Our Rx Plans offer a range of simple, affordable, and professional benefits to address your specific medication requirements.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full p-3 mb-4 inline-flex items-center justify-center">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Affordable Coverage</h3>
              <p className="text-gray-600 leading-relaxed text-justify">
             Affordable coverage for various prescription medications, easing financial strain
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">

              <div className="bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full p-3 mb-4 inline-flex items-center justify-center">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Efficient Claims</h3>
              <p className="text-gray-600 leading-relaxed text-justify">
              Simple and efficient claims process for peace of mind and ready support
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full p-3 mb-4 inline-flex items-center justify-center">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Flexible Options</h3>
              <p className="text-gray-600 leading-relaxed text-justify">
              Flexible medication options for personalized health needs
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full p-3 mb-4 inline-flex items-center justify-center">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Comprehensive Coverage</h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                No deductible, no annual or lifetime maximum, and no age limit for comprehensive coverage
              </p>
            </div>
          </div>
          <div className="relative h-80 sm:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl group transform transition-transform duration-500 hover:rotate-1">
            <Image
            width={600}
            height = {400}
              src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/RX-benefit.jpeg" 
              alt="Doctor handing medication to patient"
              className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

