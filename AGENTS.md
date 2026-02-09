# Opencode Configuration

## Project Overview
SmartZavr.ru - Static website for Russian math tutoring service built with Vite, Tailwind CSS v4, and vanilla JavaScript.

## Development Commands

### Local Development
```bash
# Install dependencies (first time only)
npm install

# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Code Quality (Recommended to Add)
This project currently has no linting or type checking configured. Consider adding:

**ESLint for JavaScript:**
```bash
npm install --save-dev eslint
npx eslint --init
npx eslint src/main.js
```

**HTML Validation:**
```bash
npm install -g html-validate
html-validate src/index.html
```

## File Structure
```
src/
├── index.html      # Main SPA file with all content
├── main.js         # Interactive functionality (forms, navigation, modals)
├── style.css       # Tailwind CSS with @theme configuration
└── assets/         # Static assets (images, favicons, webmanifest)

public/
├── robots.txt      # SEO robots file
└── sitemap.xml     # SEO sitemap

dist/               # Production build output (gitignored)
```

## Key Areas for opencode
- Content updates: Edit `src/index.html` directly
- Functionality: Modify `src/main.js`
- Styling: Update Tailwind classes in HTML or custom theme in `src/style.css`
- Custom colors/fonts: Edit `@theme` block in `src/style.css`
- Forms: Configure backend integration in `src/main.js`

## Tailwind CSS v4 Configuration
Custom theme variables are defined in `src/style.css` using the `@theme` directive:
- Colors: `--color-smart-green`, `--color-smart-teal`, etc.
- Fonts: `--font-heading`, `--font-body`

## Testing
- Development: `npm run dev` starts local server with hot reload
- Production preview: `npm run build && npm run preview`
- Cross-browser: Chrome, Firefox, Safari, Edge
- Mobile: Test on actual devices and dev tools
- Forms: Test submission (currently shows success message only)

## Deployment
- Build produces static files in `dist/`
- Deploy to any static hosting:
  - Netlify
  - Vercel
  - GitHub Pages
  - Cloudflare Pages
  - Traditional web server (Nginx)

See SETUP.md for detailed deployment instructions.
