import pool from '../../../../../../lib/mysql';
import { NextResponse } from 'next/server';

export async function PUT(req, context) {
  try {
    const params = await context.params;
    const id = params?.id;
    if (!id) {
      return NextResponse.json({ message: 'User ID is required' }, { status: 400 });
    }

    const [existing] = await pool.execute('SELECT status FROM admin WHERE id = ? LIMIT 1', [id]);
    if (!existing.length) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const currentStatus = existing[0].status?.toString(); // convert to string
    const newStatus = currentStatus === '0' ? '1' : '0';

    await pool.execute('UPDATE admin SET status = ? WHERE id = ?', [newStatus, id]);

    return NextResponse.json({
      message: `User status updated successfully to ${newStatus}.`,
      status: newStatus
    }, { status: 200 });

  } catch (error) {
    console.error('Error updating status:', error);
    return NextResponse.json({ message: 'Error updating status.', error: error.message }, { status: 500 });
  }
}
