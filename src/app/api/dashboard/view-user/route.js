import pool from '../../../../../lib/mysql';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const [rows] = await pool.execute(
      'SELECT `id`, `name`, `email`, `role`, `image`, `created_at` FROM `admin` WHERE `status` = ? ORDER BY `created_at` DESC',
      ['0'] 
    );
    const formattedData = rows.map((user) => ({
      ...user,
      formatted_created_date: new Date(user.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
    }));

    return NextResponse.json({ success: true, data: formattedData }, { status: 200 });
  } catch (error) {
    console.error('Error fetching admins:', error);
    return NextResponse.json(
      { success: false, message: 'Server error. Please try again later.' },
      { status: 500 }
    );
  }
}
