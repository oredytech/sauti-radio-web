
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-8">À Propos de Radio Sauti ya Injili</h1>
          
          <div className="max-w-4xl mx-auto">
            <img
              src="/lovable-uploads/aadc217e-e091-4719-aa5f-da6c6699bfe4.png"
              alt="Radio Sauti ya Injili"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
            />
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Radio Sauti ya Injili est une station de radio chrétienne basée à Goma, en République Démocratique du Congo. 
                Nous diffusons de la musique chrétienne inspirante et des enseignements bibliques.
              </p>
              
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Notre Mission</h2>
              <p className="text-gray-600 mb-6">
                Notre mission est d'atteindre toutes les nations avec l'Évangile. Nous croyons que nous toucherons de nombreuses 
                vies et impacterons les nations à travers notre programmation qui promeut les valeurs morales basées sur les 
                principes bibliques.
              </p>
              
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Notre Vision</h2>
              <p className="text-gray-600 mb-6">
                Nous aspirons à être une voix influente dans la région des Grands Lacs, apportant espoir, 
                encouragement et transformation à travers nos programmes radiophoniques. Notre vision est de voir 
                des vies transformées et des communautés renouvelées par la puissance de l'Évangile.
              </p>
              
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Nos Valeurs</h2>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Excellence dans la diffusion</li>
                <li>Intégrité dans nos opérations</li>
                <li>Engagement envers la vérité biblique</li>
                <li>Service à la communauté</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
