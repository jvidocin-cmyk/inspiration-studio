import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MapPin, Search, Phone, Mail, ExternalLink } from "lucide-react";
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
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold">Annuaire des Enseignes</h1>
            <p className="text-xl opacity-90">
              Découvrez les entreprises et professionnels hébergés dans nos espaces
            </p>
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

      <Footer />
    </div>
  );
};

export default Annuaire;
