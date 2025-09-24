import pool from "../../../../../lib/mysql"; // Ensure the import path is correct
import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    // Fetch categories from the database
    const [rows] = await pool.execute('SELECT * FROM categories WHERE status = "0"');

    // Check if any categories were found
    if (rows.length === 0) {
      return NextResponse.json(
        { message: 'No categories found' },
        { status: 404 }
      );
    }

    // Return the categories as a JSON response
    return NextResponse.json(
      { categories: rows },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Database error occurred', error: error.message },
      { status: 500 }
    );
  }
}