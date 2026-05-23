# Image Prompts

These prompts are designed to be pasted into GPT-5.5 (or any high-end image model) as-is. Files generated from these prompts go into `public/images/generated/` using the exact filenames in the section headings, and are referenced by `src/data/generatedImages.ts`.

Read [image-direction.md](image-direction.md) for the inventory table, delivery rules, and direction blend rationale.

---

## Direction options (review before generating)

**Direction A: Renaissance Museum Luxury**
- 美術館、宮殿、彫刻、額縁、大理石中心
- 最も今回の方向性に近い

**Direction B: Editorial Art Catalogue**
- 雑誌、展覧会カタログ、余白、タイポグラフィ中心
- Webサイトとして洗練され、実用性が高い

**Direction C: Classical Art × Modern Technology**
- 古典美術にWebGL、粒子、透明UI、現代技術感を融合
- 最新Web技術感が最も強い

**今回の推奨:**
- Direction A を基本にする。
- Technologyセクションのみ Direction C を混ぜる。
- UI全体は Direction B のように余白と可読性を重視する。

---

## 1. hero-renaissance-portal.webp

useCase:
Heroメインビジュアル。ファーストビュー全体の背景として使用する。中央または左側に大きなテキストを重ねられる余白を確保する。

aspectRatio:
3:2

size:
2400x1600

generationPrompt:
Create a breathtaking original Renaissance-inspired hero image for a luxury immersive website. The scene is set inside a bright European palace gallery with grand marble arches, ivory stone walls, pale gold ornamentation, tall windows, and soft sunlight entering from the upper left. In the center distance, create an abstract luminous portal-like architectural opening, not science fiction, but elegant and classical, as if the viewer is entering a museum of future craftsmanship. Include flowing sheer curtains, subtle floating gold dust, polished marble floors, and soft atmospheric depth. The composition should feel majestic, calm, refined, and editorial, with generous negative space in the center-left area for large website typography. Blend Renaissance art direction, European classical architecture, museum serenity, and modern luxury brand aesthetics. Use bright ivory, warm white, parchment beige, pale gold, soft blue, and marble gray. Ultra detailed, cinematic, photorealistic, high-end editorial composition, no text, no logo.

negativePrompt:
no text, no logo, no watermark, no Shopify, no existing brand identity, no copyrighted character, no direct replica of famous paintings, no music festival, no concert, no DJ, no neon club, no cyberpunk, no dark horror

---

## 2. hero-marble-sculpture.webp

useCase:
Hero内の主役ビジュアル、またはThree.js / WebGLで再現する彫刻オブジェクトの参照画像。

aspectRatio:
4:5

size:
1600x2000

generationPrompt:
Create an original marble sculpture inspired by European classical art, designed for a luxury Renaissance-inspired website. The sculpture should feel graceful, abstract, and timeless, not based on any real historical statue. Use a human-like but non-identifiable form with elegant drapery, soft curves, and subtle gold leaf accents along selected edges. Place it in a bright museum gallery with ivory marble walls, pale gold architectural details, and diffused natural light. The sculpture should stand slightly off-center, leaving clean negative space around it for web layout flexibility. The material must show refined marble veining, gentle imperfections, and handcrafted texture. The mood is serene, elevated, artistic, and quietly overwhelming. Use an editorial photography approach with shallow depth of field, soft highlights, and a premium art catalogue feeling. Color palette: marble white, ivory, pale gold, parchment beige, and faint warm gray. No text, no logo, no famous statue replica.

negativePrompt:
no text, no logo, no watermark, no Shopify, no existing brand identity, no famous statue replica, no distorted body, no extra limbs, no horror, no dark religious scene, no music festival

---

## 3. philosophy-parchment-table.webp

useCase:
Philosophyセクション背景。思想、哲学、ブランド美学を語る箇所に使用する。

aspectRatio:
10:7

size:
2000x1400

generationPrompt:
Create a refined Renaissance atelier still life for a philosophy section of a luxury website. The image should show a large wooden artist table covered with layered parchment papers, soft linen cloth, fragments of gold leaf, a fountain pen, abstract sketches, marble samples, and a small glass vessel. The papers must not contain readable text. The composition should feel intentional, spacious, and editorial, with negative space in the upper right area for website copy. Use warm natural daylight from a nearby window, creating soft shadows and subtle highlights on parchment, linen, metal, and marble. The atmosphere should suggest careful thought, craft, and artistic discipline without becoming cluttered. Color palette: warm ivory, parchment beige, pale gold, stone gray, antique rose, and soft brown. The image should feel like a high-end art catalogue photograph, elegant, bright, quiet, and sophisticated. No text, no logo, no brand elements.

