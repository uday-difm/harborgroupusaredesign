import { v4 as uuidv4 } from 'uuid';
import { uploadToS3 } from '../../../../../utils/s3Utility';
import pool from '../../../../../lib/mysql';
import { NextResponse } from 'next/server';

export const config = {
  api: {
    bodyParser: false,
    sizeLimit: '50mb',
  },
};

const generateSlug = (str) =>
  str
    .toLowerCase()
    .replace(/'/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export async function POST(req) {
  try {
    const formData = await req.formData();

    // Debug log: show status and keys (remove in production)
    const statusFromClient = formData.get('status');
    console.log('Received status from client (raw):', statusFromClient);
    // Optional: print all keys
    for (const k of formData.keys()) {
      console.log('form key:', k);
    }

    const blogTitle = formData.get('blogTitle') || '';
    const blogTag = formData.get('tags') || null;
    const description = formData.get('description') || null;
    const content = formData.get('content') || null;
    const blogCategoryId = formData.get('blogCategory') || null;
    const date = formData.get('date') || null;
    const time = formData.get('time') || null;
    const imageFile = formData.get('featureImage');
    const blogPublisherId = formData.get('blogPublisherId') || null;
    const manualBlogSlug = formData.get('manualBlogSlug') || null;

    // Normalize status -> number 0 or 1 (default to 0 if not provided or invalid)
    const statusNum = Number(statusFromClient) === 1 ? 1 : 0;
    console.log('Normalized status to save:', statusNum);

    // Basic validation
    if (!blogTitle) {
      return NextResponse.json({ message: 'Blog title is required.' }, { status: 400 });
    }
    if (!blogPublisherId) {
      return NextResponse.json({ message: 'Publisher ID is required.' }, { status: 400 });
    }
    // If publishing (status === 1) require the rest
    if (statusNum === 1) {
      if (!blogTag || !description || !content || !blogCategoryId || !date || !time) {
        return NextResponse.json({ message: 'All fields required for publishing.' }, { status: 400 });
      }
      // Publishing requires image — enforce if you want:
      if (!imageFile || imageFile.size === 0) {
        return NextResponse.json({ message: 'Feature image required for publishing.' }, { status: 400 });
      }
    }

    const blogId = uuidv4();
    const blogSlug = manualBlogSlug || generateSlug(blogTitle);

    // Upload image only if present
    let featureImageUrl = null;
    if (imageFile && imageFile.size > 0) {
      try {
        const buffer = Buffer.from(await imageFile.arrayBuffer());
        const fileForS3 = {
          buffer,
          originalname: imageFile.name,
          mimetype: imageFile.type,
        };
        featureImageUrl = await uploadToS3('blogs', fileForS3);
        console.log('Uploaded feature image to S3:', featureImageUrl);
      } catch (s3Err) {
        console.error('S3 upload error:', s3Err);
        return NextResponse.json({ message: 'Failed uploading image', error: s3Err.message }, { status: 500 });
      }
    }

    // Prepare DB values
    const blogDateTime = date && time ? `${date} ${time}` : null;

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
      statusNum, 
      featureImageUrl,
      content,
      blogDateTime,
    ];

    const [result] = await pool.execute(query, values);

    console.log('DB insert result:', result);
    return NextResponse.json(
      {
        message: statusNum === 1 ? 'Blog published' : 'Draft saved',
        status: statusNum,
        blogId,
        blogSlug,
        featureImageUrl,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error('Addblog POST error:', err);
    return NextResponse.json({ message: 'Server error', error: err.message }, { status: 500 });
  }
}
