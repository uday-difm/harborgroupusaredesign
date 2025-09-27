import pool from '../../../../../../lib/mysql';
import { uploadToS3 } from '../../../../../../utils/s3Utility';
import { NextResponse } from 'next/server';

export const config = {
    api: {
        bodyParser: false,
        sizeLimit: '50mb',
    },
};

const generateSlug = (str) =>
    String(str || '')
        .toLowerCase()
        .replace(/'/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

export async function PUT(req, { params }) {
    try {
        // Safe blog id accessor: prefer params.id, fallback to last path segment of request URL.
        const blog_id =
            params?.id ??
            (() => {
                try {
                    const u = new URL(req.url);
                    const parts = u.pathname.split('/').filter(Boolean);
                    return parts[parts.length - 1] || undefined;
                } catch {
                    return undefined;
                }
            })();

        if (!blog_id) {
            return NextResponse.json({ success: false, message: 'blog_id is required' }, { status: 400 });
        }

        const formData = await req.formData();

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

        const finalSlug =
            blog_slug && String(blog_slug).trim().length > 0 ? generateSlug(String(blog_slug).trim()) : generateSlug(blog_title);

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

        if (imageFile && imageFile.size > 0) {
            // Upload new image to S3
            try {
                const buffer = Buffer.from(await imageFile.arrayBuffer());
                const fileForS3 = {
                    buffer,
                    originalname: imageFile.name,
                    mimetype: imageFile.type,
                };
                featureImageUrl = await uploadToS3('blogs', fileForS3);

                query += `, blog_feature_image = ?`;
                paramsArr.push(featureImageUrl);
            } catch (s3Error) {
                return NextResponse.json(
                    { success: false, message: 'Failed to upload new feature image.', error: String(s3Error?.message || s3Error) },
                    { status: 500 }
                );
            }
        }

        query += ` WHERE blog_id = ?`;
        paramsArr.push(blog_id);

        const [result] = await pool.execute(query, paramsArr);

        if (result.affectedRows === 0) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Blog not found or no changes were made.',
                    affectedRows: 0,
                },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Blog updated successfully',
            affectedRows: result.affectedRows,
            blog_feature_image: featureImageUrl,
            slug: finalSlug,
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: 'Failed to update blog', error: String(error?.message || error) },
            { status: 500 }
        );
    }
}
