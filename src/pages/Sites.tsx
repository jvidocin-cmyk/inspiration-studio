import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Building2, Car, Wifi, Coffee, Shield } from "lucide-react";

const sites = [
  {
    id: 1,
    name: "Sky Lounge Baie-Mahault",
    location: "Zone Commerciale Jarry, Baie-Mahault 97122",
    phone: "+590 5 90 XX XX XX",
    email: "baiemahault@skylounge.gp",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    surface: "2 500 m²",
    spaces: "30+ espaces",
    parking: "80 places",
    description: "Situé au cœur de la plus grande zone commerciale de Guadeloupe, notre site de Baie-Mahault offre une accessibilité exceptionnelle et une visibilité optimale pour votre entreprise.",
    amenities: [
      { icon: Building2, label: "Espaces modulables" },
      { icon: Car, label: "Parking sécurisé" },
      { icon: Wifi, label: "Fibre optique 1Gb/s" },
      { icon: Coffee, label: "Espace détente" },
      { icon: Shield, label: "Sécurité 24/7" },
    ],
  },
  {
    id: 2,
    name: "Sky Lounge Petit-Bourg",
    location: "Centre-ville, Petit-Bourg 97170",
    phone: "+590 5 90 YY YY YY",
    email: "petitbourg@skylounge.gp",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    surface: "1 800 m²",
    spaces: "25+ espaces",
    parking: "50 places",
    description: "Dans un environnement plus calme et verdoyant, notre site de Petit-Bourg est idéal pour les entreprises recherchant un cadre propice à la concentration et à la créativité.",
    amenities: [
      { icon: Building2, label: "Espaces lumineux" },
      { icon: Car, label: "Parking gratuit" },
      { icon: Wifi, label: "Connexion haute vitesse" },
      { icon: Coffee, label: "Cafétéria" },
      { icon: Shield, label: "Accès sécurisé" },
    ],
  },
];

const Sites = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold">Nos Sites</h1>
            <p className="text-xl opacity-90">
              Deux implantations stratégiques pour servir toute la Guadeloupe
            </p>
          </div>
        </div>
      </section>

      {/* Sites Details */}
      <section className="py-20">
        <div className="container mx-auto px-4 space-y-20">
          {sites.map((site, index) => (
            <div 
              key={site.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center animate-fade-in-up`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-large group">
                  <img 
                    src={site.image} 
                    alt={site.name}
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-primary">
                      <MapPin className="h-4 w-4" />
                      {site.location.split(',')[1].trim()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="text-4xl font-bold">{site.name}</h2>
                <p className="text-lg text-muted-foreground">{site.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 py-6">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-primary">{site.surface}</div>
                      <div className="text-sm text-muted-foreground">Surface totale</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-primary">{site.spaces}</div>
                      <div className="text-sm text-muted-foreground">Espaces</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-primary">{site.parking}</div>
                      <div className="text-sm text-muted-foreground">Parking</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Amenities */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Équipements & Services</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {site.amenities.map((amenity, idx) => {
                      const Icon = amenity.icon;
                      return (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                          <Icon className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm font-medium">{amenity.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 pt-4 border-t">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>{site.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>{site.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>{site.email}</span>
                  </div>
                </div>

                <Button size="lg" className="w-full sm:w-auto">
                  Planifier une visite
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sites;
