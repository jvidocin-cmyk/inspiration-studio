import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CommercialContactSheet from "@/components/contact/CommercialContactSheet";
import {
  Building2,
  Wifi,
  Snowflake,
  Car,
  Coffee,
  Monitor,
  Clock,
  MapPin,
  Check,
  Shield,
  Users,
  Zap,
} from "lucide-react";

const BureauPrive = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Simulated ACF data
  const offerData = {
    titre_offre: "Bureau Privé",
    sous_titre: "Votre espace de travail dédié et confidentiel",
    image_hero: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    description_offre:
      "Profitez d'un bureau privé entièrement équipé dans un environnement professionnel moderne. Idéal pour les entrepreneurs, consultants et équipes souhaitant un espace dédié sans les contraintes d'un bail commercial traditionnel.",
    immeuble_associe: {
      nom: "Sky Lounge Jarry",
      adresse: "Zone Industrielle de Jarry, Baie-Mahault",
      points_cles: ["Parking sécurisé", "Accès 24/7", "Fibre optique"],
    },
    image_secondaire_1: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
    image_secondaire_2: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    image_secondaire_3: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    prix_demi_journee: "45€",
    prix_journee: "80€",
    prix_semaine: "350€",
    prix_mois: "1200€",
    equipements: [
      { icon: Wifi, label: "Fibre optique ultra-rapide" },
      { icon: Snowflake, label: "Climatisation" },
      { icon: Coffee, label: "Accès cuisine équipée" },
      { icon: Car, label: "Parking gratuit" },
      { icon: Monitor, label: "Écran supplémentaire sur demande" },
      { icon: Shield, label: "Accès sécurisé 24/7" },
    ],
  };

  const advantages = [
    {
      icon: Clock,
      title: "Flexibilité totale",
      description:
        "Réservez à la demi-journée, journée, semaine ou mois selon vos besoins",
    },
    {
      icon: MapPin,
      title: "Emplacement stratégique",
      description: "Zone Jarry, accessibilité optimale et cadre professionnel",
    },
    {
      icon: Zap,
      title: "Services inclus",
      description: "Wifi, électricité, climatisation, parking et accès cuisine",
    },
    {
      icon: Users,
      title: "Environnement moderne",
      description: "Immeuble récent avec espaces communs élégants et fonctionnels",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${offerData.image_hero})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-sky-navy/80 via-sky-navy/70 to-sky-navy/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-sky-blue/20 text-sky-blue border-sky-blue/30 backdrop-blur-sm">
            <Building2 className="w-4 h-4 mr-2" />
            {offerData.immeuble_associe.nom}
          </Badge>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            {offerData.titre_offre}
          </h1>

          <p className="text-xl md:text-2xl text-sky-blue/90 mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:100ms]">
            {offerData.sous_titre}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:200ms]">
            <Button
              size="lg"
              className="bg-sky-blue hover:bg-sky-blue/90 text-white shadow-glow"
              onClick={() => window.open("https://cal.com", "_blank")}
            >
              Réserver maintenant
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 backdrop-blur-sm"
              onClick={() => setIsContactOpen(true)}
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                À propos de cet espace
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {offerData.description_offre}
              </p>
              <ul className="space-y-3">
                {[
                  "Bureau entièrement meublé et équipé",
                  "Confidentialité et tranquillité garanties",
                  "Connexion internet ultra-rapide",
                  "Accès aux espaces communs",
                  "Sans engagement longue durée",
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-sky-blue mt-1 flex-shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={offerData.image_secondaire_1}
                alt="Bureau privé"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Galerie photos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              offerData.image_secondaire_1,
              offerData.image_secondaire_2,
              offerData.image_secondaire_3,
            ].map((img, idx) => (
              <div
                key={idx}
                className="relative h-[300px] rounded-xl overflow-hidden shadow-medium hover:shadow-strong transition-shadow cursor-pointer group"
                onClick={() => setLightboxImage(img)}
              >
                <img
                  src={img}
                  alt={`Photo ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Tarifs</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Choisissez la formule qui correspond à vos besoins. Tous les tarifs incluent
            l'accès aux équipements et services.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                duration: "Demi-journée",
                price: offerData.prix_demi_journee,
                desc: "4 heures",
              },
              { duration: "Journée", price: offerData.prix_journee, desc: "8 heures" },
              {
                duration: "Semaine",
                price: offerData.prix_semaine,
                desc: "7 jours",
                popular: true,
              },
              { duration: "Mois", price: offerData.prix_mois, desc: "30 jours" },
            ].map((plan, idx) => (
              <Card
                key={idx}
                className={`p-6 text-center relative ${
                  plan.popular
                    ? "border-sky-blue shadow-glow"
                    : "border-border hover:border-sky-blue/50"
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-blue text-white">
                    Populaire
                  </Badge>
                )}
                <h3 className="text-xl font-semibold mb-2">{plan.duration}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.desc}</p>
                <div className="text-4xl font-bold text-sky-blue mb-4">{plan.price}</div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-sky-blue hover:bg-sky-blue/90 shadow-glow"
              onClick={() => window.open("https://cal.com", "_blank")}
            >
              Réserver un créneau
            </Button>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Équipements inclus</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Tout ce dont vous avez besoin pour travailler dans les meilleures conditions
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {offerData.equipements.map((equip, idx) => (
              <Card
                key={idx}
                className="p-6 text-center hover:shadow-medium transition-shadow group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sky-blue/10 flex items-center justify-center group-hover:bg-sky-blue/20 transition-colors">
                  <equip.icon className="w-8 h-8 text-sky-blue" />
                </div>
                <h3 className="font-semibold">{equip.label}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Building Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 max-w-4xl mx-auto border-sky-blue/30 shadow-elegant">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-sky-blue/20 text-sky-blue">Immeuble</Badge>
              <h2 className="text-3xl font-bold mb-2">
                Situé dans : {offerData.immeuble_associe.nom}
              </h2>
              <p className="text-muted-foreground flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4" />
                {offerData.immeuble_associe.adresse}
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {offerData.immeuble_associe.points_cles.map((point, idx) => (
                <div key={idx} className="flex items-center gap-2 justify-center">
                  <Check className="w-5 h-5 text-sky-blue" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" className="border-sky-blue text-sky-blue">
                Voir la page de l'immeuble
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Pourquoi choisir cet espace ?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Des avantages pensés pour votre réussite professionnelle
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {advantages.map((adv, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-medium transition-all">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                  <adv.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{adv.title}</h3>
                <p className="text-muted-foreground text-sm">{adv.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent)]" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à commencer ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Réservez votre bureau privé dès aujourd'hui et profitez d'un espace de travail
            professionnel et flexible.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-sky-navy hover:bg-white/90 shadow-strong"
              onClick={() => window.open("https://cal.com", "_blank")}
            >
              Réserver maintenant
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => setIsContactOpen(true)}
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Contact Sheet */}
      <CommercialContactSheet
        open={isContactOpen}
        onOpenChange={setIsContactOpen}
        defaultMessage="Je souhaite obtenir plus d'informations sur le bureau privé."
      />

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <img
            src={lightboxImage}
            alt="Agrandissement"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default BureauPrive;
