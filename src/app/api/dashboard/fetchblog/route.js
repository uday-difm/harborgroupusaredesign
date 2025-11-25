import pool from "../../../../../lib/mysql";
import { NextResponse } from 'next/server'; 


export async function GET(req) {
  try {
    
    const query = `SELECT blog_id, blog_title, blog_feature_image, status,
        DATE_FORMAT(blog_date_time, '%Y-%m-%d ') AS formatted_blog_date
      FROM blogs 
      WHERE blog_status = "0" 
      ORDER BY blog_date_time DESC`;

    const [rows] = await pool.execute(query);

    return NextResponse.json({
      message: 'Blogs fetched successfully.',
      data: rows, 
    });
  } catch (error) {
    //console.error('Error fetching blogs:', error);

    return NextResponse.json(
      { 
        message: 'Error fetching blogs.',
        error: error.message,
      },
      { status: 500 }
    );
  }
}
