# AGENTS.md

## Commands
- `npm run dev` - Start dev server at localhost:4321
- `npm run build` - Build for production to ./dist/
- `npm run preview` - Preview production build locally
- `npm run astro check` - Run TypeScript type checking
- `npm run astro -- --help` - Astro CLI help
- No linting or testing scripts configured - add ESLint/Prettier if needed

## Code Style
- TypeScript strict mode enabled (extends astro/tsconfigs/strict)
- Astro components: `.astro` extension, PascalCase names
- React components: `.tsx` extension, PascalCase names
- File naming: kebab-case for pages/layouts, PascalCase for components
- Import order: built-ins → external → internal → relative
- Use `const` over `let`/`var`, prefer arrow functions
- Use semantic HTML elements, Tailwind CSS for styling
- Follow Astro content collections pattern for blog posts
- Content schemas: define in content.config.ts with zod validation
- Internationalization: default locale 'si', supports 'si', 'en', 'hr'
- Error handling: use try/catch in async functions, validate props
- No Cursor rules (.cursor/rules/) or Copilot rules (.github/copilot-instructions.md) found