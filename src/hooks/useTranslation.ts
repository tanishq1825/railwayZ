import { useLanguageStore } from '@/stores/languageStore';
import { t, getTranslation } from '@/i18n';

export function useTranslation() {
  const { language, setLanguage } = useLanguageStore();
  
  const translate = (key: string): string => {
    return t(language, key);
  };
  
  return {
    t: translate,
    language,
    setLanguage,
    translations: getTranslation(language),
  };
}
