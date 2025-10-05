---
id: seo
aliases: []
tags: []
---

# SEO Strategy - SmartZavr.ru

## Target Market

**Geographic**: Russia (primary), Russian-speaking countries
**Search Engines**: Yandex (primary), Google (secondary)
**Language**: Russian

---

## Semantic Kernel (Keywords)

### Primary Keywords (High Volume, High Competition)

1. **репетитор по математике** (math tutor) - high volume
2. **репетитор математика онлайн** (online math tutor)
3. **математика онлайн** (mathematics online)
4. **занятия по математике** (math lessons)
5. **подготовка к ОГЭ математика** (OGE math preparation)
6. **подготовка к ЕГЭ математика** (EGE math preparation)

### Secondary Keywords (Medium Volume, Medium Competition)

7. **репетитор математики для школьников** (math tutor for schoolchildren)
8. **индивидуальные занятия математика** (individual math lessons)
9. **математика для детей онлайн** (math for kids online)
10. **репетитор математика цена** (math tutor price)
11. **математика 5 класс репетитор** (5th grade math tutor)
12. **математика 9 класс подготовка** (9th grade math preparation)
13. **математика 11 класс ЕГЭ** (11th grade math EGE)
14. **репетитор по алгебре** (algebra tutor)
15. **репетитор по геометрии** (geometry tutor)

### Long-Tail Keywords (Low Volume, Low Competition, High Intent)

16. **репетитор математика онлайн недорого** (affordable online math tutor)
17. **бесплатный пробный урок математика** (free trial math lesson)
18. **репетитор математика Telegram** (Telegram math tutor)
19. **математика логика для школьников** (math logic for schoolchildren)
20. **индивидуальные занятия математикой онлайн** (individual online math lessons)
21. **репетитор математика подготовка к олимпиаде** (olympiad math preparation)
22. **математика с нуля онлайн** (math from scratch online)
23. **репетитор математика групповые занятия** (group math lessons tutor)

### Brand Keywords

24. **SmartZavr** / **СмартЗавр**
25. **УмноЗавр** (UmnoZavr - from logo)
26. **smartzavr.ru**

### Location-Based (if applicable)

27. **репетитор математика Москва онлайн** (Moscow online math tutor)
28. **репетитор математика Санкт-Петербург онлайн** (St. Petersburg online)
- Note: Online = nationwide, but can still rank for city terms

---

## On-Page SEO Elements

### Meta Tags

**Title Tag** (Primary landing page):
```
Репетитор по математике онлайн — УмноЗавр | Индивидуальные занятия от 2500₽
```
- Length: ~60 chars (Yandex prefers shorter)
- Includes: Primary keyword + brand + price differentiator

**Meta Description**:
```
Математика и логика онлайн с опытным репетитором. Индивидуальные и групповые занятия для школьников 5-11 класс. Подготовка к ОГЭ и ЕГЭ. Первый урок бесплатно! ⚡
```
- Length: ~150-160 chars
- Includes: Keywords, benefits, CTA, emoji for attention
- Action-oriented

**Keywords Meta** (less important but still used by Yandex):
```
репетитор по математике, математика онлайн, подготовка к ОГЭ, подготовка к ЕГЭ, индивидуальные занятия математика, репетитор онлайн
```

### Open Graph Tags (Social Sharing)

```html
<meta property="og:title" content="УмноЗавр — Репетитор по математике онлайн">
<meta property="og:description" content="Индивидуальные занятия по математике и логике для школьников. Первый урок бесплатно!">
<meta property="og:image" content="https://smartzavr.ru/og-image.jpg">
<meta property="og:url" content="https://smartzavr.ru">
<meta property="og:type" content="website">
```

### Heading Structure

```html
<h1>Репетитор по математике и логике онлайн — УмноЗавр</h1>

<h2>Как проходит обучение</h2>
<h3>Индивидуальный подход</h3>
<h3>Онлайн формат</h3>
<h3>Практика и логика</h3>

<h2>Тарифы и цены</h2>

<h2>О преподавателе</h2>

<h2>Отзывы учеников и родителей</h2>

<h2>Часто задаваемые вопросы</h2>

<h2>Запишитесь на бесплатный урок</h2>
```

