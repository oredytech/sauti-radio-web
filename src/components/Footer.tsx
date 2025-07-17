
import { MapPin, Phone, Mail, ArrowUp, Facebook, Mail as MailIcon } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-[#0D0B21] text-white relative">
      <div className="container mx-auto px-4 py-12 pb-20">
        <div className="grid md:grid-cols-5 gap-12">
          {/* Faire un don */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b border-blue-800 pb-2 inline-block">
              {t('footer.donate')}
            </h3>
            <p className="text-gray-300 mb-6">
              {t('footer.donateDescription')}
            </p>
            <p className="text-gray-300">FirstBANK DRC, SA: 00014280003010013790510</p>
          </div>

          {/* A propos */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b border-blue-800 pb-2 inline-block">
              {t('footer.about')}
            </h3>
            <p className="text-gray-300">
              {t('footer.aboutDescription')}
            </p>
          </div>

          {/* Activités internes */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b border-blue-800 pb-2 inline-block">
              {t('nav.internal')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/activities/internal-info" 
                  className="text-gray-300 hover:text-blue-400 transition-colors block"
                >
                  {t('nav.internal.info')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/activities/gallery" 
                  className="text-gray-300 hover:text-blue-400 transition-colors block"
                >
                  {t('nav.internal.gallery')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Équipe */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b border-blue-800 pb-2 inline-block">
              Équipe
            </h3>
            <Link 
              to="/equipe" 
              className="text-gray-300 hover:text-blue-400 transition-colors block"
            >
              Notre équipe
            </Link>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b border-blue-800 pb-2 inline-block">
              {t('footer.contacts')}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-500" />
                <span>{t('footer.phone')}: +243 976 512 077, +243 993 918 000</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span>B.P. : 3413 GOMA-DRC</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.447.099-.133.197-.513.646-.627.775-.114.133-.228.148-.425.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
              </a>
              <a href="#" className="bg-gray-600 p-2 rounded-full hover:bg-gray-700 transition-colors">
                <MailIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Radio Sauti ya Injili. {t('footer.copyright')}. | 
            <a href="https://oredytech.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
              {" "}{t('footer.designedBy')} Oredy Technologie
            </a>
          </p>
        </div>
      </div>

      {/* Bouton retour en haut */}
      <button onClick={scrollToTop} className="fixed bottom-8 right-8 bg-blue-800 p-3 rounded-md hover:bg-blue-700 transition-colors mx-[15px] px-[5px] py-[5px] my-[35px]">
        <ArrowUp className="h-6 w-6" />
      </button>
    </footer>
  );
};

export default Footer;
