import fs from "node:fs/promises";
import path from "node:path";
import ejs from "ejs";
import { pathToFileURL } from "node:url";

const root = process.cwd();

const p = (...x) => path.join(root, ...x);
const src = (...x) => p("src", ...x);
const out = (...x) => p("docs", ...x);

async function rmDirSafe(dir) {
  await fs.rm(dir, { recursive: true, force: true });
}

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function copyDir(srcDir, dstDir) {
  try {
    await fs.mkdir(dstDir, { recursive: true });
    const entries = await fs.readdir(srcDir, { withFileTypes: true });

    for (const e of entries) {
      const from = path.join(srcDir, e.name);
      const to = path.join(dstDir, e.name);

      if (e.isDirectory()) await copyDir(from, to);
      else if (e.isFile()) await fs.copyFile(from, to);
    }
  } catch {
    // ignore if source does not exist
  }
}

async function readJson(rel) {
  return JSON.parse(await fs.readFile(src(rel), "utf8"));
}

async function render(templateRel, data) {
  const tplPath = src("templates", templateRel);
  const tpl = await fs.readFile(tplPath, "utf8");
  return ejs.render(tpl, data, { filename: tplPath });
}

async function write(rel, content) {
  const filePath = out(rel);
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, content, "utf8");
}

function toFileUrl(absPath) {
  return pathToFileURL(absPath).toString();
}

async function cleanDirKeepRoot(dir) {
  await fs.mkdir(dir, { recursive: true });
  const entries = await fs.readdir(dir, { withFileTypes: true });
  await Promise.all(
    entries.map((e) =>
      fs.rm(path.join(dir, e.name), { recursive: true, force: true }),
    ),
  );
}

/**
 * Load all CV JSON files from src/data/cv/*.json
 * Each file must contain: { landing: {...}, page: {...} }
 * Filename becomes slug automatically.
 */
async function loadAllCvs() {
  const dir = src("data", "cv");

  let files = [];
  try {
    files = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return [];
  }

  const cvFiles = files
    .filter((e) => e.isFile() && e.name.endsWith(".json"))
    .map((e) => e.name);

  const result = [];

  for (const file of cvFiles) {
    const fullPath = path.join(dir, file);
    const data = JSON.parse(await fs.readFile(fullPath, "utf8"));

    const slug = file.replace(".json", "");

    if (!data?.landing || !data?.page) {
      console.warn(
        `WARN: CV file "${file}" must contain { landing, page }. Skipping.`,
      );
      continue;
    }

    result.push({
      slug,
      landing: {
        ...data.landing,
        href: `cv/${slug}.html`,
        pdf: `cv/${slug}.pdf`,
      },
      page: data.page,
    });
  }

  // Optional sort by landing.order
  result.sort((a, b) => {
    const ao = a.landing?.order ?? 999;
    const bo = b.landing?.order ?? 999;
    return ao - bo;
  });

  return result;
}

async function buildPdfFromHtml({ htmlAbsPath, pdfAbsPath }) {
  const { chromium } = await import("playwright");

  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(toFileUrl(htmlAbsPath), { waitUntil: "networkidle" });

  // Ensure print CSS is applied + light scheme for PDF
  await page.emulateMedia({ media: "print", colorScheme: "light" });

  // Optional but keeps layout stable
  await page.setViewportSize({ width: 1280, height: 720 });

  await page.pdf({
    path: pdfAbsPath,
    format: "A4",
    printBackground: true,
    margin: { top: "12mm", right: "12mm", bottom: "12mm", left: "12mm" },
  });

  await browser.close();
}

async function tryBuildCvPages({ contacts, cvs }) {
  const cvTemplatePath = src("templates", "cv.ejs");
  const hasCvTemplate = await exists(cvTemplatePath);

  if (!hasCvTemplate) {
    console.warn(
      "WARN: src/templates/cv.ejs not found — keeping old CVs from cv-old.",
    );
    return;
  }

  if (!cvs?.length) {
    console.warn(
      "WARN: No CVs found in src/data/cv/*.json — keeping old CVs from cv-old.",
    );
    return;
  }

  for (const cvItem of cvs) {
    const html = await render("cv.ejs", { contacts, ...cvItem.page });

    const htmlRel = `cv/${cvItem.slug}.html`;
    await write(htmlRel, html);
    console.log(` - docs/${htmlRel} (generated)`);

    if (process.env.BUILD_PDF === "0") continue;

    try {
      const htmlAbs = out(htmlRel);
      const pdfAbs = out(`cv/${cvItem.slug}.pdf`);

      await buildPdfFromHtml({ htmlAbsPath: htmlAbs, pdfAbsPath: pdfAbs });
      console.log(` - docs/cv/${cvItem.slug}.pdf (generated)`);
    } catch (e) {
      console.warn(
        `WARN: PDF generation failed for "${cvItem.slug}". Make sure playwright + chromium are installed.`,
      );
      console.warn(String(e?.message || e));
    }
  }

  if (process.env.BUILD_PDF === "0") {
    console.log(" - PDF skipped (BUILD_PDF=0)");
  }
}

async function main() {
  // Clean docs
  if (process.env.DEV === "1") await cleanDirKeepRoot(out());
  else await rmDirSafe(out());

  // Copy static assets & demos
  await copyDir(p("src-static", "assets"), out("assets"));
  await copyDir(p("src-static", "demos"), out("demos"));
  await copyDir(p("src-static", "legal"), out("legal"));

  // Copy old CVs (temporary migration step)
  await copyDir(src("templates", "cv-old"), out("cv"));

  // Shared data
  const contacts = await readJson("data/contacts.json");
  const site = await readJson("data/site.json");
  const projects = await readJson("data/projects.json");

  // Load CVs from folder
  const cvs = await loadAllCvs();

  // Landing wants an array of CV cards
  const cvLanding = cvs.map((c) => c.landing);

  // Render landing
  const indexHtml = await render("index.ejs", {
    contacts,
    site,
    projects,
    cv: cvLanding,
  });
  await write("index.html", indexHtml);

  // Build CV pages (overwrites old copies if available)
  await tryBuildCvPages({ contacts, cvs });

  console.log("Built:");
  console.log(" - docs/index.html");
  console.log(" - docs/assets");
  console.log(" - docs/demos");
  console.log(" - docs/cv (old copied, may be overwritten by generated pages)");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
