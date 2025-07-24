"use client";


import "./globals.css";
import { Header } from "@/comman/Header";
import { Footer } from "@/comman/Footer";
import { usePathname } from "next/navigation";  // Correct hook for client-side navigation



export default function RootLayout({ children }) {
  const pathname = usePathname();
  
  // Check if the current route is "/dashboard" or starts with "/dashboard/"
  const isDashboardPage = pathname ? pathname.startsWith("/dashboard") : false;
  return (
    <html lang="en">
      <body
        className="" cz-shortcut-listen="true"
      >
        {!isDashboardPage && <Header />}
        {children}
             {!isDashboardPage && <Footer />}
      </body>
    </html>
  );
}
