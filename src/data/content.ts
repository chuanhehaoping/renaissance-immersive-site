import { GENERATED_IMAGES } from "./generatedImages";

export const HERO_CONTENT = {
  kicker: "Atelier Lunes — Anno MMXXVI",
  headline: ["Of Marble &", "Quiet Light."],
  lede:
    "A house of editorial craft, translating the cadence of the European Renaissance into a contemporary brand experience.",
  ctaLabel: "Enter the Gallery",
  scrollHint: "Scroll to begin the procession",
};

export const PHILOSOPHY_CONTENT = {
  intro:
    "We treat each surface, line and pause as we would a fresco — patiently. The work is to make modern objects feel like they were always here, beneath the dust of a quieter century.",
  paragraphs: [
    "Our practice begins where speed ends. Every composition is set out by hand: a wash of parchment, a hairline of gold, the gentle insistence of stone.",
    "We are a small atelier — sculptors of light, of paper, of code. The Renaissance taught us that proportion is mercy and restraint is luxury.",
    "What follows is a procession through eight rooms. Each room holds one idea. None of them shout.",
  ],
  pullQuote: "Restraint is the loudest thing we know how to make.",
  pullQuoteAttribution: "— Maestra of the Atelier, on opening day",
  image: GENERATED_IMAGES.philosophyTable,
};

export const COLLECTION_ITEMS = [
  {
    id: "i",
    roman: "I",
    title: "Lumen",
    medium: "Marble, glass, breath",
    note: "A pendant for the quiet weight of morning light.",
  },
  {
    id: "ii",
    roman: "II",
    title: "Argento",
    medium: "Silver leaf on linen",
    note: "A reflective study, the size of a held thought.",
  },
  {
    id: "iii",
    roman: "III",
    title: "Pergamena",
    medium: "Parchment, ink, time",
    note: "Bound in a fold no machine can fold.",
  },
  {
    id: "iv",
    roman: "IV",
    title: "Aurum",
    medium: "Gold leaf, marble dust",
    note: "Twenty-three carat, applied at dawn.",
  },
  {
    id: "v",
    roman: "V",
    title: "Sotto Voce",
    medium: "Stone, shadow, silence",
    note: "An object that prefers to be overlooked.",
  },
  {
    id: "vi",
    roman: "VI",
    title: "Diafano",
    medium: "Hand-blown glass, soft violet",
    note: "Transparent to the right kind of attention.",
  },
];

export const CRAFT_PHASES = [
  {
    no: "01",
    title: "Quarry",
    body: "Marble is chosen by ear — the block must answer the iron with a particular bright note.",
  },
  {
    no: "02",
    title: "Wash",
    body: "Parchment is prepared in three layers of warm size. The room must be still, the window open just so.",
  },
  {
    no: "03",
    title: "Leaf",
    body: "Gold is applied one breath at a time. Hurry destroys it. Twenty-three carat tolerates no impatience.",
  },
  {
    no: "04",
    title: "Setting",
    body: "Each object is placed under the spotlight and watched, sometimes for hours, before it is named.",
  },
];

export const EXPERIENCE_STAGES = [
  {
    no: "01",
    title: "The Antechamber",
    body: "You arrive. The light is high and unhurried. Nothing yet asks anything of you.",
  },
  {
    no: "02",
    title: "The Procession",
    body: "Each room is a chapter. The architecture does the work of pacing the eye.",
  },
  {
    no: "03",
    title: "The Annotation",
    body: "Look for the small mark — a Roman numeral the curator left for the patient.",
  },
];

export const TECHNOLOGY_NOTES = [
  {
    title: "WebGL with marble in mind",
    body:
      "A single Three.js scene threads every room. Camera moves replace cuts. Light, not chrome, carries the brand.",
  },
  {
    title: "GSAP as a slow conductor",
    body:
      "Scroll progress drives a master timeline — text, scene state, particles. The page reads like a score, not a stack.",
  },
  {
    title: "Quiet by default",
    body:
      "On reduced motion, the canvas holds its breath. On a small screen, it sketches instead of paints. Performance is etiquette.",
  },
];

export const GALLERY_ITEMS = [
  { image: GENERATED_IMAGES.galleryArchitecture, caption: "Sala dei Marmi — long exposure, no people." },
  { image: GENERATED_IMAGES.galleryPortraitA, caption: "Portrait, Annotation I — fabric and silence." },
  { image: GENERATED_IMAGES.galleryStillLife, caption: "Still Life with Terracotta and Glass." },
  { image: GENERATED_IMAGES.galleryPortraitB, caption: "Portrait, Annotation II — window light, blue hour." },
];

export const FINAL_CTA_CONTENT = {
  smallTitle: "Closing Room",
  headline: ["A Brighter", "Ceiling."],
  body:
    "If anything here held your attention longer than it had to, write to us. The atelier keeps a quiet correspondence.",
  primaryLabel: "Begin a Quiet Conversation",
  secondaryLabel: "Receive the Annotation",
};
