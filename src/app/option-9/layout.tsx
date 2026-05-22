import Link from 'next/link';

export default function Option9Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#1A1A1A] font-serif border-8 border-white box-border">
      {/* Editorial Header */}
      <header className="border-b-2 border-[#1A1A1A] py-6 px-12 flex justify-between items-end sticky top-0 bg-[#FAF9F6] z-50">
        <div>
          <h1 className="text-6xl font-black tracking-tighter uppercase leading-none">CareerFlyght</h1>
          <p className="text-sm tracking-widest uppercase mt-2 font-sans font-bold">The Executive Mobility Platform</p>
        </div>

        <nav className="flex gap-8 font-sans font-bold uppercase tracking-wider text-sm">
          <Link href="/option-9" className="hover:underline underline-offset-4 decoration-2">Index</Link>
          <Link href="/option-9/dashboard" className="hover:underline underline-offset-4 decoration-2">Report</Link>
          <Link href="/option-9/pricing" className="hover:underline underline-offset-4 decoration-2">Tariffs</Link>
          <Link href="/option-9/profile" className="hover:underline underline-offset-4 decoration-2">Dossier</Link>
        </nav>
      </header>

      <main className="min-h-[calc(100vh-140px)]">
        {children}
      </main>
    </div>
  );
}
