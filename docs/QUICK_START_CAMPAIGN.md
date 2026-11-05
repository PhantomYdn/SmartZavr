# 🚀 QUICK START GUIDE - Yandex Direct Campaign

**Launch Date:** ASAP (February 2025)
**Budget:** 30,000₽/month
**Expected Results:** 30 leads, 9 students, 180,000₽ revenue

---

## ✅ PRE-LAUNCH CHECKLIST (Complete Today)

### Step 1: Configure Yandex Metrica Goals (30 minutes)

**Already done:** ✅ Tracking code is implemented in src/main.js

**Now do this:**
1. Go to https://metrica.yandex.ru
2. Select your counter (ID: 104701968)
3. Click "Goals" in left menu
4. Create these 6 goals:

```
Goal 1: contact_form_submit (Primary)
Type: JavaScript event
Goal ID: contact_form_submit
Description: Contact form submission

Goal 2: callback_form_submit (Primary)
Type: JavaScript event
Goal ID: callback_form_submit
Description: Callback form submission

Goal 3: phone_click (Micro-conversion)
Type: JavaScript event
Goal ID: phone_click
Description: Phone number click

Goal 4: telegram_click (Micro-conversion)
Type: JavaScript event
Goal ID: telegram_click
Description: Telegram link click

Goal 5: pricing_view (Engagement)
Type: JavaScript event
Goal ID: pricing_view
Description: Pricing section viewed

Goal 6: deep_engagement (Engagement)
Type: JavaScript event
Goal ID: deep_engagement
Description: 80% page scroll
```

### Step 2: Set Up Yandex Direct Account (20 minutes)

1. Go to https://direct.yandex.ru
2. Click "Create campaign"
3. Enter business details:
   - Name: ИП «Колчанова Анна Владимировна»
   - ИНН: 772840023988
   - ОГРНИП: 325774600476650
4. Add payment method (bank card or account)
5. Add 35,000₽ (covers first month + buffer)

### Step 3: Test Your Site (10 minutes)

Currently running at: http://localhost:8000

**Test these:**
- [ ] Click phone number → goal fires (check browser console)
- [ ] Click Telegram link → goal fires
- [ ] Submit contact form → goal fires + success message
- [ ] Click callback button → modal opens → submit → goal fires
- [ ] Scroll to bottom → deep engagement goal fires
- [ ] Test on mobile device (responsive?)

**How to check goals:**
- Open browser console (F12)
- Look for: "Yandex Metrica goal tracked: [goal_name]"
- If you see errors, Metrica isn't loaded correctly

---

## 🚀 LAUNCH DAY STEPS (2-3 hours)

### Phase 1: Create Campaign (30 minutes)

1. In Yandex Direct, click "Create campaign"
2. Choose "Text & Image Ads"
3. Campaign name: **SmartZavr Math Tutoring**
4. Campaign settings:
   - Start date: Today
   - Daily budget: 1,200₽
   - Time zone: Moscow (UTC+3)
   - Geography: All Russia
   - Search network: YES
   - Ad network (YAN): YES (max 20% budget)

### Phase 2: Create Ad Group 1 - Exam Preparation (45 minutes)

1. Click "Add ad group"
2. Name: **Exam Preparation (OGE/EGE)**
3. Daily budget: 500₽
4. Upload keywords from `docs/KEYWORDS_IMPORT.csv`:
   - Filter rows where "Ad Group" = "Exam Preparation"
   - Copy-paste keywords (14 keywords total)
5. Add negative keywords from `docs/NEGATIVE_KEYWORDS.txt`:
   - Copy HIGH PRIORITY section (first 13 negatives)
6. Create 3 ads (use variations A, B, C from strategy doc)
   - Title 1, Title 2, Text, Display URL, Sitelinks
7. Set max CPC: 100-120₽ per keyword
8. Geographic bid adjustment: Moscow +30%

### Phase 3: Create Ad Group 2 - Long-Tail (45 minutes)

