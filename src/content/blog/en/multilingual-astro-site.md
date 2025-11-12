---
title: 'Setting up a multilingual Astro site'
description: 'A guide to setting up a multilingual website with Astro, including how to solve common issues.'
pubDate: 'Nov 10 2025'
heroImage: '@/assets/blog-placeholder-1.jpg'
---

In this blog post, we will explore how to set up a multilingual website using Astro. We will cover the basic configuration, folder structure, and how to deal with some of the common issues we have encountered.

## Configuration

The first step is to configure the `astro.config.mjs` file. Here we have defined the default language and the list of supported languages:

```javascript
// astro.config.mjs
export default defineConfig({
  i18n: {
    defaultLocale: 'si',
    locales: ['si', 'en', 'hr'],
    routing: {
      prefixDefaultLocale: false
    }
  },
});
```

## Folder structure

To organize the content, we have used the following folder structure:

```
src/
├── content/
│   └── blog/
│       ├── si/
│       ├── en/
│       └── hr/
└── pages/
    ├── si/
    ├── en/
    └── hr/
```

## Common issues and solutions

### Incorrect relative paths

One of the main issues we encountered were incorrect relative paths to images and components. We solved this by using path aliases in `astro.config.mjs` and `tsconfig.json`.

**astro.config.mjs:**
```javascript
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  },
});
```

**tsconfig.json:**
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "src/*"
      ]
    }
  }
}
```

### Incorrect links in the header

Another issue was incorrect links in the header of the website. The default language `si` should not have a prefix in the URL. We solved this with a helper function that generates the correct links based on the language.

```javascript
// src/components/Header.astro
const getLink = (path: string) => {
	if (lang === 'si') {
		return path;
	}
	return `/${lang}${path}`;
};
```

I hope this guide will help you in setting up your multilingual Astro site!
