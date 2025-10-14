// lib/nodemailer.js
import nodemailer from "nodemailer";

const host = process.env.EMAIL_HOST || "smtp.ionos.com";
const port = Number(process.env.EMAIL_PORT || 587); // 587 (STARTTLS) or 465 (SSL)
const secure = port === 587; // true for 465, false for 587 (STARTTLS)

export const transporter = nodemailer.createTransport({
  host,
  port,
  secure,
  auth: {
    user: process.env.EMAIL_USER,   // e.g. info@itservcs.com
    pass: process.env.EMAIL_PASS,   // SMTP password from env
  },
  pool: false,                       // reuse connection
  maxConnections: 5,
  maxMessages: 100,
  connectionTimeout: 10000,
  greetingTimeout: 5000,
  socketTimeout: 30000,
  tls: {
    rejectUnauthorized: process.env.NODE_ENV !== "production" ? false : true,
  },
});

/**
 * Send email using nodemailer.
 * options: { to, subject, text, html, userEmail? (replyTo) }
 */
export async function sendMail(options = {}) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_ADMIN) {
    throw new Error("Missing EMAIL_USER or EMAIL_ADMIN env variables");
  }

  const mail = {
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
    to: process.env.EMAIL_ADMIN,
    ...options,
  };

  if (options.userEmail) {
    mail.replyTo = options.userEmail;
    delete mail.userEmail;
  }

  mail.envelope = {
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
    to: mail.to,
  };

  return transporter.sendMail(mail);
}
