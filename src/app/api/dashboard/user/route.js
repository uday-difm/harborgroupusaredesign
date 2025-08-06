import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import pool from "../../../../../lib/mysql";

const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY);

export async function GET(request) {
  try {
    const token = request.cookies.get('admin_auth_token')?.value;
    if (!token) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    const { payload } = await jwtVerify(token, secret);
    const [rows] = await pool.execute(
      `SELECT id, email FROM admin WHERE id = ?`,
      [payload.id]
    );

    if (rows.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({
      user: {
        id: rows[0].id,
        email: rows[0].email,
        role: 'admin'
      }
    }, { status: 200 });

  } catch (error) {
    console.error("Get user error:", error);
    return NextResponse.json({ error: 'Authentication failed' }, { status: 401 });
  }
}
