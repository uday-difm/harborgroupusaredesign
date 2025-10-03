"use client";
import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import axios from 'axios';
import DashboardLayout from '@/app/component/DashboardLayout';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

const editorConfig = {
  readonly: false,
  toolbar: true,
  spellcheck: true,
  language: 'en',
  toolbarButtonSize: 'medium',
  showCharsCounter: true,
  showWordsCounter: true,
  showXPathInStatusbar: false,
  askBeforePasteHTML: true,
  askBeforePasteFromWord: true,
  uploader: {
    insertImageAsBase64URI: true,
  },
  width: '100%',
  minHeight: 500,
};

export default function UpdateBlog() {
  const router = useRouter();
  const params = useParams();
  const id = params.id; // Match the [slug] or [id] from the URL

  const [values, setValues] = useState({
    id: id || '', // Ensure id is set from params
    slug: '',
    title: '',
    tag: '',
    date: '',
    time: '',
    category: '',
    description: '',
    content: '',
  });

  const [categories, setCategories] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [existingImage, setExistingImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState(''); // Used for success messages
  const imageInputRef = useRef(null);


  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        // Fetch blog data
        // NOTE: Keeping the fetch for reading data as the original, as it seemed to work previously.
        const res = await axios.get(`/api/dashboard/getblog/${id}`);
        // Assuming the first element of data array contains the blog details
        const data = res.data.data[0];

        // Format dates correctly for input fields
        const blogDate = data.formatted_blog_date || (data.blog_date ? new Date(data.blog_date).toISOString().split('T')[0] : '');
        const blogTime = data.formatted_blog_time || data.blog_time || '';


        setValues({
          id: data.blog_id || '',
          slug: data.blog_slug || '',
          title: data.blog_title || '',
          tag: data.blog_tag || '',
          date: blogDate, // Use formatted date
          time: blogTime, // Use raw time string
          category: data.blog_category_id || '',
          description: data.blog_description || '',
          content: data.blog_content || '',
        });

        setExistingImage(data.blog_feature_image || '');
      } catch (err) {
        console.error('Failed to fetch blog:', err);
        setErrorMessage('Could not load blog data.');
      }
    };

    const fetchCategories = async () => {
      try {
        const res = await axios.get(`/api/dashboard/fatchcategory`);
        // Ensure categories is an array, defaulting if response structure is nested or empty
        setCategories(res.data.categories || res.data || []);
      } catch (err) {
        console.error('Failed to fetch categories:', err);
        setCategories([]);
      }
    };

    fetchBlog();
    fetchCategories();
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 500 * 1024) { // 500 KB limit
        setErrorMessage('File size exceeds 500KB. Please upload a smaller image.');
        setSelectedImage(null);
        return;
      }
      setErrorMessage('');
      setSelectedImage(file);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setMessage(''); // Clear old messages

    const formData = new FormData();
    formData.append('blog_id', values.id);
    formData.append('blog_title', values.title);
    formData.append('blog_slug', values.slug);
    formData.append('blog_tag', values.tag);
    formData.append('blog_date', values.date);
    formData.append('blog_time', values.time);
    formData.append('blog_category_id', values.category);
    formData.append('blog_description', values.description);
    formData.append('blog_content', values.content);

    if (selectedImage) {
      // Only append the new file object
      formData.append('blog_feature_image', selectedImage);
    } else if (existingImage) {
      // Append the existing URL/path if no new file is selected
      formData.append('existingImage', existingImage);
    }

    // FIX: Removing the redundant '/dashboard' from the API call path to compensate
    // for server misconfiguration which is leading to double prefixing (e.g., 
    // .../dashboard/api/dashboard/... instead of .../api/dashboard/...).
    // Since the API route is under app/api/dashboard/, we will try to only call
    // the segments after /api/ to hopefully correct the path resolution.
    const pathSegments = `/edit-blog/${id}`;
    
    try {
      const res = await fetch(`/api${pathSegments}`, {
        method: 'PUT',
        body: formData,
      });

      // The 404 response is HTML, not JSON, causing SyntaxError. We must check 
      // the response type before attempting to parse as JSON.
      const contentType = res.headers.get("content-type");
      if (!res.ok && contentType && contentType.indexOf("application/json") === -1) {
          throw new Error(`Server returned status ${res.status} but content type was not JSON. (Likely a 404 HTML page)`);
      }
      
      const result = await res.json();

      if (res.ok && result?.success) {
        setMessage(result.message || 'Blog updated successfully!');
        setErrorMessage('');
        // Delay redirect to allow user to see the success message
        setTimeout(() => {
            router.push('/dashboard/blog-table');
        }, 1500); 
      } else {
        setMessage('');
        const errorDetails = result?.error ? ` (${result.error})` : '';
        setErrorMessage(result?.message || 'Failed to update blog. Please check your inputs.' + errorDetails);
      }

    } catch (err) {
      console.error('Error updating blog:', err);
      // Display a user-friendly message for the JSON parsing error (which is caused by the 404)
      setErrorMessage(
        err.message.includes("404") || err.message.includes("Unexpected token")
          ? 'Error: The server could not find the update endpoint (404). Check your deployment path configuration.'
          : 'An unexpected error occurred while updating the blog.'
      );
    } finally {
      setLoading(false);
    }
  };


  return (
    <DashboardLayout>

      <Head>
        <title>Update Blog</title>
        <meta name="description" content="Update a blog post" />
      </Head>

      <div className="flex flex-col gap-9 p-4">
        <div className="rounded-xl border border-stroke bg-white shadow-lg dark:border-strokedark dark:bg-boxdark p-6">
          <div className="border-b border-stroke py-4 dark:border-strokedark mb-6">
            <h3 className="text-xl font-bold text-black dark:text-white">Update Blog Post</h3>
          </div>

          <form onSubmit={handleUpdate}>
            <input type='hidden' value={values.id} />

            {/* Success and error messages display */}
            {errorMessage && (
                <div className="p-3 mb-4 text-red-700 bg-red-100 rounded-lg border border-red-300 font-medium">
                    {errorMessage}
                </div>
            )}

            {message && (
                <div className="p-3 mb-4 text-green-700 bg-green-100 rounded-lg border border-green-300 font-medium">
                    {message}
                </div>
            )}
            
            {/* Title and Tag */}
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">Blog Title</label>
                <input
                  type="text"
                  placeholder="Enter Title"
                  value={values.title}
                  onChange={(e) => setValues({ ...values, title: e.target.value })}
                  className="w-full rounded-lg border border-stroke bg-white dark:bg-form-input py-3 px-5 text-black outline-none focus:border-sky-500 transition"
                />
              </div>

              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">Tags</label>
                <input
                  type="text"
                  placeholder="Enter Tags (comma-separated)"
                  value={values.tag}
                  onChange={(e) => setValues({ ...values, tag: e.target.value })}
                  className="w-full rounded-lg border border-stroke bg-white dark:bg-form-input py-3 px-5 text-black outline-none focus:border-sky-500 transition"
                />
              </div>
            </div>
            
            {/* Slug Field */}
            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">Slug</label>
              <input
                type="text"
                placeholder="Enter Slug (e.g., my-awesome-blog-post)"
                value={values.slug}
                onChange={(e) => setValues({ ...values, slug: e.target.value })}
                className="w-full rounded-lg border border-stroke bg-white dark:bg-form-input py-3 px-5 text-black outline-none focus:border-sky-500 transition"
              />
            </div>
            
            {/* Image, Date & Time */}
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">Feature Image (Max 500KB)</label>
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-white dark:bg-form-input py-3 px-5 font-medium text-black outline-none transition focus:border-sky-500"
                />
                

                <div className="mt-4 flex items-center space-x-4">
                    {/* Show preview of the newly selected image */}
                    {selectedImage && (
                        <div className='relative w-24 h-16 rounded-lg overflow-hidden border border-gray-300'>
                            <Image
                            layout='fill'
                            objectFit='cover'
                            src={URL.createObjectURL(selectedImage)}
                            alt="Selected Preview"
                            />
                        </div>
                    )}

                    {/* Show existing image if no new image is selected */}
                    {!selectedImage && existingImage && (
                        <div className='relative w-24 h-16 rounded-lg overflow-hidden border border-gray-300'>
                            <Image
                            layout='fill'
                            objectFit='cover'
                            src={`${existingImage}`}
                            alt="Current Blog Feature"
                            />
                        </div>
                    )}
                    {(!selectedImage && !existingImage) && (
                         <span className="text-sm text-gray-500 dark:text-gray-400">No feature image set.</span>
                    )}
                </div>
              </div>

              <div className="w-full xl:w-1/2 flex gap-4">
                <div className="w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">Date</label>
                  <input
                    type="date"
                    value={values.date}
                    onChange={(e) => setValues({ ...values, date: e.target.value })}
                    className="w-full rounded-lg border border-stroke bg-white dark:bg-form-input py-3 px-5 text-black outline-none focus:border-sky-500 transition"
                  />
                </div>
                <div className="w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">Time</label>
                  <input
                    type="time"
                    value={values.time}
                    onChange={(e) => setValues({ ...values, time: e.target.value })}
                    className="w-full rounded-lg border border-stroke bg-white dark:bg-form-input py-3 px-5 text-black outline-none focus:border-sky-500 transition"
                  />
                </div>
              </div>
            </div>

            {/* Category & Description */}
            <div className="mb-4.5 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="mb-2.5 block text-black dark:text-white">Category</label>
                <select
                  value={values.category}
                  onChange={(e) => setValues({ ...values, category: e.target.value })}
                  className="w-full rounded-lg border border-stroke bg-white dark:bg-form-input py-3 px-5 text-black outline-none focus:border-sky-500 transition appearance-none"
                >
                  <option value="">Choose Category</option>
                  {categories.length > 0 ? (
                    categories.map((cat) => (
                      <option key={cat.id || cat.category_id} value={cat.id || cat.category_id}>
                        {cat.category || cat.category_name}
                      </option>
                    ))
                  ) : (
                    <option disabled>Loading or No Categories Available</option>
                  )}
                </select>
              </div>

              <div>
                <label className="mb-2.5 block text-black dark:text-white">Description</label>
                <textarea
                  placeholder="A short description for the blog list view"
                  value={values.description}
                  onChange={(e) => setValues({ ...values, description: e.target.value })}
                  className="w-full h-32 rounded-lg border border-stroke bg-white dark:bg-form-input py-3 px-5 text-black outline-none focus:border-sky-500 transition resize-none"
                />
              </div>
            </div>

            {/* Content */}
            <div className="mb-6">
              <label className="mb-2.5 block text-black dark:text-white">Content</label>
              <div className="rounded-lg overflow-hidden border border-stroke dark:border-form-strokedark">
                <JoditEditor
                  config={editorConfig}
                  value={values.content}
                  onChange={(content) => setValues({ ...values, content })}
                />
              </div>
            </div>

            <div className="flex justify-end gap-4.5">
              <button
                type="button"
                onClick={() => router.back()}
                className="rounded-lg border border-stroke py-2 px-6 font-medium text-black dark:text-white hover:bg-gray-100 dark:hover:bg-strokedark transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                className={`rounded-lg bg-sky-500 py-2 px-6 font-medium text-white hover:bg-sky-600 transition ${loading || errorMessage ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading || errorMessage}
              >
                {loading ? 'Updating...' : 'Update Blog'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
