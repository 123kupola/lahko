
export const languages = {
  en: 'English',
  si: 'Slovenian',
  hr: 'Croatian',
};

export const defaultLang = 'si';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.twitter': 'Twitter',
  },
  si: {
    'nav.home': 'Domov',
    'nav.about': 'O nas',
    'nav.blog': 'Blog',
  },
  hr: {
    'nav.home': 'Početna',
    'nav.about': 'O nama',
    'nav.blog': 'Blog',
  }
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang]?.[key] || ui[defaultLang][key];
  }
}
