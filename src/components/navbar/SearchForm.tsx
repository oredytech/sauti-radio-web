
import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SearchFormProps {
  showSearch: boolean;
  setShowSearch: (show: boolean) => void;
}

const SearchForm = ({ showSearch, setShowSearch }: SearchFormProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const searchFormRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchFormRef.current && !searchFormRef.current.contains(event.target as Node)) {
        setShowSearch(false);
      }
    };

    if (showSearch) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearch, setShowSearch]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      setSearchQuery("");
      setShowSearch(false);
    }
  };

  return (
    <div 
      ref={searchFormRef}
      className="absolute right-0 top-12 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 w-72 z-50 transition-all duration-200 ease-in-out"
    >
      <form onSubmit={handleSearch} className="relative flex items-center">
        <input 
          type="text" 
          placeholder="Rechercher..." 
          value={searchQuery} 
          onChange={e => setSearchQuery(e.target.value)} 
          className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full pl-4 pr-10 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
          autoFocus 
        />
        <Button type="submit" variant="ghost" size="icon" className="absolute right-0 rounded-full">
          <Search className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        </Button>
      </form>
    </div>
  );
};

export default SearchForm;
