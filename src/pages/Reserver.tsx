import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StepIndicator from "@/components/booking/StepIndicator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarIcon, Clock, MapPin, CheckCircle2, Briefcase, Wifi, Coffee, Shield, Presentation, Monitor, Users } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

type SpaceType = "bureau" | "salle";
type SiteId = "baie-mahault" | "petit-bourg";
type FormulaId = "half-day" | "full-day" | "week";

const spaceTypes = [
  {
    id: "bureau" as SpaceType,
    name: "Bureau Privé",
    description: "Espace de travail privé et entièrement équipé pour une productivité optimale",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    features: [
      { icon: Wifi, text: "Fibre optique ultra-rapide" },
      { icon: Coffee, text: "Accès cuisine" },
      { icon: Shield, text: "Sécurité 24/7" }
    ]
  },
  {
    id: "salle" as SpaceType,
    name: "Salle de Réunion",
    description: "Salle professionnelle équipée pour réunions, formations et présentations",
    icon: Presentation,
    image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&q=80",
    features: [
      { icon: Monitor, text: "Écran 4K 65 pouces" },
      { icon: Users, text: "Visioconférence" },
      { icon: Wifi, text: "Wifi premium dédié" }
    ]
  }
];

const sites = [
  {
    id: "baie-mahault" as SiteId,
    name: "Baie-Mahault",
    address: "Immeuble Courcelles, ZAC de Houelbourg Sud",
    description: "Accès direct depuis la RN1, parking gratuit",
    available: true,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"
  },
  {
    id: "petit-bourg" as SiteId,
    name: "Petit-Bourg",
    address: "Centre d'affaires Les Alizés",
    description: "Centre-ville, transports à proximité",
    available: true,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
  }
];

const pricing: Record<SiteId, Record<SpaceType, Record<FormulaId, number>>> = {
  "baie-mahault": {
    bureau: {
      "half-day": 45,
      "full-day": 80,
      "week": 350
    },
    salle: {
      "half-day": 60,
      "full-day": 110,
      "week": 480
    }
  },
  "petit-bourg": {
    bureau: {
      "half-day": 40,
      "full-day": 75,
      "week": 330
    },
    salle: {
      "half-day": 55,
      "full-day": 100,
      "week": 450
    }
  }
};

const formulas: { id: FormulaId; label: string; description: string; duration: string }[] = [
  { id: "half-day", label: "Demi-journée", description: "Parfait pour une réunion ou session de travail", duration: "4 heures" },
  { id: "full-day", label: "Journée", description: "Idéal pour une journée complète de travail", duration: "8 heures" },
  { id: "week", label: "Semaine", description: "Solution économique pour un projet d'une semaine", duration: "5 jours ouvrés" }
];

