// app/api/auth/admin-login/route.js

import pool from "../../../../../lib/mysql";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export async function POST(request) {
  try {
    const { email, password, rememberMe } = await request.json();

    // 1. Find the user by email in the 'admin' table
    const [rows] = await pool.execute(
      "SELECT * FROM admin WHERE email = ?",
      [email]
    );

    // If no admin user is found with the provided email
    if (rows.length === 0) {
      return NextResponse.json(
        { error: "Invalid credentials or insufficient permissions" },
        { status: 401 }
      );
    }

    const adminUser = rows[0];

    // 2. Compare the provided password with the hashed password
    const passwordMatch = await bcrypt.compare(password, adminUser.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // 3. Create a JWT for the authenticated admin user
    // FIXED: Added role field to match middleware expectation
    const token = jwt.sign(
      { 
        id: adminUser.id, 
        email: adminUser.email,
        role: 'admin' // This matches what your middleware checks for
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: rememberMe ? "7d" : "1h" } 
    );

    // Prepare the user object for the response (without the password)
    const userWithoutPassword = {
      id: adminUser.id,
      email: adminUser.email,
      role: 'admin'
    };

    // 4. Create the JSON response
    const response = NextResponse.json(
      {
        message: "Admin login successful",
        user: userWithoutPassword,
      },
      { status: 200 }
    );

    // 5. Set the HttpOnly cookie for the admin session
    response.headers.set(
      'Set-Cookie',
      serialize('admin_auth_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Lax',
        maxAge: rememberMe ? 60 * 60 * 24 * 7 : 60 * 60,
        path: '/',
      })
    );

    return response;

  } catch (error) {
    console.error("Admin login error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred during login." },
      { status: 500 }
    );
  }
}