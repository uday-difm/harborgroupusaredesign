import pool from '../../../../../../lib/mysql';
import { NextResponse } from 'next/server';

export async function PUT(req, context) {
  try {
    // Await params
    const { params } = await context;
    const id = params?.id;

    if (!id) {
      return NextResponse.json({ message: 'User ID is required' }, { status: 400 });
    }

    const body = await req.json();
    const {
      name,
      email,
      role,
      bio,
      facebook,
      twitter,
      instagram,
      linkedin,
      status,
      image
    } = body;

    // Validate required fields
    if (!name || !email || !role) {
      return NextResponse.json({ message: 'Name, email, and role are required' }, { status: 400 });
    }

    // Check if user exists
    const [existing] = await pool.execute('SELECT id FROM admin WHERE id = ? LIMIT 1', [id]);
    if (!existing.length) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Convert undefined to null
    const safeBio = bio ?? null;
    const safeFacebook = facebook ?? null;
    const safeTwitter = twitter ?? null;
    const safeInstagram = instagram ?? null;
    const safeLinkedin = linkedin ?? null;
    const safeStatus = status ?? '1';
    const safeImage = image ?? null;

    // Update query
    const query = `
      UPDATE admin
      SET name = ?, email = ?, role = ?, bio = ?, facebook = ?, twitter = ?, instagram = ?, linkedin = ?, status = ?, image = ?
      WHERE id = ?
    `;
    const values = [name, email, role, safeBio, safeFacebook, safeTwitter, safeInstagram, safeLinkedin, safeStatus, safeImage, id];

    await pool.execute(query, values);

    return NextResponse.json({ message: 'User updated successfully.' }, { status: 200 });

  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json({ message: 'Error updating user.', error: error.message }, { status: 500 });
  }
}
