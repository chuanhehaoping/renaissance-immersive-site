# Design Direction

> Working title: **Renaissance Immersive Site**
> Status: provisional — points marked **要確認** need user sign-off before the visual locks.

---

## 1. Renaissance / European classical art direction

The site translates the language of European classical art into a modern, scroll-driven web experience. The viewer should feel they are stepping through the rooms of a private museum or palace gallery, with each section behaving like a curated exhibition room.

- Composition reads like Renaissance painting: strong central axis, deep perspective, soft directional light.
- Materiality references marble, plaster, parchment, gold leaf, oil canvas, linen, and aged glass.
- Pace is calm and ceremonial — long fades, slow camera moves, generous negative space — but interruptions of luminous motion keep the experience contemporary.
- Tone is bright and refined ("art catalogue editorial"), never gothic, religious, or somber.

---

## 2. What we borrow conceptually from Shopify Editions Winter 2026

Borrowed **only as direction**, never as assets, copy, layout, or 3D content.

- Treating the page as a layered stage: WebGL background canvas + HTML editorial layer that respond to a single scroll timeline.
- Pinned section "rooms" where camera/scene state advances while typography reveals.
- Editorial typographic hierarchy with oversized serif statements and quiet sans-serif support copy.
- The cadence of "story chapters" instead of a flat marketing scroll.
- The mix of tactile, material 3D imagery with crisp modern UI chrome.

## 3. What we explicitly do NOT copy from Shopify Editions Winter 2026

- No Shopify code, components, copy, image assets, 3D models, fonts, color tokens, gradients, or logos.
- No imitation of their hero composition, character art, palette, or motion timing curves.
- No "commerce showcase" framing. This site is a generic luxury / art / studio experience.
- No reuse of their section titles, microcopy, or button shapes.

## 4. No music festival framing

Per requirements, no festival, concert, lineup, ticketing, timetable, DJ, stage performance, crowd, or club elements anywhere in copy, imagery, or motion. The site reads as an immersive luxury / art / studio brand experience.

## 5. Reusable brand-agnostic structure

The site is built data-driven so the same shell can be re-skinned later for any luxury brand, creative studio, product launch, or art project:

- All copy lives in `src/data/*.ts` files (sections, philosophy entries, collection items, philosophy quotes, gallery items).
- All images are referenced through `src/data/generatedImages.ts` with `id`, `src`, `alt`, `aspect`, `priority`.
- Section components consume props; nothing about the host brand is hardcoded in JSX.
- Replacing the brand later is a content + palette swap, not a rebuild.

---

## 6. Color palette

### Base (背景・面)
| Token | Hex (provisional) | Use |
|---|---|---|
| `ivory` | `#F6F1E7` | dominant page base |
| `warm-white` | `#FBF8F1` | card / overlay |
| `parchment` | `#EFE3CC` | section transitions, texture |
| `marble-white` | `#F0EEEA` | canvas walls |
| `stone-gray` | `#C9C3B8` | rules, dividers |
| `pale-gold` | `#D9B873` | ornamental accent |

### Accent (差し色)
| Token | Hex (provisional) | Use |
|---|---|---|
| `gold` | `#B68A3D` | links, hover, hairline borders |
| `royal-blue` | `#2A3E78` | rare accent, Technology section |
| `emerald` | `#2D6A4F` | rare accent, Craft section |
| `burgundy` / `deep-wine` | `#5C1E2E` | rare accent, Final CTA |
| `antique-rose` | `#C68F8A` | warm accent, Gallery |
| `muted-terracotta` | `#B66B4F` | warm accent, Philosophy |
| `soft-violet` | `#7A6A8E` | technology / particle highlight |

**要確認 (palette):** 基本は ivory + warm white + pale gold で統一し、各セクションに1色だけアクセント (royal-blue, emerald, burgundy, terracotta, violet) を割り当てる方向。ワイン / ブルー / テラコッタを強めに入れるか、ほぼ白金で抑えるかは要決定。

## 7. Typography

- **Display / Heading:** Cormorant Garamond (or similar high-contrast classical serif). Used for section titles, hero statement, room names.
- **Body / UI:** Inter (or Geist Sans). Used for support copy, navigation, buttons, captions.
- **Captions / numbering:** Inter, uppercase, tracked +0.12em — "Exhibit 01 / Philosophy" style.
- Headlines are oversized with deliberate vertical rhythm; body copy stays small and readable.
- Section titles are styled like room labels in a museum (`I. PHILOSOPHY — Of Stillness and Light`).
- No decorative script fonts. Calligraphic feel comes from layout and material, not letterforms.

**要確認 (typography):** Display serif として Cormorant Garamond を仮採用。Playfair Display / EB Garamond / Cardo に変えるかは要決定。

## 8. Decorative motifs

Used sparingly so the page reads as modern and editorial, not ornamental:

- Hairline gold (1px) rules separating sections.
- Empty / open gold frames around feature images.
- Roman numerals as section indices.
- Subtle paper / marble noise overlays on backgrounds.
- Small arch or column silhouette motifs as section dividers.
- No heavy filigree, no crests, no heraldic shields.

## 9. WebGL / 3D expression

