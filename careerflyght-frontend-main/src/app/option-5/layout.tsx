import Link from 'next/link';

export default function Option5Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#FAF9F6] text-[#2C3E50] min-h-screen font-serif flex">
      {/* Side Navigation - Journal Style */}
      <nav className="w-48 fixed h-screen border-r border-[#E5E0D8] p-8 flex flex-col justify-between z-50 bg-[#FAF9F6]">
        <div>
          <h1 className="text-xl font-bold tracking-widest uppercase mb-12 text-[#2C3E50]">CF.</h1>
          <ul className="space-y-6">
            <li>
              <Link href="/option-5" className="text-sm tracking-widest uppercase text-[#7F8C8D] hover:text-[#2980B9] transition-colors relative group">
                <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#2980B9]">→</span>
                Chapter I: Start
              </Link>
            </li>
            <li>
              <Link href="/option-5/dashboard" className="text-sm tracking-widest uppercase text-[#7F8C8D] hover:text-[#2980B9] transition-colors relative group">
                <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#2980B9]">→</span>
                Chapter II: Path
              </Link>
            </li>
            <li>
              <Link href="/option-5/pricing" className="text-sm tracking-widest uppercase text-[#7F8C8D] hover:text-[#2980B9] transition-colors relative group">
                <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#2980B9]">→</span>
                Chapter III: Toll
              </Link>
            </li>
            <li>
              <Link href="/option-5/profile" className="text-sm tracking-widest uppercase text-[#7F8C8D] hover:text-[#2980B9] transition-colors relative group">
                <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#2980B9]">→</span>
                Epilogue: You
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-xs text-[#95A5A6]">Vol. 2025</div>
      </nav>
      
      <main className="ml-48 flex-1">
        {children}
      </main>
    </div>
  );
}
