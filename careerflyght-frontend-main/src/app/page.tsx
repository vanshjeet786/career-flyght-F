import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-10 font-sans selection:bg-blue-500/30">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Career Flyght UI Prototypes
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl">
          A showcase of 10 distinct UI/UX concepts for the Career Flyght platform, ranging from classic SaaS to highly creative, interactive scrollytelling experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* SaaS Templates */}
          {[1, 2, 3].map((opt) => (
            <Link key={opt} href={`/option-${opt}`} className="group block p-6 rounded-2xl border border-gray-800 bg-gray-900/50 hover:bg-gray-800 transition-all hover:border-gray-600">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold">Option {opt}</h2>
                <span className="text-xs font-medium px-2.5 py-1 bg-blue-500/10 text-blue-400 rounded-full">SaaS Template</span>
              </div>
              <p className="text-gray-400 text-sm">Classic dashboard layout, clean data presentation, sidebar navigation.</p>
            </Link>
          ))}

          {/* Scrollytelling / Journey */}
          {[4, 5].map((opt) => (
            <Link key={opt} href={`/option-${opt}`} className="group block p-6 rounded-2xl border border-gray-800 bg-gray-900/50 hover:bg-gray-800 transition-all hover:border-gray-600">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold">Option {opt}</h2>
                <span className="text-xs font-medium px-2.5 py-1 bg-purple-500/10 text-purple-400 rounded-full">Journey / Scroll</span>
              </div>
              <p className="text-gray-400 text-sm">Aviation theme, scrollytelling, high interactivity, Framer Motion animations.</p>
            </Link>
          ))}

          {/* Spatial / Node / Glass */}
          {[6, 7].map((opt) => (
            <Link key={opt} href={`/option-${opt}`} className="group block p-6 rounded-2xl border border-gray-800 bg-gray-900/50 hover:bg-gray-800 transition-all hover:border-gray-600">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold">Option {opt}</h2>
                <span className="text-xs font-medium px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-full">Spatial / Glass</span>
              </div>
              <p className="text-gray-400 text-sm">{opt === 6 ? 'Node-based visualization, spatial interface.' : 'Neumorphism, glassmorphism, sleek dark mode.'}</p>
            </Link>
          ))}

          {/* Bento / Editorial */}
          {[8, 9].map((opt) => (
            <Link key={opt} href={`/option-${opt}`} className="group block p-6 rounded-2xl border border-gray-800 bg-gray-900/50 hover:bg-gray-800 transition-all hover:border-gray-600">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold">Option {opt}</h2>
                <span className="text-xs font-medium px-2.5 py-1 bg-amber-500/10 text-amber-400 rounded-full">Bento / Editorial</span>
              </div>
              <p className="text-gray-400 text-sm">{opt === 8 ? 'Modern Bento Box grid layout, highly modular.' : 'Large typography, magazine/editorial style, bold contrast.'}</p>
            </Link>
          ))}

          {/* Gamified / Futuristic */}
          <Link href={`/option-10`} className="group block p-6 rounded-2xl border border-gray-800 bg-gray-900/50 hover:bg-gray-800 transition-all hover:border-gray-600">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">Option 10</h2>
              <span className="text-xs font-medium px-2.5 py-1 bg-rose-500/10 text-rose-400 rounded-full">Gamified Cockpit</span>
            </div>
            <p className="text-gray-400 text-sm">Futuristic UI, gamified progression, &quot;Cockpit&quot; dashboard experience.</p>
          </Link>

        </div>
      </div>
    </main>
  );
}
