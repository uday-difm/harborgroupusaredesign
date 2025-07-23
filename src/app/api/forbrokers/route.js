import pool from "../../../../lib/mysql";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Received Data:", body);  // Log the incoming data to inspect

    const { name, state, dob, plans, email, phone } = body;

    // Validation
    if (!name || !email || !state || !dob || !plans || !phone) {
      console.error("Missing required fields:", { name, state, dob, plans, email, phone }); // Log if fields are missing
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Insert into DB
    const [result] = await pool.execute(
      `INSERT INTO forbrokers (name, state, timedate, plans, email, phone) 
       VALUES (?, ?, ?, ?, ?, ? )`,
      [name, state, dob, plans, email, phone]
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
