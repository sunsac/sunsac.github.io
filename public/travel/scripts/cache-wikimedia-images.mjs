#!/usr/bin/env node

import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const outputDir = join(root, "assets", "images");
const sourceFiles = [
  "overview.html",
  "bern-modules.js",
  "bern-module-details.js",
  "city-food-guides.js",
  "travel-maps.js",
  "freiburg-daytrip-enhanced.js",
  "heidelberg-daytrip-enhanced.js",
];

const queries = new Set();
const fallbacks = new Map();
const add = (value) => {
  const query = String(value || "").trim();
  if (query && !query.includes("${")) queries.add(query);
};

function quotedValues(value) {
  return [...value.matchAll(/"((?:\\.|[^"\\])*)"/g)].map((match) =>
    match[1].replace(/\\"/g, '"').replace(/\\n/g, " "),
  );
}

function collectObjectValues(source, objectName) {
  const start = source.indexOf(`const ${objectName} = {`);
  if (start < 0) return;
  const end = source.indexOf("\n};", start);
  if (end < 0) return;
  const block = source.slice(start, end);
  for (const line of block.split("\n")) {
    const values = quotedValues(line);
    if (values.length >= 2) add(values.at(-1));
  }
}

for (const filename of sourceFiles) {
  const source = await readFile(join(root, filename), "utf8");
  for (const match of source.matchAll(/imageQuery\s*:\s*"([^"]+)"/g)) add(match[1]);
  for (const match of source.matchAll(/imageQuery\s*:\s*"([^"]+)"[\s\S]{0,120}?imageFallback\s*:\s*"([^"]+)"/g)) {
    fallbacks.set(match[1], match[2]);
  }
  for (const match of source.matchAll(/data-image-query="([^"]+)"/g)) add(match[1]);
  for (const line of source.split("\n")) {
    if (line.includes("attraction(")) add(quotedValues(line).at(-1));
    if (line.includes("food(")) {
      const values = quotedValues(line);
      add(values[2]);
      if (values[2] && values[3]) fallbacks.set(values[2], values[3]);
    }
  }
  collectObjectValues(source, "attractionImageQueries");
  collectObjectValues(source, "highlightImageQueries");
  collectObjectValues(source, "heidelbergImageQueries");
}

const normalize = (value) => value
  .toLocaleLowerCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-z0-9]/g, "");

const stripHtml = (value = "") => value
  .replace(/<[^>]*>/g, " ")
  .replace(/&nbsp;/g, " ")
  .replace(/&amp;/g, "&")
  .replace(/&quot;/g, '"')
  .replace(/&#039;|&#39;/g, "'")
  .replace(/\s+/g, " ")
  .trim();

async function fetchWithRetry(url) {
  let lastError;
  for (let attempt = 0; attempt < 6; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: { "User-Agent": "PersonalTravelGuideImageCache/1.0 (offline travel guide)" },
      });
      if (response.ok) return response;
      lastError = new Error(`${response.status} ${response.statusText}`);
      if (response.status !== 429 && response.status < 500) throw lastError;
    } catch (error) {
      lastError = error;
    }
    if (attempt < 5) await new Promise((resolve) => setTimeout(resolve, 3000 * (attempt + 1)));
  }
  throw lastError || new Error("request failed");
}

async function json(url) {
  return (await fetchWithRetry(url)).json();
}

async function resolveImage(query) {
  const searchUrl = new URL("https://en.wikipedia.org/w/rest.php/v1/search/page");
  searchUrl.search = new URLSearchParams({ q: query, limit: "8" });
  const search = await json(searchUrl);
  const pages = (search.pages || []).filter((page) => page.thumbnail?.url);
  const exact = pages.find((page) => normalize(page.title).includes(normalize(query)));
  const page = exact || pages[0];
  if (!page) throw new Error("no image result");
  const thumbnail = `https:${page.thumbnail.url}`
    .replace(/\/\d+px-([^/?]+)(\?.*)?$/, "/330px-$1")
    .replace(/\?.*$/, "");
  const parts = new URL(thumbnail).pathname.split("/");
  const fileTitle = decodeURIComponent(parts.at(-2) || parts.at(-1) || page.key);
  return {
    url: thumbnail,
    sourcePage: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(fileTitle)}`,
    articleTitle: page.title,
    fileTitle,
    artist: "Wikimedia contributor",
    license: "See source page",
    licenseUrl: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(fileTitle)}`,
  };
}

