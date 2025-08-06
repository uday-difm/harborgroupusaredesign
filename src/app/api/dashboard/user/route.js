// /app/api/dashboard/user/route.js
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import pool from "@/lib/mysql"; // <-- Adjust this if path is different

const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY);

export async function GET(request) {
  try {
    // Get token from cookies
    const token = request.cookies.get("admin_auth_token")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    // Verify JWT token
    const { payload } = await jwtVerify(token, secret);

    // Fetch user from DB
    const [rows] = await pool.execute(
      "SELECT `id`, `email` FROM `admin` WHERE `id` = ?",
      [payload.id]
    );

    if (rows.length === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const user = rows[0];

    return NextResponse.json(
      {
        user: {
          id: user.id,
          email: user.email,
          role: "admin",
        },
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Auth failed:", err);
    return NextResponse.json({ error: "Authentication failed" }, { status: 401 });
  }
}