### Content Optimization

**Keyword Density**:
- Primary keyword: 2-3% naturally throughout content
- Secondary keywords: Sprinkled naturally
- Avoid keyword stuffing

**Content Length**:
- Target: 1500-2000 words total across all sections
- Each section: 150-300 words
- Rich, informative content

**Keyword Placement**:
- H1 tag (hero headline)
- First 100 words
- Subheadings (H2/H3)
- Alt text for images
- Button text where natural
- FAQ answers

---

## Structured Data (Schema.org)

### Organization Schema

```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "УмноЗавр",
  "alternateName": "SmartZavr",
  "url": "https://smartzavr.ru",
  "logo": "https://smartzavr.ru/logo.png",
  "description": "Онлайн-репетитор по математике и логике для школьников",
  "telephone": "+79959191301",
  "email": "Smartzavr@gmail.com",
  "sameAs": [
    "https://t.me/smartzavr",
    "https://t.me/AVmathematics"
  ]
}
```

### Course Schema (for each product)

```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Индивидуальные занятия по математике",
  "description": "Персональные онлайн-уроки математики с опытным репетитором",
  "provider": {
    "@type": "Organization",
    "name": "УмноЗавр"
  },
  "offers": {
    "@type": "Offer",
    "price": "5000",
    "priceCurrency": "RUB",
    "availability": "https://schema.org/InStock"
  }
}
```

### FAQPage Schema

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Какой формат занятий?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Занятия проходят онлайн в удобном формате..."
      }
    }
  ]
}
```

### LocalBusiness Schema (if applicable)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "УмноЗавр",
  "image": "https://smartzavr.ru/logo.png",
  "@id": "https://smartzavr.ru",
  "url": "https://smartzavr.ru",
  "telephone": "+79959191301",
  "priceRange": "2500-5000 RUB",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "RU"
  }
}
```

---

## Technical SEO

### Performance Optimization

✅ **Page Speed**: Target < 3s load time
- Compress images (WebP format)
- Minify CSS/JS
- Use CDN for static assets
- Lazy load images below fold
- Defer non-critical JS

✅ **Mobile-First**:
- Responsive design
- Touch-friendly (44px+ tap targets)
- No horizontal scroll
- Fast mobile load time

✅ **Core Web Vitals**:
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

### URL Structure

```
https://smartzavr.ru/
```
- Single page, so main URL only
- Clean, memorable
- HTTPS (SSL required)
- No www redirect (choose one: with or without www)

### Sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://smartzavr.ru/</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Robots.txt

```
User-agent: *
Allow: /
Sitemap: https://smartzavr.ru/sitemap.xml
```

### Canonical Tag

```html
<link rel="canonical" href="https://smartzavr.ru/">
```

### Language Tag

```html
<html lang="ru">
```

### Favicon & Touch Icons

