import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const transporter = {
  sendMail: async (mailOptions) => {
    return sendMail(mailOptions);
  },
  verify: async () => {
    return verifyTransport();
  }
};

export async function verifyTransport() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("Missing RESEND_API_KEY env variable");
  }
  return true;
}

/**
 * Send email using Resend.
 * options: { to, subject, text, html, userEmail? (replyTo), replyTo? }
 */
export async function sendMail(options = {}) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("Missing RESEND_API_KEY env variable");
  }

  const from = options.from || process.env.EMAIL_FROM || "onboarding@resend.dev";
  const to = options.to || process.env.EMAIL_ADMIN || "support@harborgroupusa.com";

  const mailPayload = {
    from,
    to,
    subject: options.subject || "",
    html: options.html || "",
  };

  if (options.text) {
    mailPayload.text = options.text;
  }

  const replyTo = options.replyTo || options.userEmail;
  if (replyTo) {
    mailPayload.replyTo = replyTo;
  }

  const { data, error } = await resend.emails.send(mailPayload);

  if (error) {
    throw new Error(error.message || JSON.stringify(error));
  }

  return data;
}

