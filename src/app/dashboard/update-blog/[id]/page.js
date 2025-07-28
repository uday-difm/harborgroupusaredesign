"use client";
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import axios from 'axios';
import DashboardLayout from '@/app/component/DashboardLayout';
import useRoute from 'next/navigation'


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
  const { id } = router.query;

  const [values, setValues] = useState({
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
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const imageInputRef = useRef(null);
  const [existingImage, setExistingImage] = useState('');

  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        const res = await axios.get(`/api/dashboard/edit-blog/${id}`);
        const data = res.data;
        setValues({
          title: data.blog_title || '',
          tag: data.blog_tag || '',
          date: data.formatted_date || '',
          time: data.formatted_time || '',
          category: data.blog_category_id || '',
          description: data.blog_description || '',
          content: data.blog_content || '',
        });
        setExistingImage(data.blog_feature_image);
      } catch (err) {
        console.error('Failed to fetch blog:', err);
        setErrorMessage('Could not load blog data.');
      }
    };

    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/category/fetch`);
        setCategories(res.data);
      } catch (err) {
        console.error('Failed to fetch categories:', err);
      }
    };

    fetchBlog();
    fetchCategories();
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check if the file exceeds the 500KB limit
      if (file.size > 500 * 1024) {
        setErrorMessage('File size exceeds 500KB. Please upload a smaller image.');
        return;
      }
      // If the image is valid, clear the error message and store the selected image
      setErrorMessage('');
      setSelectedImage(file);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear previous errors

    const formData = new FormData();
    formData.append('blog_title', values.title);
    formData.append('blog_tag', values.tag);
    formData.append('blog_date', values.date);
    formData.append('blog_time', values.time);
    formData.append('blog_category_id', values.category);
    formData.append('blog_description', values.description);
    formData.append('blog_content', values.content);

    // Only append the feature image if a new image is selected
    if (selectedImage) {
      formData.append('blog_feature_image', selectedImage);
    } else {
      // If no new image is selected, use the existing image
      if (existingImage) {
        formData.append('blog_feature_image', existingImage);
      }
    }

    try {
      const url = `/api/dashboard/updateblog/${id}`;
      const res = await fetch(url, {
        method: 'PUT',
        body: formData,
      });

      if (res.ok) {
        const responseData = await res.json();
        if (responseData.success) {
          alert('Blog updated successfully!');
          router.push(`/dashboard`);
        } else {
          setErrorMessage(responseData.message || 'Something went wrong');
          alert('Error: ' + (responseData.message || 'Something went wrong'));
        }
      } else {
        const errorData = await res.json();
        setErrorMessage(errorData.message || 'Something went wrong');
        alert('Error: ' + (errorData.message || 'Something went wrong'));
      }
    } catch (error) {
      console.error('Error updating blog:', error);
      setErrorMessage('An error occurred while updating the blog.');
      alert('An error occurred while updating the blog.');
    }
  };

  return (
   <DashboardLayout>
        
      <Head>
        <title>Update Blog</title>
        <meta name="description" content="Update a blog post" />
      </Head>

      <div className="flex flex-col gap-9 p-4">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">Update Blog</h3>
          </div>

          <form onSubmit={handleUpdate}>
            <div className="p-6.5">
              {/* Title and Tag */}
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">Blog Title</label>
                  <input
                    type="text"
                    placeholder="Enter Title"
                    value={values.title}
                    onChange={(e) => setValues({ ...values, title: e.target.value })}
                    className="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">Tags</label>
                  <input
                    type="text"
                    placeholder="Enter Tags"
                    value={values.tag}
                    onChange={(e) => setValues({ ...values, tag: e.target.value })}
                    className="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input"
                  />
                </div>
              </div>

              {/* Image, Date & Time */}
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">Feature Image</label>
                  <input
                    type="file"
                    onChange={handleImageChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input"
                  />
                  {errorMessage && (
                    <p className="text-sm text-red-500 mt-2">{errorMessage}</p>
                  )}

                  {/* Show preview of the newly selected image */}
                  {selectedImage && (
                    <img
                      src={URL.createObjectURL(selectedImage)}
                      alt="Selected Preview"
                      className="h-20 mt-2 rounded border"
                    />
                  )}

                  {/* Show existing image if no new image is selected */}
                  {!selectedImage && existingImage && (
                    <img
                      src={`${existingImage}`}
                      alt="Current Blog Feature"
                      className="h-20 mt-2 rounded border"
                    />
                  )}
                </div>

                <div className="w-full xl:w-1/2 flex gap-4">
                  <div className="w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">Date</label>
                    <input
                      type="date"
                      value={values.date}
                      onChange={(e) => setValues({ ...values, date: e.target.value })}
                      className="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">Time</label>
                    <input
                      type="time"
                      value={values.time}
                      onChange={(e) => setValues({ ...values, time: e.target.value })}
                      className="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input"
                    />
                  </div>
                </div>
              </div>

              {/* Category & Description */}
              <div className="mb-4.5 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="mb-2.5 block text-black dark:text-white">Category</label>
                  <select
                    value={values.category}
                    onChange={(e) => setValues({ ...values, category: e.target.value })}
                    className="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input"
                  >
                    <option value="">Choose Category</option>
                    {categories.map((cate) => (
                      <option key={cate.category_id} value={cate.category_id}>
                        {cate.category_name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2.5 block text-black dark:text-white">Description</label>
                  <textarea
                    value={values.description}
                    onChange={(e) => setValues({ ...values, description: e.target.value })}
                    className="w-full h-32 rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="mb-6">
                <label className="mb-2.5 block text-black dark:text-white">Content</label>
                <JoditEditor
                  config={editorConfig}
                  value={values.content}
                  onChange={(content) => setValues({ ...values, content })}
                />
              </div>

              <div className="flex justify-end gap-4.5">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className={`rounded bg-primary py-2 px-6 font-medium text-white hover:shadow-1 ${loading || errorMessage ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={loading || errorMessage}
                >
                  {loading ? 'Updating...' : 'Update'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
  </DashboardLayout>
  );
}
