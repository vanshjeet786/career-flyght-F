import Link from 'next/link';
import { Crosshair, User, Settings, ShieldAlert, Cpu } from 'lucide-react';

export default function Option10Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#050505] min-h-screen text-[#00ffcc] font-mono selection:bg-[#00ffcc]/30 relative overflow-hidden">
      
      {/* Gamified HUD Overlay Elements */}
      <div className="pointer-events-none fixed inset-0 z-50">
        <div className="absolute top-4 left-4 border-l-2 border-t-2 border-[#00ffcc] w-16 h-16 opacity-50"></div>
        <div className="absolute top-4 right-4 border-r-2 border-t-2 border-[#00ffcc] w-16 h-16 opacity-50"></div>
        <div className="absolute bottom-4 left-4 border-l-2 border-b-2 border-[#00ffcc] w-16 h-16 opacity-50"></div>
        <div className="absolute bottom-4 right-4 border-r-2 border-b-2 border-[#00ffcc] w-16 h-16 opacity-50"></div>
        
        {/* Scanlines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.2)_51%)] bg-[length:100%_4px] opacity-20"></div>
      </div>

      {/* Main Container */}
      <div className="flex flex-col h-screen relative z-10">
        
        {/* Top HUD Bar */}
        <header className="h-16 border-b border-[#00ffcc]/20 bg-black/50 backdrop-blur-sm flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4">
            <ShieldAlert className="w-6 h-6 text-[#ff003c] animate-pulse" />
            <span className="font-bold tracking-widest uppercase text-sm">SYS.CAREER.FLYGHT // v10.0</span>
          </div>
          
          <nav className="flex gap-6 uppercase text-xs tracking-widest font-bold">
            <Link href="/option-10" className="hover:text-white hover:bg-[#00ffcc]/20 px-3 py-1 rounded transition-colors">System.Home</Link>
            <Link href="/option-10/dashboard" className="hover:text-white hover:bg-[#00ffcc]/20 px-3 py-1 rounded transition-colors">Cmd.Cockpit</Link>
            <Link href="/option-10/pricing" className="hover:text-white hover:bg-[#00ffcc]/20 px-3 py-1 rounded transition-colors">Sys.Upgrades</Link>
            <Link href="/option-10/profile" className="hover:text-white hover:bg-[#00ffcc]/20 px-3 py-1 rounded transition-colors">Usr.Config</Link>
          </nav>

          <div className="flex items-center gap-2">
            <span className="text-xs uppercase">LVL_5</span>
            <div className="w-32 h-2 bg-gray-900 border border-[#00ffcc]/50 rounded-full overflow-hidden">
               <div className="h-full bg-[#00ffcc] w-3/4"></div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto p-8 relative">
          {children}
        </main>
      </div>
    </div>
  );
}
