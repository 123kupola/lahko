export const languages = {
  en: 'English',
  si: 'Slovenian',
  hr: 'Croatian',
};

export const defaultLang = 'si';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages; // Use languages for type checking
  return defaultLang;
}

export function useTranslations(lang: keyof typeof languages, ui: Record<string, Record<string, string>>) {
  return function t(key: string) {
    return ui[lang]?.[key] || ui[defaultLang][key];
  }
}
