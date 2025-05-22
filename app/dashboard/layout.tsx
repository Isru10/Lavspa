// app/(dashboard)/layout.tsx

import DashboardNavbar from "@/components/AdminNavbar";
import DashboardSidebar from "@/components/DashboardSidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden"> {/* Add overflow-hidden to the parent */}
      <DashboardSidebar /> {/* Sidebar comes first for typical layout */}
      <div className="flex-1 flex flex-col overflow-hidden"> {/* This div will contain navbar and main content */}
        <DashboardNavbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-100 p-4 md:p-6 lg:p-8">
          {/* Changed bg-gray-200 to bg-slate-100 for a slightly different feel, adjust as you like */}
          {children}
        </main>
      </div>
    </div>
  );
}