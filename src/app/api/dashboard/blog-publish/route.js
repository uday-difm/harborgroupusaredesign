
import pool from "../../../../../lib/mysql";
import { NextResponse } from "next/server";

export async function PUT(req) {
  try {
    const body = await req.json().catch(() => null);
    console.log("update-status: received body:", body);

    if (!body) {
      return NextResponse.json({ success: false, message: "Invalid or empty JSON body" }, { status: 400 });
    }

    const { blog_id, status } = body;
    console.log("update-status: blog_id:", blog_id, "status:", status);

    if (!blog_id || typeof status === "undefined" || status === null) {
      return NextResponse.json({ success: false, message: "blog_id and status required" }, { status: 400 });
    }
    const statusValue = String(status) === "1" ? "1" : "0";
    const bid = blog_id;

    const query = "UPDATE `blogs` SET `status` = ? WHERE `blog_id` = ?";
    const values = [statusValue, bid];

    console.log("update-status: running query", query, values);

    const [result] = await pool.execute(query, values);
    console.log("update-status: db result:", result);
    const affectedRows = result?.affectedRows ?? 0;
    const changedRows = result?.changedRows ?? null;

    if (affectedRows === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "No row updated. Either blog_id not found or value identical.",
          affectedRows,
          changedRows,
          debug: { blog_id: bid, statusValue },
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Status updated", affectedRows, changedRows, status: statusValue },
      { status: 200 }
    );
  } catch (err) {
    console.error("update-status error:", err);
    return NextResponse.json({ success: false, message: err.message || "Server error" }, { status: 500 });
  }
}