import pool from "../../../../../lib/mysql";
import { NextResponse } from 'next/server';

export async function PUT(req) {
  try {
    // Get the request body (should contain all fields to update)
    const {
      blog_id,
      blog_slug,
      blog_title,
      blog_description,
      blog_tag,
      blog_category_id,
      blog_status,
      blog_feature_image,
      blog_content,
      blog_publisher_id,
      blog_date_time,
    } = await req.json(); // Destructure the fields from the request body

    // Check if all required fields are provided
    if (!blog_id || !blog_slug || !blog_title || !blog_description || !blog_tag || !blog_category_id || !blog_status || !blog_feature_image || !blog_content || !blog_publisher_id || !blog_date_time) {
      return NextResponse.json({ message: 'Missing required fields.' }, { status: 400 });
    }

    // SQL query to update the blog record
    const query = `
      UPDATE blogs
      SET
        blog_slug = ?, 
        blog_title = ?, 
        blog_description = ?, 
        blog_tag = ?, 
        blog_category_id = ?, 
        blog_status = ?, 
        blog_feature_image = ?, 
        blog_content = ?, 
        blog_publisher_id = ?, 
        blog_date_time = ?
      WHERE
        blog_id = ? AND blog_status = 0
    `;

    // Execute the query using the pool connection
    const [result] = await pool.execute(query, [
      blog_slug, 
      blog_title, 
      blog_description, 
      blog_tag, 
      blog_category_id, 
      blog_status, 
      blog_feature_image, 
      blog_content, 
      blog_publisher_id, 
      blog_date_time, 
      blog_id
    ]);

    // Return success response
    if (result.affectedRows > 0) {
      return NextResponse.json({
        message: 'Blog updated successfully.',
        affectedRows: result.affectedRows,
      });
    } else {
      return NextResponse.json({
        message: 'Blog not found or already updated.',
      }, { status: 404 });
    }
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json(
      {
        message: 'Error updating blog.',
        error: error.message,
      },
      { status: 500 }
    );
  }
}
