"use client";

import { useState, useEffect } from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import Head from 'next/head';
import DashboardLayout from '@/app/component/DashboardLayout';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ReactPaginate from 'react-paginate';

export default function BlogTable() {
  const [blogs, setBlogs] = useState([]); // Initialize blogs state as an empty array
   const [totalBlogs, setTotalBlogs] = useState(0); // Total number of blogs for pagination

  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
   const [currentPage, setCurrentPage] = useState(0); // Current page for pagination
  const blogsPerPage = 2; // Number of blogs to show per page
  const router = useRouter();

  // Fetch blogs when the component mounts or currentPage changes
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/dashboard/fetchblog?page=${currentPage + 1}&limit=${blogsPerPage}`); // Fetch blogs with pagination

        if (!res.ok) {
          throw new Error('Failed to fetch blogs');
        }

        const data = await res.json();
        console.log('API Response:', data);  // Log the API response to verify the structure
        setBlogs(data.data || []); // Set blogs data
        setTotalBlogs(data.total || 0); // Set total number of blogs
      } catch (err) {
        setError(err.message); // Handle error if API call fails
      } finally {
        setIsLoading(false); // Set loading to false once the request completes
      }
    };

    fetchBlogs(); // Call the fetch function
  }, [currentPage]); // Run when currentPage changes

  // Handle page change
  const handlePageChange = (selected) => {
    setCurrentPage(selected.selected); // Update current page
  };


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
      <Head>
        <title>Blog Table</title>
        <meta name="description" content="Paginated blog list" />
      </Head>

      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 shadow-md p-4 sm:p-6 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              {/* Total Blogs: {blogs.length} */}
            </h2>
          </div>

          {isLoading ? (
            <p className="text-gray-600 dark:text-gray-300">Loading...</p>
          ) : error ? (
            <p className="text-red-500">Error: {error}</p>
          ) : (
            <>
              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full table-auto text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200">
                      <th className="px-4 py-3 text-left">S.no</th>
                      <th className="px-4 py-3 text-left">Blog Title</th>
                      <th className="px-4 py-3 text-left">Image</th>
                      <th className="px-4 py-3 text-left">Date</th>
                      <th className="px-4 py-3 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogs.length === 0 ? (
                      <tr>
                        <td colSpan="4" className="text-center py-4 text-gray-500">
                          No blogs available
                        </td>
                      </tr>
                    ) : (
                      blogs.map((data, index) => (
                        <tr
                          key={data.blog_id}
                          className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                        >
                         <td className="px-4 py-3 text-gray-700 dark:text-gray-200">
                            {currentPage * blogsPerPage + index + 1}
                          </td>
                          <td className="px-4 py-3 text-gray-800 dark:text-white">
                            {data.blog_title} {/* Ensure this field exists */}
                          </td>
                           <td className="px-4 py-3 text-gray-800 dark:text-white">
                            <Image src={data.blog_feature_image} width={600} height={400} style={{ height: '60px', width: '100px' }} alt={data.blog_title}/>
                             {/* Ensure this field exists */}
                          </td>
                          <td className="px-4 py-3">
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                              {data.formatted_blog_date} {/* Ensure this field exists */}
                            </span>
                          </td>
                          <td className="py-3">
                            <div className="flex space-x-3">
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
                  pageCount={Math.ceil(totalBlogs / blogsPerPage)} // Calculate total pages
                  onPageChange={handlePageChange} // Handle page change
                  forcePage={currentPage} // Ensure the current page is displayed
                  containerClassName="flex flex-wrap gap-2"
                  pageClassName="px-3 py-2 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-600"
                  activeClassName="bg-primary text-white"
                  previousLabel="Prev"
                  nextLabel="Next"
                  breakLabel="..."
                  previousClassName="px-3 py-2 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-600"
                  nextClassName="px-3 py-2 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-600"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
