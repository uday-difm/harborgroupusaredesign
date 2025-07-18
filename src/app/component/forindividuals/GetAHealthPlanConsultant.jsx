"use client";
import React from 'react';

// Main App component (or this can be a standalone component to be imported)
export const GetAHealthPlanConsultant = () => {
  // Define custom colors based on the logo for easy use with Tailwind
  const primaryBlue = '#4CAFDE'; // Dark blue from the logo text/background
  const darkAccentBlue = '#0D1B3A'; // A darker, richer blue for accent
  const lightBlueBg = '#1A2E5B'; // Lighter blue from the logo background (approximate)
  const softGray = '#F0F2F5'; // A very light gray for background

  return (
    <div id ="individual-form"
      className="min-h-screen flex items-center justify-center font-inter p-4 sm:p-6 lg:p-8 relative overflow-hidden"
      style={{ backgroundColor: softGray }}
    >
      {/* Animated Background Gradients/Shapes */}
      <div
        className="absolute top-0 left-0 w-80 h-80 sm:w-96 sm:h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"
        style={{ backgroundColor: lightBlueBg, transform: 'translate(-70%, -70%)' }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 sm:w-1/2 sm:h-1/2 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"
        style={{ backgroundColor: darkAccentBlue, transform: 'translate(70%, 70%)' }}
      ></div>
      <div
        className="absolute top-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"
        style={{ backgroundColor: primaryBlue, transform: 'translate(30%, -30%)' }}
      ></div>

      {/* Main Content Area - Form Card */}
      <div
        className="relative z-10 w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-fadeInUp"
      >
        {/* Header Section for the Form with a unique wave/angle */}
        <div
          className="relative p-8 md:p-10 text-center text-white overflow-hidden rounded-t-3xl"
          style={{ background: `linear-gradient(to right, ${primaryBlue}, ${darkAccentBlue})` }}
        >
          {/* Decorative SVG Wave/Pattern */}
          <svg
            className="absolute bottom-0 left-0 w-full h-auto z-0 opacity-20"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="#ffffff" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,128C672,128,768,192,864,202.7C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>

          <div className="relative z-10"> {/* Ensure text is above SVG */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 leading-tight animate-textFadeIn"
            >
              Get A Health Plan <span style={{ color: lightBlueBg }}>Consultant</span>
            </h1>
            {/* <p className="text-white text-opacity-80 text-lg animate-textFadeIn animation-delay-300">
              Fill out the form below to connect with our experts.
            </p> */}
          </div>
        </div>

        {/* Form Body */}
        <div className="p-8 md:p-10 bg-white">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium mb-2" style={{ color: primaryBlue }}>
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all duration-200"
                  style={{ borderColor: lightBlueBg, focusRingColor: darkAccentBlue }}
                  placeholder="Your Full Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium mb-2" style={{ color: primaryBlue }}>
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all duration-200"
                  style={{ borderColor: lightBlueBg, focusRingColor: darkAccentBlue }}
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium mb-2" style={{ color: primaryBlue }}>
                Your message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all duration-200 resize-y"
                style={{ borderColor: lightBlueBg, focusRingColor: darkAccentBlue }}
                placeholder="Tell us about your needs..."
              ></textarea>
            </div>

            <div className="flex items-start mt-6">
              <input
                type="checkbox"
                id="terms"
                className="h-5 w-5 rounded focus:ring-2 mt-1"
                style={{ borderColor: lightBlueBg, accentColor: darkAccentBlue }}
                required
              />
              <label htmlFor="terms" className="ml-3 text-sm text-gray-600">
                By Submitting you allow our team to reach out to you via email or phone as submitted information by you and you also allow to agree to our{' '}
                <a href="#" className="font-medium underline" style={{ color: darkAccentBlue }}>
                  SMS and Marketing terms and conditions.
                </a>
              </label>
            </div>

           <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                                    SUBMIT
                                </button>
          </form>
        </div>
      </div>

      {/* Tailwind CSS Custom Animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(-70%, -70%) scale(1);
          }
          33% {
            transform: translate(-50%, -80%) scale(1.1);
          }
          66% {
            transform: translate(-80%, -60%) scale(0.9);
          }
          100% {
            transform: translate(-70%, -70%) scale(1);
          }
        }

        @keyframes blob2 {
          0% {
            transform: translate(70%, 70%) scale(1);
          }
          33% {
            transform: translate(80%, 50%) scale(0.9);
          }
          66% {
            transform: translate(60%, 80%) scale(1.1);
          }
          100% {
            transform: translate(70%, 70%) scale(1);
          }
        }

        @keyframes blob3 {
          0% {
            transform: translate(30%, -30%) scale(1);
          }
          33% {
            transform: translate(40%, -20%) scale(1.05);
          }
          66% {
            transform: translate(20%, -40%) scale(0.95);
          }
          100% {
            transform: translate(30%, -30%) scale(1);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes textFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes buttonBounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        .animate-blob { animation: blob 15s infinite alternate; }
        .animate-blob.animation-delay-2000 { animation-delay: 2s; }
        .animate-blob.animation-delay-4000 { animation-delay: 4s; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-textFadeIn { animation: textFadeIn 0.6s ease-out forwards; }
        .animate-textFadeIn.animation-delay-300 { animation-delay: 0.3s; }
        .animate-buttonBounce { animation: buttonBounce 2s infinite ease-in-out; }
      `}</style>
    </div>
  );
};


