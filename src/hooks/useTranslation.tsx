
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'fr' | 'en' | 'sw';

interface TranslationContextType {
  currentLanguage: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string;
  translateWithBrowser: (text: string) => string;
}

const TranslationContext = createContext<TranslationContextType>({
  currentLanguage: 'fr',
  changeLanguage: () => {},
  t: (key: string) => key,
  translateWithBrowser: (text: string) => text,
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
    'common.previous': 'Précédent',
    'common.next': 'Suivant',
    'common.backToHome': 'Retour à l\'accueil',
    
    // Home page sections
    'home.hero.title': 'Radio Sauti ya Injili',
    'home.hero.subtitle': 'Votre station de radio chrétienne à Goma, diffusant la Bonne Nouvelle à travers le monde.',
    'home.about.title': 'À propos de nous',
    'home.download.title': 'Écoutez-nous partout',
    'home.download.subtitle': 'Téléchargez notre application mobile',
    'home.youtube.title': 'Suivez-nous sur YouTube',
    'home.youtube.description': 'Retrouvez nos émissions, prédications et moments forts sur notre chaîne YouTube officielle. Ne manquez aucun contenu et abonnez-vous !',
    'home.youtube.subscribe': 'S\'abonner à notre chaîne',
    
    // About Us section
    'aboutus.mission': 'Notre mission est d\'atteindre toutes les nations avec l\'Évangile. Nous croyons que nous toucherons de nombreuses vies et impacterons les nations à travers notre programmation qui promeut les valeurs morales basées sur les principes bibliques.',
    'aboutus.description': 'Radio Sauti ya Injili est une station de radio chrétienne basée à Goma, en République Démocratique du Congo. Nous diffusons de la musique chrétienne inspirante et des enseignements bibliques.',
    
    // Events section
    'events.title': 'Actualités',
    'events.subtitle': 'Restez informé des derniers événements',
    'events.readMore': 'Lire la suite',
    
    // App Download section
    'appDownload.title': 'Écoutez-nous partout',
    'appDownload.subtitle': 'Retrouvez Radio Sauti ya Injili sur différentes plateformes pour nous écouter où que vous soyez.',
    'appDownload.radioGarden': 'Écoutez les radios du monde entier sur une carte interactive',
    'appDownload.vlc': 'Ajoutez notre flux audio dans VLC en un clic',
    'appDownload.website': 'Écoutez directement depuis notre site web',
    
    // Radio Player
    'radio.listen': 'Écouter en direct',
    'radio.onAir': 'En direct',
    'radio.connectionProblem': 'Problème de connexion au flux radio.',
    'radio.reconnecting': 'Tentative de reconnexion automatique...',
    'radio.checkConnection': 'Vérifiez votre connexion internet...',
    'radio.paused': 'Radio en pause',
    'radio.playError': 'Erreur de lecture',
    'radio.playErrorDesc': 'Impossible de lire le flux radio',
    
    // Footer
    'footer.donate': 'Faire un don',
    'footer.donateDescription': 'Pour vos contributions financières vous pouvez utiliser:',
    'footer.about': 'A propos',
    'footer.aboutDescription': 'La RSI, collabore avec toutes les Églises Chrétiennes qui proclament l\'Évangile de Notre Seigneur JÉSUS-CHRIST',
    'footer.contacts': 'Contacts',
    'footer.phone': 'Téléphone',
    'footer.copyright': 'Tous droits réservés',
    'footer.designedBy': 'Fièrement conçu par',
    
    // 404 Page
    '404.title': 'La page que vous recherchez n\'existe pas ou a été déplacée.',
    '404.searching': 'Recherche de l\'article',
    '404.searchingDesc': 'Nous essayons de trouver l\'article correspondant...',
    '404.found': 'Article trouvé',
    '404.foundDesc': 'Redirection vers l\'article...',
    '404.notFound': 'Article introuvable',
    '404.notFoundDesc': 'Nous n\'avons pas pu trouver l\'article demandé',
    '404.error': 'Erreur',
    '404.errorDesc': 'Une erreur est survenue lors de la recherche de l\'article',
    
    // News Page
    'news.title': 'Actualités | Sauti Radio',
    'news.description': 'Découvrez les dernières actualités et articles sur Sauti Radio',
    
    // Article page
    'article.share': 'Partager cet article',
    'article.leaveComment': 'Laisser un commentaire',
    'article.relatedArticles': 'Articles similaires',
    'article.readNext': 'Lire ensuite',
    
    // Comment form
    'comment.name': 'Nom',
    'comment.email': 'Email',
    'comment.comment': 'Commentaire',
    'comment.send': 'Envoyer le commentaire',
    'comment.sending': 'Envoi en cours...',
    'comment.submitted': 'Commentaire envoyé',
    'comment.submittedDesc': 'Votre commentaire a été soumis avec succès et est en attente de modération.',
    'comment.error': 'Erreur',
    'comment.errorDesc': 'Une erreur s\'est produite lors de l\'envoi de votre commentaire. Veuillez réessayer.',
    'comment.privacy': 'Votre adresse e-mail ne sera pas publiée. Les champs obligatoires sont indiqués par *',
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
    'common.previous': 'Previous',
    'common.next': 'Next',
    'common.backToHome': 'Back to home',
    
    // Home page sections
    'home.hero.title': 'Radio Sauti ya Injili',
    'home.hero.subtitle': 'Your Christian radio station in Goma, broadcasting the Good News across the world.',
    'home.about.title': 'About Us',
    'home.download.title': 'Listen to us everywhere',
    'home.download.subtitle': 'Download our mobile app',
    'home.youtube.title': 'Follow us on YouTube',
    'home.youtube.description': 'Find our shows, sermons and highlights on our official YouTube channel. Don\'t miss any content and subscribe!',
    'home.youtube.subscribe': 'Subscribe to our channel',
    
    // About Us section
    'aboutus.mission': 'Our mission is to reach all nations with the Gospel. We believe we will touch many lives and impact nations through our programming that promotes moral values based on biblical principles.',
    'aboutus.description': 'Radio Sauti ya Injili is a Christian radio station based in Goma, Democratic Republic of Congo. We broadcast inspiring Christian music and biblical teachings.',
    
    // Events section
    'events.title': 'News',
    'events.subtitle': 'Stay informed about the latest events',
    'events.readMore': 'Read more',
    
    // App Download section
    'appDownload.title': 'Listen to us everywhere',
    'appDownload.subtitle': 'Find Radio Sauti ya Injili on different platforms to listen to us wherever you are.',
    'appDownload.radioGarden': 'Listen to radios from around the world on an interactive map',
    'appDownload.vlc': 'Add our audio stream to VLC with one click',
    'appDownload.website': 'Listen directly from our website',
    
    // Radio Player
    'radio.listen': 'Listen live',
    'radio.onAir': 'On air',
    'radio.connectionProblem': 'Connection problem with radio stream.',
    'radio.reconnecting': 'Attempting to reconnect automatically...',
    'radio.checkConnection': 'Check your internet connection...',
    'radio.paused': 'Radio paused',
    'radio.playError': 'Playback error',
    'radio.playErrorDesc': 'Unable to play radio stream',
    
    // Footer
    'footer.donate': 'Donate',
    'footer.donateDescription': 'For your financial contributions you can use:',
    'footer.about': 'About',
    'footer.aboutDescription': 'RSI collaborates with all Christian Churches that proclaim the Gospel of Our Lord JESUS CHRIST',
    'footer.contacts': 'Contacts',
    'footer.phone': 'Phone',
    'footer.copyright': 'All rights reserved',
    'footer.designedBy': 'Proudly designed by',
    
    // 404 Page
    '404.title': 'The page you are looking for does not exist or has been moved.',
    '404.searching': 'Searching for the article',
    '404.searchingDesc': 'We are trying to find the corresponding article...',
    '404.found': 'Article found',
    '404.foundDesc': 'Redirecting to the article...',
    '404.notFound': 'Article not found',
    '404.notFoundDesc': 'We could not find the requested article',
    '404.error': 'Error',
    '404.errorDesc': 'An error occurred while searching for the article',
    
    // News Page
    'news.title': 'News | Sauti Radio',
    'news.description': 'Discover the latest news and articles on Sauti Radio',
    
    // Article page
    'article.share': 'Share this article',
    'article.leaveComment': 'Leave a comment',
    'article.relatedArticles': 'Related articles',
    'article.readNext': 'Read next',
    
    // Comment form
    'comment.name': 'Name',
    'comment.email': 'Email',
    'comment.comment': 'Comment',
    'comment.send': 'Send comment',
    'comment.sending': 'Sending...',
    'comment.submitted': 'Comment submitted',
    'comment.submittedDesc': 'Your comment has been successfully submitted and is awaiting moderation.',
    'comment.error': 'Error',
    'comment.errorDesc': 'An error occurred while sending your comment. Please try again.',
    'comment.privacy': 'Your email address will not be published. Required fields are marked with *',
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
    'common.previous': 'Iliyotangulia',
    'common.next': 'Ifuatayo',
    'common.backToHome': 'Rudi nyumbani',
    
    // Home page sections
    'home.hero.title': 'Radio Sauti ya Injili',
    'home.hero.subtitle': 'Kituo chako cha redio ya Kikristo huko Goma, kinachosambaza Habari Njema duniani kote.',
    'home.about.title': 'Kuhusu Sisi',
    'home.download.title': 'Tusikilize kila mahali',
    'home.download.subtitle': 'Pakua programu yetu ya simu',
    'home.youtube.title': 'Tufuate kwenye YouTube',
    'home.youtube.description': 'Pata vipindi vyetu, mahubiri na mambo muhimu kwenye kituo chetu rasmi cha YouTube. Usikose maudhui yoyote na ujisajili!',
    'home.youtube.subscribe': 'Jisajili kwenye kituo chetu',
    
    // About Us section
    'aboutus.mission': 'Dhamira yetu ni kufikia mataifa yote kwa Injili. Tunaamini tutawafikia maisha mengi na kuathiri mataifa kupitia programu zetu zinazoendeleza maadili ya kimaadili kulingana na kanuni za Biblia.',
    'aboutus.description': 'Radio Sauti ya Injili ni kituo cha redio ya Kikristo kilichoko Goma, Jamhuri ya Kidemokrasia ya Congo. Tunasambaza muziki wa Kikristo wa kuvutia na mafundisho ya kibiblia.',
    
    // Events section
    'events.title': 'Habari',
    'events.subtitle': 'Endelea kupata taarifa juu ya matukio ya hivi karibuni',
    'events.readMore': 'Soma zaidi',
    
    // App Download section
    'appDownload.title': 'Tusikilize kila mahali',
    'appDownload.subtitle': 'Pata Radio Sauti ya Injili kwenye majukwaa tofauti ili kutusikiliza popote ulipo.',
    'appDownload.radioGarden': 'Sikiliza redio kutoka duniani kote kwenye ramani shirikishi',
    'appDownload.vlc': 'Ongeza mtiririko wetu wa sauti kwenye VLC kwa kubofya mara moja',
    'appDownload.website': 'Sikiliza moja kwa moja kutoka kwenye tovuti yetu',
    
    // Radio Player
    'radio.listen': 'Sikiliza moja kwa moja',
    'radio.onAir': 'Hewani',
    'radio.connectionProblem': 'Tatizo la muunganisho na mtiririko wa redio.',
    'radio.reconnecting': 'Inajaribu kuunganisha tena kiotomatiki...',
    'radio.checkConnection': 'Angalia muunganisho wako wa mtandao...',
    'radio.paused': 'Redio imesitishwa',
    'radio.playError': 'Hitilafu ya kucheza',
    'radio.playErrorDesc': 'Haiwezi kucheza mtiririko wa redio',
    
    // Footer
    'footer.donate': 'Changia',
    'footer.donateDescription': 'Kwa michango yako ya fedha unaweza kutumia:',
    'footer.about': 'Kuhusu',
    'footer.aboutDescription': 'RSI inashirikiana na Makanisa yote ya Kikristo yanayotangaza Injili ya Bwana wetu YESU KRISTO',
    'footer.contacts': 'Mawasiliano',
    'footer.phone': 'Simu',
    'footer.copyright': 'Haki zote zimehifadhiwa',
    'footer.designedBy': 'Imeundwa kwa fahari na',
    
    // 404 Page
    '404.title': 'Ukurasa unaoutafuta haupo au umehamishwa.',
    '404.searching': 'Kutafuta makala',
    '404.searchingDesc': 'Tunajaribu kupata makala inayolingana...',
    '404.found': 'Makala imepatikana',
    '404.foundDesc': 'Inaelekeza kwenye makala...',
    '404.notFound': 'Makala haijapatikana',
    '404.notFoundDesc': 'Hatukuweza kupata makala iliyoombwa',
    '404.error': 'Hitilafu',
    '404.errorDesc': 'Hitilafu ilitokea wakati wa kutafuta makala',
    
    // News Page
    'news.title': 'Habari | Sauti Radio',
    'news.description': 'Gundua habari na makala za hivi karibuni kwenye Sauti Radio',
    
    // Article page
    'article.share': 'Shiriki makala hii',
    'article.leaveComment': 'Acha maoni',
    'article.relatedArticles': 'Makala zinazohusiana',
    'article.readNext': 'Soma ifuatayo',
    
    // Comment form
    'comment.name': 'Jina',
    'comment.email': 'Barua pepe',
    'comment.comment': 'Maoni',
    'comment.send': 'Tuma maoni',
    'comment.sending': 'Inatuma...',
    'comment.submitted': 'Maoni yametumwa',
    'comment.submittedDesc': 'Maoni yako yamewasilishwa kwa mafanikio na yanasubiri kuidhinishwa.',
    'comment.error': 'Hitilafu',
    'comment.errorDesc': 'Hitilafu ilitokea wakati wa kutuma maoni yako. Tafadhali jaribu tena.',
    'comment.privacy': 'Anwani yako ya barua pepe haitachapishwa. Sehemu zinazohitajika zimeonyeshwa na *',
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
    // Set HTML lang attribute
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  const t = (key: string) => {
    return translations[currentLanguage][key] || key;
  };
  
  // Function to use browser's translation capabilities as fallback
  const translateWithBrowser = (text: string) => {
    // This is just a placeholder - browser translation happens automatically
    // when the page language is set via the lang attribute
    return text;
  };

  return (
    <TranslationContext.Provider value={{ currentLanguage, changeLanguage, t, translateWithBrowser }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
