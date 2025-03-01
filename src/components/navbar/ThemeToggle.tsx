
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return document.documentElement.classList.contains('dark');
  });

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark' && !document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

  return (
    <Button variant="ghost" size="icon" className="rounded-full" onClick={toggleDarkMode} aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}>
      {isDarkMode ? <Sun className="h-5 w-5 text-gray-300" /> : <Moon className="h-5 w-5 text-gray-600" />}
    </Button>
  );
};

export default ThemeToggle;
