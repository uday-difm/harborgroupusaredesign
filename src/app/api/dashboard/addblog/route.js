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

const generateSlug = (str) => {
    return str
        .toLowerCase()
        .replace(/'/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
};

export async function POST(req) {
    console.log('--- Starting POST request handler ---');
    try {
        console.log('Step 1: Parsing form data.');
        const formData = await req.formData();
        
        const blogTitle = formData.get('blogTitle');
        const blogTag = formData.get('tags');
        const description = formData.get('description');
        const content = formData.get('content');
        const blogCategoryId = formData.get('blogCategory');
        const date = formData.get('date');
        const time = formData.get('time');
        const imageFile = formData.get('featureImage');
        const blogPublisherId = formData.get('blogPublisherId');
        const manualBlogSlug = formData.get('manualBlogSlug');
        
        console.log('Step 2: Checking for missing required fields.');
        // Log received form data to check if it's correct
        console.log({
            blogTitle,
            blogTag,
            description,
            content,
            blogCategoryId,
            date,
            time,
            imageFile: imageFile ? 'File received' : 'No file received',
            blogPublisherId,
            manualBlogSlug
        });

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
            console.error('Validation failed: One or more required fields are missing.');
            return NextResponse.json(
                { message: 'All required fields are missing.' },
                { status: 400 }
            );
        }

        console.log('Step 3: Generating blog ID and slug.');
        const blogId = uuidv4();
        const blogSlug = manualBlogSlug ? manualBlogSlug : generateSlug(blogTitle);
        console.log(`Generated ID: ${blogId}, Slug: ${blogSlug}`);

        console.log('Step 4: Handling file upload to S3.');
        let featureImage = null;
        if (imageFile && imageFile.size > 0) {
            try {
                console.log(`Uploading file: ${imageFile.name} with size ${imageFile.size}`);
                const buffer = Buffer.from(await imageFile.arrayBuffer());
                const fileForS3 = {
                    buffer: buffer,
                    originalname: imageFile.name,
                    mimetype: imageFile.type,
                };
                featureImage = await uploadToS3('blogs', fileForS3);
                console.log(`S3 upload successful. URL: ${featureImage}`);
            } catch (s3Error) {
                console.error('Error uploading image to S3:', s3Error);
                return NextResponse.json(
                    { message: 'Failed to upload feature image.', error: s3Error.message },
                    { status: 500 }
                );
            }
        } else {
            console.error('File validation failed: Image file is required and cannot be empty.');
            return NextResponse.json(
                { message: 'Feature image file is required and cannot be empty.' },
                { status: 400 }
            );
        }
        
        console.log('Step 5: Preparing data for database insertion.');
        const blogDateTime = `${date} ${time}`;
        console.log(`Combined Date and Time: ${blogDateTime}`);
        
        const query = "INSERT INTO `blogs` (`blog_id`, `blog_slug`, `blog_title`, `blog_description`, `blog_tag`, `blog_category_id`, `blog_publisher_id`, `blog_status`, `blog_feature_image`, `blog_content`, blog_date_time) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        const values = [
            blogId,
            blogSlug,
            blogTitle,
            description,
            blogTag,
            blogCategoryId,
            blogPublisherId,
            '0',
            featureImage,
            content,
            blogDateTime,
        ];
        console.log('Values array prepared for insertion.');

        console.log('Step 6: Executing SQL query.');
        const [result] = await pool.execute(query, values);
        console.log('SQL query executed successfully.');
        console.log('Database result:', result);

        console.log('Step 7: Sending success response.');
        return NextResponse.json(
            {
                message: 'Blog inserted successfully',
                blogId: blogId,
                blogSlug: blogSlug,
                featureImage: featureImage,
                databaseResult: result,
            },
            { status: 201 }
        );

    } catch (error) {
        console.error('--- Post request handler failed with an error ---');
        console.error('Final error caught:', error.message);
        console.error('Error stack:', error.stack);
        return NextResponse.json(
            { message: 'Error inserting blog', error: error.message },
            { status: 500 }
        );
    }
}