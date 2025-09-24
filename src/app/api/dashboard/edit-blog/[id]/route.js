import pool from '../../../../../../lib/mysql';
import { uploadToS3 } from '../../../../../../utils/s3Utility';
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

export async function PUT(req, { params }) {
    console.log('--- Starting PUT request handler ---');
    try {
        console.log('Step 1: Parsing form data.');
        const formData = await req.formData();

        console.log('Step 2: Getting blog ID from URL parameters.');
        const blog_id = params.id;
        console.log(`Received blog ID: ${blog_id}`);
        if (!blog_id) {
            console.error('Validation failed: blog_id is missing from URL parameters.');
            return NextResponse.json({ success: false, message: 'blog_id is required' }, { status: 400 });
        }

        console.log('Step 3: Extracting form fields.');
        const blog_title = formData.get('blog_title');
        const blog_tag = formData.get('blog_tag');
        const blog_description = formData.get('blog_description');
        const blog_content = formData.get('blog_content');
        const blog_slug = formData.get('blog_slug');
        const blog_category_id = formData.get('blog_category_id');
        const blog_date = formData.get('blog_date');
        const blog_time = formData.get('blog_time');
        const existingImage = formData.get('existingImage');
        const imageFile = formData.get('blog_feature_image');

        // Log all received form data
        console.log('Received form data:', {
            blog_title,
            blog_tag,
            blog_description,
            blog_content,
            blog_slug,
            blog_category_id,
            blog_date,
            blog_time,
            existingImage,
            imageFile: imageFile ? 'File received' : 'No new file',
        });

        console.log('Step 4: Generating or using the final slug.');
        const finalSlug =
            blog_slug && blog_slug.trim().length > 0
                ? generateSlug(blog_slug.trim())
                : generateSlug(blog_title);
        console.log(`Final slug to be used: ${finalSlug}`);

        console.log('Step 5: Combining date and time.');
        const blog_date_time = `${blog_date} ${blog_time}`;
        console.log(`Combined date and time: ${blog_date_time}`);

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

        console.log('Step 6: Checking for new image file and uploading to S3 if it exists.');
        if (imageFile && imageFile.size > 0) {
            try {
                console.log(`New image file found. Original name: ${imageFile.name}, size: ${imageFile.size}`);
                const buffer = Buffer.from(await imageFile.arrayBuffer());
                const fileForS3 = {
                    buffer,
                    originalname: imageFile.name,
                    mimetype: imageFile.type,
                };
                featureImageUrl = await uploadToS3('blogs', fileForS3);
                console.log(`S3 upload successful. New image URL: ${featureImageUrl}`);
                query += `, blog_feature_image = ?`;
                paramsArr.push(featureImageUrl);
            } catch (s3Error) {
                console.error('Error uploading new image to S3:', s3Error);
                return NextResponse.json(
                    { success: false, message: 'Failed to upload new feature image.', error: s3Error.message },
                    { status: 500 }
                );
            }
        } else {
            console.log('No new image file provided. Using existing image URL.');
        }

        console.log('Step 7: Finalizing the SQL query and parameters.');
        query += ` WHERE blog_id = ?`;
        paramsArr.push(blog_id);
        console.log('Final Query:', query);
        console.log('Final Parameters:', paramsArr);

        console.log('Step 8: Executing the SQL query.');
        const [result] = await pool.execute(query, paramsArr);
        console.log('SQL query executed successfully.');
        console.log('Database result:', result);

        if (result.affectedRows === 0) {
            console.warn('Query executed, but no rows were updated. Check if blog ID exists.');
        }

        console.log('Step 9: Sending success response.');
        return NextResponse.json({
            success: true,
            message: 'Blog updated successfully',
            affectedRows: result.affectedRows,
            blog_feature_image: featureImageUrl,
            slug: finalSlug,
        });

    } catch (error) {
        console.error('--- PUT request handler failed with an error ---');
        console.error('Final error caught:', error.message);
        console.error('Error stack:', error.stack);
        return NextResponse.json(
            { success: false, message: 'Failed to update blog', error: error.message },
            { status: 500 }
        );
    }
}