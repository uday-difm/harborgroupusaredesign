// import pool from '../../../../../../lib/mysql';
// import { uploadToS3 } from '../../../../../../utils/s3Utility';
// import { NextResponse } from 'next/server';

// export const config = {
//     api: {
//         bodyParser: false,
//         sizeLimit: '50mb',
//     },
// };

// const generateSlug = (str) =>
//     String(str || '')
//         .toLowerCase()
//         .replace(/'/g, '')
//         .replace(/[^a-z0-9]+/g, '-')
//         .replace(/^-+|-+$/g, '');

// export async function PUT(req, { params }) {
//     console.log('=== UPDATE BLOG PUT REQUEST RECEIVED ===');
//     console.log('Request URL:', req.url);
    
//     try {
//         // Await params as required by Next.js 15
//         const resolvedParams = await params;
//         console.log('Params:', resolvedParams);
        
//         // Extract blog_id from params
//         const blog_id = resolvedParams?.id;
//         console.log('Extracted blog_id:', blog_id);

//         if (!blog_id) {
//             return NextResponse.json(
//                 { success: false, message: 'blog_id is required' },
//                 { status: 400 }
//             );
//         }

//         // Parse formData
//         console.log('📦 Parsing formData...');
//         let formData;
//         try {
//             formData = await req.formData();
//             console.log('✅ FormData parsed successfully');
//         } catch (parseError) {
//             console.error('❌ Failed to parse formData:', parseError);
//             return NextResponse.json(
//                 { success: false, message: 'Failed to parse form data', error: String(parseError.message) },
//                 { status: 400 }
//             );
//         }

//         // Extract form fields
//         const blog_title = formData.get('blog_title');
//         const blog_tag = formData.get('blog_tag');
//         const blog_description = formData.get('blog_description');
//         const blog_content = formData.get('blog_content');
//         const blog_slug = formData.get('blog_slug');
//         const blog_category_id = formData.get('blog_category_id');
//         const blog_date = formData.get('blog_date');
//         const blog_time = formData.get('blog_time');
//         const existingImage = formData.get('existingImage');
//         const imageFile = formData.get('blog_feature_image');
        
//         console.log('Update blog request:', {
//             blog_id,
//             blog_title,
//             blog_category_id,
//             hasImageFile: !!imageFile,
//             imageFileType: imageFile?.constructor?.name,
//             imageFileSize: imageFile?.size,
//             existingImage,
//         });

//         // Validate required fields
//         if (!blog_title || !blog_category_id) {
//             return NextResponse.json(
//                 { success: false, message: 'Blog title and category are required.' },
//                 { status: 400 }
//             );
//         }

//         // Generate slug
//         const finalSlug = blog_slug && String(blog_slug).trim().length > 0 
//             ? generateSlug(String(blog_slug).trim()) 
//             : generateSlug(blog_title);

//         // Combine date and time into blog_date_time
//         const blog_date_time = `${blog_date} ${blog_time}`;

//         // Handle image upload
//         let featureImageUrl = existingImage || null;
        
//         // Build UPDATE query
//         let query = `
//             UPDATE blogs
//             SET 
//                 blog_slug = ?, 
//                 blog_title = ?, 
//                 blog_tag = ?, 
//                 blog_description = ?,
//                 blog_category_id = ?, 
//                 blog_content = ?, 
//                 blog_date_time = ?
//         `;
        
//         const paramsArr = [
//             finalSlug,
//             blog_title,
//             blog_tag,
//             blog_description,
//             blog_category_id,
//             blog_content,
//             blog_date_time,
//         ];

//         // Check if new image file is uploaded
//         if (imageFile && typeof imageFile !== 'string' && imageFile.size > 0) {
//             try {
//                 console.log('Uploading new image to S3...');
//                 const buffer = Buffer.from(await imageFile.arrayBuffer());
//                 const fileForS3 = {
//                     buffer,
//                     originalname: imageFile.name,
//                     mimetype: imageFile.type,
//                 };
//                 featureImageUrl = await uploadToS3('blogs', fileForS3);
//                 console.log('S3 upload successful:', featureImageUrl);

//                 query += `, blog_feature_image = ?`;
//                 paramsArr.push(featureImageUrl);
//             } catch (s3Error) {
//                 console.error('S3 upload error:', s3Error);
//                 return NextResponse.json(
//                     { 
//                         success: false, 
//                         message: 'Failed to upload new feature image.', 
//                         error: String(s3Error?.message || s3Error) 
//                     },
//                     { status: 500 }
//                 );
//             }
//         }