```html
<link rel="icon" href="/favicon.ico">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

---

## Image SEO

### Alt Text Guidelines

- SmartZavr logo: "УмноЗавр — репетитор по математике онлайн"
- Hero image: "Репетитор по математике онлайн с умным динозавром"
- Tutor photo: "Имя преподавателя — опытный репетитор математики"
- Stickers: "УмноЗавр объясняет математику", "Логично — стикер УмноЗавр"

### File Naming

- Use descriptive names: `repetitor-matematika-online.jpg`
- Not: `IMG_6388.PNG`
- Include keywords where natural

### Image Optimization

- Format: WebP (fallback to JPG)
- Max width: 1920px (for hero)
- Compress: TinyPNG or similar
- Lazy load: Below-the-fold images
- Responsive: srcset for different sizes

---

## Off-Page SEO

### Link Building Strategy

1. **Telegram**: Main channel (@smartzavr) with link to site
2. **Profile backlinks**: VK, Facebook, OK.ru profiles with site link
3. **Educational directories**: Repetit.ru, Profi.ru listings
4. **Local business**: Yandex.Maps, Google My Business (if applicable)
5. **Content**: Educational blog posts (future)
6. **Guest posts**: Contribute to parenting/education blogs

### Social Signals

- Active Telegram channel
- Encourage reviews on Yandex
- Share testimonials
- Engage with comments

---

## Yandex-Specific Optimization

### Yandex.Webmaster

- Register site
- Submit sitemap
- Monitor indexing
- Check Yandex IKS (site quality index)

### Yandex.Metrica

- Install tracking code
- Set up goals:
  - Form submission
  - Phone click
  - Telegram click
  - Scroll depth (80%+)
- Webvisor for session recordings
- Heat maps

### Yandex.Direct (Optional PPC)

- Can complement organic efforts
- Target high-intent keywords
- A/B test ad copy
- Remarketing to site visitors

---

## Content Strategy (Future Growth)

### Blog Topics (Optional)

1. "Как подготовиться к ОГЭ по математике за 3 месяца"
2. "5 способов полюбить математику"
3. "Типичные ошибки на ЕГЭ по математике"
4. "Логические задачи для развития мышления"
5. "Как выбрать репетитора по математике"

### Video Content

- Upload lessons to YouTube
- Embed on site
- YouTube SEO (titles, descriptions, tags)
- Link back to site

---

## Analytics & Tracking

### Key Metrics to Track

1. **Organic traffic** (Yandex/Google)
2. **Keyword rankings** (top 10 target keywords)
3. **Conversion rate** (form submissions / visitors)
4. **Bounce rate** (target < 60%)
5. **Time on site** (target > 2 minutes)
6. **Pages per session** (target > 1 for SPA scroll depth)
7. **Mobile vs desktop** traffic

### Tools

- **Yandex.Metrica** (primary)
- **Google Analytics** (secondary)
- **Yandex.Webmaster**
- **Google Search Console**
- **Serpstat** or **SE Ranking** (keyword tracking)

---

## Launch Checklist

### Pre-Launch SEO

- [ ] All meta tags implemented
- [ ] Heading structure optimized
- [ ] Structured data added
- [ ] Images optimized & alt text added
- [ ] Mobile-responsive tested
- [ ] Page speed tested (< 3s)
- [ ] SSL certificate installed
- [ ] Robots.txt created
- [ ] Sitemap.xml created
- [ ] Canonical tags set
- [ ] 404 page created
- [ ] Favicon added

### Post-Launch SEO

- [ ] Submit to Yandex.Webmaster
- [ ] Submit to Google Search Console
- [ ] Install Yandex.Metrica
- [ ] Install Google Analytics
- [ ] Create Yandex.Maps listing
- [ ] Create Google My Business (if applicable)
- [ ] Build initial backlinks (social profiles, directories)
- [ ] Monitor indexing (1-2 weeks)
- [ ] Check keyword rankings (2-4 weeks)

---

## Competitive SEO Analysis

Based on competitor research:

✅ **They do well**:
- Established domain authority
- Large content volume
- Many backlinks
- Brand recognition

✅ **Our advantages**:
- Niche positioning (personal brand)
- Clear differentiation (SmartZavr character)
- Transparent pricing
- Telegram-first (modern approach)

✅ **Strategy**:
- Focus on long-tail keywords (less competition)
- Emphasize unique value proposition
- Build local/personal brand authority
- Leverage social proof
- Optimize for Yandex first (Russian market leader)

---

## Timeline Expectations

- **Month 1-2**: Indexing, initial rankings for brand keywords
- **Month 3-6**: Start ranking for long-tail keywords
- **Month 6-12**: Improve rankings for medium competition keywords
- **Month 12+**: Compete for high-volume keywords

SEO is long-term strategy. Combine with:
- Yandex.Direct (PPC) for immediate traffic
- Social media (Telegram) for audience building
- Word-of-mouth referrals
