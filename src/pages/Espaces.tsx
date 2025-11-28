import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  Briefcase, 
  Presentation, 
  Wifi, 
  Shield, 
  Coffee,
  Snowflake,
  Car,
  Clock,
  MapPin,
  Zap,
  Users,
  Monitor,
  Calendar
} from "lucide-react";
import CommercialContactSheet from "@/components/contact/CommercialContactSheet";
import { useState } from "react";

const Espaces = () => {
  const [selectedOffer, setSelectedOffer] = useState<string>("");
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleContactClick = (offerType: string) => {
    setSelectedOffer(offerType);
    setIsContactOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section - Immersive */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80" 
            alt="Espace coworking moderne"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 pt-20">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm text-sm px-4 py-2">
              Coworking Premium en Guadeloupe
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Votre Espace Pro,
              <br />
              <span className="text-secondary-foreground">À Votre Rythme</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Bureaux privés et salles de réunion équipés dans des immeubles modernes. 
              Flexibilité totale : demi-journée, journée, semaine ou mois.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-large text-lg px-8 py-6"
                onClick={() => handleContactClick("Réservation générale")}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Réserver maintenant
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-6"
                onClick={() => {
                  const offersSection = document.getElementById('offres');
                  offersSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Découvrir les offres
              </Button>
            </div>

            {/* Quick Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-3xl mx-auto">
              {[
                { icon: MapPin, text: "2 Sites en Guadeloupe" },
                { icon: Clock, text: "Flexibilité totale" },
                { icon: Wifi, text: "Fibre optique" },
                { icon: Shield, text: "Accès sécurisé 24/7" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2 text-white">
                  <item.icon className="h-8 w-8 mb-1" />
                  <span className="text-sm font-medium text-center">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full" />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-6 mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold">
                Des Espaces Pensés Pour Vous
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Sky Lounge vous propose des espaces de travail et de réunion dans des immeubles 
                modernes et sécurisés, équipés de tout le nécessaire pour votre réussite professionnelle.
              </p>
            </div>

            {/* Key Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Installation Immédiate",
                  description: "Aucune préparation nécessaire. Arrivez et commencez à travailler dans un espace entièrement équipé."
                },
                {
                  icon: Users,
                  title: "Environnement Professionnel",
                  description: "Créez la bonne impression avec vos clients dans un cadre moderne et premium."
                },
                {
                  icon: Clock,
                  title: "Flexibilité Maximale",
                  description: "Louez pour quelques heures, une journée, une semaine ou un mois selon vos besoins."
                }
              ].map((benefit, idx) => (
                <Card 
                  key={idx} 
                  className="border-none shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section id="offres" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-20">
            
            {/* Bureau Privé */}
            <div className="animate-fade-in">
              <Card className="overflow-hidden border-none shadow-large">
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Images Gallery - 2 cols */}
                  <div className="lg:col-span-2 grid grid-cols-2 gap-2 p-2 bg-muted/50">
                    <div className="col-span-2 h-64 lg:h-80 relative overflow-hidden rounded-lg group">
                      <img 
                        src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80" 
                        alt="Bureau privé principal"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary text-white">
                          <Briefcase className="h-3 w-3 mr-1" />
                          Bureau Privé
                        </Badge>
                      </div>
                    </div>
                    <div className="h-32 lg:h-40 relative overflow-hidden rounded-lg group">
                      <img 
                        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&q=80" 
                        alt="Bureau privé vue 2"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="h-32 lg:h-40 relative overflow-hidden rounded-lg group">
                      <img 
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80" 
                        alt="Bureau privé vue 3"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* Content - 3 cols */}
                  <CardContent className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-between">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-3">Bureau Privé</h2>
                        <p className="text-xl text-primary font-semibold mb-4">Location courte durée flexible</p>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          Espace de travail privatif entièrement équipé et prêt à l'emploi. 
                          Idéal pour vos rendez-vous professionnels, sessions de travail concentré 
                          ou pour installer temporairement votre activité.
                        </p>
                      </div>

                      {/* Pricing Cards */}
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                          { duration: "Demi-journée", price: "45€", popular: false },
                          { duration: "Journée", price: "80€", popular: true },
                          { duration: "Semaine", price: "350€", popular: false },
                          { duration: "Mois", price: "Sur devis", popular: false }
                        ].map((pricing, idx) => (
                          <div 
                            key={idx}
                            className={`relative p-4 rounded-lg border-2 transition-all ${
                              pricing.popular 
                                ? 'border-primary bg-primary/5 shadow-soft' 
                                : 'border-border bg-background'
                            }`}
                          >
                            {pricing.popular && (
                              <Badge className="absolute -top-2 -right-2 bg-primary text-white text-xs">
                                Populaire
                              </Badge>
                            )}
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary mb-1">{pricing.price}</div>
                              <div className="text-xs text-muted-foreground">{pricing.duration}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Features */}
                      <div>
                        <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
                          Équipements Inclus
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {[
                            "Bureau équipé et mobilier ergonomique",
                            "Connexion fibre optique ultra-rapide",
                            "Climatisation et chauffage",
                            "Accès cuisine et sanitaires",
                            "Sécurité 24/7 et accès badge",
                            "Parking disponible sur site"
                          ].map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm leading-relaxed">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-8 pt-8 border-t flex flex-col sm:flex-row gap-4">
                      <Button 
                        size="lg" 
                        className="flex-1 text-base"
                        onClick={() => handleContactClick("Bureau Privé")}
                      >
                        <Calendar className="mr-2 h-5 w-5" />
                        Réserver ce bureau
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline"
                        className="flex-1 text-base"
                        onClick={() => handleContactClick("Bureau Privé - Demande d'infos")}
                      >
                        Plus d'informations
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>

            {/* Salle de Réunion */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Card className="overflow-hidden border-none shadow-large">
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Content First on Mobile, Images First on Desktop */}
                  <CardContent className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-between order-2 lg:order-1">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-3">Salle de Réunion</h2>
                        <p className="text-xl text-secondary font-semibold mb-4">Location courte durée équipée</p>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          Salle professionnelle tout équipée pour vos réunions, formations, présentations 
                          ou visioconférences. Technologie moderne et confort optimal pour impressionner vos clients.
                        </p>
                      </div>

                      {/* Pricing Cards */}
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                          { duration: "Demi-journée", price: "60€", popular: false },
                          { duration: "Journée", price: "110€", popular: true },
                          { duration: "Semaine", price: "480€", popular: false },
                          { duration: "Mois", price: "Sur devis", popular: false }
                        ].map((pricing, idx) => (
                          <div 
                            key={idx}
                            className={`relative p-4 rounded-lg border-2 transition-all ${
                              pricing.popular 
                                ? 'border-secondary bg-secondary/5 shadow-soft' 
                                : 'border-border bg-background'
                            }`}
                          >
                            {pricing.popular && (
                              <Badge className="absolute -top-2 -right-2 bg-secondary text-white text-xs">
                                Populaire
                              </Badge>
                            )}
                            <div className="text-center">
                              <div className="text-2xl font-bold text-secondary mb-1">{pricing.price}</div>
                              <div className="text-xs text-muted-foreground">{pricing.duration}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Features */}
                      <div>
                        <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
                          Équipements Inclus
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {[
                            "Écran 4K 65 pouces haute définition",
                            "Système de visioconférence professionnel",
                            "Tableau blanc interactif",
                            "Wifi premium dédié ultra-rapide",
                            "Climatisation optimale",
                            "Service café et rafraîchissements"
                          ].map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                              <span className="text-sm leading-relaxed">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-8 pt-8 border-t flex flex-col sm:flex-row gap-4">
                      <Button 
                        size="lg" 
                        className="flex-1 text-base bg-secondary hover:bg-secondary/90"
                        onClick={() => handleContactClick("Salle de Réunion")}
                      >
                        <Calendar className="mr-2 h-5 w-5" />
                        Réserver cette salle
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline"
                        className="flex-1 text-base border-secondary text-secondary hover:bg-secondary/5"
                        onClick={() => handleContactClick("Salle de Réunion - Demande d'infos")}
                      >
                        Plus d'informations
                      </Button>
                    </div>
                  </CardContent>

                  {/* Images Gallery */}
                  <div className="lg:col-span-2 grid grid-cols-2 gap-2 p-2 bg-muted/50 order-1 lg:order-2">
                    <div className="col-span-2 h-64 lg:h-80 relative overflow-hidden rounded-lg group">
                      <img 
                        src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&q=80" 
                        alt="Salle de réunion principale"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-secondary text-white">
                          <Presentation className="h-3 w-3 mr-1" />
                          Salle de Réunion
                        </Badge>
                      </div>
                    </div>
                    <div className="h-32 lg:h-40 relative overflow-hidden rounded-lg group">
                      <img 
                        src="https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?w=400&q=80" 
                        alt="Salle de réunion vue 2"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="h-32 lg:h-40 relative overflow-hidden rounded-lg group">
                      <img 
                        src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=400&q=80" 
                        alt="Salle de réunion vue 3"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold">
                Tout Pour Votre Confort
              </h2>
              <p className="text-xl text-muted-foreground">
                Des équipements premium dans un environnement professionnel sécurisé
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Wifi,
                  title: "Fibre Optique",
                  description: "Connexion internet ultra-rapide et stable pour tous vos besoins professionnels"
                },
                {
                  icon: Shield,
                  title: "Sécurité 24/7",
                  description: "Accès sécurisé par badge, vidéosurveillance et système d'alarme"
                },
                {
                  icon: Snowflake,
                  title: "Climatisation",
                  description: "Température optimale toute l'année pour votre confort"
                },
                {
                  icon: Car,
                  title: "Parking Gratuit",
                  description: "Places de parking disponibles pour vous et vos clients"
                },
                {
                  icon: Coffee,
                  title: "Espace Détente",
                  description: "Cuisine équipée et espace café pour vos pauses"
                },
                {
                  icon: Monitor,
                  title: "Équipement Pro",
                  description: "Mobilier ergonomique et équipements de dernière génération"
                }
              ].map((advantage, idx) => (
                <Card 
                  key={idx}
                  className="border-none shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <advantage.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{advantage.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg border-white/20 shadow-large">
            <CardContent className="p-12 lg:p-16 text-center space-y-8">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white border-white/30 text-sm px-4 py-2">
                  Réservation Simple et Rapide
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Besoin d'un Espace Professionnel ?
                </h2>
                <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
                  Contactez-nous dès maintenant pour réserver votre bureau ou salle de réunion. 
                  Notre équipe vous répond rapidement pour organiser votre installation.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 shadow-large text-lg px-8 py-6"
                  onClick={() => handleContactClick("Demande de réservation")}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Réserver un créneau
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-6"
                  onClick={() => handleContactClick("Demande d'informations")}
                >
                  Nous contacter
                </Button>
              </div>

              <div className="pt-8 flex items-center justify-center gap-8 flex-wrap text-sm opacity-80">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Jarry & Petit-Bourg</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Réponse sous 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>Sans engagement</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />

      {/* Contact Sheet */}
      <CommercialContactSheet 
        open={isContactOpen}
        onOpenChange={setIsContactOpen}
        defaultMessage={selectedOffer ? `Je souhaite obtenir des informations concernant : ${selectedOffer}` : ""}
      />
    </div>
  );
};

export default Espaces;
