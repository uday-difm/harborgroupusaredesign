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

// export async function getStaticProps() {
//   try {
//     const categories = await axios.get(`/api/category/fetch`);

//     if (categories.status === 200 && Array.isArray(categories.data)) {
//       return {
//         props: {
//           categories: categories.data,
//         },
//       };
//     } else {
//       console.error('No categories found or invalid response structure.');
//       return {
//         props: {
//           categories: [],
//         },
//       };
//     }
//   } catch (error) {
//     console.error('Error fetching categories:', error);
//     return {
//       props: {
//         categories: [],
//       },
//     };
//   }
// }

const AddBlog = () => {
    const [values, setValues] = useState({
        title: '',
        slug: '',
        tag: '',
        image: null,
        date: '',
        time: '09:00',
        category: '',
        description: '',
        content: '',
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
        setValues((prev) => ({ ...prev, image: e.target.files[0] }));
    };

   const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Check if required fields are filled
    const required = ['title', 'slug', 'date', 'category', 'description', 'content'];
    if (required.some((key) => values[key] === '')) {
        alert('Please fill in all required fields');
        return;
    }

    // Log form data to console
    console.log("Form Data:", values);  // This will print the current form data

    setLoading(true);

    // Create FormData to send the form data
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => formData.append(key, value));

    // Log the FormData as well
    for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }

    try {
        const res = await axios.post('/api/dashboard/addblog', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        if (res.data.message) {
            alert(res.data.message);
            setValues({
                title: '',
                slug: '',
                tag: '',
                image: null,
                date: '',
                time: '09:00',
                category: '',
                description: '',
                content: '',
            });
            if (imageInputRef.current) imageInputRef.current.value = null;
        } else {
            console.error("Error:", res.data.message);
        }
    } catch (err) {
        console.error("Submission error:", err);
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

                                        className="w-full rounded border border-stroke py-3 px-4 dark:border-form-strokedark dark:bg-form-input"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-black dark:text-white">Tags</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Tags"
                                        name="tag"
                                        value={values.tag}
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
                                    name="slug"
                                    value={values.slug}
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
                                            value={values.time || '09:00'}
                                            onChange={handleChange}
                                            className="w-full rounded border border-stroke py-3 px-4 dark:border-form-strokedark dark:bg-form-input"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Category, Add Category, Description */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="mb-2 block text-black dark:text-white">Blog Category</label>
                                    <select
                                        name="category"
                                        value={values.category}
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
                                    onClick={() => setValues({ ...values, content: '' })}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    //   onClick={(e) => handleSubmit(e, '1')}
                                    className={`rounded bg-sky-400 py-2 px-6 text-white hover:bg-opacity-90 `}
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
