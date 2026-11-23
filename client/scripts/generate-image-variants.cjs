const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");

const root = path.resolve(__dirname, "../public/projects");
const output = path.join(root, "optimized");
const sources = ["p1.webp", "p2.png", "p3.png", "p6.png"];
const widths = [480, 960, 1440];

async function main() {
  fs.mkdirSync(output, { recursive: true });
  const report = [];
  for (const filename of sources) {
    const input = path.join(root, filename);
    if (!fs.existsSync(input)) throw new Error("Missing source image: " + filename);
    const metadata = await sharp(input).metadata();
    const originalBytes = fs.statSync(input).size;
    for (const width of widths) {
      if (metadata.width && metadata.width <= width) continue;
      const base = path.parse(filename).name;
      const pipeline = sharp(input).rotate().resize({ width, withoutEnlargement: true });
      const webpPath = path.join(output, base + "-" + width + ".webp");
      const avifPath = path.join(output, base + "-" + width + ".avif");
      await pipeline.clone().webp({ quality: 78, effort: 5 }).toFile(webpPath);
      await pipeline.clone().avif({ quality: 48, effort: 5 }).toFile(avifPath);
      report.push({
        source: filename,
        sourceBytes: originalBytes,
        sourceWidth: metadata.width,
        sourceHeight: metadata.height,
        width,
        webp: path.basename(webpPath),
        webpBytes: fs.statSync(webpPath).size,
        avif: path.basename(avifPath),
        avifBytes: fs.statSync(avifPath).size
      });
    }
  }
  fs.writeFileSync(path.resolve(__dirname, "../image-optimization-report.json"), JSON.stringify(report, null, 2) + "\n");
  console.log(JSON.stringify(report, null, 2));
}
main().catch((error) => { console.error(error); process.exit(1); });
