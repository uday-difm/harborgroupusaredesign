'use client';

import {
  LayoutDashboard,
  FileText,
  List,
  FolderPlus,
  Users,
  UserPlus,
  Users2,
  ChevronDown,
  ChevronRight,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar({ isOpen, setIsOpen }) {
  const [openMenus, setOpenMenus] = useState({
    users: false,
  });
  const [userRole, setUserRole] = useState(null);
  const pathname = usePathname();

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/dashboard/checkauth", { credentials: "include" });
        if (res.ok) {
          const data = await res.json();
          setUserRole(data.user.role);
        }
      } catch (err) {
        if (process.env.NODE_ENV === 'development') {
          console.error("Error fetching user:", err);
        }
      }
    };
    fetchUser();
  }, []);

  const isActive = (href) => pathname === href;

  const NavItem = ({ href, icon: Icon, label, onClick }) => {
    const active = isActive(href);
    return (
      <li>
        <Link
          href={href}
          onClick={() => {
            if (onClick) onClick();
            if (window.innerWidth < 768) setIsOpen(false);
          }}
          className={`flex items-center gap-3 px-4 py-2.5 rounded-r-lg transition-colors border-l-4 ${
            active
              ? "bg-navy-900 border-accent text-accent"
              : "border-transparent text-gray-200 hover:text-accent hover:bg-navy-900/50"
          }`}
        >
          <Icon size={18} />
          <span className="font-medium text-sm">{label}</span>
        </Link>
      </li>
    );
  };

  const sidebarContent = (
    <div className="w-64 bg-navy-950 text-white h-full flex flex-col shadow-2xl overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-navy-950">
      {/* Header / Logo */}
      <div className="flex items-center gap-3 p-6 mb-2 border-b border-navy-900">
        <Image
          src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Favicon.png"
          alt="Logo"
          width={40}
          height={40}
          className="object-cover h-10 w-10 rounded-full shadow-sm"
          loading="lazy"
        />
        <span className="text-lg font-extrabold tracking-wider uppercase text-white">
          Dashboard
        </span>
        {/* Mobile Close Button */}
        <button 
          className="md:hidden ml-auto text-navy-300 hover:text-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={20} />
        </button>
      </div>

      <div className="px-6 py-2">
        <span className="text-[11px] uppercase tracking-widest text-navy-300">
          Navigation
        </span>
      </div>

      <nav className="flex-1 pb-6">
        <ul className="flex flex-col gap-1 pr-4">
          <NavItem href="/dashboard" icon={LayoutDashboard} label="Dashboard" />
          <NavItem href="/dashboard/add-blog" icon={FileText} label="Add Blog" />
          <NavItem href="/dashboard/blog-table" icon={List} label="View Blogs" />
          <NavItem href="/dashboard/add-category" icon={FolderPlus} label="Add Category" />

          {/* Manage Users Dropdown */}
          {(userRole === "Super Admin" || userRole === "Administrator") && (
            <li className="mt-1">
              <div
                className={`flex items-center justify-between cursor-pointer px-4 py-2.5 rounded-r-lg transition-colors border-l-4 border-transparent text-gray-200 hover:text-accent hover:bg-navy-900/50 ${
                  openMenus.users ? "bg-navy-900/30" : ""
                }`}
                onClick={() => toggleMenu("users")}
              >
                <div className="flex items-center gap-3">
                  <Users size={18} />
                  <span className="font-medium text-sm">Manage Users</span>
                </div>
                {openMenus.users ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </div>

              {openMenus.users && (
                <ul className="mt-1 flex flex-col gap-1 pl-4">
                  <NavItem href="/dashboard/admin-create" icon={UserPlus} label="Add User" />
                  <NavItem href="/dashboard/view-user" icon={Users2} label="View Users" />
                </ul>
              )}
            </li>
          )}
        </ul>
      </nav>
    </div>
  );

  return (
    <>
      {/* Mobile Sidebar (Off-canvas) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 bg-navy-900/80 backdrop-blur-sm z-40"
            />
            {/* Drawer */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.3 }}
              className="md:hidden fixed inset-y-0 left-0 z-50 w-64 shadow-2xl"
            >
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar (Fixed) */}
      <aside className="hidden md:block fixed inset-y-0 left-0 z-30 w-64">
        {sidebarContent}
      </aside>
    </>
  );
}
