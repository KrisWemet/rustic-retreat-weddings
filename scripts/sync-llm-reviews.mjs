/**
 * Pre-build step: write the reviews from src/data/testimonials.ts into
 * public/llm.html.
 *
 * llm.html is the plain-HTML page for AI crawlers and press, and it carries its
 * own copy of every review. That copy used to be maintained by hand, so adding
 * a review to the site left the crawler page quoting a shorter, older list with
 * nothing to flag the drift.
 *
 * Only the block between the reviews:start and reviews:end markers is replaced;
 * the surrounding prose stays hand-written. Run it directly with
 * `npm run sync:reviews`, or pass --check to verify without writing (exits 1
 * when the file is stale, for CI).
 *
 * The data is read by transpiling the TypeScript module and importing it, so
 * the reviews are the real exported values rather than a regex's guess at them.
 */
import fs from "node:fs";
import path from "node:path";
import * as esbuild from "esbuild";

const ROOT = process.cwd();
const SOURCE = path.join(ROOT, "src/data/testimonials.ts");
const TARGET = path.join(ROOT, "public/llm.html");
const START = "<!-- reviews:start -->";
const END = "<!-- reviews:end -->";
const INDENT = "      ";

const checkOnly = process.argv.includes("--check");

/** Load the exported reviews from the TypeScript module. */
const loadTestimonials = async () => {
  const source = fs.readFileSync(SOURCE, "utf8");
  // esbuild drops the type-only import of Testimonial, leaving plain ESM.
  const { code } = await esbuild.transform(source, { loader: "ts", format: "esm" });
  const module = await import(
    `data:text/javascript;base64,${Buffer.from(code).toString("base64")}`
  );
  return module.TESTIMONIALS;
};

const escapeHtml = (text) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/**
 * One blockquote per review. Every quote is enclosed the same way - opening
 * mark on the first paragraph, closing mark on the last - however many
 * paragraphs it runs to.
 */
const renderReview = ({ quote, name, date, source }) => {
  const paragraphs = quote
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const body = paragraphs
    .map((paragraph, index) => {
      // A literal quote mark is valid in element content and stays readable
      // in the source; only &, < and > need escaping here.
      const open = index === 0 ? '"' : "";
      const close = index === paragraphs.length - 1 ? '"' : "";
      return `${INDENT}  <p>${open}${escapeHtml(paragraph)}${close}</p>`;
    })
    .join("\n");

  // "Direct" has nowhere to point a reader, so it is left unlabelled.
  const origin = source && source !== "Direct" ? ` (${source})` : "";
  const attribution = escapeHtml(`- ${name}, ${date}${origin}`);

  return `${INDENT}<blockquote>\n${body}\n${INDENT}  <footer>${attribution}</footer>\n${INDENT}</blockquote>`;
};

const testimonials = await loadTestimonials();
if (!Array.isArray(testimonials) || testimonials.length === 0) {
  console.error("sync-llm-reviews: no reviews exported from src/data/testimonials.ts");
  process.exit(1);
}

const html = fs.readFileSync(TARGET, "utf8");
const startAt = html.indexOf(START);
const endAt = html.indexOf(END);
if (startAt === -1 || endAt === -1 || endAt < startAt) {
  console.error(
    `sync-llm-reviews: could not find the ${START} / ${END} markers in public/llm.html`,
  );
  process.exit(1);
}

const block = testimonials.map(renderReview).join("\n\n");
const updated =
  html.slice(0, startAt + START.length) +
  `\n${block}\n${INDENT}` +
  html.slice(endAt);

if (updated === html) {
  console.log(`sync-llm-reviews: public/llm.html already matches (${testimonials.length} reviews)`);
  process.exit(0);
}

if (checkOnly) {
  console.error(
    "sync-llm-reviews: public/llm.html is out of date with src/data/testimonials.ts.\n" +
      "                 Run `npm run sync:reviews` and commit the result.",
  );
  process.exit(1);
}

fs.writeFileSync(TARGET, updated);
console.log(`sync-llm-reviews: updated public/llm.html (${testimonials.length} reviews)`);
