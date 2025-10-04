// "use client";
// import { useState, useEffect, useRef } from 'react';
// import dynamic from 'next/dynamic';
// import Head from 'next/head';
// import axios from 'axios';
// import DashboardLayout from '@/app/component/DashboardLayout';
// import { useRouter, useParams } from 'next/navigation';
// import Image from 'next/image';

// const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

// const editorConfig = {
//   readonly: false,
//   toolbar: true,
//   spellcheck: true,
//   language: 'en',
//   toolbarButtonSize: 'medium',
//   showCharsCounter: true,
//   showWordsCounter: true,
//   showXPathInStatusbar: false,
//   askBeforePasteHTML: true,
//   askBeforePasteFromWord: true,
//   uploader: {
//     insertImageAsBase64URI: true,
//   },
//   width: '100%',
//   minHeight: 500,
// };

// export default function UpdateBlog() {
//   const router = useRouter();
//   const params = useParams();
//   const id = params.id;

//   const [values, setValues] = useState({
//     blog_id: id || '',
//     blog_slug: '',
//     blog_title: '',
//     blog_tag: '',
//     blog_date: '',
//     blog_time: '',
//     blog_category_id: '',
//     blog_description: '',
//     blog_content: '',
//   });

//   const [categories, setCategories] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [existingImage, setExistingImage] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const imageInputRef = useRef(null);
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     if (!id) return;

//     const fetchBlog = async () => {
//       try {
//         const res = await axios.get(`/api/dashboard/getblog/${id}`);
//         const data = res.data.data[0];
        
//         console.log('Fetched blog data:', data);

//         // Use formatted date and time from API
//         const blogDate = data.formatted_blog_date || '';
//         const blogTime = data.formatted_blog_time || '';
        
//         console.log('Parsed date:', blogDate, 'time:', blogTime);

//         setValues({
//           blog_id: data.blog_id || '',
//           blog_slug: data.blog_slug || '',
//           blog_title: data.blog_title || '',
//           blog_tag: data.blog_tag || '',
//           blog_date: blogDate,
//           blog_time: blogTime,
//           blog_category_id: data.blog_category_id || '',
//           blog_description: data.blog_description || '',
//           blog_content: data.blog_content || '',
//         });

//         setExistingImage(data.blog_feature_image || '');
//       } catch (err) {
//         console.error('Failed to fetch blog:', err);
//         setErrorMessage('Could not load blog data.');
//       }
//     };

//     const fetchCategories = async () => {
//       try {
//         const res = await axios.get(`/api/dashboard/fatchcategory`);
//         setCategories(res.data.categories || []);
//       } catch (err) {
//         console.error('Failed to fetch categories:', err);
//         setCategories([]);
//       }
//     };

//     fetchBlog();
//     fetchCategories();
//   }, [id]);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       if (file.size > 500 * 1024) {
//         setErrorMessage('File size exceeds 500KB. Please upload a smaller image.');
//         return;
//       }
//       setErrorMessage('');
//       setSelectedImage(file);
//     }
//   };

//   // const handleUpdate = async (e) => {
//   //   e.preventDefault();
//   //   setLoading(true);
//   //   setErrorMessage('');
//   //   setMessage('');

//   //   // Validate required fields
//   //   if (!values.blog_title || !values.blog_category_id) {
//   //     setErrorMessage('Blog title and category are required.');
//   //     setLoading(false);
//   //     return;
//   //   }

//   //   const formData = new FormData();
//   //   formData.append('blog_id', values.blog_id);
//   //   formData.append('blog_title', values.blog_title);
//   //   formData.append('blog_slug', values.blog_slug);
//   //   formData.append('blog_tag', values.blog_tag);
//   //   formData.append('blog_date', values.blog_date);
//   //   formData.append('blog_time', values.blog_time);
//   //   formData.append('blog_category_id', values.blog_category_id);
//   //   formData.append('blog_description', values.blog_description);
//   //   formData.append('blog_content', values.blog_content);

//   //   if (selectedImage) {
//   //     formData.append('blog_feature_image', selectedImage);
//   //   } else if (existingImage) {
//   //     formData.append('existingImage', existingImage);
//   //   }

//   //   try {
//   //     const res = await fetch(`/api/dashboard/edit-blog/${id}`, {
//   //       method: 'PUT',
//   //       body: formData,
//   //     });

//   //     const result = await res.json();

