
import pool from "../../../../lib/mysql";
import { sendMail } from "../../../../lib/nodemailer";
import { generateEmailTemplate } from "../../../../lib/emailTemplate";

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

   // Email content
    const emailContent = generateEmailTemplate({
      subject: "📩 New Contact Us Submission",
      body: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>New Contact Us Request</h2>
          <p><strong>Name:</strong> ${fullname}</p>
          <p><strong>Phone Number:</strong> ${phonenumber}</p>
          <p><strong>Email Address:</strong> ${emailaddress}</p>
        </div>
      `,
      footer: "© 2025 YourCompany. All rights reserved.",
    });

    // Send email to admin (or whoever handles inquiries)
    await sendMail({
      to: "support@harborgroupusa.com",
      subject: "📬 New Contact Us Form Submission",
      html: emailContent,
    });

    return new Response(
      JSON.stringify({
        message: "Form submitted and email sent!",
        id: result.insertId,
        setTimeout: 3000,
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