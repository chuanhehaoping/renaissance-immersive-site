export type GeneratedImage = {
  id: string;
  src: string;
  mobileSrc?: string;
  alt: string;
  aspect: string;
  width: number;
  height: number;
  priority?: boolean;
  section: string;
};

const BASE = "/images/generated/";

export const GENERATED_IMAGES: Record<string, GeneratedImage> = {
  heroPortal: {
    id: "hero-renaissance-portal",
    src: `${BASE}hero-renaissance-portal.webp`,
    alt: "A bright palace gallery with marble arches, sheer curtains, and gold dust suspended in soft daylight.",
    aspect: "3 / 2",
    width: 2400,
    height: 1600,
    priority: true,
    section: "hero",
  },
  heroSculpture: {
    id: "hero-marble-sculpture",
    src: `${BASE}hero-marble-sculpture.webp`,
    alt: "An abstract marble figure draped in light, edged with traces of gold leaf.",
    aspect: "4 / 5",
    width: 1600,
    height: 2000,
    section: "hero",
  },
  philosophyTable: {
    id: "philosophy-parchment-table",
    src: `${BASE}philosophy-parchment-table.webp`,
    alt: "A wooden atelier table layered with parchment, linen, gold leaf fragments, and a glass vessel.",
    aspect: "10 / 7",
    width: 2000,
    height: 1400,
    section: "philosophy",
  },
  philosophyGallery: {
    id: "philosophy-gallery-light",
    src: `${BASE}philosophy-gallery-light.webp`,
    alt: "A quiet museum gallery before opening, soft daylight on ivory walls.",
    aspect: "10 / 7",
    width: 2000,
    height: 1400,
    section: "philosophy",
  },
  collectionWall: {
    id: "collection-framed-artifacts",
    src: `${BASE}collection-framed-artifacts.webp`,
    alt: "An ivory wall of empty gold frames above marble plinths.",
    aspect: "5 / 4",
    width: 2000,
    height: 1600,
    section: "collection",
  },
  collectionObject: {
    id: "collection-object-plinth",
    src: `${BASE}collection-object-plinth.webp`,
    alt: "An abstract sculptural object resting on a marble plinth under a museum spotlight.",
    aspect: "4 / 5",
    width: 1600,
    height: 2000,
    section: "collection",
  },
  craftGold: {
    id: "craft-gold-leaf-detail",
    src: `${BASE}craft-gold-leaf-detail.webp`,
    alt: "Macro view of gold leaf being brushed onto parchment and plaster.",
    aspect: "10 / 7",
    width: 2000,
    height: 1400,
    section: "craft",
  },
  craftCanvas: {
    id: "craft-oil-canvas",
    src: `${BASE}craft-oil-canvas.webp`,
    alt: "An abstract oil-painted canvas with warm Renaissance harmonies.",
    aspect: "10 / 7",
    width: 2000,
    height: 1400,
    section: "craft",
  },
  experienceCurtain: {
    id: "experience-curtain-transition",
    src: `${BASE}experience-curtain-transition.webp`,
    alt: "Translucent curtains parting in a marble palace hall.",
    aspect: "3 / 2",
    width: 2400,
    height: 1600,
    section: "experience",
  },
  experienceArch: {
    id: "experience-archway-depth",
    src: `${BASE}experience-archway-depth.webp`,
    alt: "A receding corridor of marble archways opening into bright light.",
    aspect: "3 / 2",
    width: 2400,
    height: 1600,
    section: "experience",
  },
  technologyFusion: {
    id: "technology-classical-modern",
    src: `${BASE}technology-classical-modern.webp`,
    alt: "A marble sculpture orbited by translucent geometric lines and gold particles.",
    aspect: "10 / 7",
    width: 2000,
    height: 1400,
    section: "technology",
  },
  technologyParticles: {
    id: "technology-webgl-particles",
    src: `${BASE}technology-webgl-particles.webp`,
    alt: "Gold leaf particles and glass ribbons drifting through a marble gallery.",
    aspect: "10 / 7",
    width: 2000,
    height: 1400,
    section: "technology",
  },
  galleryPortraitA: {
    id: "gallery-portrait-01",
    src: `${BASE}gallery-portrait-01.webp`,
    alt: "An editorial portrait of an unnamed figure draped in modern fabric, lit like a Renaissance painting.",
    aspect: "4 / 5",
    width: 1600,
    height: 2000,
    section: "gallery",
  },
  galleryPortraitB: {
    id: "gallery-portrait-02",
    src: `${BASE}gallery-portrait-02.webp`,
    alt: "A composed contemporary figure in a marble gallery, daylight from a tall window.",
    aspect: "4 / 5",
    width: 1600,
    height: 2000,
    section: "gallery",
  },
  galleryStillLife: {
    id: "gallery-still-life-01",
    src: `${BASE}gallery-still-life-01.webp`,
    alt: "A still life of marble fragments, parchment, gold leaf, and terracotta flowers.",
    aspect: "5 / 4",
    width: 2000,
    height: 1600,
    section: "gallery",
  },
  galleryArchitecture: {
    id: "gallery-architecture-01",
    src: `${BASE}gallery-architecture-01.webp`,
    alt: "A grand minimal palace interior, columns and arched ceilings in soft daylight.",
    aspect: "3 / 2",
    width: 2400,
    height: 1600,
    section: "gallery",
  },
  finalCeiling: {
    id: "final-cta-celestial-ceiling",
    src: `${BASE}final-cta-celestial-ceiling.webp`,
    alt: "A luminous abstract ceiling fresco with pale gold ornamentation and soft sky.",
    aspect: "3 / 2",
    width: 2400,
    height: 1600,
    section: "final-cta",
  },
  backgroundTexture: {
    id: "background-parchment-marble",
    src: `${BASE}background-parchment-marble.webp`,
    alt: "Seamless background of parchment, marble veining, and gold leaf dust.",
    aspect: "1 / 1",
    width: 2000,
    height: 2000,
    section: "universal",
  },
};

export const IMAGE_LIST = Object.values(GENERATED_IMAGES);
