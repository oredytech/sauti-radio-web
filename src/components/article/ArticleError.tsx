
import { Alert, AlertDescription } from "@/components/ui/alert";

const ArticleError = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <Alert variant="destructive">
          <AlertDescription>
            L'article demandé n'a pas pu être trouvé. Redirection vers les actualités...
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

export default ArticleError;
