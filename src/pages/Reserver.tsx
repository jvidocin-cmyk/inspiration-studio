import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Building2, Calendar as CalendarIcon, Clock, MapPin, CheckCircle2, Briefcase } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

type SpaceType = "bureau" | "salle";
type SiteId = "baie-mahault" | "petit-bourg";
type FormulaId = "half-day" | "full-day" | "week";

const spaceTypes = [
  {
    id: "bureau" as SpaceType,
    name: "Bureau Privé",
    description: "Espace de travail privé et équipé",
    icon: Briefcase
  },
  {
    id: "salle" as SpaceType,
    name: "Salle de Réunion",
    description: "Espace de réunion professionnel",
    icon: Building2
  }
];

const sites = [
  {
    id: "baie-mahault" as SiteId,
    name: "Baie-Mahault",
    address: "Immeuble Courcelles, ZAC de Houelbourg Sud",
    available: true
  },
  {
    id: "petit-bourg" as SiteId,
    name: "Petit-Bourg",
    address: "Centre d'affaires Les Alizés",
    available: true
  }
];

// Prix variables par site et type d'espace
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

const formulas: { id: FormulaId; label: string; description: string }[] = [
  { id: "half-day", label: "Demi-journée", description: "4 heures d'utilisation" },
  { id: "full-day", label: "Journée", description: "8 heures d'utilisation" },
  { id: "week", label: "Semaine", description: "5 jours ouvrés" }
];

const Reserver = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
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
    
    // TODO: Rediriger vers le paiement ou confirmation
    console.log({
      type: selectedType,
      site: selectedSite,
      formula: selectedFormula,
      date: selectedDate,
      price: currentPrice
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Réserver votre Espace
            </h1>
            <p className="text-lg opacity-90">
              Bureau privé ou salle de réunion - Choisissez votre site, formule et date en quelques clics
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Step 1: Type Selection */}
            <Card className={selectedType ? "border-primary shadow-soft" : ""}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  1. Type d'espace
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedType} onValueChange={(value) => setSelectedType(value as SpaceType)}>
                  <div className="grid md:grid-cols-2 gap-4">
                    {spaceTypes.map((space) => {
                      const Icon = space.icon;
                      return (
                        <Label
                          key={space.id}
                          htmlFor={space.id}
                          className={`flex items-start gap-4 p-6 rounded-lg border-2 cursor-pointer transition-all ${
                            selectedType === space.id
                              ? "border-primary bg-primary/5 shadow-soft"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <RadioGroupItem value={space.id} id={space.id} className="mt-1" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Icon className="h-5 w-5 text-primary" />
                              <span className="font-semibold text-lg">{space.name}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{space.description}</p>
                          </div>
                        </Label>
                      );
                    })}
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Step 2: Site Selection */}
            {selectedType && (
              <Card className={`animate-fade-in ${selectedSite ? "border-primary shadow-soft" : ""}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    2. Choisissez votre site
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={selectedSite} onValueChange={(value) => setSelectedSite(value as SiteId)}>
                    <div className="grid md:grid-cols-2 gap-4">
                      {sites.map((site) => (
                        <Label
                          key={site.id}
                          htmlFor={`site-${site.id}`}
                          className={`flex items-start gap-4 p-6 rounded-lg border-2 cursor-pointer transition-all ${
                            selectedSite === site.id
                              ? "border-primary bg-primary/5 shadow-soft"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <RadioGroupItem value={site.id} id={`site-${site.id}`} className="mt-1" />
                          <div className="flex-1">
                            <div className="font-semibold text-lg flex items-center gap-2">
                              {site.name}
                              {site.available && (
                                <Badge variant="secondary" className="text-xs">
                                  Disponible
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{site.address}</p>
                          </div>
                        </Label>
                      ))}
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Formula Selection */}
            {selectedSite && selectedType && (
              <Card className={`animate-fade-in ${selectedFormula ? "border-primary shadow-soft" : ""}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    3. Choisissez votre formule
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={selectedFormula} onValueChange={(value) => setSelectedFormula(value as FormulaId)}>
                    <div className="space-y-3">
                      {formulas.map((formula) => {
                        const price = pricing[selectedSite][selectedType][formula.id];
                        return (
                          <Label
                            key={formula.id}
                            htmlFor={`formula-${formula.id}`}
                            className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all ${
                              selectedFormula === formula.id
                                ? "border-primary bg-primary/5 shadow-soft"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <div className="flex items-center gap-4">
                              <RadioGroupItem value={formula.id} id={`formula-${formula.id}`} />
                              <div>
                                <div className="font-semibold">{formula.label}</div>
                                <div className="text-sm text-muted-foreground">{formula.description}</div>
                              </div>
                            </div>
                            <div className="text-2xl font-bold text-primary">
                              {price}€
                            </div>
                          </Label>
                        );
                      })}
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
            )}

            {/* Step 4: Date Selection */}
            {selectedFormula && (
              <Card className={`animate-fade-in ${selectedDate ? "border-primary shadow-soft" : ""}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5 text-primary" />
                    4. Sélectionnez votre date
                  </CardTitle>
                </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date()}
                    locale={fr}
                    className="rounded-md border"
                  />
                </div>
                {selectedDate && (
                  <div className="mt-4 p-4 bg-primary/5 rounded-lg text-center">
                    <p className="text-sm text-muted-foreground">Date sélectionnée</p>
                    <p className="text-lg font-semibold">
                      {format(selectedDate, "EEEE d MMMM yyyy", { locale: fr })}
                    </p>
                  </div>
                )}
                </CardContent>
              </Card>
            )}

            {/* Summary & Submit */}
            {isFormValid && (
              <Card className="animate-fade-in bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 shadow-medium">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Récapitulatif de votre réservation</h3>
                  
                  <div className="space-y-4 mb-6">
                    {selectedSpaceType && (
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>
                          Type : <strong>{selectedSpaceType.name}</strong>
                        </span>
                      </div>
                    )}
                    
                    {selectedSiteData && (
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>
                          Site : <strong>{selectedSiteData.name}</strong>
                        </span>
                      </div>
                    )}
                    
                    {selectedFormulaData && (
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>
                          Formule : <strong>{selectedFormulaData.label}</strong>
                        </span>
                      </div>
                    )}
                    
                    {selectedDate && (
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>
                          Date : <strong>{format(selectedDate, "d MMMM yyyy", { locale: fr })}</strong>
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between p-6 bg-white dark:bg-sky-navy-dark rounded-lg mb-6 shadow-soft">
                    <span className="text-lg font-semibold">Total à payer</span>
                    <span className="text-3xl font-bold text-primary">
                      {currentPrice}€
                    </span>
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full shadow-medium hover:shadow-large transition-shadow" 
                    onClick={handleSubmit}
                  >
                    Confirmer et payer
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Paiement sécurisé par carte bancaire
                  </p>
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
