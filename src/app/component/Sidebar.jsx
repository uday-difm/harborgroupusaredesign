import {
  LayoutDashboard,
  List,
  Users,
  User,
  Settings,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
  const [openMenus, setOpenMenus] = useState({
    dashboard: false,
    posts: false,
    subscribers: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <aside className="w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-white p-6 flex flex-col shadow-2xl backdrop-blur-md h-screen fixed overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-900">
      {/* Logo and Title */}
      <div className="flex flex-col items-center gap-3 mb-10">
        <Image
          src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Favicon.png"
          alt="Logo"
          width={800}
          height={800} 
          className="h-20 w-20 rounded-full shadow-md"
          loading="lazy" 
        />
        <span className="text-2xl font-extrabold tracking-wider uppercase text-white mt-3">
          Dashboard
        </span>
      </div>

      <span className="text-[11px] uppercase tracking-widest text-gray-400 mb-4">
        Navigation
      </span>

      <nav className="flex flex-col gap-6 text-base text-gray-200 font-medium">
        <div className="rounded-xl bg-slate-800/60 p-4 group">
            <ul className="pl-6  space-y-4 text-sm">
              <li>
                <Link href="/dashboard/add-blog" className="hover:text-sky-400 font-normal p-2">
                  Add Blog
                </Link>
              </li>
           
            </ul>
         
        </div>
        <div className="rounded-xl bg-slate-800/60 p-4 group">
            <ul className="pl-6  space-y-4 text-sm">
              <li>
                <Link
                  href="/dashboard/blog-table"
                  className="hover:text-sky-400 font-normal p-2 cursor-pointer"
                >
                 Views Blogs
                </Link>
              </li>
            </ul>
        </div>
          <div className="rounded-xl bg-slate-800/60 p-4 group">
            <ul className="pl-6  space-y-4 text-sm">
              <li>
                <Link
                  href="/dashboard/add-category"
                  className="hover:text-sky-400 font-normal p-2 cursor-pointer"
                >
                 Add Category
                </Link>
              </li>
            </ul>
        </div>
      </nav>
    </aside>
  );
}
