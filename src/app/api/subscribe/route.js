// app/api/subscribers/route.js

"use server";
// import db from "../../../../lib/mysql";
import pool from "../../../../lib/mysql";
import { sendMail } from "../../../../lib/nodemailer";
import { generateEmailTemplate } from "../../../../lib/emailTemplate";

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return new Response(
        JSON.stringify({ message: "Email is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Check if the email is already subscribed
    const [existingEmail] = await pool.query(
      "SELECT id FROM `subscribers` WHERE `email` = ?",
      [email.trim()]
    );

    if (existingEmail.length > 0) {
      return new Response(
        JSON.stringify({ message: "Email is already subscribed" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Insert the email into the subscribers table
    const query = "INSERT INTO `subscribers` (`email`) VALUES (?)";
    const values = [email.trim()];
    const [result] = await pool.query(query, values);

    // Generate email content using the common template
    const emailContent = generateEmailTemplate({
     subject: "🎉 Welcome to HarborGroupUSA – You're Subscribed!",
  body: `
  <div style="font-family: 'Helvetica Neue', sans-serif; max-width: 600px; margin: auto; color: #2c3e50;">
    <h2 style="color: #008fa3;">Welcome to HarborGroupUSA!</h2>

    <p style="font-size: 16px;">
      Thank you for subscribing. You're now part of a community that values innovation, trust, and professional growth in the financial and business landscape.
    </p>

    <h3 style="color: #1eaae2;">Here’s what you can expect:</h3>
    <ul style="font-size: 14px; line-height: 1.6;">
      <li>💼 Exclusive insights into business strategy and finance</li>
      <li>📢 Announcements on services and offers</li>
      <li>📘 Resources and tools to grow your impact</li>
    </ul>

    <p style="font-size: 16px;">
      We’re excited to have you on board. Expect your first newsletter soon!
    </p>

    <div style="margin-top: 30px; font-size: 14px; color: #7f8c8d;">
      <hr style="border: 1px solid #ecf0f1;" />
      <p>
        If you have any questions or would like to reach out, visit our 
        <a href="https://1stalliancegrp.com/contact-us" style="color: #1eaae2; text-decoration: none;">contact page</a>.
      </p>
      <p>
        Best regards,<br />
        <strong>The HarborGroupUSA Team</strong><br />
        <i>Empowering financial excellence</i>
      </p>
    </div>
  </div>
  `,
  footer: "© 2025 HarborGroupUSA. All rights reserved.",
    });


    //Send the email to the user
    await sendMail({
      to: email,
      subject: "🎉 You're subscribed to HarborGroupUSA",
      html: emailContent,
    });

    return new Response(
      JSON.stringify({
        message: "Subscription successful, confirmation email sent!",
        id: result.insertId,
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error during subscription:", error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error", error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}