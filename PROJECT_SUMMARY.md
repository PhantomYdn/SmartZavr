# SmartZavr.ru - Project Summary

Updated 2026-11-05.

## Status

Live at https://smartzavr.ru, deployed from GitLab `main` to a dedicated nginx server (Docker build). Single-page site, Russian, 8 sections, Vite 8 + Tailwind CSS v4 + vanilla JS.

## Done

- Site content: hero, teacher (photo, bio, education), how we teach, pricing (3 tiers), real profi.ru testimonials, FAQ, contact form with tariff field, callback modal, footer
- Privacy policy page (`/privacy.html`) linked from the consent checkbox and the footer
- Forms post to a Google Apps Script web app and show a real error when it fails (see `SETUP.md`)
- Yandex Metrika counter with conversion goals; Yandex Direct campaign material in `docs/`
- SEO: meta, Open Graph, JSON-LD EducationalOrganization, robots.txt, sitemap.xml, canonical
- Favicon set, web manifest, WebP hero with PNG fallback
- Build pipeline: Vite, Tailwind CSS-first theme in `src/style.css`, multi-stage Dockerfile for production, GitHub Actions preview to GitHub Pages
- Dependencies current, `npm audit` clean (2026-11-05)

## Structure

```
SmartZavrSimple/
├── src/
│   ├── index.html         # Full SPA
│   ├── main.js            # Interactivity, forms, Metrika goals
│   ├── style.css          # Tailwind + @theme
│   └── assets/            # Hashed images
├── public/                # Fixed-URL files: favicons, manifest, logo, robots, sitemap
├── Dockerfile             # Production image (build + nginx)
├── .github/workflows/     # Pages preview build
├── docs/                  # Yandex Direct campaign
├── input-graphics/        # Source artwork
├── CLAUDE.md  AGENTS.md  README.md  SETUP.md
├── competitors.md  structure.md  seo.md
└── vite.config.js  package.json  .nvmrc
```

## Open items

- **Apps Script endpoint answers 403 (deployment not public), so leads do not reach the sheet** — Anna must redeploy with access "Anyone"
- Касса (payment page) waits for acquiring; offer page needed with it
- Кураторство has no description yet
- Yandex Webmaster and Google Search Console submission status unknown
- `hero-character-optimized.png` fallback is 1.7 MB; most browsers take the 125 KB WebP, but a smaller PNG would help the rest
- No linter or CI checks beyond the build

## Design

Colors: green `#7DA54E`, teal `#1A4D4D`, orange `#FF9F1C`, cream `#F5E6D3`, yellow `#FFD93D`, blue `#4A90E2`. Fonts: Montserrat (headings), Open Sans (body). Full design system in `README.md`.

## Contact information used on the site

- Phone: +79959191301
- Email: Smartzavr@gmail.com
- Telegram: @AVmathematics, channel @smartzavr
- ИП Колчанова Анна Владимировна, ИНН 772840023988, ОГРНИП 325774600476650
