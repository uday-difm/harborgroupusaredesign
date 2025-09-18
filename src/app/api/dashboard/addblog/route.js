// import { v4 as uuidv4 } from 'uuid'; // For generating unique blog IDs
// import { uploadToS3 } from '../../../../../utils/s3Utility';
// import pool from '../../../../../lib/mysql';
// import { NextResponse } from 'next/server';

// export const config = {
//   api: {
//     bodyParser: false,   // ✅ needed for multipart
//     sizeLimit: '50mb',   // ✅ allow larger payloads
//   },
// };


// // Function to generate a slug from title or other strings
// const generateSlug = (str) => {
//   return str
//     .toLowerCase()
//     .replace(/'/g, '')
//     .replace(/[^a-z0-9]+/g, '-')
//     .replace(/^-+|-+$/g, ''); // Remove leading/trailing dashes
// };

// // The main handler for POST requests
// export async function POST(req) {
//   try {
//     // 1. Parse the multipart form data from the request
//     const formData = await req.formData();

//     // Extract form fields
//     const blogTitle = formData.get('blogTitle');
//     const blogTag = formData.get('tags');
//     const description = formData.get('description');
//     const content = formData.get('content');
//     const blogCategoryId = formData.get('blogCategory');
//     const date = formData.get('date');
//     const time = formData.get('time');
//     const imageFile = formData.get('featureImage');
//     const blogPublisherId = formData.get('blogPublisherId');
//     const manualBlogSlug = formData.get('manualBlogSlug'); // Check for manual slug

//     // Check if all required fields are provided
//     if (
//       !blogTitle ||
//       !blogTag ||
//       !description ||
//       !content ||
//       !blogCategoryId ||
//       !blogPublisherId ||
//       !date ||
//       !time ||
//       !imageFile
//     ) {
//       return NextResponse.json(
//         { message: 'All required fields are missing.' },
//         { status: 400 }
//       );
//     }

//     // 4. Generate blog_id using uuidv4
//     const blogId = uuidv4();

//     // 5. Generate slug from the blog title, but only if no manual slug is provided
//     const blogSlug = manualBlogSlug ? manualBlogSlug : generateSlug(blogTitle);

//     // 6. Handle the file upload to S3
//     let featureImage = null;
//     if (imageFile && imageFile.size > 0) {
//       try {
//         const buffer = Buffer.from(await imageFile.arrayBuffer());
//         const fileForS3 = {
//           buffer: buffer,
//           originalname: imageFile.name,
//           mimetype: imageFile.type,
//         };
//         featureImage = await uploadToS3('blogs', fileForS3);
//       } catch (s3Error) {
//         console.error('Error uploading image to S3:', s3Error);
//         return NextResponse.json(
//           { message: 'Failed to upload feature image.', error: s3Error.message },
//           { status: 500 }
//         );
//       }
//     } else {
//       return NextResponse.json(
//         { message: 'Feature image file is required and cannot be empty.' },
//         { status: 400 }
//       );
//     }

//     // Combine date and time for the DATETIME column
//     const blogDateTime = `${date} ${time}`;

//     // 7. Insert the data into the database
//     const query = "INSERT INTO `blogs` (`blog_id`, `blog_slug`, `blog_title`, `blog_description`, `blog_tag`, `blog_category_id`, `blog_publisher_id`, `blog_status`, `blog_feature_image`, `blog_content`, blog_date_time) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

//     const values = [
//       blogId,
//       blogSlug,  // Use the manual slug if provided, or generated slug
//       blogTitle,
//       description, // Maps to blog_description
//       blogTag,     // Maps to blog_tag
//       blogCategoryId,
//       blogPublisherId, // Added the blogPublisherId
//       '0',  // Assuming blog_status as 'active' by default
//       featureImage,
//       content,     // Maps to blog_content
//       blogDateTime,
//     ];

//     // Execute the query
//     const [result] = await pool.execute(query, values);

//     // 8. Send a success response
//     return NextResponse.json(
//       {
//         message: 'Blog inserted successfully',
//         blogId: blogId,
//         blogSlug: blogSlug,  // Send the used slug
//         featureImage: featureImage,
//         databaseResult: result,
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error('Blog insert error:', error.stack || error);  
//     return NextResponse.json(
//       { message: 'Error inserting blog', error: error.message },
//       { status: 500 }
//     );
//   }
// }