async function enrichAttribution(items) {
  return items;
}

function extensionFor(url, contentType) {
  if (contentType.includes("png")) return ".png";
  if (contentType.includes("webp")) return ".webp";
  if (contentType.includes("gif")) return ".gif";
  if (contentType.includes("jpeg")) return ".jpg";
  const suffix = extname(new URL(url).pathname).toLowerCase();
  return [".jpg", ".jpeg", ".png", ".webp", ".gif"].includes(suffix) ? suffix.replace(".jpeg", ".jpg") : ".jpg";
}

await mkdir(outputDir, { recursive: true });
let previousAttribution = [];
let failedAttempts = {};
try {
  previousAttribution = JSON.parse(await readFile(join(outputDir, "attribution.json"), "utf8"));
} catch {}
try {
  failedAttempts = JSON.parse(await readFile(join(outputDir, "failed.json"), "utf8"));
} catch {}
const manifest = Object.fromEntries(previousAttribution.map((item) => [item.query, {
  path: item.path,
  sourcePage: item.sourcePage,
  articleTitle: item.articleTitle,
  fileTitle: item.fileTitle,
  artist: item.artist,
  license: item.license,
  licenseUrl: item.licenseUrl,
}]));
const attribution = [...previousAttribution];
const batchSize = Math.max(1, Number(process.argv.find((arg) => arg.startsWith("--limit="))?.split("=")[1] || 12));
const queue = [...queries]
  .filter((query) => !manifest[query] && (failedAttempts[query] || 0) < 3)
  .sort((a, b) => a.localeCompare(b))
  .slice(0, batchSize);
let cursor = 0;

async function persist() {
  const orderedManifest = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
  await writeFile(join(outputDir, "attribution.json"), `${JSON.stringify(attribution.sort((a, b) => a.query.localeCompare(b.query)), null, 2)}\n`);
  await writeFile(join(outputDir, "failed.json"), `${JSON.stringify(failedAttempts, null, 2)}\n`);
  await writeFile(
    join(root, "travel-images.js"),
    `/* Generated by scripts/cache-wikimedia-images.mjs. */\n(function () {\n  const images = ${JSON.stringify(orderedManifest, null, 2)};\n  window.travelImageManifest = images;\n  window.travelImageSource = (query) => images[String(query || "").trim()]?.path || null;\n})();\n`,
  );
}

async function worker() {
  while (cursor < queue.length) {
    const query = queue[cursor++];
    try {
      let resolved;
      try {
        resolved = await resolveImage(query);
      } catch (error) {
        const fallback = fallbacks.get(query);
        if (!fallback) throw error;
        resolved = await resolveImage(fallback);
      }
      const response = await fetchWithRetry(resolved.url);
      const bytes = Buffer.from(await response.arrayBuffer());
      const extension = extensionFor(resolved.url, response.headers.get("content-type") || "");
      const slug = normalize(query).slice(0, 54) || "image";
      const hash = createHash("sha1").update(query).digest("hex").slice(0, 8);
      const filename = `${slug}-${hash}${extension}`;
      await writeFile(join(outputDir, filename), bytes);
      manifest[query] = {
        path: `assets/images/${filename}`,
        sourcePage: resolved.sourcePage,
        articleTitle: resolved.articleTitle,
        fileTitle: resolved.fileTitle,
        artist: resolved.artist,
        license: resolved.license,
        licenseUrl: resolved.licenseUrl,
      };
      delete failedAttempts[query];
      attribution.push({ query, ...manifest[query] });
      await persist();
      process.stdout.write(`✓ ${query}\n`);
    } catch (error) {
      failedAttempts[query] = (failedAttempts[query] || 0) + 1;
      await persist();
      process.stderr.write(`✗ ${query}: ${error.message}\n`);
    }
    await new Promise((resolve) => setTimeout(resolve, 1200));
  }
}

await worker();

await enrichAttribution(attribution);
for (const item of attribution) {
  manifest[item.query] = {
    path: item.path,
    sourcePage: item.sourcePage,
    articleTitle: item.articleTitle,
    fileTitle: item.fileTitle,
    artist: item.artist,
    license: item.license,
    licenseUrl: item.licenseUrl,
  };
}

const orderedManifest = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
await persist();

process.stdout.write(`\nCached ${Object.keys(manifest).length}/${queries.size} images in assets/images; processed ${queue.length} this batch.\n`);
