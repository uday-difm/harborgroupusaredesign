import pool from "../../../../lib/mysql";
import { sendMail } from "../../../../lib/nodemailer";
import { generateEmailTemplate } from "../../../../lib/emailTemplate";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, subject, message, terms } = body;


    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // 🗄️ Insert into MySQL
    const [result] = await pool.execute(
      `INSERT INTO career (name, email, subject, message, terms)
       VALUES (?, ?, ?, ?, ?)`,
      [name, email, subject, message, terms ? 1 : 0]
    );

    // ✉️ Generate email content
    const html = generateEmailTemplate({
      subject: "💼 New Career Form Submission",
      body: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br>${message}</p>
        <p><strong>Terms Accepted:</strong> ${terms ? "Yes" : "No"}</p>
      `,
      footer: "This message was sent from the Careers page form.",
    });

    try {
      await sendMail({
        to: "support@harborgroupusa.com",
        subject: "💼 New Career Form Submission",
        html,
        //replyTo: email,
      });
    } catch (mailErr) {
      console.error("Email send failed:", mailErr);
      // still respond success since DB insert succeeded
    }

    return new Response(
      JSON.stringify({
        message: "Career form submitted successfully!",
        id: result.insertId,
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error processing career form:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error", details: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
