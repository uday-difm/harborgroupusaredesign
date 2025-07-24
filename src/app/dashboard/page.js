"use client";

import { Eye, Pencil, Trash2 } from "lucide-react";
import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
import { useRouter } from "next/navigation";
import DashboardLayout from "../component/DashboardLayout";

import Link from "next/link";
// import Image from 'next/image';
// import { useRef } from 'react';


export default function DashboardHome() {
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [totalMagazines, setTotalMagazines] = useState(0);
  const [totalWebitorials, setTotalWebitorials] = useState(0);
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  // const dropdownRef = useRef(null);

  const router = useRouter();

  useEffect(() => {
    // const checkAuth = async () => {
    //   const res = await fetch(`${baseUrl}/api/dashboard/admin/checkauth`, {
    //     method: 'GET',
    //     credentials: 'include',
    //   });
  
    //   if (res.ok) {
    //     const data = await res.json();
    //     setUser(data.admin); // ✅ fixed here
    //   } else {
    //     router.push('/dashboard/login');
    //   }
    // };
  
    const fetchDashboardData = async () => {
      try {
        const res = await fetch(`/api/dashboard/blog/recent`, {
          method: 'GET',
          credentials: 'include',
        });
  
        if (res.ok) {
          const data = await res.json();
          setBlogs(data.blogs || []);
          setTotalBlogs(data.total_blogs || 0);
          setTotalMagazines(data.total_magazines || 0);
          setTotalWebitorials(data.total_webitorials || 0);
        } else {
          console.error('Failed to fetch data. Status code:', res.status);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
   // checkAuth();
    fetchDashboardData();
  }, [router]);

  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setDropdownOpen(false);
  //     }
  //   }

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);


  const deleteBlog = async (blogId) => {
    try {
      const response = await fetch(`${baseUrl}/api/dashboard/deleteblog/${blogId}`, {
        method: 'PUT',
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Failed to delete blog:', errorData.message);
        alert(errorData.message || 'Failed to delete the blog.');
        return;
      }

      const result = await response.json();
      console.log('Delete blog response:', result);
      alert(result.message || 'Blog deleted successfully.');
      setBlogs(blogs.filter((blog) => blog.blog_id !== blogId)); // Remove blog from state after successful deletion
    } catch (error) {
      console.error('Error deleting blog:', error);
      alert('Failed to delete the blog.');
    }
  };


  return (
     <DashboardLayout>

      {/* Top Bar */}
      {/* <div className="w-full px-6 py-4 bg-white flex items-center justify-between shadow-sm z-10">
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            placeholder="Search blogs, posts..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent text-sm text-gray-700 placeholder-gray-400 transition"
          />
          <div className="absolute left-3 top-2.5 text-gray-400 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Profile with Dropdown */}
        {/* <div className="relative" ref={dropdownRef}>
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div className="text-right">
              <h4 className="text-sm font-semibold text-gray-800">WMH India</h4>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
            <Image
              src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Favicon.png"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full border border-gray-200 shadow object-cover"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 text-gray-500 transform transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-30 py-2">
              <a href="/dashboard/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                My Profile
              </a>
              <a href="/dashboard/edit-profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Edit Profile
              </a>
              <a href="/logout" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                Log Out
              </a>
            </div>
          )}
        </div> */}

      {/* </div> } */}

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mt-3">
        {[{
          label: 'Total Blogs',
          count: totalBlogs,
        }, {
          label: 'Total Magazines',
          count: totalMagazines,
        }, {
          label: 'Total Webitorials',
          count: totalWebitorials,
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
            {/* <tbody>
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
                      <img
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
                        <Link href={`${baseUrl}/blog/${blog.blog_slug}`}>
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
            </tbody> */}
          </table>
        </div>

        <div className="mt-6 text-center">
          <Link href="dashboard/blog-table"className="w-full sm:w-auto bg-gradient-to-b from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white px-6 py-2 rounded-full shadow-md transition">
            View All Blogs
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
}