negativePrompt:
no readable text, no logo, no watermark, no Shopify, no existing brand identity, no messy desk, no modern office clutter, no laptop, no music festival, no concert, no cyberpunk

---

## 4. philosophy-gallery-light.webp

useCase:
Philosophyセクションの補助ビジュアル。美術館的な空気感を出す。

aspectRatio:
10:7

size:
2000x1400

generationPrompt:
Create a quiet European museum gallery filled with soft natural light for a luxury editorial website. The space should have marble floors, tall arched windows, pale stone walls, and a few abstract framed artworks that contain no recognizable imagery or text. The gallery should feel classical, spacious, and calm, with elegant symmetry and refined architectural proportions. Use bright ivory and warm white tones, with subtle pale gold accents on frames and architectural details. The composition should leave a wide open area on one side for overlay text. The image must feel like a museum before opening hours: serene, polished, intelligent, and timeless. Avoid crowded details and keep the atmosphere minimal but luxurious. Use architectural photography style, soft depth, clean perspective lines, and natural sunlight. The result should support a brand philosophy section, not distract from it. No text, no logo, no existing brand references.

negativePrompt:
no text, no logo, no watermark, no Shopify, no famous paintings, no crowded museum, no tourists, no dark hallway, no music festival, no concert, no DJ, no neon

---

## 5. collection-framed-artifacts.webp

useCase:
Collectionセクション背景。商品、作品、機能、サービスを展示品のように見せるために使用する。

aspectRatio:
5:4

size:
2000x1600

generationPrompt:
Create an elegant Renaissance-inspired collection wall for a luxury brand website. The scene should feature several ornate empty gold frames arranged on an ivory gallery wall, with minimal modern marble plinths placed below them. The frames should vary subtly in size and ornamentation, but remain refined rather than excessive. Add soft natural light, gentle shadows, polished marble flooring, and pale gold details. The image should feel like an art exhibition where digital content or product cards will later be placed over the composition. Leave clean negative space inside some frames and around the center area for website overlays. Blend classical European gallery aesthetics with contemporary minimalism. The mood should be bright, curated, sophisticated, and editorial. Use ivory, warm white, pale gold, stone gray, and soft beige. No artwork inside the frames, no readable text, no logo, no brand references.

negativePrompt:
no text, no logo, no watermark, no Shopify, no famous painting replicas, no crowded gallery, no people, no music festival, no neon, no cyberpunk

---

## 6. collection-object-plinth.webp

useCase:
Collection内の展示品カード、または主役オブジェクトとして使用する。

aspectRatio:
4:5

size:
1600x2000

generationPrompt:
Create an original luxury object displayed on a marble plinth, designed for a Renaissance-inspired collection section. The object should be abstract and sculptural, not a real product, not a known artwork, and not a recognizable brand item. It may combine smooth marble, translucent glass, brushed metal, and delicate gold leaf accents. Place it inside a bright European gallery with ivory walls and soft architectural shadows. The object should feel precious, handcrafted, and futuristic in a very subtle way, while remaining rooted in classical craftsmanship. Use a vertical editorial product photography composition with the object slightly below center and enough empty space above for website typography. Lighting should be soft and directional, like a museum spotlight blended with natural daylight. Color palette: marble white, pale gold, parchment beige, soft gray, and faint rose. Ultra detailed material textures, elegant shadows, refined luxury mood. No text, no logo.

negativePrompt:
no text, no logo, no watermark, no Shopify, no existing product design, no Apple-like product, no jewelry brand replica, no famous artwork, no music festival, no cyberpunk

---

## 7. craft-gold-leaf-detail.webp

useCase:
Craftセクション。素材感、職人性、制作過程を表現する。

aspectRatio:
10:7

size:
2000x1400

generationPrompt:
Create an extreme close-up editorial image of delicate gold leaf being applied to a textured surface in a Renaissance-inspired atelier. Show a fine artisan brush touching thin gold leaf over a combination of parchment, plaster, and subtle marble texture. The hand, if visible, must be natural and minimal, not the main subject. Focus on the material detail: fragile gold edges, soft fibers in the paper, gentle marble veining, and tiny reflective particles. Use warm natural light from the side, shallow depth of field, and an elegant macro photography style. The composition should leave soft blurred negative space toward one side for website text. The mood should communicate patience, precision, craft, and quiet luxury. Color palette: ivory, parchment beige, pale gold, warm white, stone gray. The image should feel premium and tactile, suitable for a craft or process section. No text, no logo.

