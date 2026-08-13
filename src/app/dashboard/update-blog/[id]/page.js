"use client";
import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import axios from 'axios';
import DashboardLayout from '@/app/component/DashboardLayout';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
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
  uploader: { insertImageAsBase64URI: true },
  width: '100%',
  minHeight: 500,
};

export default function UpdateBlog() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;

  const [values, setValues] = useState({
    blog_id: id || '',
    blog_slug: '',
    blog_title: '',
    blog_tag: '',
    blog_date: '',
    blog_time: '',
    blog_category_id: '',
    blog_description: '',
    blog_content: '',
    status: '1',
  });

  const [categories, setCategories] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [existingImage, setExistingImage] = useState('');
  const [actionLoading, setActionLoading] = useState(null); // null | 'draft' | 'update'
  const [loading, setLoading] = useState(false);
  const imageInputRef = useRef(null);
  const { addToast } = useToast();

  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`/api/dashboard/getblog/${id}`);
        const data = res.data.data?.[0] || {};
        const blogDate = data.formatted_blog_date || '';
        const blogTime = data.formatted_blog_time || '';

        setValues(prev => ({
          ...prev,
          blog_id: data.blog_id || '',
          blog_slug: data.blog_slug || '',
          blog_title: data.blog_title || '',
          blog_tag: data.blog_tag || '',
          blog_date: blogDate,
          blog_time: blogTime,
          blog_category_id: data.blog_category_id || '',
          blog_description: data.blog_description || '',
          blog_content: data.blog_content || '',
          status: data.status != null ? String(data.status) : (prev.status || '1'),
        }));

        setExistingImage(data.blog_feature_image || '');
      } catch (err) {
        console.error('Failed to fetch blog:', err);
        addToast('Could not load blog data.', 'error');
      } finally {
        setLoading(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const res = await axios.get(`/api/dashboard/fatchcategory`);
        setCategories(res.data.categories || []);
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
      if (file.size > 500 * 1024) {
        addToast('File size exceeds 500KB. Please upload a smaller image.', 'error');
        return;
      }
      setSelectedImage(file);
    }
  };

  /**
   * handleUpdate(status, e)
   * status:
   *   null/undefined => preserve existing values.status (no change to status)
   *   "0"            => save as draft (force status = "0")
   *   "1"            => force publish (force status = "1")
   */
  const handleUpdate = async (status = null, e) => {
    if (e && e.preventDefault) e.preventDefault();

    const action = status === '0' ? 'draft' : 'update';
    setActionLoading(action);

    // Decide statusToSend
    const statusToSend = status === null || typeof status === 'undefined' ? String(values.status ?? '1') : String(status);

    // Basic validation
    if (!values.blog_title || (statusToSend === '1' && !values.blog_category_id)) {
      addToast('Please provide required fields. Title is required; category is required for publish.', 'error');
      setActionLoading(null);
      return;
    }

    try {
      const formData = new FormData();
      // include blog_id fallback: prefer id route param, then state
      const endpointBlogId = id || values.blog_id || '';
      formData.append('blog_id', endpointBlogId);
      formData.append('blog_title', values.blog_title ?? '');
      formData.append('blog_slug', values.blog_slug ?? '');
      formData.append('blog_tag', values.blog_tag ?? '');
      formData.append('blog_date', values.blog_date ?? '');
      formData.append('blog_time', values.blog_time ?? '');
      formData.append('blog_category_id', values.blog_category_id ?? '');
      formData.append('blog_description', values.blog_description ?? '');
      formData.append('blog_content', values.blog_content ?? '');
      formData.append('status', String(statusToSend));

      if (selectedImage) {
        formData.append('blog_feature_image', selectedImage);
      } else if (existingImage) {
        formData.append('existingImage', existingImage);
      }

      // Debugging logs (remove in production)
      console.log('Updating blog endpoint id:', endpointBlogId);
      for (const pair of formData.entries()) {
        console.log('formData key:', pair[0]);
      }

      if (!endpointBlogId) {
        addToast('Missing blog id — cannot update.', 'error');
        setActionLoading(null);
        return;
      }

      const res = await fetch(`/api/dashboard/edit-blog/${endpointBlogId}`, {
        method: 'PUT',
        body: formData,
      });

      const result = await res.json();

      if (res.ok && result?.success) {
        // Prefer server message when available
        if (statusToSend === '0') {
          addToast(result.message || 'Draft saved successfully!', 'success');
        } else {
          addToast(result.message || 'Blog updated and published.', 'success');
        }

        // update local status so future "Update" preserves it
        setValues(prev => ({ ...prev, status: statusToSend }));

        // redirect on publish (optional)
        if (statusToSend === '1') {
          setTimeout(() => router.push('/dashboard/blog-table'), 1200);
        }
      } else {
        addToast(result?.message || 'Failed to update blog.', 'error');
      }
    } catch (err) {
      console.error('Error updating blog:', err);
      addToast('An unexpected error occurred while updating the blog.', 'error');
    } finally {
      setActionLoading(null);
    }
  };

  return (
    <DashboardLayout>
      <Head>
        <title>Update Blog</title>
        <meta name="description" content="Update a blog post" />
      </Head>

      <div className="w-full">
        <div className="card-elevated p-0 overflow-hidden">
          <div className="border-b border-navy-100 py-5 px-6 bg-navy-50/50">
            <h3 className="text-xl font-bold text-navy-900 font-display">Update Blog</h3>
          </div>

          <form onSubmit={(e) => handleUpdate(null, e)}>
            <input type="hidden" value={values.blog_id} />
            <div className="p-6.5 space-y-8">
              {/* Title and Tag */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  label="Blog Title"
                  name="blog_title"
                  placeholder="Enter Title"
                  value={values.blog_title}
                  onChange={(e) => setValues({ ...values, blog_title: e.target.value })}
                />
                <FormField
                  label="Tags"
                  name="blog_tag"
                  placeholder="Enter Tags"
                  value={values.blog_tag}
                  onChange={(e) => setValues({ ...values, blog_tag: e.target.value })}
                />
              </div>

              {/* Slug Field */}
              <div>
                <FormField
                  label="Slug"
                  name="blog_slug"
                  placeholder="Enter Slug"
                  value={values.blog_slug}
                  onChange={(e) => setValues({ ...values, blog_slug: e.target.value })}
                />
                <p className="text-sm text-navy-400 mt-1">If left blank, slug can be auto-generated.</p>
              </div>

              {/* Image, Date & Time */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <FormField
                    type="file"
                    label="Feature Image"
                    name="featureImage"
                    ref={imageInputRef}
                    onChange={handleImageChange}
                  />

                  {selectedImage && (
                    <Image
                      width={100}
                      height={60}
                      src={URL.createObjectURL(selectedImage)}
                      alt="Selected Preview"
                      className="h-20 mt-2 rounded border"
                    />
                  )}

                  {!selectedImage && existingImage && (
                    <Image
                      width={100}
                      height={60}
                      src={`${existingImage}`}
                      alt="Current Blog Feature"
                      className="h-20 mt-2 rounded border"
                    />
                  )}
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <FormField
                    type="date"
                    label="Date"
                    name="blog_date"
                    value={values.blog_date}
                    onChange={(e) => setValues({ ...values, blog_date: e.target.value })}
                  />
                  <FormField
                    type="time"
                    label="Time"
                    name="blog_time"
                    value={values.blog_time}
                    onChange={(e) => setValues({ ...values, blog_time: e.target.value })}
                  />
                </div>
              </div>

              {/* Category & Description */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-navy-800">Category</label>
                  <select
                    value={values.blog_category_id}
                    onChange={(e) => setValues({ ...values, blog_category_id: e.target.value })}
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
                  name="blog_description"
                  value={values.blog_description}
                  onChange={(e) => setValues({ ...values, blog_description: e.target.value })}
                />
              </div>

              {/* Content */}
              <div>
                <label className="text-sm font-medium text-navy-800 mb-1.5 block">Content</label>
                <JoditEditor
                  config={editorConfig}
                  value={values.blog_content}
                  onChange={(content) => setValues({ ...values, blog_content: content })}
                />
              </div>

              <div className="flex flex-wrap justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="btn-secondary"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={() => handleUpdate('0')}
                  disabled={actionLoading === 'draft'}
                  className={`px-6 py-2 rounded-lg font-medium border transition ${actionLoading === 'draft' ? 'opacity-50 cursor-not-allowed' : 'border-accent text-accent hover:bg-accent/5'}`}
                >
                  {actionLoading === 'draft' ? 'Saving Draft...' : 'Save Draft'}
                </button>

                <button
                  type="submit"
                  onClick={() => handleUpdate('1')}
                  className={`btn-primary ${actionLoading === 'update' ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={actionLoading === 'update'}
                >
                  {actionLoading === 'update' ? 'Updating...' : 'Update'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}