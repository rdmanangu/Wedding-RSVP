#!/usr/bin/env node
/**
 * prepare-photos.js - wedding photo preparation for the RSVP invitation.
 *
 *   1. Reads every photo in  originals/  (never modifies them).
 *   2. Applies the EXIF orientation FIRST (sharp .rotate() with no arguments),
 *      so the pixels are physically upright.
 *   3. Applies the manual OVERRIDE below (degrees clockwise) for any stubborn
 *      photo whose EXIF flag is wrong or missing.
 *   4. Creates a full-size gallery WebP (1800px max) plus a 640px thumbnail
 *      for every original, keeping the supplied filename stem.
 *   5. Keeps legacy mapped JPEG/WebP exports, with ALL metadata
 *      (EXIF / GPS / make / model) stripped after the rotation.
 *   6. Never modifies the originals/ source files.
 *
 * Run it:
 *      npm install sharp
 *      node tools/prepare-photos.js
 *
 * (If sharp lives somewhere else:  NODE_PATH=<dir>/node_modules node tools/prepare-photos.js)
 */
"use strict";

const fs = require("fs");
const path = require("path");

let sharp;
try {
  sharp = require("sharp");
} catch (e) {
  console.error("Missing dependency: sharp   ->   npm install sharp");
  process.exit(1);
}

const SRC_DIR = path.join(__dirname, "..", "originals");
const OUT_DIR = path.join(__dirname, "..", "images");

/* ------------------------------------------------------------------ *
 * MAP: optional original filename -> legacy output name.
 * Every original is also prepared for the gallery automatically.
 * Add rows here only for legacy aliases, e.g.:
 *      "20260601_101500.jpg": "ceremony.jpg",
 * ------------------------------------------------------------------ */
const MAP = {
  "20260511_172707.jpg": "hero.jpg",
  "20260511_172715.jpg": "gallery-1.jpg",
  "20260511_164223.jpg": "gallery-2.jpg",
  "20260511_172919.jpg": "gallery-3.jpg",
  "20260511_153029.jpg": "gallery-4.jpg",
  "20260511_141318.jpg": "gallery-5.jpg",
  "20260511_173334.jpg": "gallery-6.jpg",
  "20260511_175343.jpg": "story-1.jpg"
  // No originals left for story-2..4, ceremony.jpg, reception.jpg - add
  // filenames here when you have more photos.
};

/* ------------------------------------------------------------------ *
 * MANUAL OVERRIDE: degrees CLOCKWISE (90 | 180 | 270) forced onto a
 * photo AFTER the automatic EXIF step.  Use it only when a photo still
 * shows sideways or upside down in the upright-check report below,
 * i.e. when its EXIF flag was already lost.  Example:
 *      "20260511_153029.jpg": 90,
 * ------------------------------------------------------------------ */
const OVERRIDE = {
  // (empty - every original carries a correct EXIF Orientation flag,
  //  so the automatic step straightens them all)
};

const LONG_EDGE = 1800;        // gallery photos
const HERO_LONG_EDGE = 1800;   // hero photo
const THUMB_EDGE = 640;        // gallery grid thumbnails
const JPEG_QUALITY = 80;       // spec allows 80-82
const WEBP_QUALITY = 80;
const WARN_OVER = 400 * 1024;  // warn above 400KB
const STRIP = 0.12;            // edge strips used by the upright check

const kb = (bytes) => Math.round(bytes / 1024) + " KB";
const isJpg = (f) => /\.jpe?g$/i.test(f);

/**
 * Upright check on the finished file.  Real sky is BLUISH (blue channel
 * over red), so the test only accuses a photo when sky-like colour sits on
 * the wrong edge; a merely bright floor or wall does not count.
 * Returns "top" (upright), "inconclusive", or a suggested override ("90"
 * | "180" | "270" degrees clockwise).
 */
async function uprightCheck(file) {
  const { data, info } = await sharp(file)
    .resize({ width: 96, height: 96, fit: "inside" })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width: w, height: h, channels: ch } = info;
  const band = Math.max(1, Math.round(h * STRIP));
  const bandX = Math.max(1, Math.round(w * STRIP));
  const top = [0, 0, w, band];
  const bottom = [0, h - band, w, h];
  const left = [0, 0, bandX, h];
  const right = [w - bandX, 0, w, h];

  const measure = ([x0, y0, x1, y1]) => {
    let lum = 0, blue = 0, n = 0;
    for (let y = y0; y < y1; y++) {
      for (let x = x0; x < x1; x++) {
        const i = (y * w + x) * ch;
        const r = data[i], g = data[i + 1], b = data[i + 2];
        lum += 0.299 * r + 0.587 * g + 0.114 * b;
        blue += b - r;
        n++;
      }
    }
    return { lum: lum / n, blue: blue / n };
  };

  const t = measure(top), bo = measure(bottom), le = measure(left), ri = measure(right);
  const skyLike = (s) => s.blue > 8; // bluish edge = likely sky

  if (skyLike(t)) return "top";                                   // sky at the top: upright
  if (skyLike(bo) && bo.lum > t.lum) return "180";                // sky at the bottom
  if (skyLike(le) && !skyLike(ri) && le.lum > t.lum) return "90";  // sky at the left
  if (skyLike(ri) && !skyLike(le) && ri.lum > t.lum) return "270";// sky at the right
  if (t.lum >= bo.lum) return "top";                              // brightest side is up
  return "inconclusive";                                          // bright bottom, no sky colour
}

