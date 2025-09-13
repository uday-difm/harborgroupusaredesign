import pool from '../../../../../../lib/mysql';
import { uploadToS3 } from '../../../../../../utils/s3Utility';
import { NextResponse } from 'next/server';

export const config = {
  api: {
    bodyParser: false,   // ✅ needed for multipart
    sizeLimit: '50mb',   // ✅ allow larger payloads
  },
};


const generateSlug = (str) => {
  return str
    .toLowerCase()
    .replace(/'/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export async function PUT(req, { params }) {
  try {
    const formData = await req.formData();

    const blog_id = params.id; // Get from URL param
    if (!blog_id) {
      return NextResponse.json({ success: false, message: 'blog_id is required' }, { status: 400 });
    }

    const blog_title = formData.get('blog_title');
    const blog_tag = formData.get('blog_tag');
    const blog_description = formData.get('blog_description');
    const blog_content = formData.get('blog_content');
    const blog_slug = formData.get('blog_slug'); // Manual slug from user input
    const blog_category_id = formData.get('blog_category_id');
    const blog_date = formData.get('blog_date');
    const blog_time = formData.get('blog_time');
    const existingImage = formData.get('existingImage');
    const imageFile = formData.get('blog_feature_image');

    const finalSlug =
      blog_slug && blog_slug.trim().length > 0
        ? generateSlug(blog_slug.trim())
        : generateSlug(blog_title);

    const blog_date_time = `${blog_date} ${blog_time}`;
    let featureImageUrl = existingImage;

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

    // Upload new image if provided
    if (imageFile && imageFile.size > 0) {
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      const fileForS3 = {
        buffer,
        originalname: imageFile.name,
        mimetype: imageFile.type,
      };
      featureImageUrl = await uploadToS3('blogs', fileForS3);
      query += `, blog_feature_image = ?`;
      paramsArr.push(featureImageUrl);
    }

    query += ` WHERE blog_id = ?`;
    paramsArr.push(blog_id);

    const [result] = await pool.execute(query, paramsArr);

    return NextResponse.json({
      success: true,
      message: 'Blog updated successfully',
      affectedRows: result.affectedRows,
      blog_feature_image: featureImageUrl,
      slug: finalSlug,
    });
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update blog', error: error.message },
      { status: 500 }
    );
  }
}