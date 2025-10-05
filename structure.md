# Site Structure - SmartZavr.ru

## Information Architecture

Single Page Application with smooth scroll navigation and sections.

### Site Sections (in order)

1. **Hero Section** (Above the fold)
2. **How We Teach** (Teaching approach)
3. **Pricing** (Products)
4. **About the Tutor**
5. **Success Stories** (Testimonials)
6. **FAQ**
7. **Contact** (Lead capture)
8. **Footer**

---

## Detailed Section Breakdown

### 1. Hero Section
**Goal**: Immediate impact, clear value proposition, primary CTA

**Elements**:
- Logo (SmartZavr character + text)
- Headline: "Математика и логика с УмноЗавром" (Mathematics and Logic with SmartZavr)
- Subheadline: Clear benefit statement (e.g., "Помогаем школьникам полюбить математику и сдать экзамены на отлично")
- SmartZavr character illustration (hero image)
- Primary CTA: "Записаться на бесплатный урок" (Sign up for free lesson)
- Trust elements: Brief stats or achievement
- Contact bar: Phone, Telegram icons (sticky/floating)

**Previous site insight**: Had similar hero with photo, headline, and CTA form

---

### 2. How We Teach (Как проходит обучение)
**Goal**: Explain process, build confidence, differentiate approach

**Elements**:
- Section headline: "Как проходит обучение"
- 3-4 cards/steps:
  - Icon + title + description
  - Examples:
    1. "Индивидуальный подход" - personalized to student level
    2. "Онлайн формат" - convenient, from home
    3. "Практика и логика" - not just theory
    4. "Подготовка к экзаменам" - ОГЭ/ЕГЭ focus
- SmartZavr sticker illustrations for visual interest

**Previous site insight**: Had simple 3-card layout explaining process

---

### 3. Pricing (Тарифы и цены)
**Goal**: Present products clearly, transparent pricing, CTAs for each

**Elements**:
- Section headline: "Тарифы и цены"
- 3 pricing cards (side by side on desktop, stacked on mobile):

  **Card 1: Individual (Индивидуально)**
  - Price: 5,000₽ / час
  - Benefits:
    - Персональное внимание
    - Гибкий график
    - Индивидуальная программа
  - CTA button: "Выбрать"

  **Card 2: Group (Группа)** [Popular badge?]
  - Price: 2,500₽ / час
  - Benefits:
    - Занятия в мини-группе
    - Обмен опытом
    - Оптимальная цена
  - CTA button: "Выбрать"

  **Card 3: Curated (Кураторство)**
  - Price: 15,000₽ / курс
  - Benefits:
    - Готовые видеоуроки
    - Проверка домашних заданий
    - Поддержка куратора
  - CTA button: "Выбрать"

- Note: "Первый урок — бесплатно!" (First lesson free)

**Previous site insight**: Had 3-tier pricing with clear breakdown

**Competitor insight**: Industry standard to show 3 tiers, emphasize free trial

---

### 4. About the Tutor (О преподавателе)
**Goal**: Build trust, establish credibility, humanize brand

**Elements**:
- Section headline: "О преподавателе" / "Кто я"
- Photo of tutor (if available)
- SmartZavr character alongside (brand connection)
- Bio text:
  - Credentials/education
  - Years of experience
  - Teaching philosophy
  - Personal touch
