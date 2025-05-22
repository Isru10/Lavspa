'use client'; // This component will have interactive elements (dropdown)

import Link from 'next/link';
import Image from 'next/image'; // If you have an image logo
import { useState, useEffect, useRef } from 'react';
import { Search, Bell, ChevronDown, Settings, User, LogOutIcon } from 'lucide-react';
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';

// Mock user data - replace with actual user data from your session
const mockUser = {
  name: 'Alex Johnson',
  email: 'alex.johnson@example.com',
  avatarUrl: '/lavishspa.jpg', // Placeholder avatar
};


export default function DashboardNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const {getUser} = useKindeBrowserClient();
   const user =  getUser();


  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav className="bg-gradient-to-r from-cyan-700 to-teal-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Side: Logo/Brand */}
          <div className="flex items-center">
            <Link href="/dashboard" className="flex-shrink-0 flex items-center group">
              {/* Replace with your logo SVG or Image */}
              <svg
                className="h-8 w-auto text-cyan-300 group-hover:text-white transition-colors duration-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-2 text-xl font-semibold group-hover:text-cyan-100 transition-colors duration-200 hidden md:block">
                MyDashboard
              </span>
            </Link>
          </div>

          {/* Middle: Search Bar (optional, adjust width as needed) */}
          <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="max-w-lg w-full lg:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative text-gray-300 focus-within:text-white">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full bg-cyan-800/60 hover:bg-cyan-800/80 focus:bg-cyan-800/90 border border-transparent
                             rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-300 focus:placeholder-gray-100
                             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-700 focus:ring-white
                             transition-all duration-200"
                  placeholder="Search..."
                  type="search"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Actions */}
          <div className="flex items-center space-x-3 md:space-x-5">
            {/* Notifications */}
            <button
              type="button"
              className="p-1 rounded-full text-cyan-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-700 focus:ring-white relative transition-colors duration-200"
              aria-label="View notifications"
            >
              <Bell className="h-6 w-6" aria-hidden="true" />
              {/* Notification Badge */}
              <span className="absolute top-0 right-0 block h-2.5 w-2.5 transform -translate-y-1/2 translate-x-1/2 rounded-full bg-red-500 ring-2 ring-cyan-700"></span>
            </button>

            {/* User Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <div>
                <button
                  type="button"
                  className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-700 focus:ring-white"
                  id="user-menu-button"
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span className="sr-only">Open user menu</span>
                  {/* User Avatar */}
                  <Image
                    className="h-8 w-8 rounded-full ring-1 ring-white/50"
                    src={mockUser.avatarUrl}
                    alt={mockUser.name}
                    width={32}
                    height={32}
                    
                  />
                  <span className="ml-2 hidden md:block text-sm font-medium text-cyan-100 group-hover:text-white">
                    {mockUser.name.split(' ')[0]} {/* Show first name */}
                  </span>
                  <ChevronDown
                    className={`ml-1 h-4 w-4 text-cyan-200 transition-transform duration-200 ${
                      isDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div
                  className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex={-1}
                >
                  <div className="px-4 py-3 border-b border-gray-200">
                    <p className="text-sm font-medium text-gray-900">{mockUser.name}</p>
                    <p className="text-xs text-gray-500 truncate">{mockUser.email}</p>
                  </div>
                  <Link
                    href="/dashboard/profile"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-0"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <User className="mr-3 h-5 w-5 text-gray-400" />
                    Your Profile
                  </Link>
                  <Link
                    href="/dashboard/settings"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-1"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <Settings className="mr-3 h-5 w-5 text-gray-400" />
                    Settings
                  </Link>
                  {/* Kinde logout link example */}
                  {/* <Link
                    href="/api/auth/logout" // Kinde's default logout endpoint
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors duration-150"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-2"
                  > */}
                    
<div className="text-black">
<LogoutLink> 
<LogOutIcon/>
                        </LogoutLink>

</div>
    
                      {/* </Link> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}