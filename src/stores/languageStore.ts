import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Language = 
  | 'en' | 'hi' | 'bn' | 'te' | 'mr' 
  | 'ta' | 'ur' | 'gu' | 'kn' | 'ml' 
  | 'or' | 'pa' | 'as';

export const languageNames: Record<Language, string> = {
  en: 'English',
  hi: 'हिन्दी',
  bn: 'বাংলা',
  te: 'తెలుగు',
  mr: 'मराठी',
  ta: 'தமிழ்',
  ur: 'اردو',
  gu: 'ગુજરાતી',
  kn: 'ಕನ್ನಡ',
  ml: 'മലയാളം',
  or: 'ଓଡ଼ିଆ',
  pa: 'ਪੰਜਾਬੀ',
  as: 'অসমীয়া',
};

interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'en',
      setLanguage: (language: Language) => set({ language }),
    }),
    {
      name: 'railwayz-language',
    }
  )
);
