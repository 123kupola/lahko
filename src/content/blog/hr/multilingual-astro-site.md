---
title: 'Postavljanje višejezične Astro stranice'
description: 'Vodič za postavljanje višejezične web stranice s Astro, uključujući rješavanje uobičajenih problema.'
pubDate: 'Nov 10 2025'
heroImage: '@/assets/blog-placeholder-1.jpg'
---

U ovom blogu istražit ćemo kako postaviti višejezičnu web stranicu koristeći Astro. Pokriti ćemo osnove konfiguracije, strukturu mapa i kako se nositi s nekim od uobičajenih problema s kojima smo se susreli.

## Konfiguracija

Prvi korak je konfiguracija `astro.config.mjs` datoteke. Ovdje smo definirali zadani jezik i popis podržanih jezika:

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

## Struktura mapa

Za organizaciju sadržaja koristili smo sljedeću strukturu mapa:

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

## Uobičajeni problemi i rješenja

### Neispravne relativne putanje

Jedan od glavnih problema s kojima smo se susreli bile su neispravne relativne putanje do slika i komponenti. To smo riješili korištenjem aliasa putanja u `astro.config.mjs` i `tsconfig.json`.

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

### Neispravne veze u zaglavlju

Drugi problem bile su neispravne veze u zaglavlju web stranice. Zadani jezik `si` ne bi trebao imati prefiks u URL-u. To smo riješili pomoću pomoćne funkcije koja generira ispravne veze ovisno o jeziku.

```javascript
// src/components/Header.astro
const getLink = (path: string) => {
	if (lang === 'si') {
		return path;
	}
	return `/${lang}${path}`;
};
```

Nadam se da će vam ovaj vodič pomoći u postavljanju vaše višejezične Astro stranice!
