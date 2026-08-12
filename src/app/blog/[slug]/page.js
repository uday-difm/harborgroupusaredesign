"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/common/motion/variants";

const BlogSubscribePopup = ({ onClose }) => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubscribe = async () => {
        setMessage("");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setMessage("Please enter a valid email address.");
            return;
        }
        setLoading(true);
        try {
            const res = await fetch("/api/blogsubscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            const result = await res.json();
            if (res.ok) {
                setMessage("Subscribed successfully!");
                setTimeout(() => onClose(), 1500);
            } else {
                setMessage(result.message || "Subscription failed.");
            }
        } catch (err) {
            //console.error(err); 
            setMessage("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            {/* overlay: keep dark overlay but page content remains white */}
            <div className="absolute inset-0 bg-navy-900/45 backdrop-blur-sm" aria-hidden="true" />

            <div
                className="relative w-full max-w-lg mx-auto p-6 sm:p-8 bg-white text-navy-900 rounded-2xl border border-navy-100 shadow-lg font-body"
                role="dialog"
                aria-modal="true"
                aria-label="Subscribe to blog"
            >
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-navy-50 text-navy-900 inline-flex items-center justify-center hover:bg-navy-100 transition-colors"
                    aria-label="Close popup"
                >
                    <span className="text-lg leading-none">&times;</span>
                </button>

                <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 mb-4">
                    Be the First to Know
                </h2>

                <p className="mb-6 text-sm sm:text-base text-navy-600">
                    Get immediate updates on our newest blog posts. Whether it&apos;s the latest trends, helpful tips, or
                    personal stories, you&apos;ll be the first to read them.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="flex-grow p-3 rounded-lg text-sm bg-white text-navy-900 border border-navy-100 focus:ring-2 focus:ring-accent/50"
                    />
                    <button
                        onClick={handleSubscribe}
                        disabled={loading}
                        className="bg-accent! hover:bg-accent-dark! text-white font-bold py-3 px-6 rounded-lg w-full sm:w-auto transition duration-300"
                    >
                        {loading ? "Subscribing..." : "Subscribe"}
                    </button>
                </div>

                {message && (
                    <p className={`mt-4 text-sm text-center ${message.toLowerCase().includes("success") ? "text-success" : "text-navy-900"}`}>
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default function BlogDetail() {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [showPopup, setShowPopup] = useState(false);


    useEffect(() => {
        // always scroll to top on load / refresh
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    useEffect(() => {
        if (!slug) return;

        const fetchBlog = async () => {
            try {
                const res = await fetch(`/api/blog/${slug}`);
                const json = await res.json();
                if (res.ok) setBlog(json.data);
                else throw new Error(json.message || "Failed to fetch blog");
            } catch (err) {
                //console.error("Error fetching blog:", err);
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();

        const timer = setTimeout(() => setShowPopup(true), 3000);
        return () => clearTimeout(timer);
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-surface flex items-center justify-center font-body">
                <div className="flex flex-col items-center p-20">
                    <svg className="animate-spin h-10 w-10 mb-4 text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <p className="text-navy-600">Loading article...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-surface p-10 font-body">
                <div className="text-error text-center">Error: {error}</div>
            </div>
        );
    }
    if (!blog) {
        return (
            <div className="min-h-screen bg-surface p-10 font-body">
                <div className="text-navy-900 text-center">No blog found.</div>
            </div>
        );
    }

    const tags = blog.blog_tag ? blog.blog_tag.split(",").map((t) => t.trim()) : [];

    return (
        <>
            <title>{blog ? blog.blog_title : ""}</title>
            <meta property="og:title" content={blog ? blog.blog_title : ""} />
            <meta name="description" content={blog ? blog.blog_description : ""} />
            <meta property="og:description" content={blog ? blog.blog_description : ""} />
            <meta property="og:image" content={blog ? blog.blog_feature_image : ""} />
            <meta name="keywords" content={blog ? blog.blog_tag : ""} />
            <link rel="canonical" href={`https://harborgroupusa.com/blogs/${slug}`} />
            <meta property="og:url" content={`https://harborgroupusa.com/blogs/${slug}`} />

            <div className="bg-surface text-navy-900 font-body">
                <motion.article variants={staggerContainer(0.1)} initial="hidden" animate="show" className="max-w-4xl mx-auto px-6 py-16 md:py-24">
                    <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-display font-bold tracking-tight leading-tight mb-4 text-navy-900">
                        {blog.blog_title}
                    </motion.h1>
                    <motion.p variants={fadeUp} className="text-navy-500 mb-8">Published on {blog.formatted_blog_date}</motion.p>

                    {blog.blog_feature_image && (
                        <motion.div variants={fadeUp} className="relative overflow-hidden rounded-2xl mb-10 border border-navy-100 shadow-md">
                            <Image
                                src={blog.blog_feature_image}
                                alt={blog.blog_title}
                                width={800}
                                height={400}
                                className="w-full object-cover"
                                sizes="(max-width: 896px) 100vw, 896px"
                            />
                        </motion.div>
                    )}

                    <motion.div
                        variants={fadeUp}
                        className="prose max-w-none mb-10 text-justify font-body text-navy-800 leading-relaxed prose-headings:font-display prose-headings:text-navy-900 prose-a:text-accent prose-a:font-semibold"
                        dangerouslySetInnerHTML={{ __html: blog.blog_content }}
                    />

                    {tags.length > 0 && (
                        <motion.div variants={fadeUp} className="mt-12">
                            <h3 className="text-xl font-display font-bold text-navy-900 mb-4">
                                Tags:
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 rounded-full text-sm font-medium bg-white text-navy-700 border border-navy-100"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </motion.article>

                {showPopup && <BlogSubscribePopup onClose={() => setShowPopup(false)} />}
            </div>
        </>
    );
}