negativePrompt:
no text, no logo, no watermark, no Shopify, no messy workshop, no dirty tools, no distorted hands, no extra fingers, no dark horror, no music festival, no cyberpunk

---

## 8. craft-oil-canvas.webp

useCase:
Craftセクション背景。油彩、キャンバス、筆致の質感として使用する。

aspectRatio:
10:7

size:
2000x1400

generationPrompt:
Create a luminous abstract oil painting canvas texture inspired by Renaissance color harmony, designed as a refined website background. The image should not depict any recognizable person, object, or famous painting. Focus on layered brush strokes, subtle canvas grain, soft blending, and elegant painterly depth. Use a bright and sophisticated palette of ivory, antique rose, muted terracotta, parchment beige, pale gold, warm white, and a trace of soft violet. The brushwork should feel handcrafted and artistic but calm enough for overlay text. Avoid high contrast or busy details. The composition should have smoother, quieter space toward the center and upper areas, allowing typography to remain readable. The mood should be warm, artistic, premium, and timeless. The final image should work as a web background texture for a luxury editorial site. No text, no logo, no recognizable artwork.

negativePrompt:
no text, no logo, no watermark, no Shopify, no famous painting replica, no portrait, no religious scene, no dark horror, no neon, no music festival, no concert

---

## 9. experience-curtain-transition.webp

useCase:
Experienceセクション。スクロール遷移、カーテンが開くような舞台転換演出に使用する。

aspectRatio:
3:2

size:
2400x1600

generationPrompt:
Create an elegant transition image of translucent curtains opening inside a bright European palace hall. The scene should feel theatrical but refined, like entering a private exhibition or a hidden gallery. Use tall marble columns, ivory walls, pale gold ornamentation, polished stone floors, and soft sunlight filtering through the fabric. The curtains should be light, airy, and slightly moving, with delicate folds and realistic textile texture. The center should open into a bright architectural space, leaving enough clean area for web content or animated overlays. The mood should be graceful, ceremonial, and immersive without becoming dramatic or dark. Use high-end editorial photography composition, cinematic depth, and luminous color grading. Palette: warm white, ivory, pale gold, parchment beige, marble gray, and very soft blue. This image should support scroll-driven transitions and feel like a visual doorway. No text, no logo.

negativePrompt:
no text, no logo, no watermark, no Shopify, no theater stage lights, no concert, no DJ, no audience, no dark red heavy curtains, no horror, no cyberpunk, no neon

---

## 10. experience-archway-depth.webp

useCase:
Experienceセクション。空間移動、奥行き、スクロール進行感の背景として使用する。

aspectRatio:
3:2

size:
2400x1600

generationPrompt:
Create a deep perspective view through a sequence of classical European marble archways, designed for an immersive scroll-driven website experience. The architecture should feel Renaissance-inspired but original, with ivory stone, polished marble floors, pale gold details, and tall windows allowing soft daylight to enter from the side. The arches should guide the viewer’s eye into the distance, creating a sense of movement, progression, and discovery. Keep the space bright, clean, and museum-like, not ancient or ruined. The composition should leave usable negative space on the lower right and upper left for web text and interface elements. Use architectural photography style with precise perspective, gentle atmospheric depth, refined shadows, and luminous highlights. The mood should be calm, elegant, spacious, and quietly impressive. Palette: ivory, marble white, warm gray, pale gold, soft blue, and parchment beige. No people, no text, no logo.

negativePrompt:
no text, no logo, no watermark, no Shopify, no ruins, no dark castle, no religious altar, no crowd, no music festival, no concert, no cyberpunk, no neon

---

## 11. technology-classical-modern.webp

useCase:
Technologyセクションの主役画像。古典芸術と最新Web技術の融合を表現する。

aspectRatio:
10:7

size:
2000x1400

