import Link from 'next/link';

export default function Option2Home() {
  return (
    <div className="min-h-[calc(100vh-2rem)] p-8 max-w-7xl mx-auto flex flex-col justify-center relative">

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-50/50 to-transparent pointer-events-none rounded-l-[100px]" />

      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold mb-6">
            New Platform Launch
          </div>
          <h1 className="text-6xl font-bold text-[#111] leading-tight mb-6 font-serif">
            Design your <span className="text-emerald-600 italic">legacy.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-md">
            Advanced analytics, expert coaching, and personalized career roadmaps for ambitious professionals.
          </p>

          <div className="flex gap-4">
            <Link href="/option-2/dashboard" className="px-8 py-4 bg-[#111] text-white rounded-xl font-medium hover:bg-gray-800 transition-all hover:shadow-lg hover:-translate-y-0.5">
              Enter Platform
            </Link>
            <Link href="/option-2/pricing" className="px-8 py-4 bg-white text-[#111] rounded-xl font-medium border-2 border-gray-200 hover:border-gray-900 transition-all">
              View Solutions
            </Link>
          </div>
        </div>

        <div className="relative">
          {/* Abstract Interface Representation */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100 relative z-10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
            </div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-100 rounded-full w-3/4"></div>
              <div className="h-4 bg-gray-100 rounded-full w-1/2"></div>
              <div className="h-32 bg-emerald-50 rounded-xl mt-6 border border-emerald-100 flex items-center justify-center">
                 <div className="text-emerald-400 font-medium">Data Visualization</div>
              </div>
            </div>
          </div>

          {/* Decorative blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-300 rounded-full blur-[80px] opacity-20 -z-10"></div>
        </div>
      </div>
    </div>
  );
}
