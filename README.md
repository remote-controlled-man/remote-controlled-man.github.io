# Steven Huang — personal website

A bilingual, static Astro website. English lives at `/`; Chinese lives at `/zh/`.
The site is configured for `https://remote-controlled-man.github.io/`.

## Run locally

Requires Node.js 22.23.4 or newer; Node.js 24 is used in deployment.

```sh
npm ci
npm run dev
```

Open the local address printed by Astro. To verify the production build:

```sh
npm run verify
npm run preview
```

## Update content

- `src/data/site.ts`: bilingual copy, project details, contribution links, and reading notes.
- `src/styles/global.css`: colors, typography, and responsive layout.
- `src/components/Site.astro`: page composition.
- `src/components/ProjectDiagram.astro`: explanatory project diagrams; these do not display experimental results.
- `src/assets/`: the light and dark workbench illustrations, reused from the existing public profile README. Astro optimizes them to WebP when building.
- `public/theme.js`: theme preference and accessible controls. The website remains readable without JavaScript.

The same templates produce both languages. Adding a page requires adding its route and both translations. Page-level language links preserve the current page.

Project descriptions come from the public repositories; selected contribution links were checked as merged on 2026-11-09. No internship work details are included. Keep public claims, evidence, and limitations aligned when updating copy. Do not copy old cached profile introductions into the website.

## GitHub Pages

Use the user-site repository named `remote-controlled-man.github.io`. In **Settings → Pages → Build and deployment → Source**, choose **GitHub Actions**.

The included workflow verifies all pages and theme behavior. Pull requests build and test without deploying. Pushes to `main` deploy the static `dist/` output. To restore a previous version, revert the relevant source commit and let the workflow redeploy it.

This repository is separate from the profile README repository. It does not change the existing `agent-context-memory-guide` project site. If a custom domain is added later, recheck that project's inherited domain and resource paths.

## Assets

DM Sans and DM Mono are served locally; their SIL Open Font License texts are included in `public/fonts/`. The workbench artwork comes from:

- https://github.com/remote-controlled-man/remote-controlled-man/blob/main/assets/hero-en-light-v16.png
- https://github.com/remote-controlled-man/remote-controlled-man/blob/main/assets/hero-en-dark-v16.png

No analytics, remote fonts, or live GitHub API calls are required by the website.
