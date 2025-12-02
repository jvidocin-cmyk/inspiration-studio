import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Shield, Database, Lock, Eye, UserCheck, Mail } from "lucide-react";

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Shield className="inline h-4 w-4 mr-2" />
              Protection des données
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Politique de Confidentialité
            </h1>
            <p className="text-lg text-muted-foreground">
              Nous prenons la protection de vos données personnelles très au sérieux.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Introduction */}
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <p className="text-muted-foreground leading-relaxed">
                La présente politique de confidentialité décrit comment Sky Lounge collecte, utilise 
                et protège les informations que vous nous fournissez lorsque vous utilisez notre site 
                web et nos services. Cette politique est conforme au Règlement Général sur la Protection 
                des Données (RGPD) et à la loi Informatique et Libertés.
              </p>
            </div>

            {/* Données collectées */}
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Database className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Données collectées</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nous collectons les informations suivantes lorsque vous utilisez nos services :
              </p>
              <ul className="text-muted-foreground space-y-3">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Données d'identification :</strong> nom, prénom, adresse email, numéro de téléphone</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Données professionnelles :</strong> nom de l'entreprise, fonction, secteur d'activité</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Données de réservation :</strong> dates, espaces réservés, préférences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées</span>
                </li>
              </ul>
            </div>

            {/* Utilisation des données */}
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Utilisation des données</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vos données personnelles sont utilisées pour :
              </p>
              <ul className="text-muted-foreground space-y-3">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Traiter et gérer vos réservations d'espaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Vous envoyer des confirmations et rappels de réservation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Répondre à vos demandes de contact et de renseignements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Vous informer de nos offres et actualités (avec votre consentement)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Améliorer nos services et votre expérience utilisateur</span>
                </li>
              </ul>
            </div>

            {/* Sécurité */}
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Sécurité des données</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées 
                pour protéger vos données personnelles contre tout accès non autorisé, modification, 
                divulgation ou destruction.
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Connexion sécurisée HTTPS sur l'ensemble du site</li>
                <li>• Stockage des données sur des serveurs sécurisés</li>
                <li>• Accès restreint aux données personnelles</li>
                <li>• Formation du personnel à la protection des données</li>
              </ul>
            </div>

            {/* Vos droits */}
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <UserCheck className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Vos droits</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Droit d'accès", desc: "Obtenir une copie de vos données" },
                  { title: "Droit de rectification", desc: "Corriger des données inexactes" },
                  { title: "Droit à l'effacement", desc: "Demander la suppression de vos données" },
                  { title: "Droit à la portabilité", desc: "Récupérer vos données dans un format lisible" },
                  { title: "Droit d'opposition", desc: "Vous opposer au traitement de vos données" },
                  { title: "Droit de limitation", desc: "Limiter le traitement de vos données" },
                ].map((right, index) => (
                  <div key={index} className="bg-secondary/30 p-4 rounded-lg">
                    <p className="font-medium text-foreground">{right.title}</p>
                    <p className="text-sm text-muted-foreground">{right.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cookies */}
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <h2 className="text-2xl font-bold text-foreground mb-4">Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Notre site utilise des cookies pour améliorer votre expérience de navigation. 
                Les cookies sont de petits fichiers stockés sur votre appareil.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nous utilisons des cookies essentiels pour le fonctionnement du site et des cookies 
                analytiques pour comprendre comment vous utilisez notre site. Vous pouvez gérer 
                vos préférences de cookies via les paramètres de votre navigateur.
              </p>
            </div>

            {/* Contact DPO */}
            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Contact</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Pour exercer vos droits ou pour toute question relative à la protection 
                de vos données personnelles, vous pouvez nous contacter :
              </p>
              <p className="text-muted-foreground">
                <strong>Email :</strong> dpo@skylounge.gp<br />
                <strong>Courrier :</strong> Sky Lounge - DPO<br />
                Zone Industrielle de Jarry<br />
                97122 Baie-Mahault, Guadeloupe
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;
