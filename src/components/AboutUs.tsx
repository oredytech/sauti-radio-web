const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="/lovable-uploads/e9395874-6c20-46b0-914a-4110cba6d314.png"
                alt="Studio"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/lovable-uploads/e9395874-6c20-46b0-914a-4110cba6d314.png"
                alt="Broadcasting"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img
                src="/lovable-uploads/e9395874-6c20-46b0-914a-4110cba6d314.png"
                alt="Team"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/lovable-uploads/e9395874-6c20-46b0-914a-4110cba6d314.png"
                alt="Equipment"
                className="rounded-lg shadow-lg"
              />
            </div>
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
            <button className="text-secondary hover:text-red-600 font-semibold flex items-center gap-2">
              En savoir plus
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;