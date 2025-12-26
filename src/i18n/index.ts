import en from './translations/en.json';
import hi from './translations/hi.json';
import bn from './translations/bn.json';
import te from './translations/te.json';
import mr from './translations/mr.json';
import ta from './translations/ta.json';
import ur from './translations/ur.json';
import gu from './translations/gu.json';
import kn from './translations/kn.json';
import ml from './translations/ml.json';
import or from './translations/or.json';
import pa from './translations/pa.json';
import as from './translations/as.json';
import { Language } from '@/stores/languageStore';

// Use Record<string, any> to allow partial translations
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const translations: Record<Language, Record<string, any>> = {
  en,
  hi,
  bn,
  te,
  mr,
  ta,
  ur,
  gu,
  kn,
  ml,
  or,
  pa,
  as,
};

export function getTranslation(language: Language) {
  return translations[language] || translations.en;
}

export function t(language: Language, key: string): string {
  const translation = getTranslation(language);
  const keys = key.split('.');
  let value: any = translation;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Fallback to English
      value = translations.en;
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = value[fallbackKey];
        } else {
          return key;
        }
      }
      break;
    }
  }
  
  return typeof value === 'string' ? value : key;
}
