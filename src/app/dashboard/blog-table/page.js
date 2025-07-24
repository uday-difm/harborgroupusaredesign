"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import Head from 'next/head';

import DashboardLayout from '@/app/component/DashboardLayout';
import ReactPaginate from 'react-paginate';
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';

export default function BlogTable() {
  const [blogs, setBlogs] = useState([]);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const blogsPerPage = 15;

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         setIsLoading(true);
//         const res = await fetch(
//           `/api/dashboard/blog/fetch?page=${currentPage + 1}&limit=${blogsPerPage}`
//         );

//         if (!res.ok) {
//           throw new Error('Failed to fetch blogs');
//         }

//         const data = await res.json();
//         setBlogs(data.blogs);
//         setTotalBlogs(data.total_blogs);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, [currentPage]);

//   const handlePageChange = ({ selected }) => {
//     setCurrentPage(selected);
//   };


// const deleteBlog = async (blogId) => {
//     try {
//       const response = await fetch(`/api/dashboard/deleteblog/${blogId}`, {
//         method: 'PUT',
//       });
  
//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error('Failed to delete blog:', errorData.message);
//         alert(errorData.message || 'Failed to delete the blog.');
//         return;
//       }
  
//       const result = await response.json();
//       console.log('Delete blog response:', result);
//       alert(result.message || 'Blog deleted successfully.');
//       setBlogs(blogs.filter((blog) => blog.blog_id !== blogId)); // Remove blog from state after successful deletion
//     } catch (error) {
//       console.error('Error deleting blog:', error);
//       alert('Failed to delete the blog.');
//     }
//   };

//   const handleDownloadXML = () => {
//     let xmlData = `<?xml version="1.0" encoding="UTF-8"?>\n<blogs>\n`;

//     blogs.forEach((blog) => {
//       const url = `${baseUrl}/blog/${blog.blog_slug}`;
//       xmlData += `  <blog>\n`;
//       xmlData += `    <id>${blog.blog_id}</id>\n`;
//       xmlData += `    <title>${blog.blog_title}</title>\n`;
//       xmlData += `    <slug>${blog.blog_slug}</slug>\n`;
//       xmlData += `    <url>${url}</url>\n`;
//       xmlData += `    <date>${blog.formatted_blog_date}</date>\n`;
//       xmlData += `  </blog>\n`;
//     });

//     xmlData += `</blogs>`;

//     const blob = new Blob([xmlData], { type: 'application/xml' });
//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(blob);
//     link.download = 'blogs.xml';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };


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
              Total Blogs: {totalBlogs}
            </h2>
            {/* <button
              onClick={handleDownloadXML}
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm px-5 py-2 rounded-lg transition duration-300"
            >
              Download XML
            </button> */}
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
                            {data.blog_title}
                          </td>
                          <td className="px-4 py-3">
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                              {data.formatted_blog_date}
                            </span>
                          </td>
                          <td className="py-3">
                      <div className="flex space-x-3">
                      <Link href={`${baseUrl}/blog/${data.blog_slug}`}>
                          <Eye className="w-4 h-4 text-slate-500 hover:text-blue-600 cursor-pointer" />
                        </Link>
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
                  pageCount={Math.ceil(totalBlogs / blogsPerPage)}
                  onPageChange={handlePageChange}
                  forcePage={currentPage} // ✅ FIX applied here
                  containerClassName="flex flex-wrap gap-2"
                  pageClassName="px-3 py-2 border border-gray-300 rounded text-sm text-gray-700 hover:primary dark:hover:bg-gray-600 dark:text-white"
                  activeClassName="bg-primary text-white"
                  previousLabel="Prev"
                  nextLabel="Next"
                  breakLabel="..."
                  previousClassName="px-3 py-2 border border-gray-300 rounded text-sm text-gray-700 hover:primary dark:hover:bg-gray-600 dark:text-white"
                  nextClassName="px-3 py-2 border border-gray-300 rounded text-sm text-gray-700 hover:primary dark:hover:bg-gray-600 dark:text-white"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
