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
  assert.match(html, /rel="icon" type="image\/svg\+xml" href="\/favicon\.svg"/);
  const favicon = await read("../public/favicon.svg");
  assert.match(favicon, /<svg/);
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
  const projectPage = await read("../src/components/ProjectsPage.jsx");
  const contact = await read("../src/components/Contact.jsx");
  const admin = await read("../src/pages/Admin.jsx");
  const resume = await read("../src/components/Resume.jsx");

  for (const section of ["HomePage", "AboutPage", "SkillsPage", "ExperiencePage", "ServicesPage"]) {
    assert.ok(pages.includes(`function ${section}`), `Missing ${section}`);
  }
  assert.match(projectPage, /export default function ProjectsPage/);
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

  assert.match(app, /sections\.find\(item\s*=>\s*item\.toLowerCase\(\)===String\(name\)\.toLowerCase\(\)\)/);
  for (const field of ["name", "email", "subject", "message"]) {
    assert.ok(contact.includes('id="contact-' + field + '"'), "Missing contact field id: " + field);
    assert.ok(contact.includes('htmlFor="contact-' + field + '"'), "Missing associated label: " + field);
  }
  assert.match(contact, /aria-live="polite"/);
  assert.match(contact, /JSON\.stringify\(\{name:form\.name,email:form\.email,msg:form\.subject\+': '\+form\.msg\}\)/, "Preserve the existing contact submission payload");
  assert.match(contact, /32 public projects/);
});

test("keyboard navigation, mobile admin separation and project discovery stay accessible", async () => {
  const app = await read("../src/App.jsx");
  const navbar = await read("../src/components/Navbar.jsx");
  const pages = await read("../src/components/Pages.jsx");
  const projects = await read("../src/components/ProjectsShowcase.jsx");
  const css = await read("../src/index.css");

  assert.match(app, /href="#main-content"/);
  assert.match(app, /id="main-content"/);
  assert.match(app, /href="#\/admin"/, "Keep the protected admin route reachable from the footer");
  assert.doesNotMatch(navbar, /href="#\/admin"/, "Keep Admin out of the public mobile menu");
  assert.match(navbar, /event\.key === 'Escape'/);
  assert.match(pages, /prefers-reduced-motion: reduce/);
  assert.match(projects, /aria-pressed=\{active===f\}/);
  assert.match(projects, /type="search"/);
  assert.match(projects, /aria-live="polite"/);
  assert.match(projects, /event\.key==="Escape"/);
  assert.match(css, /\.skip-link:focus/);
});


