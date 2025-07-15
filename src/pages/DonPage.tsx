
import { useState } from "react";
import { Heart, CreditCard, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DonPage = () => {
  const [amount, setAmount] = useState("25");
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("one-time");

  const predefinedAmounts = ["10", "25", "50", "100", "250"];

  const handleAmountSelect = (value: string) => {
    setAmount(value);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setAmount("");
  };

  const handleDonation = () => {
    const finalAmount = customAmount || amount;
    console.log(`Don de ${finalAmount}€ - Type: ${donationType}`);
    // Ici, vous pouvez intégrer votre système de paiement
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Heart className="mx-auto h-16 w-16 text-red-500 mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Soutenez Radio Sauti ya Injili
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Votre générosité nous permet de continuer à diffuser l'Évangile et de toucher des vies à travers nos émissions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Formulaire de don */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5" />
                  Faire un don
                </CardTitle>
                <CardDescription>
                  Choisissez le montant de votre don et aidez-nous à continuer notre mission
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Type de don */}
                <div>
                  <Label className="text-base font-medium mb-3 block">Type de don</Label>
                  <RadioGroup value={donationType} onValueChange={setDonationType}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="one-time" id="one-time" />
                      <Label htmlFor="one-time">Don unique</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="monthly" id="monthly" />
                      <Label htmlFor="monthly">Don mensuel</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Montants prédéfinis */}
                <div>
                  <Label className="text-base font-medium mb-3 block">Montant</Label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {predefinedAmounts.map((value) => (
                      <Button
                        key={value}
                        variant={amount === value ? "default" : "outline"}
                        onClick={() => handleAmountSelect(value)}
                        className="h-12"
                      >
                        {value}€
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Montant personnalisé */}
                <div>
                  <Label htmlFor="custom-amount" className="text-base font-medium mb-2 block">
                    Autre montant
                  </Label>
                  <div className="relative">
                    <Input
                      id="custom-amount"
                      type="number"
                      placeholder="Montant personnalisé"
                      value={customAmount}
                      onChange={(e) => handleCustomAmountChange(e.target.value)}
                      className="pl-8"
                    />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      €
                    </span>
                  </div>
                </div>

                {/* Bouton de don */}
                <Button 
                  onClick={handleDonation}
                  className="w-full h-12 text-lg font-medium"
                  disabled={!amount && !customAmount}
                >
                  <CreditCard className="mr-2 h-5 w-5" />
                  Faire un don de {customAmount || amount}€
                </Button>
              </CardContent>
            </Card>

            {/* Informations sur l'impact */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Votre impact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                      <Heart className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">10€</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Permet de diffuser l'Évangile pendant 1 heure
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
                        Couvre les frais d'une émission complète
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
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sécurité et transparence</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Paiement sécurisé SSL</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">100% des dons utilisés pour la mission</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Reçu fiscal disponible</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DonPage;
