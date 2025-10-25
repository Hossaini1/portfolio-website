import 'server-only';

const dictionaries = {
  en: () => import('@/translations/en.json').then((module) => module.default),
  de: () => import('@/translations/de.json').then((module) => module.default),
  fa: () => import('@/translations/fa.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'en' | 'de' | 'fa') =>
  dictionaries[locale]();

// [lang]/dictionaries.ts 