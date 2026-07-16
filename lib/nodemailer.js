import { Resend } from "resend";

let resend;

function getResendClient() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("Missing RESEND_API_KEY env variable");
  }

  if (!resend) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }

  return resend;
}

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
  const resendClient = getResendClient();

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

  const { data, error } = await resendClient.emails.send(mailPayload);

  if (error) {
    throw new Error(error.message || JSON.stringify(error));
  }

  return data;
}

