
import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY);

export async function middleware(request) {
  const token = request.cookies.get('admin_auth_token')?.value;
  const { pathname } = request.nextUrl;
  if (pathname.startsWith('/dashboard')) {
    if (!token) {
      console.log(`Middleware: No token found. Redirecting unauthenticated access from ${pathname} to /dashboard/login`);
      return NextResponse.redirect(new URL('/dashboard/login', request.url));
    }
    try {
      const { payload } = await jwtVerify(token, secret);
      if (payload.role !== 'dashboard') {
        console.warn(`Middleware: User ${payload.email} (role: ${payload.name}) tried to access protected dashboard. Redirecting.`);
        return NextResponse.redirect(new URL('/dashboard/login', request.url));
      }
      return NextResponse.next();

    } catch (error) {
      console.error("Middleware: JWT verification failed for protected path:", error.message);
      const response = NextResponse.redirect(new URL('/dashboard/login', request.url));
      response.cookies.delete('admin_auth_token'); 
      return response;
    }
  }

  if (pathname === '/dashboard/login') {
    if (token) {
      try {
        await jwtVerify(token, secret);
        return NextResponse.redirect(new URL('/dashboard', request.url));
      } catch (error) {
        const response = NextResponse.next();
        response.cookies.delete('admin_auth_token');
        return response;
      }
    }
  }
  return NextResponse.next();
}
export const config = {
  matcher: ['/dashboard/:path*', '/dashboard', '/dashboard/login'],
};