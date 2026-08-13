"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const LatestArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch('/api/recentblog');
        const data = await res.json();

        if (res.ok) {
          setArticles(data.data || []);
        } else {
          throw new Error(data.message || 'Failed to load articles');
        }
      } catch (err) {
        if (process.env.NODE_ENV === 'development') {

          console.error('Error fetching articles:', err);

        }
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <section className="section-tint py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
            Insights
          </p>
          <h2 className="text-h2 font-display font-bold text-navy-900 mb-6 tracking-tight">
            Latest Articles
          </h2>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto leading-relaxed">
            Stay informed on the most current and relevant topics across health, wellness, and coverage options.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
          </div>
        ) : error ? (
          <p className="text-error text-center py-12">Error: {error}</p>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {articles.map((article, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group flex flex-col bg-white rounded-2xl card-elevated overflow-hidden"
              >
                <div className="relative h-56 w-full overflow-hidden bg-navy-50">
                  <Image
                    src={article.blog_feature_image || "https://placehold.co/600x400/E0F2F7/000000?text=No+Image"}
                    alt={article.blog_title}
                    fill
                    sizes="(max-width: 767px) 100vw, 33vw"
                    className="object-cover transform transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-navy-900 mb-4 line-clamp-2 leading-snug group-hover:text-accent transition-colors">
                    {article.blog_title}
                  </h3>
                  <p className="text-navy-600 text-base leading-relaxed mb-8 flex-grow line-clamp-3">
                    {article.blog_description}
                  </p>
                  <Link
                    href={`/blog/${article.blog_slug}`}
                    className="inline-flex items-center text-sm font-bold text-accent tracking-wide uppercase hover:text-navy-900 transition-colors mt-auto"
                  >
                    Read Article
                    <svg className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};
