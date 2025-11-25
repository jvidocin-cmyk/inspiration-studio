import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, Users, Presentation, Store, 
  Wifi, Coffee, Printer, Monitor, Zap, CheckCircle2 
} from "lucide-react";

const spaceCategories = [
  {
    icon: Briefcase,
    title: "Bureaux Privés",
    subtitle: "À partir de 350€/mois",
    description: "Espaces privatifs entièrement équipés pour votre entreprise",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    sizes: ["10-20 m²", "20-40 m²", "40-100 m²"],
    features: [
      "Climatisation réversible",
      "Fibre optique incluse",
      "Mobilier ergonomique",
      "Sécurité 24/7",
      "Salle de réunion partagée",
      "Cuisine équipée",
    ],
    color: "bg-sky-navy",
  },
  {
    icon: Users,
    title: "Espaces Coworking",
    subtitle: "À partir de 150€/mois",
    description: "Postes de travail flexibles dans un environnement dynamique",
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80",
    sizes: ["Poste fixe", "Poste nomade", "Forfait 5 jours"],
    features: [
      "Accès 24/7",
      "Wifi ultra-rapide",
      "Café et thé à volonté",
      "Événements networking",
      "Casiers sécurisés",
      "Domiciliation possible",
    ],
    color: "bg-sky-blue",
  },
  {
    icon: Presentation,
    title: "Salles de Réunion",
    subtitle: "À partir de 50€/heure",
    description: "Salles équipées pour vos réunions et présentations",
    image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&q=80",
    sizes: ["4-6 personnes", "8-12 personnes", "15-20 personnes"],
    features: [
      "Écran 4K 65 pouces",
      "Système visioconférence",
      "Tableau blanc interactif",
      "Wifi premium",
      "Climatisation",
      "Service café sur demande",
    ],
    color: "bg-sky-navy",
  },
  {
    icon: Store,
    title: "Locaux Commerciaux",
    subtitle: "Sur devis",
    description: "Espaces commerciaux avec vitrine sur rue",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    sizes: ["30-50 m²", "50-80 m²", "80-150 m²"],
    features: [
      "Visibilité maximale",
      "Parking client dédié",
      "Aménagement personnalisé",
      "Système d'alarme",
      "Accès PMR",
      "Horaires flexibles",
    ],
    color: "bg-sky-blue",
  },
];

const Espaces = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold">Espaces de Travail</h1>
            <p className="text-xl opacity-90">
              Des solutions adaptées à chaque professionnel, du freelance à l'entreprise établie
            </p>
          </div>
        </div>
      </section>

      {/* Spaces Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 space-y-24">
          {spaceCategories.map((category, index) => {
            const Icon = category.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center animate-fade-in-up`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-large group">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute top-4 left-4 ${category.color} text-white p-3 rounded-lg`}>
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <h2 className="text-4xl font-bold mb-2">{category.title}</h2>
                    <p className="text-2xl text-primary font-semibold">{category.subtitle}</p>
                  </div>

                  <p className="text-lg text-muted-foreground">{category.description}</p>

                  {/* Sizes */}
                  <div>
                    <h3 className="font-semibold mb-3">Tailles disponibles</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.sizes.map((size, idx) => (
                        <Badge key={idx} variant="secondary" className="px-4 py-2 text-sm">
                          {size}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="font-semibold mb-3">Inclus dans l'offre</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {category.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button size="lg">
                      Demander un devis
                    </Button>
                    <Button size="lg" variant="outline">
                      Planifier une visite
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-secondary text-white border-0">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Pas sûr de quel espace vous convient ?
              </h2>
              <p className="text-xl opacity-90">
                Nos conseillers sont là pour vous aider à trouver la solution idéale
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Contactez-nous
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
