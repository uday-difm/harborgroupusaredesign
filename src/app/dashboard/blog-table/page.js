"use client";

import { useState, useEffect } from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import Head from 'next/head';
import DashboardLayout from '@/app/component/DashboardLayout';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ReactPaginate from 'react-paginate';
import { DataTable } from '@/app/component/dashboard-ui/DataTable';
import { ConfirmDialog } from '@/app/component/dashboard-ui/ConfirmDialog';
import { useToast } from '@/app/component/dashboard-ui/Toast';

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
  const [publishingId, setPublishingId] = useState(null);
  const { addToast } = useToast();
  const [blogToDelete, setBlogToDelete] = useState(null);
  const [blogToPublish, setBlogToPublish] = useState(null);

  // Fetch logged-in user (same as before)
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/dashboard/checkauth', {
          credentials: 'include',
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

  const confirmDelete = async () => {
    if (!blogToDelete) return;
    try {
      const res = await fetch('/api/dashboard/deleteblog', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ blog_id: blogToDelete }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to delete blog');
      }

      const result = await res.json();
      if (result.affectedRows > 0) {
        addToast('Blog deleted successfully.', 'success');
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.blog_id !== blogToDelete));
      }
    } catch (err) {
      addToast('Error deleting blog: ' + err.message, 'error');
    } finally {
      setBlogToDelete(null);
    }
  };

  const confirmPublish = async () => {
    if (!blogToPublish) return;
    try {
      setPublishingId(blogToPublish);
      const res = await fetch('/api/dashboard/blog-publish', {
      method: 'PUT', // using PUT as an update
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ blog_id: blogId, status: 1 }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || 'Failed to publish');
    }

    const json = await res.json();

    // if server returns success, update local state
      if (json.affectedRows === undefined || json.affectedRows > 0 || json.success) {
        setBlogs((prev) =>
          prev.map((b) => (b.blog_id === blogToPublish ? { ...b, status: 1 } : b))
        );
        addToast('Published successfully.', 'success');
      } else {
        throw new Error(json.message || 'Publish failed');
      }
    } catch (err) {
      console.error('Publish error:', err);
      addToast('Error publishing: ' + (err.message || 'Unknown error'), 'error');
    } finally {
      setPublishingId(null);
      setBlogToPublish(null);
    }
  };

  const columns = [
    { label: "S.No", key: "sno", render: (row, index) => <span className="font-medium text-navy-700">{offset + index + 1}</span> },
    { label: "Blog Title", key: "blog_title", render: (row) => <span className="text-navy-900 font-medium">{row.blog_title}</span> },
    { label: "Image", key: "image", render: (row) => (
      <Image
        src={row.blog_feature_image}
        alt={row.blog_title}
        width={100}
        height={60}
        className="object-cover rounded-lg shadow-sm w-20 h-12"
      />
    )},
    { label: "Date", key: "date", render: (row) => (
      <span className="bg-success/10 text-success px-3 py-1 rounded-full text-xs font-medium border border-success/20">
        {row.formatted_blog_date}
      </span>
    )},
    { label: "Status", key: "status", render: (row) => (
      String(row.status) === '1' ? (
        <span className="px-3 py-1 text-xs font-medium rounded-full text-success bg-success/10 border border-success/20">
          Published
        </span>
      ) : (
        <button
          onClick={() => setBlogToPublish(row.blog_id)}
          disabled={publishingId === row.blog_id}
          className={`px-3 py-1 text-xs font-medium rounded-full border transition ${
            publishingId === row.blog_id 
              ? 'opacity-50 cursor-not-allowed text-accent/70 bg-accent/10 border-accent/20' 
              : 'text-accent bg-accent/10 border-accent/20 hover:bg-accent/20'
          }`}
          title="Click to publish"
        >
          {publishingId === row.blog_id ? 'Publishing...' : 'Draft'}
        </button>
      )
    )},
    { label: "Actions", key: "actions", render: (row) => (
      <div className="flex space-x-3 justify-center">
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
      <Head>
        <title>Blog Table</title>
        <meta name="description" content="Paginated blog list" />
      </Head>

      <div className="w-full">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
            <h2 className="text-2xl font-bold text-navy-900 font-display">Blog Table</h2>
          </div>

          {error ? (
            <p className="text-error font-medium p-4 card border-error/20 bg-error/5">Error: {error}</p>
          ) : (
            <>
              <DataTable 
                columns={columns}
                data={currentBlogs}
                isLoading={isLoading}
                keyField="blog_id"
                emptyMessage="No blogs available"
              />

              {/* Pagination */}
              {!isLoading && pageCount > 1 && (
                <div className="pt-4 flex justify-center">
                  <ReactPaginate
                    pageCount={pageCount}
                    onPageChange={handlePageChange}
                    forcePage={currentPage}
                    containerClassName="inline-flex space-x-2"
                    pageClassName="border border-navy-200 rounded transition hover:bg-navy-50"
                    pageLinkClassName="block px-3 py-2 text-sm text-navy-700 cursor-pointer"
                    activeLinkClassName="bg-navy-900 text-white border-navy-900"
                    previousLabel="Prev"
                    nextLabel="Next"
                    breakLabel="..."
                    previousClassName="border border-navy-200 rounded transition hover:bg-navy-50 text-sm text-navy-700 cursor-pointer flex items-center px-3"
                    nextClassName="border border-navy-200 rounded transition hover:bg-navy-50 text-sm text-navy-700 cursor-pointer flex items-center px-3"
                    disabledClassName="opacity-50 cursor-not-allowed hover:bg-transparent"
                  />
                </div>
              )}
            </>
          )}
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
      
      <ConfirmDialog 
        isOpen={!!blogToPublish}
        title="Publish Blog"
        message="Are you sure you want to publish this draft? It will be visible on the public site."
        onConfirm={confirmPublish}
        onCancel={() => setBlogToPublish(null)}
        confirmText="Publish"
      />
    </DashboardLayout>
  );
}
