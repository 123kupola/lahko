# TRANSLATION.md

## Multilingual Setup for Lahko Sanacije

This document outlines the multilingual configuration for the "Sanacija kanalizacije brez izkopa" website.

### Supported Languages
- **si (Slovenian)**: Default language
- **en (English)**: Secondary language
- **hr (Croatian)**: Tertiary language

### Astro i18n Configuration
Using built-in Astro i18n for routing and locale management:
- Default locale: `si`
- No prefix for default locale
- URL structure: `/` (si), `/en/`, `/hr/`

### Strapi i18n Integration
- Enable Internationalization plugin in Strapi
- Configure locales: Slovenian (si), English (en), Croatian (hr)
- Content types support multiple locales
- API returns locale-specific content based on `?locale=` parameter

### Translation Workflow
1. Create content in default language (Slovenian) in Strapi
2. Use Strapi admin to add translations for English and Croatian
3. Astro fetches content based on current locale
4. Fallback to Slovenian if translation missing

### URL Routing Examples
- `/` → Slovenian homepage
- `/blog/` → Slovenian blog
- `/en/blog/` → English blog
- `/hr/blog/` → Croatian blog

### Component Localization
- Use `Astro.currentLocale` to conditionally render content
- Store UI strings in locale-specific files
- Implement language switcher component

### SEO Considerations
- Set proper `lang` attributes
- Generate sitemaps per locale
- Configure OpenGraph for each language
- Use hreflang tags for cross-language linking

### Best Practices
- Maintain consistent terminology across languages
- Use professional translation services for accuracy
- Test all routes and content availability
- Monitor for missing translations

Note: Context7 research for best practices was attempted but API access failed. Implementation follows standard Astro and Strapi i18n patterns.