'use client';

import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import DashboardLayout from '@/app/component/DashboardLayout';
import { useRouter } from 'next/navigation';
import { FormField } from '@/app/component/dashboard-ui/FormField';
import { useToast } from '@/app/component/dashboard-ui/Toast';

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
  const { addToast } = useToast();

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
        addToast(`Please fill required fields: ${missingFields.join(', ')}`, 'error');
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
        addToast(res.message, 'success');

        // On publish you may want to clear or redirect. For drafts we keep form contents.
        if (status === '1') {
          // After publish, clear the form and optionally redirect
          clearForm(true);
          // router.push('/dashboard/blogs'); // uncomment to redirect
        }
      } else {
        addToast('Unexpected response from server.', 'error');
      }
    } catch (err) {
      console.error('Submission error:', err);
      addToast('Submission error: ' + (err.message || 'Unknown error'), 'error');
    } finally {
      setActionLoading(null);
    }
  };

  return (
    <DashboardLayout>
      <title>Add Blog</title>
      <meta name="description" content="Add a new blog post" />

      <div className="w-full">
        <div className="card-elevated p-0 overflow-hidden">
          <div className="border-b border-navy-100 py-5 px-6 bg-navy-50/50">
            <h3 className="text-xl font-bold text-navy-900 font-display">Post a Blog</h3>
          </div>

          {/* form: publish uses status '1' */}
          <form onSubmit={(e) => handleSubmit('1', e)}>
            <div className="p-6 space-y-8">
              {/* Title and Tags */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  label="Blog Title"
                  name="blogTitle"
                  placeholder="Enter Title"
                  value={values.blogTitle}
                  onChange={handleChange}
                />
                <FormField
                  label="Tags"
                  name="tags"
                  placeholder="Enter Tags"
                  value={values.tags}
                  onChange={handleChange}
                />
              </div>

              {/* Slug Field */}
              <div>
                <FormField
                  label="Manual Slug (Optional)"
                  name="manualBlogSlug"
                  placeholder="Enter Slug"
                  value={values.manualBlogSlug}
                  onChange={handleChange}
                />
                <p className="text-sm text-navy-400 mt-1">If left blank, a slug will be automatically generated from the title.</p>
              </div>

              {/* Image, Date, Time */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <FormField
                  type="file"
                  label="Feature Image"
                  name="featureImage"
                  ref={imageInputRef}
                  onChange={handleFileChange}
                />

                <div className="grid grid-cols-2 gap-6">
                  <FormField
                    type="date"
                    label="Date"
                    name="date"
                    value={values.date}
                    onChange={handleChange}
                  />
                  <FormField
                    type="time"
                    label="Time"
                    name="time"
                    value={values.time || '09:00'}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Category, Description */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-navy-800">Blog Category</label>
                  <select
                    name="blogCategory"
                    value={values.blogCategory}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white border border-navy-200 rounded-lg text-navy-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent hover:border-navy-300"
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

                <FormField
                  as="textarea"
                  rows={4}
                  label="Description"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                />
              </div>

              {/* Content Editor */}
              <div>
                <label className="text-sm font-medium text-navy-800 mb-1.5 block">Content</label>
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
              <div className="flex flex-wrap justify-end gap-4 pt-4">
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => clearForm(true)}
                >
                  Cancel
                </button>

                {/* Save Draft */}
                <button
                  type="button"
                  onClick={() => handleSubmit('0')}
                  disabled={actionLoading === 'draft'}
                  className={`px-6 py-2 rounded-lg font-medium border transition ${actionLoading === 'draft' ? 'opacity-50 cursor-not-allowed' : 'border-accent text-accent hover:bg-accent/5'}`}
                >
                  {actionLoading === 'draft' ? 'Saving...' : savedStatus === '0' ? 'Draft Saved' : 'Save Draft'}
                </button>

                {/* Publish */}
                <button
                  type="submit"
                  disabled={actionLoading === 'post' || savedStatus === '1'}
                  className={`btn-primary ${actionLoading === 'post' || savedStatus === '1' ? 'opacity-50 cursor-not-allowed' : ''}`}
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
