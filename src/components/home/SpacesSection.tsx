import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Presentation, Store } from "lucide-react";
import { Link } from "react-router-dom";

const spaceTypes = [
  {
    icon: Briefcase,
    title: "Bureaux Privés",
    description: "Location courte durée à partir de 45€",
    features: ["Demi-journée", "Journée", "Semaine"],
    color: "text-sky-navy",
  },
  {
    icon: Presentation,
    title: "Salles de Réunion",
    description: "Équipées pour vos présentations",
    features: ["Écran 4K", "Visioconférence", "À partir de 60€"],
    color: "text-sky-blue",
  },
  {
    icon: Store,
    title: "Baux Commerciaux",
    description: "Locaux long terme avec vitrine",
    features: ["Visibilité maximale", "Parking client", "Sur devis"],
    color: "text-sky-navy",
  },
];

const SpacesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Des espaces pour chaque besoin
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Du bureau individuel au local commercial, trouvez l'espace qui correspond à votre activité
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {spaceTypes.map((space, index) => {
            const Icon = space.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className={`inline-flex p-3 rounded-lg bg-muted ${space.color}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold">{space.title}</h3>
                  <p className="text-muted-foreground text-sm">{space.description}</p>

                  <ul className="space-y-2 pt-4 border-t">
                    {space.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link to="/espaces">
              Voir tous les espaces disponibles
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpacesSection;
