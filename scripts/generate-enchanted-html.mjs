#!/usr/bin/env node

import { promises as fs } from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const markdownPath = path.resolve(projectRoot, "Enchanted.md");
const outputDir = path.resolve(projectRoot, "public", "downloads");
const outputHtmlPath = path.resolve(outputDir, "enchanted.html");

// The modern, minimalist leaf logo
const LEAF_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" class="logo-icon" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M32 4C44.8 14.7 52 26.7 52 39.3C52 50.8 43.6 58.8 32 60C20.4 58.8 12 50.8 12 39.3C12 26.7 19.2 14.7 32 4Z" stroke-width="3"/>
  <path d="M32 55V36.5C32 29.2 33.9 22.7 38.1 16.4" stroke-width="2.8"/>
  <path d="M31.9 39.8C27.2 38 23.9 34.8 21.9 30.1" stroke-width="1.9"/>
  <path d="M32 34.2C28.7 32.2 26.3 29.4 24.8 25.8" stroke-width="1.8"/>
  <path d="M32.4 35.8C36.5 34.2 39.8 31.4 42.2 27.5" stroke-width="1.9"/>
  <path d="M32.6 43.8C37.6 43.7 41.8 41.9 45.3 38.4" stroke-width="1.8"/>
</svg>`;

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderInline(text) {
  let html = escapeHtml(text);

  html = html.replace(/\`([^\`]+)\`/g, (_, code) => `<code>${escapeHtml(code)}</code>`);
  html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, (_, label, url) => {
    const safeLabel = escapeHtml(label);
    const safeUrl = escapeHtml(url);
    return `<a href="${safeUrl}" target="_blank" rel="noreferrer">${safeLabel}</a>`;
  });
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");

  return html;
}

function isAllCapsHeading(text) {
  if (text.length < 4 || text.length > 85) {
    return false;
  }

  if (/[a-z]/.test(text) || !/[A-Z]/.test(text)) {
    return false;
  }

  return /^[A-Z0-9 '&:+\-.,!?()]+$/.test(text);
}

function markdownToHtml(markdown) {
  const lines = markdown.split(/\r?\n/);
  const output = [];
  const paragraph = [];
  const quote = [];
  const listStack = [];
  let inCodeBlock = false;
  let codeLines = [];
  let hasPrimaryHeading = true;
  let previousOrderedListItem = false;

  function nextNonEmptyLine(fromIndex) {
    for (let i = fromIndex; i < lines.length; i += 1) {
      const candidate = lines[i].trim();
      if (candidate !== "") {
        return candidate;
      }
    }
    return null;
  }

  function flushParagraph() {
    if (paragraph.length === 0) {
      return;
    }

    output.push(`<p>${paragraph.map((line) => renderInline(line)).join("<br />")}</p>`);
    paragraph.length = 0;
  }

  function flushQuote() {
    if (quote.length === 0) {
      return;
    }

    output.push(`<blockquote>${renderInline(quote.join(" "))}</blockquote>`);
    quote.length = 0;
  }

  function closeList(type) {
    const expected = type === "ul" ? "</ul>" : "</ol>";
    output.push(expected);
  }

  function closeAllLists() {
    while (listStack.length > 0) {
      closeList(listStack.pop());
    }
  }

  function closeNonMatchingList(nextType) {
    while (listStack.length > 0 && listStack[listStack.length - 1] !== nextType) {
      closeList(listStack.pop());
    }
  }

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const trimmed = line.trim();

    if (inCodeBlock) {
      if (trimmed.startsWith("\`\`\`")) {
        output.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
        inCodeBlock = false;
        codeLines = [];
        previousOrderedListItem = false;
      } else {
        codeLines.push(line);
      }
      continue;
    }

    if (trimmed === "") {
      flushParagraph();
      flushQuote();
      closeAllLists();
      previousOrderedListItem = false;
      continue;
    }

    if (trimmed.startsWith("\`\`\`")) {
      flushParagraph();
      flushQuote();
      closeAllLists();
      inCodeBlock = true;
      previousOrderedListItem = false;
      continue;
    }

    const headingMatch = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      flushParagraph();
      flushQuote();
      closeAllLists();
      const level = headingMatch[1].length;
      output.push(`<h${level}>${renderInline(headingMatch[2])}</h${level}>`);
      if (level === 1) {
        hasPrimaryHeading = true;
      }
      previousOrderedListItem = false;
      continue;
    }

    if (isAllCapsHeading(trimmed)) {
      flushParagraph();
      flushQuote();
      closeAllLists();
      const tag = hasPrimaryHeading ? "h2" : "h1";
      output.push(`<${tag}>${renderInline(trimmed)}</${tag}>`);
      hasPrimaryHeading = true;
      previousOrderedListItem = false;
      continue;
    }

    if (/^(-{3,}|\*{3,}|_{3,})$/.test(trimmed)) {
      flushParagraph();
      flushQuote();
      closeAllLists();
      output.push("<hr />");
      previousOrderedListItem = false;
      continue;
    }

    const unorderedMatch = trimmed.match(/^[-*+]\s+(.+)$/);
    if (unorderedMatch) {
      flushParagraph();
      flushQuote();
      closeNonMatchingList("ul");
      if (listStack[listStack.length - 1] !== "ul") {
        output.push("<ul>");
        listStack.push("ul");
      }
      output.push(`<li>${renderInline(unorderedMatch[1])}</li>`);
      previousOrderedListItem = false;
      continue;
    }

    const orderedMatch = trimmed.match(/^\d+\.\s+(.+)$/);
    if (orderedMatch) {
      const nextLine = nextNonEmptyLine(i + 1);
      const hasAdjacentOrdered = previousOrderedListItem || (nextLine !== null && /^\d+\.\s+/.test(nextLine));

      if (hasAdjacentOrdered) {
        flushParagraph();
        flushQuote();
        closeNonMatchingList("ol");
        if (listStack[listStack.length - 1] !== "ol") {
          output.push("<ol>");
          listStack.push("ol");
        }
        output.push(`<li>${renderInline(orderedMatch[1])}</li>`);
        previousOrderedListItem = true;
      } else {
        flushQuote();
        closeAllLists();
        paragraph.push(trimmed);
        previousOrderedListItem = false;
      }
      continue;
    }

    const quoteMatch = trimmed.match(/^>\s?(.*)$/);
    if (quoteMatch) {
      flushParagraph();
      closeAllLists();
      quote.push(quoteMatch[1]);
      previousOrderedListItem = false;
      continue;
    }

    flushQuote();
    closeAllLists();
    paragraph.push(trimmed);
    previousOrderedListItem = false;
  }

  flushParagraph();
  flushQuote();
  closeAllLists();

  if (inCodeBlock) {
    output.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
  }

  return output.join("\n");
}

function extractTitle(markdown) {
  const match = markdown.match(/^\s*#\s+(.+)$/m);
  if (!match) {
    return "Enchanted Package";
  }
  return match[1].trim();
}

async function run() {
  let markdown = "";
  try {
    markdown = await fs.readFile(markdownPath, "utf8");
  } catch (error) {
    console.error(`Unable to read ${markdownPath}`);
    throw error;
  }

  const hasContent = markdown.trim().length > 0;
  const markdownForRendering = hasContent
    ? markdown
    : "# Enchanted Package\n\nContent pending. Add your package details to Enchanted.md and regenerate this PDF.";

  const title = extractTitle(markdownForRendering);
  const renderedContent = markdownToHtml(markdownForRendering);
  const generatedAt = new Date().toLocaleString("en-CA", {
    dateStyle: "long",
    timeStyle: "short",
  });

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap" rel="stylesheet" />
  <style>
    /* Robust Hex Colors matched directly to the Tailwind theme HSL values */
    :root {
      --background: #fdfaf5; /* 40 30% 96% Cream */
      --foreground: #4e4034; /* 25 20% 25% Warm Gray Text */
      --card: #fefcf9; /* 40 25% 98% Light Card */
      --border: #e6dfd1; /* 40 15% 88% Soft Border */
      
      --brand-primary: #5c4b3d; /* 25 20% 30% Warm Brown */
      --brand-secondary: #c98877; /* 12 45% 65% Terracotta */
      
      --gradient-subtle: linear-gradient(180deg, #fdfaf5, #f3efe6);
    }

    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    @page {
      size: Letter;
      margin: 0; /* Fully bleed background */
    }

    body {
      margin: 0;
      padding: 0;
      font-family: "Inter", system-ui, sans-serif;
      color: var(--foreground);
      background: var(--background);
      line-height: 1.65;
      font-size: 11.5pt;
    }

    .page {
      background: var(--gradient-subtle);
      min-height: 11in;
      display: flex;
      flex-direction: column;
    }

    .cover {
      /* Elegant header matched to the site's styling */
      padding: 0.8in 0.8in 0.6in;
      background: var(--brand-primary);
      color: #fdfaf5;
      border-bottom: 6px solid var(--brand-secondary);
      position: relative;
    }

    .brand-logo-container {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1rem;
      color: var(--brand-secondary);
    }
    
    .logo-icon {
      width: 2.2rem;
      height: 2.2rem;
    }

    .eyebrow {
      margin: 0;
      font-family: "Playfair Display", Georgia, serif;
      font-size: 1.5rem;
      font-weight: 600;
      font-style: italic;
      color: #fdfaf5;
      letter-spacing: 0.02em;
    }

    h1 {
      margin: 0.2rem 0 0;
      font-family: "Playfair Display", Georgia, serif;
      font-size: 3.2rem;
      line-height: 1.1;
      font-weight: 700;
      letter-spacing: 0.01em;
      color: #fdfaf5;
    }

    .subtitle {
      margin: 0.8rem 0 0;
      font-size: 1rem;
      color: #E2DBD5; /* Softened cream */
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-weight: 600;
    }

    .content {
      padding: 0.6in 0.8in 0.4in;
      flex: 1;
    }

    h2, h3, h4, h5, h6 {
      margin: 1.8rem 0 0.8rem;
      font-family: "Playfair Display", Georgia, serif;
      color: var(--brand-primary);
      line-height: 1.3;
      break-after: avoid-page;
      font-weight: 600;
    }

    h2 {
      font-size: 1.6rem;
      border-bottom: 1px solid var(--border);
      padding-bottom: 0.3rem;
      margin-top: 2.2rem;
    }
    
    .content > h2:first-child {
      margin-top: 0;
    }

    h3 {
      font-size: 1.3rem;
      font-style: italic;
    }

    p {
      margin: 0 0 0.9rem;
      color: var(--foreground);
    }

    ul, ol {
      margin: 0.5rem 0 1rem 1.5rem;
      padding: 0;
    }

    li {
      margin: 0.3rem 0;
      padding-left: 0.2rem;
    }
    
    li::marker {
      color: var(--brand-secondary);
    }

    a {
      color: var(--brand-secondary);
      text-decoration-thickness: 1px;
      text-underline-offset: 2px;
    }

    strong {
      color: var(--brand-primary);
      font-weight: 600;
    }

    code {
      background: #f1ebd8;
      border: 1px solid var(--border);
      border-radius: 4px;
      padding: 0.1rem 0.3rem;
      font-size: 0.92em;
      color: var(--brand-primary);
    }

    pre {
      background: #f1ebd8;
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 0.8rem;
      overflow: auto;
      margin: 1rem 0;
    }

    pre code {
      border: 0;
      background: transparent;
      padding: 0;
      font-size: 0.9em;
      color: var(--brand-primary);
    }

    blockquote {
      margin: 1.2rem 0;
      padding: 0.8rem 1rem;
      border-left: 4px solid var(--brand-secondary);
      background: #fdfaf5;
      color: var(--brand-primary);
      font-style: italic;
      border-radius: 0 8px 8px 0;
    }

    hr {
      border: 0;
      border-top: 1px solid var(--border);
      margin: 1.5rem 0;
    }

    .footer {
      padding: 0.4in 0.8in;
      color: #8c8077;
      font-size: 0.85rem;
      border-top: 1px solid var(--border);
      background: var(--background);
      text-align: center;
      font-style: italic;
    }
  </style>
</head>
<body>
  <div class="page">
    <header class="cover">
      <div class="brand-logo-container">
        ${LEAF_SVG}
        <h2 class="eyebrow">Rustic Retreat</h2>
      </div>
      <h1>${escapeHtml(title)}</h1>
      <p class="subtitle">Enchanted Collection Overview</p>
    </header>
    <section class="content">
${renderedContent}
    </section>
    <footer class="footer">
      Generated for Rustic Retreat Weddings on ${escapeHtml(generatedAt)}
    </footer>
  </div>
</body>
</html>
`;

  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(outputHtmlPath, html, "utf8");

  console.log(`Wrote ${path.relative(projectRoot, outputHtmlPath)}`);
  if (!hasContent) {
    console.warn("Enchanted.md is empty. Added a placeholder message in enchanted.html and enchanted.pdf.");
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
