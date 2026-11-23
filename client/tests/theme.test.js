import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(path, import.meta.url), "utf8");

test("theme preference is applied before React renders and remains persistent", async () => {
  const main = await read("../src/main.jsx");
  const theme = await read("../src/utils/theme.js");
  const navbar = await read("../src/components/Navbar.jsx");

  assert.match(main, /initTheme\\(\\)\\s*ReactDOM\\.createRoot/);
  assert.match(theme, /localStorage\\.getItem\\(THEME_KEY\\)/);
  assert.match(theme, /localStorage\\.setItem\\(THEME_KEY/);
  assert.match(theme, /classList\\.toggle\\('light-mode'/);
  assert.match(navbar, /setDark\\(toggleTheme\\(\\)\\)/);
  assert.match(navbar, /aria-pressed=\\{!dark\\}/);
});

test("light theme styles the full portfolio, including existing dark cards and project showcase", async () => {
  const css = await read("../src/index.css");

  for (const token of [
    "html.light-mode body",
    "html.light-mode #root",
    'class~="bg-[#0a0a0a]"',
    'class~="bg-[#111]"',
    'class~="bg-[#101625]"',
    'class~="bg-[#0b1220]"',
    'class~="text-slate-200"',
    'class~="text-cyan-300"',
    'class~="border-gray-800"',
    "html.light-mode nav",
  ]) {
    assert.ok(css.includes(token), "Missing full-page light theme rule: " + token);
  }
  assert.match(css, /prefers-reduced-motion/);
});

test("light theme uses accessible dark green text while dark theme keeps its original accent", async () => {
  const css = await read("../src/index.css");

  assert.match(css, /html\\.light-mode \\[class~=\\"text-green-300\\"\\]/);
  assert.match(css, /html\\.light-mode \\[class~=\\"text-green-400\\"\\]/);
  assert.match(css, /html\\.light-mode \\[class~=\\"text-green-500\\"\\]/);
  assert.match(css, /html\\.light-mode \\[class~=\\"hover:text-green-300\\"\\]:hover/);
  assert.match(css, /color:\\s*#166534\\s*!important/);
  assert.match(css, /--portfolio-accent:\\s*#4ade80/);
});

test("theme update keeps every portfolio section and existing features wired", async () => {
  const app = await read("../src/App.jsx");
  const navbar = await read("../src/components/Navbar.jsx");

  for (const feature of [
    "HomePage", "AboutPage", "SkillsPage", "ExperiencePage",
    "ServicesPage", "ProjectsPage", "Contact", "Resume", "Admin",
  ]) {
    assert.ok(app.includes(feature), "Missing existing feature: " + feature);
  }
  assert.match(navbar, /Home.*About.*Skills.*Experience.*Services.*Projects.*Contact.*Resume/);
});
