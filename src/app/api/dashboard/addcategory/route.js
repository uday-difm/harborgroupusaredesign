import pool from "../../../../../lib/mysql";

export async function POST(req) {
  try {
    // Parse the incoming JSON data
    const body = await req.json();  // This is how Next.js reads JSON body from requests.
    const { category } = body;

    // Validation: Ensure category is provided
    if (!category) {
      return new Response(
        JSON.stringify({ message: 'Category is required' }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    try {
      // Insert the category into the database
      const [result] = await pool.execute(
        'INSERT INTO categories (category) VALUES (?)', 
        [category] // Using `category` in the query
      );

      // Send a success response
      return new Response(
        JSON.stringify({
          message: 'Category added successfully',
          id: result.insertId, // The ID of the newly inserted category
        }),
        { status: 201, headers: { "Content-Type": "application/json" } }
      );
    } catch (error) {
     // console.error('Database error:', error); // Log the database error
      return new Response(
        JSON.stringify({ message: 'Database error occurred', error: error.message }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  } catch (error) {
   // console.error('Error parsing request body:', error); // Handle parsing error
    return new Response(
      JSON.stringify({ message: 'Invalid request body' }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
}