import fs from "node:fs/promises";
import path from "node:path";
import ejs from "ejs";

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

function pickCvLanding(cvObj) {
  const list = [];
  if (cvObj?.playable?.landing) list.push(cvObj.playable.landing);
  if (cvObj?.backend?.landing) list.push(cvObj.backend.landing);
  return list;
}

async function tryBuildCvPages({ contacts, cv }) {
  const cvTemplatePath = src("templates", "cv.ejs");
  const hasCvTemplate = await exists(cvTemplatePath);

  if (!hasCvTemplate) {
    console.warn("WARN: src/templates/cv.ejs not found — keeping old CVs from cv-old.");
    return;
  }

  const playablePage = cv?.playable?.page;
  const backendPage = cv?.backend?.page;

  if (!playablePage || !backendPage) {
    console.warn("WARN: cv.playable.page or cv.backend.page missing — keeping old CVs from cv-old.");
    return;
  }

  const playableHtml = await render("cv.ejs", { contacts, ...playablePage });
  const backendHtml = await render("cv.ejs", { contacts, ...backendPage });

  await write("cv/playable.html", playableHtml);
  await write("cv/backend.html", backendHtml);

  console.log(" - docs/cv/playable.html (generated)");
  console.log(" - docs/cv/backend.html (generated)");
}

async function main() {
  // Clean docs
  await rmDirSafe(out());

  // Copy static assets & demos
  await copyDir(p("src-static", "assets"), out("assets"));
  await copyDir(p("src-static", "demos"), out("demos"));

  // Copy old CVs (temporary migration step)
  await copyDir(src("templates", "cv-old"), out("cv"));

  // Shared data
  const contacts = await readJson("data/contacts.json");
  const site = await readJson("data/site.json");
  const projects = await readJson("data/projects.json");
  const cv = await readJson("data/cv.json");

  // Landing wants an array of CV cards
  const cvLanding = pickCvLanding(cv);

  // Render landing
  const indexHtml = await render("index.ejs", {
    contacts,
    site,
    projects,
    cv: cvLanding
  });
  await write("index.html", indexHtml);

  // Try to build new CV pages from cv.json (overwrites old copies if available)
  await tryBuildCvPages({ contacts, cv });

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
