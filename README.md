# Atelier Lunes — Renaissance Immersive Site

An editorial brand experience that translates the language of European classical art into a modern, scroll-driven web site. Built as a data-driven shell so the same architecture can be re-skinned later for any luxury brand, creative studio, product launch, or art project.

## Tech

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS 3**
- **Three.js** via **@react-three/fiber** + **@react-three/drei**
- **GSAP** + **ScrollTrigger**
- **Lenis** smooth scroll
- **Framer Motion**

## Docs

- [docs/design-direction.md](docs/design-direction.md) — palette, type, motifs, confirmation points
- [docs/image-direction.md](docs/image-direction.md) — image inventory, delivery rules
- [docs/image-prompts.md](docs/image-prompts.md) — 18 GPT-5.5 prompts (paste-ready)
- [docs/deploy.md](docs/deploy.md) — GitHub + Vercel steps

## Run

```bash
npm install
npm run dev    # http://localhost:3000
npm run build
npm run lint
```

The site is presentable empty — placeholder frames render before generated images arrive.

## Image pipeline

1. Generate the 18 images with GPT-5.5 using the prompts in [docs/image-prompts.md](docs/image-prompts.md).
2. Place them in `public/images/generated/` using the exact filenames listed there.
3. The data registry in `src/data/generatedImages.ts` automatically lights them up.

## Notes

- No Shopify assets, copy, or 3D content.
- No music festival framing — this is a generic luxury / art / studio shell.
- Respects `prefers-reduced-motion`; mobile downgrades the WebGL scene.
- Hidden curator's annotation lives inside the Technology section (look for a small "A").
