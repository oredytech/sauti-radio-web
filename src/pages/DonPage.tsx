
import { useState } from "react";
import { Heart, Building, Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DonPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Heart className="mx-auto h-16 w-16 text-red-500 mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Soutenez Radio Sauti ya Injili
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Votre générosité nous permet de continuer à diffuser l&apos;Évangile et de toucher des vies à travers nos émissions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Informations bancaires */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Virement bancaire
                </CardTitle>
                <CardDescription>
                  Effectuez votre don directement par virement bancaire
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="font-medium text-gray-700 dark:text-gray-300">Nom du compte</Label>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Radio Sauti ya Injili</p>
                </div>
                <div>
                  <Label className="font-medium text-gray-700 dark:text-gray-300">Banque</Label>
                  <p className="text-sm text-gray-600 dark:text-gray-400">FirstBANK DRC, SA</p>
                </div>
                <div>
                  <Label className="font-medium text-gray-700 dark:text-gray-300">Numéro de compte</Label>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">00014280003010013790510</p>
                </div>
                
                <Separator className="my-4" />
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>Important :</strong> Veuillez mentionner &quot;Don Radio Sauti ya Injili&quot; 
                    dans la référence de votre virement.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Mobile Money */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Mobile Money
                </CardTitle>
                <CardDescription>
                  Effectuez votre don via Mobile Money
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="font-medium text-gray-700 dark:text-gray-300">Numéro 1</Label>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">+243 976 512 077</p>
                </div>
                <div>
                  <Label className="font-medium text-gray-700 dark:text-gray-300">Numéro 2</Label>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">+243 993 918 000</p>
                </div>
                
                <Separator className="my-4" />
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <p className="text-sm text-green-800 dark:text-green-200">
                    <strong>Instructions :</strong> Envoyez votre don à l&apos;un des numéros ci-dessus 
                    et mentionnez &quot;Don Radio&quot; dans le message.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Section contact et impact */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Contact pour les dons */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Nous contacter
                </CardTitle>
                <CardDescription>
                  Pour toute question concernant les dons
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">dons@sautiYaInjili.org</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">+243 976 512 077</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Goma, Nord-Kivu<br />
                      République Démocratique du Congo
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Impact des dons */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Votre impact</CardTitle>
                <CardDescription>
                  Découvrez comment votre don fait la différence
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                    <Heart className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">10€</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Permet de diffuser l&apos;Évangile pendant 1 heure
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                    <Heart className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">25€</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Couvre les frais d&apos;une émission complète
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-full">
                    <Heart className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">50€</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Soutient une journée complète de programmation
                    </p>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    <strong>Transparence :</strong> 100% de vos dons sont utilisés 
                    pour financer nos émissions et notre équipement.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DonPage;
