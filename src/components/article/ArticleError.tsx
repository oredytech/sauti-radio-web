
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const ArticleError = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const redirectTime = 5; // seconds
  
  useEffect(() => {
    let startTime = Date.now();
    const endTime = startTime + (redirectTime * 1000);
    
    const interval = setInterval(() => {
      const now = Date.now();
      const remaining = endTime - now;
      const elapsed = now - startTime;
      const totalDuration = redirectTime * 1000;
      
      setProgress(Math.min(100, (elapsed / totalDuration) * 100));
      
      if (remaining <= 0) {
        clearInterval(interval);
        navigate("/actualites", { replace: true });
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, [navigate]);
  
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <Alert variant="destructive" className="mb-4">
          <AlertTitle>Article introuvable</AlertTitle>
          <AlertDescription>
            L'article demandé n'a pas pu être trouvé. 
            Redirection vers les actualités dans {Math.ceil((redirectTime * 100 - progress) / 100)} secondes...
          </AlertDescription>
        </Alert>
        <Progress value={progress} className="h-2" />
      </div>
    </div>
  );
};

export default ArticleError;
