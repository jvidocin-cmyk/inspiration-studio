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
import { Building2, Calendar as CalendarIcon, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const sites = [
  {
    id: "baie-mahault",
    name: "Baie-Mahault",
    address: "Immeuble Courcelles, ZAC de Houelbourg Sud",
    available: true
  },
  {
    id: "petit-bourg",
    name: "Petit-Bourg",
    address: "Centre d'affaires Les Alizés",
    available: true
  }
];

const formulas = {
  bureau: [
    { id: "half-day", label: "Demi-journée", price: 45, description: "4 heures d'utilisation" },
    { id: "full-day", label: "Journée", price: 80, description: "8 heures d'utilisation" },
    { id: "week", label: "Semaine", price: 350, description: "5 jours ouvrés" }
  ],
  salle: [
    { id: "half-day", label: "Demi-journée", price: 60, description: "4 heures d'utilisation" },
    { id: "full-day", label: "Journée", price: 110, description: "8 heures d'utilisation" },
    { id: "week", label: "Semaine", price: 480, description: "5 jours ouvrés" }
  ]
};

const Reserver = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const type = searchParams.get("type") as "bureau" | "salle" || "bureau";
  
  const [selectedSite, setSelectedSite] = useState("");
  const [selectedFormula, setSelectedFormula] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>();
  
  const currentFormulas = formulas[type];
  const selectedFormulaData = currentFormulas.find(f => f.id === selectedFormula);
  
  const isFormValid = selectedSite && selectedFormula && selectedDate;
  
  const handleSubmit = () => {
    if (!isFormValid) return;
    
    // TODO: Rediriger vers le paiement ou confirmation
    console.log({
      type,
      site: selectedSite,
      formula: selectedFormula,
      date: selectedDate,
      price: selectedFormulaData?.price
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
              Réserver {type === "bureau" ? "un Bureau" : "une Salle de Réunion"}
            </h1>
            <p className="text-lg opacity-90">
              Choisissez votre site, votre formule et vos dates en quelques clics
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Step 1: Site Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  1. Choisissez votre site
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedSite} onValueChange={setSelectedSite}>
                  <div className="grid md:grid-cols-2 gap-4">
                    {sites.map((site) => (
                      <Label
                        key={site.id}
                        htmlFor={site.id}
                        className={`flex items-start gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          selectedSite === site.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <RadioGroupItem value={site.id} id={site.id} className="mt-1" />
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

            {/* Step 2: Formula Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  2. Choisissez votre formule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedFormula} onValueChange={setSelectedFormula}>
                  <div className="space-y-3">
                    {currentFormulas.map((formula) => (
                      <Label
                        key={formula.id}
                        htmlFor={formula.id}
                        className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          selectedFormula === formula.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <RadioGroupItem value={formula.id} id={formula.id} />
                          <div>
                            <div className="font-semibold">{formula.label}</div>
                            <div className="text-sm text-muted-foreground">{formula.description}</div>
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-primary">
                          {formula.price}€
                        </div>
                      </Label>
                    ))}
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Step 3: Date Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-primary" />
                  3. Sélectionnez votre date
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

            {/* Summary & Submit */}
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Récapitulatif</h3>
                
                <div className="space-y-4 mb-6">
                  {selectedSite && (
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>
                        Site : <strong>{sites.find(s => s.id === selectedSite)?.name}</strong>
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

                {selectedFormulaData && (
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg mb-6">
                    <span className="text-lg font-semibold">Total à payer</span>
                    <span className="text-3xl font-bold text-primary">
                      {selectedFormulaData.price}€
                    </span>
                  </div>
                )}

                <Button 
                  size="lg" 
                  className="w-full" 
                  disabled={!isFormValid}
                  onClick={handleSubmit}
                >
                  Confirmer et payer
                </Button>
                
                <p className="text-xs text-center text-muted-foreground mt-4">
                  Paiement sécurisé par carte bancaire
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reserver;