test("project showcase references only existing local gallery assets", async () => {
  const source = await read("../src/components/ProjectsShowcase.jsx");
  const { readdir } = await import("node:fs/promises");
  const available = new Set(await readdir(new URL("../public/projects/", import.meta.url)));

  // Check every literal local project image, including cover images and explicit galleries.
  const literalAssets = [...source.matchAll(/["'`](\/projects\/[^"'`]+)["'`]/g)]
    .map(([, asset]) => asset.slice("/projects/".length))
    .filter((asset) => !asset.includes("${") && !asset.startsWith("http"));

  // makeGallery generates five additional local slides from each supplied project slug.
  const generatedAssets = [...source.matchAll(/makeGallery\("([^"]+)"/g)]
    .flatMap(([, slug]) => Array.from({ length: 5 }, (_, index) => `${slug}-0${index + 2}.svg`));

  const missing = [...new Set([...literalAssets, ...generatedAssets])]
    .filter((asset) => !available.has(asset));

  assert.deepEqual(missing, [], `Missing local project gallery assets: ${missing.join(", ")}`);
});


test("project gallery covers inline-generated slides, remote previews and image fallbacks", async () => {
  const source = await read("../src/components/ProjectsShowcase.jsx");
  const { readdir } = await import("node:fs/promises");
  const available = new Set(await readdir(new URL("../public/projects/", import.meta.url)));

  // Newer project entries generate slides from an inline slug template.
  const inlineGeneratedSlugs = [...source.matchAll(/\/projects\/([a-z0-9-]+)-0\$\{index\+2\}\.svg/g)]
    .map(([, slug]) => slug);
  assert.ok(inlineGeneratedSlugs.length > 0, "Expected inline-generated gallery entries to remain covered");

  const missingGenerated = [...new Set(inlineGeneratedSlugs)]
    .flatMap((slug) => Array.from({ length: 5 }, (_, index) => slug + "-0" + (index + 2) + ".svg"))
    .filter((asset) => !available.has(asset));
  assert.deepEqual(missingGenerated, [], "Missing inline-generated gallery slides: " + missingGenerated.join(", "));

  // BuildSphere screenshots are intentionally hosted in their source repository.
  const remoteAssets = [...new Set(source.match(/https:\/\/raw\.githubusercontent\.com\/[^"'\s]+/g) || [])];
  assert.equal(remoteAssets.length, 12, "Keep all twelve BuildSphere gallery screenshots");
  for (const url of remoteAssets) {
    assert.match(url, /^https:\/\/raw\.githubusercontent\.com\/matiur25580\/BuildSphere-Enterprise-Construction-Intelligence-Platform\/main\/docs\/screenshots\/\d{2}-[a-z-]+\.svg$/);
  }

  // A failed image must retain an accessible, visible project-card fallback.
  assert.match(source, /onError=\{\(\)\s*=>\s*setImageFailed\(true\)\}/);
  assert.match(source, /role="img" aria-label=/);
  assert.match(source, /Preview could not load/);
});


test("project showcase code is deferred until the section approaches the viewport", async () => {
  const app = await read("../src/App.jsx");
  const pages = await read("../src/components/Pages.jsx");
  const projectPage = await read("../src/components/ProjectsPage.jsx");

  assert.match(app, /lazy\(\(\) => import\('\.\/components\/ProjectsPage\.jsx'\)\)/);
  assert.match(app, /new IntersectionObserver/);
  assert.match(app, /rootMargin:'1000px 0px'/);
  assert.match(app, /!\('IntersectionObserver' in window\)/, "Load immediately when IntersectionObserver is unavailable");
  assert.match(app, /Projects will load as you approach this section/);
  assert.doesNotMatch(pages, /ProjectsShowcase/, "Keep the heavy project gallery out of the eager Pages module");
  assert.match(projectPage, /import ProjectsShowcase from ['"]\.\/ProjectsShowcase['"]/);
});


test("below-the-fold education images defer downloads and social icons stay first-party", async () => {
  const pages = await read("../src/components/Pages.jsx");
  const contact = await read("../src/components/Contact.jsx");
  const css = await read("../src/index.css");
  for (const image of ["/bitlogo.jpg", "/bit1.jpg", "/bit2.jpg", "/bit3.jpg", "/unilogo.svg", "/uni1.jpg", "/uni2.jpg", "/uni3.jpg"]) {
    const imageTag = pages.split("<img").find((tag) => tag.includes('src="' + image + '"'));
    assert.ok(imageTag, "Missing education image: " + image);
    assert.ok(imageTag.includes('loading="lazy"'), image + " should load lazily");
    assert.ok(imageTag.includes('decoding="async"'), image + " should decode asynchronously");
  }
  assert.ok(!contact.includes("cdn.simpleicons.org"), "Contact social icons should not depend on a third-party image host");
  assert.ok(contact.includes("/social-github.svg"));
  assert.ok(contact.includes("/social-instagram-white.svg"));
  assert.ok(contact.includes("/social-x.svg"));
  assert.ok(css.includes("font-family: Inter, ui-sans-serif, system-ui"));
  assert.ok(!css.includes("fonts.googleapis.com") && !css.includes("fonts.gstatic.com"), "Keep typography on the local system-font stack");
});

test("large project previews use responsive AVIF/WebP variants with original fallbacks", async () => {
  const responsiveImage = await read("../src/components/ResponsiveProjectImage.jsx");
  const pages = await read("../src/components/Pages.jsx");
  const showcase = await read("../src/components/ProjectsShowcase.jsx");
  for (const name of ["p1", "p2", "p3", "p6"]) {
    assert.ok(responsiveImage.includes("/projects/optimized/" + name + "-"));
  }
  assert.ok(responsiveImage.includes('type="image/avif"'));
  assert.ok(responsiveImage.includes('type="image/webp"'));
  assert.ok(responsiveImage.includes("src={src}"), "Keep the original image as a compatibility fallback");
  assert.ok(responsiveImage.includes("width={image.width}") && responsiveImage.includes("height={image.height}"), "Reserve intrinsic image dimensions");
  assert.ok(pages.includes("<ResponsiveProjectImage"));
  assert.ok(showcase.includes("<ResponsiveProjectImage"));
  assert.ok(showcase.includes("onError={() => setImageFailed(true)}"), "Preserve the existing gallery fallback behavior");
});
