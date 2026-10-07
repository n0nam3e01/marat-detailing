const sharp = require("sharp");
const path = require("node:path");
const fs = require("node:fs/promises");
const root = path.resolve(__dirname, "../assets/images");
(async () => {
  const files = await fs.readdir(root);
  for (const file of files.filter((name) => /\.(png|jpg)$/.test(name))) {
    const name = path.parse(file).name.replace("-original", "");
    const sizes = name === "hero" ? [800, 1600, 2200] : [800];
    for (const width of sizes) {
      await sharp(path.join(root, file))
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(
          path.join(root, `${name}${name === "hero" ? "-" + width : ""}.webp`),
        );
    }
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
