import pool from "../../../../lib/mysql";
import { sendMail } from "../../../../lib/nodemailer";
import { generateEmailTemplate } from "../../../../lib/emailTemplate";

export async function POST(req) {
  try {
    const body = await req.json();
   // console.log("Received Data:", body); 

    const { name, email, message } = body;

    // Validation
    if (!name || !email || !message) {
    //  console.error("Missing required fields:", { name, email, message }); 
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Insert into DB
    const [result] = await pool.execute(
      `INSERT INTO termlife (name, email, message) 
       VALUES (?, ?, ?)`,
      [name, email, message]
    );

       // Create email content using your custom template
    const emailHtml = generateEmailTemplate({
      subject: "📝 New Term Life Submission",
      body: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
      footer: "© 2025 YourCompany. All rights reserved.",
    });

    // Send email notification to admin or desired recipient
    await sendMail({
        to: "support@harborgroupusa.com",
      subject: "📝 New Term Life Form Submission",
      html: emailHtml,
    });

    return new Response(
      JSON.stringify({
        message: "Form submitted and email sent!",
        id: result.insertId,
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
   // console.error("Error processing term life form:", error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error", error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}