//         // Add WHERE clause
//         query += ` WHERE blog_id = ?`;
//         paramsArr.push(blog_id);

//         console.log('Executing query:', query);
//         console.log('With params:', paramsArr);

//         // Execute the update query
//         const [result] = await pool.execute(query, paramsArr);

//         console.log('Update result:', result);

//         if (result.affectedRows === 0) {
//             console.log('⚠️ No rows affected - blog not found or no changes');
//             return NextResponse.json(
//                 {
//                     success: false,
//                     message: 'Blog not found or no changes were made.',
//                     affectedRows: 0,
//                 },
//                 { status: 404 }
//             );
//         }

//         console.log('✅ Blog updated successfully');
//         return NextResponse.json({
//             success: true,
//             message: 'Blog updated successfully',
//             affectedRows: result.affectedRows,
//             blog_feature_image: featureImageUrl,
//             slug: finalSlug,
//         });

//     } catch (error) {
//         console.error('Error updating blog:', error);
//         return NextResponse.json(
//             { 
//                 success: false, 
//                 message: 'Failed to update blog', 
//                 error: String(error?.message || error), 
//                 stack: error?.stack 
//             },
//             { status: 500 }
//         );
//     }
// }        

// File: app/api/dashboard/edit-blog/[id]/route.js
import pool from '../../../../../../lib/mysql';
import { uploadToS3 } from '../../../../../../utils/s3Utility';
import { NextResponse } from 'next/server';
import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false, // important for formidable
    sizeLimit: '50mb',
  },
};

const generateSlug = (str) =>
  String(str || '')
    .toLowerCase()
    .replace(/'/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export async function POST(req, { params }) {
  const blog_id = params.id;

  if (!blog_id) {
    return NextResponse.json({ success: false, message: 'Blog ID required' }, { status: 400 });
  }

  try {
    const form = new formidable.IncomingForm({ multiples: false });
    form.keepExtensions = true;

    const parsed = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    });

    const fields = parsed.fields;
    const files = parsed.files;

    const blog_title = fields.blog_title;
    const blog_tag = fields.blog_tag;
    const blog_description = fields.blog_description;
    const blog_content = fields.blog_content;
    const blog_slug = fields.blog_slug;
    const blog_category_id = fields.blog_category_id;
    const blog_date = fields.blog_date;
    const blog_time = fields.blog_time;
    const existingImage = fields.existingImage;

    if (!blog_title || !blog_category_id) {
      return NextResponse.json({ success: false, message: 'Blog title and category required' }, { status: 400 });
    }

    const finalSlug = blog_slug && blog_slug.trim().length > 0 ? generateSlug(blog_slug) : generateSlug(blog_title);
    const blog_date_time = `${blog_date} ${blog_time}`;

    let featureImageUrl = existingImage || null;

    // Handle uploaded image
    if (files.blog_feature_image) {
      const file = files.blog_feature_image;
      const buffer = await fs.promises.readFile(file.filepath);
      const fileForS3 = { buffer, originalname: file.originalFilename, mimetype: file.mimetype };
      featureImageUrl = await uploadToS3('blogs', fileForS3);
    }

    // Build query
    let query = `
      UPDATE blogs
      SET 
        blog_slug = ?, 
        blog_title = ?, 
        blog_tag = ?, 
        blog_description = ?, 
        blog_category_id = ?, 
        blog_content = ?, 
        blog_date_time = ?
    `;
    const paramsArr = [finalSlug, blog_title, blog_tag, blog_description, blog_category_id, blog_content, blog_date_time];

    if (featureImageUrl) {
      query += `, blog_feature_image = ?`;
      paramsArr.push(featureImageUrl);
    }

    query += ` WHERE blog_id = ?`;
    paramsArr.push(blog_id);

    const [result] = await pool.execute(query, paramsArr);

    if (result.affectedRows === 0) {
      return NextResponse.json({ success: false, message: 'Blog not found or no changes', affectedRows: 0 }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: 'Blog updated successfully',
      blog_feature_image: featureImageUrl,
      slug: finalSlug,
    });
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json({ success: false, message: 'Failed to update blog', error: String(error) }, { status: 500 });
  }
}
