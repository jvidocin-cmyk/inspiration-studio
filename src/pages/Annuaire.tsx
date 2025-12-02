import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Search, Phone, Mail, ExternalLink, Users, Zap, Shield } from "lucide-react";
import { useState } from "react";

// Exemple de données d'annuaire basé sur le JSON ACF
const directory = [
  {
    id: 1,
    name: "Restaurant Le Paradis",
    logo: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80",
    sector: "Restauration",
    location: "Baie-Mahault",
    phone: "+590 5 90 11 11 11",
    email: "contact@leparadis.gp",
    website: "www.leparadis.gp",
    description: "Restaurant gastronomique créole avec terrasse panoramique",
  },
  {
    id: 2,
    name: "Cabinet Juridique Martin",
    logo: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80",
    sector: "Services B2B",
    location: "Baie-Mahault",
    phone: "+590 5 90 22 22 22",
    email: "contact@cabinet-martin.gp",
    website: "www.cabinet-martin.gp",
    description: "Conseil juridique et accompagnement des entreprises",
  },
  {
    id: 3,
    name: "Clinique Dentaire Sourire",
    logo: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&q=80",
    sector: "Santé",
    location: "Petit-Bourg",
    phone: "+590 5 90 33 33 33",
    email: "rdv@clinique-sourire.gp",
    website: "www.clinique-sourire.gp",
    description: "Soins dentaires modernes dans un cadre apaisant",
  },
  {
    id: 4,
    name: "TechCaraïbes Solutions",
    logo: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400&q=80",
    sector: "Technologie",
    location: "Baie-Mahault",
    phone: "+590 5 90 44 44 44",
    email: "info@techcaraibes.gp",
    website: "www.techcaraibes.gp",
    description: "Développement web et solutions digitales",
  },
  {
    id: 5,
    name: "Boutique Mode Tropicale",
    logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80",
    sector: "Commerce",
    location: "Petit-Bourg",
    phone: "+590 5 90 55 55 55",
    email: "contact@modetropicale.gp",
    website: "www.modetropicale.gp",
    description: "Mode et accessoires avec une touche caribéenne",
  },
  {
    id: 6,
    name: "Agence Immobilière Caraïbes",
    logo: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80",
    sector: "Immobilier",
    location: "Baie-Mahault",
    phone: "+590 5 90 66 66 66",
    email: "agence@caraibes-immo.gp",
    website: "www.caraibes-immo.gp",
    description: "Achat, vente et location de biens immobiliers",
  },
];

const Annuaire = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSector, setSelectedSector] = useState("all");

  const sectors = ["all", ...Array.from(new Set(directory.map(item => item.sector)))];

  const filteredDirectory = directory.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = selectedSector === "all" || item.sector === selectedSector;
    return matchesSearch && matchesSector;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&q=80" 
            alt="Communauté Sky Lounge"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm text-sm px-4 py-2 animate-fade-in">
            Notre Communauté Professionnelle
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in [animation-delay:100ms]">
            Annuaire des Enseignes
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 animate-fade-in [animation-delay:200ms]">
            Découvrez les entreprises et professionnels qui font vivre nos espaces. 
            Une communauté dynamique d'entrepreneurs, commerçants et experts en tous genres.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in [animation-delay:300ms]">
            {[
              { number: "50+", label: "Entreprises" },
              { number: "15", label: "Secteurs" },
              { number: "2", label: "Sites" },
              { number: "100%", label: "Satisfaits" }
            ].map((stat, idx) => (
              <div key={idx} className="text-white">
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.number}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Rejoignez Notre Écosystème
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Sky Lounge, c'est bien plus que des locaux. C'est une communauté d'entrepreneurs 
              et de professionnels qui partagent un environnement premium, des valeurs communes 
              et des opportunités de collaboration. Découvrez qui sont vos voisins !
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Users,
                title: "Networking naturel",
                description: "Rencontrez d'autres professionnels et développez votre réseau au quotidien"
              },
              {
                icon: Zap,
                title: "Synergies business",
                description: "Collaborez avec des entreprises complémentaires hébergées sur place"
              },
              {
                icon: Shield,
                title: "Visibilité accrue",
                description: "Profitez de notre annuaire en ligne pour gagner en visibilité locale"
              }
            ].map((benefit, idx) => (
              <Card 
                key={idx} 
                className="p-8 text-center border-none shadow-soft hover:shadow-medium transition-all hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 bg-muted border-b sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                type="text"
                placeholder="Rechercher une enseigne..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <select 
              className="h-12 px-4 rounded-md border bg-background"
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
            >
              {sectors.map(sector => (
                <option key={sector} value={sector}>
                  {sector === "all" ? "Tous les secteurs" : sector}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-muted-foreground">
              {filteredDirectory.length} enseigne{filteredDirectory.length > 1 ? 's' : ''} trouvée{filteredDirectory.length > 1 ? 's' : ''}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDirectory.map((item, index) => (
              <Card 
                key={item.id}
                className="overflow-hidden hover:shadow-medium transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-0">
                  {/* Logo */}
                  <div className="aspect-square bg-muted relative overflow-hidden">
                    <img 
                      src={item.logo} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white text-primary">
                        {item.sector}
                      </Badge>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-bold text-xl mb-1">{item.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{item.phone}</span>
                      </div>
                      {item.website && (
                        <a 
                          href={`https://${item.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-primary hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 flex-shrink-0" />
                          <span className="truncate">{item.website}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredDirectory.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                Aucune enseigne trouvée pour votre recherche
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Ils ont rejoint la communauté</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez pourquoi ces entreprises ont choisi Sky Lounge
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Antoine Rousseau",
                company: "Restaurant Le Paradis",
                text: "L'emplacement est stratégique et la visibilité excellente. Nos clients apprécient le parking et le cadre moderne."
              },
              {
                name: "Claire Dubois",
                company: "Cabinet Juridique Martin",
                text: "Un environnement professionnel qui inspire confiance à nos clients. Le réseau d'entreprises est un vrai plus."
              },
              {
                name: "Marc Chen",
                company: "TechCaraïbes Solutions",
                text: "Nous avons trouvé plusieurs partenaires commerciaux parmi nos voisins. La communauté est dynamique et bienveillante."
              }
            ].map((testimonial, idx) => (
              <Card key={idx} className="p-8 border-none shadow-soft">
                <div className="mb-4 text-primary text-4xl">"</div>
                <p className="text-muted-foreground mb-6 italic">{testimonial.text}</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Vous aussi, rejoignez notre communauté
            </h2>
            <p className="text-xl opacity-90">
              Installez votre entreprise dans nos espaces et bénéficiez d'un environnement 
              professionnel premium au sein d'une communauté d'affaires dynamique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-large"
                onClick={() => window.location.href = '/baux-commerciaux'}
              >
                Voir nos locaux disponibles
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm"
                onClick={() => window.location.href = '/contact'}
              >
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Annuaire;
