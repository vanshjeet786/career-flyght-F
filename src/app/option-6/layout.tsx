import Link from 'next/link';
import { Network, Home, Briefcase, CreditCard, User } from 'lucide-react';

export default function Option6Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#0A0A0A] text-gray-200 min-h-screen font-sans selection:bg-purple-500/30 flex">
      {/* Floating Spatial Navigation */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6 bg-white/5 backdrop-blur-xl p-4 rounded-3xl border border-white/10">
        <Link href="/option-6" className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 flex items-center justify-center transition-all group relative">
          <Home className="w-5 h-5 text-gray-400 group-hover:text-purple-400" />
          <span className="absolute left-16 bg-white/10 backdrop-blur-md px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity border border-white/5">Nexus</span>
        </Link>
        <Link href="/option-6/dashboard" className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 flex items-center justify-center transition-all group relative">
          <Network className="w-5 h-5 text-gray-400 group-hover:text-purple-400" />
          <span className="absolute left-16 bg-white/10 backdrop-blur-md px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity border border-white/5">Nodes</span>
        </Link>
        <Link href="/option-6/pricing" className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 flex items-center justify-center transition-all group relative">
          <CreditCard className="w-5 h-5 text-gray-400 group-hover:text-purple-400" />
          <span className="absolute left-16 bg-white/10 backdrop-blur-md px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity border border-white/5">Access</span>
        </Link>
        <Link href="/option-6/profile" className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 flex items-center justify-center transition-all group relative">
          <User className="w-5 h-5 text-gray-400 group-hover:text-purple-400" />
          <span className="absolute left-16 bg-white/10 backdrop-blur-md px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity border border-white/5">Entity</span>
        </Link>
      </nav>

      {/* Decorative Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-500 opacity-20 blur-[100px]"></div>
      </div>

      <main className="flex-1 ml-28 p-8 relative z-10 min-h-screen">
        {children}
      </main>
    </div>
  );
}
