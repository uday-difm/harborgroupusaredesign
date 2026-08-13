'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Menu } from 'lucide-react';

export default function TopBar({ onMenuClick }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [user, setUser] = useState(null); 
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('/api/dashboard/checkauth', { credentials: 'include' });
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        } else {
          router.push('/dashboard/login');
        }
      } catch (err) {
        if (process.env.NODE_ENV === 'development') {
          console.error('Error fetching user:', err);
        }
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
      if (process.env.NODE_ENV === 'development') {
        console.error('Logout failed', err);
      }
    }
  };

  const handleEditProfile = () => {
    router.push(`/dashboard/update-user/${user?.id}`);
  };

  return (
    <div className="w-full px-4 sm:px-6 py-4 bg-white flex items-center justify-between shadow-sm z-10 relative">
      
      {/* Mobile Hamburger Menu Trigger */}
      <button 
        className="md:hidden text-navy-500 hover:text-navy-900 transition mr-4"
        onClick={onMenuClick}
      >
        <Menu size={24} />
      </button>

      {/* Spacer to push profile to the right when search is removed */}
      <div className="flex-1"></div>

      {/* Profile Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <div className="text-right hidden sm:block">
            <h4 className="text-sm font-semibold text-navy-900">{user?.name || ''}</h4>
            <p className="text-xs text-navy-500">{user?.role || ''}</p>
          </div>
          <Image
           src={user?.image || 'https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Favicon.png'}
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full border border-navy-100 shadow object-cover"
            loading="lazy"
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
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg card-elevated z-30 py-2">
            <div className="sm:hidden px-4 py-2 mb-2 border-b border-navy-100">
              <h4 className="text-sm font-semibold text-navy-900">{user?.name || ''}</h4>
              <p className="text-xs text-navy-500">{user?.role || ''}</p>
            </div>
            <button
              onClick={handleEditProfile}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
            >
              Edit Profile
            </button>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-sm text-sky-600 hover:bg-gray-100 transition"
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
