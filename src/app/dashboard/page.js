"use client";

import { Eye, Pencil, Trash2 } from "lucide-react";
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import DashboardLayout from "../component/DashboardLayout";
import Link from "next/link";
import Image from "next/image";

export default function DashboardHome() {
  const [blogs, setBlogs] = useState([]); // Initialize blogs state as an empty array
  const [totalBlogs, setTotalBlogs] = useState(0); // Total blogs count for the card
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [loadingUser, setLoadingUser] = useState(true);
  const [userError, setUserError] = useState(null);
  const [user, setUser] = useState(null);
  const router = useRouter();


  // Fetch user data on component mount
 useEffect(() => {
  const fetchUserData = async () => {
    try {
      const response = await fetch(`/api/dashboard/user`, {
        method: 'GET',
        credentials: 'include' // includes cookies in request
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else if (response.status === 401 || response.status === 403) {
        router.push('/dashboard/login');
      } else {
        const errorData = await response.json();
        setUserError(errorData.error || 'Failed to fetch user data.');
      }
    } catch (err) {
      setUserError('An unexpected error occurred while fetching user data.');
      console.error('Fetch user error:', err);
    } finally {
      setLoadingUser(false);
    }
  };

  fetchUserData();
}, [router]);


  // Fetch blogs when the component mounts
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true);
        const res = await fetch('/api/dashboard/recentblog'); // Fetch all blogs from API

        if (!res.ok) {
          throw new Error('Failed to fetch blogs');
        }

        const data = await res.json();
        console.log('API Response:', data);  // Log the API response to verify the structure
        setBlogs(data.data || []); // Set blogs data
        setTotalBlogs(data.data.length); // Set the total number of blogs (if required)
      } catch (err) {
        setError(err.message); // Handle error if API call fails
      } finally {
        setIsLoading(false); // Set loading to false once the request completes
      }
    };

    fetchBlogs(); // Call the fetch function
  }, []); // Run only once when the component mounts


   const deleteBlog = async (blogId) => {
  try {
    const res = await fetch("/api/dashboard/deleteblog", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ blog_id: blogId }), // Ensure blog_id is passed in the body
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to delete blog");
    }

    const result = await res.json();
    if (result.affectedRows > 0) {
      alert("Blog deleted successfully.");
      // Remove the deleted blog from the state
      const updatedBlogs = blogs.filter((blog) => blog.blog_id !== blogId);
      setBlogs(updatedBlogs);
    }
  } catch (err) {
    alert("Error deleting blog: " + err.message);
  }
};

  return (
    <DashboardLayout>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mt-3">
        {[{
          label: 'Total Blogs',
          count: totalBlogs,
        }].map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-slate-800 to-slate-700 text-white shadow-xl rounded-2xl p-6 flex flex-col justify-between transition hover:scale-[1.02]"
          >
            <div className="text-sm font-medium text-slate-300 mb-2">{item.label}</div>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-2xl font-semibold">{item.count}</span>
              <button className="text-sm text-green-400 hover:underline">View All</button>
            </div>
          </div>
        ))}
      </div>

      {/* Latest Blogs Table */}
      <div className="bg-white shadow-xl rounded-2xl p-4 sm:p-6">
        <div className="text-lg sm:text-xl font-bold mb-4 text-gray-800">Latest Blogs</div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-600 whitespace-nowrap">
            <thead>
              <tr className="text-xs text-gray-500 uppercase border-b hidden md:table-row">
                <th className="py-3">S.no</th>
                <th>Image</th>
                <th>Title</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.length === 0 ? (
                <tr>
                  <td colSpan="5" className="py-3 text-center text-gray-500">
                    No blogs available
                  </td>
                </tr>
              ) : (
                blogs.map((blog, index) => (
                  <tr
                    key={blog.blog_id}
                    className="border-b hover:bg-gray-50 transition md:table-row flex flex-col md:flex-row mb-4 md:mb-0"
                  >
                    <td className="py-3 font-medium">{`${index + 1}`}</td>
                    <td className="py-3">
                      <Image
                    width={100}
                    height={100}
                        src={blog.blog_feature_image}
                        alt="Blog"
                        className="h-12 w-20 object-cover rounded-md shadow-sm"
                      />
                    </td>
                    <td className="py-2 px-2">{blog.blog_title}</td>
                    <td className="py-2 px-2">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                        {blog.formatted_blog_date}
                      </span>
                    </td>
                    <td className="py-2 px-2">
                      <div className="flex space-x-3">
                        <Link href={`/blog/${blog.blog_slug}`}>
                          <Eye className="w-4 h-4 text-slate-500 hover:text-blue-600 cursor-pointer" />
                        </Link>
                        <button onClick={() => router.push(`/dashboard/update-blog/${blog.blog_id}`)}>
                          <Pencil className="w-4 h-4 text-slate-500 hover:text-yellow-500 cursor-pointer" />
                        </button>
                        <button onClick={() => deleteBlog(blog.blog_id)}>
                                <Trash2 className="w-4 h-4 text-slate-500 hover:text-red-600 cursor-pointer" />
                              </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-center">
          <Link href="dashboard/blog-table" className="w-full sm:w-auto bg-gradient-to-b from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white px-6 py-2 rounded-full shadow-md transition">
            View All Blogs
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
}
