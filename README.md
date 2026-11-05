# Introduction

This repository contains the source code for smartzavr.ru, a Russian‑language website for a math tutoring service that will evolve into an online school.

# Business goal

This site is going to be used as part of a sales funnel for math repetitor. At the future Business is going to grow bigger into online school.
So main purpose is to attract people, expain products, allow to contact and kinda also lead to a telegram channel (https://t.me/smartzavr)

## Products

1. Individual classes: 5000 rub per hour
2. Group classes: 2500 rub per hour
3. Pre-recorded classes with curation: 15000 rub

# Techmical Details and Requirements

* Site is a Single Page Application
* Language of the site: russian
* Content and structure of the site shoould be clear and simple
* Technical stack: HTML, JS, CSS(TailWind)
* Target audience: parents and kids from 10 yo
* Site should be very well optimized from SEO perspective
* Adoptive design for laptops, tablets and mobile

## Lead Capure Requirements

There should be such lead capture elements:

* "Call me back"
* Phone number: +79959191301
* Telegram to contact: https://t.me/AVmathematics
* Telegram channel: https://t.me/smartzavr
* Email: Smartzavr@gmail.com

## Business information

* 772840023988 ИНН
* 325774600476650 ОГРНИП
* ИП  «Колчанова Анна Владимировна»

## Project Files

For detailed information, see:
* **CLAUDE.md** - Entry point for AI sessions, layout and rules
* **AGENTS.md** - Commands and where to change things
* **SETUP.md** - Development, deployment, forms, analytics
* **PROJECT_SUMMARY.md** - Current status and open items
* **competitors.md** - Market analysis
* **structure.md** - Site architecture
* **seo.md** - SEO strategy
* **docs/** - Yandex Direct campaign

Resources:
* `./input-graphics/previoussite.png` - previous site reference
* `./input-graphics/SmartZavrGraphics/` - SmartZavr character graphics (source)
* `./src/assets/` - hashed web graphics (hero character)
* `./public/` - fixed-URL files (favicons, manifest, logo, robots, sitemap)

## Design System

### Brand Character: УмноЗавр (SmartZavr)

**Character Analysis**:
- Green friendly dinosaur with glasses and tie (professional yet playful)
- Wears business attire (beige shirt, orange/red striped tie)
- Lightning bolt on head (symbolizes "smart", energy, bright ideas)
- Large round glasses (intellectual, studious)
- Thumbs up gesture (positive, encouraging)
- Sits at desk with laptop, books, calculator (educational setting)

**Character Personality**:
- Smart, friendly, approachable
- Professional but not intimidating
- Encouraging and supportive
- Perfect for 10+ age target (not too childish, not too serious)

### Color Palette

**Primary Colors** (from character):
- **Green**: `#7DA54E` (olive green - main character color)
  - Use for: Primary buttons, accents, highlights
  - Represents: Growth, learning, nature, calm

- **Dark Teal**: `#1A4D4D` (from educational graphic background)
  - Use for: Backgrounds, sections, contrast areas
  - Represents: Depth, seriousness, trust

**Secondary Colors**:
- **Orange**: `#FF9F1C` (from tie and educational elements)
  - Use for: CTAs, important highlights, energy
  - Represents: Energy, enthusiasm, warmth

- **Cream/Beige**: `#F5E6D3` (from shirt, warm neutral)
  - Use for: Backgrounds, cards, soft sections
  - Represents: Warmth, approachability, comfort

**Supporting Colors**:
- **Yellow**: `#FFD93D` (from "УМНОЗАВР" logo text)
  - Use for: Highlights, badges, "new" labels

- **Blue**: `#4A90E2` (from "У" in logo, trust color common in competitor sites)
  - Use for: Links, secondary buttons, trust elements

**Neutral Colors**:
- **Dark Text**: `#2D2D2D` (almost black for readability)
- **Medium Gray**: `#6B6B6B` (secondary text)
- **Light Gray**: `#E5E5E5` (borders, dividers)
- **White**: `#FFFFFF` (backgrounds, cards)

### Typography

**Recommendations** (web-safe with Russian support):

**Headings**:
- Font: `Montserrat` or `Nunito` (rounded, friendly, modern)
- Weight: Bold (700) for H1/H2, SemiBold (600) for H3
- Style: Slightly rounded, approachable

**Body Text**:
- Font: `Open Sans` or `Roboto` (excellent Cyrillic support, readable)
- Weight: Regular (400), Medium (500) for emphasis
- Line height: 1.6 for readability

**Logo Text** (from graphics):
- Current: Custom playful font with varied colors
- Style: Each letter different color (blue, yellow, green, orange)
- Maintain playful character while keeping legible

### Component Styles

**Buttons**:
- **Primary CTA**:
  - Background: Orange `#FF9F1C`
  - Text: White
  - Border radius: `8px` (slightly rounded)
  - Padding: `16px 32px`
  - Hover: Darken 10%
  - Shadow: Subtle `0 2px 8px rgba(0,0,0,0.15)`

- **Secondary**:
  - Background: Green `#7DA54E`
  - Text: White
  - Same styling as primary

- **Outline**:
  - Border: Green `#7DA54E`
  - Text: Green
  - Background: Transparent
  - Hover: Fill with green, white text

**Cards**:
- Background: White
- Border: 1px solid Light Gray `#E5E5E5` OR no border with shadow
- Border radius: `12px` (friendly, modern)
- Shadow: `0 4px 12px rgba(0,0,0,0.08)`
- Padding: `24px`
- Hover: Lift effect (increase shadow)

**Forms**:
- Input fields:
  - Border: `#D0D0D0`
  - Border radius: `8px`
  - Padding: `12px 16px`
  - Focus: Border color changes to Green `#7DA54E`
  - Font size: `16px` (prevents zoom on mobile)

**Icons & Illustrations**:
- Use SmartZavr stickers throughout for consistency
- Available stickers:
  - Thumbs up (encouragement)
  - "Логично" (logical - pointing finger)
  - Character with books (learning)
  - Various poses from graphics folder
- Icon style: Rounded, friendly (match character aesthetic)

**Sections**:
- Alternating backgrounds:
  - White sections
  - Cream/Beige `#F5E6D3` sections
  - Dark Teal `#1A4D4D` sections (with white text)
- Padding: Large (80px+ vertical) for breathing room
- Max width: `1200px` (centered)

**Spacing System** (Tailwind-friendly):
- Base unit: `4px`
- Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96px
- Consistent spacing between elements

### Visual Style Guidelines

**Overall Aesthetic**:
- Modern but approachable
- Clean with personality (not sterile)
- Professional with playfulness
- Trust + warmth balance

**Image Treatment**:
- Rounded corners (`12px` radius)
- Subtle shadows
- Use SmartZavr character prominently
- Avoid generic stock photos (use character instead)

**Animations** (subtle):
- Button hover: Scale 1.05, shadow increase
- Cards hover: Lift (translateY -4px)
- Smooth scroll: Easing for section navigation
- Form validation: Shake on error
- Success: Checkmark animation

**Responsive Breakpoints**:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`
- Large: `> 1440px`

### Comparison to Competitors

**Competitors** (typical):
- Blue as primary (trust, corporate)
- Clean, minimal, sometimes sterile
- Stock photos of students
- Generic design

**SmartZavr Differentiation**:
- Green as primary (growth, unique in market)
- Character-driven (memorable, brand recognition)
- Playful yet professional
- Warmer, more personal feel
- Orange CTAs (high energy, different from competitor blue)

### Design Assets Checklist

Available:
- [x] Logo (transparent background)
- [x] Character illustrations (multiple poses)
- [x] Stickers (ready for web use)
- [x] Previous site reference

Needed:
- [x] Optimized web versions (WebP hero, 125 KB)
- [x] Favicon set (ico, svg, png, apple-touch, android-chrome)
- [x] OG image for social sharing (logo)
- [ ] Smaller PNG fallback for the hero (currently 1.7 MB)

# TODO list

- [x] ~~Analize README.md and create `CLAUDE.md` for future sessions~~
- [x] ~~Research competitors: Find 5-10 Russian math tutoring websites, analyze their structure, features, and positioning. Document in `competitors.md`~~
- [x] ~~Design site structure: Based on competitor analysis and business goals, create information architecture and user flows. Document in `structure.md`~~
- [x] ~~SEO strategy: Develop semantic kernel (keywords) for Russian market, plan meta tags and content structure. Document in `seo.md`~~
- [x] ~~Design system: Analyze SmartZavr graphics, propose color palette, typography, component styles. Document findings in this file under new "Design System" section~~
- [x] ~~Implement MVP: Build HTML structure, Tailwind styling, basic JS interactivity, lead capture forms~~
- [x] ~~SEO implementation: Add meta tags, structured data, optimize performance, test on mobile~~
- [x] ~~Forms: Google Apps Script backend~~
- [x] ~~Analytics: Yandex Metrika with conversion goals~~
- [x] ~~Deploy: nginx server, HTTPS, deploys from GitHub main~~
- [x] ~~Migrate to Vite + Tailwind CSS v4~~ (Dockerfile retired)
- [x] ~~True-up 2026-11-05: dependencies current, audit clean, favicon/manifest/logo URLs fixed, docs updated~~
- [ ] Submit to Yandex Webmaster and Google Search Console (status unknown)
- [ ] Smaller PNG fallback for the hero image
- [ ] Add a linter (ESLint, html-validate) and run it in the Pages workflow

# Quick Reference

## Run Locally

```bash
nvm use
npm ci
npm run dev        # http://localhost:5173
npm run build && npm run preview
```

## Site Sections

1. Hero - Main value proposition + CTAs
2. How We Teach - 4 feature cards
3. Pricing - 3 tiers (Individual/Group/Curated)
4. Testimonials - 3 reviews
5. FAQ - 6 questions (accordion)
6. Contact - Form + alternative methods
7. Footer - Navigation + contact info

## Key Files to Edit

- **Content**: `src/index.html` (all sections inline)
- **Behavior**: `src/main.js` (forms, navigation, Metrika goals)
- **Theme**: `@theme` block in `src/style.css`
- **Fixed-URL files**: `public/`
- **Forms**: `scriptUrl` in `src/main.js` (see SETUP.md)

## Before Pushing to main

The GitHub repository is public and production deploys from it.

- [ ] `npm audit` clean
- [ ] `npm run build` passes, `npm run preview` checked
- [ ] No credentials or local config in the diff
- [ ] Russian text proofread
- [ ] `public/sitemap.xml` lastmod bumped if content changed

See **SETUP.md** for details.