generationPrompt:
Create an original high-end editorial image showing the fusion of European classical art and refined modern technology. The main subject is an abstract marble sculpture inspired by Renaissance craftsmanship, placed in a bright museum gallery with ivory walls, pale gold architectural details, and soft natural light. Around the sculpture, add subtle translucent geometric lines, delicate glass-like interface fragments, and floating gold particles, as if invisible digital systems are gently orbiting the artwork. The technology elements must feel elegant, minimal, and premium, not cyberpunk, not dark sci-fi, and not like a UI screenshot. Use a bright refined palette of ivory, marble white, parchment beige, pale gold, soft violet, and faint royal blue. The composition should leave clean negative space on the right side for website text overlays. The mood is intelligent, graceful, timeless, and quietly overwhelming. Photorealistic, cinematic editorial lighting, ultra detailed marble and gold textures. No text, no logo.

negativePrompt:
no text, no logo, no watermark, no Shopify, no UI screenshot, no existing brand identity, no famous statue replica, no cyberpunk, no dark sci-fi, no neon, no music festival, no concert crowd

---

## 12. technology-webgl-particles.webp

useCase:
WebGL粒子、金箔、浮遊表現の参照画像。背景や演出素材として使用する。

aspectRatio:
10:7

size:
2000x1400

generationPrompt:
Create an abstract luxury visual of floating gold leaf particles and translucent glass ribbons inside a bright marble gallery space. The image should feel like a refined WebGL motion study translated into an editorial still image. Use soft sunlight, atmospheric depth, delicate shadows, and subtle reflections on marble surfaces. The particles should be sparse and elegant, not chaotic, forming a graceful flow from the lower left toward the upper right. Glass ribbons should be almost invisible, catching light gently with pale blue and soft violet reflections. The background should remain clean, ivory, and museum-like, leaving room for overlay typography. The mood should combine Renaissance-inspired material richness with modern interactive technology, without becoming cyberpunk or futuristic in a harsh way. Use ivory, pale gold, marble white, soft blue, parchment beige, and faint violet. Ultra refined, luminous, minimal, premium. No text, no logo.

negativePrompt:
no text, no logo, no watermark, no Shopify, no UI elements, no sci-fi interface, no cyberpunk, no neon, no music festival, no concert, no DJ, no dark background

---

## 13. gallery-portrait-01.webp

useCase:
Galleryセクション用。人物肖像風のビジュアル。架空のブランド世界観を強化する。

aspectRatio:
4:5

size:
1600x2000

generationPrompt:
Create an original Renaissance-inspired editorial portrait of an elegant contemporary figure, not based on any real person, celebrity, or famous painting. The subject should have a calm, intelligent expression and a timeless posture, with modern minimal clothing that subtly references classical drapery. Place the figure in a bright museum-like interior with ivory walls, soft natural window light, pale gold accents, and a shallow depth of field. The composition should feel like a luxury magazine cover blended with European classical portraiture, but without imitating any specific artwork. Use a refined color palette of ivory, antique rose, parchment beige, soft brown, pale gold, and marble gray. The background should remain quiet enough for cropping and layout use. The image should feel human, graceful, artistic, and premium, with realistic skin, natural hands if visible, and elegant fabric texture. No text, no logo, no brand identity.

negativePrompt:
no text, no logo, no watermark, no Shopify, no celebrity, no famous painting replica, no distorted face, no distorted hands, no extra fingers, no religious iconography, no music festival, no concert

---

## 14. gallery-portrait-02.webp

useCase:
Galleryセクション用。別方向の人物肖像。より現代的で知的な印象。

aspectRatio:
4:5

size:
1600x2000

generationPrompt:
Create a refined European classical art inspired portrait of an original person in modern minimalist clothing, designed for a luxury immersive brand website. The figure should stand or sit calmly in a marble gallery environment with tall windows, soft blue daylight, ivory walls, and subtle pale gold architectural details. The pose should be composed and sculptural, with a strong but quiet presence. Avoid historical costume; instead, use contemporary elegant styling with hints of classical proportion and draped fabric. The image should feel like an editorial art catalogue portrait, timeless and modern at once. Leave soft negative space above or beside the figure for flexible web layout. Use a palette of marble white, ivory, soft blue, muted terracotta, pale gold, and warm gray. Lighting should be natural, luminous, and gentle, with realistic skin tones and refined material detail. No text, no logo, no famous person, no direct art replica.

negativePrompt:
no text, no logo, no watermark, no Shopify, no celebrity, no famous artwork replica, no distorted anatomy, no extra fingers, no dark horror, no neon, no music festival, no DJ

---

## 15. gallery-still-life-01.webp

useCase:
Galleryセクション用。静物ビジュアル。古典的な素材感と高級感を補強する。

aspectRatio:
5:4

size:
2000x1600

