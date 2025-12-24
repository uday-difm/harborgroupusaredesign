import pool from "../../../../lib/mysql";
import { sendMail } from "../../../../lib/nodemailer";
import { generateEmailTemplate } from "../../../../lib/emailTemplate";

export async function POST(request) {
  try {
    const { email } = await request.json();

    // 1️⃣ Validate email
    if (!email) {
      return new Response(
        JSON.stringify({ message: "Email is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const cleanEmail = email.trim().toLowerCase();

    // 2️⃣ Check if already subscribed
    const [existingEmail] = await pool.query(
      "SELECT id FROM subscribers WHERE email = ?",
      [cleanEmail]
    );

    if (existingEmail.length > 0) {
      return new Response(
        JSON.stringify({ message: "Email is already subscribed" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // 3️⃣ Insert into DB
    const [result] = await pool.query(
      "INSERT INTO subscribers (email) VALUES (?)",
      [cleanEmail]
    );

    // 4️⃣ Generate email template (SAFE)
    let emailContent = "";
    try {
      emailContent = generateEmailTemplate({
        subject: "🎉 Welcome to HarborGroupUSA – You're Subscribed!",
        body: `
          <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto;">
            <h2 style="color:#008fa3;">Welcome to HarborGroupUSA!</h2>
            <p>Thank you for subscribing. We’re excited to have you on board.</p>
            <ul>
              <li>💼 Business & finance insights</li>
              <li>📢 Exclusive updates</li>
              <li>📘 Professional resources</li>
            </ul>
            <p>Expect your first newsletter soon.</p>
          </div>
        `,
        footer: "© 2025 HarborGroupUSA. All rights reserved.",
      });
    } catch (templateError) {
      console.error("⚠️ EMAIL TEMPLATE ERROR:", templateError);
      emailContent = "<p>Thank you for subscribing!</p>";
    }

    // 5️⃣ Send email (DO NOT BREAK API)
    let mailSent = true;

    try {
      await sendMail({
        to: cleanEmail,
        subject: "🎉 You're subscribed to HarborGroupUSA",
        html: emailContent,
      });
    } catch (mailError) {
      mailSent = false;
      console.error("⚠️ EMAIL SEND FAILED:", mailError.message);
    }

    // 6️⃣ Always return success if DB insert worked
    return new Response(
      JSON.stringify({
        message: mailSent
          ? "Subscription successful, confirmation email sent!"
          : "Subscription successful, but email could not be sent.",
        id: result.insertId,
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("❌ SUBSCRIBE API ERROR:", error);

    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
