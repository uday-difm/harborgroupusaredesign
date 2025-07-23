
import pool from "../../../../lib/mysql";

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullname, phonenumber, emailaddress } = body;

    // Validation
    if (!fullname || !phonenumber || !emailaddress) {
      return Response.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Insert into DB
    const [result] = await pool.execute(
      `INSERT INTO contact (fullname, phonenumber, emailaddress) 
       VALUES (?, ?, ?)`,
      [fullname, phonenumber, emailaddress]
    );

    return new Response(
      JSON.stringify({
        message: "Form submitted and email sent!",
        id: result.insertId,
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error", error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}