import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { commercialListings } from "@/data/commercial-listings";
import { Building2, Compass, Sparkles, Square, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  {
    icon: Building2,
    label: "Locaux disponibles",
    value: `${commercialListings.length}`,
  },
  {
    icon: Square,
    label: "Surface cumulée",
    value: "515 m²",
  },
  {
    icon: TrendingUp,
    label: "Loyers mensuels",
    value: "À partir de 2 450 € HT",
  },
  {
    icon: Compass,
    label: "Sites stratégiques",
    value: "Jarry, Petit-Bourg, Marina",
  },
];

const BauxCommerciaux = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=80&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="container mx-auto px-4 pt-32 pb-24 relative">
            <div className="max-w-3xl space-y-6 animate-fade-in-up">
              <Badge variant="secondary" className="uppercase tracking-[0.3em]">Baux commerciaux</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Des adresses ultra-visibles pour installer votre concept
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Sélection de locaux commerciaux premium en Guadeloupe, prêts à accueillir votre enseigne. Chaque espace combine emplacement stratégique, visibilité maximale et prestations haut de gamme pour accélérer votre implantation.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-white/10">Retail premium</Badge>
                <Badge className="bg-white/10">Livré clés en main</Badge>
                <Badge className="bg-white/10">Flux client établis</Badge>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-16 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={stat.label} className="bg-white/10 border-white/10 text-primary-foreground">
                    <CardContent className="p-6 space-y-4">
                      <div className="h-11 w-11 rounded-full bg-white/20 flex items-center justify-center">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.2em] opacity-80">{stat.label}</p>
                        <p className="text-2xl font-semibold">{stat.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-4 mb-16 animate-fade-in-up">
              <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">Sélection Inspiration Studio</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Des espaces pensés pour révéler votre marque</h2>
              <p className="text-muted-foreground text-lg">
                Nous identifions des surfaces à fort potentiel dans des zones dynamiques de Guadeloupe, avec des flux naturels de clientèle et des prestations techniques qui simplifient votre installation.
              </p>
            </div>

            <div className="space-y-12">
              {commercialListings.map((listing, index) => (
                <Card
                  key={listing.id}
                  className="overflow-hidden border border-muted/40 shadow-medium hover:shadow-large transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  <div className="grid lg:grid-cols-[2fr_3fr]">
                    <div className="relative h-72 lg:h-full">
                      <img
                        src={listing.heroImage}
                        alt={listing.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6 space-y-3 text-white">
                        <div className="flex flex-wrap items-center gap-2 text-sm font-medium">
                          <Badge className="bg-white/20 backdrop-blur">{listing.site}</Badge>
                          <Badge className="bg-white/20 backdrop-blur">{listing.area}</Badge>
                          <Badge className="bg-white/20 backdrop-blur">{listing.availability}</Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm opacity-80">
                          <Compass className="h-4 w-4" />
                          <span>{listing.address}</span>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-8 lg:p-10 flex flex-col">
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div>
                            <h3 className="text-2xl font-semibold">{listing.title}</h3>
                            <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium mt-2">
                              {listing.subtitle}
                            </p>
                          </div>
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            {listing.rent}
                          </Badge>
                        </div>

                        <p className="text-muted-foreground text-base leading-relaxed">
                          {listing.excerpt}
                        </p>

                        <Separator className="my-6" />

                        <div className="grid md:grid-cols-2 gap-4">
                          {listing.highlights.map((highlight) => (
                            <div key={highlight} className="flex items-start gap-3">
                              <div className="rounded-full bg-primary/10 p-2 text-primary">
                                <Sparkles className="h-4 w-4" />
                              </div>
                              <p className="text-sm leading-relaxed">{highlight}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-auto pt-8">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div className="flex flex-wrap gap-2">
                            {listing.tags.map((tag) => (
                              <Badge key={tag} variant="outline">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Button size="lg" asChild>
                            <Link to={`/annonces/${listing.slug}`}>Voir l'annonce</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container mx-auto px-4">
            <Card className="bg-muted/40 border-muted/40">
              <CardContent className="p-10 md:p-12 grid gap-10 md:grid-cols-[2fr_3fr]">
                <div className="space-y-4">
                  <Badge variant="secondary" className="w-fit">Accompagnement 360°</Badge>
                  <h3 className="text-3xl font-semibold">Vous cherchez un local sur-mesure ?</h3>
                  <p className="text-muted-foreground">
                    Notre équipe sourcing visite et qualifie en continu les locaux commerciaux disponibles en Guadeloupe. Confiez-nous votre cahier des charges : nous organisons les visites, analysons les conditions et négocions le bail à vos côtés.
                  </p>
                </div>
                <div className="bg-background border border-muted/40 rounded-2xl p-6 md:p-8 space-y-6">
                  <div className="grid gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Services</p>
                      <p className="text-base font-medium">Recherche dédiée, audit technique, montage financier</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Délais moyens</p>
                      <p className="text-base font-medium">45 jours entre brief et signature de bail</p>
                    </div>
                  </div>
                  <Button size="lg" className="w-full" asChild>
                    <Link to="/contact">Parler à un consultant</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BauxCommerciaux;
