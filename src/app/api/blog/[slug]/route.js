// File: app/api/blogs/[slug]/route.js or route.ts
import pool from "../../../../../lib/mysql";
import { NextResponse } from 'next/server'; 

export async function GET(req, context) {
   const { params } = await context;
  const { slug } = params;

  if (!slug) {
    return NextResponse.json(
      { message: 'Missing blog slug.' },
      { status: 400 }
    );
  }

  try {
    const query = `
      SELECT blog_id, blog_slug, blog_title, blog_description, blog_tag, blog_feature_image, blog_content,
             DATE_FORMAT(blog_date_time, '%Y-%m-%d') AS formatted_blog_date
      FROM blogs 
      WHERE blog_status = "0" AND blog_slug = ?
      ORDER BY blog_date_time DESC
    `;

    const [rows] = await pool.execute(query, [slug]);

    if (rows.length === 0) {
      return NextResponse.json(
        { message: 'Blog not found.' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: 'Blog fetched successfully.',
      data: rows[0], // Return single blog
    });

  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json(
      {
        message: 'Error fetching blog.',
        error: error.message,
      },
      { status: 500 }
    );
  }
}
