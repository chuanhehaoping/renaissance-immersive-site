# Image Direction

> Companion to [design-direction.md](design-direction.md). This file defines **what images we need, where they go, and the rules every prompt must respect.** The 18 ready-to-use prompts live in [image-prompts.md](image-prompts.md).

---

## 1. Generation pipeline

- Images are produced **externally with GPT-5.5**. Claude Code does not generate pixels.
- Prompts in [image-prompts.md](image-prompts.md) are designed to be pasted as-is into GPT-5.5.
- Generated files are placed under `public/images/generated/` using the filenames listed in that document.
- Metadata is registered in `src/data/generatedImages.ts`. The site reads only from this registry.
- Until a file exists on disk, the UI falls back to a tasteful gradient + texture placeholder that respects the palette and the target aspect ratio. The site is presentable empty.

## 2. Direction options (for review)

| Direction | Vibe | Pros | Cons |
|---|---|---|---|
| **A. Renaissance Museum Luxury** | Marble galleries, sculpture, frames, palace interiors | Closest to brief, strongest brand identity | Risk of feeling heavy if overused |
| **B. Editorial Art Catalogue** | Magazine spread, generous negative space, restrained typography-led visuals | Most practical for UI, highest legibility | Can feel under-art-directed without supporting visuals |
| **C. Classical Art × Modern Technology** | Sculpture + translucent geometry + gold particles | Showcases the modern Web tech angle | Easy to drift into sci-fi if not carefully directed |

**Recommended blend (default until user confirms otherwise):**

- **Direction A** as the base style for Hero, Philosophy, Collection, Craft, Experience, Gallery, Final CTA.
- **Direction C** mixed into Technology section only.
- **Direction B** governs UI layout discipline (whitespace, type sizing) across all sections.

## 3. Universal rules every prompt enforces

Bake into every prompt:

- Renaissance-inspired, European classical art reference, museum-like serenity.
- Editorial photography quality, art catalogue feel, modern luxury brand atmosphere.
- Bright, sophisticated color grading. No dark / horror / cyberpunk treatments.
- Composition leaves intentional negative space for overlay typography.
- Original work — no replicas of famous paintings, sculptures, buildings, or people.
- No text, no logos, no UI elements, no Shopify elements, no copyrighted characters.
- No music festival, concert, DJ, stage performance, crowd, or club imagery.
- Respect the project palette (ivory, warm white, parchment beige, pale gold, marble white, stone gray, antique rose, muted terracotta, royal blue, soft violet).

## 4. Universal negative prompt

> `no text, no logo, no watermark, no Shopify, no existing brand identity, no copyrighted character, no direct replica of famous paintings, no direct replica of famous sculptures, no unreadable typography, no UI screenshots, no music festival, no concert, no DJ, no stage performance, no audience crowd, no neon club, no cyberpunk, no dark horror, no distorted hands, no extra fingers, no religious iconography as the main subject`

Each individual prompt also carries a tailored `negativePrompt` block. Use both.

## 5. Image inventory (18 images, MVP set)

Filenames are referenced by `src/data/generatedImages.ts` and consumed by `src/components/sections/*`. Aspect ratios are chosen so each image has a clear safe-area for overlays.

| # | File | Section | Purpose | Aspect | Size |
|---|---|---|---|---|---|
| 1 | `hero-renaissance-portal.webp` | Hero | Background plate behind hero headline | 3:2 | 2400×1600 |
| 2 | `hero-marble-sculpture.webp` | Hero | Sculpture reference / R3F texture source | 4:5 | 1600×2000 |
| 3 | `philosophy-parchment-table.webp` | Philosophy | Section background, atelier still life | 10:7 | 2000×1400 |
| 4 | `philosophy-gallery-light.webp` | Philosophy | Supporting interior | 10:7 | 2000×1400 |
| 5 | `collection-framed-artifacts.webp` | Collection | Section background — frame wall | 5:4 | 2000×1600 |
| 6 | `collection-object-plinth.webp` | Collection | Feature card hero object | 4:5 | 1600×2000 |
| 7 | `craft-gold-leaf-detail.webp` | Craft | Macro craft detail | 10:7 | 2000×1400 |
| 8 | `craft-oil-canvas.webp` | Craft | Painterly background | 10:7 | 2000×1400 |
| 9 | `experience-curtain-transition.webp` | Experience | Section transition plate | 3:2 | 2400×1600 |
| 10 | `experience-archway-depth.webp` | Experience | Perspective corridor | 3:2 | 2400×1600 |
| 11 | `technology-classical-modern.webp` | Technology | Hero of fusion concept | 10:7 | 2000×1400 |
| 12 | `technology-webgl-particles.webp` | Technology | Particle / glass reference | 10:7 | 2000×1400 |
| 13 | `gallery-portrait-01.webp` | Gallery | Portrait variant A | 4:5 | 1600×2000 |
| 14 | `gallery-portrait-02.webp` | Gallery | Portrait variant B | 4:5 | 1600×2000 |
| 15 | `gallery-still-life-01.webp` | Gallery | Still life | 5:4 | 2000×1600 |
| 16 | `gallery-architecture-01.webp` | Gallery | Architectural scale | 3:2 | 2400×1600 |
| 17 | `final-cta-celestial-ceiling.webp` | Final CTA | Closing background | 3:2 | 2400×1600 |
| 18 | `background-parchment-marble.webp` | Universal | Reusable texture | 1:1 | 2000×2000 |

## 6. Delivery & encoding rules

- **Format:** export as `.webp` (or `.avif`). Keep the original PNG/JPEG safety copies outside the repo.
- **Color profile:** sRGB.
- **Quality target:** ≤ 350 KB per image after WebP encoding; hero allowed up to 600 KB.
- **Naming:** preserve filenames exactly as listed — the data registry references them by name.
- **Resolution:** ship at listed size; generate one `@1x` plus optional `@2x` for hero only.
- **Alt text:** see `src/data/generatedImages.ts` — every image has a curatorial description, not "image of...".

## 7. Mobile fallback

- Hero on mobile uses a lower-res variant (e.g. `hero-renaissance-portal-sm.webp`, 1200×800) — the data registry has a `mobileSrc` slot for this.
- WebGL scenes downshift to: lower DPR, simpler material, fewer particles, or replace canvas with a static still of the corresponding image.

## 8. Confirmation points (要確認)

Before triggering the 18-image generation run with GPT-5.5, please confirm:

1. **Direction blend** — Default A + C-on-Technology + B-for-UI. Or shift toward pure A, or push C harder across the site?
2. **Portrait inclusion** — Two portraits in Gallery (#13, #14). Keep, or drop in favor of pure architecture / still life to avoid AI-portrait quality risk?
3. **Color emphasis** — Should the warm accents (terracotta, antique rose, deep wine) feature noticeably, or is the palette mostly ivory + pale gold + marble + a single accent per section?
4. **Image count** — Ship MVP on 18 images, then expand to 24+ later? Or attempt 24 from the start?
5. **Logo / wordmark image** — Currently not included. Do we want a separate ornamental wordmark / monogram prompt?
6. **Final CTA imagery** — Celestial ceiling (#17) — keep abstract fresco-like, or shift to a calm exterior facade / sky shot?
