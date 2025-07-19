import React from 'react';

// Main App component
export const VisionPlanSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white font-inter flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Custom CSS for animations */}
      <style>
        {`
        @keyframes waveFloat {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 0.6; }
          50% { transform: translateY(-10px) translateX(10px) scale(1.02); opacity: 0.8; }
          100% { transform: translateY(0) translateX(0) scale(1); opacity: 0.6; }
        }

        @keyframes fadeInSlideDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes subtlePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.01); }
        }

        .animate-waveFloat { animation: waveFloat 20s ease-in-out infinite alternate; }
        .animate-fadeInSlideDown { animation: fadeInSlideDown 0.8s ease-out forwards; }
        .animate-subtlePulse { animation: subtlePulse 3s ease-in-out infinite; }

        /* Delay animations for sequential appearance */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        `}
      </style>

      {/* Background Image with very light, subtle overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/vision-eye-plan.jpg")' }}
      >
       
      </div>

      {/* Main Content Area - Clean, floating, and now centered */}
      <section className="relative z-10 max-w-3xl w-full text-center flex flex-col items-center p-6 md:p-10 bg-white bg-opacity-80 backdrop-blur-md  border border-gray-200 animate-fadeInSlideDown animate-subtlePulse">
        {/* Removed mt-52 md:mt-24 to allow vertical centering */}

        {/* Eye Icon - Light and prominent - Re-added for uniqueness */}
        <div className="mb-6 opacity-0 animate-fadeInSlideDown delay-100">
          <svg className="w-28 h-28 text-sky-500 mx-auto drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
          </svg>
        </div>

        {/* Main Heading from your content */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight mb-4 drop-shadow-sm opacity-0 animate-fadeInSlideDown delay-200">
          Clear vision, clear path - our vision plans keep your focus right!
        </h1>

        {/* Descriptive Paragraph from your content */}
        <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed opacity-0 animate-fadeInSlideDown delay-300">
          Our vision service plans go beyond just seeing – they’re designed to keep your eyesight sharp and your outlook on life crystal clear. From routine eye exams to prescription eyewear, we’re dedicated to ensuring your vision is at its best.
        </p>

        {/* Call to Action Button from your content */}
        <button
          className="px-10 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-lg rounded-full shadow-lg hover:from-sky-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 ease-in-out
                     focus:outline-none focus:ring-4 focus:ring-sky-300 focus:ring-opacity-75 tracking-wide uppercase opacity-0 animate-fadeInSlideDown delay-400"
        >
          GET NOW
        </button>
      </section>
    </div>
  );
};

