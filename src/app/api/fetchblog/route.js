import pool from "../../../../lib/mysql";
import { NextResponse } from 'next/server'; 

export async function GET(req) {
  try {
    const query = `
      SELECT 
        b.blog_id, 
        b.blog_slug, 
        b.blog_title, 
        b.blog_description, 
        b.blog_feature_image, 
        DATE_FORMAT(b.blog_date_time, '%Y-%m-%d') AS formatted_blog_date,
        c.category AS blog_category
      FROM blogs b
      LEFT JOIN categories c ON b.blog_category_id = c.id
      WHERE b.blog_status ="0"
      ORDER BY b.blog_date_time DESC
    `;

    const [rows] = await pool.execute(query);

    const trimmedRows = rows.map(row => {
      if (row.blog_description.length > 150) {
        return {
          ...row,
          blog_description: row.blog_description.slice(0, 150) + '...',
        };
      }
      return row;
    });

    return NextResponse.json({
      message: 'Blogs fetched successfully.',
      data: trimmedRows,
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