const Reserver = () => {
  const [searchParams] = useSearchParams();
  const typeFromUrl = searchParams.get("type") as SpaceType;
  
  const [selectedType, setSelectedType] = useState<SpaceType | "">(typeFromUrl || "");
  const [selectedSite, setSelectedSite] = useState<SiteId | "">("");
  const [selectedFormula, setSelectedFormula] = useState<FormulaId | "">("");
  const [selectedDate, setSelectedDate] = useState<Date>();
  
  const currentPrice = selectedType && selectedSite && selectedFormula 
    ? pricing[selectedSite][selectedType][selectedFormula]
    : 0;
  
  const isFormValid = selectedType && selectedSite && selectedFormula && selectedDate;
  
  const selectedSpaceType = spaceTypes.find(s => s.id === selectedType);
  const selectedSiteData = sites.find(s => s.id === selectedSite);
  const selectedFormulaData = formulas.find(f => f.id === selectedFormula);
  
  const handleSubmit = () => {
    if (!isFormValid) return;
    console.log({
      type: selectedType,
      site: selectedSite,
      formula: selectedFormula,
      date: selectedDate,
      price: currentPrice
    });
  };

  const steps = [
    { number: 1, title: "Type d'espace", completed: !!selectedType, active: !selectedType },
    { number: 2, title: "Site", completed: !!selectedSite, active: !!selectedType && !selectedSite },
    { number: 3, title: "Formule", completed: !!selectedFormula, active: !!selectedSite && !selectedFormula },
    { number: 4, title: "Date", completed: !!selectedDate, active: !!selectedFormula && !selectedDate },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <Badge className="bg-white/20 text-white border-white/30 text-sm px-4 py-1.5">
              Réservation en ligne
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Réservez votre espace en 4 étapes
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Choisissez votre type d'espace, votre site, votre formule et votre date pour une réservation instantanée
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 -mt-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            
            <StepIndicator steps={steps} />
            
            <Card className={`transition-all duration-500 ${selectedType ? "border-primary/50 shadow-glow" : "shadow-medium"}`}>
              <CardHeader className="pb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Étape 1 : Type d'espace</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">Sélectionnez le type d'espace qui correspond à vos besoins</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedType} onValueChange={(value) => setSelectedType(value as SpaceType)}>
                  <div className="grid md:grid-cols-2 gap-6">
                    {spaceTypes.map((space) => {
                      const Icon = space.icon;
                      const isSelected = selectedType === space.id;
                      
                      return (
                        <Label
                          key={space.id}
                          htmlFor={space.id}
                          className={`group relative overflow-hidden rounded-xl border-2 cursor-pointer transition-all duration-300 hover-lift ${
                            isSelected
                              ? "border-primary shadow-glow"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <RadioGroupItem value={space.id} id={space.id} className="sr-only" />
                          
                          <div className="relative h-48 overflow-hidden">
                            <img 
                              src={space.image} 
                              alt={space.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                            <div className="absolute top-4 right-4">
                              <div className={`p-2 rounded-lg transition-all ${isSelected ? 'bg-primary text-white scale-110' : 'bg-white/90 text-primary'}`}>
                                <Icon className="h-5 w-5" />
                              </div>
                            </div>
                            {isSelected && (
                              <div className="absolute top-4 left-4">
                                <Badge className="bg-primary text-white shadow-lg">
                                  <CheckCircle2 className="h-3.5 w-3.5 mr-1" />
                                  Sélectionné
                                </Badge>
                              </div>
                            )}
                          </div>
                          
                          <div className="p-6 space-y-4">
                            <div>
                              <h3 className="text-xl font-bold mb-2">{space.name}</h3>
                              <p className="text-sm text-muted-foreground">{space.description}</p>
                            </div>
                            
                            <div className="space-y-2">
                              {space.features.map((feature, idx) => {
                                const FeatureIcon = feature.icon;
                                return (
                                  <div key={idx} className="flex items-center gap-2 text-sm">
                                    <FeatureIcon className="h-4 w-4 text-primary" />
                                    <span>{feature.text}</span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </Label>
                      );
                    })}
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {selectedType && (
              <Card className={`animate-slide-in-left transition-all duration-500 ${selectedSite ? "border-primary/50 shadow-glow" : "shadow-medium"}`}>
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Étape 2 : Choisissez votre site</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">Sélectionnez l'emplacement qui vous convient le mieux</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={selectedSite} onValueChange={(value) => setSelectedSite(value as SiteId)}>
                    <div className="grid md:grid-cols-2 gap-6">
                      {sites.map((site) => {
                        const isSelected = selectedSite === site.id;
                        
                        return (
                          <Label
                            key={site.id}
                            htmlFor={`site-${site.id}`}
                            className={`group relative overflow-hidden rounded-xl border-2 cursor-pointer transition-all duration-300 hover-lift ${
                              isSelected
                                ? "border-primary shadow-glow"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <RadioGroupItem value={site.id} id={`site-${site.id}`} className="sr-only" />
                            
                            <div className="relative h-40 overflow-hidden">
                              <img 
                                src={site.image} 
                                alt={site.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                              {isSelected && (
                                <div className="absolute top-3 left-3">
                                  <Badge className="bg-primary text-white shadow-lg">
                                    <CheckCircle2 className="h-3.5 w-3.5 mr-1" />
                                    Sélectionné
                                  </Badge>
                                </div>
                              )}
                            </div>
                            
                            <div className="p-5 space-y-3">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <h3 className="text-lg font-bold flex items-center gap-2">
                                    {site.name}
                                    {site.available && (
                                      <Badge variant="secondary" className="text-xs">
                                        Disponible
                                      </Badge>
                                    )}
                                  </h3>
                                  <p className="text-sm text-muted-foreground mt-1">{site.address}</p>
                                </div>
                              </div>
                              <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                                <MapPin className="h-3.5 w-3.5" />
                                {site.description}
                              </p>
                            </div>
                          </Label>
                        );
                      })}
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
            )}

            {selectedSite && selectedType && (
              <Card className={`animate-slide-in-left transition-all duration-500 ${selectedFormula ? "border-primary/50 shadow-glow" : "shadow-medium"}`}>
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-primary/10">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Étape 3 : Choisissez votre formule</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">Sélectionnez la durée adaptée à vos besoins</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={selectedFormula} onValueChange={(value) => setSelectedFormula(value as FormulaId)}>
                    <div className="space-y-4">
                      {formulas.map((formula) => {
                        const price = pricing[selectedSite][selectedType][formula.id];
                        const isSelected = selectedFormula === formula.id;
                        
                        return (
                          <Label
                            key={formula.id}
                            htmlFor={`formula-${formula.id}`}
                            className={`group flex items-center justify-between p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover-lift ${
                              isSelected
                                ? "border-primary bg-primary/5 shadow-glow"
                                : "border-border hover:border-primary/50 hover:bg-muted/50"
                            }`}
                          >
                            <div className="flex items-center gap-5 flex-1">
                              <RadioGroupItem value={formula.id} id={`formula-${formula.id}`} className="mt-1" />
                              <div className="flex-1 space-y-1.5">
                                <div className="flex items-center gap-3">
                                  <h4 className="text-lg font-bold">{formula.label}</h4>
                                  <Badge variant="outline" className="text-xs">
                                    {formula.duration}
                                  </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">{formula.description}</p>
                              </div>
                            </div>
                            <div className="text-right ml-6">
                              <div className={`text-3xl font-bold transition-colors ${isSelected ? 'text-primary' : 'text-foreground'}`}>
                                {price}€
                              </div>
                              {formula.id === "week" && (
                                <div className="text-xs text-muted-foreground mt-1">
                                  {Math.round(price / 5)}€ / jour
                                </div>
                              )}
                            </div>
                          </Label>
                        );
                      })}
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
            )}

            {selectedFormula && (
              <Card className={`animate-slide-in-left transition-all duration-500 ${selectedDate ? "border-primary/50 shadow-glow" : "shadow-medium"}`}>
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-primary/10">
                      <CalendarIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Étape 4 : Sélectionnez votre date</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">Choisissez la date de début de votre réservation</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center gap-6">
                    <div className="w-full max-w-md">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date()}
                        locale={fr}
                        className="rounded-xl border shadow-soft mx-auto"
                      />
                    </div>
                    {selectedDate && (
                      <div className="w-full max-w-md p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl border border-primary/20 text-center animate-scale-in">
                        <p className="text-sm text-muted-foreground mb-2">Date sélectionnée</p>
                        <p className="text-2xl font-bold text-primary">
                          {format(selectedDate, "EEEE d MMMM yyyy", { locale: fr })}
                        </p>
                        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span>Disponible</span>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {isFormValid && (
              <Card className="animate-scale-in border-2 border-primary/20 shadow-large bg-gradient-to-br from-background via-primary/5 to-secondary/5">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 rounded-xl bg-primary text-white">
                      <CheckCircle2 className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">Récapitulatif de votre réservation</h3>
                      <p className="text-muted-foreground mt-1">Vérifiez les détails avant de confirmer</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {selectedSpaceType && (
                      <div className="p-5 rounded-xl bg-background border border-border hover-lift transition-smooth">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <Briefcase className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-sm font-medium text-muted-foreground">Type d'espace</span>
                        </div>
                        <p className="text-xl font-bold">{selectedSpaceType.name}</p>
                      </div>
                    )}
                    
                    {selectedSiteData && (
                      <div className="p-5 rounded-xl bg-background border border-border hover-lift transition-smooth">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <MapPin className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-sm font-medium text-muted-foreground">Site</span>
                        </div>
                        <p className="text-xl font-bold">{selectedSiteData.name}</p>
                      </div>
                    )}
                    
                    {selectedFormulaData && (
                      <div className="p-5 rounded-xl bg-background border border-border hover-lift transition-smooth">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <Clock className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-sm font-medium text-muted-foreground">Formule</span>
                        </div>
                        <p className="text-xl font-bold">{selectedFormulaData.label}</p>
                        <p className="text-sm text-muted-foreground mt-1">{selectedFormulaData.duration}</p>
                      </div>
                    )}
                    
                    {selectedDate && (
                      <div className="p-5 rounded-xl bg-background border border-border hover-lift transition-smooth">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <CalendarIcon className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-sm font-medium text-muted-foreground">Date de début</span>
                        </div>
                        <p className="text-xl font-bold">{format(selectedDate, "d MMMM yyyy", { locale: fr })}</p>
                      </div>
                    )}
                  </div>

                  <div className="p-8 bg-gradient-to-br from-primary to-secondary text-white rounded-2xl mb-8 shadow-large relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]" />
                    <div className="relative z-10 flex items-center justify-between">
                      <div>
                        <p className="text-lg opacity-90 mb-1">Total à payer</p>
                        <p className="text-xs opacity-75">Paiement sécurisé par carte bancaire</p>
                      </div>
                      <div className="text-right">
                        <p className="text-5xl font-bold">
                          {currentPrice}€
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full h-14 text-lg font-semibold shadow-large hover:shadow-glow transition-all duration-300 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90" 
                    onClick={handleSubmit}
                  >
                    Confirmer et procéder au paiement
                    <CheckCircle2 className="ml-2 h-5 w-5" />
                  </Button>
                  
                  <div className="flex items-center justify-center gap-3 mt-6 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4" />
                    <span>Paiement 100% sécurisé • Confirmation immédiate par email</span>
                  </div>
                </CardContent>
              </Card>
            )}

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reserver;
