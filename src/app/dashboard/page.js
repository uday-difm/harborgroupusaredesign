"use client";

import { Eye, Pencil, Trash2 } from "lucide-react";
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import DashboardLayout from "../component/DashboardLayout";
import Link from "next/link";
import Image from "next/image";
import { StatCard } from "../component/dashboard-ui/StatCard";
import { DataTable } from "../component/dashboard-ui/DataTable";
import { ConfirmDialog } from "../component/dashboard-ui/ConfirmDialog";
import { useToast } from "../component/dashboard-ui/Toast";

export default function DashboardHome() {
  const [blogs, setBlogs] = useState([]); // Initialize blogs state as an empty array
  const [totalBlogs, setTotalBlogs] = useState(0); // Total blogs count for the card
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [loadingUser, setLoadingUser] = useState(true);
  const [userError, setUserError] = useState(null);
  const [user, setUser] = useState(null);
  const router = useRouter();
  const { addToast } = useToast();
  const [blogToDelete, setBlogToDelete] = useState(null);


  // Fetch user data on component mount
 useEffect(() => {
  const fetchUserData = async () => {
    try {
      const response = await fetch('/api/dashboard/checkauth', {
        method: 'GET',
        credentials: 'include' // includes cookies in request
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Fetched user data:", data);
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


   const confirmDelete = async () => {
    if (!blogToDelete) return;
    try {
      const res = await fetch("/api/dashboard/deleteblog", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ blog_id: blogToDelete }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to delete blog");
      }

      const result = await res.json();
      if (result.affectedRows > 0) {
        addToast("Blog deleted successfully", "success");
        const updatedBlogs = blogs.filter((blog) => blog.blog_id !== blogToDelete);
        setBlogs(updatedBlogs);
      }
    } catch (err) {
      addToast("Error deleting blog: " + err.message, "error");
    } finally {
      setBlogToDelete(null);
    }
  };

  const columns = [
    { label: "S.no", key: "sno", render: (row, index) => <span className="font-medium">{index + 1}</span> },
    { label: "Image", key: "image", render: (row) => (
      <Image
        width={100}
        height={100}
        src={row.blog_feature_image}
        alt="Blog"
        className="h-12 w-20 object-cover rounded-lg shadow-sm"
      />
    )},
    { label: "Title", key: "blog_title" },
    { label: "Date", key: "date", render: (row) => (
      <span className="bg-success/10 text-success px-3 py-1 rounded-full text-xs font-medium border border-success/20">
        {row.formatted_blog_date}
      </span>
    )},
    { label: "Actions", key: "actions", render: (row) => (
      <div className="flex space-x-3">
        <Link href={`/blog/${row.blog_slug}`}>
          <Eye className="w-4 h-4 text-navy-500 hover:text-accent cursor-pointer transition" />
        </Link>
        <button onClick={() => router.push(`/dashboard/update-blog/${row.blog_id}`)}>
          <Pencil className="w-4 h-4 text-navy-500 hover:text-accent cursor-pointer transition" />
        </button>
        <button onClick={() => setBlogToDelete(row.blog_id)}>
          <Trash2 className="w-4 h-4 text-navy-500 hover:text-error cursor-pointer transition" />
        </button>
      </div>
    )}
  ];

  return (
    <DashboardLayout>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mt-3">
        <StatCard 
          label="Total Blogs"
          count={totalBlogs}
          href="/dashboard/blog-table"
        />
      </div>

      {/* Latest Blogs Table */}
      <div className="mb-8">
        <div className="text-lg sm:text-xl font-bold mb-4 text-navy-900 font-display">Latest Blogs</div>
        <DataTable
          columns={columns}
          data={blogs}
          isLoading={isLoading}
          keyField="blog_id"
        />
        <div className="mt-6 text-center">
          <Link href="dashboard/blog-table" className="w-full sm:w-auto btn-primary">
            View All Blogs
          </Link>
        </div>
      </div>

      <ConfirmDialog 
        isOpen={!!blogToDelete}
        title="Delete Blog"
        message="Are you sure you want to delete this blog? This action cannot be undone."
        onConfirm={confirmDelete}
        onCancel={() => setBlogToDelete(null)}
        confirmText="Delete"
      />
    </DashboardLayout>
  );
}
