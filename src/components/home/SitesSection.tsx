import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Building2, Car } from "lucide-react";
import { Link } from "react-router-dom";

const sites = [
  {
    id: 1,
    name: "Sky Lounge Baie-Mahault",
    location: "Baie-Mahault",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    surface: "2 500 m²",
    spaces: "30+ espaces",
    parking: "80 places",
    description: "Immeuble moderne au cœur de la zone commerciale, idéal pour les entreprises en croissance.",
  },
  {
    id: 2,
    name: "Sky Lounge Petit-Bourg",
    location: "Petit-Bourg",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    surface: "1 800 m²",
    spaces: "25+ espaces",
    parking: "50 places",
    description: "Environnement calme et verdoyant, parfait pour la concentration et la productivité.",
  },
];

const SitesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">Découvrez nos implantations</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deux sites stratégiques en Guadeloupe pour répondre à tous vos besoins professionnels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {sites.map((site, index) => (
            <Card 
              key={site.id} 
              className="overflow-hidden group hover:shadow-strong transition-all duration-300 hover:-translate-y-1 animate-fade-in-up border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={site.image} 
                  alt={site.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-navy/90 via-sky-navy/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-blue/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4 border border-sky-blue/30">
                    <MapPin className="h-4 w-4" />
                    {site.location}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{site.name}</h3>
                </div>
              </div>

              <CardContent className="p-8 space-y-6">
                <p className="text-muted-foreground leading-relaxed">{site.description}</p>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <Building2 className="h-6 w-6 text-sky-blue mx-auto mb-2" />
                    <div className="text-lg font-bold text-foreground">{site.surface}</div>
                    <div className="text-xs text-muted-foreground">Surface</div>
                  </div>
                  <div className="text-center">
                    <Building2 className="h-6 w-6 text-sky-blue mx-auto mb-2" />
                    <div className="text-lg font-bold text-foreground">{site.spaces}</div>
                    <div className="text-xs text-muted-foreground">Espaces</div>
                  </div>
                  <div className="text-center">
                    <Car className="h-6 w-6 text-sky-blue mx-auto mb-2" />
                    <div className="text-lg font-bold text-foreground">{site.parking}</div>
                    <div className="text-xs text-muted-foreground">Parking</div>
                  </div>
                </div>

                <Button asChild className="w-full bg-sky-blue hover:bg-sky-blue/90 shadow-glow">
                  <Link to="/sites">
                    Découvrir ce site
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="border-sky-blue text-sky-blue hover:bg-sky-blue/10">
            <Link to="/sites">
              Voir tous nos sites
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SitesSection;
