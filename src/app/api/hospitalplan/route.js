import { verifyRecaptcha } from "@/lib/recaptcha";
import pool from "../../../../lib/mysql";
import { sendMail } from "../../../../lib/nodemailer";
import { generateEmailTemplate } from "../../../../lib/emailTemplate";

export async function POST(req) {
  try {
    const body = await req.json();
    
    const recaptchaToken = body.recaptchaToken;
    if (!recaptchaToken) {
      return Response.json({ error: 'reCAPTCHA token is missing' }, { status: 400 });
    }
    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
      return Response.json({ error: 'reCAPTCHA verification failed. Please try again.' }, { status: 400 });
    }
   // console.log("Received Data:", body); 

    const { name, email, message } = body;

    // Validation
    if (!name || !email || !message) {
     // console.error("Missing required fields:", { name, email, message }); 
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Insert into DB
    const [result] = await pool.execute(
      `INSERT INTO hospitalplan (name, email, message) 
       VALUES (?, ?, ?)`,
      [name, email, message]
    );

     // Create email content
    const emailContent = generateEmailTemplate({
      subject: "🏥 New Hospital Plan Request",
      body: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>Hospital Plan Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `,
      footer: "© 2025 YourCompany. All rights reserved.",
    });

    // Send notification email to admin
    await sendMail({
        to: "support@harborgroupusa.com",
      subject: "🏥 New Hospital Plan Submission",
      html: emailContent,
    });

    // Respond with success
    return new Response(
      JSON.stringify({
        message: "Form submitted and email sent!",
        id: result.insertId,
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
   // console.error("Error processing hospital plan form:", error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error", error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}