import { createClient } from "@/utils/supabase/server";
import { prototypes } from "@/lib/prototypes/data";
import Link from "next/link";
import { ArrowRight, LogIn, LayoutDashboard, Palette } from "lucide-react";

export default async function Home() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white/80 mb-8 backdrop-blur-md">
            <Palette className="w-4 h-4" />
            <span>UI/UX Exploration Gallery</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight font-heading bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-8">
            CareerFlyght
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            Exploring {prototypes.length} distinct creative directions for the future of career coaching interfaces.
          </p>

          <div className="mt-12 flex items-center justify-center gap-4">
            {user ? (
               <div className="flex flex-col items-center gap-4">
                 <p className="text-white/60 text-sm">Logged in as {user.email}</p>
                 <div className="flex gap-4">
                  <Link href="/admin" className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-colors flex items-center gap-2">
                    <LayoutDashboard className="w-4 h-4" />
                    Admin
                  </Link>
                  <Link href="/ninthbox" className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-colors flex items-center gap-2">
                    Ninthbox
                  </Link>
                  <Link href="/whatcanibe" className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-colors flex items-center gap-2">
                    What can I be
                  </Link>
                 </div>
               </div>
            ) : (
              <Link href="/login" className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-colors flex items-center gap-2 group">
                <LogIn className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Sign In
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Prototypes Grid Section */}
      <section className="py-24 px-6 relative z-10 border-t border-white/10 bg-black/50 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-4">Prototypes Gallery</h2>
              <p className="text-white/60 max-w-xl text-lg">
                Select a concept below to explore its distinct visual language and interaction model across Home, Dashboard, Pricing, and Profile views.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prototypes.map((prototype) => (
              <Link
                key={prototype.slug}
                href={`/prototypes/${prototype.slug}/home`}
                className="group relative flex flex-col justify-between p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
              >
                {/* Background Glow matching palette */}
                <div
                  className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                  style={{ backgroundColor: prototype.palette[1] }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    {prototype.saasTemplate ? (
                      <span className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider border border-blue-500/20">
                        SaaS Shell
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-400 text-xs font-semibold uppercase tracking-wider border border-purple-500/20">
                        Creative
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-heading font-semibold mb-3 group-hover:text-white transition-colors">
                    {prototype.name}
                  </h3>
                  <p className="text-white/60 text-sm mb-8 line-clamp-3 leading-relaxed">
                    {prototype.concept}
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                  <div className="flex gap-1.5">
                    {prototype.palette.slice(0, 4).map((color, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 rounded-full border border-white/20 shadow-sm"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                  <div className="flex items-center text-sm font-medium text-white/50 group-hover:text-white transition-colors gap-2">
                    Explore
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
