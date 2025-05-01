
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'fr' | 'en' | 'sw';

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

// Translations for the site
const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navigation
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
    
    // Emissions section
    'emissions.title': 'Nos émissions',
    'emissions.subtitle': 'Découvrez nos différentes catégories d\'émissions',
    'emissions.noSubcategories': 'Aucune sous-catégorie disponible',
    
    // Common elements
    'common.readMore': 'Lire plus',
    'common.loadMore': 'Charger plus',
    'common.search': 'Rechercher',
    'common.submit': 'Soumettre',
    'common.cancel': 'Annuler',
    
    // Home page sections
    'home.hero.title': 'Radio Sauti ya Injili',
    'home.hero.subtitle': 'La voix de l\'évangile pour tous',
    'home.about.title': 'À propos de nous',
    'home.download.title': 'Écoutez-nous partout',
    'home.download.subtitle': 'Téléchargez notre application mobile',
    'home.youtube.title': 'Suivez-nous sur YouTube',
    
    // Events section
    'events.title': 'Actualités',
    'events.subtitle': 'Restez informé des derniers événements',
  },
  en: {
    // Navigation
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
    
    // Emissions section
    'emissions.title': 'Our Shows',
    'emissions.subtitle': 'Discover our different show categories',
    'emissions.noSubcategories': 'No subcategories available',
    
    // Common elements
    'common.readMore': 'Read more',
    'common.loadMore': 'Load more',
    'common.search': 'Search',
    'common.submit': 'Submit',
    'common.cancel': 'Cancel',
    
    // Home page sections
    'home.hero.title': 'Radio Sauti ya Injili',
    'home.hero.subtitle': 'The voice of the gospel for all',
    'home.about.title': 'About Us',
    'home.download.title': 'Listen to us everywhere',
    'home.download.subtitle': 'Download our mobile app',
    'home.youtube.title': 'Follow us on YouTube',
    
    // Events section
    'events.title': 'News',
    'events.subtitle': 'Stay informed about the latest events',
  },
  sw: {
    // Navigation
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
    
    // Emissions section
    'emissions.title': 'Vipindi Vyetu',
    'emissions.subtitle': 'Gundua aina mbalimbali za vipindi vyetu',
    'emissions.noSubcategories': 'Hakuna vipindi vidogo vilivyopatikana',
    
    // Common elements
    'common.readMore': 'Soma zaidi',
    'common.loadMore': 'Pakia zaidi',
    'common.search': 'Tafuta',
    'common.submit': 'Wasilisha',
    'common.cancel': 'Ghairi',
    
    // Home page sections
    'home.hero.title': 'Radio Sauti ya Injili',
    'home.hero.subtitle': 'Sauti ya injili kwa wote',
    'home.about.title': 'Kuhusu Sisi',
    'home.download.title': 'Tusikilize kila mahali',
    'home.download.subtitle': 'Pakua programu yetu ya simu',
    'home.youtube.title': 'Tufuate kwenye YouTube',
    
    // Events section
    'events.title': 'Habari',
    'events.subtitle': 'Endelea kupata taarifa juu ya matukio ya hivi karibuni',
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
