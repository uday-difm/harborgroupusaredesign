// app/api/dashboard/edit-blog/[id]/route.js
import pool from '../../../../../../lib/mysql';
import { uploadToS3 } from '../../../../../../utils/s3Utility';
import { NextResponse } from 'next/server';

// Helper slug generator
const generateSlug = (str) =>
    String(str || '')
        .toLowerCase()
        .replace(/'/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

export async function PUT(req, { params }) {
    console.log('=== UPDATE BLOG PUT ===');
    try {
        // Extract id from params
        // At top of PUT handler
        const { id: blog_id } = await params;

      //  console.log('blog_id param:', blog_id);

        if (!blog_id) {
            return NextResponse.json({ success: false, message: 'blog_id is required' }, { status: 400 });
        }

        // Detect content-type
        const contentType = String(req.headers.get?.('content-type') || '').toLowerCase();
       // console.log('Incoming content-type:', contentType);

        // Prepare: payload object, plus optional imageFile and existingImage
        let payload = {};
        let imageFile = null;
        let existingImage = null;

        if (contentType.includes('application/json')) {
            // JSON body
            try {
                payload = await req.json();
                existingImage = payload.existingImage || payload.existing_image || null;
            } catch (err) {
               // console.error('JSON parse error:', err);
                return NextResponse.json({ success: false, message: 'Invalid JSON' }, { status: 400 });
            }
        } else {
            // Try FormData
            try {
                const formData = await req.formData();
                // Build payload from non-file entries
                payload = {};
                for (const [key, value] of formData.entries()) {
                    if (key === 'blog_feature_image') {
                        imageFile = value;
                    } else {
                        // convert File objects to their names? for safety, store raw string values
                        payload[key] = typeof value === 'string' ? value : value;
                    }
                }
                existingImage = formData.get('existingImage') || formData.get('existing_image') || existingImage;
            } catch (err) {
                //console.error('FormData parse error:', err);
                return NextResponse.json({ success: false, message: 'Failed to parse form data', error: String(err?.message) }, { status: 400 });
            }
        }

        // Normalize field names (both JSON keys and form keys)
        const blog_title = payload.blog_title || payload.blogTitle || null;
        const blog_tag = payload.blog_tag || payload.blogTag || null;
        const blog_description = payload.blog_description || payload.blogDescription || null;
        const blog_content = payload.blog_content || payload.blogContent || null;
        const blog_slug = payload.blog_slug || payload.blogSlug || null;
        const blog_category_id = payload.blog_category_id || payload.blogCategoryId || null;
        const blog_date = payload.blog_date || payload.blogDate || null;
        const blog_time = payload.blog_time || payload.blogTime || null;
        if (!existingImage && (payload.existingImage || payload.existing_image)) {
            existingImage = payload.existingImage || payload.existing_image;
        }

        // console.log('Parsed payload preview:', {
        //     blog_title,
        //     blog_category_id,
        //     hasImageFile: !!imageFile,
        //     existingImage,
        // });

        // Validate required
        if (!blog_title || !blog_category_id) {
            return NextResponse.json({ success: false, message: 'Blog title and category are required.' }, { status: 400 });
        }

        // Create final slug
        const finalSlug = blog_slug && String(blog_slug).trim().length > 0
            ? generateSlug(String(blog_slug).trim())
            : generateSlug(blog_title);

        // Combine date + time (if provided)
        const blog_date_time = [blog_date, blog_time].filter(Boolean).join(' ').trim();

        // Start building update query & params
        let query = `
      UPDATE blogs
      SET blog_slug = ?, blog_title = ?, blog_tag = ?, blog_description = ?, blog_category_id = ?, blog_content = ?, blog_date_time = ?
    `;
        const paramsArr = [finalSlug, blog_title, blog_tag || '', blog_description || '', blog_category_id, blog_content || '', blog_date_time || null];

        // If imageFile exists and is a File-like object -> upload to S3
        if (imageFile && typeof imageFile !== 'string' && imageFile.size > 0) {
            try {
                console.log('Uploading file to S3...');
                const buffer = Buffer.from(await imageFile.arrayBuffer());
                const fileForS3 = {
                    buffer,
                    originalname: imageFile.name || `upload-${Date.now()}`,
                    mimetype: imageFile.type || 'application/octet-stream',
                };
                const s3Url = await uploadToS3('blogs', fileForS3);
               // console.log('S3 URL:', s3Url);
                query += ', blog_feature_image = ?';
                paramsArr.push(s3Url);
            } catch (s3Err) {
               // console.error('S3 upload failed:', s3Err);
                return NextResponse.json({ success: false, message: 'Failed to upload new feature image.', error: String(s3Err?.message || s3Err) }, { status: 500 });
            }
        } else if (existingImage) {
            // If no new file but existingImage provided, set it (optional)
            query += ', blog_feature_image = ?';
            paramsArr.push(existingImage);
        }

        query += ' WHERE blog_id = ?';
        paramsArr.push(blog_id);

        // console.log('Final query:', query);
        // console.log('Params:', paramsArr);

        const [result] = await pool.execute(query, paramsArr);

        // console.log('DB result:', result);

        if (!result || result.affectedRows === 0) {
            return NextResponse.json({ success: false, message: 'Blog not found or no changes made.', affectedRows: result?.affectedRows || 0 }, { status: 404 });
        }

        return NextResponse.json({
            success: true,
            message: 'Blog updated successfully',
            affectedRows: result.affectedRows,
            slug: finalSlug,
        });
    } catch (err) {
       // console.error('Unexpected error:', err);
        return NextResponse.json({ success: false, message: 'Failed to update blog', error: String(err?.message || err) }, { status: 500 });
    }
}
