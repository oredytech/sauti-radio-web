
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import RadioPlayer from "@/components/RadioPlayer";
import { TranslationProvider } from "@/hooks/useTranslation";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ArticlePage from "./pages/ArticlePage";
import NewsPage from "./pages/NewsPage";
import Contact from "./pages/Contact";
import PlaylistsPage from "./pages/PlaylistsPage";
import VideosPage from "./pages/VideosPage";
import EmissionsPage from "./pages/EmissionsPage";
import DonPage from "./pages/DonPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TranslationProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              
              {/* YouTube routes */}
              <Route path="/emissions" element={<EmissionsPage />} />
              <Route path="/playlists" element={<PlaylistsPage />} />
              <Route path="/videos/:playlistId" element={<VideosPage />} />
              
              {/* Enhanced article routes */}
              <Route path="/article/:slug" element={<ArticlePage />} />
              <Route path="/shr/article/:slug" element={<ArticlePage />} /> 
              <Route path="/actualites/:slug" element={<ArticlePage />} />
              <Route path="/news/:slug" element={<ArticlePage />} />
              
              {/* Standard pages */}
              <Route path="/actualites" element={<NewsPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/don" element={<DonPage />} />
              
              {/* This route will try to match a direct slug before showing 404 */}
              <Route path="/:slug" element={<ArticlePage />} />
              
              {/* Fallback route - only shown if nothing else matches */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <RadioPlayer />
            <Toaster />
          </Router>
        </TranslationProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
