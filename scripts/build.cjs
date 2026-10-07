/** Publish only the website. Tooling, originals and design studies stay in Git. */
const fs = require("node:fs/promises");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const output = path.join(root, "dist");
async function build() {
  if (path.dirname(output) !== root || path.basename(output) !== "dist")
    throw new Error("Unsafe output directory");
  await fs.rm(output, { recursive: true, force: true });
  await fs.mkdir(path.join(output, "scripts"), { recursive: true });
  for (const file of [
    "index.html",
    "privacy.html",
    "styles.css",
    "script.js",
    "config.js",
    "robots.txt",
    "sitemap.xml",
    "scripts/links.js",
  ]) {
    await fs.copyFile(path.join(root, file), path.join(output, file));
  }
  for (const directory of ["images", "fonts"]) {
    await fs.mkdir(path.join(output, "assets", directory), { recursive: true });
    for (const file of await fs.readdir(path.join(root, "assets", directory))) {
      if (!/\.(webp|woff2|css|txt)$/.test(file)) continue;
      await fs.copyFile(
        path.join(root, "assets", directory, file),
        path.join(output, "assets", directory, file),
      );
    }
  }
  await fs.copyFile(
    path.join(root, "assets/favicon.svg"),
    path.join(output, "assets/favicon.svg"),
  );
  console.log("Built static website in dist/");
}
build().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
