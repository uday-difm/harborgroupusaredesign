"use client";

import { useState, useEffect } from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import Head from 'next/head';
import DashboardLayout from '@/app/component/DashboardLayout';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ReactPaginate from 'react-paginate';

export default function BlogTable() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const blogsPerPage = 5;
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [userError, setUserError] = useState(null);

  // Fetch logged-in user (same as before)
  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await fetch('/api/dashboard/user', {
  //         credentials: 'include',
  //       });

  //       if (response.ok) {
  //         const data = await response.json();
  //         setUser(data.user);
  //       } else if (response.status === 401 || response.status === 403) {
  //         router.push('/dashboard/login');
  //       } else {
  //         const errorData = await response.json();
  //         setUserError(errorData.error || 'Failed to fetch user data.');
  //       }
  //     } catch (err) {
  //       setUserError('An unexpected error occurred while fetching user data.');
  //       console.error('Fetch user error:', err);
  //     } finally {
  //       setLoadingUser(false);
  //     }
  //   };

  //   fetchUserData();
  // }, [router]);

  // Fetch all blogs once
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true);
        // Fetch ALL blogs, no pagination params
        const res = await fetch('/api/dashboard/fetchblog');

        if (!res.ok) throw new Error('Failed to fetch blogs');

        const data = await res.json();
        // Assume data.data is array of blogs
        setBlogs(data.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Calculate current page blogs slice
  const offset = currentPage * blogsPerPage;
  const currentBlogs = blogs.slice(offset, offset + blogsPerPage);
  const pageCount = Math.ceil(blogs.length / blogsPerPage);

  // Handle pagination click
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Delete blog (same as before)
  const deleteBlog = async (blogId) => {
    try {
      const res = await fetch('/api/dashboard/deleteblog', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ blog_id: blogId }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to delete blog');
      }

      const result = await res.json();
      if (result.affectedRows > 0) {
        alert('Blog deleted successfully.');
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.blog_id !== blogId));
      }
    } catch (err) {
      alert('Error deleting blog: ' + err.message);
    }
  };

  return (
    <DashboardLayout>
      <Head>
        <title>Blog Table</title>
        <meta name="description" content="Paginated blog list" />
      </Head>

      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 shadow-md p-4 sm:p-6 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Blog Table</h2>
          </div>

          {isLoading ? (
            <p className="text-gray-600 dark:text-gray-300">Loading...</p>
          ) : error ? (
            <p className="text-red-500">Error: {error}</p>
          ) : (
            <>
              {/* Blog Table */}
              <div className="overflow-x-auto">
                <table className="w-full table-auto text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200">
                      <th className="px-4 py-3 text-left">S.No</th>
                      <th className="px-4 py-3 text-left">Blog Title</th>
                      <th className="px-4 py-3 text-left">Image</th>
                      <th className="px-4 py-3 text-left">Date</th>
                      <th className="px-4 py-3 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentBlogs.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="text-center py-4 text-gray-500">
                          No blogs available
                        </td>
                      </tr>
                    ) : (
                      currentBlogs.map((data, index) => (
                        <tr
                          key={data.blog_id}
                          className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                        >
                          <td className="px-4 py-3 text-gray-700 dark:text-gray-200">
                            {offset + index + 1}
                          </td>
                          <td className="px-4 py-3 text-gray-800 dark:text-white">{data.blog_title}</td>
                          <td className="px-4 py-3">
                            <Image
                              src={data.blog_feature_image}
                              alt={data.blog_title}
                              width={100}
                              height={60}
                              className="object-cover"
                            />
                          </td>
                          <td className="px-4 py-3">
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                              {data.formatted_blog_date}
                            </span>
                          </td>
                          <td className="py-3">
                            <div className="flex space-x-3 justify-center">
                              <button onClick={() => router.push(`/dashboard/update-blog/${data.blog_id}`)}>
                                <Pencil className="w-4 h-4 text-slate-500 hover:text-yellow-500 cursor-pointer" />
                              </button>
                              <button onClick={() => deleteBlog(data.blog_id)}>
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

              {/* Pagination */}
              <div className="pt-4 flex justify-center">
                <ReactPaginate
                  pageCount={pageCount}
                  onPageChange={handlePageChange}
                  forcePage={currentPage}
                  containerClassName="inline-flex space-x-2"
                  pageClassName="border border-gray-300 rounded"
                  pageLinkClassName="block px-3 py-3 text-sm text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-600 cursor-pointer leading-none"
                  activeLinkClassName="bg-blue-500 text-white"
                  previousLabel="Prev"
                  nextLabel="Next"
                  breakLabel="..."
                  previousClassName="border border-gray-300 rounded px-3 py-3 text-sm text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-600 cursor-pointer leading-none"
                  nextClassName="border border-gray-300 rounded px-3 py-3 text-sm text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-600 cursor-pointer leading-none"
                />

              </div>
            </>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
