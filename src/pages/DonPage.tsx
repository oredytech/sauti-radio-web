
import { useState } from "react";
import { Heart, CreditCard, Gift, Building, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
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
        <div className="max-w-6xl mx-auto">
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

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Formulaire de don */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5" />
                  Faire un don en ligne
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
                  <p className="text-sm text-gray-600 dark:text-gray-400">Equity Bank</p>
                </div>
                <div>
                  <Label className="font-medium text-gray-700 dark:text-gray-300">Numéro de compte</Label>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">1234567890</p>
                </div>
                <div>
                  <Label className="font-medium text-gray-700 dark:text-gray-300">Code Swift</Label>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">EQBLKENA</p>
                </div>
                
                <Separator className="my-4" />
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>Important :</strong> Veuillez mentionner "Don Radio Sauti ya Injili" 
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
                  <Label className="font-medium text-gray-700 dark:text-gray-300">M-Pesa</Label>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">+254 712 345 678</p>
                </div>
                <div>
                  <Label className="font-medium text-gray-700 dark:text-gray-300">Airtel Money</Label>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">+254 734 567 890</p>
                </div>
                <div>
                  <Label className="font-medium text-gray-700 dark:text-gray-300">T-Kash</Label>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">+254 756 789 012</p>
                </div>
                
                <Separator className="my-4" />
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <p className="text-sm text-green-800 dark:text-green-200">
                    <strong>Instructions :</strong> Envoyez votre don à l'un des numéros ci-dessus 
                    et mentionnez "Don Radio" dans le message.
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
                    <p className="text-sm text-gray-600 dark:text-gray-400">+254 712 345 678</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      123 Avenue de la Paix<br />
                      Nairobi, Kenya
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
