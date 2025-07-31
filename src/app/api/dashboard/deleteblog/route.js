import pool from "../../../../../lib/mysql";
import { NextResponse } from 'next/server';

export async function PUT(req) {
  try {
    // Get the blog_id from the request body
    const { blog_id } = await req.json(); // Make sure to properly parse the request body

    if (!blog_id) {
      throw new Error("Blog ID is required");
    }

    // SQL query to update the blog_status from 0 to 1 for the specified blog_id
    const query = `
      UPDATE blogs
      SET blog_status = "1"
      WHERE blog_status = "0" AND blog_id = ?
    `;

    // Execute the query using the pool connection
    const [result] = await pool.execute(query, [blog_id]);

    // Return success response
    if (result.affectedRows > 0) {
      return NextResponse.json({
        message: 'Blog status updated successfully.',
        affectedRows: result.affectedRows,
      });
    } else {
      return NextResponse.json({
        message: 'No blog found with the provided ID or blog status is not 0.',
      }, { status: 404 });
    }
  } catch (error) {
    console.error('Error updating blog status:', error);
    return NextResponse.json(
      {
        message: 'Error updating blog status.',
        error: error.message,
      },
      { status: 500 }
    );
  }
}
