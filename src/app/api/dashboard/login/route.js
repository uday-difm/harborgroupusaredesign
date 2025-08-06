import pool from "../../../../../lib/mysql";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export async function POST(request) {
  try {
    const { email, password, rememberMe } = await request.json();

   const [rows] = await pool.execute(
      "SELECT * FROM `admin` WHERE `email` = ?",
      [email]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { error: "Invalid credentials or insufficient permissions" },
        { status: 401 }
      );
    }

    const adminUser = rows[0];
    const passwordMatch = await bcrypt.compare(password, adminUser.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }
    const token = jwt.sign(
      { 
        id: adminUser.id, 
        email: adminUser.email,
        role: 'dashboard'
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: rememberMe ? "7d" : "1h" } 
    );
    const userWithoutPassword = {
      id: adminUser.id,
      email: adminUser.email,
      role: 'dashboard'
    };

    const response = NextResponse.json(
      {
        message: "Admin login successful",
        user: userWithoutPassword,
      },
      { status: 200 }
    );
    response.headers.set(
      'Set-Cookie',
      serialize('admin_auth_token', token, {
        httpOnly: true,
        secure: false,
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