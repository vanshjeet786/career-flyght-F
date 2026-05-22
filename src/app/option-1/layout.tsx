import Link from 'next/link';
import { Home, LayoutDashboard, CreditCard, User, LogOut } from 'lucide-react';

export default function Option1Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <span className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center">CF</span>
            CareerFlyght
          </h1>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <Link href="/option-1" className="flex items-center gap-3 px-3 py-2 text-gray-600 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors">
            <Home className="w-5 h-5" />
            Home
          </Link>
          <Link href="/option-1/dashboard" className="flex items-center gap-3 px-3 py-2 text-gray-600 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors">
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </Link>
          <Link href="/option-1/pricing" className="flex items-center gap-3 px-3 py-2 text-gray-600 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors">
            <CreditCard className="w-5 h-5" />
            Pricing
          </Link>
          <Link href="/option-1/profile" className="flex items-center gap-3 px-3 py-2 text-gray-600 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors">
            <User className="w-5 h-5" />
            Profile
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button className="flex items-center gap-3 px-3 py-2 w-full text-left text-gray-600 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors">
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header (Mobile / Topbar) */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-6 justify-between md:justify-end">
           <div className="md:hidden font-bold text-gray-900">CareerFlyght</div>
           <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">JD</div>
           </div>
        </header>

        <main className="flex-1 overflow-auto bg-gray-50 text-gray-900">
          {children}
        </main>
      </div>
    </div>
  );
}
