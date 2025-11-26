import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Briefcase, Presentation, Building2, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const spaceOffers = [
  {
    icon: Briefcase,
    title: "Bureaux Privés",
    subtitle: "Location courte durée",
    description: "Espace de travail privatif équipé, prêt à l'emploi pour vos projets professionnels",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    pricing: {
      halfDay: "45€",
      fullDay: "80€",
      week: "350€"
    },
    features: [
      "Bureau équipé et mobilier ergonomique",
      "Connexion fibre optique ultra-rapide",
      "Climatisation et chauffage",
      "Accès cuisine et sanitaires",
      "Sécurité 24/7",
      "Parking disponible"
    ],
    color: "from-sky-navy to-sky-navy/90",
    bookingType: "bureau"
  },
  {
    icon: Presentation,
    title: "Salles de Réunion",
    subtitle: "Location courte durée",
    description: "Salle professionnelle équipée pour vos réunions, formations et présentations",
    image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&q=80",
    pricing: {
      halfDay: "60€",
      fullDay: "110€",
      week: "480€"
    },
    features: [
      "Écran 4K 65 pouces",
      "Système de visioconférence",
      "Tableau blanc interactif",
      "Wifi premium dédié",
      "Climatisation",
      "Service café disponible"
    ],
    color: "from-sky-blue to-sky-blue/90",
    bookingType: "salle"
  },
  {
    icon: Building2,
    title: "Baux Commerciaux",
    subtitle: "Location long terme",
    description: "Locaux commerciaux avec vitrine pour votre activité sur nos deux sites stratégiques",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    features: [
      "Emplacement premium en Guadeloupe",
      "Visibilité maximale sur rue",
      "Parking client dédié",
      "Aménagement personnalisable",
      "Système de sécurité",
      "Accès PMR conforme"
    ],
    color: "from-sky-navy to-sky-blue",
    contactOnly: true
  }
];

const Espaces = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold">Nos Espaces</h1>
            <p className="text-xl opacity-90">
              Réservez votre espace en quelques clics sur nos sites de Baie-Mahault et Petit-Bourg
            </p>
            <div className="flex items-center justify-center gap-2 text-sm opacity-80">
              <Clock className="h-5 w-5" />
              <span>Location à la demi-journée, journée ou semaine</span>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {spaceOffers.map((offer, index) => {
              const Icon = offer.icon;
              
              return (
                <Card 
                  key={index}
                  className="overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative h-[400px] md:h-auto">
                      <img 
                        src={offer.image} 
                        alt={offer.title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-20`} />
                      <div className="absolute top-6 left-6 bg-white p-3 rounded-lg shadow-medium">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>

                    {/* Content Section */}
                    <CardContent className="p-8 md:p-10 flex flex-col justify-between">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-3xl md:text-4xl font-bold mb-2">{offer.title}</h2>
                          <p className="text-lg text-primary font-semibold">{offer.subtitle}</p>
                        </div>

                        <p className="text-muted-foreground">{offer.description}</p>

                        {/* Pricing */}
                        {offer.pricing && (
                          <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                            <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                              Tarifs
                            </h3>
                            <div className="grid grid-cols-3 gap-4">
                              <div>
                                <div className="text-2xl font-bold text-primary">{offer.pricing.halfDay}</div>
                                <div className="text-xs text-muted-foreground">Demi-journée</div>
                              </div>
                              <div>
                                <div className="text-2xl font-bold text-primary">{offer.pricing.fullDay}</div>
                                <div className="text-xs text-muted-foreground">Journée</div>
                              </div>
                              <div>
                                <div className="text-2xl font-bold text-primary">{offer.pricing.week}</div>
                                <div className="text-xs text-muted-foreground">Semaine</div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Features */}
                        <div>
                          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
                            Inclus dans l'offre
                          </h3>
                          <div className="grid gap-3">
                            {offer.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-8 pt-6 border-t">
                        {offer.contactOnly ? (
                          <Button size="lg" className="w-full" asChild>
                            <Link to="/contact">
                              Demander des informations
                            </Link>
                          </Button>
                        ) : (
                          <Button size="lg" className="w-full" asChild>
                            <Link to={`/reserver?type=${offer.bookingType}`}>
                              Réserver maintenant
                            </Link>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-secondary text-white border-0">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Besoin d'informations complémentaires ?
              </h2>
              <p className="text-xl opacity-90">
                Notre équipe est disponible pour répondre à toutes vos questions sur nos espaces
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/contact">
                  Nous contacter
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Espaces;
