import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const BASE_URL = "https://nordseecapital.com";
const APP_SERVER_DIR = path.resolve(".next/server/app");

const HTML_PAGES = [
  // Spanish Canonical Pages (11)
  { file: "index.html", path: "/", expectedCanonical: `${BASE_URL}`, expectedHreflangEn: `${BASE_URL}/en` },
  { file: "nosotros.html", path: "/nosotros", expectedCanonical: `${BASE_URL}/nosotros`, expectedHreflangEn: `${BASE_URL}/en/about` },
  { file: "contacto.html", path: "/contacto", expectedCanonical: `${BASE_URL}/contacto`, expectedHreflangEn: `${BASE_URL}/en/contact` },
  { file: "privacidad.html", path: "/privacidad", expectedCanonical: `${BASE_URL}/privacidad`, expectedHreflangEn: `${BASE_URL}/en/privacy` },
  { file: "servicios.html", path: "/servicios", expectedCanonical: `${BASE_URL}/servicios`, expectedHreflangEn: `${BASE_URL}/en/services` },
  { file: "servicios/real-estate.html", path: "/servicios/real-estate", expectedCanonical: `${BASE_URL}/servicios/real-estate`, expectedHreflangEn: `${BASE_URL}/en/services/real-estate` },
  { file: "servicios/wealth-management.html", path: "/servicios/wealth-management", expectedCanonical: `${BASE_URL}/servicios/wealth-management`, expectedHreflangEn: `${BASE_URL}/en/services/wealth-management` },
  { file: "servicios/deuda-privada.html", path: "/servicios/deuda-privada", expectedCanonical: `${BASE_URL}/servicios/deuda-privada`, expectedHreflangEn: `${BASE_URL}/en/services/private-debt` },
  { file: "servicios/ma.html", path: "/servicios/ma", expectedCanonical: `${BASE_URL}/servicios/ma`, expectedHreflangEn: `${BASE_URL}/en/services/ma` },
  { file: "servicios/tax-legal.html", path: "/servicios/tax-legal", expectedCanonical: `${BASE_URL}/servicios/tax-legal`, expectedHreflangEn: `${BASE_URL}/en/services/tax-legal` },
  { file: "servicios/golden-visa-portugal.html", path: "/servicios/golden-visa-portugal", expectedCanonical: `${BASE_URL}/servicios/golden-visa-portugal`, expectedHreflangEn: `${BASE_URL}/en/services/golden-visa-portugal` },

  // English Canonical Pages (11)
  { file: "en.html", path: "/en", expectedCanonical: `${BASE_URL}/en`, expectedHreflangEs: `${BASE_URL}` },
  { file: "en/about.html", path: "/en/about", expectedCanonical: `${BASE_URL}/en/about`, expectedHreflangEs: `${BASE_URL}/nosotros` },
  { file: "en/contact.html", path: "/en/contact", expectedCanonical: `${BASE_URL}/en/contact`, expectedHreflangEs: `${BASE_URL}/contacto` },
  { file: "en/privacy.html", path: "/en/privacy", expectedCanonical: `${BASE_URL}/en/privacy`, expectedHreflangEs: `${BASE_URL}/privacidad` },
  { file: "en/services.html", path: "/en/services", expectedCanonical: `${BASE_URL}/en/services`, expectedHreflangEs: `${BASE_URL}/servicios` },
  { file: "en/services/real-estate.html", path: "/en/services/real-estate", expectedCanonical: `${BASE_URL}/en/services/real-estate`, expectedHreflangEs: `${BASE_URL}/servicios/real-estate` },
  { file: "en/services/wealth-management.html", path: "/en/services/wealth-management", expectedCanonical: `${BASE_URL}/en/services/wealth-management`, expectedHreflangEs: `${BASE_URL}/servicios/wealth-management` },
  { file: "en/services/private-debt.html", path: "/en/services/private-debt", expectedCanonical: `${BASE_URL}/en/services/private-debt`, expectedHreflangEs: `${BASE_URL}/servicios/deuda-privada` },
  { file: "en/services/ma.html", path: "/en/services/ma", expectedCanonical: `${BASE_URL}/en/services/ma`, expectedHreflangEs: `${BASE_URL}/servicios/ma` },
  { file: "en/services/tax-legal.html", path: "/en/services/tax-legal", expectedCanonical: `${BASE_URL}/en/services/tax-legal`, expectedHreflangEs: `${BASE_URL}/servicios/tax-legal` },
  { file: "en/services/golden-visa-portugal.html", path: "/en/services/golden-visa-portugal", expectedCanonical: `${BASE_URL}/en/services/golden-visa-portugal`, expectedHreflangEs: `${BASE_URL}/servicios/golden-visa-portugal` },
];

