import Link from 'next/link';

export default function Option4Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#050510] text-slate-100 min-h-screen selection:bg-blue-500/30 font-sans">
      {/* Floating minimal nav */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#111122]/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex items-center gap-8">
        <Link href="/option-4" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Home</Link>
        <Link href="/option-4/dashboard" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Flight Path</Link>
        <Link href="/option-4/pricing" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Tickets</Link>
        <Link href="/option-4/profile" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Passenger Info</Link>
      </nav>
      {children}
    </div>
  );
}
