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
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">Découvrez nos implantations</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deux sites stratégiques en Guadeloupe pour répondre à tous vos besoins professionnels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {sites.map((site, index) => (
            <Card 
              key={site.id} 
              className="overflow-hidden group hover:shadow-large transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={site.image} 
                  alt={site.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium">
                    <MapPin className="h-4 w-4 text-primary" />
                    {site.location}
                  </span>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">{site.name}</h3>
                <p className="text-muted-foreground">{site.description}</p>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm">
                    <Building2 className="h-5 w-5 text-primary" />
                    <span className="font-medium">{site.surface}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Building2 className="h-5 w-5 text-primary" />
                    <span className="font-medium">{site.spaces}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Car className="h-5 w-5 text-primary" />
                    <span className="font-medium">{site.parking}</span>
                  </div>
                </div>

                <Button asChild className="w-full mt-4">
                  <Link to="/sites">
                    Découvrir ce site
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SitesSection;
