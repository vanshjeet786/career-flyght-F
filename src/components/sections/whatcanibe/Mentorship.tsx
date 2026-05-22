import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const MENTORS = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "AI Research Scientist",
    company: "TechNexus",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 124,
    tags: ["Machine Learning", "Ph.D Path", "Research"]
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Senior Software Engineer",
    company: "CloudFlow",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 89,
    tags: ["Frontend", "Career Transition", "Startups"]
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Product Design Lead",
    company: "CreativeSpace",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    rating: 5.0,
    reviews: 215,
    tags: ["UX/UI", "Portfolio Review", "Leadership"]
  }
];

export default function Mentorship() {
  return (
    <section className="py-24 bg-black border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              Learn from those who&apos;ve <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">been there</span>.
            </h2>
            <p className="text-xl text-zinc-400">
              Connect with industry professionals who can guide you through the realities of their careers, review your portfolio, and help you land your first role.
            </p>
          </div>
          <Link
            href="/whatcanibe/mentors"
            className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors font-medium whitespace-nowrap"
          >
            Browse all mentors <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MENTORS.map((mentor) => (
            <div key={mentor.id} className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden hover:border-purple-500/50 transition-colors">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md rounded-full px-3 py-1 flex items-center gap-1 border border-zinc-700">
                  <Star size={14} className="fill-yellow-500 text-yellow-500" />
                  <span className="text-sm font-medium text-white">{mentor.rating}</span>
                  <span className="text-xs text-zinc-400">({mentor.reviews})</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{mentor.name}</h3>
                <p className="text-zinc-400 text-sm mb-4">{mentor.role} at <span className="text-zinc-300 font-medium">{mentor.company}</span></p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {mentor.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2 py-1 rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-colors">
                  Book a session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
