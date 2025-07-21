import React from 'react'

export const NetworkContact = () => {
      const gradientStops = (id) => (
    <defs>
      <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: '#7DD3FC', stopOpacity: 1}} /> {/* Tailwind sky-300 */}
        <stop offset="100%" style={{stopColor: '#22D3EE', stopOpacity: 1}} /> {/* Tailwind cyan-400 */}
      </linearGradient>
    </defs>
  );
  return (
    <>
         {/* New Section: Connect & Network (from image_ac2573.png) */}
      <section className="w-full bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"> {/* Align items to start for form/list top alignment */}
          {/* Left Column: Connect With Us Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg animate-slideInLeft">
            <h2 className="text-4xl font-extrabold text-indigo-900 mb-6 text-center lg:text-left">
              Connect With Us
            </h2>
            <form className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Your name*</label>
                  <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="John Doe" required />
                </div>
                <div className="flex-1">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Your email*</label>
                  <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="you@example.com" required />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">Your message</label>
                <textarea id="message" name="message" rows="5" className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 resize-y" placeholder="How can we help you?"></textarea>
              </div>
              <div className="flex items-start">
                <input type="checkbox" id="terms" name="terms" className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 mt-1" required />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                  By Submitting you allow our team to reach out to you via email or phone as submitted information by you and you also allow to agree to our <a href="#" className="text-blue-600 hover:underline">SMS and Marketing terms and conditions</a>.
                </label>
              </div>
              <button type="submit" className="w-full bg-sky-400 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
                SUBMIT
              </button>
            </form>
          </div>

          {/* Right Column: Network Information */}
          <div className="bg-blue-50 p-8 rounded-xl shadow-lg animate-slideInRight">
            <h2 className="text-4xl font-extrabold text-indigo-900 mb-6 text-center lg:text-left">
              Network
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-xl lg:max-w-none mx-auto lg:mx-0">
              Accessing top-notch support for your targeted medical needs is effortless with our extensive network of experienced professionals.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Specialized Healthcare Professionals</h3>
            <ul className="space-y-3 text-gray-700 text-left mb-6">
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="url(#networkIconGradient1)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {gradientStops("networkIconGradient1")}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Tap into a network of seasoned professionals with expertise in specific medical fields
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="url(#networkIconGradient2)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {gradientStops("networkIconGradient2")}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Ensure tailored guidance for your unique health requirements
              </li>
            </ul>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Dedicated Support</h3>
            <ul className="space-y-3 text-gray-600 text-left">
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="url(#networkIconGradient3)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {gradientStops("networkIconGradient3")}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Our support team is ready to assist in connecting you with specialists in our network
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="url(#networkIconGradient4)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {gradientStops("networkIconGradient4")}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Enjoy peace of mind with our dedicated support for all your targeted medical inquiries and needs
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
