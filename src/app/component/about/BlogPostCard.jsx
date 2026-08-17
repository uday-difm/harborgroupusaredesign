"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

const sectionReveal = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

export const BlogPostCard = ({ image, category, title, author, date, priority = false }) => {
  const prefersReduced = useReducedMotion();
  
  const itemVariant = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.div
      variants={itemVariant}
      className="group relative bg-white rounded-2xl card-elevated h-full border border-navy-100 hover:border-accent hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between"
    >
      <div className="relative h-56 w-full overflow-hidden bg-navy-50">
        <Image
          src={image}
          alt={title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent"></div>
        <span className="absolute top-4 left-4 inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          {category}
        </span>
      </div>
      <div className="p-6 lg:p-8 flex flex-col justify-between flex-1">
        <h3 className="text-lg lg:text-xl font-bold font-display text-navy-900 mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        <div className="flex items-center text-sm text-navy-500 font-medium mt-4">
          <span>{date}</span>
        </div>
      </div>
    </motion.div>
  );
};

export const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const prefersReduced = useReducedMotion();

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  useEffect(() => {
    fetch("/api/recentblog")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.data)) {
          setBlogs(data.data);
        } else {
          setBlogs([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  if (loading) return null; // Can be replaced with a skeleton loader

  return (
    <section className="bg-navy-50 py-24">
      <div className="w-full px-6 lg:px-12 xl:px-20 2xl:px-32 mx-auto">
        <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24"
            variants={sectionReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
        >
          <div className="lg:col-span-1 flex flex-col justify-center">
            <motion.p variants={itemVariants} className="text-base font-semibold text-accent uppercase tracking-wide">
              Our Blog
            </motion.p>
            <motion.h2 variants={itemVariants} className="mt-4 text-3xl md:text-4xl font-display font-bold text-navy-800 tracking-tight">
              Insights & Ideas Corner
            </motion.h2>
            <motion.div variants={itemVariants} className="mt-10">
              <Link
                href="/blogs"
                className="btn-accent px-8 py-4 text-lg inline-flex items-center"
              >
                VIEW ALL
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>

          {/* --- Right Column: Blog Posts --- */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array.isArray(blogs) && blogs.slice(0, 2).map((blog) => (
              <Link key={blog.blog_id} href={`/blog/${blog.blog_slug}`} passHref>
                <BlogPostCard
                  image={blog.blog_feature_image}
                  category={blog.category}
                  title={blog.blog_title}
                  date={blog.formatted_blog_date}
                />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
