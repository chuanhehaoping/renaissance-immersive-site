#!/usr/bin/env node
// Resize + re-encode oversized WebPs in public/images/generated/.
// Originals are moved to public/images/generated/_originals/ for safety.
// Usage: npm run optimize:images

import { readdir, mkdir, rename, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const dir = join(root, "public", "images", "generated");
const backup = join(dir, "_originals");

// id → [targetWidth, targetHeight, isHero]
const TARGETS = new Map([
  ["hero-renaissance-portal", [2400, 1600, true]],
  ["hero-marble-sculpture", [1600, 2000, true]],
  ["philosophy-parchment-table", [2000, 1400, false]],
  ["philosophy-gallery-light", [2000, 1400, false]],
  ["collection-framed-artifacts", [2000, 1600, false]],
  ["collection-object-plinth", [1600, 2000, false]],
  ["craft-gold-leaf-detail", [2000, 1400, false]],
  ["craft-oil-canvas", [2000, 1400, false]],
  ["experience-curtain-transition", [2400, 1600, false]],
  ["experience-archway-depth", [2400, 1600, false]],
  ["technology-classical-modern", [2000, 1400, false]],
  ["technology-webgl-particles", [2000, 1400, false]],
  ["gallery-portrait-01", [1600, 2000, false]],
  ["gallery-portrait-02", [1600, 2000, false]],
  ["gallery-still-life-01", [2000, 1600, false]],
  ["gallery-architecture-01", [2400, 1600, false]],
  ["final-cta-celestial-ceiling", [2400, 1600, false]],
  ["background-parchment-marble", [2000, 2000, false]],
]);

const SOFT_LIMIT_KB = 350;
const HERO_LIMIT_KB = 600;

const fmt = (n) => {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(0)} KB`;
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

// Encode with sharp until the file fits the target budget by stepping quality down.
async function encodeUntilBudget(inputPath, outputPath, width, height, budgetKb) {
  const qualities = [82, 78, 74, 70, 66, 62, 58];
  let lastBuf = null;
  let lastQ = qualities[0];
  for (const q of qualities) {
    const buf = await sharp(inputPath)
      .rotate()
      .resize({
        width,
        height,
        fit: "cover",
        position: "center",
        withoutEnlargement: true,
      })
      .webp({ quality: q, effort: 5, smartSubsample: true })
      .toBuffer();
    lastBuf = buf;
    lastQ = q;
    if (buf.byteLength / 1024 <= budgetKb) break;
  }
  if (!lastBuf) throw new Error("encode produced no buffer");
  await sharp(lastBuf).toFile(outputPath);
  return { size: lastBuf.byteLength, quality: lastQ };
}

async function main() {
  if (!existsSync(dir)) {
    console.error(`${c.red}Missing directory: ${dir}${c.reset}`);
    process.exit(1);
  }
  if (!existsSync(backup)) await mkdir(backup, { recursive: true });

  const filesOnDisk = await readdir(dir);
  let processed = 0;
  let skipped = 0;
  let totalBefore = 0;
  let totalAfter = 0;

  console.log(`${c.bold}Optimizing images${c.reset}`);
  console.log(`${c.dim}────────────────────────────────────────────────────────${c.reset}`);

  for (const [id, [w, h, isHero]] of TARGETS) {
    const fileName = `${id}.webp`;
    if (!filesOnDisk.includes(fileName)) {
      console.log(`${c.dim}- skip (missing)  ${fileName}${c.reset}`);
      continue;
    }
    const inputPath = join(dir, fileName);
    const beforeStat = await stat(inputPath);
    const budget = isHero ? HERO_LIMIT_KB : SOFT_LIMIT_KB;

    if (beforeStat.size / 1024 <= budget) {
      console.log(
        `${c.green}✓${c.reset} ${fileName.padEnd(38)} ${c.dim}already within budget ${fmt(beforeStat.size)}${c.reset}`,
      );
      skipped++;
      continue;
    }

    // Back up original
    const backupPath = join(backup, fileName);
    if (!existsSync(backupPath)) {
      await rename(inputPath, backupPath);
    }

    // Re-encode using the backup as source
    const { size, quality } = await encodeUntilBudget(backupPath, inputPath, w, h, budget);
    const ratio = (1 - size / beforeStat.size) * 100;
    totalBefore += beforeStat.size;
    totalAfter += size;
    processed++;
    const ok = size / 1024 <= budget;
    console.log(
      `${ok ? c.green + "✓" : c.yellow + "≈"}${c.reset} ${fileName.padEnd(38)} ${c.dim}${fmt(beforeStat.size)} → ${fmt(size)}  -${ratio.toFixed(0)}%  q=${quality}${c.reset}`,
    );
  }

  console.log(`${c.dim}────────────────────────────────────────────────────────${c.reset}`);
  console.log(
    `${c.bold}Done.${c.reset}  ${c.green}${processed}${c.reset} optimized · ${c.dim}${skipped}${c.reset} already ok`,
  );
  if (totalBefore > 0) {
    console.log(
      `${c.cyan}Total:${c.reset} ${fmt(totalBefore)} → ${fmt(totalAfter)}  ${c.dim}(${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(0)}% smaller)${c.reset}`,
    );
  }
  console.log(`${c.dim}Originals saved to: public/images/generated/_originals/${c.reset}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
