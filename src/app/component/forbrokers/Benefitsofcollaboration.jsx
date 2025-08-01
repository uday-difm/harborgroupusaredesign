import React from 'react';
import Image from 'next/image';

// Main App component (or this can be a standalone component to be imported)
export const Benefitsofcollaboration = () => {
  // Define custom colors based on the logo for easy use with Tailwind
  const primaryBlue = '#1A2E5B'; // Dark blue from the logo text/background
  const darkAccentBlue = '#0D1B3A'; // A darker, richer blue for accent
  const lightBlueBg = '#4CAFDE'; // Lighter blue from the logo background (approximate)
  const softGray = '#F0F2F5'; // A very light gray for background

  const benefits = [
    {
      title: "Competitive Rates",
      description: "Stay ahead in the competitive landscape with access to our competitive rates. Our partnerships are designed to empower you with pricing advantages, giving your clients cost-effective options.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.592 1L21 12l-4.408 3.592c-.512.388-1.482.908-2.592.908m-10 0c-1.11 0-2.08-.402-2.592-1L3 12l4.408-3.592c.512-.388 1.482-.908 2.592-.908m7.5 4H12m-7.5 0H12" />
        </svg>
      )
    },
    {
      title: "Comprehensive Support",
      description: "Benefit from our dedicated support system. As a partner, you're not alone. Our team is here to assist you in navigating through processes, clarifying queries, and ensuring a smooth collaboration.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 0A9.953 9.953 0 0112 12.5c-2.686 0-5.177-1.109-6.97-2.902l-3.536-3.536m3.536 3.536L5.636 18.364m0 0A9.953 9.953 0 0012 11.5c2.686 0 5.177 1.109 6.97 2.902l3.536 3.536m-3.536-3.536L5.636 5.636" />
        </svg>
      )
    },
    {
      title: "Group Buying Power",
      description: "Leverage our collective strength for better deals. Joining forces with The Harbor Group grants you access to group buying power, ensuring competitive rates that stand out in the market.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h2a2 2 0 002-2V4a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2m10-9V4l-3 3m4 4v4l-3 3m-6-3H9M6 16h.01M6 12h.01M6 8h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: "Exclusive Access",
      description: " Unlock exclusive resources and information. Being a Harbor Group partner means gaining access to insights, updates, and tools that enhance your capabilities and keep you well-informed.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2v5a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2h6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v-4m0 0l3 3m-3-3l-3 3" />
        </svg>
      )
    },
  ];

  return (
    <div
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

      {/* Main Content Area - A large, sweeping card */}
      <div
        className="relative z-10 w-full max-w-7xl  rounded-3xl overflow-hidden flex flex-col animate-fadeInUp"
      >
        {/* Top Section: Header and Image as a cohesive unit */}
        <div className="relative w-full h-96 sm:h-[500px] lg:h-[600px] overflow-hidden flex items-end justify-center p-8 md:p-12 lg:p-16">
          <Image
            src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Benefits-of-collaboration.jpeg" // Placeholder for your image_403383.png
            alt="Benefits of Collaboration Header"
            className="absolute inset-0 w-full h-full object-cover animate-zoomIn "
            width={600}
            height={400}

          />
          {/* Stronger gradient overlay for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, ${primaryBlue}E0, ${primaryBlue}80, transparent)`,
            }}
          ></div>

          <div className="relative z-10 text-center text-white max-w-4xl mx-auto">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight animate-textFadeIn"
            >
              Benefits of <span style={{ color: lightBlueBg }}>Collaboration</span>
            </h1>
          </div>
        </div>

        {/* Benefits Grid Section - Floating above the bottom of the image */}
        <div
          className="relative z-20 -mt-20 sm:-mt-24 lg:-mt-32 mx-auto w-11/12 md:w-5/6 lg:w-4/5  p-8 md:p-12 lg:p-16 grid grid-cols-1 md:grid-cols-2 gap-8 animate-slideInUp"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border-b-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ borderColor: darkAccentBlue, animationDelay: `${0.4 + index * 0.15}s` }}
            >
              <div className="flex items-center mb-4" style={{ color: darkAccentBlue }}>
                {benefit.icon}
                <h3 className="ml-3 text-xl font-semibold" style={{ color: primaryBlue }}>
                  {benefit.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
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

        @keyframes zoomIn {
          from {
            transform: scale(1.0);
          }
          to {
            transform: scale(1.05);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob { animation: blob 15s infinite alternate; }
        .animate-blob.animation-delay-2000 { animation-delay: 2s; }
        .animate-blob.animation-delay-4000 { animation-delay: 4s; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-textFadeIn { animation: textFadeIn 0.6s ease-out forwards; }
        .animate-textFadeIn.animation-delay-300 { animation-delay: 0.3s; }
        .animate-zoomIn { animation: zoomIn 8s ease-in-out infinite alternate; } /* Slow, subtle zoom */
        .animate-slideInUp { animation: slideInUp 0.8s ease-out forwards; }

        /* Staggered fade in for benefit cards */
        .animate-fade-in-up-stagger > div {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};


