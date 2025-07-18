"use client";

import React from 'react';
import Image from 'next/image'; // Assuming Next.js Image component for optimization

export const LatestArticles = () => {
  // Define custom colors based on the logo for easy use with Tailwind
 const primaryDarkBlue = '#1A2E5B'; // Dark blue from the logo text/background
  const accentLightBlue = '#4CAFDE'; // Lighter blue from the logo outline
  const softGrayBg = '#F0F2F5'; // A very light gray for background
  const white = '#FFFFFF'

  const articles = [
    {
      title: "Key Healthcare Industry Trends as We Approach 2025",
      description: "Key Healthcare Industry Trends as We Approach 2025 As 2024 ends, the healthcare industry continues to evolve, with significant trends reshaping care. Telemedicine has gained...",
      image: "https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/latest-articles.png", // Placeholder image
      link: "#" // Replace with actual article link
    },
    {
      title: "Advantages of Health Coverage for Self-Employed Individuals",
      description: "Advantages of Health Coverage for Self-Employed Individuals Health coverage is a pillar of stability and security for self-employed individuals, providing protection that goes beyond personal...",
      image: "https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/latest-articles.png", // Placeholder image
      link: "#" // Replace with actual article link
    },
    {
      title: "Affordable Healthcare Solutions for Small Businesses and Freelancers",
      description: "Affordable Healthcare Solutions for Small Businesses and Freelancers Finding affordable healthcare solutions is a significant challenge for small businesses and freelancers alike. With the rising...",
      image: "https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/latest-articles.png", // Placeholder image
      link: "#" // Replace with actual article link
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 font-inter relative overflow-hidden" style={{ background: `linear-gradient(to br, ${softGrayBg}, ${accentLightBlue}10)` }}>
      {/* Animated Background Gradients/Shapes - subtle movement */}
      <div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob-slow"
        style={{ backgroundColor: primaryDarkBlue + '20', transform: 'translate(-70%, -70%)' }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob-slow animation-delay-2000"
        style={{ backgroundColor: accentLightBlue + '20', transform: 'translate(70%, 70%)' }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 animate-fade-in-up" style={{ color: primaryDarkBlue }}>
          Latest Articles
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed mb-12 text-gray-700 max-w-3xl mx-auto animate-fade-in-up delay-100">
          Stay informed on the most current and relevant topics
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up delay-200">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col transform hover:scale-103 hover:shadow-2xl transition-all duration-300 ease-in-out animate-card-pop"
              style={{ animationDelay: `${0.3 + index * 0.15}s` }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                  className="transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/600x400/E0F2F7/000000?text=Image+Not+Found";
                  }}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 transform group-hover:translate-y-[-2px] transition-transform duration-200" style={{ color: primaryDarkBlue }}>
                  {article.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-4 flex-grow">
                  {article.description}
                </p>
                <a
                  href={article.link}
                  className="self-start mt-auto px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:bg-opacity-90"
                  style={{ backgroundColor: accentLightBlue, color: white, '--tw-ring-color': `${accentLightBlue}80` }}
                >
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind CSS Custom Animations */}
      {/* Ensure these keyframes and animations are added to your tailwind.config.js */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes cardPop {
          0% { transform: scale(0.9); opacity: 0; }
          80% { transform: scale(1.02); opacity: 1; } /* Slightly overshoots for a bounce */
          100% { transform: scale(1); }
        }

        @keyframes blob-slow-anim {
          0% { transform: translate(-50%, -50%) scale(1); }
          25% { transform: translate(-40%, -60%) scale(1.02); }
          50% { transform: translate(-60%, -40%) scale(0.98); }
          75% { transform: translate(-55%, -55%) scale(1.01); }
          100% { transform: translate(-50%, -50%) scale(1); }
        }

        @keyframes blob-slow-anim-alt {
          0% { transform: translate(50%, 50%) scale(1); }
          25% { transform: translate(60%, 40%) scale(0.98); }
          50% { transform: translate(40%, 60%) scale(1.02); }
          75% { transform: translate(45%, 45%) scale(0.99); }
          100% { transform: translate(50%, 50%) scale(1); }
        }

        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fade-in-up.delay-100 { animation-delay: 0.1s; }
        .animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
        .animate-card-pop { animation: cardPop 0.7s ease-out forwards; } /* Slightly longer duration for smoother pop */
        .animate-blob-slow { animation: blob-slow-anim 25s infinite alternate ease-in-out; }
        .animate-blob-slow.animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
};





