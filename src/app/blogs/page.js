"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlogPostCard } from "@/app/component/about/BlogPostCard";
import { fadeUp, staggerContainer } from "@/common/motion/variants";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/fetchblog");
        const data = await response.json();
        setBlogs(Array.isArray(data.data) ? data.data : []);
      } catch (fetchError) {
        setError(fetchError.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleLoadMore = () => setVisibleCount((prev) => prev + 8);

  if (loading) {
    return (
      <div className="section-tint min-h-screen flex items-center justify-center font-body">
        <div className="flex flex-col items-center gap-4 text-navy-600">
          <svg className="animate-spin h-10 w-10 text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-label="Loading blogs">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <p className="text-lg">Loading insights...</p>
        </div>
      </div>
    );
  }

  if (error) return <div className="section-light min-h-screen text-center text-error text-lg pt-16">Error: {error}</div>;

  return (
    <>
      <title>Harbor Group USA Blog | Health & Plans Insights</title>
      <meta name="keywords" content="Harbor Group USA, health blog, Plans insights, major medical plans, healthcare tips, wellness blog, health Plans advice, medical coverage updates" />
      <meta name="description" content="Read expert articles from Harbor Group USA on major medical plans, health Plans tips, and wellness strategies for individuals and businesses." />
      <link rel="canonical" href="https://harborgroupusa.com/blogs/" />

      <section className="section-light relative overflow-hidden font-body">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_12%,rgba(201,162,75,0.12),transparent_24rem)]" />
        <motion.header variants={staggerContainer()} initial="hidden" animate="show" className="relative max-w-3xl mx-auto text-center px-6">
          <motion.span variants={fadeUp} className="text-xs font-bold text-accent uppercase tracking-widest">Harbor Journal</motion.span>
          <motion.h1 variants={fadeUp} className="mt-3 text-4xl md:text-6xl font-display font-bold text-navy-900 tracking-tight leading-tight">Our Insights</motion.h1>
          <motion.div variants={fadeUp} className="h-1 w-16 bg-accent mx-auto my-6 rounded-full" />
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-navy-600 leading-relaxed">Explore practical guidance on healthcare, wellness, and industry trends.</motion.p>
        </motion.header>
      </section>

      <section className="section-tint font-body">
        <motion.main variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {blogs.slice(0, visibleCount).map((blog) => (
            <Link key={blog.blog_id} href={`/blog/${blog.blog_slug}`} className="block h-full">
              <BlogPostCard image={blog.blog_feature_image} category={blog.blog_category} title={blog.blog_title} date={blog.formatted_blog_date} />
            </Link>
          ))}
        </motion.main>
        {visibleCount < blogs.length && (
          <div className="mt-10 text-center">
            <button onClick={handleLoadMore} className="btn-accent active:scale-[0.98]">Load More</button>
          </div>
        )}
      </section>
    </>
  );
}
