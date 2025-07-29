import { NextResponse } from 'next/server';
import pool from '../../../../lib/mysql';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email } = body;

    if (!name || !email) {
      return NextResponse.json(
        { message: 'Name and email are required.' },
        { status: 400 }
      );
    }

    const query = `INSERT INTO freequote (name, email) VALUES (?, ?)`;
    const [result] = await pool.execute(query, [name, email]);

    return NextResponse.json({
      message: 'Free quote submitted successfully.',
      data: { id: result.insertId, name, email },
    });
  } catch (error) {
    console.error('Insert error:', error);
    return NextResponse.json(
      { message: 'Error inserting free quote.', error: error.message },
      { status: 500 }
    );
  }
}
