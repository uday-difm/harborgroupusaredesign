'use client';

import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import DashboardLayout from '@/app/component/DashboardLayout';

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
        insertImageAsBase64URI: true,
    },
    width: '100%',
    minHeight: 500,
};

const AddBlog = () => {
    const [values, setValues] = useState({
        blogTitle: '', // Changed from 'title' to 'blogTitle' to match API
        manualBlogSlug: '', // Changed from 'slug' to 'manualBlogSlug' to match API
        tags: '', // Changed from 'tag' to 'tags' to match API
        featureImage: null, // Changed from 'image' to 'featureImage' to match API
        date: '',
        time: '09:00',
        blogCategory: '', // Changed from 'category' to 'blogCategory' to match API
        description: '',
        content: '',
        blogPublisherId: 'some-publisher-id', // Placeholder: You'll need to get this from your authentication system
    });
    const [categories, setCategories] = useState([]); // State to hold categories
    const [loading, setLoading] = useState(false);
    const imageInputRef = useRef(null);

    // Fetch categories on component mount
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                // Make sure the endpoint is correct
                const response = await axios.get('/api/dashboard/fatchcategory'); // Correct API endpoint

                // Check if categories are returned
                if (response.data && response.data.categories) {
                    setCategories(response.data.categories);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories(); // Call fetchCategories when the component mounts
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
        formData.append('blogPublisherId', values.blogPublisherId); // Ensure this field is included

        // Log form data for debugging
        for (let pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }

        try {
            const response = await fetch('/api/dashboard/addblog', {
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
                    blogPublisherId: 'some-publisher-id',
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
                                        name="blogTitle" // Added name prop
                                        value={values.blogTitle} // Added value prop
                                        onChange={handleChange} // Added onChange prop
                                        className="w-full rounded border border-stroke py-3 px-4 dark:border-form-strokedark dark:bg-form-input"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-black dark:text-white">Tags</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Tags"
                                        name="tags" // Changed from 'tag' to 'tags'
                                        value={values.tags} // Changed from 'tag' to 'tags'
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
                                    name="manualBlogSlug" // Changed from 'slug' to 'manualBlogSlug'
                                    value={values.manualBlogSlug} // Changed from 'slug' to 'manualBlogSlug'
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
                                            name="time" // Added name prop
                                            value={values.time || '09:00'}
                                            onChange={handleChange} // Added onChange prop
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
                                        name="blogCategory" // Changed from 'category' to 'blogCategory'
                                        value={values.blogCategory} // Changed from 'category' to 'blogCategory'
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
