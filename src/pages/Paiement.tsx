import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  CreditCard, 
  Lock, 
  Shield, 
  Calendar, 
  MapPin, 
  Clock,
  Building2,
  Users,
  ArrowLeft,
  CheckCircle2
} from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const Paiement = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  // Mock data for demonstration - in real app this comes from location.state
  const bookingData = location.state || {
    spaceType: "bureau-prive",
    spaceLabel: "Bureau Privé",
    site: "baie-mahault",
    siteLabel: "Baie-Mahault",
    siteAddress: "ZAC de Houelbourg, 97122 Baie-Mahault",
    formula: "journee",
    formulaLabel: "Journée",
    date: new Date(),
    price: 75,
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      navigate("/paiement-succes", { state: bookingData });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Back button */}
          <button 
            onClick={() => navigate("/reserver")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Retour à la réservation</span>
          </button>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left Column - Payment Form */}
            <div className="lg:col-span-3 space-y-8">
              {/* Header */}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  Finaliser votre réservation
                </h1>
                <p className="text-muted-foreground">
                  Complétez vos informations pour confirmer votre espace de travail
                </p>
              </div>

              {/* Contact Information */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-foreground">Vos coordonnées</h2>
                      <p className="text-sm text-muted-foreground">Informations de contact</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input 
                        id="firstName" 
                        placeholder="Jean" 
                        className="h-12 bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Dupont" 
                        className="h-12 bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="jean.dupont@email.com" 
                        className="h-12 bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="0590 XX XX XX" 
                        className="h-12 bg-background/50"
                      />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <Label htmlFor="company">Société (optionnel)</Label>
                      <Input 
                        id="company" 
                        placeholder="Nom de votre entreprise" 
                        className="h-12 bg-background/50"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-foreground">Paiement sécurisé</h2>
                      <p className="text-sm text-muted-foreground">Paiement par carte bancaire</p>
                    </div>
                  </div>

                  {/* Stripe Elements Placeholder */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Numéro de carte</Label>
                      <div className="relative">
                        <Input 
                          id="cardNumber" 
                          placeholder="4242 4242 4242 4242" 
                          className="h-12 bg-background/50 pr-12"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                          <img src="https://js.stripe.com/v3/fingerprinted/img/visa-729c05c240c4bdb47b03ac81d9945bfe.svg" alt="Visa" className="h-6" />
                          <img src="https://js.stripe.com/v3/fingerprinted/img/mastercard-4d8844094130711885b5e41b28c9848f.svg" alt="Mastercard" className="h-6" />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Date d'expiration</Label>
                        <Input 
                          id="expiry" 
                          placeholder="MM / AA" 
                          className="h-12 bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input 
                          id="cvc" 
                          placeholder="123" 
                          className="h-12 bg-background/50"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Security badges */}
                  <div className="flex items-center gap-4 mt-6 pt-6 border-t border-border/50">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Lock className="w-4 h-4" />
                      <span>Connexion sécurisée SSL</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="w-4 h-4" />
                      <span>Paiement sécurisé Stripe</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Terms */}
              <div className="flex items-start gap-3">
                <Checkbox 
                  id="terms" 
                  checked={acceptTerms}
                  onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                />
                <label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  J'accepte les{" "}
                  <a href="/cgv" className="text-primary hover:underline">conditions générales de vente</a>
                  {" "}et la{" "}
                  <a href="/politique-confidentialite" className="text-primary hover:underline">politique de confidentialité</a>
                </label>
              </div>

              {/* Pay Button */}
              <Button 
                onClick={handlePayment}
                disabled={!acceptTerms || isProcessing}
                className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {isProcessing ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    <span>Traitement en cours...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Lock className="w-5 h-5" />
                    <span>Payer {bookingData.price}€</span>
                  </div>
                )}
              </Button>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-28">
                <Card className="border-border/50 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm overflow-hidden">
                  {/* Header with image */}
                  <div className="relative h-40 bg-gradient-to-br from-sky-600 to-sky-800">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=600')] bg-cover bg-center opacity-30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Building2 className="w-12 h-12 mx-auto mb-2 opacity-90" />
                        <h3 className="text-xl font-bold">{bookingData.spaceLabel}</h3>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4">Récapitulatif</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-foreground">{bookingData.siteLabel}</p>
                            <p className="text-sm text-muted-foreground">{bookingData.siteAddress}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-foreground">{bookingData.formulaLabel}</p>
                            <p className="text-sm text-muted-foreground">Formule sélectionnée</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Calendar className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-foreground">
                              {format(bookingData.date, "EEEE d MMMM yyyy", { locale: fr })}
                            </p>
                            <p className="text-sm text-muted-foreground">Date de début</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator className="bg-border/50" />

                    {/* Price breakdown */}
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{bookingData.spaceLabel} - {bookingData.formulaLabel}</span>
                        <span className="text-foreground">{bookingData.price}€</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">TVA (20%)</span>
                        <span className="text-foreground">Incluse</span>
                      </div>
                    </div>

                    <Separator className="bg-border/50" />

                    {/* Total */}
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-foreground">Total TTC</span>
                      <span className="text-2xl font-bold text-primary">{bookingData.price}€</span>
                    </div>

                    {/* Guarantees */}
                    <div className="bg-primary/5 rounded-lg p-4 space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span className="text-foreground">Confirmation immédiate</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span className="text-foreground">Annulation gratuite 48h avant</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span className="text-foreground">Accès WiFi haut débit inclus</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Paiement;
