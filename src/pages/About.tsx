
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RadioControl from "@/components/RadioControl";
import { useTranslation } from "@/hooks/useTranslation";

const About = () => {
  const { t, currentLanguage } = useTranslation();

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-8">PRESENTATION DE LA RADIO SAUTI YA INJILI, 89.0 FM</h1>
          
          <div className="max-w-4xl mx-auto">
            <img
              src="/lovable-uploads/aadc217e-e091-4719-aa5f-da6c6699bfe4.png"
              alt="Radio Sauti ya Injili"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
            />
            
            <div className="prose prose-lg max-w-none space-y-8 dark:prose-invert">
              {/* Préambule */}
              <div className="text-gray-600 dark:text-gray-300">
                <h2 className="text-2xl font-bold text-primary mb-4">Préambule</h2>
                <p className="mb-4">
                  La Radio Sauti ya Injili en sigle "RSI" étant une organisation légale de droit congolais est 
                  constitué des hommes et des femmes engagés dans la mission d'annoncer la Bonne Nouvelle de Jésus Christ.
                </p>
              </div>

              {/* Dénomination sociale */}
              <div className="text-gray-600 dark:text-gray-300">
                <h2 className="text-2xl font-bold text-primary mb-4">Dénomination sociale</h2>
                <p className="mb-4">
                  L'Association est dénommée Radio est dénommée Radio Sauti ya Injili en sigle « RSI » ; elle doit être 
                  protégée par ses membres présents et futurs en tant qu'Association Sans But Lucratif « Asbl ». Tout usage 
                  parallèle est prohibé.
                </p>
              </div>

              {/* Adresse physique et électronique */}
              <div className="text-gray-600 dark:text-gray-300">
                <h2 className="text-2xl font-bold text-primary mb-4">Adresse physique et électronique</h2>
                <p className="mb-4">
                  Le siège social de l'Association est situé dans la ville de Goma, en République Démocratique du Congo, 
                  Province du Nord-Kivu, dans la Commune de KARISIMBI, Quartier MABANGA- SUD, Avenue MUTONGO, N°16.
                </p>
                <p className="mb-4">
                  Elle émet sur 89.0 MHZ FM stéréo et en ligne sur <a href="http://www.rsirdc.org" className="text-blue-600 dark:text-blue-400 hover:underline">www.rsirdc.org</a>
                </p>
                <p className="mb-4">
                  Ses adresses postales sont : B.P. 3413 Goma, Nord-Kivu en RDC
                </p>
                <p className="mb-4">
                  Les numéros de contact officiels sont: +243 976512077 et +243 813134109.
                </p>
                <p className="mb-4">
                  Son adresse mail est : <a href="mailto:rsigoma2015@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">rsigoma2015@gmail.com</a>
                </p>
              </div>

              {/* Radio Control */}
              <div className="w-full">
                <RadioControl 
                  showText={true} 
                  size="lg" 
                  variant="secondary"
                  className="w-full mb-12"
                />
              </div>

              {/* Histoire */}
              <div className="text-gray-600 dark:text-gray-300">
                <h2 className="text-2xl font-bold text-primary mb-4">Histoire de la Radio Sauti ya Injili</h2>
                <p className="mb-4">
                  La Radio Sauti ya Injili avait été conçue au Nord-Kivu en 1958 sous la dénomination de SAUTI YA HABARI NJEMA. 
                  À l'époque, elle fonctionnait comme un studio d'enregistrement des émissions. Celles-ci étaient diffusées 
                  par la suite sur les antennes de la radio du gouvernement congolais (à Bukavu et à Goma) et à d'autres radios 
                  partenaires étrangères comme la Radio CORDAC (Bujumbura, Burundi), Radio ADDIS-ABEBA (Ethiopie), 
                  Radio MORONVIA (Liberia), Radio KIJABE Kenya.
                </p>
                <p className="mb-4">
                  C'est à partir de l'an 2001, le 19 mars que neuf (9) membres serviteurs et servantes de Dieu ont rejoint 
                  le visionnaire pour devenir les premiers signataires des statuts de la R.S.I. sur l'arrêté ministériel 
                  N° 687/CAB/ Min /J/2004 du 15/11/2004 accordant la personnalité juridique à l'association sans but 
                  lucratif non confessionnelle dénommée Radio Sauti ya Injili en sigle R.S.I.
                </p>
                <p className="mb-4">
                  Bien que créée en date du 19 mars 2001, la Radio Sauti ya Injili a été opérationnelle en date du 26 février 
                  2005 à sa propre station, autonome à Goma avec un émetteur de 250w, don d'un partenaire américain. C'est 
                  alors que la première émission a été diffusée à la Radio dans les ondes à partir des installations techniques 
                  autonomes. Par la suite, afin d'éviter les interférences avec d'autres radios nouvellement créées, la RSI a 
                  été obligée d'acheter un émetteur d'une capacité de 1000 Watts provenant des recettes locales.
                </p>
                <p className="mb-4">
                  Toutefois, l'inspiration du Président - Directeur visionnaire, Pasteur Ezra Kasereka Makoma consistait de produire 
                  des émissions qu'il rendait à d'autres radios : RTNC/Goma, RTNC/Bukavu, Radio Kijabe /KENYA, Radio CORDAC/ 
                  BUJUMBURA-BURUNDI, Radio Monrovia/ LIBERIA et Radio Addis-Abeba/ ETHIOPIA. Notons en passant que le 
                  visionnaire a été soutenu par :
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Dr. Nelson des USA, via son fils Dan NELSON qui a respecté le testament de son père et qui, ainsi, donna à la RSI, le 1er émetteur de 250 Watts en Février 2005.</li>
                  <li>Philip BETTS, Patron de l'ex ESCO-ZAIRE, aujourd'hui appelé ESCO-KIVU, qui a facilité l'octroi de la parcelle et la construction des installations où fonctionnent présentement la RSI, et aussi l'érection de l'antenne émettrice.</li>
                </ul>
              </div>

              {/* Statut juridique */}
              <div className="text-gray-600 dark:text-gray-300">
                <h2 className="text-2xl font-bold text-primary mb-4">Statut juridique</h2>
                <p className="mb-4">
                  Cette station de radio « RSI » est autonome et diffuse depuis le 26 février 2005 ses émissions à partir de son 
                  propre émetteur. Elle est régie par des Statuts notariés et un Règlement Intérieur. La RSI est reconnue 
                  officiellement par des documents suivant :
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Le récépissé de la déclaration d'exploitation n°04/CAB.MP/0002/2004 délivré à Kinshasa le 18 mai 2004 par le ministre de la presse et information.</li>
                  <li>L'arrêté ministériel n°687/CAB/MIN/J/2004 délivre à Kinshasa le 15 NOV 2004 par le ministre de la justice et garde de seaux.</li>
                  <li>Le certificat d'enregistrement délivré par le Ministère du Plan et suivi de la mise en œuvre de la Révolution de la Modernité ayant une validité de deux ans.</li>
                </ul>
                <p className="mb-4">
                  La Radio Sauti ya Injili est une structure qui n'évolue pas en vase clôt, elle dispose de tous les documents 
                  nécessaires pour exercer ses activités. C'est ainsi qu'à la fin de l'année 2006, elle a été reconnue comme 
                  membre du RATECO (réseau des radios et télévisions communautaires de l'Est de la RD Congo). Elle fait 
                  partie des membres du CORACON (Collectif des Radios et Télévisions Communautaires du Nord Kivu), du REMED 
                  (Réseau des Médias pour le Développent), l'UNPC Nord Kivu (Union Nationale de la Presse du Congo au Nord Kivu) 
                  et bien d'autres corporations réunissant les journalistes aux niveaux Provincial et National.
                </p>
              </div>

              {/* Vision et Mission */}
              <div className="text-gray-600 dark:text-gray-300">
                <h2 className="text-2xl font-bold text-primary mb-4">Vision et Mission De La RSI</h2>
                <h3 className="text-xl font-semibold text-primary mb-2">Vision :</h3>
                <p className="mb-4">
                  Etre la Radio qui centre ses émissions sur la transformation des âmes perdues en âmes sauvées pour vivre 
                  en paix dans le monde avant la deuxième venue de Jésus-Christ. Cf. 1Théssaloniciens 5 : 23-28.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-2">Mission :</h3>
                <p className="mb-4">
                  Proclamer l'Evangile de Jésus-Christ dans le monde entier afin de gagner les âmes pour le Royaume de Dieu. 
                  Cf. Matthieu 28:19 et Actes 1:8.
                </p>
              </div>

              {/* Valeurs */}
              <div className="text-gray-600 dark:text-gray-300">
                <h2 className="text-2xl font-bold text-primary mb-4">Valeurs de la RSI</h2>
                <ul className="list-disc pl-6 mb-4">
                  <li>Salut</li>
                  <li>Dévouement</li>
                  <li>Intégrité</li>
                  <li>Professionnalisme</li>
                  <li>Performance</li>
                  <li>Cohésion sociale</li>
                  <li>Collégialité</li>
                  <li>Serviabilité</li>
                </ul>
              </div>

              {/* Emblème */}
              <div className="text-gray-600 dark:text-gray-300">
                <h2 className="text-2xl font-bold text-primary mb-4">EMBLEME :</h2>
                <p className="mb-2">Notre emblème (logo type) est constitué de :</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>La Bible, ouverte source de notre inspiration par le Saint-Esprit, est la base doctrinale de nos enseignements pour le salut de l'humanité.</li>
                  <li>La croix sur la Bible : le salut est venu de Dieu par Jésus mort sur la croix.</li>
                  <li>Les rayons symbolisent la lumière et la puissance du Saint-Esprit pour la proclamation de la Bonne Nouvelle de Jésus-Christ.</li>
                  <li>Le microphone symbolise la macro-chaire pour rependre la Bonne Nouvelle à travers les ondes à partir de Goma, dans la R.D Congo vers l'Afrique et dans le monde.</li>
                </ul>
              </div>

              {/* Objectifs */}
              <div className="text-gray-600 dark:text-gray-300">
                <h2 className="text-2xl font-bold text-primary mb-4">Objectifs de la RSI</h2>
                <h3 className="text-xl font-semibold text-primary mb-2">Objectif global :</h3>
                <p className="mb-4">
                  L'objectif global de la Radio Sauti ya Injili est de développer des mécanismes et stratégies qu'il faut 
                  pour unir les familles ainsi que les âmes brisées et désespérées, d'avoir la joie de vivre grâce aux 
                  émissions qu'elle diffuse.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-2">Objectifs spécifiques :</h3>
                <p className="mb-2">La RSI a pour objectifs spécifiques :</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Proclamer la Bonne Nouvelle de Jésus-Christ comme recommandé dans l'évangile de Mathieu 28.19-20,</li>
                  <li>Promouvoir la paix et la cohabitation pacifique entre différentes tribus de l'EST du pays et avec les pays voisins,</li>
                  <li>Réconcilier les familles et couples séparés, instruire la communauté sur les différentes thématiques comme le développement, la santé, l'agriculture, l'élevage et l'art culinaire, etc.</li>
                  <li>Bénir et divertir le peuple de Dieu à travers des Messages Bibliques, des Prédications et des Chansons.</li>
                </ul>
              </div>

              {/* Zone de couverture */}
              <div className="text-gray-600 dark:text-gray-300">
                <h2 className="text-2xl font-bold text-primary mb-4">Zone de couverture</h2>
                
                <h3 className="text-xl font-semibold text-primary mb-2">AU NORD-KIVU :</h3>
                <p className="mb-2">La Radio Sauti ya Injili est bien capté dans la plupart des territoires du Nord-Kivu, dont on peut citer :</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Territoire de Nyiragongo : dans son entièreté,</li>
                  <li>Territoire de Rutshuru : Rugari, Rubare, Katale, Tongo, etc…</li>
                  <li>Territoire de Masisi : Mubambiro, Sake, bihambwe, katale, Masisi centre, Ngesha, Nyabiondo,</li>
                  <li>Territoire de Lubero : Bulotwa, Kirumba-Kasando, Kipese, Kamandi, Kaseghe, Lubango, Kagheri, Lukanga,…</li>
                  <li>Territoire de Beni précisément à Mutwanga</li>
                  <li>Territoire de Walikale précisément à Waloa-Luanda, groupement Luberiki : Kashebere, Kibati, Mikumbi, Mungazi, Ishunga,…</li>
                  <li>Ville de Goma : On est également suivi fidèlement dans les 18 quartiers de la ville de Goma : Mabanga-Sud, Mabanga-Nord, Katoyi, Les Volcans, Himbi, Mikeno, Mapendo, Bujovu, Kahembe, Murara, Virunga, Majengo, Katindo, Kasika, Kyeshero, Ndosho, Mugunga et Lac-Vert.</li>
                </ul>

                <h3 className="text-xl font-semibold text-primary mb-2">AU SUD-KIVU :</h3>
                <p className="mb-2">Dans la Province du Sud-Kivu, la RSI est très écoutée fidèlement dans la plupart de ses territoires et d'autres endroits où les auditeurs, par le souci de nous suivre, sont obligés d'escalader des montagnes. Voici les territoires où elle est écoutée :</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Territoire de KALEHE : dans les localités suivantes: Minova, Muchibwe, Nyamukubi, Kitembo, Kazimba, Vahe, Buhumba, Kigoma, Kagarama, Kisinje, Chandoto, Kabuye Bwisha, Buhati, Kalungu, Sanje, Numbi, Nyakalende, Mubiri, Makengele,Kinyezire, Karango, Nyamubingwa, Nyamasasa, Busheku, Mukwija, Nyabibwe, Buzi-Bulenga, Lushebere, Shofi, Kasheke, Ibanda, Mukaba, Kirali, chihombehembe, Bulambika, Bitale, Ziralo, Nyanda, Chowero, Chambombo, chabondo, Bumbi, Chongero, etc….</li>
                  <li>Territoire de KABARE : Dans les localités suivantes : Kabare-centre, Kabamba, Lemera, Mubingu, Kachuchu, Katana-centre, ISRSAC- Lwiro, Kayandja, Fomulac, Birava,  Mulashe, Miti, Kalonge, Kabisi, Murhesa, Mudaka, Kashunguri, Luhihi, Mugererebo, Mushweshe, Mumosho, Mbombero etc…</li>
                  <li>Territoire D'IDJWI : Dans les deux iles, à savoir, Idwi-Nord et Idjwi-Sud</li>
                  <li>Territoire WALUNGU : Dans les localités : Walungu-Centre, Ngweshe, Nyangezi, Luwindja, Kaziba, Buhamba, etc…</li>
                  <li>Territoire de FIZI : Fizi-centre, Baraka, Mboko, Milembwe…</li>
                  <li>Territoire ou ville d'UVIRA : Dans les localités de : Lemera, Luvungi, Sange, Mulongwe, Kamanyola, Ngomo…</li>
                  <li>Territoire ou Ville de BUKAVU : Commune de Bagira, de Kadutu : Kharale, et d'Ibanda-Panzi,</li>
                  <li>Et dans le territoire de SHABUNDA.</li>
                </ul>

                <h3 className="text-xl font-semibold text-primary mb-2">PAYS LIMITROPHES :</h3>
                <p className="mb-2">Dans les pays voisins de la RDC, la Radio Sauti ya Injili est fidèlement écoutée sur FM</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Au RWANDA : District de Rubavu (Ville de Gisenyi), District de Kalonge (Ville de Kibuye), District de RUZIZI (Ville de Cyangugu).</li>
                  <li>Au BURUNDI : dans le Bujumbura-Rural</li>
                  <li>En UGANDA : à KISORO et Entebe</li>
                </ul>

                <h3 className="text-xl font-semibold text-primary mb-2">DANS LE MONDE :</h3>
                <p className="mb-4">Nous sommes également suivi partout au Monde à travers notre site web : <a href="http://www.rsirdc.org" className="text-blue-600 dark:text-blue-400 hover:underline">www.rsirdc.org</a>, Certains auditeurs nous appellent : Du Canada, Allemagne, Belgique, Londre, Nairobi-Kenya, Darsalam-Tanzanie, etc…</p>
              </div>

              {/* Langues de diffusion */}
              <div className="text-gray-600 dark:text-gray-300">
                <h2 className="text-2xl font-bold text-primary mb-4">Langues de diffusion</h2>
                <p className="mb-2">La station RSI diffuse ses émissions en 15 langues à savoir :</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Trois internationales : Anglais, Français et Swahili ;</li>
                  <li>Douze (12) langues locales, à savoir : Mashi, Kihavu, Kitembo, Kihunde, Kinande, Lingala, Kinyarwanda, Kinyanga, Kibembe, Kilega, Kinyindu et Kifulero.</li>
                </ul>
              </div>

              {/* Services et activités */}
              <div className="text-gray-600 dark:text-gray-300">
                <h2 className="text-2xl font-bold text-primary mb-4">Services et activités de la RSI</h2>
                <h3 className="text-xl font-semibold text-primary mb-2">a. Services :</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>Diffusion des enseignements bibliques et prédications ;</li>
                  <li>Diffusion des programmes éducatifs et émissions de sensibilisation en faveur de la communauté locale, régionale;</li>
                  <li>Promotion des œuvres Gospel des artistes solo et des chorales.</li>
                  <li>Promotion médiatique des activités entrepreneuriales de développement.</li>
                  <li>Facilitations de la communication entre membres de la communauté.</li>
                </ul>
                <h3 className="text-xl font-semibold text-primary mb-2">b. Activités :</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>Production des contenus médiatiques via nos studios de production comme des magazines, microprogrammes, des sketchs, des messages de sensibilisation, des Débats publics interactifs, des Interviews;</li>
                  <li>Diffusion en direct (Live) de vos cérémonies, grands événements et activités de sensibilisation: cultes chrétiens, rencontres, conférences chrétiennes, etc. :</li>
                  <li>Organisation des Campagnes d'Evangélisation en collaboration avec les Eglises chrétiennes amies de la région ;</li>
                  <li>Encadrement des couples,</li>
                  <li>Promotion et diffusion des activités de paix, de cohabitation sociale, de réconciliation et d'amour,</li>
                  <li>Cultes d'action de grâce occasionnelles</li>
                  <li>Affermissement des âmes.</li>
                </ul>
              </div>

              {/* Partenaires */}
              <div className="text-gray-600 dark:text-gray-300">
                <h2 className="text-2xl font-bold text-primary mb-4">Des partenaires de la RSI</h2>
                <ul className="list-disc pl-6 mb-4">
                  <li>Le Gouvernement de la RDC via ses institutions et ses services techniques,</li>
                  <li>Les Eglises amies,</li>
                  <li>CORACON (Collectif des Radios et Télévisions Communautaires du Nord Kivu): en renforcement des capacités des Journalistes et en dotation des matériels de production ;</li>
                  <li>REMED (Réseau des Médias pour le Développement) : en renforcement des capacités des Journalistes et en dotation des matériels de production ;</li>
                  <li>UNPC Nord Kivu (Union Nationale de la Presse du Congo au Nord Kivu): en renforcement des capacités des Journalistes ;</li>
                  <li>RATECO (Réseau des Radio Télévisions Communautaires de l'Est de la RD Congo)</li>
                  <li>BAKITA/Tanzania (Baraza la Kiswahili la Taifa) et BAKIZA/Zanzibar (Baraza la Kiswahili la Zanzibar) : en production des émissions Swahili Sanifu.</li>
                </ul>
              </div>

              {/* Collaboration */}
              <div className="text-gray-600 dark:text-gray-300">
                <h2 className="text-2xl font-bold text-primary mb-4">La collaboration de la RSI avec d'autres Radios</h2>
                <p className="mb-2">La RSI collabore avec d'autres radios, surtout les radios chrétiennes, à travers le monde en diffusant gratuitement leurs émissions sur les antennes il s'agit :</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>La RTNC Kinshasa : chaîne officielle du gouvernement de la RDC</li>
                  <li>Radio La Voix de l'Evangile/France</li>
                  <li>Vivre la vérité/Roger Cook London</li>
                  <li>Mungu kwanza Online Radio de Tanzanie</li>
                  <li>Redio Sauti ya Injili Moshi/Kilimanjaro en Tanzanie.</li>
                  <li>Radio Evangélique BULUMBI de BUTEMBO</li>
                </ul>
              </div>

              {/* Réalisations */}
              <div className="text-gray-600 dark:text-gray-300">
                <h2 className="text-2xl font-bold text-primary mb-4">Réalisations de l'installation</h2>
                <p className="mb-2">Plusieurs réalisations sont l'œuvre de la RSI depuis son existence en 2005, nous pouvons retenir ce qui suit :</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Production et diffusion quotidienne des émissions bibliques, des prédications et des témoignages de bénédiction ;</li>
                  <li>Diffusion des programmes éducatifs et enseignements bibliques en langues locales pour atteindre le public ;</li>
                  <li>Partenariat avec les Eglises chrétiennes membres de l'Eglise du Christ au Congo et autres dénominations évangéliques;</li>
                  <li>Organisation des campagnes et séminaires d'évangélisation et de prière ;</li>
                  <li>Diffusion des émissions de sensibilisation sur la paix, la santé, l'éducation civique, les droits de l'homme ;</li>
                  <li>Création du Site Web de la radio pour écouter en ligne et une chaine YouTube pour suivre les émissions en différé;</li>
                  <li>Organisation des ateliers de formation en journalisme et communication sociale avec et pour les membres des clubs d'écoute et animateurs d'émissions éducatives et bibliques ;</li>
                  <li>Création des clubs d'écoute ou radio-clubs autour des valeurs chrétiennes à travers la région.</li>
                </ul>
              </div>

              {/* Diplômes de mérite */}
              <div className="text-gray-600 dark:text-gray-300">
                <h2 className="text-2xl font-bold text-primary mb-4">Relations avec les organisations (Nos Diplômes de mérite)</h2>
                <p className="mb-2">Depuis 2010, la Radio Sauti ya Injili a déjà reçu les Diplômes de mérite ci-après :</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Diplôme d'Excellence No.074 délivré le 04/07/2010 par Vision BSD/Barza de réconciliation pour le soutien aux actions du Président.</li>
                  <li>Prix Nyiragongo Press Awards délivré à Goma le 22 juillet 2017 par L'Union Congolaise de la presse du Congo (UNPC Nord Kivu) pour avoir assuré les conditions de travail acceptables aux journalistes de la RSI.</li>
                  <li>Certificat d'assuidité délivré à Goma le 05 juin 2019 par Mercy Corps RDC/USAID /BCC IMAGINE pour avoir démontré l'engagement et le dévouement à la promotion des partiques essentielles d'hygiène pour le changement des comportements.</li>
                  <li>Diplôme de mérite Réf.NoCSAC/CP/004/05/2021 délivré à Goma le 01 mai 2021 par le Conseil Supérieur de l'Audiovisuel et de la Communication pour l'éducation morale, promotion de la foi et rapprochement des Communautés et la formation des jeunes.</li>
                  <li>Certificat d'appréciation délivré à Goma le 01 mai 2022 par la Fondation Les Uns Gospel pour ses contributions aux conciles des couples, des Veuves et des jeunes.</li>
                </ul>
              </div>

              {/* Besoins */}
              <div className="text-gray-600 dark:text-gray-300">
                <h2 className="text-2xl font-bold text-primary mb-4">Etat des besoins actuels</h2>
                <p className="mb-2">La RSI ne cesse de présenter ses principaux besoins pour un meilleur avancement. Il s'agit de :</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Disposer d'une station de Télévision ;</li>
                  <li>Construction d'un bâtiment en étages pour abriter les studios modernes et les bureaux administratifs ;</li>
                  <li>Mixeurs numériques pour le studio de diffusion et de studio de production Radio et Télévision.</li>
                  <li>Émetteur Fm de 2000 watts de réserve pouvant secourir en cas de panne</li>
                  <li>Véhicules dont une jeep Land cruiser 4×4 pour les campagnes d'évangélisation, les visites pastorales, la recherche des informations et une autre jeep pour les courses des services administratifs.</li>
                  <li>Besoins en appuis financiers de toute personne de bonne volonté afin de répondre aux besoins de survie des agents et du fonctionnement de la radio.</li>
                </ul>
              </div>

              {/* Soutien */}
              <div className="text-gray-600 dark:text-gray-300">
                <h2 className="text-2xl font-bold text-primary mb-4">La demande de soutien</h2>
                <p className="mb-4">
                  Afin d'améliorer et pérenniser ses services, la RSI invite toutes personnes de bonne volonté d'apporter sa contribution : 
                  Financière, Matérielle, Technique, Morale et Spirituelle.
                </p>
              </div>

              {/* Audit interne */}
              <div className="text-gray-600 dark:text-gray-300">
                <h2 className="text-2xl font-bold text-primary mb-4">Audit interne</h2>
                <ul className="list-disc pl-6 mb-4">
                  <li>Présidente : Madame KIVALYA DEKILA</li>
                  <li>Vice-Président : Ir KAMBALE BALIKWISHA Frédéric</li>
                  <li>Secrétaire : Pasteur KABUYAYA KABANDA</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
