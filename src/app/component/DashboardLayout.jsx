"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/dashboard/checkauth", {
          credentials: "include",
          cache: "no-store",
        });

        if (!response.ok) {
          router.push("/dashboard/login");
          return;
        }

        const data = await response.json();
        setUser(data.user);
      } catch (error) {
        if (process.env.NODE_ENV === "development") {
          console.error("Unable to load dashboard user:", error);
        }
      }
    };

    fetchUser();
  }, [router]);

  return (
    <div className="flex bg-navy-50 min-h-screen">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} userRole={user?.role} />
      
      <div className="flex-1 flex flex-col w-full md:ml-64 min-h-screen transition-all duration-300">
        <TopBar user={user} onMenuClick={() => setSidebarOpen(true)} />
        <main className="p-4 sm:p-6 lg:p-8 flex-1">{children}</main>
      </div>
    </div>
  );
}
