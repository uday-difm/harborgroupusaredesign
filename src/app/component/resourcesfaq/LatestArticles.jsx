"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export const LatestArticles = () => {
  const primaryDarkBlue = '#1A2E5B';
  const accentLightBlue = '#4CAFDE';
  const softGrayBg = '#F0F2F5';
  const white = '#FFFFFF';

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch('/api/recentblog');
        const data = await res.json();

        if (res.ok) {
          setArticles(data.data || []); // adjust if your API returns differently
        } else {
          throw new Error(data.message || 'Failed to load articles');
        }
      } catch (err) {
        console.error('Error fetching articles:', err);
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 font-inter relative overflow-hidden"
      style={{ background: `linear-gradient(to br, ${softGrayBg}, ${accentLightBlue}10)` }}
    >
      {/* Background animation elements */}
      
      

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 animate-fade-in-up" style={{ color: primaryDarkBlue }}>
          Latest Articles
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed mb-12 text-gray-700 max-w-3xl mx-auto animate-fade-in-up delay-100">
          Stay informed on the most current and relevant topics
        </p>

        {loading ? (
          <p className="text-navy-500">Loading...</p>
        ) : error ? (
          <p className="text-error">Error: {error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up delay-200">
            {articles.map((article, index) => (
              <div
                key={index}
                className="group bg-white rounded-card card-elevated overflow-hidden flex flex-col transform hover:scale-103 hover:shadow-2xl transition-all duration-300 ease-in-out animate-card-pop"
                style={{ animationDelay: `${0.3 + index * 0.15}s` }}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={article.blog_feature_image || "https://placehold.co/600x400/E0F2F7/000000?text=No+Image"}
                    alt={article.blog_title}
                    layout="fill"
                    objectFit="cover"
                    className="transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow text-jistify">
                  <h3 className="text-xl font-bold mb-3 text-justify" style={{ color: primaryDarkBlue }}>
                    {article.blog_title}
                  </h3>
                  <p className="text-navy-500 text-base leading-relaxed mb-4 flex-grow text-justify">
                    {article.blog_description}
                  </p>
                  <a
                    href={`/blog/${article.blog_slug}`}
                    className="self-start mt-auto px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:bg-opacity-90"
                    style={{ backgroundColor: accentLightBlue, color: white }}
                  >
                    Learn more
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes cardPop {
          0% { transform: scale(0.9); opacity: 0; }
          80% { transform: scale(1.02); opacity: 1; }
          100% { transform: scale(1); }
        }

        @keyframes blob-slow-anim {
          0% { transform: translate(-50%, -50%) scale(1); }
          25% { transform: translate(-40%, -60%) scale(1.02); }
          50% { transform: translate(-60%, -40%) scale(0.98); }
          75% { transform: translate(-55%, -55%) scale(1.01); }
          100% { transform: translate(-50%, -50%) scale(1); }
        }

        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fade-in-up.delay-100 { animation-delay: 0.1s; }
        .animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
        .animate-card-pop { animation: cardPop 0.7s ease-out forwards; }
        .animate-blob-slow { animation: blob-slow-anim 25s infinite alternate ease-in-out; }
        .animate-blob-slow.animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
};
