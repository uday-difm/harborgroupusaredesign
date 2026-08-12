import {
  LayoutDashboard,
  List,
  Users,
  User,
  Settings,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
  const [openMenus, setOpenMenus] = useState({
    dashboard: false,
    posts: false,
    subscribers: false,
    users: false,
  });
   const [userRole, setUserRole] = useState(null); // store logged-in user role

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

    // Fetch logged-in user info
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/dashboard/checkauth", { credentials: "include" });
        if (res.ok) {
          const data = await res.json();
          setUserRole(data.user.role); // assuming your API returns { user: { role: 'Super Admin' } }
        }
      } catch (err) {
        if (process.env.NODE_ENV === 'development') {

          console.error("Error fetching user:", err);

        }
      }
    };
    fetchUser();
  }, []);

  return (
    <aside className="w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-white p-6 flex flex-col shadow-2xl backdrop-blur-md h-screen fixed overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-900">
      {/* Logo and Title */}
      <div className="flex flex-col items-center gap-3 mb-10">
        <Image
          src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Favicon.png"
          alt="Logo"
          width={800}
          height={800} 
          className="object-cover h-20 w-20 rounded-full shadow-md"
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
        <div className="rounded-2xl bg-slate-800/60 p-4 group">
            <ul className="pl-6  space-y-4 text-sm">
              <li>
                <Link href="/dashboard/add-blog" className="hover:text-sky-400 font-normal p-2">
                  Add Blog
                </Link>
              </li>
           
            </ul>
         
        </div>
        <div className="rounded-2xl bg-slate-800/60 p-4 group">
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
          <div className="rounded-2xl bg-slate-800/60 p-4 group">
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
      {/* Manage Users Dropdown - only for Super Admin or Administrator */}
        {(userRole === "Super Admin" || userRole === "Administrator") && (
          <div className="rounded-2xl bg-slate-800/60 p-4 group">
            <div
              className="flex items-center justify-between cursor-pointer p-2 hover:text-sky-400"
              onClick={() => toggleMenu("users")}
            >
              <div className="flex items-center gap-2">
                <Users size={16} />
                <span>Manage Users</span>
              </div>
              {openMenus.users ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </div>

            {openMenus.users && (
              <ul className="pl-6 mt-2 space-y-2 text-sm">
                <li>
                  <Link
                    href="/dashboard/admin-create"
                    className="hover:text-sky-400 font-normal p-2 block"
                  >
                    Add User
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/view-user"
                    className="hover:text-sky-400 font-normal p-2 block"
                  >
                    View Users
                  </Link>
                </li>
              </ul>
            )}
          </div>
        )}
      </nav>
    </aside>
  );
}
