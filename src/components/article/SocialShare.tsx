
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Facebook, Twitter, Linkedin, Mail, Copy, Share2 } from "lucide-react";

interface SocialShareProps {
  url: string;
  title: string;
}

const SocialShare = ({ url, title }: SocialShareProps) => {
  const { toast } = useToast();
  
  const handleCopyLink = async () => {
    try {
      // Ensure the URL contains /shr/article/
      const urlObj = new URL(url);
      const path = urlObj.pathname;
      if (!path.includes('/shr/article/')) {
        urlObj.pathname = path.replace('/article/', '/shr/article/');
      }
      await navigator.clipboard.writeText(urlObj.toString());
      
      toast({
        title: "Lien copié",
        description: "Le lien a été copié dans le presse-papiers",
      });
    } catch (err) {
      console.error("Failed to copy: ", err);
      toast({
        title: "Erreur",
        description: "Impossible de copier le lien",
        variant: "destructive",
      });
    }
  };
  
  const openShareWindow = (shareUrl: string) => {
    // Ensure the URL contains /shr/article/
    const urlObj = new URL(url);
    const path = urlObj.pathname;
    if (!path.includes('/shr/article/')) {
      urlObj.pathname = path.replace('/article/', '/shr/article/');
    }
    const finalUrl = urlObj.toString();
    
    window.open(
      shareUrl.replace(url, finalUrl),
      "share-dialog",
      "width=800,height=600,location=yes,resizable=yes,scrollbars=yes"
    );
  };

  return (
    <div className="flex flex-col space-y-3">
      <Button
        variant="outline"
        className="flex justify-start bg-white dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 text-blue-600 dark:text-blue-300"
        onClick={() => openShareWindow(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`)}
      >
        <Facebook className="mr-2" size={18} />
        Partager sur Facebook
      </Button>
      
      <Button
        variant="outline"
        className="flex justify-start bg-white dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 text-blue-400 dark:text-blue-300"
        onClick={() => openShareWindow(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`)}
      >
        <Twitter className="mr-2" size={18} />
        Partager sur Twitter
      </Button>
      
      <Button
        variant="outline"
        className="flex justify-start bg-white dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 text-blue-700 dark:text-blue-300"
        onClick={() => openShareWindow(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`)}
      >
        <Linkedin className="mr-2" size={18} />
        Partager sur LinkedIn
      </Button>
      
      <Button
        variant="outline"
        className="flex justify-start bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
        onClick={() => window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`}
      >
        <Mail className="mr-2" size={18} />
        Envoyer par email
      </Button>
      
      <Button
        variant="outline"
        className="flex justify-start bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
        onClick={handleCopyLink}
      >
        <Copy className="mr-2" size={18} />
        Copier le lien
      </Button>
      
      {navigator.share && (
        <Button
          variant="outline"
          className="flex justify-start bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
          onClick={() => {
            navigator.share({
              title: title,
              url: url,
            }).catch(err => console.error("Error sharing:", err));
          }}
        >
          <Share2 className="mr-2" size={18} />
          Partager via l'API Web Share
        </Button>
      )}
    </div>
  );
};

export default SocialShare;
