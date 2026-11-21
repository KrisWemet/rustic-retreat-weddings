/**
 * Tell Bing (and the other IndexNow search engines) which pages changed, so
 * they recrawl them the same day instead of whenever they next visit. ChatGPT
 * search leans on Bing's index, so this is how site changes reach it quickly.
 *
 * Runs automatically after each production deploy (.github/workflows/indexnow.yml).
 * To run it by hand once a deploy is live:
 *
 *   npm run indexnow                      # every URL in public/sitemap.xml
 *   npm run indexnow -- /faqs /venue      # only these pages
 *   npm run indexnow -- --dry-run         # print what would be sent
 *
 * The key is the 32-character file in public/ (served at the site root); it is
 * public by design and proves the site owns these submissions.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const BASE = "https://www.rusticretreatalberta.ca";
const HOST = new URL(BASE).host;
const ENDPOINT = "https://api.indexnow.org/indexnow";

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const requested = args.filter((arg) => arg !== "--dry-run");

const keyFiles = fs.readdirSync(path.join(ROOT, "public")).filter((name) => /^[0-9a-f]{32}\.txt$/.test(name));
if (keyFiles.length !== 1) {
  console.error(`indexnow: expected one key file in public/, found ${keyFiles.length}`);
  process.exit(1);
}
const key = fs.readFileSync(path.join(ROOT, "public", keyFiles[0]), "utf8").trim();
if (`${key}.txt` !== keyFiles[0]) {
  console.error(`indexnow: public/${keyFiles[0]} must contain exactly its own name (without .txt)`);
  process.exit(1);
}

const sitemap = fs.readFileSync(path.join(ROOT, "public/sitemap.xml"), "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((match) => match[1]);

const urlList = requested.length
  ? requested.map((url) => (url.startsWith("http") ? url : `${BASE}${url.startsWith("/") ? "" : "/"}${url}`))
  : sitemapUrls;

const offHost = urlList.filter((url) => new URL(url).host !== HOST);
if (urlList.length === 0 || offHost.length > 0) {
  console.error(urlList.length === 0 ? "indexnow: no URLs to submit" : `indexnow: not on ${HOST}: ${offHost.join(", ")}`);
  process.exit(1);
}

const payload = { host: HOST, key, keyLocation: `${BASE}/${key}.txt`, urlList };

if (dryRun) {
  console.log(JSON.stringify(payload, null, 2));
  console.log(`indexnow: dry run, ${urlList.length} URL(s) not sent`);
  process.exit(0);
}

const res = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});

// 200 = accepted; 202 = accepted, key check still pending (normal for a brand-new key).
if (res.status === 200 || res.status === 202) {
  console.log(`indexnow: submitted ${urlList.length} URL(s), HTTP ${res.status}`);
} else {
  console.error(`indexnow: HTTP ${res.status} ${res.statusText} ${await res.text()}`.trim());
  process.exit(1);
}
