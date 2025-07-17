
import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, User, Crown, Shield, Calculator, Mic, Settings, PenTool, Phone, Radio } from "lucide-react";

const EquipePage = () => {
  const teamSections = [
    {
      title: "Visionnaire et Initiateur",
      icon: Crown,
      members: [
        "Pasteur Ezra KASEREKA MAKOMA, Directeur honoraire et Conseiller principal de la Radio Sauti ya Injili"
      ]
    },
    {
      title: "Conseil Exécutif",
      icon: Shield,
      members: [
        "Président : Rév. KAMBALE LUSENGE Dieudonné",
        "Vice-Président : Ev. RWABURINDI Jean-Bosco",
        "Secrétaire : Rév. KAMBALE KIVUNDA Cyprien"
      ]
    },
    {
      title: "Audit interne",
      icon: Calculator,
      members: [
        "Présidente : Madame KIVALYA DEKILA",
        "Ir KAMBALE BALIKWISHA Frédéric"
      ]
    },
    {
      title: "Direction",
      icon: User,
      members: [
        "MUHINDO KATEMBO Gédéon, Directeur de la Radio Sauti ya Injili depuis 18 mai 2023"
      ]
    },
    {
      title: "Administration",
      icon: Calculator,
      members: [
        "Comptable : KAKULE SIMISI Anicet"
      ]
    },
    {
      title: "Programme",
      icon: Mic,
      members: [
        "Chef de Programme : François MWINJA BIRAMUKA"
      ]
    },
    {
      title: "Technique et Logistique",
      icon: Settings,
      members: [
        "Chef-Technique et Logisticien : Ir. MWEMA KINYOMA Laurent"
      ]
    },
    {
      title: "Rédaction",
      icon: PenTool,
      members: [
        "Rédactrice en Chef : Marie BISIMWA NETCHI"
      ]
    },
    {
      title: "Réception et Caisse",
      icon: Phone,
      members: [
        "Réceptionniste et caissière : MASIKA MUHANDIRO Rebecca"
      ]
    },
    {
      title: "Service Technique",
      icon: Settings,
      members: [
        "PALUKU SYAGHUSWA Fabrice",
        "KASEREKA MUPENDA Josué",
        "François MWINJA",
        "Ir. MWEMA KINYOMA"
      ]
    },
    {
      title: "Équipe de Rédaction",
      icon: PenTool,
      members: [
        "ERIC BADESI WA MULAUKO",
        "KUBUYA NDAKOLA RICHARD",
        "BAKULU MUBANGU Sébastien Ibrahim",
        "Marie BISIMWA NECHI",
        "MUHINDO KAMUNDU Jarro"
      ]
    },
    {
      title: "Animatrices d'Antennes",
      icon: Radio,
      members: [
        "MASIKA MUHANDIRO Rebecca",
        "BARAKA BATUNDI Ghislaine",
        "KAHINDO MAKOMA Adèle"
      ]
    },
    {
      title: "Permanence",
      icon: User,
      members: [
        "KASEREKA MUPENDA Josué"
      ]
    },
    {
      title: "Producteurs d'émissions",
      icon: Mic,
      members: [
        "Plus de 60 hommes et femmes produisent des émissions en plus de 15 langues locales, nationales et internationales"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Notre Équipe - Radio Sauti ya Injili</title>
        <meta name="description" content="Découvrez l'équipe dédiée de Radio Sauti ya Injili qui œuvre pour propager l'Évangile à travers les ondes." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <Navbar />
        
        <main className="container mx-auto px-4 py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Users className="h-16 w-16 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              NOTRE ÉQUIPE
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Découvrez les hommes et femmes dévoués qui œuvrent chaque jour pour faire rayonner 
              Radio Sauti ya Injili et propager l&apos;Évangile à travers les ondes.
            </p>
          </div>

          {/* Team Sections */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {teamSections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-blue-700 dark:text-blue-400">
                      <IconComponent className="h-6 w-6" />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.members.map((member, memberIndex) => (
                        <li key={memberIndex} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {member}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <Card className="max-w-4xl mx-auto bg-blue-50 dark:bg-blue-900/20">
              <CardContent className="pt-8">
                <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">
                  Une équipe unie pour une mission commune
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  Ensemble, nous travaillons avec passion et dévouement pour faire de Radio Sauti ya Injili 
                  un phare d&apos;espoir et de foi dans notre communauté. Chaque membre de notre équipe apporte 
                  ses compétences uniques au service de notre mission commune : propager l&apos;Évangile et 
                  édifier la foi de nos auditeurs.
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default EquipePage;
