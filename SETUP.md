# Setup & Deployment Guide

## Local Development

### Option 1: Simple HTTP Server (Python)

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open http://localhost:8000 in your browser.

### Option 2: VS Code Live Server

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: Node.js HTTP Server

```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server -p 8000
```

## Docker Deployment

### Build and Run

```bash
# Build Docker image
docker build -t smartzavr-site .

# Run container
docker run -d -p 80:80 smartzavr-site
```

Access site at http://localhost

### Docker Compose (Optional)

Create `docker-compose.yml`:

```yaml
version: '3'
services:
  web:
    build: .
    ports:
      - "80:80"
    restart: unless-stopped
```

Run with:
```bash
docker-compose up -d
```

## Production Deployment

### Option 1: Nginx Server

1. Copy all files to server:
```bash
scp -r * user@server:/var/www/smartzavr.ru/
```

2. Configure Nginx:
```nginx
server {
    listen 80;
    server_name smartzavr.ru www.smartzavr.ru;
    root /var/www/smartzavr.ru;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml;
}
```

3. Enable SSL with Let's Encrypt:
```bash
sudo certbot --nginx -d smartzavr.ru -d www.smartzavr.ru
```

### Option 2: Static Hosting (Netlify/Vercel)

#### Netlify
1. Connect GitHub repo
2. Build command: (none)
3. Publish directory: `/`
4. Deploy

#### Vercel
1. Import GitHub repo
2. Framework: Other
3. Output directory: `/`
4. Deploy

### Option 3: GitHub Pages

1. Create `gh-pages` branch
2. Push files to branch
3. Enable GitHub Pages in repository settings
4. Configure custom domain (optional)

## Image Optimization (Recommended)

Before deployment, optimize images:

```bash
# Install ImageMagick or use online tools

# Convert PNG to WebP for better compression
for img in assets/*.png; do
    cwebp -q 80 "$img" -o "${img%.png}.webp"
done
```

Update HTML to use WebP with PNG fallback:
```html
<picture>
  <source srcset="assets/logo.webp" type="image/webp">
  <img src="assets/logo.png" alt="УмноЗавр">
</picture>
```

## Form Integration

Currently forms show success messages but don't send data. To integrate:

### Option 1: Formspree (Easiest)

1. Sign up at https://formspree.io
2. Get your form endpoint
3. Update forms in `index.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: Telegram Bot

1. Create Telegram bot via @BotFather
2. Get bot token
3. Get your chat ID
4. Update `js/main.js` with credentials:
```javascript
const botToken = 'YOUR_BOT_TOKEN';
const chatId = 'YOUR_CHAT_ID';
```
5. Uncomment `sendToTelegram()` calls in form handlers

### Option 3: Google Sheets

Use a service like https://sheetdb.io or https://sheet.best

### Option 4: Backend API

Create a simple backend (Node.js/PHP/Python) to handle form submissions.

## Analytics Setup

### Yandex Metrica (Recommended for Russian market)

1. Create account at https://metrica.yandex.ru
2. Get tracking code
3. Add before `</head>` in `index.html`:
```html
<!-- Yandex.Metrica counter -->
<script type="text/javascript">
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(YOUR_COUNTER_ID, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
```

### Google Analytics

1. Create property at https://analytics.google.com
2. Get tracking ID
3. Add before `</head>`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## SSL Certificate

For production, ALWAYS use HTTPS:

```bash
# Using Certbot (Let's Encrypt)
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d smartzavr.ru -d www.smartzavr.ru
```

## Performance Checklist

- [ ] Optimize and compress all images
- [ ] Enable Gzip compression on server
- [ ] Minify CSS/JS (use online tools or build process)
- [ ] Enable browser caching
- [ ] Use CDN for static assets (optional)
- [ ] Test with Google PageSpeed Insights
- [ ] Test with Yandex PageSpeed

## Testing

### Cross-browser Testing
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Mobile Testing
- Test on actual devices if possible
- Use browser dev tools device emulation
- Test forms on mobile (keyboard, auto-focus, etc.)

### SEO Testing
- Google Search Console
- Yandex Webmaster
- Check meta tags
- Validate structured data at schema.org validator

## Maintenance

### Regular Updates
- Update contact info if changed
- Add new testimonials
- Update pricing if changed
- Keep content fresh

### Monitoring
- Check analytics weekly
- Monitor form submissions
- Check site uptime
- Review and respond to inquiries promptly
