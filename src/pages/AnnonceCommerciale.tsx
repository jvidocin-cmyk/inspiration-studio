import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { commercialListings, findListingBySlug } from "@/data/commercial-listings";
import { ArrowLeft, CheckCircle2, MapPin, Sparkles } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const AnnonceIntrouvable = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-32 pb-24">
      <div className="container mx-auto px-4 text-center space-y-6 max-w-2xl">
        <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/20">
          Annonce indisponible
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold">Cette annonce n'existe plus</h1>
        <p className="text-muted-foreground">
          Le local que vous recherchez n'est plus disponible ou son URL a été modifiée. Découvrez nos autres baux commerciaux disponibles dès maintenant.
        </p>
        <div className="flex justify-center">
          <Button size="lg" asChild>
            <Link to="/baux-commerciaux">Voir les annonces disponibles</Link>
          </Button>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

const AnnonceCommerciale = () => {
  const { slug } = useParams<{ slug: string }>();
  const listing = slug ? findListingBySlug(slug) : undefined;

  if (!listing) {
    return <AnnonceIntrouvable />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="relative overflow-hidden text-primary-foreground">
          <div className="absolute inset-0">
            <img
              src={listing.heroImage}
              alt={listing.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/10" />
          </div>

          <div className="container mx-auto px-4 pt-32 pb-24 relative">
            <div className="flex flex-col gap-6 max-w-4xl animate-fade-in-up">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="secondary" className="bg-white/10">{listing.leaseType}</Badge>
                <Badge variant="secondary" className="bg-white/10">{listing.availability}</Badge>
                <Badge variant="secondary" className="bg-white/10">{listing.area}</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">{listing.title}</h1>
              <p className="text-xl opacity-90">{listing.subtitle}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{listing.address}</span>
                </div>
                <Separator orientation="vertical" className="h-5 bg-white/30" />
                <span>{listing.site}</span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="bg-white text-primary">{listing.rent}</Badge>
                <Badge variant="outline" className="border-white/30 text-white/90">Charges : {listing.charges}</Badge>
                <Badge variant="outline" className="border-white/30 text-white/90">Dépôt : {listing.deposit}</Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="-mt-20 pb-20">
          <div className="container mx-auto px-4">
            <Card className="border-0 shadow-large">
              <CardContent className="p-6 md:p-10">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <Button variant="ghost" size="sm" className="gap-2" asChild>
                    <Link to="/baux-commerciaux">
                      <ArrowLeft className="h-4 w-4" /> Retour aux annonces
                    </Link>
                  </Button>
                  <div className="flex flex-wrap gap-2">
                    {listing.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator className="my-8" />

                <div className="grid md:grid-cols-3 gap-6">
                  {listing.keyFacts.map((fact) => (
                    <div key={fact.label} className="bg-muted/40 rounded-xl p-4">
                      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{fact.label}</p>
                      <p className="text-lg font-semibold mt-2">{fact.value}</p>
                    </div>
                  ))}
                </div>

                <Separator className="my-8" />

                <div className="grid lg:grid-cols-[3fr_2fr] gap-10">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-semibold">L'espace en détail</h2>
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {listing.description}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h3 className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Points forts</h3>
                        <div className="space-y-3">
                          {listing.highlights.map((item) => (
                            <div key={item} className="flex items-start gap-3">
                              <div className="rounded-full bg-primary/10 p-2 text-primary">
                                <Sparkles className="h-4 w-4" />
                              </div>
                              <p className="text-sm leading-relaxed">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Prestations incluses</h3>
                        <div className="space-y-3">
                          {listing.amenities.map((item) => (
                            <div key={item} className="flex items-start gap-3">
                              <div className="rounded-full bg-secondary/10 p-2 text-secondary-foreground">
                                <CheckCircle2 className="h-4 w-4" />
                              </div>
                              <p className="text-sm leading-relaxed">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-6">
                      <h3 className="text-lg font-semibold">Prêt à visiter ?</h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        Contactez nos consultants pour organiser une visite et obtenir le dossier complet (plans, diagnostics, détails du bail).
                      </p>
                      <div className="space-y-3 text-sm mt-6">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                            IS
                          </div>
                          <div>
                            <p className="font-medium">Inspiration Studio</p>
                            <p className="text-muted-foreground">Pôle Retail & Baux</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground">Tél. +590 590 00 00 00</p>
                        <p className="text-muted-foreground">baux@inspirationstudio.fr</p>
                      </div>
                      <Button size="lg" className="mt-6 w-full" asChild>
                        <Link to={`/contact?subject=${encodeURIComponent(`Annonce ${listing.id}`)}`}>
                          Demander une visite
                        </Link>
                      </Button>
                    </div>

                    <div className="bg-muted/40 border border-muted/40 rounded-2xl p-6 space-y-4">
                      <h3 className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Environnement immédiat</h3>
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        {listing.surroundings.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <Separator className="my-10" />

                <div>
                  <h2 className="text-2xl font-semibold mb-6">Visitez en images</h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    {listing.gallery.map((image) => (
                      <div key={image} className="relative h-56 md:h-64 overflow-hidden rounded-xl">
                        <img src={image} alt={listing.title} className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="pb-24">
          <div className="container mx-auto px-4">
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-10 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="space-y-3 max-w-xl">
                  <h3 className="text-2xl font-semibold">Vous hésitez entre plusieurs annonces ?</h3>
                  <p className="text-muted-foreground">
                    Nous vous aidons à comparer les conditions financières, analyser les flux et anticiper les aménagements nécessaires pour sécuriser votre décision.
                  </p>
                </div>
                <Button size="lg" asChild>
                  <Link to="/baux-commerciaux">Découvrir les autres locaux</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AnnonceCommerciale;
