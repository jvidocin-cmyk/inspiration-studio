import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marie Lefèvre",
    role: "Consultante RH",
    company: "ML Conseil",
    text: "Sky Lounge a transformé ma façon de travailler. Les bureaux privés sont parfaits pour mes rendez-vous clients et la flexibilité des formules est idéale pour mon activité.",
    rating: 5
  },
  {
    name: "Jean-Paul Sanchez",
    role: "Dirigeant",
    company: "Tech Solutions",
    text: "Nous avons installé notre siège social dans un des locaux commerciaux. L'emplacement, les équipements et le professionnalisme de l'équipe Sky Lounge sont remarquables.",
    rating: 5
  },
  {
    name: "Karine Dubois",
    role: "Formatrice",
    company: "Formation Pro",
    text: "La salle de réunion équipée est parfaite pour mes formations. Matériel au top, espace modulable et parking pratique. Mes participants apprécient énormément.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <Badge variant="outline" className="mb-2">Témoignages</Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            Ils travaillent avec Sky Lounge
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez les retours de nos clients qui ont choisi nos espaces pour développer leur activité professionnelle
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-none shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 space-y-6">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <div className="text-4xl text-primary opacity-20">"</div>
                <p className="text-muted-foreground italic leading-relaxed -mt-4">
                  {testimonial.text}
                </p>

                {/* Author */}
                <div className="border-t pt-6 space-y-1">
                  <div className="font-semibold text-lg">{testimonial.name}</div>
                  <div className="text-sm text-primary font-medium">{testimonial.role}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
