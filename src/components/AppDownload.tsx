import { useState } from "react";
import { toast } from "sonner";
import { STREAM_URLS } from "@/utils/radioUtils";

const AppDownload = () => {
  const [streamUrl] = useState(STREAM_URLS[0]);

  const handleVlcClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Pour des raisons de compatibilité, nous vérifions si l'utilisateur est sur mobile
    // où le protocole vlc:// pourrait ne pas fonctionner correctement
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      e.preventDefault();
      toast.info("Téléchargement", {
        description: "Veuillez installer VLC et copier manuellement l'URL du flux audio"
      });
      // Provide the stream URL for mobile users to copy
      navigator.clipboard?.writeText(streamUrl).then(() => {
        toast.success("URL copiée", {
          description: "L'URL du flux a été copiée dans le presse-papier"
        });
      }).catch(() => {
        // Clipboard API not available, just show the URL
        toast.info("URL du flux", {
          description: streamUrl
        });
      });
    } else {
      toast.success("Ajout du flux", {
        description: "Le flux audio est en cours d'ajout à VLC"
      });
    }
  };

  return (
    <section 
      className="relative bg-primary text-white py-20"
      style={{
        backgroundImage: 'url("/lovable-uploads/8ea1f87a-8b5f-40cb-9b48-3fb31be81ef2.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-primary/40"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Écoutez-nous partout
          </h2>
          <p className="text-xl mb-12">
            Retrouvez Radio Sauti ya Injili sur différentes plateformes pour nous écouter où que vous soyez.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Radio Garden */}
            <a 
              href="http://radio.garden" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black/20 hover:bg-black/30 p-6 rounded-lg transition-all"
            >
              <div className="h-16 w-16 mx-auto mb-4">
                <img 
                  src="https://radio.garden/icons/favicon.png" 
                  alt="Radio Garden" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Radio Garden</h3>
              <p className="text-gray-300">Écoutez les radios du monde entier sur une carte interactive</p>
            </a>

            {/* VLC */}
            <a 
              href={`vlc://${streamUrl}`}
              onClick={handleVlcClick}
              className="bg-black/20 hover:bg-black/30 p-6 rounded-lg transition-all"
            >
              <div className="h-16 w-16 mx-auto mb-4">
                <svg className="w-full h-full" viewBox="0 0 589.827 589.827" fill="currentColor">
                  <path d="M294.914,0C132.29,0,0,132.29,0,294.914s132.29,294.913,294.914,294.913s294.913-132.29,294.913-294.913 S457.537,0,294.914,0z M294.914,544.303c-137.303,0-249.389-112.086-249.389-249.389S157.611,45.525,294.914,45.525 s249.389,112.086,249.389,249.389S432.217,544.303,294.914,544.303z M407.856,305.198L226.799,401.398 c-5.77,3.071-10.465,0.558-10.465-5.604V194.033c0-6.162,4.695-8.674,10.465-5.604l181.057,96.2 C413.626,287.7,413.626,302.127,407.856,305.198z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">VLC Media Player</h3>
              <p className="text-gray-300">Ajoutez notre flux audio dans VLC en un clic</p>
            </a>

            {/* Site Web */}
            <a 
              href="/" 
              className="bg-black/20 hover:bg-black/30 p-6 rounded-lg transition-all"
            >
              <div className="h-16 w-16 mx-auto mb-4">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Site Web</h3>
              <p className="text-gray-300">Écoutez directement depuis notre site web</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
