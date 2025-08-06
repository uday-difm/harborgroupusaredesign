// app/api/dashboard/user/route.js

import { NextResponse } from "next/server";
import { jwtVerify } from 'jose';
import pool from "../../../../../lib/mysql";

const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY);

export async function GET(request) {
  try {
    // Get the token from cookies
    const token = request.cookies.get('admin_auth_token')?.value;

    if (!token) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    // Verify the JWT token
    const { payload } = await jwtVerify(token, secret);

    // Fetch fresh user data from database
    const [rows] = await pool.execute(
      "SELECT  `email` FROM `admin` WHERE `id` = ?",
      [payload.id]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const user = rows[0];

    return NextResponse.json(
      {
        user: {
          id: user.id,
          email: user.email,
          role: 'admin'
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Get user error:", error);
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 401 }
    );
  }
}