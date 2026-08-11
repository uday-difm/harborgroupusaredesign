'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';

export default function TopBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [user, setUser] = useState(null); 
  const router = useRouter();

   // Fetch logged-in user info
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('/api/dashboard/checkauth', { credentials: 'include' });
        if (res.ok) {
          const data = await res.json();
          setUser(data.user); // Assume API returns { user: { name, role, image } }
        } else {
          router.push('/dashboard/login');
        }
      } catch (err) {
        console.error('Error fetching user:', err);
      }
    };
    fetchUser();
  }, [router]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await fetch(`/api/dashboard/logout`, {
        method: 'POST',
        credentials: 'include',
      });
      router.push('/dashboard/login');
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

    const handleEditProfile = () => {
    router.push(`/dashboard/update-user//${user?.id}`);
  };


  return (
    <div className="w-full px-6 py-4 bg-white flex items-center justify-between shadow-sm z-10 relative">
      
      {/* Search Bar */}
      <div className="relative w-full max-w-sm">
        <input
          type="text"
          placeholder="Search blogs, posts..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-navy-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent text-sm text-gray-700 placeholder-gray-400 transition"
        />
        <div className="absolute left-3 top-2.5 text-gray-400 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Profile Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <div className="text-right">
            <h4 className="text-sm font-semibold text-gray-800">{user?.name || ''}</h4>
            <p className="text-xs text-navy-500">{user?.role || ''}</p>
          </div>
          <Image
           src={user?.image || 'https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Favicon.png'}
          
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full border border-navy-100 shadow object-cover"
            loading="lazy" // Lazy load the profile image
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 text-navy-500 transform transition-transform ${
              dropdownOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md card-elevated z-30 py-2">
           <button
              onClick={handleEditProfile}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Edit Profile
            </button>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-sm text-sky-600 hover:bg-gray-100"
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
