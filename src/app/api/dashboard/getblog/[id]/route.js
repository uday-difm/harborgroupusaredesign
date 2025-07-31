import pool from "../../../../../../lib/mysql";
import { NextResponse } from 'next/server'; 

export async function GET(req) {
  try {
    const blogId = req.url.split('/').pop(); // Adjust parsing as needed
const query = `
      SELECT 
      b.blog_id,
        b.blog_title,
        b.blog_slug,
        b.blog_description,
        b.blog_tag,
        b.blog_category_id,
        c.category AS blog_category_name,
        b.blog_feature_image,
        b.blog_content,
        DATE_FORMAT(b.blog_date_time, '%Y-%m-%d') AS formatted_blog_date,
        DATE_FORMAT(b.blog_date_time, '%H:%i') AS formatted_blog_time
      FROM blogs b
      LEFT JOIN categories c ON b.blog_category_id = c.id
      WHERE b.blog_status = "0" AND b.blog_id = ?
      ORDER BY b.blog_date_time DESC
    `;

    const [rows] = await pool.execute(query, [blogId]);

    return NextResponse.json({
      message: 'Blogs fetched successfully.',
      data: rows,
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { 
        message: 'Error fetching blogs.',
        error: error.message,
      },
      { status: 500 }
    );
  }
}
