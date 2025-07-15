import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { TranslationProvider } from './useTranslations'; // ← adapte le chemin si nécessaire
import './index.css';

createRoot(document.getElementById("root")!).render(
  <TranslationProvider>
    <App />
  </TranslationProvider>
);