function readHtml(relativePath) {
  const fullPath = path.join(APP_SERVER_DIR, relativePath);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Prerendered HTML not found: ${fullPath}. Did you run "pnpm build"?`);
  }
  return fs.readFileSync(fullPath, "utf8");
}

test("1. Titles have NO duplicated suffixes or corrupted pipes", () => {
  const titles = new Map();

  for (const page of HTML_PAGES) {
    const html = readHtml(page.file);
    const titleMatch = html.match(/<title>([^<]*)<\/title>/);
    assert.ok(titleMatch, `Missing <title> tag on ${page.path}`);

    const title = titleMatch[1].replace(/&amp;/g, "&");

    // Check for duplicate brand suffix
    const suffixCount = (title.match(/Nordsee Capital/g) || []).length;
    assert.strictEqual(
      suffixCount,
      1,
      `Duplicate or missing brand in title on ${page.path}: "${title}"`
    );

    // Check for double pipes like " | | " or " | Nordsee Capital | "
    assert.ok(
      !title.includes("| |") && !title.endsWith("|"),
      `Corrupted pipe formatting in title on ${page.path}: "${title}"`
    );

    titles.set(page.path, title);
  }

  // All page titles must be unique
  const uniqueTitles = new Set(titles.values());
  assert.strictEqual(
    uniqueTitles.size,
    titles.size,
    `Titles are not unique across pages! Found ${titles.size - uniqueTitles.size} duplicates.`
  );
});

test("2. Descriptions are present, valid length, and unique per page", () => {
  const descriptions = new Map();

  for (const page of HTML_PAGES) {
    const html = readHtml(page.file);
    const descMatch = html.match(/<meta name="description" content="([^"]*)"/);
    assert.ok(descMatch, `Missing meta description on ${page.path}`);

    const desc = descMatch[1].replace(/&amp;/g, "&");
    assert.ok(
      desc.length >= 50 && desc.length <= 250,
      `Description length on ${page.path} is out of optimal bounds (${desc.length} chars): "${desc}"`
    );

    descriptions.set(page.path, desc);
  }

  // All page descriptions must be unique
  const uniqueDescs = new Set(descriptions.values());
  assert.strictEqual(
    uniqueDescs.size,
    descriptions.size,
    `Descriptions are not unique across pages! Found ${descriptions.size - uniqueDescs.size} duplicates.`
  );
});

test("3. Canonicals are absolute, match production domain, and match expected URLs", () => {
  for (const page of HTML_PAGES) {
    const html = readHtml(page.file);
    const canonicalMatch = html.match(/<link rel="canonical" href="([^"]*)"/);
    assert.ok(canonicalMatch, `Missing canonical tag on ${page.path}`);

    const canonicalHref = canonicalMatch[1];
    assert.strictEqual(
      canonicalHref,
      page.expectedCanonical,
      `Canonical on ${page.path} does not match expected canonical URL: expected "${page.expectedCanonical}", got "${canonicalHref}"`
    );
    assert.ok(
      canonicalHref.startsWith("https://nordseecapital.com"),
      `Canonical on ${page.path} is not using absolute production domain: "${canonicalHref}"`
    );
  }
});

test("4. Reciprocal hreflang alternate links (es, en, x-default) are fully present on every page", () => {
  for (const page of HTML_PAGES) {
    const html = readHtml(page.file);

    const hreflangEsMatch = html.match(/<link rel="alternate" href[lL]ang="es" href="([^"]*)"/i);
    const hreflangEnMatch = html.match(/<link rel="alternate" href[lL]ang="en" href="([^"]*)"/i);
    const hreflangDefaultMatch = html.match(/<link rel="alternate" href[lL]ang="x-default" href="([^"]*)"/i);

    assert.ok(hreflangEsMatch, `Missing hreflang="es" on ${page.path}`);
    assert.ok(hreflangEnMatch, `Missing hreflang="en" on ${page.path}`);
    assert.ok(hreflangDefaultMatch, `Missing hreflang="x-default" on ${page.path}`);

    // Verify correct endpoints
    if (page.expectedHreflangEn) {
      assert.strictEqual(hreflangEnMatch[1], page.expectedHreflangEn, `Invalid hreflang="en" on ${page.path}`);
    }
    if (page.expectedHreflangEs) {
      assert.strictEqual(hreflangEsMatch[1], page.expectedHreflangEs, `Invalid hreflang="es" on ${page.path}`);
    }
  }
});

test("5. OpenGraph and Twitter cards are complete, specific, and reference existing images", () => {
  for (const page of HTML_PAGES) {
    const html = readHtml(page.file);

    const ogTitleMatch = html.match(/<meta property="og:title" content="([^"]*)"/);
    const ogDescMatch = html.match(/<meta property="og:description" content="([^"]*)"/);
    const ogImageMatch = html.match(/<meta property="og:image" content="([^"]*)"/);
    const ogUrlMatch = html.match(/<meta property="og:url" content="([^"]*)"/);
    const twitterCardMatch = html.match(/<meta name="twitter:card" content="([^"]*)"/);

    assert.ok(ogTitleMatch, `Missing og:title on ${page.path}`);
    assert.ok(ogDescMatch, `Missing og:description on ${page.path}`);
    assert.ok(ogImageMatch, `Missing og:image on ${page.path}`);
    assert.ok(ogUrlMatch, `Missing og:url on ${page.path}`);
    assert.ok(twitterCardMatch, `Missing twitter:card on ${page.path}`);

    // Verify og:url matches expected canonical
    assert.strictEqual(
      ogUrlMatch[1],
      page.expectedCanonical,
      `og:url on ${page.path} ("${ogUrlMatch[1]}") does not match canonical ("${page.expectedCanonical}")`
    );

    // Verify image file exists in public/
    const imageUrl = ogImageMatch[1];
    const imagePath = imageUrl.replace(/^https:\/\/nordseecapital\.com/, "");
    const localAssetPath = path.join("public", imagePath);
    assert.ok(
      fs.existsSync(localAssetPath),
      `og:image for ${page.path} points to non-existent local asset: ${localAssetPath}`
    );
  }
});

test("6. JSON-LD scripts are syntactically valid and contain expected schemas without duplication", () => {
  for (const page of HTML_PAGES) {
    const html = readHtml(page.file);
    const matches = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];

    assert.ok(matches.length >= 1, `No JSON-LD script found on ${page.path}`);

    const parsedSchemas = [];
    for (const match of matches) {
      let parsed;
      assert.doesNotThrow(() => {
        parsed = JSON.parse(match[1]);
      }, `Malformed JSON-LD syntax on ${page.path}`);
      parsedSchemas.push(parsed);
    }

    // Interior pages (not home / and not /en) must have BreadcrumbList
    if (page.path !== "/" && page.path !== "/en") {
      const hasBreadcrumb = parsedSchemas.some(
        (s) => s["@type"] === "BreadcrumbList"
      );
      assert.ok(
        hasBreadcrumb,
        `Page ${page.path} must have BreadcrumbList schema`
      );
    }

    // Service detail pages must have Service schema
    const isServiceDetail =
      (page.path.startsWith("/servicios/") && page.path !== "/servicios") ||
      (page.path.startsWith("/en/services/") && page.path !== "/en/services");

    if (isServiceDetail) {
      const hasService = parsedSchemas.some(
        (s) => s["@type"] === "Service"
      );
      assert.ok(
        hasService,
        `Service page ${page.path} must have Service schema`
      );
    }
  }
});

test("7. Sitemap.xml is valid, contains all 22 public canonical routes, and no forbidden routes", () => {
  const sitemapPath = path.join(APP_SERVER_DIR, "sitemap.xml.body");
  assert.ok(fs.existsSync(sitemapPath), "sitemap.xml.body not found");

  const sitemapContent = fs.readFileSync(sitemapPath, "utf8");
  const locs = [...sitemapContent.matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => m[1]);

  assert.strictEqual(
    locs.length,
    HTML_PAGES.length,
    `Sitemap has ${locs.length} URLs, expected ${HTML_PAGES.length}`
  );

  for (const page of HTML_PAGES) {
    assert.ok(
      locs.includes(page.expectedCanonical),
      `Sitemap is missing canonical URL: ${page.expectedCanonical}`
    );
  }

  // Ensure no /api/ or /_not-found URLs in sitemap
  for (const loc of locs) {
    assert.ok(!loc.includes("/api/"), `Forbidden API route in sitemap: ${loc}`);
    assert.ok(!loc.includes("_not-found"), `Forbidden 404 route in sitemap: ${loc}`);
  }
});

test("8. Robots.txt does not block public pages and points to production sitemap", () => {
  const robotsPath = path.join(APP_SERVER_DIR, "robots.txt.body");
  assert.ok(fs.existsSync(robotsPath), "robots.txt.body not found");

  const robotsContent = fs.readFileSync(robotsPath, "utf8");

  assert.ok(
    robotsContent.includes("Allow: /"),
    "robots.txt missing Allow: / directive"
  );
  assert.ok(
    robotsContent.includes("Sitemap: https://nordseecapital.com/sitemap.xml"),
    "robots.txt missing or incorrect Sitemap directive"
  );
  assert.ok(
    robotsContent.includes("Disallow: /api/"),
    "robots.txt missing Disallow: /api/ protection"
  );
});
