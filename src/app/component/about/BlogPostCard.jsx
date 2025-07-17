"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

// A reusable component for the blog post cards
const BlogPostCard = ({ image, category, title, author, date, delay }) => {
  return (
    <div 
      className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in-up"
      style={{ animationDelay: delay }}
    >
      <div className="relative h-56">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/e2e8f0/a3a3a3?text=Blog+Post'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <span className="absolute top-4 left-4 inline-block bg-sky-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-indigo-900 mb-2 group-hover:text-sky-600 transition-colors duration-300">{title}</h3>
        <div className="flex items-center text-sm text-gray-500">
          <span>By {author}</span>
          <span className="mx-2">&#8226;</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export const BlogSection = ()=> {
  return (
    <div className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* --- Left Column: Section Header --- */}
          <div className="lg:col-span-1 animate-fade-in-up">
            <p className="text-base font-semibold text-sky-500 uppercase tracking-wide">
              Our Blog
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-indigo-900 tracking-tight">
              Insights & Ideas Corner
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Stay updated with the latest news, tips, and insights from the healthcare industry.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-500 hover:bg-sky-600"
              >
                VIEW ALL
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>

          {/* --- Right Column: Blog Posts --- */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <BlogPostCard
              image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
              category="Health Plans"
              title="Choosing the Right Health Insurance Plan for Your Family"
              author="Jane Doe"
              date="July 15, 2025"
              delay="0.2s"
            />
            <BlogPostCard
              image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
              category="Wellness"
              title="5 Simple Tips for a Healthier Lifestyle This Year"
              author="John Smith"
              date="July 10, 2025"
              delay="0.4s"
            />
          </div>
        </div>
      </div>
       {/* This style block is necessary for the custom animations. */}
       <style jsx global>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
