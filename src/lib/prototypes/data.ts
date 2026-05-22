export type PrototypeSection = "home" | "dashboard" | "pricing" | "profile";

export type Prototype = {
  slug: string;
  name: string;
  saasTemplate: boolean;
  palette: string[];
  fontMood: string;
  spacing: string;
  interactionLevel: "minimal" | "moderate" | "rich";
  inspiration: string[];
  concept: string;
  features: string[];
};

export const sections: PrototypeSection[] = ["home", "dashboard", "pricing", "profile"];

export const prototypes: Prototype[] = [
  { slug: "aurora-saas", name: "Aurora SaaS", saasTemplate: true, palette: ["#101828", "#7F56D9", "#12B76A", "#F9FAFB"], fontMood: "Geometric sans + mono metrics", spacing: "12-column airy layout with generous card gutters", interactionLevel: "moderate", inspiration: ["shadcn/ui patterns", "lucide icon rhythm", "SWR realtime hints"], concept: "A high-trust coaching SaaS shell with strong hierarchy and KPI-first layout.", features: ["Animated KPI counters", "Progress donut hover states", "Sticky conversion CTA", "Session timeline filters"] },
  { slug: "command-center", name: "Command Center SaaS", saasTemplate: true, palette: ["#0B1220", "#06B6D4", "#F59E0B", "#E2E8F0"], fontMood: "Neo-grotesk with compact tables", spacing: "Dense enterprise grid with adaptive whitespace", interactionLevel: "rich", inspiration: ["Admin dashboard ergonomics", "SWR polling cards", "Lucide status badges"], concept: "Operational cockpit for mentors, learners, and admins.", features: ["Kanban drag simulation", "Live status feed", "Role-switch segmented control", "Data table sort toggles"] },
  { slug: "glassmorphism-lounge", name: "Glassmorphism Lounge", saasTemplate: false, palette: ["#09122C", "#BE185D", "#67E8F9", "#FDF2F8"], fontMood: "Soft rounded sans with elegant headings", spacing: "Large vertical rhythm and floating panel spacing", interactionLevel: "rich", inspiration: ["Experimental frontend galleries", "Backdrop blur microdepth", "Gradient mesh artboards"], concept: "Immersive and dreamy career discovery lounge.", features: ["Mouse-reactive gradient blobs", "Frosted cards", "Animated persona chips", "Micro-quiz reveal"] },
  { slug: "editorial-atlas", name: "Editorial Atlas", saasTemplate: false, palette: ["#111111", "#F4EBD0", "#C2410C", "#3F3F46"], fontMood: "Serif headlines + humanist sans body", spacing: "Magazine-like margins and asymmetrical columns", interactionLevel: "moderate", inspiration: ["Narrative scroll experiences", "Content-first typography", "Contextual iconography"], concept: "Story-driven coaching experience with premium editorial tone.", features: ["Scrollytelling milestones", "Audio-tip toggles", "Expandable case studies", "Pathway annotation tags"] },
  { slug: "neobrutalist-pulse", name: "Neo Brutalist Pulse", saasTemplate: false, palette: ["#000000", "#FDE047", "#FB7185", "#FFFFFF"], fontMood: "Bold grotesk with oversized labels", spacing: "Blocky modules and assertive negative space", interactionLevel: "rich", inspiration: ["Playful frontend experiments", "Hard-outline card language", "Expressive interaction loops"], concept: "Confidence-first interface for decisive career moves.", features: ["Snap hover offsets", "Sticker-style badges", "Question roulette", "3-step action rails"] },
  { slug: "career-galaxy", name: "Career Galaxy", saasTemplate: false, palette: ["#020617", "#38BDF8", "#A78BFA", "#E0F2FE"], fontMood: "Futurist sans with high legibility", spacing: "Radial sections with breathing room", interactionLevel: "rich", inspiration: ["Space-map navigation concepts", "Node-link visual systems", "Data constellations"], concept: "Users navigate career paths as constellations of skills and goals.", features: ["Constellation map board", "Orbiting goal chips", "Path simulation slider", "Skill gravity meter"] },
  { slug: "zen-dojo", name: "Zen Dojo", saasTemplate: false, palette: ["#052E2B", "#84CC16", "#F1F5F9", "#14532D"], fontMood: "Minimal sans with calm typographic scale", spacing: "Whitespace-heavy meditative rhythm", interactionLevel: "minimal", inspiration: ["Mindful product interfaces", "Low-cognitive-load forms", "Focused coaching sessions"], concept: "Calm, distraction-free coaching environment for reflective planning.", features: ["Breathing animation header", "Single-task cards", "Ritual check-ins", "Silent mode theme"] },
  { slug: "career-arcade", name: "Career Arcade", saasTemplate: false, palette: ["#0F172A", "#22D3EE", "#F97316", "#F8FAFC"], fontMood: "Arcade-tech with pixel accents", spacing: "Card clusters with playful offsets", interactionLevel: "rich", inspiration: ["Gamified UX loops", "Achievement systems", "Interactive challenge boards"], concept: "Gamified coaching that turns milestones into playable challenges.", features: ["XP progress meter", "Badge unlock animation", "Weekly quest cards", "Mentor boss-level sessions"] },
  { slug: "craft-atelier", name: "Craft Atelier", saasTemplate: false, palette: ["#1C1917", "#D97706", "#FED7AA", "#FAFAF9"], fontMood: "Refined serif with workshop notes sans", spacing: "Crafted modular rhythm and tactile separators", interactionLevel: "moderate", inspiration: ["Portfolio storytelling", "Workshop moodboards", "Material texture overlays"], concept: "Handcrafted journey builder for creative professionals.", features: ["Moodboard uploads", "Milestone scrapbook", "Mentor notes drawer", "Portfolio path cards"] },
  { slug: "civic-lab", name: "Civic Lab", saasTemplate: false, palette: ["#082F49", "#0EA5E9", "#FACC15", "#E0F2FE"], fontMood: "Institutional sans with high-accessibility sizing", spacing: "Clear section dividers and civic-grade readability", interactionLevel: "moderate", inspiration: ["Public service UX clarity", "Accessibility-forward design", "Trust-centric data visuals"], concept: "Community-focused career platform for equitable opportunity mapping.", features: ["Accessibility controls", "Opportunity heatmap", "Community cohorts", "Scholarship alert ticker"] }
];

export function getPrototypeOrNull(slug: string): Prototype | undefined {
  return prototypes.find((p) => p.slug === slug);
}