generationPrompt:
Create a luxurious Renaissance-inspired still life for a high-end editorial website gallery. Arrange marble fragments, folded pearlescent fabric, blank parchment, delicate gold leaf, a clear glass vessel, soft terracotta flowers, and a small abstract sculptural object on a stone surface. The objects should feel curated, symbolic, and refined, without referencing any specific historical painting. Use soft daylight from the upper left, creating gentle shadows, subtle reflections, and tactile material detail. The composition should have a calm central rhythm and enough negative space near the top for website use. The mood should be quiet, expensive, artistic, and timeless. Use ivory, parchment beige, pale gold, muted terracotta, antique rose, marble gray, and warm white. The result should feel like a modern art catalogue reinterpretation of classical still life, bright and sophisticated. No readable text, no logo, no existing brand elements.

negativePrompt:
no readable text, no logo, no watermark, no Shopify, no direct replica of famous still life paintings, no skull, no dark vanitas, no clutter, no music festival, no cyberpunk

---

## 16. gallery-architecture-01.webp

useCase:
Galleryセクション用。建築・空間ビジュアル。ブランドサイトのスケール感を出す。

aspectRatio:
3:2

size:
2400x1600

generationPrompt:
Create a grand but minimal European palace interior designed as an original architectural image for a luxury website gallery. The space should feature marble columns, arched ceilings, pale gold ornamentation, warm white walls, and soft sunlight entering through tall windows. Keep the interior spacious, bright, and refined, with a museum-like serenity rather than excessive royal decoration. The floor should have subtle marble veining and gentle reflections. The composition should emphasize scale, symmetry, and quiet grandeur, leaving open areas for web cropping and possible text overlays. Use editorial architectural photography style with precise lines, soft shadows, and luminous highlights. The mood should be elegant, intelligent, timeless, and slightly overwhelming. Palette: ivory, warm white, marble gray, pale gold, parchment beige, and soft blue. No people, no text, no logo, no recognizable real building.

negativePrompt:
no text, no logo, no watermark, no Shopify, no recognizable landmark, no tourists, no dark castle, no religious altar, no music festival, no concert, no neon, no cyberpunk

---

## 17. final-cta-celestial-ceiling.webp

useCase:
Final CTA背景。締めの強いビジュアルとして使用する。

aspectRatio:
3:2

size:
2400x1600

generationPrompt:
Create a luminous Renaissance-inspired palace ceiling image for the final call-to-action section of a luxury immersive website. The view should look upward toward an original celestial fresco-like abstract ceiling, with soft clouds, pale gold ornaments, marble arches, and gentle ivory light. Avoid direct religious symbols or recognizable historical frescoes. The ceiling should feel majestic, hopeful, and elevated, as if the website journey ends by looking toward a refined artistic sky. Use a bright palette of ivory, warm white, pale gold, soft violet, marble gray, and faint blue. The lower portion of the image should remain slightly calmer and less detailed so that a CTA button and headline can be placed over it. The image should feel cinematic, editorial, serene, and premium. Blend classical European architecture with modern luxury brand atmosphere. Ultra detailed but not visually noisy. No text, no logo, no brand elements.

negativePrompt:
no text, no logo, no watermark, no Shopify, no direct replica of famous ceilings, no religious iconography as the main subject, no angels, no dark church, no music festival, no cyberpunk, no neon

---

## 18. background-parchment-marble.webp

useCase:
汎用背景テクスチャ。複数セクションの背景、カード、オーバーレイに使用する。

aspectRatio:
1:1

size:
2000x2000

generationPrompt:
Create a seamless refined background texture combining warm parchment, subtle marble veining, faint gold leaf dust, and soft ivory plaster. The image should be minimal, elegant, and suitable for a luxury Renaissance-inspired website background. It must not contain any distinct objects, readable text, symbols, logos, or recognizable artwork. The texture should feel tactile and handcrafted, with gentle variation across the surface so it does not look flat, but it must remain calm enough for overlay typography and UI cards. Use a sophisticated palette of ivory, warm white, parchment beige, pale gold, stone gray, and very soft antique rose. The surface should blend paper fibers, polished stone, and delicate metallic dust in a natural way. Lighting should be even, soft, and editorial, with no harsh shadows. The result should tile or crop gracefully across desktop and mobile layouts. No text, no logo.

negativePrompt:
no text, no logo, no watermark, no Shopify, no symbols, no recognizable object, no famous artwork, no high contrast pattern, no dark stains, no music festival, no neon, no cyberpunk
