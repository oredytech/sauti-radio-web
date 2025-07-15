import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/toaster";
import { TranslationProvider } from "@/hooks/useTranslation"; // 🔥 À ajouter

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ArticlePage from "./pages/ArticlePage";
import NewsPage from "./pages/NewsPage";
import Contact from "./pages/Contact";
import Emissions from "./pages/EmissionsPage"; // <-- IMPORTE TA PAGE EMISSIONS
import Emissions from "./pages/DonPage";

const queryClient = new QueryClient();

function App() {
  return (
    <TranslationProvider> {/* ✅ ENVELOPPE DES TRADUCTIONS */}
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/shr/article/:slug" element={<ArticlePage />} />
              <Route path="/article/:slug" element={<ArticlePage />} />
              <Route path="/actualites" element={<NewsPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/emissions" element={<Emissions />} /> {/* <-- DÉCLARE LA ROUTE */}
              <Route path="/don" element={<Don />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
          </Router>
        </HelmetProvider>
      </QueryClientProvider>
    </TranslationProvider>
  );
}

export default App;
