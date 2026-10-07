const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(
  __dirname,
  "..",
  process.argv.includes("--dist") ? "dist" : ".",
);
const securityHeaders = Object.fromEntries(
  require("../vercel.json").headers[0].headers.map(({ key, value }) => [
    key,
    value,
  ]),
);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".woff2": "font/woff2",
  ".txt": "text/plain",
  ".xml": "application/xml",
};
http
  .createServer((req, res) => {
    let file;
    try {
      const pathname = decodeURIComponent(
        new URL(req.url, "http://localhost").pathname,
      );
      if (
        pathname.split("/").some((segment) => segment.startsWith(".")) ||
        /\.(?:cjs|md|json)$/.test(pathname)
      )
        throw new Error("Private path");
      file = path.resolve(
        root,
        `.${pathname === "/" ? "/index.html" : pathname}`,
      );
      if (!file.startsWith(root + path.sep)) throw new Error("Invalid path");
    } catch {
      res.writeHead(404).end("Not found");
      return;
    }
    fs.readFile(file, (error, data) => {
      if (error) {
        res.writeHead(404).end("Not found");
        return;
      }
      res.writeHead(200, {
        ...securityHeaders,
        "Content-Type": types[path.extname(file)] || "application/octet-stream",
      });
      res.end(data);
    });
  })
  .listen(4173, "127.0.0.1", () =>
    console.log("MARAT DETAILING: http://127.0.0.1:4173"),
  );
