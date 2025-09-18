// import pool from '../../../../../../lib/mysql';
// import { uploadToS3 } from '../../../../../../utils/s3Utility';
// import { NextResponse } from 'next/server';

// export const config = {
//   api: {
//     bodyParser: false,   // ✅ needed for multipart
//     sizeLimit: '50mb',   // ✅ allow larger payloads
//   },
// };


// const generateSlug = (str) => {
//   return str
//     .toLowerCase()
//     .replace(/'/g, '')
//     .replace(/[^a-z0-9]+/g, '-')
//     .replace(/^-+|-+$/g, '');
// };

// export async function PUT(req, { params }) {
//   try {
//     const formData = await req.formData();

//     const blog_id = params.id; // Get from URL param
//     if (!blog_id) {
//       return NextResponse.json({ success: false, message: 'blog_id is required' }, { status: 400 });
//     }

//     const blog_title = formData.get('blog_title');
//     const blog_tag = formData.get('blog_tag');
//     const blog_description = formData.get('blog_description');
//     const blog_content = formData.get('blog_content');
//     const blog_slug = formData.get('blog_slug'); // Manual slug from user input
//     const blog_category_id = formData.get('blog_category_id');
//     const blog_date = formData.get('blog_date');
//     const blog_time = formData.get('blog_time');
//     const existingImage = formData.get('existingImage');
//     const imageFile = formData.get('blog_feature_image');

//     const finalSlug =
//       blog_slug && blog_slug.trim().length > 0
//         ? generateSlug(blog_slug.trim())
//         : generateSlug(blog_title);

//     const blog_date_time = `${blog_date} ${blog_time}`;
//     let featureImageUrl = existingImage;

//     let query = `
//       UPDATE blogs 
//       SET blog_slug = ?, blog_title = ?, blog_tag = ?, blog_description = ?, 
//           blog_category_id = ?, blog_content = ?, blog_date_time = ?
//     `;
//     const paramsArr = [
//       finalSlug,
//       blog_title,
//       blog_tag,
//       blog_description,
//       blog_category_id,
//       blog_content,
//       blog_date_time,
//     ];

//     // Upload new image if provided
//     if (imageFile && imageFile.size > 0) {
//       const buffer = Buffer.from(await imageFile.arrayBuffer());
//       const fileForS3 = {
//         buffer,
//         originalname: imageFile.name,
//         mimetype: imageFile.type,
//       };
//       featureImageUrl = await uploadToS3('blogs', fileForS3);
//       query += `, blog_feature_image = ?`;
//       paramsArr.push(featureImageUrl);
//     }

//     query += ` WHERE blog_id = ?`;
//     paramsArr.push(blog_id);

//     const [result] = await pool.execute(query, paramsArr);

//     return NextResponse.json({
//       success: true,
//       message: 'Blog updated successfully',
//       affectedRows: result.affectedRows,
//       blog_feature_image: featureImageUrl,
//       slug: finalSlug,
//     });
//   } catch (error) {
//     console.error('Error updating blog:', error);
//     return NextResponse.json(
//       { success: false, message: 'Failed to update blog', error: error.message },
//       { status: 500 }
//     );
//   }
// }


// file: app/api/dashboard/blog/[id]/route.js
import pool from '../../../../../../lib/mysql';
import { uploadToS3 } from '../../../../../../utils/s3Utility';
import { NextResponse } from 'next/server';

/* Why: app router handles multipart via req.formData(); no export config here. */
const generateSlug = (str = '') =>
  String(str)
    .toLowerCase()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

