"use client";

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation';


// Popup Component for "Be the First to Know"
const BlogSubscribePopup = ({ onClose }) => {
      const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

      const handleSubscribe = async () => {
        setMessage('');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setMessage('Please enter a valid email address.');
            return;
        }

        setLoading(true);
        try {
            const res = await fetch('/api/blogsubscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const result = await res.json();

            if (res.ok) {
                setMessage('Subscribed successfully!');
                setTimeout(() => {
                    onClose();
                }, 2000);
            } else {
                setMessage(result.message || 'Subscription failed.');
            }
        } catch (err) {
            console.error(err);
            setMessage('Something went wrong.');
        } finally {
            setLoading(false);
        }
    };
    return (
        // Added onClick handler to the transparent overlay div
        <div
            className="fixed inset-0 bg-transparent flex items-center justify-center z-50 p-4 font-inter"
            onClick={(e) => {
                // Close popup only if the click is on the overlay itself, not on its children
                if (e.target === e.currentTarget) {
                    onClose();
                }
            }}
        >
            <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-auto relative p-6 sm:p-8 text-center"> {/* Changed max-w-md to max-w-lg to increase width */}
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
                    aria-label="Close popup"
                >
                    &times;
                </button>

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                    Be the First to Know
                </h2>
                {/* Description */}
                <p className="text-gray-600 mb-6 text-sm sm:text-base">
                    Get immediate updates on our newest blog posts. Whether it's the latest
                    trends, helpful tips, or personal stories, you'll be the first to read them.
                </p>

                {/* Input and Button */}
                <div className="flex flex-col sm:flex-row gap-3">
                    <input
                        type="email"
                          value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                       <button
                        onClick={handleSubscribe}
                        disabled={loading}
                        className="bg-blue-500 text-white py-3 px-6 rounded-md font-semibold text-base hover:bg-blue-600 transition duration-300 shadow-md"
                    >
                        {loading ? 'Subscribing...' : 'Subscribe'}
                    </button>
                </div>
                  {message && (
                    <p className="mt-4 text-sm text-center text-gray-700">{message}</p>
                )}
            </div>
        </div>
    );
};

export default function page() {
    const { slug } = useParams(); // ← Get the slug from the dynamic route
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        if (!slug) return;

        const fetchBlog = async () => {
            try {
                const res = await fetch(`/api/blog/${slug}`);
                const json = await res.json();
                console.log("json: ", json);

                if (res.ok) {
                    setBlog(json.data);
                } else {
                    throw new Error(json.message || 'Failed to fetch blog');
                }
            } catch (err) {
                console.error('Error fetching blog:', err);
                setError(err.message || 'Something went wrong');
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();

        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, [slug]);


    if (loading) return <div className="p-10 text-center">Loading...</div>;
    if (error) return <div className="p-10 text-center text-red-600">Error: {error}</div>;
    if (!blog) return <div className="p-10 text-center">No blog found.</div>;

    // Convert comma-separated tags to array
    const tags = blog.blog_tag ? blog.blog_tag.split(',').map(tag => tag.trim()) : [];
    console.log("tags:", tags);

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-4">{blog.blog_title}</h1>
            <p className="text-gray-500 mb-6">Published on {blog.formatted_blog_date}</p>

            {blog.blog_feature_image && (
                <Image
                    src={blog.blog_feature_image}
                    alt={blog.blog_title}
                    width={800}
                    height={400}
                    className="w-full rounded-lg shadow mb-6 object-cover"
                />
            )}

            {/* Render blog_content as HTML (if it contains HTML) */}
            <div
                className="prose max-w-none mb-10 text-justify"
                dangerouslySetInnerHTML={{ __html: blog.blog_content }}
            />

            {/* Tags */}
            {tags.length > 0 && (
                <div className="mt-12 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Tags:</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            )}

              {/* 👇 Popup rendered here conditionally */}
    {showPopup && <BlogSubscribePopup onClose={() => setShowPopup(false)} />}
        </div>
        
    );
}
