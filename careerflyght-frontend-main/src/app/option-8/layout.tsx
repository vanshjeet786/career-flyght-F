import Link from 'next/link';
import { Home, LayoutGrid, CreditCard, User } from 'lucide-react';

export default function Option8Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#f0f0f0] min-h-screen text-gray-900 font-sans p-4 md:p-8">
      <div className="max-w-[1600px] mx-auto bg-white rounded-[2.5rem] min-h-[calc(100vh-4rem)] shadow-sm border border-gray-100 overflow-hidden flex flex-col">
        
        {/* Bento Header */}
        <header className="h-20 border-b border-gray-100 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">CF</span>
            </div>
            <span className="font-bold text-xl tracking-tight">CareerFlyght</span>
          </div>
          
          <nav className="hidden md:flex bg-gray-100 p-1 rounded-2xl gap-1">
            <Link href="/option-8" className="px-4 py-2 rounded-xl text-sm font-medium hover:bg-white hover:shadow-sm transition-all text-gray-600 hover:text-black">Overview</Link>
            <Link href="/option-8/dashboard" className="px-4 py-2 rounded-xl text-sm font-medium hover:bg-white hover:shadow-sm transition-all text-gray-600 hover:text-black">Bento Board</Link>
            <Link href="/option-8/pricing" className="px-4 py-2 rounded-xl text-sm font-medium hover:bg-white hover:shadow-sm transition-all text-gray-600 hover:text-black">Plans</Link>
            <Link href="/option-8/profile" className="px-4 py-2 rounded-xl text-sm font-medium hover:bg-white hover:shadow-sm transition-all text-gray-600 hover:text-black">Account</Link>
          </nav>
          
          <div>
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
               <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User" />
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto bg-gray-50/50 p-6 md:p-10">
          {children}
        </main>
      </div>
    </div>
  );
}
