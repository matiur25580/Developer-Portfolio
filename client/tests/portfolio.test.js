import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(path, import.meta.url), "utf8");

test("portfolio lists exactly 31 projects with unique slugs and repository links", async () => {
  const source = await read("../src/components/ProjectsShowcase.jsx");
  const projects = [...source.matchAll(/\{ slug:"([^"]+)", title:"([^"]+)"[\s\S]*?repo:"([^"]+)"/g)]
    .map(([, slug, title, repo]) => ({ slug, title, repo }));

  assert.equal(projects.length, 31, "Keep all 31 portfolio projects visible");
  assert.equal(new Set(projects.map((project) => project.slug)).size, 31, "Project slugs must be unique");
  for (const project of projects) {
    assert.ok(project.title.trim(), `Missing title for ${project.slug}`);
    assert.ok(project.repo.trim(), `Missing GitHub repository for ${project.slug}`);
  }
});

test("portfolio document includes canonical and social metadata", async () => {
  const html = await read("../index.html");
  assert.match(html, /<title>Matiur Rahaman \| Full-Stack Developer Portfolio<\/title>/);
  assert.match(html, /name="description"/);
  assert.match(html, /rel="canonical"/);
  assert.match(html, /property="og:title"/);
  assert.match(html, /name="twitter:card"/);
});

test("crawler discovery files point to the canonical portfolio", async () => {
  const robots = await read("../public/robots.txt");
  const sitemap = await read("../public/sitemap.xml");
  const canonical = "https://developer-portfolio-client.vercel.app/";

  assert.match(robots, /User-agent:\s*\*/);
  assert.match(robots, /Allow:\s*\//);
  assert.ok(robots.includes(`${canonical}sitemap.xml`));
  assert.ok(sitemap.includes(`<loc>${canonical}</loc>`));
});
