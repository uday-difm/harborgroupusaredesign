import { NextResponse } from 'next/server';
import { uploadToS3 } from '../../../../../utils/s3Utility';

export const config = {
    api: {
        bodyParser: false,
    },
};

/**
 * Handles POST requests for image uploads from the Jodit editor.
 * @param {Request} req The incoming request object.
 * @returns {NextResponse} The response containing the URL of the uploaded image.
 */
export async function POST(req) {
    try {
        const formData = await req.formData();
        const file = formData.get('file');

        if (!file) {
            return NextResponse.json({ success: false, error: 'No file uploaded.' }, { status: 400 });
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        const fileForS3 = {
            buffer: buffer,
            originalname: file.name,
            mimetype: file.type,
        };

        const imageUrl = await uploadToS3('blog-content-images', fileForS3);

        // Jodit expects a specific JSON response format for a successful upload.
        return NextResponse.json({
            success: true,
            data: {
                baseurl: '', // Base URL can be left empty as the full URL is provided below
                files: [{
                    url: imageUrl,
                    name: file.name,
                }],
            },
            
            // Jodit can also handle a simpler response format.
            // Example:
            // "success": true,
            // "file": imageUrl
            // The format above is more robust and aligns with Jodit's advanced features.
        });

    } catch (error) {
        console.error('Image upload error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to upload image.', details: error.message },
            { status: 500 }
        );
    }
}