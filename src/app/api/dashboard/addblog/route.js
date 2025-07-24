import { v4 as uuidv4 } from 'uuid';
import { uploadToS3 } from '../../../../../utils/s3Utility';
import pool from '../../../../../lib/mysql';
import { NextResponse } from 'next/server';

// Helper function to generate slug from title
const generateSlug = (title) => {
  if (!title) return '';
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // Remove all non-alphanumeric characters except spaces and hyphens
    .replace(/\s+/g, '-')         // Replace spaces with a single hyphen
    .replace(/-+/g, '-');          // Replace multiple hyphens with a single one
};

// The main handler for POST requests
export async function POST(req) {
  try {
    // 1. Parse the multipart form data from the request
    const formData = await req.formData();

    // 2. Extract the text fields from formData
    const title = formData.get('title');
    const slug = formData.get('slug');
    const tag = formData.get('tag');
    const content = formData.get('content');
    const category = formData.get('category');
    const date = formData.get('date');
    const time = formData.get('time');
    const description = formData.get('description');

    // 3. Generate slug from title if not provided
    const generatedSlug = slug || generateSlug(title);

    // 4. Handle the file upload
    const imageFile = formData.get('image'); // This is a File object
    let imageUrl = null;

    if (imageFile && imageFile.size > 0) {
      // Convert the file to a buffer
      const buffer = Buffer.from(await imageFile.arrayBuffer());

      // Create a file object compatible with your S3 utility
      const fileForS3 = {
        buffer: buffer,
        originalname: imageFile.name,
        mimetype: imageFile.type,
      };

      imageUrl = await uploadToS3('blogs', fileForS3); // Upload file to S3
    }

    // 5. Insert the data into the database
    const blogId = uuidv4();
    await pool.execute(
      `INSERT INTO blogs 
        (id, title, slug, tag, content, category, date, time, description, image_url)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        blogId, title, generatedSlug, tag, content, category, date, time, description, imageUrl,
      ]
    );

    return NextResponse.json({ message: 'Blog inserted successfully', id: blogId }, { status: 201 });
  } catch (error) {
    console.error('Blog insert error:', error);
    return NextResponse.json({ message: 'Error inserting blog', error: error.message }, { status: 500 });
  }
}