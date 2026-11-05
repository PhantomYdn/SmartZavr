# Claude Entry Point

Static marketing site for smartzavr.ru (Russian online math tutoring). Vite 8 + Tailwind CSS v4 + vanilla JS. No framework, no backend.

## Quick Start

```bash
nvm use            # Node 24, see .nvmrc
npm ci
npm run dev        # http://localhost:5173, hot reload
npm run build      # -> dist/
npm run preview    # serve dist/ locally
```

Keep a dev server running in the background during a session so the site can be checked manually.

## Layout

| Path | Purpose |
|---|---|
| `src/index.html` | The whole SPA, all 8 sections inline, plus Yandex Metrika and JSON-LD |
| `src/main.js` | Menu, FAQ accordion, forms (Google Apps Script), callback modal, Metrika goals |
| `src/style.css` | Tailwind import plus `@theme` tokens (brand colors, fonts) |
| `src/assets/` | Images that Vite hashes (hero character) |
| `public/` | Files served at a fixed URL: favicons, `site.webmanifest`, `logo.png`, `robots.txt`, `sitemap.xml` |
| `Dockerfile` | What production builds: Node 24 build stage, nginx serving `dist/` |
| `.github/workflows/static.yml` | Builds `dist/` and publishes a GitHub Pages preview |
| `input-graphics/` | Original artwork, not shipped |

Documentation: `README.md` (business goals, design system, TODO), `SETUP.md` (dev, deploy, forms, analytics), `PROJECT_SUMMARY.md` (status), `structure.md`, `seo.md`, `competitors.md`, `docs/` (Yandex Direct campaign).

## Rules

- **The GitHub repository is public.** Never commit credentials, tokens, `.http` scratch files or machine-specific config. `.mcp.json` and `.claude/settings.local.json` are ignored on purpose.
- Production (smartzavr.ru) deploys from GitHub `main`: the server pulls, runs `docker build`, deploys on success. Treat every push to `main` as a release: `npm run build` and `docker build` locally first, check `npm audit`.
- Anything that needs a stable URL (favicon, manifest, logo referenced from JSON-LD or og:image) goes in `public/`, not `src/assets/`.
- Brand colors and fonts live only in the `@theme` block of `src/style.css`.
- Update the TODO list in `README.md` when finishing a task.

## Key Info

**Contact**: Phone +79959191301, Email Smartzavr@gmail.com, Telegram @AVmathematics, channel @smartzavr
**Pricing**: Individual 5000₽, Group 2500₽, Curated 15000₽
**Analytics**: Yandex Metrika counter 104701968, goals sent via `trackYandexGoal()` in `src/main.js`
**Forms**: POST to a Google Apps Script web app, URL in `src/main.js`
