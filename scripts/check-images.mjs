#!/usr/bin/env node
// Scans public/images/generated/ against the 18-image inventory and prints status.
// Usage: npm run check:images

import { readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const dir = join(root, "public", "images", "generated");

// Mirror of src/data/generatedImages.ts (id → expected filename, dimensions, aspect).
const EXPECTED = [
  ["hero-renaissance-portal", "3:2", 2400, 1600, "hero", true],
  ["hero-marble-sculpture", "4:5", 1600, 2000, "hero", false],
  ["philosophy-parchment-table", "10:7", 2000, 1400, "philosophy", false],
  ["philosophy-gallery-light", "10:7", 2000, 1400, "philosophy", false],
  ["collection-framed-artifacts", "5:4", 2000, 1600, "collection", false],
  ["collection-object-plinth", "4:5", 1600, 2000, "collection", false],
  ["craft-gold-leaf-detail", "10:7", 2000, 1400, "craft", false],
  ["craft-oil-canvas", "10:7", 2000, 1400, "craft", false],
  ["experience-curtain-transition", "3:2", 2400, 1600, "experience", false],
  ["experience-archway-depth", "3:2", 2400, 1600, "experience", false],
  ["technology-classical-modern", "10:7", 2000, 1400, "technology", false],
  ["technology-webgl-particles", "10:7", 2000, 1400, "technology", false],
  ["gallery-portrait-01", "4:5", 1600, 2000, "gallery", false],
  ["gallery-portrait-02", "4:5", 1600, 2000, "gallery", false],
  ["gallery-still-life-01", "5:4", 2000, 1600, "gallery", false],
  ["gallery-architecture-01", "3:2", 2400, 1600, "gallery", false],
  ["final-cta-celestial-ceiling", "3:2", 2400, 1600, "final-cta", false],
  ["background-parchment-marble", "1:1", 2000, 2000, "universal", false],
];

const ACCEPTED_EXT = [".webp", ".avif", ".png", ".jpg", ".jpeg"];

const fmt = (n) => {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(2)} MB`;
};

const c = {
  reset: "\x1b[0m",
  dim: "\x1b[2m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  bold: "\x1b[1m",
  cyan: "\x1b[36m",
};

const SOFT_LIMIT_KB = 350;
const HERO_LIMIT_KB = 600;

async function main() {
  if (!existsSync(dir)) {
    console.error(`${c.red}Missing directory: ${dir}${c.reset}`);
    process.exit(1);
  }

  const filesOnDisk = await readdir(dir);
  const presentSet = new Set(filesOnDisk);

  let present = 0;
  let missing = 0;
  let wrongFormat = 0;
  let oversized = 0;

  console.log(`${c.bold}Image Inventory · public/images/generated/${c.reset}`);
  console.log(`${c.dim}────────────────────────────────────────────────────────${c.reset}`);

  for (const [id, aspect, w, h, section, isHero] of EXPECTED) {
    const target = `${id}.webp`;
    let found = null;
    for (const ext of ACCEPTED_EXT) {
      const candidate = `${id}${ext}`;
      if (presentSet.has(candidate)) {
        found = candidate;
        break;
      }
    }

    if (!found) {
      missing++;
      console.log(
        `${c.red}✗${c.reset} ${c.dim}${section.padEnd(11)}${c.reset} ${target.padEnd(38)} ${c.dim}${aspect}  ${w}×${h}${c.reset}`,
      );
      continue;
    }

    const fullPath = join(dir, found);
    const s = await stat(fullPath);
    const sizeKb = s.size / 1024;
    const limitKb = isHero ? HERO_LIMIT_KB : SOFT_LIMIT_KB;

    let flag = "";
    if (!found.endsWith(".webp") && !found.endsWith(".avif")) {
      wrongFormat++;
      flag += ` ${c.yellow}[convert→webp]${c.reset}`;
    }
    if (sizeKb > limitKb) {
      oversized++;
      flag += ` ${c.yellow}[> ${limitKb} KB]${c.reset}`;
    }

    present++;
    console.log(
      `${c.green}✓${c.reset} ${c.dim}${section.padEnd(11)}${c.reset} ${found.padEnd(38)} ${c.dim}${aspect}  ${w}×${h}${c.reset}  ${fmt(s.size)}${flag}`,
    );
  }

  console.log(`${c.dim}────────────────────────────────────────────────────────${c.reset}`);
  console.log(
    `${c.bold}Status:${c.reset}  ${c.green}${present}${c.reset} present · ${c.red}${missing}${c.reset} missing · ${c.yellow}${wrongFormat}${c.reset} non-webp · ${c.yellow}${oversized}${c.reset} oversize  ${c.dim}(of ${EXPECTED.length})${c.reset}`,
  );

  // Unknown extras
  const expectedNames = new Set();
  for (const [id] of EXPECTED) {
    for (const ext of ACCEPTED_EXT) expectedNames.add(`${id}${ext}`);
  }
  const ignored = new Set([".gitkeep", "_staging"]);
  const extras = filesOnDisk.filter((f) => !expectedNames.has(f) && !ignored.has(f));
  if (extras.length) {
    console.log(
      `${c.yellow}⚠ unrecognized files (rename to one of the IDs):${c.reset} ${extras.join(", ")}`,
    );
  }

  if (missing > 0) {
    console.log(
      `\n${c.cyan}Next:${c.reset} generate the missing images with GPT-5.5 using prompts in ${c.bold}docs/image-prompts.md${c.reset}, then drop the files into ${c.bold}public/images/generated/${c.reset} using the IDs above (extension .webp preferred).`,
    );
  } else {
    console.log(`\n${c.green}All 18 expected images are in place.${c.reset}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
