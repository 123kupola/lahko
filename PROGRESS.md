# PROGRESS.md

## Installation and Setup Guide for Lahko Sanacije Astro Blog

This guide tracks the implementation of a multilingual Astro blog integrated with Strapi CMS for "Sanacija kanalizacije brez izkopa" (Sewer Renovation Without Digging).

### Prerequisites
- Node.js 18+
- npm or yarn
- Git
- Strapi CLI (`npm install -g @strapi/strapi`)

### Step 1: Project Initialization
1. Clone or create Astro project: `npm create astro@latest -- --template blog`
2. Install dependencies: `npm install`
3. Update project name in `package.json` to "lahko-sanacije"

### Step 2: Configure Astro for Hybrid Rendering
1. Edit `astro.config.mjs`:
   - Change `output: "static"` to `output: "server"`
   - Ensure Netlify adapter is configured for server support
2. Install Node adapter if needed: `npx astro add @astrojs/node`

### Step 3: Update Site Constants
1. Edit `src/consts.ts`:
   - Set `SITE_TITLE = 'Sanacija kanalizacije brez izkopa'`
   - Set `SITE_DESCRIPTION` to appropriate Slovenian description

### Step 4: Set Up Multilingual Support
1. Configure `astro.config.mjs` with i18n:
   ```js
   i18n: {
     defaultLocale: 'si',
     locales: ['si', 'en', 'hr'],
     routing: {
       prefixDefaultLocale: false
     }
   }
   ```
2. Create locale-specific pages in `src/pages/[locale]/`
3. Update components to use `Astro.currentLocale`

### Step 5: Integrate Strapi CMS
1. Create separate Strapi project: `npx create-strapi-app@latest strapi-backend --quickstart`
2. Configure content types for blog posts with i18n enabled
3. Set up API endpoints for multilingual content
4. Update Astro pages to fetch from Strapi API instead of local collections
5. Handle authentication and CORS for API calls

### Step 6: Implement Content Migration
1. Migrate existing blog posts from `src/content/blog/` to Strapi
2. Update image handling for Strapi media library
3. Test API integration and data fetching

### Step 7: Deployment Configuration
1. Deploy Strapi to production (e.g., Railway, Heroku)
2. Update Astro environment variables for production API URLs
3. Configure Netlify for server rendering
4. Set up domain and SSL

### Step 8: Testing and Optimization
1. Test multilingual routing and content switching
2. Verify SEO with proper meta tags per locale
3. Optimize performance with caching and lazy loading
4. Run Lighthouse audits for each language

### Troubleshooting
- Ensure Strapi API is accessible from Astro build environment
- Check locale routing conflicts
- Verify content availability in all languages

### Completed Tasks
- [x] Project analysis and ASTRO.md preparation
- [x] Initial Strapi integration planning
- [x] Hybrid rendering configuration (changed to server)
- [x] Site constants update
- [x] Multilingual setup research
- [ ] Strapi CMS integration
- [ ] Content migration
- [ ] Deployment setup
- [ ] Testing and optimization