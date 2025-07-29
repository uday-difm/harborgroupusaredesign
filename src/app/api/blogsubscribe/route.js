import { NextResponse } from 'next/server';
import pool from '../../../../lib/mysql';

export async function POST(req) {
  try {
    const { email } = await req.json();

    // Simple email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ message: 'Invalid email address.' }, { status: 400 });
    }

    // Insert into blogsubscribers
    const query = `INSERT INTO blogsubscribers (email) VALUES (?)`;
    const [result] = await pool.execute(query, [email]);

    return NextResponse.json({
      message: 'Subscription successful.',
      id: result.insertId,
    });
  } catch (error) {
    console.error('Error subscribing:', error);
    return NextResponse.json({ message: 'Server error.', error: error.message }, { status: 500 });
  }
}
