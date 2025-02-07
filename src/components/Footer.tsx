import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <img
              src="/lovable-uploads/c288b9bf-71dc-49ea-9721-51f84631a934.png"
              alt="Radio Sauti ya Injili"
              className="h-20 mb-6"
            />
            <p className="text-gray-300 mb-6">
              Radio Sauti ya Injili est une station de radio chrétienne de Goma, RDC. 
              Nous atteignons toutes les nations avec l'Évangile à travers une programmation 
              chrétienne de qualité.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-secondary">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-secondary">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Liens rapides</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-secondary">Accueil</a>
              </li>
              <li>
                <a href="#about" className="hover:text-secondary">À propos</a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-secondary">Programme</a>
              </li>
              <li>
                <a href="#events" className="hover:text-secondary">Événements</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-secondary">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contactez-nous</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-secondary" />
                <span>Goma, Nord-Kivu, RDC</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary" />
                <span>+243 123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary" />
                <span>contact@sautiyainjili.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Radio Sauti ya Injili. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;