- Key achievements/stats
- CTA: "Познакомимся?" (Let's meet?) → free lesson

**Previous site insight**: Had detailed tutor bio with photo

---

### 5. Success Stories (Отзывы учеников)
**Goal**: Social proof, build trust, show results

**Elements**:
- Section headline: "Отзывы учеников и родителей"
- 2-3 testimonial cards:
  - Student/parent name
  - Photo (if available) or avatar
  - Quote/feedback
  - Result achieved (e.g., "Сдал ОГЭ на 5", "Полюбил математику")
- Optional: Screenshot of real messages from Telegram/WhatsApp
- CTA: "Присоединяйтесь!" → free lesson

**Previous site insight**: Had testimonials section

**Competitor insight**: All competitors feature prominent testimonials

---

### 6. FAQ (Часто задаваемые вопросы)
**Goal**: Address objections, reduce friction, provide info

**Elements**:
- Section headline: "Часто задаваемые вопросы"
- Accordion/expandable questions:
  - Какой формат занятий? (What format?)
  - Нужна ли особая подготовка? (Special preparation needed?)
  - Как проходит оплата? (How is payment?)
  - Можно ли попробовать бесплатно? (Free trial?)
  - Для какого возраста подходит? (Age range?)
  - Что если не подойдет? (What if doesn't work?)
  - Как часто занятия? (How often are lessons?)
- 6-8 questions total
- SmartZavr sticker at bottom

**Previous site insight**: Had FAQ section

---

### 7. Contact / Lead Capture (Запись на занятие)
**Goal**: Multiple ways to connect, low friction, primary conversion

**Elements**:
- Section headline: "Запишитесь на бесплатный урок"
- Subheadline: "Оставьте заявку, и я свяжусь с вами в течение 1 часа"

**Form (simple)**:
- Name field: "Ваше имя"
- Phone field: "Телефон" (with +7 mask)
- Optional: Class/age: "Класс ребенка" (dropdown: 1-11 класс)
- Submit button: "Записаться"
- Privacy consent: Small text with checkbox

**Alternative contact methods** (icons + text):
- Phone: +79853110213 (clickable tel: link)
- Telegram: @AVmathematics (direct link)
- Email: Smartzavr@gmail.com (clickable mailto:)
- Telegram channel: @smartzavr (subscribe link)

**"Call me back" button** (floating/sticky):
- Always visible on page (bottom right corner on desktop, bottom bar on mobile)
- Opens modal with minimal form (name + phone only)

**Previous site insight**: Had integrated form in multiple places

**Competitor insight**: All use minimal forms (name + phone), multiple contact channels

---

### 8. Footer
**Goal**: Navigation, legal, secondary contact info

**Elements**:
- Logo (SmartZavr small)
- Quick links (anchor links to sections)
- Contact info (phone, email, Telegram)
- Social link: Telegram channel
- Legal: Privacy policy link (if created)
- Copyright: "© 2025 УмноЗавр. Все права защищены."

---

## Navigation

### Header/Nav (sticky)
**Desktop**:
- Logo (left)
- Menu links (center): О нас | Цены | Отзывы | Контакты
- CTA button (right): "Бесплатный урок"
- Phone number (right)

**Mobile**:
- Logo (left)
- Hamburger menu (right)
- Drawer menu with links + contact info

**Behavior**:
- Sticky on scroll
- Smooth scroll to sections
- Active section highlighting

---

## User Flows

### Primary Flow: Visitor → Lead
1. Land on hero → Read headline
2. Scroll to "How we teach" → Understand approach
3. View pricing → Choose option
4. See testimonials → Build trust
5. Fill form or click Telegram → Convert

### Secondary Flow: Quick Contact
1. Land on page
2. Click floating "Call me back" button anywhere
3. Quick form modal → Submit
4. Convert

### Tertiary Flow: Social/Messenger
1. Land on page
2. See Telegram/phone in header or hero
3. Click direct contact → Open messenger
4. Start conversation

---

## Mobile Considerations

- Stack all elements vertically
- Pricing cards: full width, stacked
- Forms: large touch targets (min 44px)
- Sticky CTA bar at bottom on mobile ("Записаться" button)
- Click-to-call phone numbers
- One-tap Telegram/email links
- Hamburger navigation
- Simplified header (logo + hamburger)

---

## Key Differentiators vs Competitors

✅ **SmartZavr character** throughout (not generic stock photos)
✅ **Personal brand** (one tutor, not marketplace)
✅ **Upfront pricing** (all three tiers clearly shown)
✅ **Telegram-first** (matches target audience behavior)
✅ **Simple, focused** (not overwhelming with options)
✅ **Playful but professional** (character + credentials)

---

## Content Tone & Style

- **Russian language** only
- **Clear and simple** - accessible for kids 10+ and parents
- **Friendly but professional** - balance trust and warmth
- **Action-oriented** - clear CTAs throughout
- **Benefit-focused** - "what's in it for me"
- **Conversational** - not overly formal
- **Trustworthy** - credentials without bragging

---

## Technical Implementation Notes

- **SPA**: Single HTML file, sections as divs
- **Smooth scroll**: JS for anchor navigation
- **Tailwind CSS**: Utility-first styling
- **Responsive**: Mobile-first approach
- **Forms**: Client-side validation, can submit to:
  - Email (simple mailto or service like Formspree)
  - Telegram bot (webhook)
  - Google Sheets (via API)
- **Analytics**: Yandex Metrica (recommended for Russian market)
- **Performance**: Optimize images, lazy load, minify

---

## Next Steps

1. ✅ Structure defined
2. → Create SEO strategy (keywords, meta tags)
3. → Design system (colors, typography, components)
4. → Build HTML/CSS/JS implementation
