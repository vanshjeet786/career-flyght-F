"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { prototypes, sections, type Prototype, type PrototypeSection } from "@/lib/prototypes/data";

export default function PrototypeExperience({ conceptSlug, page }: { conceptSlug: string; page: PrototypeSection }) {
  const prototype = useMemo(() => prototypes.find((p) => p.slug === conceptSlug), [conceptSlug]);
  const [activeFeature, setActiveFeature] = useState(0);
  const [intensity, setIntensity] = useState(65);

  if (!prototype) return <div className="p-8">Prototype not found.</div>;

  return (
    <main className="min-h-screen p-6 md:p-10" style={{ background: `linear-gradient(130deg, ${prototype.palette[0]}, ${prototype.palette[1]})`, color: prototype.palette[3] }}>
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/20 bg-black/20 p-6 backdrop-blur-md md:p-10">
        <p className="text-sm uppercase tracking-[0.2em] opacity-80">CareerFlyght Prototype · {page}</p>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">{prototype.name}</h1>
        <p className="mt-4 max-w-3xl text-sm md:text-base opacity-90">{prototype.concept}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {sections.map((section) => (
            <Link key={section} href={`/prototypes/${prototype.slug}/${section}`} className={`rounded-full border px-4 py-2 text-sm transition ${page === section ? "bg-white text-black" : "border-white/40 hover:bg-white/10"}`}>
              {section}
            </Link>
          ))}
        </div>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/25 p-5">
            <h2 className="text-xl font-medium">Design DNA</h2>
            <ul className="mt-3 space-y-2 text-sm opacity-90">
              <li><strong>Palette:</strong> {prototype.palette.join(" · ")}</li>
              <li><strong>Font Mood:</strong> {prototype.fontMood}</li>
              <li><strong>Spacing:</strong> {prototype.spacing}</li>
              <li><strong>Interaction Level:</strong> {prototype.interactionLevel}</li>
              <li><strong>Template Type:</strong> {prototype.saasTemplate ? "SaaS template" : "Experimental concept"}</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/25 p-5">
            <h2 className="text-xl font-medium">Interactive Intensity</h2>
            <input className="mt-4 w-full" type="range" min={20} max={100} value={intensity} onChange={(e) => setIntensity(Number(e.target.value))} />
            <p className="mt-2 text-sm">Intensity: {intensity}% · Great for comparing animation energy across concepts.</p>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-white/25 p-5">
          <h2 className="text-xl font-medium">Feature Playground</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {prototype.features.map((feature, index) => (
              <button key={feature} onClick={() => setActiveFeature(index)} className={`rounded-lg px-3 py-2 text-sm transition ${activeFeature === index ? "bg-white text-black" : "bg-white/10 hover:bg-white/20"}`}>
                {feature}
              </button>
            ))}
          </div>
          <p className="mt-4 text-sm">Active interaction: <strong>{prototype.features[activeFeature]}</strong></p>
          <p className="mt-2 text-sm opacity-90">Inspiration signals: {prototype.inspiration.join(" · ")}.</p>
        </section>
      </div>
    </main>
  );
}

export function getPrototypeOrNull(slug: string): Prototype | undefined {
  return prototypes.find((p) => p.slug === slug);
}
