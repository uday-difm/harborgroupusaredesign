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
    // --- DEBUG START: Log the request start and ID ---
    console.log('--- PUT Request Start ---');
    console.log('Request received for blog ID:', params.id);
    // --------------------------------------------------

    try {
        const formData = await req.formData();
        const blog_id = params.id;

        // --- DEBUG: Check Blog ID presence ---
        if (!blog_id) {
            console.error('ERROR: Blog ID missing from parameters.');
            return NextResponse.json({ success: false, message: 'blog_id is required' }, { status: 400 });
        }

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
        
        // --- DEBUG: Log key received data ---
        console.log('Received data:');
        console.log(`  Title: ${blog_title}`);
        console.log(`  Category ID: ${blog_category_id}`);
        console.log(`  Existing Image URL: ${existingImage}`);
        console.log(`  New Image File Size: ${imageFile ? imageFile.size : 'N/A'}`);
        // ------------------------------------

        const finalSlug =
            blog_slug && blog_slug.trim().length > 0
                ? generateSlug(blog_slug.trim())
                : generateSlug(blog_title);

        const blog_date_time = `${blog_date} ${blog_time}`;

        // --- DEBUG: Log generated values ---
        console.log(`Generated Final Slug: ${finalSlug}`);
        console.log(`Generated DateTime: ${blog_date_time}`);
        // -----------------------------------

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

        if (imageFile && imageFile.size > 0) {
            console.log('STATUS: New image file found. Attempting S3 upload...');
            try {
                const buffer = Buffer.from(await imageFile.arrayBuffer());
                const fileForS3 = {
                    buffer,
                    originalname: imageFile.name,
                    mimetype: imageFile.type,
                };
                featureImageUrl = await uploadToS3('blogs', fileForS3);
                
                // --- DEBUG: Log S3 success ---
                console.log(`S3 SUCCESS: New feature image URL: ${featureImageUrl}`);
                // -----------------------------

                query += `, blog_feature_image = ?`;
                paramsArr.push(featureImageUrl);
            } catch (s3Error) {
                // --- DEBUG: Log S3 Error ---
                console.error('S3 ERROR:', s3Error.message);
                // ---------------------------
                return NextResponse.json(
                    { success: false, message: 'Failed to upload new feature image.', error: s3Error.message },
                    { status: 500 }
                );
            }
        } else {
            console.log('STATUS: No new image file detected. Using existing image URL.');
        }

        query += ` WHERE blog_id = ?`;
        paramsArr.push(blog_id);

        // --- DEBUG: Log final query and parameters (CAUTION: do not log sensitive data in production) ---
        console.log('Executing SQL Query:', query.trim().replace(/\s+/g, ' '));
        console.log('With Parameters (excluding content/description for brevity):', [
            ...paramsArr.slice(0, 5),
            'CONTENT_OMITTED',
            'DATETIME_OMITTED',
            ...paramsArr.slice(7)
        ]);
        // ------------------------------------------------------------------------------------------------

        const [result] = await pool.execute(query, paramsArr);
        
        // --- DEBUG: Log Database result ---
        console.log('Database Result:', { affectedRows: result.affectedRows, insertId: result.insertId });
        // ----------------------------------

        if (result.affectedRows === 0) {
            console.warn('WARNING: Blog not found or no changes were made.');
            return NextResponse.json({
                success: false,
                message: 'Blog not found or no changes were made.',
                affectedRows: 0,
            }, { status: 404 });
        }

        // --- DEBUG: Log Success ---
        console.log('SUCCESS: Blog update completed.');
        // --------------------------

        return NextResponse.json({
            success: true,
            message: 'Blog updated successfully',
            affectedRows: result.affectedRows,
            blog_feature_image: featureImageUrl,
            slug: finalSlug,
        });

    } catch (error) {
        // --- DEBUG: Log Catch Block Error ---
        console.error('GLOBAL CATCH ERROR: Failed to update blog.', error.message);
        console.error('Stack Trace (if available):', error.stack);
        // ------------------------------------
        return NextResponse.json(
            { success: false, message: 'Failed to update blog', error: error.message },
            { status: 500 }
        );
    } finally {
        console.log('--- PUT Request End ---');
    }
}