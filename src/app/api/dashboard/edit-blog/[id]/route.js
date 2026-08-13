import pool from '../../../../../../lib/mysql';
import { uploadToS3 } from '../../../../../../utils/s3Utility';
import { NextResponse } from 'next/server';

const generateSlug = (str) =>
  String(str || '')
    .toLowerCase()
    .replace(/'/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export async function PUT(req, props) {
  const params = await props.params;
  console.log('=== UPDATE BLOG PUT ===');
  try {
    // 1) parse content-type and payload (JSON or FormData)
    const contentType = String(req.headers.get?.('content-type') || '').toLowerCase();
    let payload = {};
    let imageFile = null;
    let existingImage = null;

    if (contentType.includes('application/json')) {
      try {
        payload = await req.json();
        existingImage = payload.existingImage || payload.existing_image || null;
      } catch (err) {
        console.error('Invalid JSON:', err);
        return NextResponse.json({ success: false, message: 'Invalid JSON' }, { status: 400 });
      }
    } else {
      try {
        const formData = await req.formData();
        payload = {};
        for (const [key, value] of formData.entries()) {
          const isFileLike = value && typeof value === 'object' && ('size' in value || value instanceof Blob);
          if (key === 'blog_feature_image' && isFileLike) {
            imageFile = value;
          } else if (typeof value === 'string') {
            payload[key] = value;
          } else {
            // fallback convert to string
            try {
              payload[key] = String(value);
            } catch (e) {
              payload[key] = value;
            }
          }
        }
        existingImage = formData.get('existingImage') || formData.get('existing_image') || existingImage;
      } catch (err) {
        console.error('FormData parse error:', err);
        return NextResponse.json({ success: false, message: 'Failed to parse form data', error: String(err?.message) }, { status: 400 });
      }
    }

    // 2) determine blog_id: prefer route param, else check payload
    const blog_id = params?.id || payload.blog_id || payload.blogId || null;
    console.log('Resolved blog_id:', blog_id);

    if (!blog_id) {
      return NextResponse.json({ success: false, message: 'blog_id is required' }, { status: 400 });
    }

    // 3) normalize fields
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

    // 4) status handling - accept '0' or '1', default to '1'
    let statusToSend = String(payload.status ?? payload.status_value ?? payload.statusValue ?? '1');
    statusToSend = statusToSend === '0' ? '0' : '1';

    // 5) validation: require title & category only when publishing
    if (statusToSend === '1') {
      if (!blog_title || !blog_category_id) {
        return NextResponse.json({ success: false, message: 'Blog title and category are required to publish.' }, { status: 400 });
      }
    }

    // 6) slug and date/time
    const finalSlug =
      blog_slug && String(blog_slug).trim().length > 0 ? generateSlug(String(blog_slug).trim()) : generateSlug(blog_title || '');
    const blog_date_time = [blog_date, blog_time].filter(Boolean).join(' ').trim() || null;

    // 7) build update query
    let query = `
      UPDATE blogs
      SET blog_slug = ?, blog_title = ?, blog_tag = ?, blog_description = ?, blog_category_id = ?, blog_content = ?, blog_date_time = ?
    `;
    const paramsArr = [
      finalSlug,
      blog_title || '',
      blog_tag || '',
      blog_description || '',
      blog_category_id || null,
      blog_content || '',
      blog_date_time,
    ];

    // 8) handle image upload if provided
    if (imageFile && typeof imageFile !== 'string' && (imageFile.size > 0 || (imageFile instanceof Blob && imageFile.size))) {
      try {
        console.log('Uploading image to S3...');
        const buffer = Buffer.from(await imageFile.arrayBuffer());
        const fileForS3 = {
          buffer,
          originalname: imageFile.name || `upload-${Date.now()}`,
          mimetype: imageFile.type || 'application/octet-stream',
        };
        const s3Url = await uploadToS3('blogs', fileForS3);
        query += ', blog_feature_image = ?';
        paramsArr.push(s3Url);
      } catch (s3Err) {
        console.error('S3 upload failed:', s3Err);
        return NextResponse.json({ success: false, message: 'Failed to upload new feature image.', error: String(s3Err?.message || s3Err) }, { status: 500 });
      }
    } else if (existingImage) {
      query += ', blog_feature_image = ?';
      paramsArr.push(existingImage);
    }

    // 9) include status column update
    query += ', status = ?';
    paramsArr.push(statusToSend);

    // 10) where clause
    query += ' WHERE blog_id = ?';
    paramsArr.push(blog_id);

    console.log('Executing UPDATE for blog:', blog_id, 'status:', statusToSend);
    const [result] = await pool.execute(query, paramsArr);

    if (!result || result.affectedRows === 0) {
      return NextResponse.json({ success: false, message: 'Blog not found or no changes made.', affectedRows: result?.affectedRows || 0 }, { status: 404 });
    }

    // 11) optional: fetch updated row and return it
    try {
      const [rows] = await pool.execute('SELECT * FROM blogs WHERE blog_id = ?', [blog_id]);
      const updated = rows && rows[0] ? rows[0] : null;
      const responseMessage = statusToSend === '0' ? 'Draft saved successfully!' : 'Blog updated and published.';
      return NextResponse.json({
        success: true,
        message: responseMessage,
        affectedRows: result.affectedRows,
        slug: finalSlug,
        status: statusToSend,
        blog: updated,
      });
    } catch (selectErr) {
      console.warn('Update succeeded but failed to SELECT updated row:', selectErr);
      const responseMessage = statusToSend === '0' ? 'Draft saved successfully!' : 'Blog updated and published.';
      return NextResponse.json({
        success: true,
        message: responseMessage,
        affectedRows: result.affectedRows,
        slug: finalSlug,
        status: statusToSend,
      });
    }
  } catch (err) {
    console.error('Unexpected error in edit-blog route:', err);
    return NextResponse.json({ success: false, message: 'Failed to update blog', error: String(err?.message || err) }, { status: 500 });
  }
}