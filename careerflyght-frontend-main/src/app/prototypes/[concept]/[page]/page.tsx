import { notFound } from "next/navigation";
import PrototypeExperience from "@/components/prototypes/PrototypeExperience";
import { prototypes, sections, type PrototypeSection, getPrototypeOrNull } from "@/lib/prototypes/data";

export function generateStaticParams() {
  return prototypes.flatMap((prototype) =>
    sections.map((section) => ({ concept: prototype.slug, page: section }))
  );
}

export default async function PrototypePage({ params }: { params: Promise<{ concept: string; page: string }> }) {
  const { concept, page } = await params;
  const section = page as PrototypeSection;

  if (!getPrototypeOrNull(concept) || !sections.includes(section)) {
    notFound();
  }

  return <PrototypeExperience conceptSlug={concept} page={section} />;
}
