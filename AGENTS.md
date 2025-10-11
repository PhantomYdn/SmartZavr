# Opencode Configuration

## Project Overview
SmartZavr.ru - Static website for Russian math tutoring service built with HTML, Tailwind CSS, and vanilla JavaScript.

## Development Commands

### Local Development
```bash
# Python HTTP server
python3 -m http.server 8000

# Docker
docker build -t smartzavr .
docker run -d -p 80:80 smartzavr
```

### Code Quality (Recommended to Add)
This project currently has no linting or type checking configured. Consider adding:

**ESLint for JavaScript:**
```bash
npm init -y
npm install --save-dev eslint
npx eslint --init
npx eslint js/main.js
```

**HTML Validation:**
```bash
# Install html-validate globally
npm install -g html-validate
html-validate index.html
```

**CSS Validation:**
```bash
# Install stylelint
npm install --save-dev stylelint stylelint-config-standard
npx stylelint "**/*.html" --custom-syntax postcss-html
```

## File Structure
- `index.html` - Main SPA file with all content
- `js/main.js` - Interactive functionality (forms, navigation, modals)
- `assets/` - Static assets (images, favicons)
- Documentation files: README.md, PROJECT_SUMMARY.md, SETUP.md, etc.

## Key Areas for opencode
- Content updates: Edit `index.html` directly
- Functionality: Modify `js/main.js`
- Styling: Update Tailwind classes in HTML
- Forms: Configure backend integration in `js/main.js`

## Testing
- Manual testing: Open in browser with local server
- Cross-browser: Chrome, Firefox, Safari, Edge
- Mobile: Test on actual devices and dev tools
- Forms: Test submission (currently shows success message only)

## Deployment
- Static hosting (Netlify, Vercel, GitHub Pages)
- Docker container
- Traditional web server (Nginx)

See SETUP.md for detailed deployment instructions.