- Full-screen `<canvas>` mounted as a fixed background layer behind the HTML layer.
- One persistent Three.js scene driven by a master scroll timeline (GSAP ScrollTrigger feeding Lenis-synced scroll progress).
- Per-section "rooms" rendered as camera positions inside one continuous space, so transitions are camera moves, not scene swaps.
- Hero: large sculptural marble form with subtle rotation, plus drifting gold particles and a directional warm light.
- Mid sections: lighter passes — floating parchment / paper, archway depth, a slow-turning sculpture inset.
- Final CTA: upward camera tilt suggesting a luminous ceiling.
- Reduced motion: scene becomes a static rendered still or low-frame fade.
- Mobile fallback: low-poly sculpture + still particles, or replaces canvas with a static image and CSS parallax.

## 10. Image strategy

- All real imagery is generated externally with GPT-5.5 from prompts in [docs/image-prompts.md](image-prompts.md).
- Until images are dropped into `public/images/generated/`, the UI runs on tasteful procedural placeholders (gradient + texture + frame, matching the palette) so the site is presentable empty.
- Image metadata (`src`, `alt`, `aspect`, `priority`) is centralized in `src/data/generatedImages.ts` so swapping in real files is a one-line content update.
- Initial set is 18 images; structure supports expansion to 24+ without code changes.
- WebP/AVIF preferred. Hero image is `priority`. Everything else is lazy.
- See [docs/image-direction.md](image-direction.md) for purpose, sizing, and direction logic.

## 11. Animation language

- **Vocabulary:** "frame opens", "curtain parts", "we step into the painting", "sculpture turns toward us", "light enters from the side", "ceiling reveals". Avoid: hype zooms, glitch, neon flicker, parallax-bounce.
- **Pacing:** longer easings (1.2–1.8s on large elements). No quick pops.
- **Scroll:** Lenis for smooth scroll; GSAP ScrollTrigger drives section pins, scene state, and text reveals.
- **Text reveals:** line-by-line mask reveals on serif headlines; fade + slight rise for body copy.
- **UI hover:** thin gold underline grows from left; no scale bounces.
- **Reduced motion:** all scroll-pinned animation collapses to opacity-only fades, canvas freezes to a still frame.

---

## 12. Hidden interaction

One easter-egg clickable lives in the experience — e.g. a small Roman numeral or a faint frame in a non-obvious location. Clicking it opens a quiet "Annotation" modal (a curator's note + a small surprise particle burst). Implementation lives in `src/components/ui/HiddenClickable.tsx`.

## 13. Section map

| # | Section | Role | Hero motif |
|---|---|---|---|
| 1 | Hero | Door into the experience | Marble portal + gold dust |
| 2 | Philosophy | Brand thesis as wall text | Parchment table still life |
| 3 | Collection | Items as gallery exhibits | Empty frames + plinths |
| 4 | Craft | Material story | Gold-leaf macro / canvas |
| 5 | Experience | UX as stagecraft | Curtains opening |
| 6 | Technology | Classical × modern fusion | Sculpture orbited by glass lines |
| 7 | Gallery | Visual chapter | Portraits + still life + space |
| 8 | Final CTA | Quiet, elevated close | Celestial ceiling |

---

## 14. Confirmation points (ユーザー確認ポイント)

These were deliberately left provisional. Resolve before the visual locks; in the meantime the MVP runs on the suggested defaults.

1. **古典寄り / 現代寄りの比率** — Renaissance painterly weight vs. modern editorial restraint. Default: 60% painterly, 40% editorial.
2. **写実 vs. 抽象** — photoreal renaissance scenes vs. abstract material textures. Default: photoreal for Hero/Gallery, abstract for backgrounds.
3. **3D 使用量** — sculpture + particles + arches everywhere, or only Hero + Technology + Final CTA. Default: only those three carry full WebGL; mid-sections use lighter parallax.
4. **色味の振り方** — keep palette mostly ivory + pale gold + marble, or push warm accents (terracotta, burgundy) + cool accents (royal-blue, emerald) harder per section. Default: mostly ivory/gold, one accent per section.
5. **タイポグラフィ** — Cormorant Garamond as the display serif vs. Playfair / EB Garamond / Cardo. Default: Cormorant Garamond.
6. **音楽フェス要素** — confirmed removed from the brand framing (no festival, lineup, stages, tickets, timetable). Reconfirm so the copywriting can lock.
7. **転用先ブランド像** — luxury fashion house? creative studio? art collective? product launch? Default copy is intentionally brand-agnostic; final voice depends on this choice.
8. **画像方向性** — Direction A (museum luxury) / B (editorial catalogue) / C (classical × tech). Default: A as base, C only for Technology, B-style restraint applied to all UI typography.
9. **最新Web技術感の強さ** — do we go heavier on visible particles / glass UI, or keep tech invisible behind classical materials. Default: invisible — material first, tech as subtle orbital detail.

---

## 15. Out-of-scope guardrails

- No Shopify visual lift, copy lift, or 3D asset lift.
- No depiction of real public figures, brands, or famous works.
- No religious iconography as primary subject.
- No festival, club, neon, cyberpunk, horror, dark sci-fi treatments.
- No heavy decorative filigree that breaks legibility.
