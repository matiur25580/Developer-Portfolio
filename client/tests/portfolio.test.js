import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(path, import.meta.url), "utf8");

test("portfolio keeps all 32 project repositories plus its own featured entry", async () => {
  const source = await read("../src/components/ProjectsShowcase.jsx");
  const projects = [...source.matchAll(/\{ slug:"([^"]+)", title:"([^"]+)"[\s\S]*?repo:"([^"]+)"/g)]
    .map(([, slug, title, repo]) => ({ slug, title, repo }));

  assert.equal(projects.length, 33, "Keep the portfolio entry and all 32 project repositories visible");
  assert.equal(new Set(projects.map((project) => project.slug)).size, 33, "Project slugs must be unique");

  const portfolioEntries = projects.filter((project) => project.slug === "portfolio");
  const repositoryProjects = projects.filter((project) => project.slug !== "portfolio");

  assert.equal(portfolioEntries.length, 1, "Keep the portfolio itself featured exactly once");
  assert.equal(repositoryProjects.length, 32, "Keep all 32 external project repositories");
  for (const project of projects) {
    assert.ok(project.title.trim(), `Missing title for ${project.slug}`);
    assert.ok(project.repo.trim(), `Missing repository for ${project.slug}`);
  }

  const profile = await read("../src/data/profile.js");
  assert.match(profile, /projectsCount:\s*32/, "Keep the profile project count in sync");
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

test("core portfolio routes and admin/resume/contact features remain wired", async () => {
  const app = await read("../src/App.jsx");
  const pages = await read("../src/components/Pages.jsx");
  const contact = await read("../src/components/Contact.jsx");
  const admin = await read("../src/pages/Admin.jsx");
  const resume = await read("../src/components/Resume.jsx");

  for (const section of ["HomePage", "AboutPage", "SkillsPage", "ExperiencePage", "ServicesPage", "ProjectsPage"]) {
    assert.ok(pages.includes(`function ${section}`), `Missing ${section}`);
  }
  for (const feature of ["Contact", "Resume", "Admin"]) {
    assert.ok(app.includes(feature), `${feature} feature is no longer wired into the app`);
  }
  assert.match(contact, /Send Message/);
  assert.match(admin, /Delete All/);
  assert.match(resume, /Save PDF/);
});

test("home hero My Works action receives the section navigation callback", async () => {
  const app = await read("../src/App.jsx");
  const pages = await read("../src/components/Pages.jsx");

  assert.match(app, /<HomePage\s+go={scrollToSection}\s+setActive={scrollToSection}\s*\/>/);
  assert.match(pages, /const _nav = props\.go \|\| props\.setPage \|\| props\.nav/);
  assert.match(pages, /onClick=\{\(\)=>_nav\('projects'\)\}/);
});

test("section navigation normalizes case and contact form fields have explicit labels", async () => {
  const app = await read("../src/App.jsx");
  const contact = await read("../src/components/Contact.jsx");

  assert.match(app, /sections\.find\(item => item\.toLowerCase\(\)===String\(name\)\.toLowerCase\(\)\)/);
  for (const field of ["name", "email", "subject", "message"]) {
    assert.ok(contact.includes('id="contact-' + field + '"'), "Missing contact field id: " + field);
    assert.ok(contact.includes('htmlFor="contact-' + field + '"'), "Missing associated label: " + field);
  }
  assert.match(contact, /aria-live="polite"/);
  assert.match(contact, /32 public projects/);
});