// file: app/api/dashboard/addblog/route.js
import { v4 as uuidv4 } from 'uuid';
import { uploadToS3 } from '../../../../../utils/s3Utility';
import pool from '../../../../../lib/mysql';
import { NextResponse } from 'next/server';

/**
 * Generate slug from a string. Removes quotes, non-alphanumerics,
 * collapses separators to single dash, trims leading/trailing dashes.
 */
const generateSlug = (str = '') =>
  String(str)
    .toLowerCase()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

/**
 * POST handler for adding a blog.
 * Ensure this file is placed at: app/api/dashboard/addblog/route.js
 */
export async function POST(req) {
  try {
    // Parse multipart/form-data (available in App Router)
    const formData = await req.formData();

    // Extract fields
    const blogTitle = formData.get('blogTitle')?.toString().trim();
    const blogTag = formData.get('tags')?.toString().trim();
    const description = formData.get('description')?.toString().trim();
    const content = formData.get('content')?.toString().trim();
    const blogCategoryId = formData.get('blogCategory')?.toString().trim();
    const date = formData.get('date')?.toString().trim();
    const time = formData.get('time')?.toString().trim();
    const imageFile = formData.get('featureImage'); // Web File
    const blogPublisherId = formData.get('blogPublisherId')?.toString().trim();
    const manualBlogSlugRaw = formData.get('manualBlogSlug')?.toString().trim();

    // Basic validation: list missing fields and return a helpful 400
    const missing = [];
    if (!blogTitle) missing.push('blogTitle');
    if (!blogTag) missing.push('tags');
    if (!description) missing.push('description');
    if (!content) missing.push('content');
    if (!blogCategoryId) missing.push('blogCategory');
    if (!date) missing.push('date');
    if (!time) missing.push('time');
    if (!blogPublisherId) missing.push('blogPublisherId');
    if (!imageFile) missing.push('featureImage');

    if (missing.length) {
      return NextResponse.json(
        { message: 'Missing required fields', missing },
        { status: 400 }
      );
    }

    // Ensure imageFile is a File-like object with arrayBuffer method
    if (typeof imageFile.arrayBuffer !== 'function') {
      return NextResponse.json(
        { message: 'featureImage must be a file (multipart/form-data).' },
        { status: 400 }
      );
    }

    // Generate blog id & slug
    const blogId = uuidv4();
    const blogSlug = manualBlogSlugRaw ? generateSlug(manualBlogSlugRaw) : generateSlug(blogTitle);

    // Upload image to S3
    let featureImageUrl;
    try {
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      const fileForS3 = {
        buffer,
        originalname: imageFile.name ?? `upload-${Date.now()}`,
        mimetype: imageFile.type ?? 'application/octet-stream',
      };
      // uploadToS3 should return the URL or key for the uploaded file
      featureImageUrl = await uploadToS3('blogs', fileForS3);
    } catch (s3Err) {
      console.error('S3 upload error:', s3Err);
      return NextResponse.json(
        { message: 'Failed to upload feature image.' },
        { status: 500 }
      );
    }

    // Combine date and time into DATETIME format (ensure inputs are valid)
    const blogDateTime = `${date} ${time}`;

    // Insert into DB (parameterized)
    const query =
      'INSERT INTO `blogs` (`blog_id`, `blog_slug`, `blog_title`, `blog_description`, `blog_tag`, `blog_category_id`, `blog_publisher_id`, `blog_status`, `blog_feature_image`, `blog_content`, `blog_date_time`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [
      blogId,
      blogSlug,
      blogTitle,
      description,
      blogTag,
      blogCategoryId,
      blogPublisherId,
      '0', // blog_status (adjust as needed)
      featureImageUrl,
      content,
      blogDateTime,
    ];

    try {
      const [result] = await pool.execute(query, values);
      // Do not expose raw DB internals in production response; return essential info.
      return NextResponse.json(
        {
          message: 'Blog inserted successfully',
          blogId,
          blogSlug,
          featureImage: featureImageUrl,
        },
        { status: 201 }
      );
    } catch (dbErr) {
      console.error('DB insert error:', dbErr);
      // Optionally: attempt cleanup of uploaded S3 object if insert fails.
      return NextResponse.json(
        { message: 'Failed to insert blog into database.' },
        { status: 500 }
      );
    }
  } catch (err) {
    console.error('Unexpected error in addblog route:', err);
    return NextResponse.json(
      { message: 'Unexpected server error.' },
      { status: 500 }
    );
  }
}
