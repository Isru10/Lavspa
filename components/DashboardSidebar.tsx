'use client'; // For using usePathname hook

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  BarChart3, // Analytics
  Users,
  Settings,
  Briefcase, // Projects
  MessageSquare, // Messages or Feedback
  HelpCircle, // Support
} from 'lucide-react';

// Define the navigation items
const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Analytics', href: '#', icon: BarChart3 },
  { name: 'Projects', href: '#', icon: Briefcase },
  { name: 'Team Members', href: '#', icon: Users },
  { name: 'Messages', href: '#', icon: MessageSquare },
  { name: 'Settings', href: '#', icon: Settings },
  { name: 'Support', href: '#', icon: HelpCircle },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-cyan-700 text-cyan-100 flex flex-col sticky top-0 shadow-lg">
      {/* Logo/Brand Area */}
      <div className="h-16 flex items-center justify-center border-b border-cyan-600/50">
        <Link href="/dashboard" className="flex items-center group">
          <svg
            className="h-8 w-auto text-cyan-300 group-hover:text-white transition-colors duration-200"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-2 text-xl font-semibold text-white group-hover:text-cyan-100 transition-colors duration-200">
            MyDashboard
          </span>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-3 py-4 space-y-1.5 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex items-center px-3 py-2.5 rounded-md text-sm font-medium
                transition-all duration-200 ease-in-out group
                ${
                  isActive
                    ? 'bg-cyan-600 text-white shadow-sm'
                    : 'text-cyan-100 hover:bg-cyan-600/70 hover:text-white focus:bg-cyan-600/70 focus:text-white'
                }
              `}
            >
              <item.icon
                className={`
                  mr-3 flex-shrink-0 h-5 w-5
                  ${isActive ? 'text-white' : 'text-cyan-300 group-hover:text-cyan-100 group-focus:text-cyan-100'}
                `}
                aria-hidden="true"
              />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Optional: Footer area in sidebar (e.g., quick links, user mini profile) */}
      <div className="p-4 border-t border-cyan-600/50">
        <p className="text-xs text-cyan-300 text-center">
          © {new Date().getFullYear()} Your Company
        </p>
      </div>
    </aside>
  );
}