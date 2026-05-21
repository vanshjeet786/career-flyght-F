import Link from "next/link";
import { prototypes } from "@/lib/prototypes/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold">CareerFlyght UI/UX Prototype Gallery</h1>
        <p className="mt-3 text-white/80">10 creative directions × 4 interconnected pages each (Home, Dashboard, Pricing, Profile).</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {prototypes.map((p) => (
            <Link key={p.slug} href={`/prototypes/${p.slug}/home`} className="rounded-2xl border border-white/20 bg-white/5 p-5 hover:bg-white/10">
              <p className="text-xl font-semibold">{p.name}</p>
              <p className="mt-1 text-sm text-white/80">{p.saasTemplate ? "SaaS Template" : "Creative Concept"}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
