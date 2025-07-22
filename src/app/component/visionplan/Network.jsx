import React from 'react';

// Main App component (can be integrated into your existing App or a new page)
export const Network = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 font-inter py-16 px-4 md:px-8 flex items-center justify-center relative overflow-hidden">
      {/* Custom CSS for animations */}
      <style>
        {`
        @keyframes fadeInScaleUp {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes slideInFromLeft {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInFromRight {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes rotateSubtle {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(0.5deg); }
        }

        .animate-fadeInScaleUp { animation: fadeInScaleUp 0.8s ease-out forwards; }
        .animate-slideInFromLeft { animation: slideInFromLeft 0.8s ease-out forwards; }
        .animate-slideInFromRight { animation: slideInFromRight 0.8s ease-out forwards; }
        .animate-rotateSubtle { animation: rotateSubtle 10s ease-in-out infinite alternate; }

        /* Delay animations for sequential appearance */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-900 { animation-delay: 0.9s; }
        .delay-1000 { animation-delay: 1s; }
        `}
      </style>

      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[120vw] h-[120vw] bg-sky-100 opacity-20 transform rotate-45 animate-rotateSubtle"></div>
        <div className="absolute w-[80vw] h-[80vw] bg-blue-100 opacity-20 transform -rotate-30 animate-rotateSubtle" style={{ animationDelay: '5s', animationDirection: 'reverse' }}></div>
      </div>
      <div className="max-w-7xl w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl animate-fadeInScaleUp">
        <div className="bg-white p-8 md:p-12 flex flex-col justify-center rounded-l-3xl lg:rounded-r-none animate-slideInFromLeft delay-200">
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-900 mb-6 drop-shadow-sm">
            Network
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
            Accessing top-notch eye care is effortless with our extensive network of experienced professionals.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start text-gray-700 text-lg animate-slideInFromLeft delay-400">
              <span className="text-blue-500 mr-3 mt-1">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
              </span>
              Experienced Eye Care Providers
            </li>
            <li className="flex items-start text-gray-700 text-lg animate-slideInFromLeft delay-500">
              <span className="text-blue-500 mr-3 mt-1">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
              </span>
              Nationwide Coverage
            </li>
            <li className="flex items-start text-gray-700 text-lg animate-slideInFromLeft delay-600">
              <span className="text-blue-500 mr-3 mt-1">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
              </span>
              Dedicated Support
            </li>
          </ul>
        </div>

        {/* Right Section: Contact Form - Overlapping and distinct color */}
        <div className="p-8 md:p-12 bg-sky-100 bg-opacity-90 flex flex-col justify-center rounded-r-3xl lg:rounded-l-none animate-slideInFromRight delay-300">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-2 text-gray-800">Your name*</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-70 border border-sky-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 text-gray-800 transition duration-300"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2 text-gray-800">Your email*</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-70 border border-sky-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 text-gray-800 transition duration-300"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium mb-2 text-gray-800">Your message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-70 border border-sky-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 text-gray-800 transition duration-300"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="mt-1 mr-2 rounded text-sky-400 focus:ring-sky-400"
                required
              />
              <label htmlFor="terms" className="text-sm text-gray-700 leading-relaxed">
                By submitting you allow our team to reach out to you via email or phone as submitted information by you and you also allow to agree to our <a href="#" className="underline text-blue-600 hover:text-blue-800 transition duration-300">SMS and Marketing terms and conditions.</a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-sky-600 text-white font-bold text-lg rounded-lg shadow-md hover:from-blue-600 hover:to-sky-700 transform hover:scale-105 transition-all duration-300 ease-in-out
                           focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-75"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
