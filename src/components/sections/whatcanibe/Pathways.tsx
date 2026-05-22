import Link from "next/link";
import { ArrowUpRight, Code, Palette, Briefcase, Microscope, Cpu, LineChart } from "lucide-react";

const PATHWAYS = [
  {
    icon: <Code size={32} className="text-blue-400" />,
    title: "Software Engineering",
    description: "Build the digital infrastructure of tomorrow, from web apps to complex systems.",
    jobs: "3.4M+ open roles",
    growth: "+22% by 2030",
    color: "from-blue-500/20 to-blue-900/5"
  },
  {
    icon: <Palette size={32} className="text-pink-400" />,
    title: "Product Design",
    description: "Shape how users interact with technology through intuitive interfaces and experiences.",
    jobs: "1.2M+ open roles",
    growth: "+16% by 2030",
    color: "from-pink-500/20 to-pink-900/5"
  },
  {
    icon: <Cpu size={32} className="text-purple-400" />,
    title: "Artificial Intelligence",
    description: "Develop intelligent systems that learn, adapt, and solve complex problems.",
    jobs: "850K+ open roles",
    growth: "+35% by 2030",
    color: "from-purple-500/20 to-purple-900/5"
  },
  {
    icon: <LineChart size={32} className="text-green-400" />,
    title: "Data Science",
    description: "Extract actionable insights from massive datasets to drive business decisions.",
    jobs: "2.1M+ open roles",
    growth: "+28% by 2030",
    color: "from-green-500/20 to-green-900/5"
  },
  {
    icon: <Microscope size={32} className="text-cyan-400" />,
    title: "Biotechnology",
    description: "Leverage biological systems to develop new products, therapies, and solutions.",
    jobs: "640K+ open roles",
    growth: "+15% by 2030",
    color: "from-cyan-500/20 to-cyan-900/5"
  },
  {
    icon: <Briefcase size={32} className="text-orange-400" />,
    title: "Product Management",
    description: "Sit at the intersection of business, technology, and design to guide product strategy.",
    jobs: "1.8M+ open roles",
    growth: "+19% by 2030",
    color: "from-orange-500/20 to-orange-900/5"
  }
];

export default function Pathways() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      <div className="absolute -left-40 top-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-40 bottom-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Explore diverse career <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">pathways</span>
          </h2>
          <p className="text-xl text-zinc-400">
            Discover fields that match your interests, skills, and values. Get a realistic look at what the day-to-day work actually involves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PATHWAYS.map((pathway, idx) => (
            <Link
              key={idx}
              href={`/whatcanibe/careers/${pathway.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="group relative rounded-2xl border border-zinc-800 bg-black p-8 hover:border-zinc-600 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${pathway.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="mb-6 p-4 bg-zinc-900 rounded-xl inline-block border border-zinc-800 group-hover:scale-110 transition-transform duration-300">
                  {pathway.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 flex items-center justify-between">
                  {pathway.title}
                  <ArrowUpRight className="text-zinc-500 group-hover:text-white transition-colors" />
                </h3>

                <p className="text-zinc-400 mb-8 line-clamp-2 group-hover:text-zinc-300 transition-colors">
                  {pathway.description}
                </p>

                <div className="flex items-center gap-4 text-sm font-medium">
                  <div className="bg-zinc-900 text-zinc-300 px-3 py-1.5 rounded-lg border border-zinc-800">
                    {pathway.jobs}
                  </div>
                  <div className="bg-emerald-500/10 text-emerald-400 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                    {pathway.growth}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 bg-white text-black font-semibold px-8 py-4 rounded-full hover:bg-zinc-200 hover:scale-105 transition-all duration-300">
            Take the career assessment <ArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
