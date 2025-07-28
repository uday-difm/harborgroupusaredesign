
import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY);

export async function middleware(request) {
  // Get the token from cookies
  const token = request.cookies.get('admin_auth_token')?.value;
  const { pathname } = request.nextUrl;

  // --- Handling Protected Dashboard Routes ---
  // Check if the current path is a protected dashboard route
  if (pathname.startsWith('/dashboard')) {
    
    // If accessing a protected path and there is NO token
    if (!token) {
      console.log(`Middleware: No token found. Redirecting unauthenticated access from ${pathname} to /dashboard/login`);
      return NextResponse.redirect(new URL('/dashboard/login', request.url));
    }

    // If a token exists, verify it
    try {
      // The 'jose' library is used here because 'jsonwebtoken' is not compatible with Edge Runtime.
      const { payload } = await jwtVerify(token, secret);

      // IMPORTANT: Check if the user has the 'admin' role from the token payload
      if (payload.role !== 'dashboard') {
        console.warn(`Middleware: User ${payload.email} (role: ${payload.name}) tried to access protected dashboard. Redirecting.`);
        // Redirect non-admins to a safe page, like the login page or an unauthorized page
        return NextResponse.redirect(new URL('/dashboard/login', request.url));
      }

      // If token is valid and user is an admin, allow access
      return NextResponse.next();

    } catch (error) {
      console.error("Middleware: JWT verification failed for protected path:", error.message);
      // Token is invalid or expired, so redirect to the login page and clear the invalid cookie
      const response = NextResponse.redirect(new URL('/dashboard/login', request.url));
      response.cookies.delete('admin_auth_token'); // Clear invalid token
      return response;
    }
  }

  // --- Handling Login Page ---
  // If a user who is already logged in tries to access the login page
  if (pathname === '/dashboard/login') {
    if (token) {
      try {
        // Verify the token to ensure it's valid
        await jwtVerify(token, secret);
        // If the token is valid, redirect them away from the login page to the dashboard
        return NextResponse.redirect(new URL('/dashboard', request.url));
      } catch (error) {
        // If the token is invalid (e.g., expired), let them proceed to the login page
        // but clear the bad cookie first.
        const response = NextResponse.next();
        response.cookies.delete('admin_auth_token');
        return response;
      }
    }
  }

  // For all other paths, allow the request to proceed
  return NextResponse.next();
}

// The 'matcher' config tells Next.js which paths this middleware should apply to.
export const config = {
  // This matcher protects the root dashboard, all its sub-pages, and the admin login page.
  matcher: ['/dashboard/:path*', '/dashboard', '/dashboard/login'],
};