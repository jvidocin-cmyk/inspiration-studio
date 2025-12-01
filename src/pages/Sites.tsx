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
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-sky-navy/80 via-sky-navy/70 to-sky-navy/85" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Nos Sites
          </h1>
          <p className="text-xl md:text-2xl text-sky-blue/90 max-w-3xl mx-auto animate-fade-in [animation-delay:100ms]">
            Deux implantations stratégiques en Guadeloupe pour accompagner votre réussite professionnelle
          </p>
        </div>
      </section>

      {/* Sites Details */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 space-y-32">
          {sites.map((site, index) => (
            <div 
              key={site.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-elegant group">
                  <img 
                    src={site.image} 
                    alt={site.name}
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-navy/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-sky-blue/20 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-sky-blue/30">
                      <MapPin className="h-4 w-4" />
                      {site.location.split(',')[1].trim()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">{site.name}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{site.description}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  <Card className="border-sky-blue/30">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-sky-blue mb-1">{site.surface}</div>
                      <div className="text-sm text-muted-foreground font-medium">Surface totale</div>
                    </CardContent>
                  </Card>
                  <Card className="border-sky-blue/30">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-sky-blue mb-1">{site.spaces}</div>
                      <div className="text-sm text-muted-foreground font-medium">Espaces</div>
                    </CardContent>
                  </Card>
                  <Card className="border-sky-blue/30">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-sky-blue mb-1">{site.parking}</div>
                      <div className="text-sm text-muted-foreground font-medium">Parking</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Amenities */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-xl text-foreground">Équipements & Services</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {site.amenities.map((amenity, idx) => {
                      const Icon = amenity.icon;
                      return (
                        <div key={idx} className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors">
                          <div className="w-10 h-10 rounded-full bg-sky-blue/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="h-5 w-5 text-sky-blue" />
                          </div>
                          <span className="text-sm font-medium text-foreground">{amenity.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Contact Info */}
                <Card className="p-6 bg-muted/30 border-border/50">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="h-5 w-5 text-sky-blue flex-shrink-0" />
                      <span className="text-sm">{site.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Phone className="h-5 w-5 text-sky-blue flex-shrink-0" />
                      <span className="text-sm">{site.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Mail className="h-5 w-5 text-sky-blue flex-shrink-0" />
                      <span className="text-sm">{site.email}</span>
                    </div>
                  </div>
                </Card>

                <Button size="lg" className="w-full sm:w-auto bg-sky-blue hover:bg-sky-blue/90 shadow-glow px-8">
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
