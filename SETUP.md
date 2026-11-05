# Setup & Deployment Guide

## Local Development

```bash
nvm use          # Node 24 from .nvmrc
npm ci
npm run dev      # http://localhost:5173 with hot reload
```

Production bundle:

```bash
npm run build    # writes dist/
npm run preview  # serves dist/ on http://localhost:4173
```

`dist/` contains `index.html`, hashed CSS/JS/images under `assets/`, and everything from `public/` copied verbatim.

## Deployment

Production for https://smartzavr.ru is a server running nginx that deploys from the GitLab repository (`gitlab`, `Orienteer/smartzavr`, branch `main`). Every push there is a release: the server pulls `main`, runs `docker build` with the `Dockerfile` (Node 24 build stage, nginx serving `dist/`), and deploys the image only if the build succeeds. The pull-and-deploy hook lives on the server, not in this repository.

Before pushing `main` anywhere:

1. `npm audit` is clean.
2. `npm run build` succeeds and `npm run preview` looks right.
3. No credentials, tokens or local config in the diff. The repository is public.

The same push runs `.github/workflows/static.yml`, which builds `dist/` with `--base=/SmartZavr/` and publishes a preview at https://phantomydn.github.io/SmartZavr/. The preview is not the production site.

### Remotes

| Remote | URL | Role |
|---|---|---|
| gitlab | git@gitlab.com:Orienteer/smartzavr.git | **Deploys production** |
| origin | git@github.com:PhantomYdn/SmartZavr.git | Public mirror, runs the Pages preview |
| upstream | https://gitflic.ru/project/smartzavr/smartzavr.git | Shared working repository with Anna |

Push the same commit to all three. Production follows `gitlab/main`.

### Docker

```bash
docker build -t smartzavr .
docker run --rm -p 8080:80 smartzavr   # http://localhost:8080
```

The image is what production runs. nginx inside the container uses its default config; TLS, HSTS and caching headers belong to the reverse proxy on the server.

### nginx reference (reverse proxy or bare host)

```nginx
server {
    listen 443 ssl http2;
    server_name smartzavr.ru www.smartzavr.ru;
    root /var/www/smartzavr.ru/dist;
    index index.html;

    location /assets/ {
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
    location / {
        add_header Cache-Control "no-cache";
        try_files $uri $uri/ =404;
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml image/svg+xml;
}
```

Hashed files under `/assets/` can be cached forever. `index.html` and the files from `public/` must not be.

## Forms

Both the contact form and the callback modal call `submitLead()` in `src/main.js`, which POSTs a JSON string to the Google Apps Script web app at `LEADS_ENDPOINT`. Fields: `name`, `phone`, `grade`, `format` (`individual` / `group` / `curated` / empty), `type` (`contact` or `callback`). Successful submissions fire the Metrika goals `contact_form_submit` / `callback_form_submit`; failures show a message with the Telegram and phone fallbacks.

The request is sent as `text/plain` on purpose: that keeps it a "simple" request without a CORS preflight, which Apps Script cannot answer. Apps Script then redirects to `script.googleusercontent.com` with CORS headers, so the response is readable and a failure surfaces to the user instead of a fake "success".

**Deployment requirement.** The web app must be deployed with *Execute as: Me* and *Who has access: Anyone*. If it is deployed for "Anyone with Google account" or only the owner, Google answers `403` with an "Access Denied / You need access" page and nothing reaches the sheet. Quick check from a terminal: `curl -sI -L <LEADS_ENDPOINT>` should end in `200`, not `403`. On 2026-11-05 the endpoint answered 403, which matches Anna's report that the form "does not work".

To change the backend, replace `LEADS_ENDPOINT` and keep the request shape, or adapt `submitLead()`.

## Analytics

Yandex Metrika counter `104701968` is loaded from the `<head>` of `src/index.html`. Goals are sent through `trackYandexGoal(name)` in `src/main.js`: `contact_form_submit`, `callback_form_submit`, `phone_click`, `telegram_click`, `pricing_view`, `deep_engagement` (80 % scroll). The Yandex Direct campaign in `docs/` relies on these goal names.

## SEO files

`public/robots.txt` and `public/sitemap.xml` are copied to the site root. Bump `lastmod` in the sitemap when content changes. `src/privacy.html` is a second Vite entry (see `vite.config.js`), served at `/privacy.html` with `noindex`. JSON-LD (EducationalOrganization) and Open Graph tags are at the bottom and top of `src/index.html`.

## Assets

- `src/assets/`: images imported from HTML get a content hash in the filename. Use for anything only referenced from `index.html`.
- `public/`: fixed URLs. Favicons, `site.webmanifest`, `logo.png` (JSON-LD), `og-image.jpg` (1200×630, `og:image`).
- Teacher portrait: `src/assets/anna.webp` + `anna.jpg` (800×1200, from Anna's original `FPD_7953.jpg`).
- `input-graphics/`: original artwork. Not shipped. Optimize before copying into `src/assets/` (`cwebp -q 80 in.png -o out.webp`).

## Testing checklist

- Chrome, Firefox, Safari, mobile Safari and Chrome
- 375px width: header, hero, pricing cards, FAQ, forms
- Anchor navigation offset under the sticky header
- Form submission with an obvious test name, then check the Google Sheet
- Structured data: https://validator.schema.org
- Metrika goals appear in https://metrika.yandex.ru
