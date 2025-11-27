import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { commercialListings } from "@/data/commercial-listings";
import { Building2, Compass, Sparkles, Square, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import CommercialContactSheet from "@/components/contact/CommercialContactSheet";

const stats = [
  {
    icon: Building2,
    label: "Patrimoine géré",
    value: "3 sites premium",
  },
  {
    icon: Square,
    label: "Locaux disponibles",
    value: `${commercialListings.length} espaces`,
  },
  {
    icon: MapPin,
    label: "Emplacements",
    value: "Zones stratégiques",
  },
  {
    icon: Compass,
    label: "Accompagnement",
    value: "Installation clés en main",
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
              <Badge variant="secondary" className="uppercase tracking-[0.3em]">Notre patrimoine commercial</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Nos locaux commerciaux en Guadeloupe
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Sky Lounge possède et gère un patrimoine d'immeubles commerciaux situés sur des emplacements stratégiques en Guadeloupe. Locaux livrés équipés, visibilité maximale et accompagnement personnalisé pour réussir votre implantation.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-white/10">Propriétaire & gestionnaire</Badge>
                <Badge className="bg-white/10">Espaces premium</Badge>
                <Badge className="bg-white/10">Accompagnement dédié</Badge>
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
              <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">Nos locaux disponibles</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Des espaces conçus pour votre réussite</h2>
              <p className="text-muted-foreground text-lg">
                Chaque local de notre patrimoine bénéficie d'un emplacement premium, d'équipements modernes et d'un accompagnement personnalisé. Contactez-nous pour échanger sur votre projet et obtenir les conditions tarifaires adaptées.
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
                        <div className="space-y-3">
                          <h3 className="text-2xl font-semibold">{listing.title}</h3>
                          <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium">
                            {listing.subtitle}
                          </p>
                          <Badge variant="secondary" className="bg-primary/10 text-primary w-fit">
                            {listing.availability}
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
                          <div className="flex gap-3">
                            <Button size="lg" variant="outline" asChild>
                              <Link to={`/annonces/${listing.slug}`}>Voir les détails</Link>
                            </Button>
                            <CommercialContactSheet listingTitle={listing.title} listingId={listing.id}>
                              <Button size="lg">Nous contacter</Button>
                            </CommercialContactSheet>
                          </div>
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
            <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20">
              <CardContent className="p-10 md:p-12 grid gap-10 md:grid-cols-[2fr_3fr]">
                <div className="space-y-4">
                  <Badge variant="secondary" className="w-fit bg-primary/20 text-primary">Un projet d'implantation ?</Badge>
                  <h3 className="text-3xl font-semibold">Parlons de votre projet commercial</h3>
                  <p className="text-muted-foreground">
                    En tant que propriétaire et gestionnaire, nous accompagnons nos locataires dans toutes les étapes : de la visite à l'installation, en passant par l'étude de faisabilité et l'aménagement sur-mesure.
                  </p>
                  <div className="grid gap-3 pt-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-2 text-primary">
                        <Sparkles className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">Visite personnalisée</p>
                        <p className="text-sm text-muted-foreground">Découvrez nos locaux avec un expert</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-2 text-primary">
                        <Sparkles className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">Tarification adaptée</p>
                        <p className="text-sm text-muted-foreground">Conditions sur-mesure selon votre activité</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-2 text-primary">
                        <Sparkles className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">Installation facilitée</p>
                        <p className="text-sm text-muted-foreground">Aménagements et accompagnement inclus</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-background border border-muted/40 rounded-2xl p-6 md:p-8 flex flex-col justify-center space-y-6">
                  <div className="space-y-4 text-center">
                    <h4 className="text-xl font-semibold">Contactez notre équipe</h4>
                    <p className="text-sm text-muted-foreground">
                      Remplissez le formulaire pour recevoir toutes les informations sur nos locaux disponibles et échanger sur vos besoins spécifiques.
                    </p>
                  </div>
                  <CommercialContactSheet>
                    <Button size="lg" className="w-full">Demander des informations</Button>
                  </CommercialContactSheet>
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
