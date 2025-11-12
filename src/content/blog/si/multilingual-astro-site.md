---
title: 'Postavitev večjezične Astro strani'
description: 'Vodič po postavitvi večjezične spletne strani z Astro, vključno z reševanjem pogostih težav.'
pubDate: 'Nov 10 2025'
heroImage: '@/assets/blog-placeholder-1.jpg'
---

V tem blogu bomo raziskali, kako postaviti večjezično spletno stran z uporabo Astro. Pokrili bomo osnove konfiguracije, strukturo map in kako se spopasti z nekaterimi pogostimi težavami, na katere smo naleteli.

## Konfiguracija

Prvi korak je konfiguracija `astro.config.mjs` datoteke. Tukaj smo definirali privzeti jezik in seznam podprtih jezikov:

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

## Struktura map

Za organizacijo vsebine smo uporabili naslednjo strukturo map:

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

## Pogoste težave in rešitve

### Napačne relativne poti

Ena od glavnih težav, na katere smo naleteli, so bile napačne relativne poti do slik in komponent. To smo rešili z uporabo aliasov poti v `astro.config.mjs` in `tsconfig.json`.

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

### Napačni linki v glavi

Druga težava so bili napačni linki v glavi spletne strani. Privzeti jezik `si` ne bi smel imeti predpone v URL-ju. To smo rešili s pomočjo funkcije, ki generira pravilne linke glede na jezik.

```javascript
// src/components/Header.astro
const getLink = (path: string) => {
	if (lang === 'si') {
		return path;
	}
	return `/${lang}${path}`;
};
```

Upam, da vam bo ta vodič pomagal pri postavitvi vaše večjezične Astro strani!
