
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { STREAM_URLS } from "@/utils/radioUtils";

interface VlcPlayButtonProps {
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const VlcPlayButton = ({
  className = "",
  variant = "outline",
  size = "default"
}: VlcPlayButtonProps) => {
  const streamUrl = STREAM_URLS[0];
  
  const handleVlcClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Pour des raisons de compatibilité, nous vérifions si l'utilisateur est sur mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      toast.info("VLC sur mobile", {
        description: "L'URL du flux a été copiée dans le presse-papier"
      });
      
      // Try to copy to clipboard for mobile users
      navigator.clipboard?.writeText(streamUrl).catch(() => {
        // Clipboard API not available
        toast.info("URL du flux", {
          description: streamUrl
        });
      });
    } else {
      // Create and trigger an anchor element programmatically
      const link = document.createElement('a');
      link.href = `vlc://${streamUrl}`;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.success("Ouverture de VLC", {
        description: "Le flux audio a été envoyé à VLC Media Player"
      });
    }
  };

  return (
    <Button
      className={className}
      variant={variant as any}
      size={size}
      onClick={handleVlcClick}
      aria-label="Écouter avec VLC Media Player"
    >
      <svg 
        viewBox="0 0 589.827 589.827" 
        className="h-4 w-4 mr-2"
        fill="currentColor"
      >
        <path d="M294.914,0C132.29,0,0,132.29,0,294.914s132.29,294.913,294.914,294.913s294.913-132.29,294.913-294.913 S457.537,0,294.914,0z M294.914,544.303c-137.303,0-249.389-112.086-249.389-249.389S157.611,45.525,294.914,45.525 s249.389,112.086,249.389,249.389S432.217,544.303,294.914,544.303z M407.856,305.198L226.799,401.398 c-5.77,3.071-10.465,0.558-10.465-5.604V194.033c0-6.162,4.695-8.674,10.465-5.604l181.057,96.2 C413.626,287.7,413.626,302.127,407.856,305.198z"/>
      </svg>
      Écouter avec VLC
      <ExternalLink className="ml-2 h-3 w-3" />
    </Button>
  );
};

export default VlcPlayButton;