1. Click "Add ad group"
2. Name: **Long-Tail Keywords**
3. Daily budget: 350₽
4. Upload keywords from CSV (filter "Long-Tail Keywords" - 20 keywords)
5. Add same negative keywords
6. Create 3 ads (use Long-Tail variations A, B, C)
7. Set max CPC: 40-60₽

### Phase 4: Create Ad Group 3 - Moscow (30 minutes)

1. Click "Add ad group"
2. Name: **Moscow-Specific**
3. Daily budget: 150₽
4. Upload keywords from CSV (filter "Moscow-Specific" - 7 keywords)
5. Add negative keywords + add "-очно" "-офлайн"
6. Create 1 ad (use Moscow variation A)
7. Set max CPC: 60-80₽

### Phase 5: Add Extensions (15 minutes)

**At campaign level:**

1. **Call Extension:**
   - Phone: +7 995 919-13-01
   - Display always

2. **Sitelinks (4 required):**
   ```
   Link 1: Бесплатный урок → smartzavr.ru#contact
   Link 2: Цены и тарифы → smartzavr.ru#pricing
   Link 3: Отзывы → smartzavr.ru#testimonials
   Link 4: Telegram → t.me/AVmathematics
   ```

3. **Callouts (add all):**
   ```
   - Первый урок бесплатно
   - От 2500₽/час
   - Онлайн в удобное время
   - Гибкий график
   - Индивидуально или в группе
   - Подготовка к ОГЭ/ЕГЭ
   ```

### Phase 6: Link Metrica & Launch (15 minutes)

1. In campaign settings, find "Yandex Metrica"
2. Select your counter (ID: 104701968)
3. Link goals: contact_form_submit, callback_form_submit
4. Review everything one last time
5. **Click "Send for moderation"**
6. Wait 1-2 hours for approval
7. Campaign will start automatically when approved

**Launch time recommendation:** 18:00-20:00 Moscow time (prime time!)

---

## 📊 FIRST 48 HOURS MONITORING

### Hour 1-2: Watch Like a Hawk
- Check if impressions are coming in
- Look at "Search queries" report
- Are your ads showing? (Search for your keywords on Yandex)
- Any disapproved ads?

### Hour 3-6: Initial Adjustments
- Add 5-10 negative keywords (irrelevant searches)
- Check CTR (target >5%)
- Average position (target 1-3)
- Any wasted spend?

