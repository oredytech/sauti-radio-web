
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/lovable-uploads/aadc217e-e091-4719-aa5f-da6c6699bfe4.png"
              alt="Antenne Radio Sauti ya Injili"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">Qui Sommes-Nous</h2>
            <p className="text-gray-600 mb-6">
              Radio Sauti ya Injili est une station de radio chrétienne basée à Goma, en République Démocratique du Congo. 
              Nous diffusons de la musique chrétienne inspirante et des enseignements bibliques.
            </p>
            <p className="text-gray-600 mb-6">
              Notre mission est d'atteindre toutes les nations avec l'Évangile. Nous croyons que nous toucherons de nombreuses 
              vies et impacterons les nations à travers notre programmation qui promeut les valeurs morales basées sur les 
              principes bibliques.
            </p>
            <Link to="/about" className="text-secondary hover:text-red-600 font-semibold flex items-center gap-2">
              En savoir plus
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
