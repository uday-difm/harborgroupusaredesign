import pool from "../../../../lib/mysql";
import { sendMail } from "../../../../lib/nodemailer";
import { generateEmailTemplate } from "../../../../lib/emailTemplate";

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

   // Generate email content
    const emailContent = generateEmailTemplate({
      subject: "📋 New Broker Form Submission",
      body: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>New Broker Form Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>State:</strong> ${state}</p>
          <p><strong>Date of Birth:</strong> ${dob}</p>
          <p><strong>Selected Plans:</strong> ${plans}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
        </div>
      `,
      footer: "© 2025 YourCompany. All rights reserved.",
    });

    // Send email notification
    await sendMail({
        to: "support@harborgroupusa.com",
      subject: "📨 New Broker Submission Received",
      html: emailContent,
    });

    return new Response(
      JSON.stringify({
        message: "Form submitted and email sent!",
        id: result.insertId,
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error processing broker form:", error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error", error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
