# Agent Notes

SmartZavr.ru: static site for a Russian math tutoring service. Vite 8, Tailwind CSS v4 (CSS-first config), vanilla JavaScript. See `CLAUDE.md` for the entry point and rules, `SETUP.md` for deployment.

## Commands

```bash
nvm use           # Node 24 (.nvmrc)
npm ci            # install
npm run dev       # dev server with hot reload
npm run build     # production build into dist/
npm run preview   # serve dist/
npm audit         # run before pushing; the repo is public and auto-deployed
```

No linter or test suite is configured. `node --check src/main.js` catches syntax errors.

## File Structure

```
src/
├── index.html      # Main SPA with all content, Metrika snippet, JSON-LD
├── main.js         # Interactive functionality (forms, navigation, modals, goals)
├── style.css       # Tailwind import + @theme tokens
└── assets/         # Hashed by Vite (hero character images)

public/             # Copied to dist/ as-is, stable URLs
├── favicon*.{ico,svg,png}, apple-touch-icon.png, android-chrome-*.png
├── site.webmanifest
├── logo.png        # referenced by JSON-LD and og:image
├── robots.txt
└── sitemap.xml

Dockerfile                     # Production image: Node 24 build stage + nginx serving dist/
.github/workflows/static.yml   # GitHub Pages preview build
dist/                          # Build output (gitignored)
input-graphics/                # Original artwork, not shipped
```

## Where to Change Things

- Content: `src/index.html`
- Behaviour: `src/main.js`
- Colors and fonts: the `@theme` block in `src/style.css`
- Form endpoint: the `scriptUrl` constants in `src/main.js` (Google Apps Script web app)
- Analytics: Metrika snippet in the `<head>` of `src/index.html`; goals via `trackYandexGoal()`
- Anything that must keep a fixed URL: `public/`

## Testing

- `npm run dev` for live editing, `npm run build && npm run preview` for the production bundle
- Forms post real submissions to the Google Apps Script endpoint. Use an obvious test name
- Check mobile layout at 375px and the sticky header offset on anchor navigation

## Deployment

Push to `main` on GitHub. The production server for smartzavr.ru pulls, runs `docker build` with the Dockerfile, and deploys the image if the build succeeds. The same push also publishes a preview at https://phantomydn.github.io/SmartZavr/ via GitHub Actions. Details in `SETUP.md`.
