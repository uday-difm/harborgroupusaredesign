import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
      service: "ionos", 
      host: "smtp.ionos.com",
      port: 587,
      secure: false,            
      auth: {
    user: "info@itservcs.com",      
    pass: "Money@36#087difm!078",     
  },
});

/**
 * Send email using nodemailer
 * @param {Object} options - email options (to, subject, html, etc.)
 * @returns {Promise<void>}
 */
export async function sendMail(options) {
  const mail = {
    from: `"Harbor Group USA" <info@itservcs.com>`, 
    ...options,
  };

  return transporter.sendMail(mail);
}