import pool from "../../../../lib/mysql";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Received Data:", body);  // Log the incoming data to inspect

    const { name, email, message } = body;

    // Validation
    if (!name || !email || !message) {
      console.error("Missing required fields:", { name, email, message }); // Log if fields are missing
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Insert into DB
    const [result] = await pool.execute(
      `INSERT INTO forindividuals (name, email, message) 
       VALUES (?, ?, ?)`,
      [name, email, message]
    );

    return new Response(
      JSON.stringify({
        message: "Form submitted and email sent!",
        id: result.insertId,
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error processing contact form:", error); // Log the error for debugging
    return new Response(
      JSON.stringify({ message: "Internal Server Error", error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
