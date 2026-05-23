export type SectionKey =
  | "hero"
  | "philosophy"
  | "collection"
  | "craft"
  | "experience"
  | "technology"
  | "gallery"
  | "final-cta";

export type SectionMeta = {
  key: SectionKey;
  index: string;
  label: string;
  title: string;
  subtitle?: string;
  accent:
    | "gold"
    | "royal-blue"
    | "emerald"
    | "burgundy"
    | "antique-rose"
    | "terracotta"
    | "violet";
};

export const SECTIONS: SectionMeta[] = [
  {
    key: "hero",
    index: "I",
    label: "Atrium",
    title: "Of Marble & Quiet Light",
    subtitle: "An immersive editorial brand experience",
    accent: "gold",
  },
  {
    key: "philosophy",
    index: "II",
    label: "Philosophy",
    title: "Of Stillness and Intent",
    accent: "terracotta",
  },
  {
    key: "collection",
    index: "III",
    label: "Collection",
    title: "Twelve Quiet Studies",
    accent: "antique-rose",
  },
  {
    key: "craft",
    index: "IV",
    label: "Craft",
    title: "Gold, Linen, Patience",
    accent: "emerald",
  },
  {
    key: "experience",
    index: "V",
    label: "Experience",
    title: "The Curtain Parts",
    accent: "burgundy",
  },
  {
    key: "technology",
    index: "VI",
    label: "Technology",
    title: "Classical Forms, Modern Light",
    accent: "violet",
  },
  {
    key: "gallery",
    index: "VII",
    label: "Gallery",
    title: "Rooms Without End",
    accent: "royal-blue",
  },
  {
    key: "final-cta",
    index: "VIII",
    label: "Closing",
    title: "Toward a Brighter Ceiling",
    accent: "gold",
  },
];

export const SECTION_BY_KEY: Record<SectionKey, SectionMeta> = SECTIONS.reduce(
  (acc, s) => {
    acc[s.key] = s;
    return acc;
  },
  {} as Record<SectionKey, SectionMeta>,
);
