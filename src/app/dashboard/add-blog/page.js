'use client';

import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import DashboardLayout from '@/app/component/DashboardLayout';
import { useRouter } from 'next/navigation';
import { API_BASE } from '@/comman/apiClient';

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

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
        // Point the Jodit uploader to the new API route.
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
    const [loading, setLoading] = useState(false);
    const imageInputRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`/api/dashboard/checkauth`, {
                    credentials: 'include'
                });
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
                const response = await axios.get(`/api/dashboard/fatchcategory`);
                if (response.data && response.data.categories) {
                    setCategories(response.data.categories);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategories();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setValues((prev) => ({ ...prev, featureImage: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requiredFields = [
            'blogTitle',
            'tags',
            'featureImage',
            'date',
            'time',
            'blogCategory',
            'description',
            'content',
        ];

        const missingFields = requiredFields.filter(key => {
            if (key === 'featureImage') {
                return !values[key];
            }
            return !values[key] || values[key].trim() === '';
        });

        if (missingFields.length > 0) {
            console.error(`Please fill in all required fields: ${missingFields.join(', ')}`);
            alert(`Please fill in all required fields: ${missingFields.join(', ')}`);
            return;
        }

        setLoading(true);
        const formData = new FormData();
        formData.append('blogTitle', values.blogTitle);
        formData.append('tags', values.tags);
        if (values.manualBlogSlug) {
            formData.append('manualBlogSlug', values.manualBlogSlug);
        }
        formData.append('featureImage', values.featureImage);
        formData.append('date', values.date);
        formData.append('time', values.time);
        formData.append('blogCategory', values.blogCategory);
        formData.append('description', values.description);
        formData.append('content', values.content);
        formData.append('blogPublisherId', values.blogPublisherId);

        try {
            const response = await fetch(`/api/dashboard/addblog`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const res = await response.json();
            if (res.message) {
                console.log('Success:', res.message);
                alert(res.message);
                setValues({
                    blogTitle: '',
                    manualBlogSlug: '',
                    tags: '',
                    featureImage: null,
                    date: '',
                    time: '09:00',
                    blogCategory: '',
                    description: '',
                    content: '',
                    blogPublisherId: values.blogPublisherId,
                });
                if (imageInputRef.current) imageInputRef.current.value = null;
            } else {
                console.error('Error:', res.message || 'Unknown error occurred.');
                alert('Error: ' + (res.message || 'Unknown error occurred.'));
            }
        } catch (err) {
            console.error('Submission error:', err);
            alert('Submission error: ' + (err.message || 'Unknown error occurred.'));
        } finally {
            setLoading(false);
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

                    <form onSubmit={handleSubmit} >
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
                                    onChange={(newContent) => setValues({ ...values, content: newContent })}
                                />
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-end gap-4 pt-4">
                                <button
                                    type="button"
                                    className="rounded border border-stroke py-2 px-6 text-black hover:bg-gray-100 dark:border-strokedark dark:text-white"
                                    onClick={() => setValues({
                                        blogTitle: '',
                                        manualBlogSlug: '',
                                        tags: '',
                                        featureImage: null,
                                        date: '',
                                        time: '09:00',
                                        blogCategory: '',
                                        description: '',
                                        content: '',
                                        blogPublisherId: 'some-publisher-id',
                                    })}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className={`rounded bg-sky-400 py-2 px-6 text-white hover:bg-opacity-90 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    disabled={loading}>
                                    {loading ? 'Submitting...' : 'Post'}
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