//   //     if (res.ok && result?.success) {
//   //       setErrorMessage('');
//   //       setMessage(result.message || 'Blog updated successfully!');
//   //       setTimeout(() => {
//   //         router.push('/dashboard/blog-table');
//   //       }, 1500);
//   //     } else {
//   //       setMessage('');
//   //       const errorDetails = result?.error ? ` (${result.error})` : '';
//   //       setErrorMessage(result?.message || 'Failed to update blog. Please check your inputs.' + errorDetails);
//   //     }
//   //   } catch (err) {
//   //     console.error('Error updating blog:', err);
//   //     setErrorMessage('An unexpected error occurred while updating the blog.');
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   const handleUpdate = async (e) => {
//   e.preventDefault();
//   setLoading(true);
//   setErrorMessage('');
//   setMessage('');

//   try {
//     let res;

//     if (selectedImage) {
//       // ---- Case 1: Updating with new image ----
//       const formData = new FormData();
//       formData.append('blog_id', values.blog_id);
//       formData.append('blog_title', values.blog_title);
//       formData.append('blog_slug', values.blog_slug);
//       formData.append('blog_tag', values.blog_tag);
//       formData.append('blog_date', values.blog_date);
//       formData.append('blog_time', values.blog_time);
//       formData.append('blog_category_id', values.blog_category_id);
//       formData.append('blog_description', values.blog_description);
//       formData.append('blog_content', values.blog_content);
//       formData.append('blog_feature_image', selectedImage);

//       res = await fetch(`/api/dashboard/edit-blog/${id}`, {
//         method: 'PUT',
//         body: formData,
//       });
//     } else {
//       // ---- Case 2: Updating text only ----
//       res = await fetch(`/api/dashboard/edit-blog/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(values),
//       });
//     }

//     // Parse response
//     const result = await res.json();

//     if (res.ok && result?.success) {
//       setMessage(result.message || 'Blog updated successfully!');
//       setTimeout(() => router.push('/dashboard/blog-table'), 1500);
//     } else {
//       setErrorMessage(result?.message || 'Failed to update blog.');
//     }
//   } catch (err) {
//     console.error('Error updating blog:', err);
//     setErrorMessage('An unexpected error occurred while updating the blog.');
//   } finally {
//     setLoading(false);
//   }
// };


//   return (
//     <DashboardLayout>
//       <Head>
//         <title>Update Blog</title>
//         <meta name="description" content="Update a blog post" />
//       </Head>

//       <div className="flex flex-col gap-9 p-4">
//         <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
//           <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
//             <h3 className="font-medium text-black dark:text-white">Update Blog</h3>
//           </div>

//           <form onSubmit={handleUpdate}>
//             <input type='hidden' value={values.blog_id} />
//             <div className="p-6.5">
//               {/* Title and Tag */}
//               <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
//                 <div className="w-full xl:w-1/2">
//                   <label className="mb-2.5 block text-black dark:text-white">Blog Title</label>
//                   <input
//                     type="text"
//                     placeholder="Enter Title"
//                     value={values.blog_title}
//                     onChange={(e) => setValues({ ...values, blog_title: e.target.value })}
//                     className="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input"
//                   />
//                 </div>

//                 <div className="w-full xl:w-1/2">
//                   <label className="mb-2.5 block text-black dark:text-white">Tags</label>
//                   <input
//                     type="text"
//                     placeholder="Enter Tags"
//                     value={values.blog_tag}
//                     onChange={(e) => setValues({ ...values, blog_tag: e.target.value })}
//                     className="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input"
//                   />
//                 </div>
//               </div>

//               {/* Slug Field */}
//               <div className="mb-4.5">
//                 <label className="mb-2 block text-black dark:text-white">Slug</label>
//                 <input
//                   type="text"
//                   placeholder="Enter Slug"
//                   value={values.blog_slug}
//                   onChange={(e) => setValues({ ...values, blog_slug: e.target.value })}
//                   className="w-full rounded border border-stroke py-3 px-4 dark:border-form-strokedark dark:bg-form-input"
//                 />
//               </div>

//               {/* Image, Date & Time */}
//               <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
//                 <div className="w-full xl:w-1/2">
//                   <label className="mb-2.5 block text-black dark:text-white">Feature Image</label>
//                   <input
//                     type="file"
//                     onChange={handleImageChange}
//                     className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input"
//                   />
//                   {errorMessage && (
//                     <p className="text-sm text-red-500 mt-2">{errorMessage}</p>
//                   )}

//                   {/* Show preview of the newly selected image */}
//                   {selectedImage && (
//                     <Image
//                       width={100}
//                       height={60}
//                       src={URL.createObjectURL(selectedImage)}
//                       alt="Selected Preview"
//                       className="h-20 mt-2 rounded border"
//                     />
//                   )}

//                   {/* Show existing image if no new image is selected */}
//                   {!selectedImage && existingImage && (
//                     <Image
//                       width={100}
//                       height={60}
//                       src={`${existingImage}`}
//                       alt="Current Blog Feature"
//                       className="h-20 mt-2 rounded border"
//                     />
//                   )}
//                 </div>

//                 <div className="w-full xl:w-1/2 flex gap-4">
//                   <div className="w-1/2">
//                     <label className="mb-2.5 block text-black dark:text-white">Date</label>
//                     <input
//                       type="date"
//                       value={values.blog_date}
//                       onChange={(e) => setValues({ ...values, blog_date: e.target.value })}
//                       className="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input"
//                     />
//                   </div>
//                   <div className="w-1/2">
//                     <label className="mb-2.5 block text-black dark:text-white">Time</label>
//                     <input
//                       type="time"
//                       value={values.blog_time}
//                       onChange={(e) => setValues({ ...values, blog_time: e.target.value })}
//                       className="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Category & Description */}
//               <div className="mb-4.5 grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="mb-2.5 block text-black dark:text-white">Category</label>
//                   <select
//                     value={values.blog_category_id}
//                     onChange={(e) => setValues({ ...values, blog_category_id: e.target.value })}
//                     className="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input"
//                   >
//                     <option value="">Choose Category</option>
//                     {categories.length > 0 ? (
//                       categories.map((cat) => (
//                         <option key={cat.id} value={cat.id}>
//                           {cat.category}
//                         </option>
//                       ))
//                     ) : (
//                       <option disabled>No Categories Available</option>
//                     )}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-2.5 block text-black dark:text-white">Description</label>
//                   <textarea
//                     value={values.blog_description}
//                     onChange={(e) => setValues({ ...values, blog_description: e.target.value })}
//                     className="w-full h-32 rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input"
//                   />
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="mb-6">
//                 <label className="mb-2.5 block text-black dark:text-white">Content</label>
//                 <JoditEditor
//                   config={editorConfig}
//                   value={values.blog_content}
//                   onChange={(content) => setValues({ ...values, blog_content: content })}
//                 />
//               </div>

//               <div className="flex justify-end gap-4.5">
//                 <button
//                   type="button"
//                   onClick={() => router.back()}
//                   className="rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   type="submit"
//                   className={`rounded bg-sky-400 py-2 px-6 font-medium text-white hover:shadow-1 ${loading || errorMessage ? 'opacity-50 cursor-not-allowed' : ''}`}
//                   disabled={loading || errorMessage}
//                 >
//                   {loading ? 'Updating...' : 'Update'}
//                 </button>
//               </div>

//               {/* Success and error messages */}
//               {errorMessage && !message && (
//                 <p className="text-red-600 mt-4 font-semibold">{errorMessage}</p>
//               )}

//               {message && !errorMessage && (
//                 <p className="text-green-600 mt-4 font-semibold">{message}</p>
//               )}
//             </div>
//           </form>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// }


"use client";

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import axios from 'axios';
import DashboardLayout from '@/app/component/DashboardLayout';
import { useRouter } from 'next/navigation';
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
  uploader: { insertImageAsBase64URI: true },
  width: '100%',
  minHeight: 500,
};

