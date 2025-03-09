
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ArticlePage from "./pages/ArticlePage";
import NewsPage from "./pages/NewsPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/article/:id" element={<ArticlePage />} />
            <Route path="/actualites" element={<NewsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
