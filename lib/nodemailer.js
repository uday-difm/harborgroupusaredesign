// // lib/nodemailer.js
// import nodemailer from "nodemailer";

// const host = process.env.EMAIL_HOST || "smtp-relay.brevo.com";
// const port = Number(process.env.EMAIL_PORT || 587); // 587 (STARTTLS) or 465 (SSL)
// // secure should be true for 465 (implicit SSL), false for 587 (STARTTLS)
// const secure = port === 465;

// export const transporter = nodemailer.createTransport({
//   host,
//   port,
//   secure,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },


//   pool: false,

//   connectionTimeout: 30000,
//   greetingTimeout: 30000,   
//   socketTimeout: 30000,


//   logger: process.env.NODE_ENV !== "production",
//   debug: process.env.NODE_ENV !== "production",

//   tls: {
//     // Only set rejectUnauthorized = false for dev if you trust the network.
//     // For production, prefer true to validate certs.
//     rejectUnauthorized: process.env.NODE_ENV === "production" ? true : false,
//   },
// });

// // Optional: verify once (useful in development and in container startup logs)
// export async function verifyTransport() {
//   try {
//     await transporter.verify(); // will attempt to connect and greet
//    // console.log("SMTP transporter verified OK");
//     return true;
//   } catch (err) {
//     //console.error("SMTP transporter verification failed:", err);
//     throw err;
//   }
// }

// /**
//  * Send email using nodemailer.
//  * options: { to, subject, text, html, userEmail? (replyTo) }
//  */
// export async function sendMail(options = {}) {
//   if (!process.env.EMAIL_USER || !process.env.EMAIL_ADMIN) {
//     throw new Error("Missing EMAIL_USER or EMAIL_ADMIN env variables");
//   }

//   const mail = {
//     from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
//     to: process.env.EMAIL_ADMIN,
//     ...options,
//   };

//   if (options.userEmail) {
//     mail.replyTo = options.userEmail;
//     delete mail.userEmail;
//   }

//   // Optional envelope override (OK to keep)
//   mail.envelope = {
//     from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
//     to: mail.to,
//   };

//   return transporter.sendMail(mail);
// }


import nodemailer from "nodemailer";

const host = process.env.EMAIL_HOST || "smtp-relay.brevo.com";
const port = Number(process.env.EMAIL_PORT || 587);
const secure = port === 465;

export const transporter = nodemailer.createTransport({
  host,
  port,
  secure,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  pool: false,
  connectionTimeout: 30000,
  greetingTimeout: 30000,
  socketTimeout: 30000,
  logger: process.env.NODE_ENV !== "production",
  debug: process.env.NODE_ENV !== "production",
  tls: {
    rejectUnauthorized: true,
  },
});

export async function verifyTransport() {
  await transporter.verify();
  return true;
}

export async function sendMail(options = {}) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_ADMIN || !process.env.EMAIL_FROM) {
    throw new Error("Missing EMAIL_USER, EMAIL_ADMIN or EMAIL_FROM env variables");
  }

  const mail = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_ADMIN,
    ...options,
  };

  if (options.userEmail) {
    mail.replyTo = options.userEmail;
    delete mail.userEmail;
  }

  mail.envelope = {
    from: process.env.EMAIL_FROM,
    to: mail.to,
  };

  return transporter.sendMail(mail);
}
