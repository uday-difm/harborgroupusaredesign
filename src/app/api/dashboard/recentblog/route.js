import pool from "../../../../../lib/mysql";
import { NextResponse } from 'next/server'; 

// The API handler for fetching data from the database
export async function GET(req) {
  try {
    // Correct SQL query to fetch blogs where blog_status is "0" and order by blog_date_time DESC
        const query = `
      SELECT blog_id, blog_title, blog_feature_image, 
        DATE_FORMAT(blog_date_time, '%Y-%m-%d ') AS formatted_blog_date
      FROM blogs 
      WHERE blog_status = 0 
      ORDER BY blog_date_time DESC 
      LIMIT 10
    `;


    // Execute the query using the pool connection
    const [rows] = await pool.execute(query);

    // Return the fetched rows as a JSON response
    return NextResponse.json({
      message: 'Blogs fetched successfully.',
      data: rows, // This will be the result of your query
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    // Use NextResponse to return a response with error status
    return NextResponse.json(
      { 
        message: 'Error fetching blogs.',
        error: error.message,
      },
      { status: 500 }
    );
  }
}