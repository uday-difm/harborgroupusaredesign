// src/app/api/cookie-consent/route.js

import { NextResponse } from 'next/server';
import { query } from '../../../../lib/mysql';

export async function POST(req) {
  try {
    // Expect userAgent and referrer from the request body
    const { consent, userAgent, referrer } = await req.json();
    const userIP = req.headers.get('x-forwarded-for') || req.ip;

    const result = await query(
      // Insert values into the new columns
      `INSERT INTO cookie_consents (user_ip, consent_status, user_agent, referrer) VALUES (?, ?, ?, ?)`,
      // Pass the new variables to the query
      [userIP, consent, userAgent, referrer]
    );

    return NextResponse.json({ success: true, message: "Consent recorded" }, { status: 200 });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ success: false, error: "Failed to record consent" }, { status: 500 });
  }
}