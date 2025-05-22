// src/components/Sidebar.tsx
'use client'; // Required because we use the usePathname hook client-side

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Hook to get the current URL path
import React from 'react';
import {
    HomeIcon,
    RectangleStackIcon, // Example icon
    UsersIcon,          // Example icon
    Cog6ToothIcon,      // Example icon
    // Import other icons as needed
} from '@heroicons/react/24/outline'; // Using outline style icons
import type { ElementType } from 'react';

// Define the structure for each navigation link
interface NavItem {
    name: string;
    href: string;
    icon: ElementType; // Allows passing Heroicon components
    exactMatch?: boolean; // Optional: Check for exact path match (e.g., for Dashboard)
}

// --- Define Your Navigation Links Here ---
const navigation: NavItem[] = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, exactMatch: true },
    { name: 'Items', href: '/items', icon: RectangleStackIcon }, // Example link
    { name: 'Customers', href: '/customers', icon: UsersIcon },   // Example link
    { name: 'Settings', href: '/settings', icon: Cog6ToothIcon }, // Example link
];

// Helper function to easily combine CSS classes
function classNames(...classes: (string | boolean | undefined)[]) {
    return classes.filter(Boolean).join(' ');
}

const Sidebar: React.FC = () => {
    // Get the current URL path to determine the active link
    const pathname = usePathname();

    return (
        <aside className="fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-gradient-to-br from-cyan-700 to-teal-600 text-white shadow-lg">

            {/* Logo / Header Area */}
            <div className="flex h-20 shrink-0 items-center justify-center border-b border-white/10 px-4">
                <Link href="/dashboard" className="text-2xl font-bold text-center transition hover:opacity-80">
                    Your App
                </Link>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-1 flex-col overflow-y-auto px-4 py-6">
                <ul role="list" className="flex-1 space-y-1">
                    {navigation.map((item) => {
                        // Determine if the current link is active
                        const isActive = item.exactMatch
                            ? pathname === item.href // Exact match needed
                            : pathname?.startsWith(item.href); // Path starts with href

                        return (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={classNames(
                                        // Apply active styles if isActive is true
                                        isActive
                                            ? 'bg-cyan-800 text-white shadow-inner' // Active link styles
                                            : 'text-cyan-100 hover:bg-cyan-800/60 hover:text-white', // Inactive link styles
                                        // Common styles for all links
                                        'group flex items-center gap-x-3 rounded-md p-3 text-sm font-semibold leading-6 transition duration-150 ease-in-out'
                                    )}
                                    // Accessibility: Indicate the current page
                                    aria-current={isActive ? 'page' : undefined}
                                >
                                    <item.icon
                                        className="h-6 w-6 shrink-0"
                                        aria-hidden="true"
                                    />
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Optional Footer Section (e.g., User Profile / Logout) */}
                {/* Add profile/logout logic here if needed */}
                {/* <div className="mt-auto border-t border-white/10 pt-4">
                    <div className="p-2">
                         Your User Profile / Logout Button
                    </div>
                </div> */}
            </nav>
        </aside>
    );
};

export default Sidebar;