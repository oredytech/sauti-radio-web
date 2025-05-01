
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'fr' | 'en' | 'sw';

interface TranslationContextType {
  currentLanguage: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType>({
  currentLanguage: 'fr',
  changeLanguage: () => {},
  t: (key: string) => key,
});

// Simple translations for the most common UI elements
const translations: Record<Language, Record<string, string>> = {
  fr: {
    'nav.home': 'Accueil',
    'nav.news': 'Actualités',
    'nav.contact': 'Contact',
    'nav.about': 'À propos',
    'nav.shows': 'Émissions',
    'nav.internal': 'Activités internes',
    'nav.team': 'Équipe',
    'nav.internal.info': 'Informations internes',
    'nav.internal.gallery': 'Galerie',
    'nav.team.direction': 'Direction',
    'nav.team.technical': 'Technique',
    'nav.team.editorial': 'Rédaction',
    'nav.team.collaborators': 'Collaborateurs',
  },
  en: {
    'nav.home': 'Home',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    'nav.about': 'About',
    'nav.shows': 'Shows',
    'nav.internal': 'Internal Activities',
    'nav.team': 'Team',
    'nav.internal.info': 'Internal Information',
    'nav.internal.gallery': 'Gallery',
    'nav.team.direction': 'Direction',
    'nav.team.technical': 'Technical',
    'nav.team.editorial': 'Editorial',
    'nav.team.collaborators': 'Collaborators',
  },
  sw: {
    'nav.home': 'Nyumbani',
    'nav.news': 'Habari',
    'nav.contact': 'Wasiliana Nasi',
    'nav.about': 'Kuhusu Sisi',
    'nav.shows': 'Vipindi',
    'nav.internal': 'Shughuli za Ndani',
    'nav.team': 'Timu',
    'nav.internal.info': 'Habari za Ndani',
    'nav.internal.gallery': 'Picha na Video',
    'nav.team.direction': 'Uongozi',
    'nav.team.technical': 'Kiufundi',
    'nav.team.editorial': 'Uhariri',
    'nav.team.collaborators': 'Washirika',
  }
};

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    // Try to get the language from localStorage, default to 'fr'
    const savedLang = localStorage.getItem('language');
    return (savedLang as Language) || 'fr';
  });

  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
    // Optional: Set HTML lang attribute
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  const t = (key: string) => {
    return translations[currentLanguage][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ currentLanguage, changeLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
