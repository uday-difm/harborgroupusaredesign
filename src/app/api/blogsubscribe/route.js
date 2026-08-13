import { verifyRecaptcha } from '@/lib/recaptcha';
import { NextResponse } from 'next/server';
import pool from '../../../../lib/mysql';
import { sendMail } from '../../../../lib/nodemailer';
import { generateEmailTemplate } from '../../../../lib/emailTemplate';

export async function POST(req) {
  try {
    const { email, recaptchaToken } = await req.json();

    if (!recaptchaToken) {
      return NextResponse.json({ message: 'reCAPTCHA token is missing' }, { status: 400 });
    }
    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
      return NextResponse.json({ message: 'reCAPTCHA verification failed. Please try again.' }, { status: 400 });
    }

    // Simple email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ message: 'Invalid email address.' }, { status: 400 });
    }

    // Check if email already subscribed
    const [existing] = await pool.execute('SELECT id FROM blogsubscribers WHERE email = ?', [email]);

    if (existing.length > 0) {
      return NextResponse.json(
        { message: 'This email is already subscribed.' },
        { status: 409 }  // Conflict
      );
    }

    // Insert into blogsubscribers
    const query = `INSERT INTO blogsubscribers (email) VALUES (?)`;
    const [result] = await pool.execute(query, [email]);

    const emailContent = generateEmailTemplate({
      subject: '🎉 You’re subscribed to our blog!',
      body: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>Thank you for subscribing!</h2>
          <p>You’ll now receive updates on our latest blog posts, tips, and insights.</p>
          <p>We appreciate you joining us on this journey.</p>
          <br />
          <p>— The Blog Team</p>
        </div>
      `,
      footer: '© 2025 YourBlogSite. All rights reserved.',
    });

    // Send confirmation email
    await sendMail({
      to: email,
      subject: '🎉 Subscription Confirmed – Welcome to Our Blog!',
      html: emailContent,
    });

    return NextResponse.json({
      message: 'Subscription successful and email sent.',
      id: result.insertId,
    });
  } catch (error) {
   // console.error('Error subscribing:', error);
    return NextResponse.json({ message: 'Server error.', error: error.message }, { status: 500 });
  }
}