async function main() {
  if (!fs.existsSync(SRC_DIR)) {
    console.error("Folder not found: " + SRC_DIR);
    process.exit(1);
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const originals = fs.readdirSync(SRC_DIR).filter(isJpg).sort();
  if (!originals.length) {
    console.error("No .jpg files in " + SRC_DIR);
    process.exit(1);
  }

  console.log("originals/ inventory (source of truth, never modified):\n");
  for (const f of originals) {
    const m = await sharp(path.join(SRC_DIR, f)).metadata();
    const out = MAP[f];
    const orient = m.orientation === undefined ? "Orientation=MISSING" : "Orientation=" + m.orientation;
    const upright = m.orientation === 6 || m.orientation === 8 ? " (portrait shot, upright " + m.height + "x" + m.width + ")"
      : m.orientation === 3 ? " (upside down in the raw pixels)"
      : m.orientation === 1 || m.orientation === undefined ? " (flag says already upright)"
      : " (flag " + m.orientation + ")";
    console.log("  " + f.padEnd(24) + " stored " + (m.width + "x" + m.height).padEnd(10) + " " + orient + upright);
    console.log("      -> images/gallery/" + path.parse(f).name + ".webp + thumbnail" +
      (out ? " and legacy " + out : ""));
  }
  console.log("");

  let prepared = 0;
  let warns = 0;
  const galleryDir = path.join(OUT_DIR, "gallery");
  const thumbnailsDir = path.join(galleryDir, "thumbnails");
  fs.mkdirSync(thumbnailsDir, { recursive: true });
  for (const srcFile of originals) {
    const outFile = MAP[srcFile];
    const srcPath = path.join(SRC_DIR, srcFile);
    const galleryPath = path.join(galleryDir, path.parse(srcFile).name + ".webp");
    const thumbnailPath = path.join(thumbnailsDir, path.parse(srcFile).name + ".webp");
    const outPath = outFile ? path.join(OUT_DIR, outFile) : null;
    const deg = OVERRIDE[srcFile];

    // PASS 1: follow the EXIF flag - pixels become physically upright here.
    const oriented = await sharp(srcPath).rotate().toBuffer();

    // PASS 2: optional manual override, resize, then encode without metadata.
    const build = (longEdge) => {
      let pipe = sharp(oriented);
      if (deg) pipe = pipe.rotate(deg);
      return pipe.resize({ width: longEdge, height: longEdge, fit: "inside", withoutEnlargement: true });
    };

    const full = await build(LONG_EDGE).webp({ quality: WEBP_QUALITY }).toFile(galleryPath);
    const thumbnail = await build(THUMB_EDGE).webp({ quality: WEBP_QUALITY }).toFile(thumbnailPath);
    let legacySizeNote = "";
    if (outFile) {
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      const legacyEdge = outFile === "hero.jpg" ? HERO_LONG_EDGE : LONG_EDGE;
      const jpg = await build(legacyEdge).jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(outPath);
      const webpPath = outPath.replace(/\.jpe?g$/i, ".webp");
      const webp = await build(legacyEdge).webp({ quality: WEBP_QUALITY }).toFile(webpPath);
      legacySizeNote = " | legacy " + kb(jpg.size) + " jpg / " + kb(webp.size) + " webp";
      if (jpg.size > WARN_OVER) warns++;
    }

    const orientNote = deg ? "manual override " + deg + " deg CW" :
      "EXIF " + (await sharp(srcPath).metadata()).orientation + " applied";
    const verdict = await uprightCheck(galleryPath);
    const verdictNote = verdict === "top"
      ? "upright check: sky/bright edge at the top - OK"
      : verdict === "inconclusive"
        ? "upright check: no strong sky signal - please eyeball it"
        : "UPRIGHT CHECK SUGGESTS " + verdict + " deg - add it to OVERRIDE if it really looks wrong";
    console.log(path.parse(srcFile).name.padEnd(22) + String(full.width + "x" + full.height).padEnd(12) +
      kb(full.size) + " full / " + kb(thumbnail.size) + " thumb" + legacySizeNote + " | " + orientNote);
    console.log("      " + verdictNote);
    prepared++;
  }

  console.log("\nDone. " + prepared + " photos prepared." +
    (warns ? "  " + warns + " legacy JPEG(s) over 400KB." : "") +
    "\nMetadata (EXIF/GPS) is stripped from every output." +
    "\nIf any photo still looks sideways, add it to OVERRIDE at the top of this script and re-run.");
}

main().catch((e) => { console.error(e); process.exit(1); });
