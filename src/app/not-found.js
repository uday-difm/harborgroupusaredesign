import React from 'react'
import Link from 'next/link'

export default function notfound() {
  return (
    <div>
      <section className="relative min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50 overflow-hidden">
      {/* Subtle background pattern for unique texture */}
    
      <div className="relative z-10 max-w-4xl mx-auto  p-8 sm:p-12 lg:p-16  text-center  flex flex-col items-center justify-center">
        {/* Unique SVG Illustration for 404 */}
        <div className="mb-8 w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">
          <svg className="w-full h-full text-blue-500 animate-bounce-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.38 3.375 2.07 3.375h14.006c1.69 0 2.936-1.875 2.069-3.376L12.707 3.622a1.875 1.875 0 00-3.414 0L2.697 16.376zM12 15.75h.007v.008H12v-.008z" />
          </svg>
        </div>

        <h1 className="text-7xl sm:text-8xl font-extrabold text-gray-900 mb-4 drop-shadow-md">
          404 Error
        </h1>
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-6 leading-tight">
          Page Not Found
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-10 max-w-prose">
          We&apos;re sorry, but the page you were looking for could not be found. It might have been moved, deleted, or never existed.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-8 py-4 border-2 border-transparent rounded-full text-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg uppercase tracking-wider transition-all duration-300 hover:from-blue-700 hover:to-indigo-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:-translate-y-0.5"
        >
          Go to Homepage
        </Link>
      </div>
    </section>
    </div>
  )
}
