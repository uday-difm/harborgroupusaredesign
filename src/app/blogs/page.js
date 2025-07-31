"use client";

import React from 'react'
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8);

  // Fetch blog data when component mounts
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/fetchblog');
        const data = await response.json();

        console.log("Raw API Response:", data);

        if (Array.isArray(data.data)) {
          setBlogs(data.data); // ✅ Fix: use the correct array
        } else {
          console.error("Unexpected API response:", data);
          setBlogs([]);
        }

      } catch (error) {
        console.error("Fetch error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };




  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <title>Harbor Group USA Blog | Health & Plans Insights</title>
      <meta name="keywords" content="Harbor Group USA, health blog, Plans insights, major medical plans, healthcare tips, wellness blog, health Plans advice, medical coverage updates" />
      <meta name="description" content="Read expert articles from Harbor Group USA on major medical plans, health Plans tips, and wellness strategies for individuals and businesses." />
      <meta property="og:title" content="Harbor Group USA Blog | Health & Plans Insights" />
      <meta property="og:description" content="Read expert articles from Harbor Group USA on major medical plans, health Plans tips, and wellness strategies for individuals and businesses." />
      <link rel="canonical" href="https://harborgroupusa.com/blogs/" />
      <meta property="og:url" content="https://harborgroupusa.com/blogs/" />
      <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-sans antialiased flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
        {/* Page Header Section */}
        <header className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight animate-fade-in-down">
            Our Insights
          </h1>
          <div className="h-2 w-24 bg-blue-600 mx-auto mb-8 rounded-full animate-scale-in"></div> {/* Animated Underline */}
          <p className="text-xl text-gray-700 leading-relaxed animate-fade-in-up">
            Explore our latest articles and thought leadership on healthcare, wellness, and industry trends.
          </p>
        </header>

        {/* Blog Posts Grid Section */}
        <main className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Individual Animated Blog Post Card */}
          {blogs.slice(0, visibleCount).map((blog) => (
            <div key={blog.blog_id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out overflow-hidden flex flex-col cursor-pointer">
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={blog.blog_feature_image}
                  alt={blog.blog_title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  width={600}
                  height={400}
                />
                <span className="absolute top-4 right-4 bg-sky-400  text-xs text-white font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-md">
                  {blog.blog_category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-gray-500 mb-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1.5 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  {blog.formatted_blog_date}
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-snug">
                  {blog.blog_title}
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                  {blog.blog_description}
                </p>

                <a
                  href={`/blog/${blog.blog_slug}`}
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-500 text-base font-semibold rounded-full text-blue-600 hover:bg-blue-500 hover:text-white transition-all duration-200 self-start group"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 -mr-1 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </main>
        {visibleCount < blogs.length && (
          <div className="mt-10 text-center">
            <button
              onClick={handleLoadMore}
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Load More
            </button>
          </div>
        )}

        {/* Tailwind CSS keyframes for simple animations */}
        <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          animation-delay: 0.2s; /* Delay for sequential animation */
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
          animation-delay: 0.4s; /* Delay for sequential animation */
        }
       `}</style>
      </div>
    </>
  );
};


