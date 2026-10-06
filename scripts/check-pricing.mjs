/**
 * Pre-build check: keep hand-written package prices in sync with
 * src/data/site-content.json.
 *
 * The React pages read prices from site-content.json, but the crawler and AI
 * surfaces (index.html, public/*.txt, llm.html, prerender snapshots) and a few
 * page paragraphs repeat them as plain text. Any file that mentions one
 * package price must mention every current price (each season of each
 * package), so a file left on an older season fails the build instead of
 * shipping conflicting prices. Hand-written "Only N weekends left ... 2027"
 * lines (count and year on one line) must also match packages.seasons in
 * site-content.json.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const content = JSON.parse(fs.readFileSync(path.join(ROOT, "src/data/site-content.json"), "utf8"));

// Files that legitimately mention a single season's prices.
const ALLOW = new Set(["src/pages/Booking2026.tsx", "src/pages/Booking2027.tsx"]);

const SCAN = [
  { dir: ".", files: ["index.html"] },
  { dir: "public", ext: [".html", ".txt"] },
  { dir: "src", ext: [".ts", ".tsx"] },
];

const PRICE_KEYS = Object.keys(content.packages.packages[0]).filter((key) => /^price(\d{4})?$/.test(key));
const prices = [
  ...new Set(content.packages.packages.flatMap((pkg) => PRICE_KEYS.map((key) => pkg[key]))),
].map((price) => {
  const digits = price.replace(/,/g, "");
  return { label: `$${price}`, pattern: new RegExp(`\\$?${digits.slice(0, -3)},?${digits.slice(-3)}(?![\\d])`) };
});

const walk = (dir, ext) =>
  fs.readdirSync(path.join(ROOT, dir), { withFileTypes: true }).flatMap((entry) => {
    const rel = path.posix.join(dir, entry.name);
    if (entry.isDirectory()) return walk(rel, ext);
    return ext.includes(path.extname(entry.name)) ? [rel] : [];
  });

const files = SCAN.flatMap(({ dir, files, ext }) => files ?? walk(dir, ext));

const problems = [];
for (const file of files) {
  if (ALLOW.has(file)) continue;
  const text = fs.readFileSync(path.join(ROOT, file), "utf8");
  const found = prices.filter(({ pattern }) => pattern.test(text));
  if (found.length === 0 || found.length === prices.length) continue;
  const missing = prices.filter((price) => !found.includes(price)).map(({ label }) => label);
  problems.push(`  ${file}: missing ${missing.join(", ")}`);
}

// Hand-written "Only N weekends left" lines, with the year on the same line, must match packages.seasons[year].weekendsLeft.
for (const file of files) {
  const text = fs.readFileSync(path.join(ROOT, file), "utf8");
  for (const line of text.split("\n")) {
    const count = line.match(/Only (\d+) weekends? (?:left|remain)/)?.[1];
    const year = line.match(/\b(20\d\d)\b/)?.[1];
    if (!count || !year) continue;
    const expected = content.packages.seasons?.[year]?.weekendsLeft;
    if (expected !== undefined && Number(count) !== expected) {
      problems.push(`  ${file}: says ${count} weekends left for ${year}, site-content.json says ${expected}`);
    }
  }
}

if (problems.length) {
  console.error(
    `Pricing or availability is out of sync with src/data/site-content.json (${prices.map(({ label }) => label).join(", ")}):\n` +
      problems.join("\n")
  );
  process.exit(1);
}
console.log(`Pricing check passed (${files.length} files, prices ${prices.map(({ label }) => label).join(", ")}).`);
