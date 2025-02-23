
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import RadioPlayer from "@/components/RadioPlayer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-8">Radio Sauti ya Injili</h1>
          
          <div className="max-w-4xl mx-auto">
            <img
              src="/lovable-uploads/aadc217e-e091-4719-aa5f-da6c6699bfe4.png"
              alt="Radio Sauti ya Injili"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
            />
            
            <div className="prose prose-lg max-w-none space-y-8">
              <div className="text-gray-600">
                <p className="mb-4">
                  Proclamer l'Évangile par le biais de la radio. Avec une équipe dévouée et des années d'expérience, 
                  RSI diffuse des messages spirituels aux auditeurs à travers des émissions de radio.
                </p>
                <p className="mb-4">
                  Enraciné dans la foi et motivé par la mission de répandre la parole de Dieu, RSI défend l'intégrité 
                  et l'authenticité dans tous les aspects.
                </p>
                <p className="mb-8">
                  RSI a touché la vie de nombreux auditeurs et a travaillé en étroite collaboration avec diverses 
                  communautés chrétiennes pour partager le message d'espoir.
                </p>
                <p className="mb-8">
                  La Radio Sauti ya Injili est une radio qui collabore avec les Eglises chrétienne qui proclament 
                  l'évangile de notre Seigneur JESUS-CHRIST.
                </p>
              </div>

              <Button variant="secondary" size="lg" className="w-full mb-12">
                ECOUTER LA RADIO EN DIRECT
              </Button>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">HISTORIQUE</h2>
                <p className="text-gray-600 mb-4">
                  La Radio Sauti ya Injili, a vu le jour en 1958 dans la province du Nord-Kivu. En cette époque, 
                  Nous disposions d'un studio de production, dans lequel, toutes les émissions étaient préenregistrées 
                  et ensuite, envoyées pour diffusion dans les autres radios, car nous n'avions pas encore acquis les 
                  matériels de diffusions, dont la pièce maitresse est l'émetteur.
                </p>
                <p className="text-gray-600 mb-4">
                  Pendant 47 ans, nous avions diffusé nos programmes dans les radios suivantes :
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-8">
                  <li>La Radio, Télévision Nationale de la République Démocratique du Congo, aujourd'hui appelé RTNC, jad voix du Zaïre</li>
                  <li>Radio CORDAC de Bujumbura/Burundi</li>
                  <li>Radio Addis-Abeba, en Ethiopie</li>
                  <li>Radio KIJABE du KENYA</li>
                  <li>Radio Monronvia au Liberia</li>
                </ul>
                <p className="text-gray-600 mb-8">
                  Aussi, Nous produisions des brochures d'évangélisation que nous distribuions dans différentes rues, 
                  aux passants, afin d'accompagner les messages suivi à la radio et gagner plus d'âmes à Christ.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">VISION</h2>
                <p className="text-gray-600 mb-8">
                  La Vision de la Radio Sauti ya Injili, RSI en sigle, c'est DEVELOPPER DES MECANISMES ET STRATEGIES 
                  QU'IL FAUT POUR UNIR LES FAMILLES AINSI QUE LES COMMUNAUTES DIVISEES, APPAISER LES AMES BRISEES 
                  ET DESESPERER DE VIVRE AUTRAVERS NOS EMISSIONS.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Objectifs</h2>
                <ul className="list-disc pl-6 text-gray-600 mb-8">
                  <li>Proclamer la bonne nouvelle de notre Seigneur JESUS-CHRIST</li>
                  <li>Promouvoir la Paix</li>
                  <li>Réconcilier les familles et couples séparés</li>
                  <li>Instruire la communauté sur différentes thématiques comme : le développement, la Santé, l'agriculture et l'élevage, l'art culinaire, etc…</li>
                  <li>Bénir et Divertir le peuple de Dieu au travers des messages bibliques des prédications et des chansons chrétiennes</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Développement</h2>
                <p className="text-gray-600">
                  Depuis 14 ans, nous continuons à poursuivre la vision que Dieu a mise en nous et continuons 
                  toujours à répondre aux objectifs que nous nous sommes fixés. Nous diffusons en 14 langues 
                  dont : Le Kiswahili, Français, Anglais, Lingala, Kinande, Kinyarwanda, Kihunde, Kitembo, 
                  Kinyanga, Kirega, Kihavu, Kifulero, Mashi et le Kibembe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <RadioPlayer />
    </div>
  );
};

export default About;