### Day 2: First Optimization
- Total impressions: expect 1,000-2,000
- Total clicks: expect 50-100
- Total spend: ~1,000₽
- Leads: 1-3 (don't worry if 0 on Day 1)

**Red flags:**
- CTR <2% → ads not relevant, rewrite
- No impressions → bids too low, increase by 30%
- No conversions after 100 clicks → check form, check tracking

---

## 🎯 WEEK 1 GOALS

```
Target Metrics:
✓ Spend: 7,000₽ (1,000₽/day)
✓ Impressions: 7,000-10,000
✓ Clicks: 350-500
✓ CTR: 5-8%
✓ Leads: 7-10
✓ CPL: <1,000₽

Daily Tasks (15 min/day):
□ Check search query report
□ Add 5-10 negative keywords
□ Respond to leads within 1 hour
□ Monitor spend vs budget
□ Check average position
```

---

## 🆘 TROUBLESHOOTING

### "My ads aren't showing"
1. Check moderation status (might be under review)
2. Check if budget is depleted
3. Increase bids by 30-50%
4. Check if you're in targeted geography (use VPN to Moscow)

### "I'm getting clicks but no conversions"
1. Test form submission yourself
2. Check browser console for Metrica errors
3. Check if phone/Telegram links work
4. Look at Metrica Webvisor (watch user sessions)

### "Too much wasted spend"
1. Review search query report IMMEDIATELY
2. Add negative keywords aggressively
3. Switch from phrase match to exact match
4. Pause keywords with <1% CTR after 50 impressions

### "Budget running out too fast"
1. Lower bids by 20% across all keywords
2. Pause low-performing keywords
3. Focus budget on top 5 converting keywords only
4. Reduce daily budget to 800₽

---

## 📞 RESPONDING TO LEADS

**Speed matters!** Respond within 1 hour for best conversion.

### Lead Response Template (Telegram):

```
Здравствуйте, [Имя]!

Спасибо за заявку на бесплатный урок по математике 🦖

Давайте познакомимся и обсудим, как я могу помочь:

1️⃣ В каком классе учится ребёнок?
2️⃣ Какие есть сложности с математикой?
3️⃣ Есть ли цель (ОГЭ/ЕГЭ, подтянуть оценки)?

Когда вам удобно провести первый бесплатный урок?

С уважением,
Анна
УмноЗавр | smartzavr.ru
```

### Lead Response Template (Phone Call):

```
Script:
1. "Здравствуйте! Это Анна из УмноЗавра. Вы оставляли заявку на бесплатный урок?"

2. Listen to their needs

3. "Отлично! Давайте назначим бесплатное занятие, на котором:
   - Познакомимся
   - Определим уровень знаний
   - Составим индивидуальный план"

4. Schedule lesson (use Calendly or Google Calendar)

5. "Я отправлю вам ссылку на Zoom за 10 минут до урока. Увидимся!"

6. Send confirmation via Telegram/SMS
```

---

## 📈 OPTIMIZATION SCHEDULE

### Daily (15 minutes)
- Search query report → add negatives
- Check leads, respond immediately
- Monitor spend

### Weekly (1-2 hours)
- Performance analysis
- Bid adjustments (increase winners, decrease losers)
- A/B test review
- Update this week's learnings

### Monthly (half day)
- Comprehensive review vs targets
- ROI calculation
- Strategic planning for next month
- Identify scaling opportunities

---

## 🎯 SUCCESS BENCHMARKS

### Week 1: Learning
- ✓ Campaign is running
- ✓ Getting impressions & clicks
- ✓ Tracking is working
- ✓ First leads coming in

### Week 2-4: Optimization
- ✓ CPL under 1,000₽
- ✓ CTR improving (6-8%)
- ✓ 25-30 leads/month
- ✓ 7-9 students acquired

### Month 2-3: Scaling
- ✓ CPL under 800₽
- ✓ Consistent 30+ leads/month
- ✓ 9-12 students/month
- ✓ Ready to increase budget

---

## 📁 FILES REFERENCE

All campaign materials are in your repository:

```
/SmartZavrSimple/
├── docs/
│   ├── YANDEX_DIRECT_CAMPAIGN.md    ← Full strategy (read this!)
│   ├── KEYWORDS_IMPORT.csv          ← Import these keywords
│   ├── NEGATIVE_KEYWORDS.txt        ← Add these negatives
│   └── QUICK_START_CAMPAIGN.md      ← You are here!
├── src/main.js                        ← Tracking code (already updated)
└── index.html                        ← Your landing page
```

---

## 🎉 YOU'RE READY TO LAUNCH!

**Final checklist:**
- [ ] Yandex Metrica goals configured
- [ ] Yandex Direct account funded (35,000₽)
- [ ] Campaign created with all 3 ad groups
- [ ] Extensions added (phone, sitelinks, callouts)
- [ ] Negative keywords added
- [ ] Tracking tested and working
- [ ] Site is live on smartzavr.ru (not just localhost!)
- [ ] Ready to respond to leads quickly

**Launch it tonight at 20:00 Moscow time! 🚀**

---

## 📞 Need Help?

- Campaign issues: Check docs/YANDEX_DIRECT_CAMPAIGN.md (troubleshooting section)
- Technical issues: Review src/main.js tracking code
- Strategy questions: Re-read the full campaign document

**Remember:** First 2 weeks are learning. Be patient, monitor closely, optimize daily.

**Your unit economics are EXCELLENT (42:1 LTV:CAC). Focus on execution!**

---

**Первый урок — бесплатно! Давайте начнём! 🦖**
