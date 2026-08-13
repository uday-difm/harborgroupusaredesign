import { verifyRecaptcha } from "@/lib/recaptcha";
import { NextResponse } from 'next/server';
import pool from '../../../../lib/mysql';
import { sendMail } from '../../../../lib/nodemailer';
import { generateEmailTemplate } from '../../../../lib/emailTemplate';

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
    const { name, email } = body;

    if (!name || !email) {
      return NextResponse.json(
        { message: 'Name and email are required.' },
        { status: 400 }
      );
    }

    const query = `INSERT INTO freequote (name, email) VALUES (?, ?)`;
    const [result] = await pool.execute(query, [name, email]);

    // Email content
    const emailContent = generateEmailTemplate({
      subject: '📝 New Free Quote Request',
      body: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>Free Quote Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
        </div>
      `,
      footer: '© 2025 YourCompany. All rights reserved.',
    });

    // Send notification email
    await sendMail({
        to: "support@harborgroupusa.com",
      subject: '📝 New Free Quote Submission',
      html: emailContent,
    });

    return NextResponse.json({
      message: 'Free quote submitted successfully.',
      data: { id: result.insertId, name, email },
    });
  } catch (error) {
    //console.error('Insert error:', error);
    return NextResponse.json(
      { message: 'Error inserting free quote.', error: error.message },
      { status: 500 }
    );
  }
}