/* PUT handler — updates an existing blog by blog_id (from URL param). */
export async function PUT(req, { params }) {
  try {
    // 1. Validate URL param (blog id)
    const blog_id = params?.id;
    if (!blog_id) {
      return NextResponse.json({ success: false, message: 'blog_id (url param) is required' }, { status: 400 });
    }

    // 2. Parse multipart form data
    const formData = await req.formData();

    // 3. Extract and normalize fields
    const blog_title = formData.get('blog_title')?.toString().trim() ?? '';
    const blog_tag = formData.get('blog_tag')?.toString().trim() ?? '';
    const blog_description = formData.get('blog_description')?.toString().trim() ?? '';
    const blog_content = formData.get('blog_content')?.toString().trim() ?? '';
    const blog_slug_raw = formData.get('blog_slug')?.toString().trim() ?? '';
    const blog_category_id = formData.get('blog_category_id')?.toString().trim() ?? '';
    const blog_date = formData.get('blog_date')?.toString().trim() ?? '';
    const blog_time = formData.get('blog_time')?.toString().trim() ?? '';
    // existingImage may be a string (url/key) or absent
    const existingImage = formData.get('existingImage') ? formData.get('existingImage').toString().trim() : '';
    // file input name expected: 'blog_feature_image'
    const imageFile = formData.get('blog_feature_image');

    // 4. Required field validation (adjust as your business rules require)
    const missing = [];
    if (!blog_title) missing.push('blog_title');
    if (!blog_tag) missing.push('blog_tag');
    if (!blog_description) missing.push('blog_description');
    if (!blog_content) missing.push('blog_content');
    if (!blog_category_id) missing.push('blog_category_id');
    if (!blog_date) missing.push('blog_date');
    if (!blog_time) missing.push('blog_time');

    if (missing.length) {
      return NextResponse.json({ success: false, message: 'Missing required fields', missing }, { status: 400 });
    }

    // 5. Build final slug
    const finalSlug = blog_slug_raw ? generateSlug(blog_slug_raw) : generateSlug(blog_title);

    // 6. Build date-time (you may want to validate date/time formats)
    const blog_date_time = `${blog_date} ${blog_time}`;

    // 7. Feature image handling: start with existingImage (may be empty)
    let featureImageUrl = existingImage || null;

    // Upload new image if provided and looks like a File
    if (imageFile && typeof imageFile.size === 'number' && imageFile.size > 0) {
      try {
        const buffer = Buffer.from(await imageFile.arrayBuffer());
        const fileForS3 = {
          buffer,
          originalname: imageFile.name ?? `upload-${Date.now()}`,
          mimetype: imageFile.type ?? 'application/octet-stream',
        };
        // uploadToS3 should return URL or key
        featureImageUrl = await uploadToS3('blogs', fileForS3);
      } catch (s3Err) {
        console.error('S3 upload error:', s3Err);
        return NextResponse.json({ success: false, message: 'Failed to upload feature image', error: String(s3Err) }, { status: 500 });
      }
    }

    // 8. Build the UPDATE query dynamically (only add feature image column if we have a value)
    let query = `
      UPDATE blogs
      SET blog_slug = ?, blog_title = ?, blog_tag = ?, blog_description = ?,
          blog_category_id = ?, blog_content = ?, blog_date_time = ?
    `;
    const paramsArr = [
      finalSlug,
      blog_title,
      blog_tag,
      blog_description,
      blog_category_id,
      blog_content,
      blog_date_time,
    ];

    if (featureImageUrl) {
      query += `, blog_feature_image = ?`;
      paramsArr.push(featureImageUrl);
    }

    query += ` WHERE blog_id = ?`;
    paramsArr.push(blog_id);

    // 9. Execute the parameterized query
    const [result] = await pool.execute(query, paramsArr);

    // 10. Return success with safe, minimal info
    return NextResponse.json({
      success: true,
      message: 'Blog updated successfully',
      affectedRows: result?.affectedRows ?? 0,
      blog_feature_image: featureImageUrl,
      slug: finalSlug,
    }, { status: 200 });
  } catch (err) {
    console.error('Error updating blog:', err?.stack || err);
    return NextResponse.json({ success: false, message: 'Failed to update blog', error: String(err) }, { status: 500 });
  }
}
