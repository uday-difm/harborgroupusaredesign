// mailer.js
import nodemailer from "nodemailer";

const host = process.env.EMAIL_HOST || "smtp.ionos.com";
const port = Number(process.env.EMAIL_PORT || 587); // prefer 587 (STARTTLS) or 465 (SSL)
const secure = port === 465; // true for 465, false for 587 (STARTTLS)

export const transporter = nodemailer.createTransport({
<<<<<<< HEAD
  host,
  port,
  secure,
  auth: {
    user: process.env.EMAIL_USER,   // e.g. info@itservcs.com
    pass: process.env.EMAIL_PASS,
  },
  // Optional: enforce TLS for STARTTLS (recommended)
  tls: {
    rejectUnauthorized: false,
=======
      service: "ionos", 
      host: "smtp.ionos.com",
      port: 587,
      secure: false,            
      auth: {
    user: "info@itservcs.com",      
    pass: "Money@36#087difm!078",     
>>>>>>> dc1dfaedfd9a87f7825912239eaeb13288d1655e
  },
});

/**
 * Send email using nodemailer
 * options should include: to, subject, text and/or html
 * If sending contact form: use replyTo for user address; to => EMAIL_ADMIN
 */
export async function sendMail(options = {}) {
  // Validate important envs
  if (!process.env.EMAIL_USER || !process.env.EMAIL_ADMIN) {
    throw new Error("Missing EMAIL_USER or EMAIL_ADMIN env variables");
  }

  // Build mail object with proper From / Reply-To alignment
  const mail = {
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER, // must be the verified mailbox
    to: process.env.EMAIL_ADMIN,                             // admin inbox
    ...options,
  };

  // If caller provided userEmail, set replyTo
  if (options.userEmail) {
    mail.replyTo = options.userEmail;
    // remove the helper field so it doesn't go into headers
    delete mail.userEmail;
  }

  // Optional envelope to control Return-Path (helps DMARC alignment)
  mail.envelope = {
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
    to: mail.to,
  };

  // Try verify connection first (fast fail early)
  await transporter.verify();

  return transporter.sendMail(mail);
}
