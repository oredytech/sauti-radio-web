
import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "@/hooks/useTranslation";
import RadioPlayer from "@/components/RadioPlayer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, CreditCard, Phone, Mail } from "lucide-react";

const DonPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{t('don.title')} - Radio Sauti ya Injili</title>
        <meta name="description" content={t('don.metaDescription')} />
      </Helmet>

      <Navbar />

      <main className="pt-20 pb-24">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('don.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('don.description')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Bank Transfer Card */}
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <CreditCard className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{t('don.makeDonation')}</CardTitle>
                  </div>
                  <CardDescription>
                    {t('don.bankDetails')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2">
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {t('don.bankName')}:
                        </span>
                        <span className="font-bold text-gray-900 dark:text-white">
                          FirstBANK DRC, SA
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {t('don.accountNumber')}:
                        </span>
                        <span className="font-mono font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                          00014280003010013790510
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="font-medium text-blue-800 dark:text-blue-300 mb-1">Informations importantes :</p>
                    <p>Assurez-vous d'inclure votre nom complet lors du transfert pour que nous puissions vous remercier.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-colors">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-secondary/10 rounded-lg">
                      <Phone className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-xl">Contact & Support</CardTitle>
                  </div>
                  <CardDescription>
                    {t('don.contactUs')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                      <Phone className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Téléphone</p>
                        <p className="text-gray-600 dark:text-gray-300">+243 979 665 249</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                        <p className="text-gray-600 dark:text-gray-300">contact@sautiyainjili.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg border border-amber-200 dark:border-amber-800">
                    <p className="font-medium text-amber-800 dark:text-amber-300">
                      {t('don.alternativeMethods')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Impact Section */}
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-900 dark:text-white">
                  Votre Impact
                </CardTitle>
                <CardDescription className="text-lg">
                  Chaque don nous aide à atteindre plus de cœurs avec l'Évangile
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">24/7</div>
                    <p className="text-gray-600 dark:text-gray-300">Diffusion continue</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">1000+</div>
                    <p className="text-gray-600 dark:text-gray-300">Auditeurs quotidiens</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">∞</div>
                    <p className="text-gray-600 dark:text-gray-300">Vies transformées</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
      <RadioPlayer />
    </div>
  );
};

export default DonPage;
