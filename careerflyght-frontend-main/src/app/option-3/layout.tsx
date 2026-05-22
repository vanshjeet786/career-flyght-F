import Link from 'next/link';
import { Home, BarChart2, DollarSign, Settings, Menu } from 'lucide-react';

export default function Option3Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 flex flex-col">
      {/* Top Navigation Bar */}
      <header className="h-14 bg-slate-950 border-b border-slate-800 flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center gap-6">
          <button className="text-slate-400 hover:text-white md:hidden"><Menu className="w-5 h-5" /></button>
          <div className="font-bold text-white tracking-wide flex items-center gap-2">
            <div className="w-6 h-6 bg-indigo-500 rounded-sm flex items-center justify-center text-xs">CF</div>
            CAREERFLYGHT
          </div>
          
          <nav className="hidden md:flex items-center gap-1 ml-8">
            <Link href="/option-3" className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors flex items-center gap-2">
              <Home className="w-4 h-4" /> Overview
            </Link>
            <Link href="/option-3/dashboard" className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors flex items-center gap-2">
              <BarChart2 className="w-4 h-4" /> Analytics
            </Link>
            <Link href="/option-3/pricing" className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors flex items-center gap-2">
              <DollarSign className="w-4 h-4" /> Billing
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
           <Link href="/option-3/profile" className="w-8 h-8 rounded bg-slate-800 border border-slate-700 flex items-center justify-center text-sm font-medium hover:bg-slate-700 transition-colors">
             JD
           </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-8 max-w-7xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
}
