'use client';

import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import DashboardLayout from '@/app/component/DashboardLayout';
import { useRouter } from 'next/navigation';

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
    url: '/api/dashboard/upload-image',
    format: 'json',
    insertImageAsBase64URI: false,
    filesVariableName: 'file',
  },
  width: '100%',
  minHeight: 500,
};



const AddBlog = () => {
  const [values, setValues] = useState({
    blogTitle: '',
    manualBlogSlug: '',
    tags: '',
    featureImage: null,
    date: '',
    time: '09:00',
    blogCategory: '',
    description: '',
    content: '',
    blogPublisherId: '1',
  });
  const [categories, setCategories] = useState([]);
  const [actionLoading, setActionLoading] = useState(null); // null | 'draft' | 'post'
  const [savedStatus, setSavedStatus] = useState(null); // null | '0' | '1'
  const imageInputRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`/api/dashboard/checkauth`, { credentials: 'include' });
        if (response.ok) {
          const data = await response.json();
          setValues((prev) => ({ ...prev, blogPublisherId: data.user.id }));
        } else if (response.status === 401 || response.status === 403) {
          router.push('/dashboard/login');
        }
      } catch (err) {
        console.error('Fetch user error:', err);
      }
    };
    fetchUserData();
  }, [router]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`/api/dashboard/fatchcategory`);
        const json = await res.json();
        if (json && json.categories) setCategories(json.categories);
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };
    fetchCategories();
  }, []);

  const clearForm = (keepPublisher = true) => {
    setValues((prev) => ({
      blogTitle: '',
      manualBlogSlug: '',
      tags: '',
      featureImage: null,
      date: '',
      time: '09:00',
      blogCategory: '',
      description: '',
      content: '',
      blogPublisherId: keepPublisher ? prev.blogPublisherId : '1',
    }));
    if (imageInputRef.current) imageInputRef.current.value = null;
    setSavedStatus(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (savedStatus !== null) setSavedStatus(null); // user edited -> allow publish
  };

  const handleFileChange = (e) => {
    setValues((prev) => ({ ...prev, featureImage: e.target.files[0] }));
    if (savedStatus !== null) setSavedStatus(null);
  };

  // status: '1' => publish, '0' => draft
  const handleSubmit = async (status, e) => {
    if (e && e.preventDefault) e.preventDefault();

    const action = status === '1' ? 'post' : 'draft';
    setActionLoading(action);

    try {
      // Validation
      const requiredForPublish = [
        'blogTitle',
        'tags',
        'featureImage',
        'date',
        'time',
        'blogCategory',
        'description',
        'content',
      ];
      const requiredForDraft = ['blogTitle'];

      const required = status === '1' ? requiredForPublish : requiredForDraft;

      const missingFields = required.filter((key) => {
        if (key === 'featureImage') return !values.featureImage;
        const v = values[key];
        return !v || (typeof v === 'string' && v.trim() === '');
      });

      if (missingFields.length > 0) {
        alert(`Please fill required fields: ${missingFields.join(', ')}`);
        setActionLoading(null);
        return;
      }

      const formData = new FormData();
      formData.append('blogTitle', values.blogTitle);
      formData.append('tags', values.tags || '');
      if (values.manualBlogSlug) formData.append('manualBlogSlug', values.manualBlogSlug);
      if (values.featureImage) formData.append('featureImage', values.featureImage);
      formData.append('date', values.date || '');
      formData.append('time', values.time || '09:00');
      formData.append('blogCategory', values.blogCategory || '');
      formData.append('description', values.description || '');
      formData.append('content', values.content || '');
      formData.append('blogPublisherId', values.blogPublisherId || '');
      formData.append('status', status); // important for backend

      const response = await fetch(`/api/dashboard/addblog`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`HTTP ${response.status}: ${text}`);
      }

      const res = await response.json();

      if (res.message) {
        // set saved status so UI disables/enables accordingly
        setSavedStatus(String(status));
        alert(res.message);

        // On publish you may want to clear or redirect. For drafts we keep form contents.
        if (status === '1') {
          // After publish, clear the form and optionally redirect
          clearForm(true);
          // router.push('/dashboard/blogs'); // uncomment to redirect
        }
      } else {
        alert('Unexpected response from server.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      alert('Submission error: ' + (err.message || 'Unknown error'));
    } finally {
      setActionLoading(null);
    }
  };

  return (
    <DashboardLayout>
      <title>Add Blog</title>
      <meta name="description" content="Add a new blog post" />

      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded border border-stroke bg-white shadow-md dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-5 px-6 dark:border-strokedark">
            <h3 className="text-lg font-semibold text-black dark:text-white">Post a Blog</h3>
          </div>

          {/* form: publish uses status '1' */}
          <form onSubmit={(e) => handleSubmit('1', e)}>
            <div className="p-6 space-y-8">
              {/* Title and Tags */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="mb-2 block text-black dark:text-white">Blog Title</label>
                  <input
                    type="text"
                    placeholder="Enter Title"
                    name="blogTitle"
                    value={values.blogTitle}
                    onChange={handleChange}
                    className="w-full rounded border border-stroke py-3 px-4 dark:border-form-strokedark dark:bg-form-input"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-black dark:text-white">Tags</label>
                  <input
                    type="text"
                    placeholder="Enter Tags"
                    name="tags"
                    value={values.tags}
                    onChange={handleChange}
                    className="w-full rounded border border-stroke py-3 px-4 dark:border-form-strokedark dark:bg-form-input"
                  />
                </div>
              </div>

              {/* Slug Field */}
              <div>
                <label className="mb-2 block text-black dark:text-white">Manual Slug (Optional)</label>
                <input
                  type="text"
                  placeholder="Enter Slug"
                  name="manualBlogSlug"
                  value={values.manualBlogSlug}
                  onChange={handleChange}
                  className="w-full rounded border border-stroke py-3 px-4 dark:border-form-strokedark dark:bg-form-input"
                />
                <p className="text-sm text-gray-500 dark:text-gray-300">If left blank, a slug will be automatically generated from the title.</p>
              </div>

              {/* Image, Date, Time */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className="mb-2 block text-black dark:text-white">Feature Image</label>
                  <input
                    type="file"
                    ref={imageInputRef}
                    name="featureImage"
                    onChange={handleFileChange}
                    className="w-full rounded border border-stroke py-3 px-4 dark:border-form-strokedark dark:bg-form-input"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="mb-2 block text-black dark:text-white">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={values.date}
                      onChange={handleChange}
                      className="w-full rounded border border-stroke py-3 px-4 dark:border-form-strokedark dark:bg-form-input"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-black dark:text-white">Time</label>
                    <input
                      type="time"
                      name="time"
                      value={values.time || '09:00'}
                      onChange={handleChange}
                      className="w-full rounded border border-stroke py-3 px-4 dark:border-form-strokedark dark:bg-form-input"
                    />
                  </div>
                </div>
              </div>

              {/* Category, Description */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="mb-2 block text-black dark:text-white">Blog Category</label>
                  <select
                    name="blogCategory"
                    value={values.blogCategory}
                    onChange={handleChange}
                    className="w-full rounded border border-stroke py-3 px-4 dark:border-form-strokedark dark:bg-form-input"
                  >
                    <option value="">Choose Category</option>
                    {categories.length > 0 ? (
                      categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.category}
                        </option>
                      ))
                    ) : (
                      <option disabled>No Categories Available</option>
                    )}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-black dark:text-white">Description</label>
                  <textarea
                    rows={4}
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    className="w-full rounded border border-stroke py-3 px-4 dark:border-form-strokedark dark:bg-form-input"
                  />
                </div>
              </div>

              {/* Content Editor */}
              <div>
                <label className="mb-2 block text-black dark:text-white">Content</label>
                <JoditEditor
                  config={editorConfig}
                  value={values.content}
                  onChange={(newContent) => {
                    setValues((prev) => ({ ...prev, content: newContent }));
                    if (savedStatus !== null) setSavedStatus(null);
                  }}
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  className="rounded border border-stroke py-2 px-6 text-black hover:bg-gray-100 dark:border-strokedark dark:text-white"
                  onClick={() => clearForm(true)}
                >
                  Cancel
                </button>

                {/* Save Draft */}
                <button
                  type="button"
                  onClick={() => handleSubmit('0')}
                  disabled={actionLoading === 'draft'}
                  className={`rounded bg-yellow-400 py-2 px-6 text-white hover:bg-opacity-90 ${actionLoading === 'draft' ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {actionLoading === 'draft' ? 'Saving...' : savedStatus === '0' ? 'Draft Saved' : 'Save Draft'}
                </button>

                {/* Publish */}
                <button
                  type="submit"
                  disabled={actionLoading === 'post' || savedStatus === '1'}
                  className={`rounded bg-[#244A78] py-2 px-6 text-white hover:bg-opacity-90 ${(actionLoading === 'post' || savedStatus === '0') ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {actionLoading === 'post' ? 'Submitting...' : 'Post'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AddBlog;