export default function UpdateBlog({ params }) {
  const router = useRouter();
  const id = params.id;

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
  });

  const [categories, setCategories] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [existingImage, setExistingImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState('');
  const [previewUrl, setPreviewUrl] = useState(null);
  const imageInputRef = useRef(null);

  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        const res = await axios.get(`/api/dashboard/getblog/${id}`);
        const data = res.data.data[0];

        const blogDate = data.formatted_blog_date || '';
        const blogTime = data.formatted_blog_time || '';

        setValues({
          blog_id: data.blog_id || '',
          blog_slug: data.blog_slug || '',
          blog_title: data.blog_title || '',
          blog_tag: data.blog_tag || '',
          blog_date: blogDate,
          blog_time: blogTime,
          blog_category_id: data.blog_category_id || '',
          blog_description: data.blog_description || '',
          blog_content: data.blog_content || '',
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
        setCategories(res.data.categories || []);
      } catch (err) {
        console.error('Failed to fetch categories:', err);
        setCategories([]);
      }
    };

    fetchBlog();
    fetchCategories();
  }, [id]);

  useEffect(() => {
    if (!selectedImage) return;

    const url = URL.createObjectURL(selectedImage);
    setPreviewUrl(url);

    return () => URL.revokeObjectURL(url);
  }, [selectedImage]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 500 * 1024) {
        setErrorMessage('File size exceeds 500KB. Please upload a smaller image.');
        return;
      }
      if (!['image/png', 'image/jpeg', 'image/jpg'].includes(file.type)) {
        setErrorMessage('Invalid file type. Only PNG, JPG, JPEG allowed.');
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
    setMessage('');

    if (!values.blog_title || !values.blog_category_id) {
      setErrorMessage('Blog title and category are required.');
      setLoading(false);
      return;
    }

    try {
      let res;
      const formData = new FormData();

      formData.append('blog_id', values.blog_id);
      formData.append('blog_title', values.blog_title);
      formData.append('blog_slug', values.blog_slug);
      formData.append('blog_tag', values.blog_tag);
      formData.append('blog_date', values.blog_date);
      formData.append('blog_time', values.blog_time);
      formData.append('blog_category_id', values.blog_category_id);
      formData.append('blog_description', values.blog_description);
      formData.append('blog_content', values.blog_content);

      if (selectedImage) {
        formData.append('blog_feature_image', selectedImage);
      } else if (existingImage) {
        formData.append('existingImage', existingImage);
      }

      res = await fetch(`/api/dashboard/edit-blog/${id}`, {
        method: 'PUT',
        body: formData,
      });

      const result = await res.json();

      if (res.ok && result?.success) {
        setMessage(result.message || 'Blog updated successfully!');
        setTimeout(() => router.push('/dashboard/blog-table'), 1500);
      } else {
        setErrorMessage(result?.message || 'Failed to update blog.');
      }
    } catch (err) {
      console.error('Error updating blog:', err);
      setErrorMessage('An unexpected error occurred while updating the blog.');
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
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">Update Blog</h3>
          </div>

          <form onSubmit={handleUpdate}>
            <input type='hidden' value={values.blog_id} />
            <div className="p-6.5">
              {/* Title & Tag */}
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">Blog Title</label>
                  <input
                    type="text"
                    placeholder="Enter Title"
                    value={values.blog_title}
                    onChange={(e) => setValues({ ...values, blog_title: e.target.value })}
                    className="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input"
                  />
                </div>
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">Tags</label>
                  <input
                    type="text"
                    placeholder="Enter Tags"
                    value={values.blog_tag}
                    onChange={(e) => setValues({ ...values, blog_tag: e.target.value })}
                    className="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input"
                  />
                </div>
              </div>

              {/* Slug */}
              <div className="mb-4.5">
                <label className="mb-2 block text-black dark:text-white">Slug</label>
                <input
                  type="text"
                  placeholder="Enter Slug"
                  value={values.blog_slug}
                  onChange={(e) => setValues({ ...values, blog_slug: e.target.value })}
                  className="w-full rounded border border-stroke py-3 px-4 dark:border-form-strokedark dark:bg-form-input"
                />
              </div>

              {/* Image & Date/Time */}
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">Feature Image</label>
                  <input
                    type="file"
                    onChange={handleImageChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input"
                  />
                  {errorMessage && <p className="text-sm text-red-500 mt-2">{errorMessage}</p>}

                  {previewUrl ? (
                    <Image width={100} height={60} src={previewUrl} alt="Selected Preview" className="h-20 mt-2 rounded border" />
                  ) : existingImage ? (
                    <Image width={100} height={60} src={existingImage} alt="Current Blog Feature" className="h-20 mt-2 rounded border" />
                  ) : null}
                </div>

                <div className="w-full xl:w-1/2 flex gap-4">
                  <div className="w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">Date</label>
                    <input
                      type="date"
                      value={values.blog_date}
                      onChange={(e) => setValues({ ...values, blog_date: e.target.value })}
                      className="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">Time</label>
                    <input
                      type="time"
                      value={values.blog_time}
                      onChange={(e) => setValues({ ...values, blog_time: e.target.value })}
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
                    value={values.blog_category_id}
                    onChange={(e) => setValues({ ...values, blog_category_id: e.target.value })}
                    className="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input"
                  >
                    <option value="">Choose Category</option>
                    {categories.length ? categories.map((cat) => <option key={cat.id} value={cat.id}>{cat.category}</option>) : <option disabled>No Categories Available</option>}
                  </select>
                </div>

                <div>
                  <label className="mb-2.5 block text-black dark:text-white">Description</label>
                  <textarea
                    value={values.blog_description}
                    onChange={(e) => setValues({ ...values, blog_description: e.target.value })}
                    className="w-full h-32 rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="mb-6">
                <label className="mb-2.5 block text-black dark:text-white">Content</label>
                <JoditEditor
                  config={editorConfig}
                  value={values.blog_content}
                  onChange={(content) => setValues({ ...values, blog_content: content })}
                />
              </div>

              <div className="flex justify-end gap-4.5">
                <button type="button" onClick={() => router.back()} className="rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white">
                  Cancel
                </button>

                <button type="submit" disabled={loading} className={`rounded bg-sky-400 py-2 px-6 font-medium text-white hover:shadow-1 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                  {loading ? 'Updating...' : 'Update'}
                </button>
              </div>

              {errorMessage && !message && <p className="text-red-600 mt-4 font-semibold">{errorMessage}</p>}
              {message && !errorMessage && <p className="text-green-600 mt-4 font-semibold">{message}</p>}
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
