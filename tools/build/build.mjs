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

  // Render landing
  const indexHtml = await render("index.ejs", { contacts, site });
  await write("index.html", indexHtml);

  console.log("Built:");
  console.log(" - docs/index.html");
  console.log(" - docs/assets");
  console.log(" - docs/demos");
  console.log(" - docs/cv (old copied)");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
