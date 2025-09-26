"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

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
            console.error(err); 
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
            <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)" }} aria-hidden="true" />

            <div
                className="relative w-full max-w-lg mx-auto p-6 sm:p-8"
                role="dialog"
                aria-modal="true"
                aria-label="Subscribe to blog"
                style={{
                    background: "#ffffff",          // force white
                    color: "#111111",               // dark text
                    borderRadius: 12,
                    border: "1px solid rgba(0,0,0,0.06)",
                    boxShadow: "0 10px 30px rgba(2,6,23,0.12)",
                }}
            >
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3"
                    aria-label="Close popup"
                    style={{
                        background: "rgba(0,0,0,0.06)",
                        color: "#111",
                        width: 36,
                        height: 36,
                        borderRadius: 999,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "none",
                    }}
                >
                    <span style={{ fontSize: 18, lineHeight: 1 }}>&times;</span>
                </button>

                <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#111" }}>
                    Be the First to Know
                </h2>

                <p className="mb-6 text-sm sm:text-base" style={{ color: "#444" }}>
                    Get immediate updates on our newest blog posts. Whether it&apos;s the latest trends, helpful tips, or
                    personal stories, you&apos;ll be the first to read them.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="flex-grow p-3 rounded-md text-sm"
                        style={{
                            background: "#fff",
                            color: "#111",
                            border: "1px solid rgba(0,0,0,0.08)",
                        }}
                    />
                    <button
                        onClick={handleSubscribe}
                        disabled={loading}
                        className="px-6 font-semibold text-base  bg-sky-500! hover:bg-sky-600! transition-all! duration-200!"
                        style={{
                            background: "#14c6c3",
                            color: "#fff",
                            padding: "0.75rem 1rem",
                            borderRadius: 10,
                        }}
                    >
                        {loading ? "Subscribing..." : "Subscribe"}
                    </button>
                </div>

                {message && (
                    <p className="mt-4 text-sm text-center" style={{ color: message.toLowerCase().includes("success") ? "#059669" : "#111" }}>
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
                console.error("Error fetching blog:", err);
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
            <div style={{ background: "#fff", minHeight: "100vh" }} className="flex items-center justify-center">
                <div className="flex flex-col items-center p-20">
                    <svg className="animate-spin h-10 w-10 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" style={{ color: "#0ea5a4" }}>
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <p style={{ color: "#444" }}>Loading blogs...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ background: "#fff", minHeight: "100vh", padding: 40 }}>
                <div style={{ color: "#d9534f", textAlign: "center" }}>Error: {error}</div>
            </div>
        );
    }
    if (!blog) {
        return (
            <div style={{ background: "#fff", minHeight: "100vh", padding: 40 }}>
                <div style={{ color: "#111", textAlign: "center" }}>No blog found.</div>
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

            <div style={{ background: "#ffffff", color: "#111" }}>
                <div className="max-w-4xl mx-auto px-4 py-12" style={{ background: "#fff" }}>
                    <h1 className="text-4xl font-bold mb-4" style={{ color: "#111" }}>
                        {blog.blog_title}
                    </h1>
                    <p style={{ color: "#666", marginBottom: 24 }}>Published on {blog.formatted_blog_date}</p>

                    {blog.blog_feature_image && (
                        <div style={{ background: "#fff", borderRadius: 12, overflow: "hidden", marginBottom: 24 }}>
                            <Image
                                src={blog.blog_feature_image}
                                alt={blog.blog_title}
                                width={800}
                                height={400}
                                className="w-full object-cover"
                                style={{ display: "block" }}
                            />
                        </div>
                    )}

                    <div
                        className="prose max-w-none mb-10 text-justify"
                        style={{
                            color: "#111",
                            background: "#fff",
                            padding: 0,
                            lineHeight: 1.65,
                        }}
                        dangerouslySetInnerHTML={{ __html: blog.blog_content }}
                    />

                    {tags.length > 0 && (
                        <div className="mt-12">
                            <h3 className="text-xl font-bold mb-4" style={{ color: "#111" }}>
                                Tags:
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 rounded-full text-sm font-medium"
                                        style={{
                                            background: "#fff",
                                            color: "#111",
                                            border: "1px solid rgba(0,0,0,0.06)",
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {showPopup && <BlogSubscribePopup onClose={() => setShowPopup(false)} />}
            </div>
        </>
    );
}
