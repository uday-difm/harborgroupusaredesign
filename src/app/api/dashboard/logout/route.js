import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST(request) {
  try {

    const response = NextResponse.json(
      { message: 'Logout successful' },
      { status: 200 }
    );

    response.headers.set(
      'Set-Cookie',
      serialize('admin_auth_token', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Lax',
        path: '/',
        maxAge: -1, 
      })
    );

    return response;

  } catch (error) {

    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred during logout.' },
      { status: 500 } 
    );
  }
}