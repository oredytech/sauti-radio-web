
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Helmet } from "react-helmet-async";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  email: z.string().email({ message: "Veuillez entrer une adresse e-mail valide" }),
  subject: z.string().min(5, { message: "Le sujet doit contenir au moins 5 caractères" }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères" })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission with timeout
    setTimeout(() => {
      console.log("Form submitted:", data);
      
      // Show success toast
      toast({
        title: "Message envoyé",
        description: "Nous vous répondrons dans les plus brefs délais",
        variant: "default"
      });
      
      // Reset form fields
      reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Helmet>
        <title>Contact | Radio Sauti ya Injili</title>
        <meta name="description" content="Contactez-nous pour toute question, suggestion ou partenariat avec Radio Sauti ya Injili." />
      </Helmet>
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-primary mb-12">Contactez-nous</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-primary dark:text-white mb-6">Nos Coordonnées</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-1">Téléphone</h3>
                  <p className="text-gray-600 dark:text-gray-300">+243 976 512 077</p>
                  <p className="text-gray-600 dark:text-gray-300">+243 993 918 000</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-1">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">contact@rsirdc.org</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-1">Adresse</h3>
                  <p className="text-gray-600 dark:text-gray-300">B.P. : 3413 GOMA-DRC</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63822.71470146717!2d29.188016097656252!3d-1.6677858999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dd00b6daed8ff9%3A0xdfff71944d7d15a5!2sGoma%2C%20Democratic%20Republic%20of%20the%20Congo!5e0!3m2!1sen!2sus!4v1694767661783!5m2!1sen!2sus" 
                className="w-full h-64 rounded-lg border border-gray-200 dark:border-gray-700" 
                title="Carte de Goma"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-primary dark:text-white mb-6">Envoyez-nous un message</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nom complet
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Votre nom"
                  {...register("name")}
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre.email@exemple.com"
                  {...register("email")}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Sujet
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Sujet de votre message"
                  {...register("subject")}
                  className={errors.subject ? "border-red-500" : ""}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Écrivez votre message ici..."
                  rows={6}
                  {...register("message")}
                  className={errors.message ? "border-red-500" : ""}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Send className="mr-2 h-4 w-4" />
                    Envoyer le message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">Questions fréquemment posées</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-primary dark:text-white mb-3">Comment puis-je faire un don?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Vous pouvez faire un don par virement bancaire sur notre compte FBNBANK DRC, SA: 00014280003010013790510. 
                Pour plus d'informations, veuillez nous contacter directement.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-primary dark:text-white mb-3">Puis-je proposer une émission?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Oui, nous sommes toujours ouverts aux nouvelles idées d'émissions. 
                Veuillez nous envoyer votre proposition détaillée via notre formulaire de contact ou par email.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-primary dark:text-white mb-3">Comment devenir bénévole?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nous accueillons les bénévoles qui souhaitent contribuer à notre mission. 
                Veuillez nous contacter avec vos compétences et disponibilités pour discuter des opportunités.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-primary dark:text-white mb-3">Où puis-je écouter vos émissions passées?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nos émissions passées sont disponibles sur notre site web dans la section "Émissions". 
                Vous pouvez également nous suivre sur nos réseaux sociaux pour ne rien manquer.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
