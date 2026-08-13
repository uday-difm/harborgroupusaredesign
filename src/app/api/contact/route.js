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

    // Email content for the internal support team
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
      footer: "© 2026 Harbor Group USA. All rights reserved.",
    });

    // replyTo allows support to reply directly to the person who submitted it.
    await sendMail({
      to: "support@harborgroupusa.com",
      subject: "📬 New Contact Us Form Submission",
      html: emailContent,
      replyTo: emailaddress,
    });

    // Send a confirmation to the email address entered in the form.
    const confirmationContent = generateEmailTemplate({
      subject: "We received your message",
      body: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>Thank you for contacting Harbor Group USA</h2>
          <p>Hello ${fullname},</p>
          <p>We received your contact request. Our team will contact you shortly.</p>
        </div>
      `,
      footer: "© 2026 Harbor Group USA. All rights reserved.",
    });

    await sendMail({
      to: emailaddress,
      subject: "We received your Harbor Group USA contact request",
      html: confirmationContent,
    });

    return new Response(
      JSON.stringify({
        message: "Form submitted and confirmation email sent!",
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
