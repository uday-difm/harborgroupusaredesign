// /pages/api/dashboard/getcategories.js (or /fetchcategory.js)
import pool from "../../../../../lib/mysql"; // Ensure the import path is correct

export async function GET(req) {
  try {
    // Fetch categories from the database
    const [rows] = await pool.execute('SELECT * FROM categories WHERE status = "0"'); // This fetches all categories from the database

    // Log the categories to the console for debugging
    console.log("Categories from the database:", rows);

    // Check if any categories were found
    if (rows.length === 0) {
      return new Response(
        JSON.stringify({ message: 'No categories found' }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    // Return the categories as a JSON response
    return new Response(
      JSON.stringify({ categories: rows }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error('Database error:', error); // Log the database error
    return new Response(
      JSON.stringify({ message: 'Database error occurred', error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
