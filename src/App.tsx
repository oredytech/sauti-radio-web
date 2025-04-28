
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import RadioPlayer from "@/components/RadioPlayer";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ArticlePage from "./pages/ArticlePage";
import NewsPage from "./pages/NewsPage";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            {/* Article routes with different URL patterns for compatibility */}
            <Route path="/article/:slug" element={<ArticlePage />} />
            <Route path="/shr/article/:slug" element={<ArticlePage />} /> {/* Keep for backward compatibility */}
            <Route path="/actualites/:slug" element={<ArticlePage />} />
            <Route path="/news/:slug" element={<ArticlePage />} />
            <Route path="/:slug" element={<ArticlePage />} /> {/* Catch direct article slugs */}
            <Route path="/actualites" element={<NewsPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <RadioPlayer />
          <Toaster />
        </Router>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
