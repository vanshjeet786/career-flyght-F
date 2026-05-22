import Link from 'next/link';
import { Home, Compass, Zap, User, Settings } from 'lucide-react';

export default function Option2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FDFDFD] flex">
      {/* Slim Sidebar */}
      <aside className="w-20 bg-[#111111] flex flex-col items-center py-8 hidden md:flex border-r border-gray-800">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-400 to-cyan-400 mb-12 flex items-center justify-center text-black font-bold text-lg">
          CF
        </div>

        <nav className="flex-1 flex flex-col gap-8">
          <Link href="/option-2" className="text-gray-400 hover:text-white transition-colors group relative">
            <Home className="w-6 h-6" />
            <span className="absolute left-14 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity">Home</span>
          </Link>
          <Link href="/option-2/dashboard" className="text-gray-400 hover:text-white transition-colors group relative">
            <Compass className="w-6 h-6" />
             <span className="absolute left-14 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity">Explore</span>
          </Link>
          <Link href="/option-2/pricing" className="text-gray-400 hover:text-white transition-colors group relative">
            <Zap className="w-6 h-6" />
             <span className="absolute left-14 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity">Upgrade</span>
          </Link>
          <Link href="/option-2/profile" className="text-gray-400 hover:text-white transition-colors group relative">
            <User className="w-6 h-6" />
             <span className="absolute left-14 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity">Profile</span>
          </Link>
        </nav>

        <button className="text-gray-400 hover:text-white mt-auto">
          <Settings className="w-6 h-6" />
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <main className="flex-1 overflow-auto bg-[#FDFDFD] text-gray-900">
          {children}
        </main>
      </div>
    </div>
  );
}
