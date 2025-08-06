import { v4 as uuidv4 } from 'uuid'; // For generating unique blog IDs
import { uploadToS3 } from '../../../../../utils/s3Utility';
import pool from '../../../../../lib/mysql';
import { NextResponse } from 'next/server';

export const config = {
  api: {
    bodyParser: false, // To handle multipart form data manually
  },
};

// Function to generate a slug from title or other strings
const generateSlug = (str) => {
  return str
    .toLowerCase()
    .replace(/'/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing dashes
};

// The main handler for POST requests
export async function POST(req) {
  try {
    // 1. Parse the multipart form data from the request
    const formData = await req.formData();

    // Extract form fields
    const blogTitle = formData.get('blogTitle');
    const blogTag = formData.get('tags');
    const description = formData.get('description');
    const content = formData.get('content');
    const blogCategoryId = formData.get('blogCategory');
    const date = formData.get('date');
    const time = formData.get('time');
    const imageFile = formData.get('featureImage');
    const blogPublisherId = formData.get('blogPublisherId');
    const manualBlogSlug = formData.get('manualBlogSlug'); // Check for manual slug

    // Check if all required fields are provided
    if (
      !blogTitle ||
      !blogTag ||
      !description ||
      !content ||
      !blogCategoryId ||
      !blogPublisherId ||
      !date ||
      !time ||
      !imageFile
    ) {
      return NextResponse.json(
        { message: 'All required fields are missing.' },
        { status: 400 }
      );
    }

    // 4. Generate blog_id using uuidv4
    const blogId = uuidv4();

    // 5. Generate slug from the blog title, but only if no manual slug is provided
    const blogSlug = manualBlogSlug ? manualBlogSlug : generateSlug(blogTitle);

    // 6. Handle the file upload to S3
    let featureImage = null;
    if (imageFile && imageFile.size > 0) {
      try {
        const buffer = Buffer.from(await imageFile.arrayBuffer());
        const fileForS3 = {
          buffer: buffer,
          originalname: imageFile.name,
          mimetype: imageFile.type,
        };
        featureImage = await uploadToS3('blogs', fileForS3);
      } catch (s3Error) {
        console.error('Error uploading image to S3:', s3Error);
        return NextResponse.json(
          { message: 'Failed to upload feature image.', error: s3Error.message },
          { status: 500 }
        );
      }
    } else {
      return NextResponse.json(
        { message: 'Feature image file is required and cannot be empty.' },
        { status: 400 }
      );
    }

    // Combine date and time for the DATETIME column
    const blogDateTime = `${date} ${time}`;

    // 7. Insert the data into the database
    const query = "INSERT INTO `blogs` (`blog_id`, `blog_slug`, `blog_title`, `blog_description`, `blog_tag`, `blog_category_id`, `blog_publisher_id`, `blog_feature_image`, `blog_content`, `blog_date_time`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    const values = [blogId, blogSlug, blogTitle, description, blogTag, blogCategoryId, blogPublisherId, featureImage, content, blogDateTime,
    ];

    // Execute the query
    const [result] = await pool.execute(query, values);

    // 8. Send a success response
    return NextResponse.json(
      {
        message: 'Blog inserted successfully',
        blogId: blogId,
        blogSlug: blogSlug,  // Send the used slug
        featureImage: featureImage,
        databaseResult: result,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Blog insert error:', error);
    return NextResponse.json(
      { message: 'Error inserting blog', error: error.message },
      { status: 500 }
    );
  }
}
